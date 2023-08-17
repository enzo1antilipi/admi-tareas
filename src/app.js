import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import tasksRouter from "./routes/tasks.routes.js";
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
//al establecer las credentials en true permitimos que se establezcan en las solicitudes entre dominios
//con esto le estoy diciendo que solo se comunique con el puerto 5173 osea la comunicacion con el frontend
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// estos son mi middleware Nota1
app.use(authRoutes);
app.use(tasksRouter);
export default app;

//Nota 1: un middleware podemos decir que es un intermediario que se situa entre el cliente y el servidor
// puedn realizar varias tareas como autenticacion autorizacion, validacion de datos etc
//Al estar ubicado en una posicion intermedia tienen acceso tanto a la solicitud de entrada como a la respuesta de salida por lo tanto
//puede modificarla si es necesario
