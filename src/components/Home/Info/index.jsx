import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
const Info = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="relative top-[-100px] max-md:top-[-50px]">
        <div className="container max-w-full sm:max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-[33%] px-4 w-full bg-white shadow-xl rounded-2xl flex flex-col items-center justify-center gap-5 h-[290px]">
              <PhoneOutlined className="bg-[#f0f0f0] text-[#A8CA3D] rounded-full w-[60px] h-[60px] grid place-items-center text-main text-2xl" />
              <h3 className="font-bold text-center text-[16px] sm:text-[20px] text-[#2a2a2a]">
                {t("info_title1")}
              </h3>
              <span className="text-main text-center text-[#A8CA3D]">
                +998 77 111 37 77
              </span>
            </div>
            <div className="md:w-[33%] px-4 w-full bg-white shadow-xl rounded-2xl flex flex-col items-center justify-center gap-5 h-[290px]">
              <MailOutlined className="bg-[#f0f0f0] text-[#A8CA3D] rounded-full w-[60px] h-[60px] grid place-items-center text-main text-2xl" />
              <h3 className="font-bold text-center text-[16px] sm:text-[20px] text-[#2a2a2a]">
                {t("info_title2")}
              </h3>
              <span className="text-main text-center text-[#A8CA3D]">
                tourland@mail.ru
              </span>
            </div>
            <div className="md:w-[33%] px-4 w-full bg-white shadow-xl rounded-2xl flex flex-col items-center justify-center gap-5 h-[290px]">
              <EnvironmentOutlined className="bg-[#f0f0f0] text-[#A8CA3D] rounded-full w-[60px] h-[60px] grid place-items-center text-main text-2xl" />
              <h3 className="font-bold text-center text-[16px] sm:text-[20px] text-[#2a2a2a]">
                {t("info_title3")}
              </h3>
              <span className="text-main text-center text-[#A8CA3D]">
                Yakkasaray District, 1 Borijar Street.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container max-w-full sm:max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl px-4 mx-auto">
          <iframe
            className="w-full rounded-t-3xl shadow-card"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d11990.80194929237!2d69.24442710975076!3d41.293622592278844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzUwLjMiTiA2OcKwMTQnMzguOSJF!5e0!3m2!1sru!2s!4v1726660627573!5m2!1sru!2s"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Info;
