import { Request, Response } from "express";
import { CharacterService } from "../services/character.service";
import { CreateCharacterDto } from "../dtos/character.dto";

export class CharacterController {
  private characterService: CharacterService;

  constructor() {
    this.characterService = new CharacterService();
  }

  getCharacterById = async (req: Request, res: Response) => {
    try {
      const character = await this.characterService.getCustomCharacterById(
        req.params.id
      );
      if (!character) {
        return res.status(404).json({ message: "Character not found" });
      }
      res.status(200).json(character);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

  createCharacter = async (req: Request, res: Response) => {
    try {
      const characterData: CreateCharacterDto = req.body;
      const savedCharacter = await this.characterService.createCharacter(
        characterData
      );
      res.status(201).json(savedCharacter);
    } catch (error: any) {
      if (error.name === "ValidationError") {
        return res
          .status(400)
          .json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Server error" });
    }
  };

  getMarvelCharacters = async (req: Request, res: Response) => {
    try {
      const limit = parseInt(req.query.limit as string) || 20;
      const offset = parseInt(req.query.offset as string) || 0;
      const characters = await this.characterService.getMarvelCharacters(limit, offset);
      res.json(characters);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

  getMarvelCharacterById = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const character = await this.characterService.getMarvelCharacterById(id);
      if (!character) {
        return res.status(404).json({ message: "Marvel character not found" });
      }
      res.json(character);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

  getAllCharacters = async (req: Request, res: Response) => {
    try {
      const limit = parseInt(req.query.limit as string) || 20;
      const offset = parseInt(req.query.offset as string) || 0;
      const characters = await this.characterService.getAllCharacters(limit, offset);
      res.json(characters);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

  getComics = async (req: Request, res: Response) => {
    try {
      const limit = parseInt(req.query.limit as string) || 20;
      const offset = parseInt(req.query.offset as string) || 0;
      const comics = await this.characterService.getComics(limit, offset);
      res.json(comics);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

  getSeries = async (req: Request, res: Response) => {
    try {
      const limit = parseInt(req.query.limit as string) || 20;
      const offset = parseInt(req.query.offset as string) || 0;
      const series = await this.characterService.getSeries(limit, offset);
      res.json(series);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

  getMergedCharacters = async (req: Request, res: Response) => {
    try {
      const limit = parseInt(req.query.limit as string) || 20;
      const offset = parseInt(req.query.offset as string) || 0;
      const characters = await this.characterService.getMergedCharacters(limit, offset);
      res.json(characters);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

  getCustomCharacterById = async (req: Request, res: Response) => {
    try {
      const character = await this.characterService.getCustomCharacterById(req.params.id);
      if (!character) {
        return res.status(404).json({ message: "Custom character not found" });
      }
      res.json(character);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };
}