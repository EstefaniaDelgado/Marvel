import Slider from '../features/Slider.tsx';
import Characters from '../features/Characters/Characters.tsx';
import Form from '../features/Form.tsx';

export default function Home() {
  return (
    <div className="mx-auto">
      <Slider />
      <Characters />
      <Form />
    </div>
  );
}
