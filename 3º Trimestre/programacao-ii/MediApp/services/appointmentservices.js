import AppointmentRepository from "../repositories/AppointmentRepository.js";

const getAllAppointments = async () => {
    return await AppointmentRepository.getallAppointments();
}

const getAppointments = async (id) => {
    return await AppointmentRepository.getallAppointments(id);
}

const saveAppointments = async ({date,doctorId,pacientId}) => {
    return await AppointmentRepository.saveAppointment({date,doctorId,pacientId});
}

const updateAppointments = async (id, {date,doctorId,pacientId}) => {
    return await AppointmentRepository.updateAppointment(id, {date,doctorId,pacientId});
}

const deleteAppointments = async (id) => {
    return await AppointmentRepository.deleteAppointment(id);
}

const appointmentServices = {
    getAllAppointments,
    getAppointments,
    saveAppointments,
    updateAppointments,
    deleteAppointments
}

export default appointmentServices;