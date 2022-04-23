const Item = require("../models/itemModel");

/**
 * Validates the Item ID
 * @param {object} req - The Request Object
 * @param {object} res - The Response Object
 * @param {function} next - The function to call next middleware
 * @returns {Response} Invalid Request
 */
exports.checkID = async (req, res, next, val) => {
  try {
    const itemExists = await Item.exists({ Id: val });
    if (!itemExists) {
      return res.status(404).send("Item Not Found");
    }
  } catch (err) {
    res.status(400).send({
      status: "Fail",
      message: err,
    });
  }
  next();
};

/**
 * Route Handler function to create an Item
 * @param {Object} req - The Request Object
 * @param {Object} res - The Response Object
 */
exports.createItem = async (req, res) => {
  try {
    console.log(req.body);
    const newItem = await Item.create(req.body);
    res.status(201).json({
      Id: newItem.Id,
      message: "Item Created Successfully",
    });
  } catch (err) {
    res.status(400).send({
      status: "Fail",
      message: err,
    });
  }
};

/**
 * Route Handler Function to get all items
 * @param {Object} req - The Request Object
 * @param {Object} res - The Response Object
 */

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

/**
 * Route Handler Function to get a particular item
 * @param {Object} req - The Request Object
 * @param {Object} res - The Response Object
 */

exports.getItem = async (req, res) => {
  try {
    const item = await Item.find({ Id: req.params.id });
    res.status(200).json(item);
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      message: err,
    });
  }
};

/**
 * Route Handler function to update an item
 * @param {Object} req - The Request Object
 * @param {Object} res - The Response Object
 */

exports.updateItem = async (req, res) => {
  try {
    const updateditemsCount = await Item.updateOne(
      { Id: req.params.id },
      req.body
    );
    res.status(200).json({
      //updatedItem
      Id: req.params.id,
      message: "Update Successful",
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

/**
 * Route Handler function to delete an item
 * @param {Object} req - The Request Object
 * @param {Object} res - The Response Object
 */

exports.deleteItem = async (req, res) => {
  try {
    const deletedCount = await Item.deleteOne({ Id: req.params.id });
    res.status(200).json({
      Id: req.params.id,
      message: "Delete Successful",
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};
