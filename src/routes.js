import { Router } from "express";
import controllerCostureira from "./contollers/controller.costureira.js";
import controllerUser from "./contollers/controller.user.js";
import controllerAppointment from "./contollers/controller.appointment.js";
import jwt from "./token.js";
const router = Router();


//Costureiras...
router.get("/costureiras", jwt.ValidateToken, controllerCostureira.Listar);
router.post("/costureiras", jwt.ValidateToken, controllerCostureira.Inserir);
router.put("/costureiras/:id_costureira",jwt.ValidateToken, controllerCostureira.Editar);
router.delete("/costureiras/:id_costureira", jwt.ValidateToken, controllerCostureira.Excluir);
router.get("/costureiras/:id_costureira/services", jwt.ValidateToken, controllerCostureira.ListarServicos);

//Users...
router.post("/users/register", controllerUser.Inserir);
router.post("/users/login", controllerUser.Login);
router.get("/users/profile", jwt.ValidateToken, controllerUser.Profile);

//Reservas (appointements)...
router.get("/appointments", jwt.ValidateToken, controllerAppointment.ListarByUser);
router.post("/appointments", jwt.ValidateToken, controllerAppointment.Inserir);
router.delete("/appointments/:id_appointment", jwt.ValidateToken, controllerAppointment.Excluir);
export default router; 