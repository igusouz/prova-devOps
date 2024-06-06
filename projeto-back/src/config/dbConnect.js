import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Carrega as variáveis do arquivo .env

async function connectDataBase() {
    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) {
        throw new Error("A variável de ambiente MONGO_URL não está definida.");
    }

    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conexão com o MongoDB estabelecida com sucesso.");
    } catch (error) {
        console.error("Erro ao conectar com o MongoDB:", error);
        throw error;
    }

    return mongoose.connection;
}

export default connectDataBase;
