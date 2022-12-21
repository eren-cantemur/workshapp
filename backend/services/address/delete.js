const {Address} = require('../../models')

exports.delete = async (id) => {
    const findOptions = {
        where : {
            id : id
        }
    }

    const result = await Address.destroy(findOptions)

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while deleting Address.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Address with id ${id} is deleted.`,
        };
    }
    
}
