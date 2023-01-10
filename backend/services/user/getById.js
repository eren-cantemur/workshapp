const { User } = require('../../models')

exports.getById = async (id) => {
    
    const findOptions = {
        where : {
            id : id
        }
    }

    const user = await User.findOne(findOptions)

    if (!user) {
        return {
            type: "Error",
            message: `Can not find User with id ${id}.`,
        };
    }
    else{
        return {
            type: "Success",
            message: "User is found.",
            result: user
        };
    }
    
}