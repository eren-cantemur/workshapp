const { WorkShop } = require('../../models')

exports.getAll = async (req, res) => {
    await WorkShop.findAll()
        .then((data) => {
            res.status(200).send({ data: data })
        })
        .catch(err => {
            res.status(404).send({ message: "WorkShop not found!" })
        })
}
