import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Movies from './Movies'

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results)
    })
  }, [fetchURL])

  // console.log(movies)

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft + 800
  }

  return (
    <>
    <div className="sm:flex md:px-16 mt-6 w-full flex-col justify-center">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
      <h2 className='font-normal md:text-xl p-4'>{title}</h2>
        <div className="relative flex items-center">
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
            size={40}
          />
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
          >
            <Movies />
          </div>
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={40}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Row
