const prisma = require('../config/prisma')

const ItemData = [
    {name: "Castlela", price: 5000000, description: "A castle in the land", image: "https://images.unsplash.com/photo-1564053489233-6e4438e1d4f0"},
    {name: "Castlela", price: 5000000, description: "A castle in the land", image: "https://images.unsplash.com/photo-1564053489233-6e4438e1d4f0"},
    {name: "Castlela", price: 5000000, description: "A castle in the land", image: "https://images.unsplash.com/photo-1564053489233-6e4438e1d4f0"},
]

const seed = async () => {
    await prisma.item.createMany({
        data: ItemData
    })
}