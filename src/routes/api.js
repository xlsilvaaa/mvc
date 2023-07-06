import express from 'express';
import ApiController from '../controllers/apiControllers.js';

const router = express.Router();

router

.get("/", ApiController.getAllApis)
.post("/", ApiController.createApis); //classe.função

// significa o END POINT ("/")

export default router;