import moongose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await moongose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(`\n MongoDB connected !!! 
        ${connectionInstance.connection.host}
        `);
  } catch (error) {
    console.log("Error connecting to database", error);
    process.exit(1);
  }
};

export default connectDB;
