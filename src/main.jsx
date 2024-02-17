import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Play_page from './pages/Play_page.jsx';
import Main from './pages/Main.jsx';
import AllMovies from './pages/AllMovies.jsx';

const routes=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Main/>}/>
      <Route path='VideoPlayer' element={<Play_page/>}/>
      <Route path='alltpe' element={<AllMovies/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ThemeProvider>
    <RouterProvider router={routes} />
    </ThemeProvider>
  </React.StrictMode>,
)
