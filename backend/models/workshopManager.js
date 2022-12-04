const User = require('./user')
module.exports = (sequelize, Sequelize) => {
    UserModel = User(sequelize,Sequelize)
    const WorkshopManager = sequelize.define("workshopManager", {
        name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        logo : {
            type : Sequelize.STRING
        },
        phone : {
            type : Sequelize.STRING
        }
    })
    WorkshopManager.belongsTo(UserModel)
    return WorkshopManager;
}
