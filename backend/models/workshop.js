const WorkshopManager = require('./workshopManager')
const Category = require('./category')
module.exports = (sequelize, Sequelize) => {
    WorkshopManagerModel = WorkshopManager(sequelize,Sequelize)
    CategoryModel = Category(sequelize,Sequelize)
    const Workshop = sequelize.define("workshop", {
        name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        isApproved  : {
            type : Sequelize.INTEGER,
            defaultValue : 0
        },
        description : {
            type : Sequelize.STRING,
            allowNull : false
        },
        photo : {
            type : Sequelize.STRING,
            allowNull : false
        },
        capacity : {
            type : Sequelize.INTEGER
        }

    })
    Workshop.belongsTo(WorkshopManagerModel, {onDelete: 'CASCADE', foreignKey: {allowNull: false}})
    Workshop.belongsTo(CategoryModel)
    return Workshop;
}
