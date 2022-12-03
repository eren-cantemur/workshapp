const User = require('./user')
module.exports = (sequelize, Sequelize) => {
    UserModel = User(sequelize,Sequelize)
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
    return Review;
}
