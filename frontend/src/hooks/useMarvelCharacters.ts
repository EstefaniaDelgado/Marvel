import { useEffect, useState } from "react";
import { generateMarvelAuth, MARVEL_CONFIG } from "../services";

interface MarvelAPICharacter {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
  };
  series: {
    available: number;
  };
}

export interface MarvelCharacter {
  id: number;
  name: string;
  image: string;
  creationDate: string;
  description: string;
  comics: number;
  series: number;
}

export interface UseMarvelCharactersReturn {
  characters: MarvelCharacter[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useMarvelCharacters = (
  limit = 20,
  offset = 0
): UseMarvelCharactersReturn => {
  const [characters, setCharacters] = useState<MarvelCharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      setError(null);

      const authParams = generateMarvelAuth();

      const params = new URLSearchParams({
        ...authParams,
        limit: limit.toString(),
        offset: offset.toString(),
        orderBy: "name",
      });

      const response = await fetch(
        `${MARVEL_CONFIG.baseUrl}/characters?${params}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();

      const transformedCharacters = data.data.results.map(
        (character: MarvelAPICharacter) => ({
          id: character.id,
          name: character.name,
          image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          creationDate: character.modified
            ? new Date(character.modified).getFullYear().toString()
            : "N/A",
          description: character.description || "Sin descripciÃ³n disponible",
          comics: character.comics.available,
          series: character.series.available,
        })
      );

      setCharacters(transformedCharacters);
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
}