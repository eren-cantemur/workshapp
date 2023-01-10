const {Customer} = require('../../models')

exports.getByName = async(name) => {
    const findOptions = {
        where : {
            name : name
        }
    }

    const customer = await Customer.findOne(findOptions)

    if (!customer) {
        return {
            type: "Error",
            message: `Can not find Customer with name ${name}.`,
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

