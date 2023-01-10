const User = require('./user')
const Workshop = require('./workshop')
module.exports = (sequelize, Sequelize) => {
    UserModel = User(sequelize, Sequelize)
    WorkshopModel = Workshop(sequelize, Sequelize)
    const Reservation = sequelize.define("reservation", {
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        attandanceStatus: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },

    })
    Reservation.belongsTo(UserModel)
    Reservation.belongsTo(WorkshopModel)
    return Reservation;
}
