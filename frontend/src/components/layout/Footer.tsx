export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-red-500">MARVEL</h3>
            <p className="text-gray-400 text-sm mt-1">
              Explore the Marvel Universe
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 Marvel Entertainment. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with React + TypeScript + TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
