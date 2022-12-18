const {Address} = require('../../models')

exports.create = async (lat, long, country, city, county, postalCode, openAddress, workshopId) => {

    const createBody = {
        lat : lat,
        long : long, 
        country : country,
        city : city,
        county : county,
        openAddress: openAddress,
        postalCode : postalCode,
        workshopId : workshopId
    }
    const result = await Address.create(
        createBody
    )
    if (!result) {
        return {
            type: "Error",
            message: `Error while updating Address.`,
        };
    }
    else {
        return {
            type: "Success",
            message: `Address with id ${result.id} is created.`,
            id: result.id,
        };
    }
}