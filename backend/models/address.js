const Workshop = require('../models/workshop')
module.exports = (sequelize, Sequelize) => {
    WorkshopModel = Workshop(sequelize,Sequelize)
    const Address = sequelize.define("address", {
        lat : {
            type : Sequelize.FLOAT,
        },
        long : {
            type : Sequelize.FLOAT
        },
        country : {
            type : Sequelize.STRING
        },
        city : {
            type : Sequelize.STRING
        },
        county : {
            type : Sequelize.STRING
        },
        postalCode : {
            type : Sequelize.STRING
        },
        openAddress : {
            type : Sequelize.STRING
        }
    })
    Address.belongsTo(WorkshopModel)
    return Address;
}
