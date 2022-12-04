const {Customer} = require('../../models')

exports.getByName = async(req,req) => {
    const name = req.query.name

    const findOptions = {
        where : {
            name : name
        }
    }

    await Customer.findOne(findOptions)
    .then((data) => {
        res.status(200).send({data: data})
    })
    .catch(err => {
        res.status(404).send({message : "User not found!"})
    })
}
