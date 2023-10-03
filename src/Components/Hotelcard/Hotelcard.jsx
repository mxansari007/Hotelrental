import { useState,useRef, useEffect } from 'react';
import './Hotelcard.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setItemData } from '../../Store/pageSlice/pageSlice';
export default function Hotelcard(props){
  const [play,setPlay] = useState(Infinity);
  const swiperRefLocal = useRef();
  const Navigator = useNavigate();
  const Dispatch = useDispatch();
  const heart = useRef();
useEffect(()=>{
  swiperRefLocal?.current?.swiper?.autoplay?.stop()
},[])

  const handleMouseEnter = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.start()
};

const handleMouseLeave = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.stop()
};

const handleHeart = ()=>{
  heart.current.classList.toggle('fa-solid');
  heart.current.classList.toggle('fa-regular');
}

const handleNavigation = ()=>{
    Navigator(`/property/${props.data.id}`);
    Dispatch(setItemData(props.data));
}

    return<>
        <div className='hotel-card-container'>
        <div className='hotel-card-carousel' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        ref={swiperRefLocal}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
        {props.data.img.map(d=><SwiperSlide><img src={d} /></SwiperSlide>)}
      </Swiper>
      </div>
      <div className='hotel-card-status'>
        <p>For {props.data.For}</p>
        <div className='heart-icon' onClick={handleHeart}>
        <i ref={heart} className='fa-regular fa-heart card-heart-icon'></i>
        </div>
      </div>
      {props.data.popular?<div className='category'>
        <p>Popular</p>
      </div>:<div className='empty'></div>}
            <div className='hotel-card-title'>
                <p>{props.data.address}</p>
                <h3>{props.data.title}</h3>
            </div>
            <div className='hotel-card-desc'>
                <p><i className='fa-solid fa-hotel'></i>  {props.data.rooms} Rooms</p>
                <p><i className='fa-solid fa-bed'></i> {props.data.beds} Bed</p>
                <p><i className='fa-solid fa-bath'></i> {props.data.baths} Bath</p>
                <p><i className='fa-solid fa-up-down-left-right'></i> {props.data.sft} sft</p>
            </div>
            <div className='hotel-card-price'>
            <p><span className='price'>{props.data.price}</span><span className='permonth'>/month</span></p>
            <button onClick={handleNavigation} className='hotel-card-btn'>Read More</button>
            </div>
        </div>
    </>
}