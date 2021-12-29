function createComment(ownerId, creatorId, content, createdFor, creatorUsername) {
   return fetch('http://localhost:3050/comments/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ownerId,
            creatorId,
            content,
            createdFor,
            creatorUsername
        })
    })
    .then(res => res.json())
}
export default createComment