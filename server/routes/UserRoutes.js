const router = require("express").Router();
const User = require("../models/UserModel");

router.get("/", async (req, res) => {
  const allUsers = await Thought.find();

  res.status(200).send({
    status: "Success",
    data: allUsers,
  });
});

module.exports = router;
