const {Customer} = require('../../models')

exports.getAll = async () => {
    const customers = await Customer.findAll()

    if (!customers) {
        return {
            type: "Error",
            message: "Can not find any customer.",
        };
    }
    else {
        return {
            type: "Success",
            message: "Customer array is added to result.",
            result: customers
        };
    }
    
}
