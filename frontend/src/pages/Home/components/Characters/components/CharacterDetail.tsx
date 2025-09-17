import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CharacterDetailSkeleton from "../components/CharacterDetailSkeleton";
import { characterService, type MarvelCharacter } from "../../../../../services/character.service";

export default function CharacterDetail() {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<MarvelCharacter | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);

        const isCustom = id.length === 24 && /^[0-9a-fA-F]{24}$/.test(id);
        
        let character;
        if (isCustom) {
          character = await characterService.getCustomCharacterById(id);
        } else {
          character = await characterService.getMarvelCharacterById(parseInt(id));
        }
        
        setCharacter(character);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <CharacterDetailSkeleton />;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-600">Personaje no encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="hidden md:block bg-white rounded-lg overflow-hidden max-w-4xl mx-auto">
          <div className="bg-gray-100 px-6 py-4 border-b">
            <h1 className="text-gray-800 text-2xl font-bold">
              {character.name}
            </h1>
          </div>

          <div className="p-8 bg-gray-50">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-64 h-64 rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://via.placeholder.com/256x256/9ca3af/ffffff?text=?";
                    }}
                  />
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-1">Comics</div>
                    <div className="text-2xl font-bold text-red-600">
                      {character.comics}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-1">Series</div>
                    <div className="text-2xl font-bold text-red-600">
                      {character.series}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-1">
                    Create Date
                  </div>
                  <div className="text-lg font-semibold text-gray-800">
                    {character.creationDate}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 ml-[25%] w-[75%] bg-gray-200 rounded-l-full pl-12 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed line-clamp-3">
                {character.description}
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-100 px-4 py-3 border-b">
            <h1 className="text-gray-800 text-xl font-bold">
              {character.name}
            </h1>
          </div>

          <div className="p-6 bg-gray-50 space-y-6">
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-lg overflow-hidden bg-gray-200">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://via.placeholder.com/192x192/9ca3af/ffffff?text=?";
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-xs text-gray-500 mb-1">Comics</div>
                <div className="text-xl font-bold text-red-600">
                  {character.comics}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-xs text-gray-500 mb-1">Series</div>
                <div className="text-xl font-bold text-red-600">
                  {character.series}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-sm text-gray-500 mb-1">
                Fecha de Creaci贸n
              </div>
              <div className="text-lg font-semibold text-gray-800">
                {character.creationDate}
              </div>
            </div>

            <div className="mr-[5%] w-[95%] bg-gray-200 rounded-r-full pr-6 p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Descripci贸n
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                {character.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}