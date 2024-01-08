import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { SliderItems } from "../data/DataItems";
import SlideItem from "./Carousel/SlideItem";

const CarouselS = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Swiper
        slidesPerView={1}
        navigation
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        className="h-full"
        autoplay={true}
        loop={true}
      >
        <div className="wrapper flex items-center">
          {SliderItems.map((items) => (
            <SwiperSlide key={items.id}>
              <SlideItem
                img={items.img}
                title={items.title}
                desc={items.desc}
                bg={items.bg}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default CarouselS;
