const UserService = require('../services/UserService')
const createUser  = async (req, res) =>{
    try{
        console.log(req.body)
        const result = await UserService.createUser()
        console.log('result', result)
        return res.status(200).json(result)
    }catch(e){
        return res.status(404).json({
            message: e
        })
    }
}
module.exports = {
    createUser
}