import express from "express";
import connectDB from "./config/connectDb.js";
import { fetchData } from "./config/storeDataIntoDb.js";
import router from "./routes/api.js";
import colors from "colors";
import path from "path";
import dotenv from "dotenv";


dotenv.config();
// Connect to MongoDB
connectDB(process.env.MONGO_URI);
// Fetch and store data into MongoDB
fetchData(); 



const app = express(); 
const PORT = process.env.PORT || 3000;


// Load index.html
const __dirname = path.resolve();
const public_path = path.join(__dirname, "public");
app.use(express.static(public_path));


app.get("/", (req, res) => {
    res.sendFile(path.join(public_path, "index.html"));
});


app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgGreen);
});