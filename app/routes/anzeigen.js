import { getAlleAnzeigen, gettypehouse, gettypeconstructionsite, gettypeapartment, getidfilter, AnzeigeErstellen, updateAnzeige, deleteAnzeige } from '../controllers/anzeigen';
const router = require('express').Router();



router.get('/', contoller.getAlleAnzeigen )
router.get('/houses', contoller.gettypehouse );
router.get('/construction-sites', contoller.gettypeconstructionsite );
router.get('/apartments', contoller.gettypeapartment );
router.get('/:id', contoller.getidfilter );
router.post('/', AnzeigeErstellen );
router.put('/:id', contoller.updateAnzeige )
router.delete('/:id', contoller.deleteAnzeige );
  

export default router;
