const prisma = require('../config/prisma')

const userModel = {}

userModel.saveUserData = async (userData) => {
   
    try {
        const bookingData = {
            username: userData.username,
            email: userData.email,
            phone: userData.phone,
            bookingDate: userData.bookingDate, 
            itemId: Number(userData.itemId),
            lineId: userData.lineId
        };
        const book = await prisma.booking.create({
            data: bookingData
        })

        return book
        
    } catch (error) {
       console.log(error)
    }
}

module.exports = userModel