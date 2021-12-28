import { useState } from "react"
import createComment from "../../utils/createComment"

function CreateCommentComponent({ownerId, itemId, creatorId}) {
    const [comment, setComment] = useState('')
    const changeHandler = (e) => {
        setComment(e.target.value)
    }
    const commentSubmitHandler = (e) => {
        e.preventDefault()
        createComment(creatorId, ownerId, comment, itemId)
        .then(res => {
           setComment('')
        })
        .catch(err => {
            console.log(err)
        })

    }
    return (
        <form className="desc-cont" onSubmit={commentSubmitHandler}>
            <h3>Feedback:</h3>
            <div className="description-container">
                <textarea type="text" value={comment} onChange={changeHandler} placeholder="Leave your feedback for the author here..."></textarea>
            </div>
            <button type="submit">Post</button>
        </form>
    )
}
export default CreateCommentComponent