const {Admin} = require('../../models')

exports.update = async (req,res) => {

    if (!req.body.name || !req.body.id){
        res.status(400).send({message : "Name must be given!"})
    }

    const updateBody = {
        name : req.body.name
    }

    const findOptions = {
        where : {
            id : req.body.id
        }
    }

    await Admin.update(
        updateBody,
        findOptions
    )
    .then(() => {
        res.status(200).send({message : "Update succesfull!"})
    })
    .catch(err => {
        res.status(404).send({message : "User not found!"})
    })
}
