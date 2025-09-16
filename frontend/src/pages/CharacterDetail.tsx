import { useParams } from "react-router-dom";

export default function CharacterDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Character Detail Page
      </h2>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <p className="text-lg text-gray-600 mb-4">
          Character ID: <span className="font-semibold text-red-600">{id}</span>
        </p>
        <p className="text-gray-600">
          This page will display detailed information about the selected Marvel character.
        </p>
      </div>
    </div>
  );
}
