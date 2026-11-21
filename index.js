import e from "express";
import router from "./router.js";
import { STATUS_CODES } from "node:http"

const app = e();
const port = 3000;

app.use(e.json())
app.use((err, req, res, next) => {
    console.error(err)
    res.status(err.status).json({
        error: STATUS_CODES[err.status] || "Unknown error"
    })

})
app.use("/", router)

app.listen(port, () => {
    console.log(`Server started: http://localhost:${port}`);
});