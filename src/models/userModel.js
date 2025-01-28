const prisma = require('../config/prisma')

const userModel = {}

userModel.saveUserData = async (userData) => {
    const user = await prisma.user.create({
        data: userData
    })
}

module.exports = userModel