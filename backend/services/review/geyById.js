const {Review} = require('../../models')

exports.getById = async (req,res) => {
    const id = req.query.id

    const findOptions = {
        where : {
            id : id
        }
    }

    await Review.findOne(findOptions)
    .then((data) => {
        res.status(200).send({data: data})
    })
    .catch(err => {
        res.status(404).send({message : "User not found!"})
    })
}