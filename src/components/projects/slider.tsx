"use client";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import style from "./slider.module.css";

import NextImage from "@/other/NextImage";

const MainSlider = ({ slider }: { slider: { image: string }[] }) => {
  return (
    <>
      {slider && slider.length > 0 && (
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="!overflow-hidden"
        >
          {slider &&
            slider.length > 0 &&
            slider.map((item: { image: any }, index) => (
              <SwiperSlide className={style["swiper-slide"]} key={index}>
                <NextImage
                  unoptimized
                  src={item.image}
                  alt="slider"
                  className="!relative"
                  fill
                />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </>
  );
};

export default MainSlider;
