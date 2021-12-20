import EditFormComponent from "./EditFormComponent"
import { useState, useEffect, useContext } from "react"
import { useParams, useHistory } from "react-router-dom"
import LoadingSpinnerComponent from "../LoadingSpinnerComponent/LoadingSpinnerComponent"
import { itemContext } from "../../contexts/itemContext"
import postImage from "../../utils/postImage"
import editItem from "../../utils/editItem"
import { authContext } from "../../contexts/authContext"
const EditComponent = () => {
    const params = useParams()
    const user = useContext(authContext)
    const [item, setItem] = useState({})
    const [image, setImage] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()
    useEffect(() => {
        fetch(`http://localhost:3050/items/${params.itemId}/edit`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                setIsLoading(false)
            })
    }, [])
    const settingImage = (file) => {
        setImage(file)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        let fData = new FormData()
        postImage(fData, image)
        .then(data => {
            console.log(data)
            let formData = new FormData(e.target)
            editItem(formData, user, data, params.itemId)
            .then(resJson => {
                history.push(`/items/${params.itemId}/details`)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
        })
    }
    return (

        <itemContext.Provider value={item}>
            {item ?
                <>
                    <div className="circle"></div>
                    <div className="second-circle"></div>
                    <section id="create-item">
                        {isLoading ? <LoadingSpinnerComponent /> : null}
                        <div className="create-container">
                            <div className="choose-category-container">
                                <h2>Sell now with 3 clicks!</h2>
                            </div>
                            <EditFormComponent image={image} settingImage={settingImage} submitHandler={submitHandler} />
                        </div>
                    </section>

                </>
                : null}
        </itemContext.Provider>

    )
}
export default EditComponent