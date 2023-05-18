import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Layouts from './Layouts/Layouts';
import Home from './Pages/Home';
import Posts from './Pages/Posts';
import Products from './Pages/Products';
import About from './Pages/About';

const HandleLayout = () => {
  return (
    <Layouts>
      <Outlet />
    </Layouts>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <HandleLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/posts',
        element: <Posts />,
      },
      {
        path: '/products',
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
