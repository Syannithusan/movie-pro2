import card from '../assets/card.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CardList = ({title, catogory}) => {
    const data = [
        {
            id: 1,
            title: "Card 1",
            description: "Description for Card 1",
            imageUlr: "https://via.placeholder.com/150"
        },
        {
            id: 2,
            title: "Card 2",
            description: "Description for Card 2",
            imageUlr: "https://via.placeholder.com/150"
        },
        {
            id: 3,
            title: "Card 3",
            description: "Description for Card 3",
            imageUlr: "https://via.placeholder.com/150"
        },
                {
            id: 3,
            title: "Card 3",
            description: "Description for Card 3",
            imageUlr: "https://via.placeholder.com/150"
        },
                {
            id: 3,
            title: "Card 3",
            description: "Description for Card 3",
            imageUlr: "https://via.placeholder.com/150"
        },
                {
            id: 3,
            title: "Card 3",
            description: "Description for Card 3",
            imageUlr: "https://via.placeholder.com/150"
        }
    ]
    console.log("Title: ",title,"Catogory: ",catogory);
    
    return (
        <div>
            <h1 className='text-white md:px-4'>Upcoming</h1>
            <Swiper slidesPerView={"auto"} spaceBetween={10}  className='mySwiper'>
                {data.map((item=>(
                    <SwiperSlide key={item.id} className='max-w-72'>
                        <img src={card} alt="" className="h-44 w-full object-center object-cover"/>
                        <p className='text-white'>A Very Good Movie</p>
                    </SwiperSlide>
                )))}
            </Swiper>
        </div>
    )
}

export default CardList