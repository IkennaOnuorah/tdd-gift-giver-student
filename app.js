const express = require("express")
const morgan = require("morgan")
const giftexchange = require("./Routes/gift-exchange")
const app = express()

app.use(morgan("tiny"))
app.use(express.json())
app.use("/gift-exchange", giftexchange)
app.get("/", async (req,res,next) => {
    res.status(200).json({ping: "pong"})
})

app.use((req, res, next) => {
    return next(new NotFoundError());
  });
app.use((err, req, res, next) => {
    const status = err?.status || 500;
    const message = err?.message || "Something went wrong in the application";
    const error = {status, message};
    res.status(status).send(error)
})

module.exports = app