import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title, fetchURL, rowID}) => {
    const [movies, setMovie] = useState([])

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovie(response.data.results)
        })
    },[fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }

  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className="relative flex items-center group">
        <MdChevronLeft 
        onClick={slideLeft}
         className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
        <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {movies.map((item, id) => (
                <Movie key={id} item={item} />
            ))}
        </div>
        <MdChevronRight 
        onClick={slideRight} 
        className='bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
    </div>
    </>
  )
}

export default Row