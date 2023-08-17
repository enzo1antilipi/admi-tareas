import app from "./app.js"; //si importamos nuestros propios modulos tenemos  q colocar js
import { connectDB } from "./db.js";

connectDB();
app.listen(4000);
console.log("server on port ", 4000);
