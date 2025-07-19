"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Bslide = () => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				breakpoints={{
					640: {
						slidesPerView: 3,
						spaceBetween: 15,
						centeredSlides: false,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
				}}
				modules={[Autoplay, FreeMode]}
				className="mySwiper">
        
		<SwiperSlide><Image src={"/airbnb.svg"} alt="uber" height={100} width={100}  className="mx-auto h-[100px] w-[100px]"  /></SwiperSlide>
        <SwiperSlide><Image src={"/fedex.svg"} alt="uber" height={100} width={100}  className="mx-auto h-[100px] w-[100px]"  /></SwiperSlide>
        <SwiperSlide><Image src={"/google.svg"} alt="uber" height={100} width={100}  className="mx-auto h-[100px] w-[100px]"  /></SwiperSlide>
        <SwiperSlide><Image src={"/hubspot.svg"} alt="uber" height={100} width={100}  className="mx-auto h-[100px] w-[100px]"  /></SwiperSlide>
        <SwiperSlide><Image src={"/walmart.svg"} alt="uber" height={100} width={100}  className="mx-auto h-[100px] w-[150px]"  /></SwiperSlide>
		</Swiper>
		</>
	);
};

export default Bslide;
