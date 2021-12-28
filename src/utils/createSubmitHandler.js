import createItem from "./createItem"
import postImage from "./postImage"
const createSubmitHandler = (e, setIsLoading, image, user, history) => {
    setIsLoading(true)
    e.preventDefault()
    if (image) {
        const fData = new FormData()
        postImage(fData, image)
            .then(data => {
                const formData = new FormData(e.target)
                createItem(formData, user, data)
                    .then(item => {
                        history.push(`/items/newest-items`)
                        setIsLoading(false)
                    })
            })
    } else {
        const formData = new FormData(e.target)
        createItem(formData, user, undefined)
            .then(item => {
                history.push(`/items/newest-items`)
                setIsLoading(false)
            })
    }
}
export default createSubmitHandler