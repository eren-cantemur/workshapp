const {Customer} = require('../../models')

exports.getAll = async (req,res) => {
    await Customer.findAll()
    .then((data) => {
        res.status(200).send({data: data})
    })
    .catch(err => {
        res.status(404).send({message : "User not found!"})
    })
}
