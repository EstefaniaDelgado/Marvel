import { SwiperSlide } from "swiper/react";
import type { MarvelCharacter } from "../../../../../hooks/useMarvelCharacters";

interface CharacterProps {
  character: MarvelCharacter;
  onClick: (character: MarvelCharacter) => void;
}

export default function Character({ character, onClick }: CharacterProps) {
  return (
    <SwiperSlide className="h-auto">
      <div
        className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full group cursor-pointer"
        onClick={() => onClick(character)}
      >
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-lg md:text-xl font-bold mb-1 drop-shadow-lg">
            {character.name}
          </h3>

          <div className="flex items-center justify-between">
            <span className="text-white/90 text-xs md:text-sm font-medium bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm">
              {character.creationDate}
            </span>

            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
}