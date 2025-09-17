export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
};

export interface CreateCharacterDto {
  name: string;
  date: string;
  description: string;
  img: string;
}

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

export const characterService = {
  async getMarvelCharacters(limit = 20, offset = 0): Promise<MarvelCharacter[]> {
    const params = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
    });
    
    const response = await fetch(`${API_CONFIG.baseUrl}/characters/marvel?${params}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    
    return await response.json();
  },

  async getMarvelCharacterById(id: number): Promise<MarvelCharacter> {
    const response = await fetch(`${API_CONFIG.baseUrl}/characters/marvel/${id}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    
    return await response.json();
  },

  async createCharacter(character: CreateCharacterDto) {
    const response = await fetch(`${API_CONFIG.baseUrl}/characters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    
    return await response.json();
  },

  async getAllCharacters(limit = 20, offset = 0) {
    const params = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
    });
    
    const response = await fetch(`${API_CONFIG.baseUrl}/characters?${params}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    
    return await response.json();
  },

  async getComics(limit = 20, offset = 0) {
    const params = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
    });
    
    const response = await fetch(`${API_CONFIG.baseUrl}/characters/comics?${params}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    
    return await response.json();
  },

  async getSeries(limit = 20, offset = 0) {
    const params = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
    });
    
    const response = await fetch(`${API_CONFIG.baseUrl}/characters/series?${params}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    
    return await response.json();
  },

  // Get merged characters (Marvel + Custom)
  async getMergedCharacters(limit = 20, offset = 0): Promise<MarvelCharacter[]> {
    const params = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
    });
    
    const response = await fetch(`${API_CONFIG.baseUrl}/characters/merged?${params}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    
    return await response.json();
  },

  // Get custom character by ID
  async getCustomCharacterById(id: string): Promise<MarvelCharacter> {
    const response = await fetch(`${API_CONFIG.baseUrl}/characters/custom/${id}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    
    return await response.json();
  },
};