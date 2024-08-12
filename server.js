require("dotenv").config();
require("./server/db");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const ThoughtRoute = require("./server/routes/ThoughtRoutes");
const UserRoute = require("./server/routes/UserRoutes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// if (process.env.NODE_ENV === "production") {
app.use(express.static("./client/azure_mern_react/build")); // change this if your dir structure is different
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./client/azure_mern_react", "build", "index.html")
  );
});
// }

// app.use(express.static("./client/azure_mern_react/build/"));

app.use("/api/thoughts/", ThoughtRoute);
app.use("/api/users/", UserRoute);

// app.get("/*", (req, res) => {
//   res.sendFile("index.html", {
//     root: __dirname + "/client/azure_mern_react/build/",
//   });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
