const {Customer} = require('../../models')

exports.update = async (id,name,photo) => {

    const updateBody = {
        name : name,
        photo : photo
    }

    const findOptions = {
        where : {
            userId : id
        }
    }

    const result = await Customer.update(
        updateBody,
        findOptions
    )

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while updating customer.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Customer with id ${id} is updated.`,
        };
    }
}
