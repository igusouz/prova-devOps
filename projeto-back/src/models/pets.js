import mongoose from "mongoose";


const petsSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    raca: { type: String },
    veterinario: { type: String },
    petSistter: { type: String },
}, { versionKey: false });

const pets = mongoose.model("pets", petsSchema);

export default pets;
