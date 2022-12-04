const {WorkShopManager} = require('../../models')

exports.update = async (req,res) => {

    if (!req.body.name || !req.body.id || !req.body.logo || !req.body.phone){
        res.status(400).send({message : " Request body missing data!"})
    }

    const updateBody = {
        name : req.body.name,
        logo : req.body.logo,
        phone : req.body.phone
    }

    const findOptions = {
        where : {
            id : req.body.id
        }
    }

    await WorkShopManager.update(
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
