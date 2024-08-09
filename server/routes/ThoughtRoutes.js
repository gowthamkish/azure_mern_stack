const router = require("express").Router();
const Thought = require("../models/ThoughtModel");

router.get("/", async (req, res, next) => {
  //   res.json({ message: "Fetched thoughts", status: 200 });

  const allThougts = await Thought.find();

  res.status(200).send({
    status: "Success",
    data: allThougts,
  });
});

router.post("/seed", async (req, res, next) => {
  for (let i = 0; i < 5; i++) {
    const newThought = new Thought({
      thought: `This is thought ${Math.random().toFixed(5)}`,
      created_at: new Date(),
    });

    await newThought.save();
  }
  res.send("Thoughts saved successfully");
});

module.exports = router;
