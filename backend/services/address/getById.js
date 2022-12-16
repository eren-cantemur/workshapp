const {Address} = require('../../models')

exports.getById = async (id) => {
    
    const findOptions = {
        where : {
            id : id
        }
    }

    const address = await Address.findOne(findOptions)

    if (!address) {
        return {
            type: "Error",
            message: `Can not find Address with id ${id}.`,
        };
    }
    else{
        return {
            type: "Success",
            message: "Address is added to result.",
            result: address
        };
    }
    
}