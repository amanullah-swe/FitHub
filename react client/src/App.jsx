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
    path: "/edite/personal-info",
    element: <Editepersonalinfo />,
  },
  {
    path: "/edite/health-info",
    element: <Editehealthinfo />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
function App() {

  // for resizing the food list 
  window.addEventListener('resize', () => {
    const element = document.querySelector(".food-list-container");
    element.style.width = window.innerWidth - 180 + "px";
  })

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;