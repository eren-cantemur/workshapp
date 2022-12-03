module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        email : {
            type : Sequelize.STRING,
        },
        password : {
            type : Sequelize.STRING, 
        },
        name : {
            type : Sequelize.STRING
        },
        isVerified : {
            type : Sequelize.INTEGER,
            defaultValue : 0
        },
        isApproved  : {
            type : Sequelize.INTEGER,
            defaultValue : 0
        },
        photo : {
            type : Sequelize.STRING
        }
    })
    return User;
}
