import React   from "react";
import {Swiper , SwiperSlide} from "swiper/react" ; 
import "swiper/css" ; 
import "swiper/css/navigation" ; 
import "./Slider.scss" ; 
import { Navigation } from "swiper";
export default function Slider(){
 return(
    <>
<Swiper navigation = {true} modules = {[Navigation]} className = ".slider">
  <div className="container">

    <SwiperSlide > 
    <img src="/img/home3.jpeg" alt="" className="fix" />
    </SwiperSlide>

    <SwiperSlide>
    <img src="/img/shoes3.jpeg" alt="" className="fix"/>
    </SwiperSlide>

    <SwiperSlide>
    <img src="/img/hoodie2.jpeg" alt="" className="fix"/>
    </SwiperSlide>

    <SwiperSlide>
    <img src="/img/bag3.jpeg" alt="" className="fix"/>
    </SwiperSlide>
  </div>
</Swiper>
    </>
 ); 
}