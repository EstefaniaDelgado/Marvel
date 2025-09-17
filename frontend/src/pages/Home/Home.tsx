import Slider from '../Home/components/Slider/Slider.tsx';
import Characters from '../Home/components/Characters/Characters.tsx';
import Form from '../Home/components/Form.tsx';

export default function Home() {
  return (
    <div className="mx-auto">
      <Slider />
      <Characters />
      <Form />
    </div>
  );
}
