import Slider from "../features/Slider.tsx";
import Characters from "../features/Characters.tsx";
import Form from "../features/Form.tsx";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Welcome to the Marvel Universe
      </h1>
      <div className="text-center mb-8">
        <p className="text-lg text-gray-600">
          Discover your favorite Marvel characters and their amazing stories.
        </p>
      </div>
      
      <Slider />
      <Characters />
      <Form />
    </div>
  );
}
