import postImage from "./postImage"
import editItem from "./editItem"
const editSubmitHandler = (e, user, params, image, history, setIsLoading) => {
    e.preventDefault()
    setIsLoading(true)
    if (image) {
        let fData = new FormData()
    postImage(fData, image)
        .then(data => {
            let formData = new FormData(e.target)
            editItem(formData, user, data, params.itemId)
                .then(resJson => {
                    console.log(resJson)
                    history.push(`/items/${params.itemId}/details`)
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                })
        })
    } else {
        let formData = new FormData(e.target)
            editItem(formData, user, undefined, params.itemId)
                .then(resJson => {
                    console.log(resJson)
                    history.push(`/items/${params.itemId}/details`)
                    setIsLoading(false)
                })
                .catch(err => {
                    console.log(err)
                })
                
    }
}
export default editSubmitHandler