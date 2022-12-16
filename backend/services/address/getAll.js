const {Address} = require('../../models')

exports.getAll = async () => {
    const address = await Address.findAll()

    if (!address) {
        return {
            type: "Error",
            message: "Can not find any Addres.",
        };
    }
    else {
        return {
            type: "Success",
            message: "Addres array is added to result.",
            result: address
        };
    }
    
}
