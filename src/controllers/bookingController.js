const itemModel = require("../models/ItemModel");
const userModel = require("../models/userModel");
const userService = require("../services/sendEmail");

const bookingController = {};

bookingController.getBookings = async (req, res, next) => {
  try {
    const userData = req.input;
    console.log(userData);

    const addUser = await userModel.saveUserData(userData);

    // await userService.sendEmail(userData.email)

    res.json({ message: "saved data", savedUser: addUser });
  } catch (error) {
    next(error);
  }
};

bookingController.getItems = async (req, res , next) => {
  try {
    const items = await itemModel.getItems();

    console.log(items)
    
    res.json({ items})
  } catch (error) {
    next(error);
  }
}

module.exports = bookingController;
