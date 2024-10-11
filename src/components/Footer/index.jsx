import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="mt-[80px] bg-[#01294C] p-[40px]">
      <div className="container max-w-full px-4 mx-auto">
        <div className="flex justify-between items-start  max-md:flex-col max-lg:items-end max-lg:gap-10  border-b-2 pb-[30px]">
          <div className="max-md:flex max-md:flex-col max-md:gap-5">
            <h2 className="text-[38px] max-[600px]:text-[30px] max-[600px]:text-center max-lg:w-full max-[600px]:m-auto font-extrabold text-white w-[80%] max-lg:mb-4  mt-0 mb-1  leading-[50px]">
              {t("footer_title")}
            </h2>
            <p className="text-[24px] max-[600px]:text-[20px] max-[600px]:text-center  font-medium text-white mb-4">
              {t("footer_text")}
            </p>
            <div className="flex items-center max-[600px]:justify-center">
              <button className="bg-white p-2 rounded-full">
                <img
                  width={"30"}
                  src="https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/icons8-telegram.svg?alt=media&token=8ffffa9e-88f5-48cf-bd7f-80b7fc0ca4eb"
                  alt="telegram icon"
                />
              </button>
              <button className="bg-white p-2 rounded-full mx-5">
                <img
                  width={"30"}
                  src="https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/icons8-instagram.svg?alt=media&token=95ce931d-a408-4bd1-b584-464de31590b6"
                  alt="instagarm icon"
                />
              </button>
              <button className="bg-white p-2 rounded-full">
                <img
                  width={"30"}
                  src="https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/icons8-facebook.svg?alt=media&token=a82e93aa-588c-46ba-b46d-803cc54d1162"
                  alt="facebook icon"
                />
              </button>
            </div>
          </div>
          <div className="flex w-1/3 justify-between max-lg:w-full max-md:gap-10 max-[600px]:text-center  max-[600px]:m-auto max-[600px]:justify-center" >
            <div className="flex flex-col text-[24px] font-medium text-white mb-4">
              <p>{t("footer_subtitle1")}</p>
              <Link>{t("home")}</Link>
              <Link>{t("about")}</Link>
            </div>
            <div className="flex flex-col text-[24px] font-medium text-white mb-4">
              <p>{t("footer_subtitle2")}</p>
              <Link>{t("tours")}</Link>
              <Link>{t("contact")}</Link>
            </div>
          </div>
        </div>
        <p className="text-center pt-[30px] text-[20px] text-white">
          {t("footer_copy")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
