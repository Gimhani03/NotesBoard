import express from 'express';
import { createnotes, deletenotes, getnotes, getnotesbyid, updatenotes } from '../controllers/notesController.js';

const router = express.Router();

router.get('/notes', getnotes )
router.get('/notes/:id', getnotesbyid)
router.post('/createnotes', createnotes )
router.put('/updatenotes/:id', updatenotes )
router.delete('/deletenotes/:id', deletenotes)



export default router;