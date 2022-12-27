const RouteRoles = {
    "address": {
        1: ["admin", "workshopManager"],
        2: ["customer", "admin", "workshopManager"],
        3: ["customer", "admin", "workshopManager"],
        4: ["customer", "admin", "workshopManager"],
        5: ["admin", "workshopManager"],
        6: ["admin", "workshopManager"],
    },
    "reservation": {
        1: ["customer", "admin"],
        2: ["customer", "admin", "workshopManager"],
        3: ["customer", "admin", "workshopManager"],
        4: ["customer", "admin", "workshopManager"],
        5: ["customer", "admin"],
        6: ["customer", "admin"],
    },
    "review": {
        1: ["customer", "admin"],
        2: ["customer", "admin", "workshopManager"],
        3: ["customer", "admin", "workshopManager"],
        4: ["customer", "admin", "workshopManager"],
        5: ["customer", "admin"],
        6: ["customer", "admin"],
        7: ["admin"]
    },
    "workshop": {
        1: ["admin", "workshopManager"],
        2: ["admin", "workshopManager"],
        3: ["customer", "admin", "workshopManager"],
        4: ["customer", "admin", "workshopManager"],
        5: ["customer", "admin", "workshopManager"],
        6: ["admin", "workshopManager"],
        7: ["admin"]
    },
    "workshopImage": {
        1: ["admin", "workshopManager"],
        2: ["customer", "admin", "workshopManager"],
        3: ["customer", "admin", "workshopManager"],
        4: ["customer", "admin", "workshopManager"],
        5: ["admin", "workshopManager"],
    },
    "user": {
        1: ["customer", "admin", "workshopManager"],
        2: ["customer", "admin", "workshopManager"],
        3: ["customer", "admin", "workshopManager"],
        4: ["customer", "admin", "workshopManager"],
        5: ["admin","customer","workshopManager"],
    },
    "customer": {
        1: ["customer", "admin", "workshopManager"],
        2: ["customer", "admin", "workshopManager"],
        3: ["customer", "admin", "workshopManager"],
        4: ["customer", "admin"],
        5: ["admin","customer"],
    },
    "workshopManager": {
        1: ["customer", "admin", "workshopManager"],
        2: ["customer", "admin", "workshopManager"],
        3: ["customer", "admin", "workshopManager"],
        4: ["admin", "workshopManager"],
        5: ["admin","workshopmanager"],
    }



}

module.exports = RouteRoles