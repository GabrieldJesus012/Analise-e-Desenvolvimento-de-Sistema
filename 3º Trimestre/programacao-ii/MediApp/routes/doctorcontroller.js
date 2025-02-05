import { express } from 'express';
import DoctorServices from '../services/DoctorServices.js';

let router = express.Router();

router.get('/doctors', async(req,res) => {
    try {
        const doctors = await DoctorServices.getAllDoctors();
        res.send(doctors);     
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getdoctor/:id', async(req,res) => {
    const {id} = req.params;
    try {
        const doctor = await DoctorServices.getDoctor(id);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postdoctor/:id', async(req,res) => {
    const {doctorId,name,login,password,medicalSpecialty,medicalRegistration} = req.body;
    try {
        const doctor = await DoctorServices.saveDoctors({doctorId,name,login,password,medicalSpecialty,medicalRegistration});
        res.send(doctor);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/putdoctor/:id', async(req,res) => {
    const {id} = req.params;
    const {name,login,password,medicalSpecialty,medicalRegistration} = req.body;
    try {
        const doctor = await DoctorServices.updateDoctors(id, {name,login,password,medicalSpecialty,medicalRegistration});
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/deletedoctor/:id', async(req,res) => {
    const {id} = req.params;
    try {
        const doctor = await DoctorServices.deleteDoctors(id);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;
