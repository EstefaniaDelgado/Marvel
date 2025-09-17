import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, EffectCoverflow } from "swiper/modules";
import { useEffect, useState } from "react";
import "./slider.css";
import { characterService } from "../../../../services/character.service";

interface Comic {
  id: number;
  title: string;
  image: string;
  description: string;
}

export default function Slider() {
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const data = await characterService.getComics(10, 0);
        setComics(data);
      } catch (error) {
        console.error('Error fetching comics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComics();
  }, []);

  if (loading) {
    return (
      <div className="w-full pt-4 flex flex-col justify-center items-center mx-auto mb-8 bg-[#E4E6EB]">
        <div className="pt-4 w-full md:w-[75%] flex flex-col justify-center items-center gap-8">
          <div className="animate-pulse flex space-x-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-[180px] md:w-[220px] lg:w-[260px] h-72 lg:h-[400px] xl:h-[500px] bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-4 flex flex-col justify-center items-center mx-auto mb-8 bg-[#E4E6EB]">
      <div className="pt-4 w-full md:w-[75%] flex flex-col justify-center items-center gap-8">
        <Swiper
          initialSlide={comics.length / 2}
          modules={[Pagination, Scrollbar, EffectCoverflow]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={150}
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full max-w-7xl"
        >
          {comics.map((comic) => (
            <SwiperSlide
              key={comic.id}
              className="!w-[180px] md:!w-[220px] lg:!w-[260px] flex justify-center transition-transform duration-300"
            >
              <img
                src={comic.image}
                alt={comic.title}
                className="w-full h-72 lg:h-[400px] xl:h-[500px] object-cover shadow-lg"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/260x400/9ca3af/ffffff?text=Comic";
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}