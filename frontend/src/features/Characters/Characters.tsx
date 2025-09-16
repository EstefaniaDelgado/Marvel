import Character from "./components/Character.tsx";

export default function Characters() {
  const characters = [
    { id: 1, name: "Spider-Man", image: "https://via.placeholder.com/200x200/FF0000/FFFFFF?text=Spider-Man" },
    { id: 2, name: "Iron Man", image: "https://via.placeholder.com/200x200/FFD700/000000?text=Iron+Man" },
    { id: 3, name: "Captain America", image: "https://via.placeholder.com/200x200/0000FF/FFFFFF?text=Cap+America" },
    { id: 4, name: "Thor", image: "https://via.placeholder.com/200x200/FF6B35/FFFFFF?text=Thor" },
    { id: 5, name: "Hulk", image: "https://via.placeholder.com/200x200/00AA00/FFFFFF?text=Hulk" },
    { id: 6, name: "Black Widow", image: "https://via.placeholder.com/200x200/000000/FFFFFF?text=B+Widow" },
    { id: 7, name: "Hawkeye", image: "https://via.placeholder.com/200x200/800080/FFFFFF?text=Hawkeye" },
    { id: 8, name: "Doctor Strange", image: "https://via.placeholder.com/200x200/8B0000/FFFFFF?text=Dr+Strange" },
    { id: 9, name: "Black Panther", image: "https://via.placeholder.com/200x200/4B0082/FFFFFF?text=B+Panther" },
    { id: 10, name: "Captain Marvel", image: "https://via.placeholder.com/200x200/FF1493/FFFFFF?text=C+Marvel" },
    { id: 11, name: "Ant-Man", image: "https://via.placeholder.com/200x200/FF4500/FFFFFF?text=Ant-Man" },
    { id: 12, name: "Wasp", image: "https://via.placeholder.com/200x200/FFD700/000000?text=Wasp" }
  ];

  return (
    <div className="py-8 mb-8">
      <div className="overflow-x-auto">
        <div className="flex space-x-4 px-4 min-w-max">
          {characters.map((character) => (
            <Character
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
