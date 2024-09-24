  import express from "express";
  import connectDataBase from "./config/dbConnect.js";
  import idade from "./models/idade.js";

  const conexao = await connectDataBase();

  conexao.on("error", (erro)=>{
    console.log("Erro de conexão: ", erro);
  });

  conexao.once("open", ()=>{
    console.log("Conexão com o banco realizada devidamente!")
  });

  const app = express();
  app.use(express.json())

    app.get('/', (req, res) => {
      res.status(200).send('Inicio AdotaEU');
    }) 
    
    app.get('/idade', async(req, res)=> {
      const listaIdade = await idade.find({});
        res.status(200).json(listaIdade);
    })

    export default app 

        

