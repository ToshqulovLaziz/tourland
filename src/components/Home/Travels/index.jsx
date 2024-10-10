import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  CheckOutlined,
  TagOutlined,
  TeamOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import "swiper/css";
import "swiper/css/pagination";
import { travelsData } from "../../../Utils/travelsData";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setModalVisibility } from "../../../redux/modalSlice";

const Travels = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <>
      <section className="pt-[90px] pb-[80px]">
        <div className="container">
          <h2 className="max-lg:w-[60%] m-auto text-center font-bold leading-[70px]  max-lg:leading-[30px] max-md:mb-4 text-[32px] max-lg:text-[24px] text-[#2A2A2A]">
            {t("travels_title")}
          </h2>
          <p className="text-center text-[18px] max-lg:text-[16px] w-1/2 m-auto mb-[50px] text-[#2A2A2A]">
            {t("travels_text")}
          </p>
          <Swiper
            slidesPerView={3.5}
            spaceBetween={40}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="flex flex-wrap relative gap-[40px]"
            breakpoints={{
              1240: {
                slidesPerView: 3.5,
              },
              1024: {
                slidesPerView: 2.5,
              },
              768: {
                slidesPerView: 1.5,
              },
              640: {
                slidesPerView: 1,
              },
            }}
          >
            {travelsData.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  className="w-[370px] m-auto h-[380px] max-md:h-[380px] max-md:w-[380px] rounded-3xl"
                  src={item.img_url}
                  alt="rasm"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="text-center font-bold leading-[70px] max-lg:leading-[30px] text-[32px] max-lg:text-[24px] max-md:mb-4 text-[#2A2A2A]">
            {t("travels_title1")}
          </h2>
          <p className="text-center text-[18px] w-1/2 m-auto mb-[80px] max-lg:mb-[40px] text-[#2A2A2A]">
            {t("travels_text1")}
          </p>
          <Swiper
            slidesPerView={3.5}
            spaceBetween={40}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="flex flex-wrap relative"
            breakpoints={{
              1240: {
                slidesPerView: 3.5,
              },
              1024: {
                slidesPerView: 2.5,
              },
              768: {
                slidesPerView: 1.5,
              },
              640: {
                slidesPerView: 1,
              },
            }}
          >
            {travelsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="max-sm:w-full m-auto">
                  <img
                    className="w-[280px] m-auto max-md:w-[320px] h-[410px] rounded-l-3xl rounded-bl-3xl"
                    src={item.img_url}
                    alt="rasm"
                  />
                  <div className="flex flex-col bg-white shadow-lg rounded-3xl w-[250px] h-[300px] p-6 absolute top-[90px] max-md:left-[190px] left-10">
                    <h3 className="text-[20px] font-extrabold  text-[#2A2A2A]">
                      Chendu
                    </h3>
                    <span className="text-[#AFAFAF] font-medium flex items-center text-[18px] pb-3 border-b-2 border-[#afafaf]">
                      <TeamOutlined className="pr-1" />
                      {t("orders")}
                    </span>
                    <h3 className="text-[18px] font-bold  text-[#2A2A2A] py-3">
                      {t("service_text")}
                    </h3>
                    <span className="text-[#AFAFAF] font-medium flex items-center text-[18px]">
                      <TagOutlined className="pr-1" />
                      {t("price_text")}
                    </span>
                    <span className="text-[#AFAFAF] font-medium flex items-center text-[18px] py-2">
                      <ClockCircleOutlined className="pr-1" /> {t("time_text")}
                    </span>
                    <span className="text-[#AFAFAF] font-medium flex items-center text-[18px] pb-3">
                      <CheckOutlined className="pr-1" /> {t("assistanse_text")}
                    </span>
                    <button
                      className="relative inline-flex items-center font-mono justify-center px-8 py-2 text-[16px] transition-all bg-blue-400 rounded-2xl hover:border-2 hover:border-blue-500 group overflow-hidden"
                      onClick={() => dispatch(setModalVisibility())}
                    >
                      <span className="absolute inset-0 bg-[#fff] transition-transform duration-500 -translate-x-full group-hover:translate-x-0"></span>
                      <span className="relative  text-white group-hover:text-blue-500">
                        {t("box_button_text")}
                      </span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Travels;
