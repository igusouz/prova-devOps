// Objetivo: Arquivo de rotas para o recurso Vagas
import express from 'express';  //responsabiliade do express
import PetSistterController from '../controllers/petSistterControllers.js';


//metodo especifico pra gestao de rotas
const routes = express.Router();

//passar a rota e controlador como parametro 
routes.get("/petSistter", PetSistterController.listarPetSistter);
routes.get("/petSistter/:id", PetSistterController.listarPetSistterPorId);
routes.post("/petSistter", PetSistterController.cadastrarPetSistter);
routes.put("/petSistter/:id", PetSistterController.atualizarPetSistter);
routes.delete("/petSistter/:id", PetSistterController.excluirPetSistter);

export default routes;