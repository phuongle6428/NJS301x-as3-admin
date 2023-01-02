import './App.css';
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Root from "./pages/root/Root.jsx";
import DashBoard from './pages/dashboard/DashBoard';
import Products from './pages/product/Products';
import Room from './pages/room/Room';
import User from './pages/user/User';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <DashBoard />,
        index: true
      },
      {
        element: <User />,
        path: 'user'
      },
      {
        element: <Products />,
        path: 'products'
      },
      {
        element: <Room />,
        path: 'room'
      }
    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
