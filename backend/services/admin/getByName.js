const {Admin} = require('../../models')

exports.getByName = async(name) => {
    const findOptions = {
        where : {
            name : name
        }
    }

    const admin = await Admin.findOne(findOptions)

    if (!admin) {
        return {
            type: "Error",
            message: `Can not find admin with name ${name}.`,
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
