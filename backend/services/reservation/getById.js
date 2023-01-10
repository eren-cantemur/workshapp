const {Reservation} = require('../../models')

exports.getById = async (id) => {
    
    const findOptions = {
        where : {
            id : id
        }
    }

    const reservation = await Reservation.findOne(findOptions)

    if (!reservation) {
        return {
            type: "Error",
            message: `Can not find Customer with id ${id}.`,
        };
    }
    else{
        return {
            type: "Success",
            message: "Customer is added to result.",
            result: reservation
        };
    }
    
}