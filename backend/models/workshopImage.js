const WorkShop = require('./workShop')
module.exports = (sequelize, Sequelize) => {
    WorkShopModel = WorkShop(sequelize,Sequelize)
    const WorkShopImage = sequelize.define("workShopImage", {
        path : {
            type : Sequelize.STRING,
            allowNull : false
        }
    })
    WorkShopImage.belongsTo(WorkShopModel)
    return WorkShopImage;
}
