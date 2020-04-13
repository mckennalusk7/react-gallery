const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const gallery = require("./routes/gallery.router.js");
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static("build"));

/** ---------- EXPRESS ROUTES ---------- **/
app.use("/gallery", gallery);

// PUT ROUTE
router.put("/likes/:id", (req, res) => {
  console.log(req.params.id);

  res.sendStatus(200);
});

//  GET ROUTE
router.get(
  "/",
  (req,
  (res) => {
    res.send;
  })
);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
