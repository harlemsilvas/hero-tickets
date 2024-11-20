import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://harlemclaumann:Harlem010101*@cluster0.69j3tzl.mongodb.net/hero-tickets"
    );
  } catch (error) {
    console.log("🚀 ~ connect ~ error:", error);
  }
}
