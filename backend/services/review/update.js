const {Customer} = require('../../models')

exports.update = async (req,res) => {

    if (!req.body.name || !req.body.id || !req.body.photo){
        res.status(400).send({message : "Name must be given!"})
    }

    const updateBody = {
        name : req.body.name,
        photo : req.body.photo
    }

    const findOptions = {
        where : {
            id : req.body.id
        }
    }

    await Customer.update(
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
