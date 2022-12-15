const User = require('./user')
const Workshop = require('./workshop')
module.exports = (sequelize, Sequelize) => {
    UserModel = User(sequelize,Sequelize)
    WorkshopModel = Workshop(sequelize,Sequelize)
    const Reservation = sequelize.define("reservation", {
        repetation : {
            type : Sequelize.INTEGER
        }
    })
    Reservation.belongsTo(UserModel)
    Reservation.belongsTo(WorkshopModel)
    return Reservation;
}
