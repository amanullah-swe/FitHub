import './styles/index.css'
import './styles/style.css'
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
import Editepersonalinfo from './pages/Editepersonalinfo.jsx';
import Editehealthinfo from './pages/Editehealthinfo.jsx';
import Landing from './pages/Landing.jsx';
import Dashbaord from './pages/Dashbaord.jsx';
import Blog from './pages/Blog.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuthAsync } from './features/user/userSlice.js';
import Createmeal from './pages/Createmeal.jsx';
import Custommeal from './pages/Custommeal.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/my-profile",
    element: <Myprofile />,
  },
  {
    path: "/meal",
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
    path: "/edite/personal-info",
    element: <Editepersonalinfo />,
  },
  {
    path: "/edite/health-info",
    element: <Editehealthinfo />,
  },
  {
    path: "/dashboard",
    element: <Dashbaord />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/create-meal",
    element: <Createmeal />
  },
  {
    path: "/custom-maeal",
    element: <Custommeal />
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthAsync());
  }, [])

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}


export default App;
