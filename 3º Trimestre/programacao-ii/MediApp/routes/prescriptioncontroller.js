import { express } from 'express';
import PrescriptionServices from '../services/PrescriptionServices.js';

let router = express.Router();

router.get('/prescriptions', async(req,res) => {
    try {
        const prescriptions = await PrescriptionServices.getAllPrescriptions();
        res.send(prescriptions);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getprescription/:id', async(req,res) => {
    const {id} = req.params;
    try {
        const prescription = await PrescriptionServices.getPrescription(id);
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postprescription/:id', async(req,res) => {
    const {date,appointmentId,medicine,dosage,instructions} = req.body;
    try {
        const prescription = await PrescriptionServices.savePrescription({date,appointmentId,medicine,dosage,instructions});
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/putprescription/:id', async(req,res) => {
    const {id} = req.params;
    const {date,appointmentId,medicine,dosage,instructions} = req.body;
    try {
        const prescription = await PrescriptionServices.updatePrescription(id, {date,appointmentId,medicine,dosage,instructions});
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/deleteprescription/:id', async(req,res) => {
    const {id} = req.params;
    try {
        const prescription = await PrescriptionServices.deletePrescription(id);
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;
