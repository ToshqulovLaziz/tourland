import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";
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
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const dispatch = useDispatch();
  return (
    <>
      <section
        data-aos="fade-up"
        className="py-[90px] sm:py-[60px] max-sm:py-[30px]"
      >
        <div className="container max-w-full px-4 mx-auto">
          <h2 className="max-lg:w-[60%] max-sm:w-[80%] m-auto text-center font-bold leading-[70px] max-lg:leading-[30px] max-md:mb-4 max-sm:mb-0 text-[32px] max-lg:text-[24px] max-sm:text-[20px] text-[#2A2A2A]">
            {t("travels_title")}
          </h2>
          <p className="text-center text-[18px] max-lg:text-[16px] w-1/2 max-sm:w-full m-auto mb-[50px] text-[#2A2A2A]">
            {t("travels_text")}
          </p>
          <Swiper
            slidesPerView={{
              default: 3.5,
              md: 2.5,
              lg: 3,
              sm: 1.5,
              xs: 1,
            }}
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
                slidesPerView: 1.2,
              },
              480: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 1,
              },
            }}
          >
            {travelsData.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  className="w-[370px] max-w-full max-md:w-[300px] max-sm:w-full h-[380px] max-sm:h-[350px] m-auto rounded-3xl"
                  src={item.img_url}
                  alt="rasm"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section data-aos="fade-up">
        <div className="container max-w-full px-4 mx-auto">
          <h2 className="max-lg:w-[60%] max-sm:w-[80%] m-auto text-center font-bold leading-[70px] max-lg:leading-[30px] max-md:mb-4 max-sm:mb-0 text-[32px] max-lg:text-[24px] max-sm:text-[20px] text-[#2A2A2A]">
            {t("travels_title1")}
          </h2>
          <p className="text-center text-[18px] w-1/2 max-sm:w-full m-auto mb-[80px] max-lg:mb-[40px] text-[#2A2A2A]">
            {t("travels_text1")}
          </p>
          <Swiper
            slidesPerView={{
              default: 3.5,
              md: 2.5,
              lg: 3,
              sm: 1.5,
              xs: 1,
            }}
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
                slidesPerView: 1.2,
              },
              480: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 1,
              },
            }}
          >
            {travelsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="max-sm:w-full m-auto relative"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  <img
                    className="w-[280px] m-auto max-md:w-[320px] h-[410px] rounded-l-3xl rounded-bl-3xl max-sm:w-full max-sm:h-[400px]"
                    src={item.img_url}
                    alt="rasm"
                  />
                  <div className="flex flex-col bg-white shadow-lg rounded-3xl w-[250px] h-[300px] p-6 absolute top-[90px] max-md:left-[190px] left-10 max-sm:left-[50px] max-sm:w-[80%]">
                    <h3 className="text-[20px] font-extrabold text-[#2A2A2A]">
                      Chendu
                    </h3>
                    <span className="text-[#AFAFAF] font-medium flex items-center text-[18px] pb-3 border-b-2 border-[#afafaf]">
                      <TeamOutlined className="pr-1" />
                      {t("orders")}
                    </span>
                    <h3 className="text-[18px] font-bold text-[#2A2A2A] py-3">
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
                      <span className="relative text-white group-hover:text-blue-500">
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
