import React from 'react';
import Navbar from './components/NavBar';
import Movie from './components/Movie';
import Title from './components/Title';
import Search from './components/Search';
import Slider from './components/Slider';
import {createBrowserRoute, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MovieDet from './components/MovieDetails';
import NotFound from './components/NotFound';
import MovieDetail from './components/MovieDetails';

function App() {
  const myRoutes = createBrowserRouter([
    {path: "/", element: <Home/> },
    {path: "/about", element: <About/>},
    {path: "/contact", element: <Contact/>},
    {path: "/movie-details/:id", element: <MovieDetail/>},
    {path: "*", element: <NotFound/>},
    
  ])
  return (
    <div>
      {/* <Navbar /> */}
      <RouterProvider router={myRoutes}/>
      {/* <Slider/>
      <Movie/> */}

    </div>
  );
}

export default App;


