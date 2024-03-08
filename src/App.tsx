import { RouterProvider } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { router } from './util/router.config';

function App() {
  return (
    <>
    <Reset />
    <RouterProvider router={router} />
    </>
  );
}

export default App;
