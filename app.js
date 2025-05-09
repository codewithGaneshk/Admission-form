const express = require("express")
const mongoose = require("mongoose")
require("dotenv/config")

const userRoute = require("./route/userRoute")
const FormRoute = require("./route/FormRoute")

const app = express()

app.get("/",(req,res) => {
    res.send("HOME")
})

app.use(express.json())

app.use("/api/user",userRoute)
app.use("/api/form",FormRoute)

app.listen(process.env.PORT)

async function db() {
    try {
        const data = await mongoose.connect(process.env.DB)
        console.log(data.default.STATES.connected);
        
    } catch (error) {
        console.log(error.message);
        
    }
}
db()