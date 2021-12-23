
const onDeleteHandler = (item, user, history) => {
    fetch(`http://localhost:3050/items/${item._id}/delete`, {
        method: 'POST'
    })
    .then(res => res.json())
    .then(resJson => {
        if (resJson.res == 'deleted') {
            console.log(resJson)
            history.push(`/items/newest-items`)
        }
    })
}
export default onDeleteHandler