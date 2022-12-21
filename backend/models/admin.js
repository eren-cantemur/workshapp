const User = require('./user')
module.exports = (sequelize, Sequelize) => {
    UserModel = User(sequelize,Sequelize)
    const Admin = sequelize.define("admin", {
        name : {
            type : Sequelize.STRING,
            allowNull : false
        }
    })
    Admin.User = Admin.belongsTo(UserModel)
    return Admin;
}
