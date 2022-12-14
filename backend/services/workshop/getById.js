const {Workshop, Address, WorkshopImage, Review, Category} = require('../../models')

exports.getById = async (id) => {
   
    const findOptions = {
        where : {
            id : id
        },
        include: { all: true, nested: true }

        // include : [{
        //     model : Address
        // },
        // {
        //     model : WorkshopImage
        // },
        // {
        //     model  :Review
        // },
        // {
        //     model: Category
        // }]
    }

    const workshop = await Workshop.findOne(findOptions)

    if (!workshop) {
        return {
            type: "Error",
            message: `Can not find workshop with id ${id}.`,
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