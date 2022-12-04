const { Admin } = require('../../models')

exports.getAll = async () => {
    const admins = await Admin.findAll()

    if (!admins) {
        return {
            type: "Error",
            message: "Can not find any admin.",
        };
    }
    else {
        return {
            type: "Success",
            message: "Admin array is added to result.",
            result: admins
        };
    }

}
