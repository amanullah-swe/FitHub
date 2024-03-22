
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx'
import Myprofile from './pages/Myprofile.jsx';
import Meal from './pages/Meal.jsx';
import Search from './pages/Search.jsx';
import Error404 from './pages/Error404.jsx';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/my-profile",
    element: <Myprofile />,
  },
  {
    path: "/meal/:id",
    element: <Meal />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
