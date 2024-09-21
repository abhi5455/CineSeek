import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SearchPage from "./components/searchPage/SearchPage.jsx";
import MoviePage from "./components/moviePage/MoviePage.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorElement from "./components/ErrorElement/ErrorElement.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorElement />
    },
    {
        path: "/search",
        element: <SearchPage />,
        errorElement: <ErrorElement />
    },
    {
        path: "/movie",
        element: <MoviePage />,
        errorElement: <ErrorElement />
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
