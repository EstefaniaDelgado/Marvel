interface CharacterProps {
  id: number;
  name: string;
  image: string;
}

export default function Character({ id, name, image }: CharacterProps) {
  return (
    <div className="flex-shrink-0 w-32 md:w-40 lg:w-48">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img
          src={image}
          alt={name}
          className="w-full h-32 md:h-40 lg:h-48 object-cover"
        />
        <div className="p-3">
          <h3 className="text-sm md:text-base font-semibold text-gray-800 text-center truncate">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
}
