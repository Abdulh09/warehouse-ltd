import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "./Card";
import "./Cardslider.css";
import card1 from "../assets/card-icon1.png";

const Cardslider = () => {
  return (
    <Swiper
      id="cardSlider"
      spaceBetween={16}
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
        768: {
          slidesPerView: 2,
          navigation: {
            enabled: true,
          },
          autoplay: false,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      }}
    >
      <SwiperSlide>
        <Card
          Cardsrc={card1}
          title="Card Title"
          cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis accusamus recusandae fugiat ut officiis temporibus error voluptas, velit id nulla, ea aspernatur nobis illum tempora. Cumque eum asperiores delectus distinctio!"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          Cardsrc={card1}
          title="Card Title"
          cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis accusamus recusandae fugiat ut officiis temporibus error voluptas, velit id nulla, ea aspernatur nobis illum tempora. Cumque eum asperiores delectus distinctio!"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          Cardsrc={card1}
          title="Card Title"
          cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis accusamus recusandae fugiat ut officiis temporibus error voluptas, velit id nulla, ea aspernatur nobis illum tempora. Cumque eum asperiores delectus distinctio!"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          Cardsrc={card1}
          title="Card Title"
          cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis accusamus recusandae fugiat ut officiis temporibus error voluptas, velit id nulla, ea aspernatur nobis illum tempora. Cumque eum asperiores delectus distinctio!"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          Cardsrc={card1}
          title="Card Title"
          cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis accusamus recusandae fugiat ut officiis temporibus error voluptas, velit id nulla, ea aspernatur nobis illum tempora. Cumque eum asperiores delectus distinctio!"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          Cardsrc={card1}
          title="Card Title"
          cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis accusamus recusandae fugiat ut officiis temporibus error voluptas, velit id nulla, ea aspernatur nobis illum tempora. Cumque eum asperiores delectus distinctio!"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Cardslider;
