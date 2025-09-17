import Character, { ICharacter } from '../models/Character';
import { CreateCharacterDto } from '../dtos/character.dto';
import { MarvelService, MarvelCharacter } from './marvel.service';

export class CharacterService {
  private marvelService: MarvelService;

  constructor() {
    this.marvelService = new MarvelService();
  }

  async getCustomCharacterById(id: string): Promise<MarvelCharacter | null> {
    const character = await Character.findById(id);
    if (!character) return null;

    return {
      id: character._id as any,
      name: character.name,
      image: character.img,
      creationDate: character.date,
      description: character.description,
      comics: 0,
      series: 0,
      isCustom: true
    };
  }

  async createCharacter(characterData: CreateCharacterDto): Promise<ICharacter> {
    const character = new Character(characterData);
    return await character.save();
  }

  async getMarvelCharacters(limit = 12, offset = 0): Promise<MarvelCharacter[]> {
    return await this.marvelService.getCharacters(limit, offset);
  }

  async getMarvelCharacterById(id: number): Promise<MarvelCharacter | null> {
    return await this.marvelService.getCharacterById(id);
  }

  async getAllCharacters(limit = 12, offset = 0): Promise<{ marvel: MarvelCharacter[], custom: ICharacter[] }> {
    const [marvelCharacters, customCharacters] = await Promise.all([
      this.getMarvelCharacters(limit, offset),
      Character.find().limit(limit).skip(offset)
    ]);
    
    return {
      marvel: marvelCharacters,
      custom: customCharacters
    };
  }

  async getMergedCharacters(limit = 20, offset = 0): Promise<any[]> {
    const [marvelCharacters, customCharacters] = await Promise.all([
      this.getMarvelCharacters(limit, offset),
      Character.find().limit(limit).skip(offset)
    ]);

    const transformedCustom = customCharacters.map(char => ({
      id: char._id,
      name: char.name,
      image: char.img,
      creationDate: char.date,
      description: char.description,
      comics: 0,
      series: 0,
      isCustom: true
    }));

    return [...marvelCharacters, ...transformedCustom];
  }

  async getComics(limit = 20, offset = 0) {
    return await this.marvelService.getComics(limit, offset);
  }

  async getSeries(limit = 20, offset = 0) {
    return await this.marvelService.getSeries(limit, offset);
  }
}
