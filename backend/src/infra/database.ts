import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("");
  } catch (error) {
    console.log("🚀 ~ connect ~ error:", error);
  }
}
