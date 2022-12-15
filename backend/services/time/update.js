const {Time} = require('../../models')

exports.update = async (id, date, repetation) => {

    
    const updateBody = {
        date:date,
        repetation : repetation
    }

    const findOptions = {
        where : {
            id :id
        }
    }
    const result = await Time.update(
        updateBody,
        findOptions
    )

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while updating Time.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Time with id ${id} is updated.`,
        };
    }
}
