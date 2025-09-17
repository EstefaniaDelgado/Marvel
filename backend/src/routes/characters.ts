import { Router } from "express";
import { CharacterController } from "../controllers/character.controller";

const router = Router();
const characterController = new CharacterController();

router.get("/", characterController.getAllCharacters);

router.get("/marvel", characterController.getMarvelCharacters);

router.get("/marvel/:id", characterController.getMarvelCharacterById);

router.get("/comics", characterController.getComics);

router.get("/series", characterController.getSeries);

router.get("/merged", characterController.getMergedCharacters);

router.get("/custom/:id", characterController.getCustomCharacterById);

router.get("/:id", characterController.getCharacterById);

router.post("/", characterController.createCharacter);

export default router;