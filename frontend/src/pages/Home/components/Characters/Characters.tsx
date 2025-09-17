import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "./characters.css";
import { useMarvelCharacters, type MarvelCharacter } from "../../../../hooks/useMarvelCharacters";

export default function Characters() {
  const { characters, loading, error } = useMarvelCharacters(12, 0);
  const navigate = useNavigate();

  const handleCharacterClick = (character: MarvelCharacter) => {
    navigate(`/character/${character.id}`);
  };

  if (loading) {
    return (
      <div className="w-full bg-gray-50 py-2 my-8">
        <div className="container mx-auto w-full max-w-2xl md:max-w-4xl px-4">
          <h1 className="text-3xl font-bold text-center my-4 text-gray-800">
            Characters
          </h1>
          <div className="mx-auto">
            <div className="responsive-grid-swiper">
              <div className="md:hidden space-y-5">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                  <div className="aspect-square bg-gray-300"></div>
                </div>
              </div>

              <div className="hidden md:grid grid-cols-2 gap-8">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse"
                  >
                    <div className="aspect-square bg-gray-300"></div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-gray-50 py-2 my-8">
        <div className="container mx-auto w-full max-w-2xl md:max-w-4xl px-4">
          <h1 className="text-3xl font-bold text-center my-4 text-gray-800">
            Characters
          </h1>
          <div className="text-center">
            <p className="text-red-600">Error: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 py-2 my-8">
      <div className="container mx-auto w-full max-w-2xl md:max-w-4xl px-4">
        <h1 className="text-3xl font-bold text-center my-4 text-gray-800">
          Characters
        </h1>

        <div className="mx-auto">
          <Swiper
            modules={[Grid, Pagination]}
            slidesPerView={1}
            grid={{
              rows: 1,
              fill: "row",
            }}
            spaceBetween={20}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                grid: {
                  rows: 2,
                  fill: "row",
                },
                spaceBetween: 30,
              },
            }}
            className="responsive-grid-swiper"
          >
            {characters.map((character) => (
              <SwiperSlide key={character.id} className="h-auto">
                <div
                  className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full group cursor-pointer"
                  onClick={() => handleCharacterClick(character)}
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
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
