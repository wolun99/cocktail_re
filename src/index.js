import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cocktail from './pages/Cocktail';
import CocktailDetail from './pages/CocktailDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {index:true,element:<Cocktail/>},
      {path:'cocktail_re',element:<Cocktail/>},
      {path:'cocktail_re/:keyword',element:<Cocktail/>},
      {path:'cocktail_re/detail/:id',element:<CocktailDetail/>}
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
