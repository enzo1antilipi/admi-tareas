import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import tasksRouter from "./routes/tasks.routes.js";
const app = express();

//app.use(cors());
const corsOptions = {
  origin: ["https://admi-tarea-front-7lzd-cq88b3p55-enzo1antilipi.vercel.app"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  exposedHeaders: "Access-Control-Allow-Origin",
  credentials: true,
};
app.use(cors(corsOptions));
// app.use(
//   cors({
//     origin: "https://admi-tarea-front-7lzd-ap4ymu0o3-enzo1antilipi.vercel.app",este anda
//     credentials: true,
//   })
// );
//al establecer las credentials en true permitimos que se establezcan en las solicitudes entre dominios
//con esto le estoy diciendo que solo se comunique con el puerto 5173 osea la comunicacion con el frontend
//http://localhost:5173  este es el fornt de manera local
//https://admi-tarea-front-7lzd-dlmybn6ee-enzo1antilipi.vercel.app  ULTIMO link que andaba
//https://admi-tarea-front-7lzd-ap4ymu0o3-enzo1antilipi.vercel.app

//nota el error de cors me vuelve a aparecer cuando cambio al link de vercel
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// estos son mi middleware Nota1
app.use(authRoutes);
app.use(tasksRouter);

//esto es de prueba
// app.get("/generar-token", (req, res) => {
//   const token = "tu-token-de-autenticacion";

//   // Configurar la cookie como segura y con SameSite "none"
//   res.cookie("miToken", token, {
//     secure: true, // Solo se enviará en conexiones HTTPS
//     sameSite: "none", // Permite que se envíe desde dominios diferentes
//     httpOnly: true, // La cookie solo puede ser accedida por el servidor
//   });

//   res.send("Token generado y cookie configurada");
// });

export default app;

//Nota 1: un middleware podemos decir que es un intermediario que se situa entre el cliente y el servidor
// puedn realizar varias tareas como autenticacion autorizacion, validacion de datos etc
//Al estar ubicado en una posicion intermedia tienen acceso tanto a la solicitud de entrada como a la respuesta de salida por lo tanto
//puede modificarla si es necesario
