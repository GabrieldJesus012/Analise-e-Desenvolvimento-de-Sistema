import { express } from 'express';
import AppointmentServices from '../services/AppointmentServices.js';

let router = express.Router();

router.get('/appointments', async(req,res) => {
    try {
        const appointments = await AppointmentServices.getAllAppointments();
        res.send(appointments);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getappointment/:id', async(req,res) => {
    const {id} = req.params;
    try {
        const appointment = await AppointmentServices.getAppointment(id);
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postappointment/:id', async(req,res) => {
    const {date,doctorId,pacientId} = req.body;
    try {
        const appointment = await AppointmentServices.saveAppointments({date,doctorId,pacientId});
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/putappointment/:id', async(req,res) => {
    const {id} = req.params;
    const {date,doctorId,pacientId} = req.body;
    try {
        const appointment = await AppointmentServices.updateAppointments(id, {date,doctorId,pacientId});
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/deleteappointment/:id', async(req,res) => {
    const {id} = req.params;
    try {
        const appointment = await AppointmentServices.deleteAppointments(id);
        res.send(appointment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;
