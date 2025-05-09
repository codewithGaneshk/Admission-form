const {getUser,postUser,putUser,deleteUser} = require("../controller/userController")
const route = require("express").Router()
const auth = require("../middlewair/auth")
route.get("/",getUser)
route.post("/",postUser)
route.put("/:id",putUser)
route.delete("/:id",deleteUser)

module.exports = route