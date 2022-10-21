import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Bg from "../public/images/slider.jpg";

const Intro = () => {
  return (
    <div className="main">
      <Swiper
        className="swiper"
        navigation={true}
        loop={true}
        modules={[Navigation]}
      >
        <SwiperSlide className="slides">
          <Image className="image" src={Bg} alt="This is a BG" />
        </SwiperSlide>
        <SwiperSlide className="slides">Slide 2</SwiperSlide>
        <SwiperSlide className="slides">Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Intro;
