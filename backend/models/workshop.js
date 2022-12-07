const WorkshopManager = require('./workShopManager')

module.exports = (sequelize, Sequelize) => {
    WorkshopManagerModel = WorkshopManager(sequelize,Sequelize)
    const Workshop = sequelize.define("workshop", {
        name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        isApproved  : {
            type : Sequelize.INTEGER,
            defaultValue : 0
        },
        capacity : {
            type : Sequelize.INTEGER
        }
    })
    Workshop.belongsTo(WorkshopManagerModel)
    return Workshop;
}
