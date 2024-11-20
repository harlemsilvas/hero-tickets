import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://harlemclaumann:ChxKySNDdAP97ru0@cluster0.69j3tzl.mongodb.net/hero-tickets"
    );
    console.log("Connect database success");
  } catch (error) {
    console.log("🚀 ~ connect ~ error:", error);
  }
}
