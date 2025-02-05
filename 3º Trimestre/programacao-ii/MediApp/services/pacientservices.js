import PacientRepository from "../repositories/PacientRepository.js";

const getAllPacients = async () => {
    return await PacientRepository.getallPacients();
}

const getPacients = async (id) => {
    return await PacientRepository.getPacient(id);
}

const savePacients = async ({name,cpf,birthDate,email,phone}) => {
    return await PacientRepository.savePacient({name,cpf,birthDate,email,phone});
}

const updatePacients = async (id, {name,cpf,birthDate,email,phone}) => {
    return await PacientRepository.updatePacient(id, {name,cpf,birthDate,email,phone});
}

const deletePacients = async (id) => {
    return await PacientRepository.deletePacient(id);
}

const pacientServices = {
    getAllPacients,
    getPacients,
    savePacients,
    updatePacients,
    deletePacients
}

export default pacientServices;