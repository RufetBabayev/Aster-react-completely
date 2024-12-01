import { LuFileText } from "react-icons/lu";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
function SliderCard({ className }) {
  const [active, setActive] = useState(false);

  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      setActive(true);
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
      setActive(false);
    }
  };
  return (
    <div
      className={`right-section-cards darkMode space-y-[13px]  bg-white shadow-theme max-w-[355px] 
      min-w-full ${className}`}
    >
      <div className="flex justify-between border-b pb-2">
        <div className="flex items-center space-x-[11px]">
          <span className="size-[24px]">
            <LuFileText className="size-full" />
          </span>
          <span>Qısa məqalələr</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            className={`size-[24px] rounded-full bg-skyBlue flex items-center justify-center ${
              active ? "opacity-50" : ""
            }`}
          >
            <FaAngleLeft className="text-white" />
          </button>
          <button
            onClick={handleNext}
            className={`size-[24px] rounded-full bg-skyBlue flex items-center justify-center ${
              !active ? "opacity-50" : ""
            }`}
          >
            <FaAngleRight className="text-white" />
          </button>
        </div>
      </div>
      <div className="text-xs opacity-60 ">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Pagination, Navigation]}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
          onInit={(swiper) => {
            const paginationElement = swiper.pagination.el;
            if (paginationElement) {
              paginationElement.style.marginBottom = "-12px";
            }
          }}
        >
          {[1, 2, 3].map((index) => (
            <SwiperSlide key={index}>
              <div className="space-y-3">
                <p>
                  The price of petrol remained unchanged on July 6 after
                  reaching a new record high on the previous day, according to a
                  price notification by state-owned fuel retailers. The diesel
                  price remained stable for the second consecutive day. The
                  increase on July 5, 35th in two months, took the petrol price
                  in Delhi closer to Rs 100 per litre-mark.
                </p>

                <p className="pb-2">
                  The price of petrol remained unchanged on July 6 after
                  reaching a new record high on the previous day, according to a
                  price notification by state-owned fuel retailers. The diesel
                  price remained stable for the second consecutive day. The
                  increase on July 5, 35th in two months, took the petrol price
                  in Delhi closer to Rs 100 per litre-mark. increase on July 5,
                  35th in two months, took the petrol price in Delhi closer to
                  Rs 100 per litre-mark. increase on July 5, 35th in two months,
                  took the petrol price in Delhi closer to Rs 100 per
                  litre-mark.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SliderCard;
