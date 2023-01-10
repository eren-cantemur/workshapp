const {WorkshopImage} = require('../../models')

exports.getAll = async () => {
    const images = await WorkshopImage.findAll()

    if (!images) {
        return {
            type: "Error",
            message: "Can not find any image.",
        };
    }
    else {
        return {
            type: "Success",
            message: "Image array is added to result.",
            result: images
        };
    }
    
}