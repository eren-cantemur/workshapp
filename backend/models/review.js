const User = require('./user')
const Workshop = require('./workshop')
module.exports = (sequelize, Sequelize) => {
    UserModel = User(sequelize,Sequelize)
    WorkshopModel = Workshop(sequelize,Sequelize)
    const Review = sequelize.define("review", {
        isApproved  : {
            type : Sequelize.INTEGER,
            defaultValue : 0
        },
        comment : {
            type : Sequelize.STRING
        },
        rate : {
            type : Sequelize.FLOAT
        }
    })
    Review.belongsTo(UserModel)
    Review.belongsTo(WorkshopModel)
    return Review;
}
