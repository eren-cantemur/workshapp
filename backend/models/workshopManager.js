const User = require('./user')
module.exports = (sequelize, Sequelize) => {
    UserModel = User(sequelize,Sequelize)
    const WorkShopManager = sequelize.define("workshopManager", {
        name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        logo : {
            type : Sequelize.STRING
        },
        phone : {
            type : Sequelize.INTEGER
        }
    })
    WorkshopManager.belongsTo(UserModel)
    return WorkShopManager;
}
