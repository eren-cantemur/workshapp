const {WorkShop} = require('../../models')

exports.getApproved = async () => {
   
    const findOptions = {
        where : {
            isApproved : 1
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

    const workshop = await WorkShop.findOne(findOptions)

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