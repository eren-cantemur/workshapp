const RouteRoles = require('../lib/routeRoles')

const verifyRole = (path, id) => {
    return (req, res, next,) => {
        const user = req.user
        const control = RouteRoles[path][id].includes(user.role)
        if (!control) {
            return res.status(403).send({ message: "User type not allowed to do this operation." })
        }
        next()
    }
}

module.exports = verifyRole