import {Bookmark, Play} from 'lucide-react'
import { Link } from 'react-router'
import bgIm from '../assets/backgroundimage.png'
import { useEffect, useState } from 'react';

const Hero = () => {
  const [movie, setMovie] = useState(null);
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmIwMDBjMTgxMjNmNzAyZjFjOTFkNzk2YzUyMjZmZCIsIm5iZiI6MTc1ODYwMTI2Ny4zNjgsInN1YiI6IjY4ZDIyMDMzZGRmMDQ1ZTAyYjk3ZTA5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CmCIJOKhylc917d7bJXj1QW1Ry87zmMaaEwCZJFS-C4'
  }
};
useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => {
    if(res.results && res.results.length > 0){
      const randomIndex = Math.floor(Math.random() * res.results.length)
      setMovie(res.results[randomIndex]);
    }
  })
  .catch(err => console.error(err));
},[])

if(!movie){
  return <p>Loading....</p>
}
// 900px 
  return (
    <div className='text-white relative'>
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
         className='w-full rounded-2xl h-[180px] md:h-[180px] object-center object-cover 
        '/>
        <div className='flex spacing-x-2 md:space-x-4 absolute bottom-3 left-4 md:bottom-8
        md:left-10 font-medium '>
          
            <button className='flex justify-center items-center bg-white
            hover:bg-gray-200 text-[#e55914] py-3 px-4 rounded-full cursor-pointer text-sm
            md:text-base'><Bookmark className='mr-2 w-4 h-5 md:w-5 md:h-5'/>Save For Later</button>

            <Link to={`/movie/${movie.id}`}>
            <button className='flex justify-center items-center bg-red-500
            hover:bg-gray-200 text-white py-3 px-4 rounded-full cursor-pointer text-sm
            md:text-base'> <Play className='mr-2 w-4 h-5 md:w-5 md:h-5'/> Watch Now</button>
            </Link> 
        </div>
    </div>
  )
}

export default Hero
