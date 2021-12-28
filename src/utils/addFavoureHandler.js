const addFavoureHandler = (e, item, user, setWatchingUser) => {
   fetch(`http://localhost:3050/items/${item._id}/watching`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": user.authToken
        }
    })
        .then(res => res.json())
        .then(resJson => {
            setWatchingUser(resJson.watchingUser.length)
        })
}
export default addFavoureHandler