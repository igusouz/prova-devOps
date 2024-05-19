
import express from "express";
import petsroutes from "./petsRoutes.js"
import petSistterroutes  from "./petSistterRoutes.js";



const routes=(app)=>{
    app.route("/").get((req, res)=>res.status(200).send("Inicio AdotaEu"));

    app.use(express.json(), petsroutes, petSistterroutes);
};

export default routes;