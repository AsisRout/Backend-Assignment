const express = require("express");
const itemController = require("../controllers/itemController");

const router = express.Router();

// Routes for request to /items
router
  .route("/")
  .get(itemController.getAllItems)
  .post(itemController.createItem);

// Routes for request to /items/id
router
  .route("/:id")
  .get(itemController.getItem)
  .put(itemController.updateItem)
  .delete(itemController.deleteItem);

module.exports = router;
