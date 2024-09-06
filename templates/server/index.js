import app from "./src/app.js";
import "dotenv/config"
import connectDB from "./src/utils/db.js";
connectDB().then(
    app.listen(process.env.PORT,()=>{
        console.log("app is running on port:", process.env.PORT)
    })
)