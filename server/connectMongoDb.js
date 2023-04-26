import mongoose from "mongoose";

const connectDB = async () => {
  const CONNECTION_URL="mongodb+srv://gargkush2003:Rakesh%401310@inqueries.vgwsf54.mongodb.net/?retryWrites=true&w=majority";
  try {
    const conn = await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
