const WorkshopManager = require('./workshopManager')
const Category = require('./category')
const Address = require('./address')
module.exports = (sequelize, Sequelize) => {
    WorkshopManagerModel = WorkshopManager(sequelize,Sequelize)
    CategoryModel = Category(sequelize,Sequelize)
    AddressModel = Address(sequelize,Sequelize)
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
    Workshop.belongsTo(WorkshopManagerModel)
    Workshop.belongsTo(CategoryModel)
    Workshop.belongsTo(AddressModel)
    return Workshop;
}
