import express from 'express';
import { 
  createShortUrlController, 
  getAllShortUrlController 
} from '../controllers/apiControllers.mjs';

const router = express.Router();

// handles /api/short-url POST request
router.post('/short-url', createShortUrlController);

// handles /api/short-url GET request
router.get('/short-url', getAllShortUrlController);

export default router;

