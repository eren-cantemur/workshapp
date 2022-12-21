const WorkShop = require('../models/workShop')
module.exports = (sequelize, Sequelize) => {
    WorkShopModel = WorkShop(sequelize,Sequelize)
    const Address = sequelize.define("adress", {
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
    Address.belongsTo(WorkShopModel)
    return Address;
}
