import {mongoose} from "mongoose";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    date: {
        type: Date, 
        required: [true, "Data é obrigatória"]
    },
    doctorId: {
        type:String,
        required: [true, "Id do médico é obrigatório"]  
    },
    pacientId: {
        type:String,
        required: [true, "Id do paciente é obrigatório"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;
