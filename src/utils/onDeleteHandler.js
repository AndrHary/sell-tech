
const onDeleteHandler = (item, user, history) => {
    fetch(`http://localhost:3050/items/${item._id}/delete`, {
        method: 'POST'
    })
    .then(res => res.json())
    .then(resJson => {
        if (resJson.res == 'deleted') {
            history.push(`/users/${user._id}/profile`)
        }
    })
}
export default onDeleteHandler