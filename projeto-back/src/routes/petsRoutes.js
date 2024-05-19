
import express from "express";
import petsController from "../controllers/petsControllers.js";



const routes = express.Router();

routes.get("/pets", petsController.listarPets);
routes.get("/pets/:id", petsController.listarPetsPorId);
routes.post("/pets", petsController.cadastrarPets);
routes.put("/pets/:id", petsController.atualizarPets);
routes.delete('/pets/:id', petsController.excluirPets);
    
export default routes;

