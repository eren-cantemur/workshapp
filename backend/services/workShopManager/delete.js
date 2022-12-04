const {WorkShopManager} = require('../../models')

exports.delete = async (req,res) => {

    if (!req.body.id){
        res.status(400).send({message : "id must be given!"})
    }

    const findOptions = {
        where : {
            id : req.body.id
        }
    }

    await WorkShopManager.delete(
        findOptions
    )
    .then(() => {
        res.status(200).send({message : "Delete succesfull!"})
    })
    .catch(err => {
        res.status(404).send({message : "User not found!"})
    })
}
