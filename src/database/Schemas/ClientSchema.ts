import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    name: String,
    cpf: String,
    celphone: String,
    contractNumber: Number,
    contractDate: Date,
    contractValue: Number,
    contractSituation: String,
    action: String
})

export default mongoose.model('Client', ClientSchema)