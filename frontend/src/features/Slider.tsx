export default function Slider() {
  const comicCovers = [
    { id: 1, title: "Spider-Man", image: "https://via.placeholder.com/200x300/FF0000/FFFFFF?text=Spider-Man" },
    { id: 2, title: "Ultimate Force", image: "https://via.placeholder.com/200x300/00FF00/FFFFFF?text=Ultimate+Force" },
    { id: 3, title: "Iron Man", image: "https://via.placeholder.com/200x300/FFD700/000000?text=Iron+Man" },
    { id: 4, title: "Thor", image: "https://via.placeholder.com/200x300/0000FF/FFFFFF?text=Thor" },
    { id: 5, title: "Hulk", image: "https://via.placeholder.com/200x300/00AA00/FFFFFF?text=Hulk" }
  ];

  return (
    <div className="py-8 mb-8">
      <div className="overflow-x-auto">
        <div className="flex space-x-4 px-4 min-w-max">
          {comicCovers.map((comic) => (
            <div key={comic.id} className="flex-shrink-0">
              <img
                src={comic.image}
                alt={comic.title}
                className="w-32 h-48 md:w-40 md:h-60 lg:w-48 lg:h-72 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
