import { useState } from 'react';
import IronMan from '../../../assets/iron-man.svg'

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    creationDate: '',
    image: '',
  });

  const [previewImage, setPreviewImage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'image') {
      setPreviewImage(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Character created:', formData);
    // Here you would handle the form submission
  };

  return (
    <div className="py-8 mb-8 ">
      <div className="bg-white  rounded-lg shadow-lg p-4 md:px-0 ">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Create New Character
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row-reverse max-w-[1440px] mx-auto">
          {/* Right side - Image preview */}
          <div className="flex-1 flex items-center justify-center rounded-[85px]">
            <div className="w-full h-64 md:h-full  rounded-4xl">
              {previewImage ? (
                <div className="bg-gray-100 rounded-4xl h-full w-full overflow-hidden shadow-inner">
                  <img
                    src={previewImage}
                    alt="Character preview"
                    className="w-full h-64 md:h-80 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        'https://via.placeholder.com/300x400/E5E7EB/9CA3AF?text=Invalid+Image';
                    }}
                  />
                </div>
              ) : (
                <div className="rounded-4xl h-full w-full  flex items-center justify-center">
                  <div className="rounded-4xl w-full text-center h-full text-gray-500">
                    <img
                    src={IronMan}
                    alt="Character preview"
                    className="w-full rounded-4xl h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        'https://via.placeholder.com/300x400/E5E7EB/9CA3AF?text=Invalid+Image';
                    }}
                  />
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Left side - Form inputs */}
          <div className="pt-4 md:bg-[#E4E6EB] px-6 md:px-8 md:pb-4 md:my-8 xl:my-16 flex-1 lg:flex-[0.8]  text-center md:text-left lg:text-2xl  md:flex md:flex-col md:justify-center space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm lg:text-2xl font-medium text-gray-700 mb-2"
              >
                Nombre del Personaje
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                placeholder="Ingresa un nombre"
                required
              />
            </div>

            <div>
              <label
                htmlFor="creationDate"
                className="block text-sm lg:text-2xl font-medium text-gray-700 mb-2"
              >
                Fecha de Creación
              </label>
              <input
                type="date"
                id="creationDate"
                name="creationDate"
                value={formData.creationDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                required
              />
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-sm lg:text-2xl font-medium text-gray-700 mb-2"
              >
               Elige una Imagen URL
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-[70%] bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors font-medium"
            >
             Crear nuevo Personaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
