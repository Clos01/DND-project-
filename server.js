const express = require("express");
const path = require("path");
const mongoose = require("mongoose")
const router = require("./routes")
const passport = require("passport");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3001;

// Passport Config 
require('./config/passport')(passport);

// Session middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: "test",
  resave: false,
  saveUninitialized: false
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static('client/public'))

// Define API routes here
require("./routes/dndRoutes")(app);
app.use(router)
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/DungeonsAndDragons", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."));
// Send every other request to the React app
// Define any API routes before this runs
if (process.env.NODE_ENV === 'production') {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});