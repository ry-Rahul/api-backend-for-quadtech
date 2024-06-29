import express from "express";
import connectDB from "./config/connectDb.js";
import { fetchData } from "./config/storeDataIntoDb.js";
import router from "./routes/api.js";
import colors from "colors";
import path from "path";
import dotenv from "dotenv";
import { getTickerData } from "./controller/ticker.js";
import cors  from "cors";


dotenv.config();
// Connect to MongoDB
connectDB('mongodb+srv://ryrahul12345:Eds4wwzUQAT5lUQm@cluster0.38hmvpw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
// Fetch and store data into MongoDB
fetchData(); 



const app = express(); 
const PORT = process.env.PORT || 3000;
app.use(cors());


// Load index.html
const __dirname = path.resolve();
const public_path = path.join(__dirname, "public");
app.use(express.static(public_path));

app.use('/api', router);

app.get("/", (req, res) => {
    res.sendFile(path.join(public_path, "index.html"));
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgGreen);
});
