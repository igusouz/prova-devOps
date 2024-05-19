import pets from "../models/pets.js";


class PetsController{

   static async listarPets(req, res){
    try{
        const  listarPets= await pets.find({});
        res.status(200).json(listarPets);
    }
    catch(erro){
      res.status(500).json({message:`Erro ao listar pets- ${erro.message}`})
    }
   }
 
   static async listarPetsPorId(req, res){
    try{
        
        const id = req.params.id;
       
        const petsEncontrado = await pets.findById(id);
        res.status(200).json(petsEncontrado);
    }catch(erro){
        res.status(500).json({message:`erro ao listar pets - ${erro.message}`});
    }
   }

   static async atualizarPets(req, res){
    try{
     
      const id = req.params.id
      await pets.findByIdAndUpdate(id, req.body)
      res.status(200).json({message:`Pets atualizada com sucesso!`})

    }catch(erro){
      res.status(500).json({message:`erro ao atualizar Pets ${erro.message}`})
    }
   }


   
   static async cadastrarPets(req, res){

   
   try{
      
       const petsNovo = await pets.create(req.body);
       
       res.status(201).send({message:'Vaga cadastrada com sucesso!', pets: petsNovo});
   }
   catch(erro){
    
     res.status(500).json({error:`${erro.message}-falha ao cadastrar vaga`});
   }
 }
 static async excluirPets(req, res) {
  try {
  
    const id = req.params.id;
  
    await pets.findByIdAndDelete(id);

    res.status(200).json({ message: `Pets excluído com sucesso!` });
    
  } catch (erro) {
    res.status(500).json({ message: `Erro ao excluir Pets - ${erro.message}` });
  }
}


}

export default PetsController;