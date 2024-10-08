import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setModalVisibility } from "../../../redux/modalSlice";

const Hero = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  
  return (
    <>
      <section className="h-[85vh] bg-cover bg-center bg-neutral-100 bg-hero-pattern bg-blend-multiply bg-no-repeat filter brightness-75 contrast-125">
        <div className="container">
          <div className="flex flex-col justify-center items-center text-[#fff] pt-[200px]">
            <h2
              className="text-white text-[34px]"
              style={{
                textShadow: "3px 3px 5px black, 0 0 1em black, 0 0 0.2em black",
              }}
            >
              {t("mainTitle")}
            </h2>

            <h1 className="text-white text-[72px] font-bold pb-3">
              {t("mainTitleCountry")}
            </h1>
            <button
              className="relative inline-flex items-center font-bold justify-center px-12 py-3 text-[20px] transition-all bg-blue-500 rounded-2xl group overflow-hidden"
              onClick={() => dispatch(setModalVisibility())}
            >
              <span className="absolute inset-0 bg-[#fff] transition-transform duration-500 -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative  text-white group-hover:text-blue-500">
                {t("buttonText")}
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
