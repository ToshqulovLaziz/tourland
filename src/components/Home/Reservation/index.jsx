import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
const Reservation = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <section className="bg-cover bg-center  bg-info-bg bg-no-repeat">
      <div className="container max-w-full px-4 mx-auto">
        <div
          className="flex flex-col justify-center h-[608px] max-md:h-[408px] items-center"
          data-aos="fade-up"
        >
          <h3 className="text-white text-center text-[24px] max-md:text-[20px]">
            {t("reservation_subtitle")}
          </h3>
          <div className="h-[2px] bg-[#fafafa] w-[100px] mt-6 mb-10 max-md:mb-3"></div>
          <h2 className="text-[42px] max-md:text-[32px] leading-[70px] tracking-wider text-center font-extrabold text-white mb-16 max-md:mb-4">
            {t("reservation_title")}
          </h2>
          <Link className="bg-white text-main text-[#B5DBF3] text-[16px] font-bold rounded-3xl py-3 px-8 hover:bg-main hover:text-white hover:bg-[#B5DBF3] transition-colors duration-300">
            {t("reservation_btn_text")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
