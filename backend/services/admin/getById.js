const {Admin} = require('../../models')

exports.getById = async (id) => {

    const findOptions = {
        where : {
            id : id
        }
    }

    const admin = await Admin.findOne(findOptions)

    if (!admin) {
        return {
            type: "Error",
            message: `Can not find admin with id ${id}.`,
        };
    }
    else{
        return {
            type: "Success",
            message: "Admin is added to result.",
            result: admin
        };
    }

    
    
}