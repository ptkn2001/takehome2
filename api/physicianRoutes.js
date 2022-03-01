const router = require("express").Router();
const { Physician } = require("../models");

router.get("/", async (req, res) => {
  try {
    const physicians = await Physician.find();
    res.status(200).json(physicians);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const physician = await Physician.insertMany(req.body);
    res.status(200).json(physician);
  } catch (err) {
      console.log(err);
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const physician = await Physician.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { returnNewDocument: true }
    );
    res.status(200).json(physician);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
    try {
        await Physician.findOneAndDelete(
          { _id: req.params.id }
        );
        res.status(200).json(req.params.id);
      } catch (err) {
        res.status(400).json(err);
      }
});
module.exports = router;
