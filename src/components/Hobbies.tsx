import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const hobbies = [
  { title: "Sketching", img: "/hobbies/sketching.png" },
  { title: "Music", img: "/hobbies/music.png" },
  { title: "Badminton", img: "/hobbies/badminton.png" },
  { title: "Skating", img: "/hobbies/skating.png" },
  { title: "Volunteer Work", img: "/hobbies/volunteer.png" }
];

export default function Hobbies() {
  return (
    <section
      id="hobbies"
      className="py-32 text-white flex flex-col items-center overflow-hidden"
    >
      <h2 className="text-4xl font-bold gradient-text mb-24">
        Hobbies & Interests
      </h2>

      <div className="w-full max-w-[1300px]">

        <Swiper
          modules={[EffectCoverflow, Autoplay, Mousewheel]}
          effect="coverflow"
          centeredSlides
          loop={true}
          slidesPerView={3}
          grabCursor
          mousewheel
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 350,
            modifier: 2,
            slideShadows: false
          }}
          className="hobby-swiper"
        >

          {hobbies.map((hobby, i) => (
            <SwiperSlide key={i}>

              <div className="hobby-card">

                <img
                  src={hobby.img}
                  className="w-full h-64 object-cover rounded-xl"
                />

                <h3 className="text-xl text-center mt-4 font-semibold">
                  {hobby.title}
                </h3>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}