import React from "react";
import { data } from "../data";
const API_KEY = "63bcf79";

const Movies = () => {
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2">
      {data.map((logo) => (
        <img
          src={logo.img}
          // src={`https://img.omdbapi.com/?apikey=${API_KEY}`}
          // src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
          className="w-[200px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
          alt=""
        />
      ))}
      {data.map((mov) => (
        <div className="absolute top-0 left-0 w-[200px] h-[200px] opacity-0 hover:opacity-100 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {mov.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Movies;
