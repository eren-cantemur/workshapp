const {Address} = require('../../models')

exports.create = async (country, city, county, postalCode, openAddress) => {

    const createBody = {
        country : country,
        city : city,
        county : county,
        openAddress: openAddress,
        postalCode : postalCode,
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
