require("dotenv").config();
require("./server/db");
const express = require("express");
const bodyParser = require("body-parser");
const ThoughtRoute = require("./server/routes/ThoughtRoutes");
const UserRoute = require("./server/routes/UserRoutes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("./client/azure_mern_react/build/"));

app.use("/api/thoughts/", ThoughtRoute);
app.use("/api/users/", UserRoute);

app.get("/*", (req, res) => {
  res.sendFile("index.html", {
    root: __dirname + "/client/azure_mern_react/build/",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
