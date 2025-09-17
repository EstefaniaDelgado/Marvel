import CryptoJS from 'crypto-js';

const MARVEL_CONFIG = {
  publicKey: process.env.MARVEL_PUBLIC_KEY,
  privateKey: process.env.MARVEL_PRIVATE_KEY,
  baseUrl: 'https://gateway.marvel.com/v1/public',
};

const generateMD5 = (keys: string) => {
  return CryptoJS.MD5(keys).toString();
};

const generateMarvelAuth = () => {
  if (!MARVEL_CONFIG.publicKey || !MARVEL_CONFIG.privateKey) {
    throw new Error('Marvel API keys not configured. Please set MARVEL_PUBLIC_KEY and MARVEL_PRIVATE_KEY environment variables.');
  }
  
  const timestamp = Date.now().toString();
  const hash = generateMD5(timestamp + MARVEL_CONFIG.privateKey + MARVEL_CONFIG.publicKey);
  
  return {
    ts: timestamp,
    apikey: MARVEL_CONFIG.publicKey,
    hash: hash,
  };
};

export interface MarvelCharacter {
  id: number;
  name: string;
  image: string;
  creationDate: string;
  description: string;
  comics: number;
  series: number;
  isCustom?: boolean;
}

export class MarvelService {
  async getCharacters(limit = 20, offset = 0): Promise<MarvelCharacter[]> {
    try {
      const authParams = generateMarvelAuth();
      const params = new URLSearchParams({
        ...authParams,
        limit: limit.toString(),
        offset: offset.toString(),
        orderBy: 'name',
      });

      const response = await fetch(`${MARVEL_CONFIG.baseUrl}/characters?${params}`);
      
      if (!response.ok) {
        throw new Error(`Marvel API Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      
      if (!data.data || !data.data.results) {
        throw new Error('Invalid response format from Marvel API');
      }
      
      return data.data.results.map((character: any) => ({
        id: character.id,
        name: character.name,
        image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        creationDate: character.modified
          ? new Date(character.modified).getFullYear().toString()
          : 'N/A',
        description: character.description || 'Sin descripción disponible',
        comics: character.comics?.available || 0,
        series: character.series?.available || 0,
      }));
    } catch (error) {
      console.error('Error fetching Marvel characters:', error);
      throw error;
    }
  }

  async getCharacterById(id: number): Promise<MarvelCharacter | null> {
    try {
      const authParams = generateMarvelAuth();
      const params = new URLSearchParams(authParams);

      const response = await fetch(`${MARVEL_CONFIG.baseUrl}/characters/${id}?${params}`);
      
      if (!response.ok) {
        throw new Error(`Marvel API Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      
      if (!data.data || !data.data.results) {
        throw new Error('Invalid response format from Marvel API');
      }
      
      const character = data.data.results[0];
      if (!character) return null;

      return {
        id: character.id,
        name: character.name,
        image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        creationDate: character.modified
          ? new Date(character.modified).getFullYear().toString()
          : 'N/A',
        description: character.description || 'Sin descripción disponible',
        comics: character.comics?.available || 0,
        series: character.series?.available || 0,
      };
    } catch (error) {
      console.error(`Error fetching Marvel character ${id}:`, error);
      throw error;
    }
  }

  async getComics(limit = 20, offset = 0) {
    try {
      const authParams = generateMarvelAuth();
      const params = new URLSearchParams({
        ...authParams,
        limit: limit.toString(),
        offset: offset.toString(),
        orderBy: 'title',
      });

      const response = await fetch(`${MARVEL_CONFIG.baseUrl}/comics?${params}`);
      
      if (!response.ok) {
        throw new Error(`Marvel API Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      
      if (!data.data || !data.data.results) {
        throw new Error('Invalid response format from Marvel API');
      }
      
      return data.data.results.map((comic: any) => ({
        id: comic.id,
        title: comic.title || 'Sin título',
        image: `${comic.thumbnail?.path}.${comic.thumbnail?.extension}`,
        description: comic.description || 'Sin descripción disponible',
      }));
    } catch (error) {
      console.error('Error fetching Marvel comics:', error);
      throw error;
    }
  }

  async getSeries(limit = 20, offset = 0) {
    try {
      const authParams = generateMarvelAuth();
      const params = new URLSearchParams({
        ...authParams,
        limit: limit.toString(),
        offset: offset.toString(),
        orderBy: 'title',
      });

      const response = await fetch(`${MARVEL_CONFIG.baseUrl}/series?${params}`);
      
      if (!response.ok) {
        throw new Error(`Marvel API Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      
      if (!data.data || !data.data.results) {
        throw new Error('Invalid response format from Marvel API');
      }
      
      return data.data.results.map((serie: any) => ({
        id: serie.id,
        title: serie.title || 'Sin título',
        image: `${serie.thumbnail?.path}.${serie.thumbnail?.extension}`,
        description: serie.description || 'Sin descripción disponible',
      }));
    } catch (error) {
      console.error('Error fetching Marvel series:', error);
      throw error;
    }
  }
}