import Login from './auth/Login';
import Signup from './auth/Signup';
import TodoPage from './Todo/TodoPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/todopage',
    element: <TodoPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
