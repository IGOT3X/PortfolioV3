import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Pages/Home'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Projects from './Pages/Projects';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/projects",
    element:<Projects/>
  }
],{basename:"/PortfolioV3"})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
