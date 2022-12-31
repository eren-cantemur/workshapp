const { Workshop , Address, WorkshopImage, Review, Category } = require('../../models')

exports.getAll = async () => {

    const findOptions = {
        include : [{
            model : Address
        },
        {
            model : WorkshopImage
        },
        {
            model  :Review
        },
        {
            model: Category
        }]
    }
    const workshops = await Workshop.findAll(findOptions)

    if (!workshops) {
        return {
            type: "Error",
            message: "Can not find any workshop.",
        };
    }
    else {
        return {
            type: "Success",
            message: "Workshop array is added to result.",
            result: workshops
        };
    }
    
}
