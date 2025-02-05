import { Pacient } from "../models/Pacient.js";

const getallPacients = async () => {
    return await Pacient.find();
}

const getPacient = async (id) => {
    try {
        return await Pacient.findById(id);
    } catch (error) {
        throw new Error("Erro ao buscar paciente");
    }
}

const savePacient = async (name,cpf,birthDate,email,phone) => {
    try {
        const pacient = new Pacient({name,cpf,birthDate,email,phone});
        return await pacient.save();

    } catch (error) {
        throw new Error("Erro ao salvar paciente");
    }
}

const updatePacient = async (id, {name,cpf,birthDate,email,phone}) => {
    try {
        return await Pacient.findByIdAndUpdate(id, {name,cpf,birthDate,email,phone}, {new: true});
    } catch (error) {
        throw new Error("Erro ao atualizar paciente");
    }
}

const deletePacient = async (id) => {
    try {
        return await Pacient.findByIdAndDelete(id);
    } catch (error) {
        throw new Error("Erro ao deletar paciente");
    }
}

const pacientRepository = {
    getallPacients,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
}

