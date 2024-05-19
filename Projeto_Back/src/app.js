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
  /*const idade = [
      {id: 1, "titulo": "De 0 a 1 ano"},
      {id: 2, "titulo": "maior que 1 ano"},
      {id: 3, "titulo": "Ate 2 anos"}
    ]
  */
    app.get('/', (req, res) => {
      res.status(200).send('Inicio AdotaEU');
    }) 
    
    app.get('/idade', async(req, res)=> {
      const listaIdade = await idade.find({});
        res.status(200).json(listaIdade);
    })

   /* app.post('/idade', (req, res) => {
      idade.push(req.body);
      res.status(201).send('Vaga cadastrada com Sucesso!')
    })

    app.put('/idade/:id', (req, res) => {
      let index = buscaVaga(req.params.id);
      idade[index].titulo = req.body.titulo;
      res.json(idade);
    })
    
    app.get('/idade/:id', (req, res)=>{
      const index = buscaVaga(req.params.id);
      res.status(201).json(idade[index]);

    })

    app.delete('/idade/:id',(req, res)=>{
      const index = buscaVaga(req.params.id);
      if (index !== -1) {
        idade.splice(index, 1); // Remove 1 elemento a partir da posição index
        res.status(204).send(); // 204 significa "No Content" (sucesso, mas sem conteúdo)
      } else {
        res.status(404).send('Vaga não encontrada'); // Retorna um erro se o ID não for encontrado
      }
    })
    

    function buscaVaga(id) {
      return idade.findIndex(idade => idade.id == id)
    }*/
    export default app 

        

