module.exports = (sequelize, Sequelize) => {
    const WorkshopManager = sequelize.define("workshopManager", {
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
        phone : {
            type : Sequelize.INTEGER
        }
    })
    return WorkshopManager;
}
