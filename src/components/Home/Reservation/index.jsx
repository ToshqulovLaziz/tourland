import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Reservation = () => {
  const {t} = useTranslation();
  return (
    <section className="bg-cover bg-center  bg-info-bg bg-no-repeat">
      <div className="container">
        <div className="flex flex-col justify-center h-[608px] items-center">
          <h3 className="text-white text-center text-[24px]">{t("reservation_subtitle")}</h3>
          <div className="h-[2px] bg-[#fafafa] w-[100px] mt-6 mb-10"></div>
          <h2 className="text-[42px] leading-[70px] tracking-wider text-center font-extrabold text-white mb-16">{t("reservation_title")}</h2>
          <Link className="bg-white text-main text-[#B5DBF3] text-[16px] font-bold rounded-3xl py-3 px-8 hover:bg-main hover:text-white hover:bg-[#B5DBF3] transition-colors duration-300">
            {t("reservation_btn_text")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
