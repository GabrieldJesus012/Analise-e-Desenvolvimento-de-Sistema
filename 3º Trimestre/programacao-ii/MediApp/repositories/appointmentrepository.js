import { Appointment} from "../models/Appointment.js";

const getallAppointments = async () => {
    return await Appointment.find();
}

const getAppointment = async (id) => {
    try {
        return await Appointment.findById(id);
    } catch (error) {
        throw new Error("Erro ao buscar consulta");
    }
}

const saveAppointment = async (date,doctorId,pacientId) => {
    try {
        const prescription = new Appointment({date,doctorId,pacientId});
        return await prescription.save();
    } catch (error) {
        throw new Error("Erro ao salvar consulta");
    }
}

const updateAppointment = async (id, {date,doctorId,pacientId}) => {
    try {
        return await Appointment.findByIdAndUpdate(id, {date,doctorId,pacientId}, {new: true});
    } catch (error) {
        throw new Error("Erro ao atualizar consulta");
    }
}

const deleteAppointment = async (id) => {
    try {
        return await Appointment.findByIdAndDelete(id);
    } catch (error) {
        throw new Error("Erro ao deletar consulta");
    }
}

const appointmentRepository = {
    getallAppointments,
    getAppointment,
    saveAppointment,
    updateAppointment,
    deleteAppointment
};
