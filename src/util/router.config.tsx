/**
 * router path 설정
 */
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Error404 from '../../pages/Error/404';
import Main from '../../pages/Main/Main';
import SignUp from '../../pages/signup/SignUp';
import Login from '../../pages/Login/Login';
import WrongPath from '../../pages/Error/WrongPath';
import Logout from '../../pages/Logout/Logout';
import UserLayout from '../layout/UserLayout';
import FindLayout from '../../pages/FindUser/FindLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        index: true,
        element: <Main />,
      },
    ],
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <WrongPath />,
  },
  { path: '/login', element: <Login />, errorElement: <WrongPath /> },
  { path: '/logout', element: <Logout />, errorElement: <WrongPath /> },
  // users
  {
    path: '/users/',
    element: <UserLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/users/find-user',
        element: <FindLayout />,
      },
      {
        path: '/users/find-password',
        element: <FindLayout />,
      },
    ],
  },
]);
