const {WorkshopManager} = require('../../models')

exports.getById = async (id) => {
   
    const findOptions = {
        where : {
            id : id
        }
    }

    const manager = await WorkshopManager.findOne(findOptions)
    
    if (!manager) {
        return {
            type: "Error",
            message: `Can not find manager with id ${id}.`,
        };
    }
    else{
        return {
            type: "Success",
            message: "Manager is added to result.",
            result: manager
        };
    }
}