const prisma = require('../config/prisma')

const itemModel = {}

itemModel.getItems = async () => {
    const items = await prisma.item.findMany()
    return items
}

module.exports = itemModel