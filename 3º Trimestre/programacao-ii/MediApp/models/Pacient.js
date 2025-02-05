import {mongoose} from "mongoose";

const Schema = mongoose.Schema;

const pacientSchema = new Schema({
    name:{
        type:String,
        required: [true, "Nome é obrigatório"]
    },
    cpf: {
        type:String,
        required: [true, "CPF é obrigatório"]
    },
    birthDate: {
        type:Date,
        required: [true, "Data de nascimento é obrigatória"]
    },
    email: {
        type:String,
        required: [true, "Email é obrigatório"]
    },
    phone: {
        type:String,
        required: [true, "Telefone é obrigatório"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Pacient = mongoose.model('Pacient', pacientSchema);
export default Pacient;