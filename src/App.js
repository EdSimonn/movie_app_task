import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar"
import Search from "./components/Search";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Search/>
      <Home/>
    </>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1
