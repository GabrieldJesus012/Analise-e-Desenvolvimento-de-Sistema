import {mongoose} from "mongoose";

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
    date: {
        type: Date, 
        required: [true, "Data é obrigatória"]
    },
    appointmentId: {
        type:String,
        required: [true, "Id da consulta é obrigatório"]
    },
    medicine: {
        type:String,
        required: [true, "Medicamento é obrigatório"]
    },
    dosage: {
        type:String,
        required: [true, "Dosagem é obrigatória"]
    },
    instructions: {
        type:String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Prescription = mongoose.model('Prescription', prescriptionSchema);
export default Prescription;