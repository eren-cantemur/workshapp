module.exports = (sequelize, Sequelize) => {
    const WorkshopImage = sequelize.define("workshopImage", {
        path : {
            type : Sequelize.STRING,
            allowNull : false
        }
    })
    return WorkshopImage;
}
