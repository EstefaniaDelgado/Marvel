import { useEffect, useState } from "react";
import { characterService } from "../services/character.service";


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

export interface UseMarvelCharactersReturn {
  characters: MarvelCharacter[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useMarvelCharacters = (
  limit = 12,
  offset = 0
): UseMarvelCharactersReturn => {
  const [characters, setCharacters] = useState<MarvelCharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const characters = await characterService.getMergedCharacters(limit, offset);
      setCharacters(characters);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
      console.error("Error fetching Marvel characters:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [limit, offset]);

  return { characters, loading, error, refetch: fetchCharacters };
};
