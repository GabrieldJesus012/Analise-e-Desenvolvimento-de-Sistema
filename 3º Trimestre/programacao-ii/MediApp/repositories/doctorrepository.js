import { Doctor } from "../models/Doctor.js";

const getallDoctors = async () => {
    return await Doctor.find();
}

const getDoctor = async (id) => {
    try {
        return await Doctor.findById(id);
    } catch (error) {
        throw new Error("Erro ao buscar medico");
    }
}

const saveDoctor = async (doctorId,name,login,password,specialty,medicalRegistration,email,phone) => {
    try {
        const doctor = new Doctor({doctorId,name,login,password,specialty,medicalRegistration,email,phone});
        return await doctor.save();
    } catch (error) {
        throw new Error("Erro ao salvar medico");
    }
}

const updateDoctor = async (id, {doctorId,name,login,password,specialty,medicalRegistration,email,phone}) => {
    try {
        return await Doctor.findByIdAndUpdate(id, {doctorId,name,login,password,specialty,medicalRegistration,email,phone}, {new: true});
    } catch (error) {
        throw new Error("Erro ao atualizar medico");
    }
}

const deleteDoctor = async (id) => {
    try {
        return await Doctor.findByIdAndDelete(id);
    } catch (error) {

        throw new Error("Erro ao deletar medico");
    }
}

const doctorRepository = {
    getallDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor
}

export default doctorRepository;
