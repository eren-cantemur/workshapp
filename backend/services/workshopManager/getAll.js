const {WorkshopManager} = require('../../models')

exports.getAll = async () => {
    const managers = await WorkshopManager.findAll()

    if (!managers) {
        return {
            type: "Error",
            message: "Can not find any manager.",
        };
    }
    else {
        return {
            type: "Success",
            message: "Manager array is added to result.",
            result: managers
        };
    }
    
}