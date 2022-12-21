const {Time} = require('../../models')

exports.getById = async (id) => {
    
    const findOptions = {
        where : {
            id : id
        }
    }

    const time = await Time.findOne(findOptions)

    if (!time) {
        return {
            type: "Error",
            message: `Can not find time with id ${id}.`,
        };
    }
    else{
        return {
            type: "Success",
            message: "Time is added to result.",
            result: time
        };
    }
    
}