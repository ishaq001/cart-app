var express = require("express");
var router = express.Router();
var _ = require("lodash");
var logger = require("../lib/logger");
var log = logger();

var items = require("../init_data.json").data;
var curId = _.size(items);

/* GET items listing. */
router.get("/", function (req, res) {
  res.json(_.toArray(items));
});

/* Create a new item */
router.post("/", function (req, res) {
  const { name, price, img } = req.body;
  var item = {
    name: name,
    price: price,
    img: img,
  };
  curId += 1;
  item.id = curId;
  items[item.id] = item;
  res.json(item);
});

/* Get a specific item by id */
router.get("/:id", function (req, res, next) {
  var item = items[req.params.id];
  if (!item) {
    return next();
  }
  res.json(items[req.params.id]);
});

/* Delete a item by id */
router.delete("/:id", function (req, res) {
  var item = items[req.params.id];
  delete items[req.params.id];
  res.status(204);
  log.info("Deleted item", item);
  res.json(item);
});

/* Update a item by id */
router.put("/:id", function (req, res, next) {
  var item = req.body;
  if (item.id != req.params.id) {
    return next(new Error("ID paramter does not match body"));
  }
  items[item.id] = item;
  log.info("Updating item", item);
  res.json(item);
});

module.exports = router;
