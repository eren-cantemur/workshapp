const {Customer} = require('../../models')

exports.getById = async (id) => {
    
    const findOptions = {
        where : {
            userId : id
        }
    }

    const customer = await Customer.findOne(findOptions)

    if (!customer) {
        return {
            type: "Error",
            message: `Can not find Customer with id ${id}.`,
        };
    }
    else{
        return {
            type: "Success",
            message: "Customer is added to result.",
            result: customer
        };
    }
    
}