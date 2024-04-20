
import './App.css';
import { Navbar } from './Components/navbar';
import { Homepage } from './Components/homepage';
import {Detailpage} from'./Components/detailspage'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: (  
          <Homepage/>
          )
      },
      {
        path:"/details/:movies", 
        element: (
           <Detailpage />
        )
      }
    ]
  }
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
