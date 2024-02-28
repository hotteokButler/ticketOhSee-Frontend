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
]);
