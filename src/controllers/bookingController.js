const itemModel = require("../models/ItemModel");
const userModel = require("../models/userModel");
const userService = require("../services/sendEmail");
const createError = require("../utils/create-error");

const bookingController = {};

bookingController.getBookings = async (req, res, next) => {
  try {
    const { item } = req.body;
    const userData = req.input;

    const itemId = +item.id
    const userDataWithItems = {
      ...userData, itemId, lineId: null
    }

const itemName = item.name

const bookedItem = {
  bookedDate : new Date(userData.bookingDate).toLocaleDateString('en-GB'),
  bookedName : itemName
}


    const addUser = await userModel.saveUserData(userDataWithItems);
    if (!addUser) {
      return createError(500, "Failed to save user data");
    }

    const sendEmail = await userService.sendEmail(userData.email, bookedItem);
    if (!sendEmail) {
      return createError(500, "Failed to send email");
    }

    res.json({ message: "booking successful"});
  } catch (error) {
    next(error);
  }
};

bookingController.getItems = async (req, res , next) => {
  try {
    const items = await itemModel.getItems();

    if(!items) {
      return createError(404, 'Items not found')
    }

    res.json({ items})
  } catch (error) {
    next(error);
  }
}

module.exports = bookingController;
