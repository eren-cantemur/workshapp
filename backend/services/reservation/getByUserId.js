const {Reservation} = require('../../models')
const {Workshop} = require('../../models')

exports.getByUserId = async(userId) => {
    const findOptions = {
        where : {
            userId : userId
        }
    }

    const reservation = await Reservation.findAll(findOptions)
    var workshops = []
    // For loop over reservation workshopId
    for (let i = 0; i < reservation.length; i++) {
        // Find workshop by id
        const workshop = await Workshop.findOne({
            where: {
                id: reservation[i].workshopId
            },
            include: { all: true, nested: true }
        })
        // Push workshop to workshops array
        workshops.push(workshop)
    }

    if (!reservation) {
        return {
            type: "Error",
            message: `Can not find Reservation with name ${userId}.`,
        };
    }
    else{
        return {
            type: "Success",
            message: "Reservations is added to result.",
            result: workshops
        };
    }
    
}

