import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, EffectCoverflow } from 'swiper/modules';
import './slider.css';

const comicCovers = [
  {
    id: 1,
    title: 'Spider-Man',
    image:
      'https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsZXN8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 2,
    title: 'Ultimate Force',
    image:
      'https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsZXN8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 3,
    title: 'Iron Man',
    image:
      'https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsZXN8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 4,
    title: 'Thor',
    image:
      'https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsZXN8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 5,
    title: 'Hulk',
    image:
      'https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsZXN8ZW58MHx8MHx8fDA%3D',
  },
];

export default function Slider() {
  return (
    <div className="w-full pt-4 flex flex-col justify-center items-center  mx-auto mb-8 bg-[#E4E6EB]">
      <div className="pt-4 w-full md:w-[75%] flex flex-col justify-center items-center gap-8 ">
        <Swiper
          initialSlide={comicCovers.length /2}
          modules={[Pagination, Scrollbar, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={150} // 👉 espacio entre tarjetas
          coverflowEffect={{
            rotate: 0,
            stretch: 50, // 👉 separación extra en el efecto
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full max-w-7xl"
        >
          {comicCovers.map((comic) => (
            <SwiperSlide
              key={comic.id}
              className="!w-[180px] md:!w-[220px] lg:!w-[260px] flex justify-center transition-transform duration-300"
            >
              <img
                src={comic.image}
                alt={comic.title}
                className="w-full h-72 lg:h-[400px] xl:h-[500px] object-cover shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
