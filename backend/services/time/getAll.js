const { Time } = require('../../models')

exports.getAll = async () => {
    const times = await Time.findAll()

    if (!times) {
        return {
            type: "Error",
            message: "Can not find any review.",
        };
    }
    else {
        return {
            type: "Success",
            message: "Time array is added to result.",
            result: times
        };
    }
    
}
