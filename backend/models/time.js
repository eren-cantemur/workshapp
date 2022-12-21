const Workshop = require('./workshop')
module.exports = (sequelize, Sequelize) => {
    WorkshopModel = Workshop(sequelize,Sequelize)
    const Review = sequelize.define("review", {
        date : {
            type : Sequelize.DATE,
            allowNull : false
        },
        repetation : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
    })
    Review.belongsTo(WorkshopModel)
    return Review;
}
