const { Customer } = require('../../models')

exports.getByUser = async (req, req) => {
    const userId = req.query.userId

    const findOptions = {
        where: {
            userId: userId
        }
    }

    await Customer.findOne(findOptions)
        .then((data) => {
            res.status(200).send({ data: data })
        })
        .catch(err => {
            res.status(404).send({ message: "User not found!" })
        })
}
