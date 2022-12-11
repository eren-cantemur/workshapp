const {Address} = require('../../models')

exports.getByWorkshopId= async(workshopId) => {
    const findOptions = {
        where : {
            workshopId : workshopId
        }
    }

    const address = await Address.findOne(findOptions)

    if (!address) {
        return {
            type: "Error",
            message: `Can not find Address with workshop Id ${workshopId}.`,
        };
    }
    else{
        return {
            type: "Success",
            message: "Address is added to result.",
            result: address
        };
    }
    
}

