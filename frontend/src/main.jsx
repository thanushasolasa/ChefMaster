import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import CategoryPage from './pages/category/CategoryPage.jsx'
import ErrorPage from './components/header/ErrorPage.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Search from './pages/Search.jsx'
import SingleProduct from './pages/products/SingleProduct.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/categories/:category",
        element:<CategoryPage/>
      },
      {
        path: "/search",
        element:<Search/>
      },
      {
        path: "/items/:id",
        element:<SingleProduct/>,
        loader: ({params}) => fetch(`http://localhost:5000/api/items/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
