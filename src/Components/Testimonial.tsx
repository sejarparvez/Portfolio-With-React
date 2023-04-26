import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../img/profile1.jpg";
import profilePic2 from "../img/profile2.jpg";
import profilePic3 from "../img/profile3.jpg";
import profilePic4 from "../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor, sit amet consec tetur adipisicing elit. Fuga, voluptatum.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consec tetur adipisicing elit. Fuga, voluptatum.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consec tetur adipisicing elit. Fuga, voluptatum.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consec tetur adipisicing elit. Fuga, voluptatum.",
    },
  ];

  return (
    <div
      className="flex flex-col py-12 items-center justify-center mt-16 relative md:mt-24"
      id="Testimonial"
    >
      <div className=" items-center pb-12 [&>*]:text-3xl md:[&>*]:text-5xl lg:[&>*]:text-5xl [&>*]:font-bold">
        <span>Clints Always Get </span>
        <span className=" text-cyan-500">Exceptional Work </span>
        <span>From Me...</span>
      </div>

      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}
        pagination={{ clickable: true, type: "bullets" }}
        className=" w-[100%] h-[100%]"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div
                className="h-48 p-3 flex flex-col items-center justify-evenly md:p-8 
              md:w-[30rem] bg-gray-600 border-[7px] border-solid border-[#32daff]
                rounded-[20px] "
              >
                <img
                  className="h-20 w-20 md:h-24 md:w-24 rounded-full border-4 border-solid border-cyan-500"
                  src={client.img}
                  alt="img"
                />
                <span className=" text-white ">{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="blue-blur left-0 -top-40"></div>
      <div className="pink-blur right-0 top-40"></div>
    </div>
  );
};

export default Testimonial;
