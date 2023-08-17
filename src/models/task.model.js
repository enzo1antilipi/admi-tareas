import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, //con este required le decimos que este campo es requerido obligatoriamente
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema);
