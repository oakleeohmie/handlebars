const express = require("express");
let burger = require("../models/burger");
const router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        let hbsObject = { burger: data };
        res.render("index", hbsObject);
    })
});

router.post("/api/add", function (req, res) {
    let name = req.body.name;
    burger.createOne(name, data => {
        res.json(data);
    })
})

router.put("/api/eat/:id", function (req, res) {
    let id = req.params.id;

    burger.updateOne(id, data => {
        res.json(data);
    });
});

router.delete("/api/remove/:id", function (req, res) {
    let id = req.params.id;

    burger.deleteOne(id, data => {
        res.json(data);
    });
});

module.exports = router;