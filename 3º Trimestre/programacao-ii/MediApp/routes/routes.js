import {express} from 'express';
let router = express.Router();
router.get('/', function(req, res){
    console.log('Rota raiz');
    res.status(200).json({message: 'Rota raiz'});
});

export default router;