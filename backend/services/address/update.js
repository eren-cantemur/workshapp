const {Address} = require('../../models')

exports.update = async (id,lat, long, country, city, county, postalCode, openAddress) => {

    const updateBody = {
        lat : lat,
        long : long, 
        country : country,
        city : city,
        county : county,
        openAddress: openAddress,
        postalCode : postalCode
    }

    const findOptions = {
        where : {
            id : id
        }
    }

    const result = await Address.update(
        updateBody,
        findOptions
    )

    if (result == 0) {
        return {
            type: "Error",
            message: `Error while updating Address.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Address with id ${id} is updated.`,
        };
    }
}
