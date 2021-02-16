const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurants");

router.get("/", (req, res) => {
  Restaurant.find()
    .then((restaurants) => {
      res.json(restaurants);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.get("/listings", (req, res) => {
  Restaurant.find({ availability: true })
    .limit(3)
    .then((availabilityRest) => {
      res.json(availabilityRest);
    });
});

router.get("/:id", (req, res) => {
  Restaurant.findById(req.params.id)
    .then((foundRestaurant) => {
      res.json(foundRestaurant);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).end();
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  Restaurant.create(req.body).then((newRestaurant) => {
    console.log(newRestaurant);
    res.json(newRestaurant);
  });
});

router.put("/:id", (req, res) => {
  Restaurant.findByIdAndUpdate(req.params.id, req.body).then(
    (updatedObject) => {
      res.json(updatedObject);
    }
  );
});

router.delete("/:id", (req, res) => {
  Restaurant.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;
