import axios from "axios";


const petsApi = axios.create({baseURL: "http://18.226.34.50:3000/pets"});

async function getPets(){
    try {
        const response = await petsApi.get('/');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados na API frontend", error);
    }
}

async function criarPets(pet) {
    try {
        const response = await petsApi.post('/', pet);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar vaga na API ", error);
    }
}

async function atualizarPets(id, pets) {
    try {
        const response = await petsApi.put(`/${id}`, pets);
        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar vaga com o ID ${id} na API `, error);
    }
}

async function excluirPets(id) {
    try {
        const response = await petsApi.delete(`/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao excluir vaga com o ID ${id} na API `, error);
    }
}

export {
    getPets,
    criarPets,
    atualizarPets,
    excluirPets
};