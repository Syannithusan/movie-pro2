import React from 'react'
import card from '../assets/card.png'
import { Swiper, SwiperSlide } from "swiper/react";

const CardList = () => {
    const data = [
        {
            id:1,
            title:"Card 1",
            description:"Description for Card 1",
            imageUlr:"https://via.placeholder.com/150"
        },
         {
            id:2,
            title:"Card 2",
            description:"Description for Card 2",
            imageUlr:"https://via.placeholder.com/150"
        },
         {
            id:3,
            title:"Card 3",
            description:"Description for Card 3",
            imageUlr:"https://via.placeholder.com/150"
        }
    ]
  return (
    <div className='text-white md:px-4'>
        <h1 className='text-white pt-10 pb-5 text-lg font-medium'>Upcoming</h1>
        <div className='flex'>
        {data.map((item)=>(
            <div>
                <img className='h-50 w-full object-center
                object-cover ' src={card} alt="card" />
                <p>A very good movie</p>
            </div>
        ))}

    </div>
    </div>
  )
}

export default CardList