import EditFormComponent from "./EditFormComponent"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import LoadingSpinnerComponent from "../LoadingSpinnerComponent/LoadingSpinnerComponent"
import { itemContext } from "../../contexts/itemContext"
const EditComponent = () => {
    const params = useParams()
    const [item, setItem] = useState({})
    const [image, setImage] = useState({})
    const [isLoading, setIsLoading] = useState(true)

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
                            <EditFormComponent image={image} settingImage={settingImage} submitHandler={() => console.log('I am here ')} />
                        </div>
                    </section>

                </>
                : null}
        </itemContext.Provider>

    )
}
export default EditComponent