const User = require('./user')
module.exports = (sequelize, Sequelize) => {
    UserModel = User(sequelize,Sequelize)
    const Customer = sequelize.define("customer", {
        name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        photo : {
            type : Sequelize.STRING
        }
    })
    Customer.belongsTo(UserModel)
    return Customer;
}
