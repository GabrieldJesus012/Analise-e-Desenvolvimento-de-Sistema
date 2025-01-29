import {mongoose} from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    doctorId: {
        type:String,
        required: [true, "Id do médico é obrigatório"]  
    },
    name: {
        type: String,
        required: [true, "Nome é obrigatório"]
    },
    login: {
        type: String,
        required: [true, "Login é obrigatório"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Senha é obrigatória"],
    },
    medicalSpecialty: {
        type: String,
        required: [true, "Especialidade é obrigatória"]
    },
    medicalRegistration: {
        type: String,
        required: [true, "Registro médico é obrigatório"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email é obrigatório"],
    },
    phone: {
        type: String,
        required: [true, "Telefone é obrigatório"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const doctor = mongoose.model('Doctor', doctorSchema);
export default doctor;