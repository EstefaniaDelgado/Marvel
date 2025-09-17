import { useEffect } from "react";
import type { MarvelCharacter } from "../../../hooks/useMarvelCharacters";

interface CharacterModalProps {
  isOpen: boolean;
  onClose: () => void;
  character: MarvelCharacter | null;
}

const CharacterModal = ({
  isOpen,
  onClose,
  character,
}: CharacterModalProps) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !character) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50 transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="hidden md:block bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gray-100 px-4 py-3 border-b flex items-center justify-between">
              <h2 className="text-gray-500 text-sm font-normal tracking-wide uppercase">
                CHARACTER
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 bg-gray-50">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "https://via.placeholder.com/128x128/9ca3af/ffffff?text=?";
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-3 pt-2">
                  <div className="space-y-2">
                    <p className="text-gray-800 text-lg font-medium">
                      {character.name}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Creado: {character.creationDate}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-200 rounded-lg p-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {character.description ||
                    "Sin descripción disponible para este personaje."}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden bg-white rounded-lg shadow-xl overflow-hidden max-h-[80vh] flex flex-col">
            {/* Header */}
            <div className="bg-gray-100 px-4 py-3 border-b flex items-center justify-between flex-shrink-0">
              <h2 className="text-gray-500 text-sm font-normal tracking-wide uppercase">
                CHAR...
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto bg-gray-50">
              <div className="p-4">
                {/* Image */}
                <div className="flex justify-center mb-4">
                  <div className="w-28 h-28 rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "https://via.placeholder.com/112x112/9ca3af/ffffff?text=?";
                      }}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2 mb-4 text-center">
                  <p className="text-gray-800 text-lg font-medium">
                    {character.name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Creado: {character.creationDate}
                  </p>
                </div>

                {/* Description */}
                <div className="bg-gray-200 rounded-lg p-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {character.description ||
                      "Sin descripción disponible para este personaje."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;