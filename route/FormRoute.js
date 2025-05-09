const {getForm,postForm,putForm,deleteForm} = require ("../controller/AdmissionController")
const route = require("express").Router()

route.get("/",getForm)
route.post("/",postForm)
route.put("/:id",putForm)
route.delete("/:id",deleteForm)

module.exports = route