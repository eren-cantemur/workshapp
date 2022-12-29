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
    Customer.User = Customer.belongsTo(UserModel, {onDelete: 'CASCADE', foreignKey: {allowNull: false}})
    return Customer;
}
