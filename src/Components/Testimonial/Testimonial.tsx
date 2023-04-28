import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

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
      className="flex flex-col gap-12 py-12 items-center px-32 justify-center mt-16 relative md:mt-24"
      id="Testimonial"
    >
      <div className=" items-center pb-12 [&>*]:text-3xl md:[&>*]:text-5xl lg:[&>*]:text-5xl [&>*]:font-bold">
        <span>Clients Always Get </span>
        <span className=" text-cyan-500">Exceptional Work </span>
        <span>From Me</span>
      </div>
      <Swiper
        grabCursor={true}
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={80}
        pagination={{ clickable: true, type: "bullets" }}
        className=" w-full"
        autoplay={{
          delay: 2000,
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
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index} className="">
              <div className=" p-3 gap-6 flex flex-col items-center justify-evenly md:p-6 bg-gray-600 border-[7px] border-solid border-[#32daff] rounded-2xl">
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
    </div>
  );
};

export default Testimonial;
