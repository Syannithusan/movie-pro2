import card from '../assets/card.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from 'react';
import {Link} from "react-router"

const CardList = ({ title, category }) => {

    const [data, setData]=useState([]);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmIwMDBjMTgxMjNmNzAyZjFjOTFkNzk2YzUyMjZmZCIsIm5iZiI6MTc1ODYwMTI2Ny4zNjgsInN1YiI6IjY4ZDIyMDMzZGRmMDQ1ZTAyYjk3ZTA5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CmCIJOKhylc917d7bJXj1QW1Ry87zmMaaEwCZJFS-C4'
        }
    };

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
             options)
            .then(res => res.json())
            .then(res => setData(res.results))
            .catch(err => console.error(err));
    }, []);


    return (
        <div>
            <h1 className='text-white md:px-4'>{title}</h1>
            <Swiper slidesPerView={"auto"} spaceBetween={10} className='mySwiper'>
                {data.map((item => (
                    <SwiperSlide key={item.id} className='max-w-72'>
                        <Link to={`movie/${item.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" className="h-44 w-full object-center object-cover" />
                        <p className='text-white'>{item.original_title}</p>
                        </Link>
                    </SwiperSlide>
                )))}
            </Swiper>
        </div>
    )
}
export default CardList