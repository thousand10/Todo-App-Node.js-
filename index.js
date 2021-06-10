const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const notFound = require("./middlewares/notFound")
const validationMiddleware = require("./middlewares/validationMiddleware")

const homeController = require("./controllers/homeController")
const aboutController = require("./controllers/aboutController")
const createController = require("./controllers/createController")
const storeController = require("./controllers/storeController")
const detailController = require("./controllers/detailController")
const deleteController = require("./controllers/deleteController")
const updateController = require("./controllers/updateController")
const updateFormController = require("./controllers/updateFormController")

const { urlencoded } = require("body-parser")

//middlewares
const app = express();
app.use(morgan("dev"))
app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({"extended": true}))


mongoose.connect("mongodb://localhost/todoApp", {useNewUrlParser: true})


//routes
//index route
app.get("/", homeController);

//todo detail
app.get("/todo/:id", detailController)

//delete todo
app.get("/delete/:id", deleteController)


//update todo
app.get("/update/:id", updateFormController)


//update todo
app.post("/update/save", updateController)


//about route
app.get("/about", aboutController)


//create route
app.get("/create",createController)

// app.use((req, res, next) => {
//     if (req.body.title == null && req.body.description == null){
//        res.redirect("/create")
//     }
//     next();
// })

//handle form
app.post("/todo/store", storeController)

app.use(notFound)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})