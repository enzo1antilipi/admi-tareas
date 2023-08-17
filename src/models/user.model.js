import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
//Aqui especificaremos los tipos de datos que vamos a mandar a la BD
//Con el required le decimos que simpre vamos a requerir un
//usermane , email y password
//Trim  hace que no tome los caracteres como porejemplo los espacios
//Unique hace que no podamos crear otro usuario con el mismo correo por ejemplo
