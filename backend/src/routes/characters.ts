import { Router } from 'express';
import { CharacterController } from '../controllers/character.controller';

const router = Router();
const characterController = new CharacterController();

// GET /characters - Get all characters (Marvel + Custom)
router.get('/', characterController.getAllCharacters);

// GET /characters/marvel - Get Marvel characters
router.get('/marvel', characterController.getMarvelCharacters);

// GET /characters/marvel/:id - Get Marvel character by ID
router.get('/marvel/:id', characterController.getMarvelCharacterById);

// GET /characters/comics - Get Marvel comics
router.get('/comics', characterController.getComics);

// GET /characters/series - Get Marvel series
router.get('/series', characterController.getSeries);

// GET /characters/:id - Get custom character by ID
router.get('/:id', characterController.getCharacterById);

// POST /characters - Create custom character
router.post('/', characterController.createCharacter);

export default router;