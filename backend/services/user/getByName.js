const { User } = require('../../models')

exports.getByName = async (name) => {
    

    const findOptions = {
        where: {
            name: name
        }
    }

    const user = await User.findOne(findOptions)

    if (!user) {
        return {
            type: "Error",
            message: `Can not find user with id ${id}.`,
        };
    }
    else{
        return {
            type: "Success",
            message: "User is added to result.",
            result: user
        };
    }
    
}
