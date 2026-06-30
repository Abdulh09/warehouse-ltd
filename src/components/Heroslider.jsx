import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Hero from "./Hero";
import "./Heroslider.css";

const Heroslider = () => {
  return (
    <div className="hero-slider-wrapper">
      <div className="container">
        <Swiper
          id="heroSlider"
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{ enabled: false }}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            576: {
              navigation: {
                enabled: true,
              },
              autoplay: false,
            },
          }}
        >
          <SwiperSlide>
            <Hero
              title="Main Heading 1"
              description="
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum assumenda architecto facere. Sint adipisci facilis
                    maxime fugiat a molestiae in eaque impedit? Lorem ipsum
                    dolor sit amet.
                  "
            />
          </SwiperSlide>
          <SwiperSlide>
            <Hero
              title="Main Heading 2"
              description="
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum assumenda architecto facere. Sint adipisci facilis
                    maxime fugiat a molestiae in eaque impedit? Lorem ipsum
                    dolor sit amet.
                  "
            />
          </SwiperSlide>
          <SwiperSlide>
            <Hero
              title="Main Heading 3"
              description="
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum assumenda architecto facere. Sint adipisci facilis
                    maxime fugiat a molestiae in eaque impedit? Lorem ipsum
                    dolor sit amet.
                  "
            />
          </SwiperSlide>
          <SwiperSlide>
            <Hero
              title="Main Heading 4"
              description="
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum assumenda architecto facere. Sint adipisci facilis
                    maxime fugiat a molestiae in eaque impedit? Lorem ipsum
                    dolor sit amet.
                  "
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Heroslider;
