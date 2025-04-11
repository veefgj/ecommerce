const createUser = () => {
    return new Promise((resolve, reject) => {
        try {
            console.log("111")
            resolve({})

        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    createUser
}