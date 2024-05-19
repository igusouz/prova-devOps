// veterinario.js
import mongoose from "mongoose";

const veterinarioSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    endereco: { type: String },
    cpf: { type: Number },
}, { versionKey: false });

const veterinario = mongoose.model("veterinario", veterinarioSchema);

export { veterinario, veterinarioSchema };  // Corrigindo o nome da exportação
