const {WorkshopManager} = require('../../models')

exports.getByName = async(name) => {
    const findOptions = {
        where : {
            name : name
        }
    }

    const manager = await WorkshopManager.findOne(findOptions)

    if (!manager) {
        return {
            type: "Error",
            message: `Can not find manager with name ${name}.`,
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