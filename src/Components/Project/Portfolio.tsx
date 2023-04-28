import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusiccApp from "../../img/musicapp.png";
import Sidebar from "../../img/sidebar.png";
const Portfolio = () => {
  return (
    <div
      className="flex items-center justify-center flex-col relative mt-40 md:mt-48 px-24"
      id="Portfolio"
    >
      <span className=" font-bold text-3xl md:text-5xl lg:text-6xl lg:mb-10">
        Recent Projects
      </span>

      <Swiper
        grabCursor={true}
        className=" mt-12 w-[100%] overflow-visible"
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        spaceBetween={80}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <img
            className=" rounded-2xl w-[100%] drop-shadow-2xl"
            src={Sidebar}
            alt="slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-2xl w-[100%] drop-shadow-2xl"
            src={Ecommerce}
            alt="ecommerce"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-2xl w-[100%] drop-shadow-2xl"
            src={HOC}
            alt="hoc"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" rounded-2xl w-[100%] drop-shadow-2xl"
            src={MusiccApp}
            alt="app"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
