//esto es para la conexion con la base de datos

import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://enzoantilipi1:borcella8@cluster0.fgxcl2z.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(" >>>> DB is connected");
  } catch (error) {
    console.log(error);
  }
};
//mongodb://localhost/merndb    esta es la coneccion  a la base mongo que esta en mi computadora esto va en connect

//
