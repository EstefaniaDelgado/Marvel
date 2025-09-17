import Character, { ICharacter } from '../models/Character';
import { CreateCharacterDto } from '../dtos/character.dto';
import { MarvelService, MarvelCharacter } from './marvel.service';

export class CharacterService {
  private marvelService: MarvelService;

  constructor() {
    this.marvelService = new MarvelService();
  }

  async getCharacterById(id: string): Promise<ICharacter | null> {
    return await Character.findById(id);
  }

  async createCharacter(characterData: CreateCharacterDto): Promise<ICharacter> {
    const character = new Character(characterData);
    return await character.save();
  }

  async getMarvelCharacters(limit = 20, offset = 0): Promise<MarvelCharacter[]> {
    return await this.marvelService.getCharacters(limit, offset);
  }

  async getMarvelCharacterById(id: number): Promise<MarvelCharacter | null> {
    return await this.marvelService.getCharacterById(id);
  }

  async getAllCharacters(limit = 20, offset = 0): Promise<{ marvel: MarvelCharacter[], custom: ICharacter[] }> {
    const [marvelCharacters, customCharacters] = await Promise.all([
      this.getMarvelCharacters(limit, offset),
      Character.find().limit(limit).skip(offset)
    ]);
    
    return {
      marvel: marvelCharacters,
      custom: customCharacters
    };
  }

  async getComics(limit = 20, offset = 0) {
    return await this.marvelService.getComics(limit, offset);
  }

  async getSeries(limit = 20, offset = 0) {
    return await this.marvelService.getSeries(limit, offset);
  }
}