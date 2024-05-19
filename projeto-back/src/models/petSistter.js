// petSistter.js
import mongoose from "mongoose";

const petSistterSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    endereco: { type: String },
    cpf: { type: Number },
}, { versionKey: false });

const petSistter = mongoose.model("petSistter", petSistterSchema);

export { petSistter, petSistterSchema }; 
