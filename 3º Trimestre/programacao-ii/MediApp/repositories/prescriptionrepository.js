import { Prescription} from "../models/Prescription.js";    

const getallPrescriptions = async () => {
    return await Prescription.find();
}

const getPrescription = async (id) => {
    try {
        return await Prescription.findById(id);
    } catch (error) {
        throw new Error("Erro ao buscar consulta");
    }
}

const savePrescription = async (date,appointmentId,medicine,dosage,instructions) => {
    try {
        const prescription = new Prescription({date,appointmentId,medicine,dosage,instructions});
        return await prescription.save();
    } catch (error) {
        throw new Error("Erro ao salvar consulta");
    }
}

const updatePrescription = async (id, {date,appointmentId,medicine,dosage,instructions}) => {
    try {
        return await Prescription.findByIdAndUpdate(id, {date,appointmentId,medicine,dosage,instructions}, {new: true});
    } catch (error) {
        throw new Error("Erro ao atualizar consulta");
    }
}

const deletePrescription = async (id) => {
    try {
        return await Prescription.findByIdAndDelete(id);
    } catch (error) {
        throw new Error("Erro ao deletar consulta");
    }
}

const prescriptionRepository = {
    getallPrescriptions,
    getPrescription,
    savePrescription,
    updatePrescription,
    deletePrescription
}

export default prescriptionRepository;
