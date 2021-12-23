const userValidationError = (err) => {
    let errorArr = []
     if (err.includes('User validation failed: ')) {
        errorArr = err.split('User validation failed: ')[1]
        errorArr = errorArr.split(',')
        errorArr = errorArr.map((x) => x.split(':')[1])
     } 
     if (err === 'Passwords must be identical!') {
         errorArr.push(err)
     }
     return errorArr
}
export default userValidationError