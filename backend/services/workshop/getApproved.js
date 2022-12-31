const {Workshop, Address, WorkshopImage, Review, Category} = require('../../models')

exports.getApproved = async () => {
   
    const findOptions = {
        where : {
            isApproved : true
        },
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

    const workshop = await Workshop.findAll(findOptions)

    if (!workshop) {
        return {
            type: "Error",
            message: `Can not find workshop approved.`,
        };
    }
    else{
        return {
            type: "Success",
            message: "Workshop is added to result.",
            result: workshop
        };
    }
}