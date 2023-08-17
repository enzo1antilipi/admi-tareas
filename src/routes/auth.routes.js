import { Router } from "express";
import {
  login,
  logout,
  register,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middllewares/validateToken.js";
import { validateSchema } from "../middllewares/validator.middleware.js";
import { resgisteSchema, loginSchema } from "../schemas/auth.schema.js";
const router = Router();

router.post("/api/register", validateSchema(resgisteSchema), register);

router.post("/api/login", validateSchema(loginSchema), login);

router.post("/api/logout", logout);

router.get("/api/verify", verifyToken);

router.get("/api/profile", authRequired, profile); //Con el authRequired estoy protejiendo la ruta

//Le agrego el prefijo api por que estan son rutas unicamente del backend
// y por si en el front llego a tner rutas que se llamen igual que no ocurra ningun tipo de error

export default router;
