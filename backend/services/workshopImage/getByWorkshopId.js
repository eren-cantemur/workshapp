const {WorkshopImage} = require('../../models')

exports.getByWorkshopId= async(workshopId) => {
    const findOptions = {
        where : {
            workshopId : workshopId
        }
    }

    const images = await WorkshopImage.findAll(findOptions)

    if (!images) {
        return {
            type: "Error",
            message: `Can not find images with name ${name}.`,
        };
    }
    else{
        return {
            type: "Success",
            message: "images array  added to result.",
            result: images
        };
    }
    
}