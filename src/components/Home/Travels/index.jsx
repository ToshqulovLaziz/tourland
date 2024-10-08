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
          <h2 className="text-center font-bold leading-[70px] text-[32px] text-[#2A2A2A]">
            {t("travels_title")}
          </h2>
          <p className="text-center text-[18px] w-1/2 m-auto mb-[50px] text-[#2A2A2A]">
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
            className="flex flex-wrap relative"
          >
            {travelsData.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  className="w-[370px] h-[380px] rounded-3xl"
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
          <h2 className="text-center font-bold leading-[70px] text-[32px] text-[#2A2A2A]">
            {t("travels_title1")}
          </h2>
          <p className="text-center text-[18px] w-1/2 m-auto mb-[80px] text-[#2A2A2A]">
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
          >
            {travelsData.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  className="w-[280px] h-[410px] rounded-l-3xl rounded-bl-3xl"
                  src={item.img_url}
                  alt="rasm"
                />
                <div className="flex flex-col bg-white shadow-lg rounded-3xl w-[250px] h-[300px] p-6 absolute top-[90px] left-10">
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
                    className="relative inline-flex items-center font-mono justify-center px-8 py-2 text-[16px] transition-all bg-blue-500 rounded-2xl group overflow-hidden"
                    onClick={() => dispatch(setModalVisibility())}
                  >
                    <span className="absolute inset-0 bg-[#fff] transition-transform duration-500 -translate-x-full group-hover:translate-x-0"></span>
                    <span className="relative  text-white group-hover:text-blue-500">
                      {t("box_button_text")}
                    </span>
                  </button>
                  <button></button>
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
