import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from "react-router-dom"
import './index.css'
import Root from './routes/root'
import ErrorPage from "./error-page";
import Detalhes from './routes/detalhes'
import Pesquisa from './routes/pesquisa'

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/detalhes/:id/:type",
    element: <Detalhes />
  },
  {
    path: '/pesquisa',
    element: <Pesquisa />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
