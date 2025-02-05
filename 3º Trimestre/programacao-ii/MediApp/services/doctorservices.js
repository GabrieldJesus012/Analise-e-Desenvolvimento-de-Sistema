import DoctorRepository from "../repositories/DoctorRepository.js";

const getAllDoctors = async () => {
    return await DoctorRepository.getallDoctors();
}

const getDoctors = async (id) => {
    return await DoctorRepository.getDoctor(id);
}

const saveDoctors = async ({name,login,password,specialty,medicalRegistration,email,phone}) => {
    return await DoctorRepository.saveDoctor({name,login,password,specialty,medicalRegistration,email,phone});
}

const updateDoctors = async (id, {name,login,password,specialty,medicalRegistration,email,phone}) => {
    return await DoctorRepository.updateDoctor(id, {name,login,password,specialty,medicalRegistration,email,phone});
}

const deleteDoctors = async (id) => {
    return await DoctorRepository.deleteDoctor(id);
}


const doctorServices = {
    getAllDoctors,
    getDoctors,
    saveDoctors,
    updateDoctors,
    deleteDoctors
}

export default doctorServices;