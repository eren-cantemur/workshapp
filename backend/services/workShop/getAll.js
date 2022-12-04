const { Workshop } = require('../../models')

exports.getAll = async () => {
    const workshops = await Workshop.findAll()

    if (!workshops) {
        return {
            type: "Error",
            message: "Can not find any workshop.",
        };
    }
    else {
        return {
            type: "Success",
            message: "Workshop array is added to result.",
            result: workshops
        };
    }
    
}
