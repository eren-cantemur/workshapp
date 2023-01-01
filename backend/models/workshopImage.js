const Workshop = require('./workshop')
module.exports = (sequelize, Sequelize) => {
    WorkshopModel = Workshop(sequelize,Sequelize)
    const WorkshopImage = sequelize.define("workshopImage", {
        path : {
            type : Sequelize.STRING,
            allowNull : false
        }
    })
    WorkshopImage.belongsTo(WorkshopModel)
    return WorkshopImage;
}
