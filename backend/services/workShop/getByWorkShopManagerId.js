const {WorkShop} = require('../../models')

exports.getByWorkShopManagerId = async(req,req) => {
    const workshopManagerId = req.query.workshopManagerId

    const findOptions = {
        where : {
            workshopManagerId : workshopManagerId
        }
    }

    await WorkShop.findOne(findOptions)
    .then((data) => {
        res.status(200).send({data: data})
    })
    .catch(err => {
        res.status(404).send({message : "User not found!"})
    })
}
