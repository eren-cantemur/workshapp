const {Workshop} = require('../../models')

exports.getByWorkshopManagerId = async (managerId) => {
    
    const findOptions = {
        where : {
            workshopManagerId : managerId
        }
    }

    const workshop = await Workshop.findAll(findOptions)
    
    if (!workshop) {
        return {
            type: "Error",
            message: `Can not find workshop with id ${id}.`,
        };
    }
    else{
        return {
            type: "Success",
            message: "Workshops are added to result.",
            result: workshop
        };
    }
}