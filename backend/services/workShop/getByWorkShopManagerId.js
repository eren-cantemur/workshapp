const {WorkShop} = require('../../models')

exports.getById = async (managerId) => {
    
    const findOptions = {
        where : {
            workshopManagerId : managerId
        }
    }

    const workshop = await WorkShop.findOne(findOptions)
    
    if (!workshop) {
        return {
            type: "Error",
            message: `Can not find workshop with id ${id}.`,
        };
    }
    else{
        return {
            type: "Success",
            message: "Workshop is added to result.",
            result: workshop
        };
    }
}