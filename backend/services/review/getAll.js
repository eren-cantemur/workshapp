const { Review } = require('../../models')

exports.getAll = async (req, res) => {
    await Review.findAll()
        .then((data) => {
            res.status(200).send({ data: data })
        })
        .catch(err => {
            res.status(404).send({ message: "User not found!" })
        })
}
