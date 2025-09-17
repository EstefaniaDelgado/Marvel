import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import CharacterDetail from "./pages/Home/components/Characters/components/CharacterDetail";
import CharacterProvider from "./context/CharacterContext";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/character/:id",
        element: <CharacterDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <CharacterProvider>
      <RouterProvider router={router} />
    </CharacterProvider>
  );
}

export default App;