//import do modelo de empresa criado  na camada models 
import {petSistter} from "../models/petSistter.js"

/*
*/

class PetSistterController {

  static async listarPetSistter(req, res){
    try{
      const listaPetSistter = await petSistter.find({});
      res.status(200).json(listaPetSistter);
    }catch(erro){
      res.status(500).json({message: `Erro ao listar PetSistter - ${erro.message}`});
    
    }
    } 
x

    static async listarPetSistterPorId(req, res){
      try{
         
        const id =  req.params.id;
        const petSistterEncontrada = await petSistter.findById({id});
        res.status(200).json(petSistterEncontrada);
      }catch(erro){
        res.status(500).json({message: `Erro ao lista PetSistter - ${erro.message}`});
      
      }
      } 
    
    static async cadastrarPetSistter(req,res){
        try{
         
            const petSistterNova = await petSistter.create(req.body);
            res.status(201).send({message: 'petSistter cadastrada com sucesso!', petSistter: petSistterNova});
        }
        catch(erro){
            res.status(500).json({error:`${erro.message} -falha ao cadatrar petSistter`, });
        }
    }

      static async atualizarPetSistter(req, res){
        try{
         
          const id =  req.params.id;
          await petSistter.findByIdAndUpdate(id, req.body);
          res.status(200).json({message: `petSistter atualizada com sucesso!`});
        }catch(erro){
          res.status(500).json({message: `Erro ao lista petSistter - ${erro.message}`});
        
        }
        } 

          // deletar vagas 
      static async excluirPetSistter(req, res){
        try{
          
          const id =  req.params.id;
          await petSistter.findByIdAndDelete(id, req.body);
          res.status(200).json({message: `petSistter excluida com sucesso!`});
        }catch(erro){
          res.status(500).json({message: `Erro ao deletar petSistter - ${erro.message}`});
        
        }
        } 
}


export default PetSistterController;