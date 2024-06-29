import mongoose from "mongoose";

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri,{
      dbName:"QUADBTECH",
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
 
export default connectDB;
