import introStyles from "../styles/components/Intro.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Bg from "../public/images/watermelon.jpg";

const Intro = () => {
  return (
    <div className={introStyles.main}>
      <Swiper
        className={introStyles.swiper}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide className={introStyles.slides}>
          <Image className={introStyles.image} src={Bg} alt="This is a BG" />
        </SwiperSlide>
        <SwiperSlide className={introStyles.slides}>Slide 2</SwiperSlide>
        <SwiperSlide className={introStyles.slides}>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Intro;
