import { express } from 'express';
import PacientServices from '../services/PacientServices.js';

let router = express.Router();

router.get('/pacients', async(req,res) => {
    try {
        const pacients = await PacientServices.getAllPacients();
        res.send(pacients);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getpacient/:id', async(req,res) => {
    const {id} = req.params;
    try {
        const pacient = await PacientServices.getPacient(id);
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postpacient/:id', async(req,res) => {
    const {name,cpf,birthDate,email,phone} = req.body;
    try {
        const pacient = await PacientServices.savePacients({name,cpf,birthDate,email,phone});
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/putpacient/:id', async(req,res) => {
    const {id} = req.params;
    const {name,cpf,birthDate,email,phone} = req.body;
    try {

        const pacient = await PacientServices.updatePacients(id, {name,cpf,birthDate,email,phone});
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/deletepacient/:id', async(req,res) => {
    const {id} = req.params;
    try {
        const pacient = await PacientServices.deletePacients(id);
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;
