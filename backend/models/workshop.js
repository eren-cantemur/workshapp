const WorkshopManager = require('./workshopManager')

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
        photo : {
            type : Sequelize.STRING
        },
        capacity : {
            type : Sequelize.INTEGER
        }
    })
    Workshop.belongsTo(WorkshopManagerModel)
    return Workshop;
}
