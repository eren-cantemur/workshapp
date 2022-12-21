const {Time} = require('../../models')

exports.getByWorkshopId = async(userId) => {

    const findOptions = {
        where : {
            userId : userId
        }
    }

    const time = await Time.findAll(findOptions)

    if (!time) {
        return {
            type: "Error",
            message: `Can not find time with name ${time}.`,
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
