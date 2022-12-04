const {WorkShop} = require('../../models')

exports.update = async (req,res) => {

    if (!req.body.comment || !req.body.id || !req.body.rate){
        res.status(400).send({message : "Request body is missing data!"})
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

    await WorkShop.update(
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
