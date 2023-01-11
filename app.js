const express = require("express");
const mongoose = require('mongoose');

const app = express();

// connexion à mongodb
mongoose.connect("mongodb://127.0.0.1:27017/todo_express", {

    useNewUrlParser: true,

    useUnifiedTopology: true,
})
.then(( () => console.log('connected to MongoDB !')));

//middlewares
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

// pour les templates
app.set("view engine", "ejs");

//routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"))


//server
app.listen(7000, () => console.log("listening on port 7000"))