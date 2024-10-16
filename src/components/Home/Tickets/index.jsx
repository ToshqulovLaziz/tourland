import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import { useTranslation } from "react-i18next";
const Tickets = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const ticketsData = [
    {
      id: 1,
      title: t("tickets_list1.tickets_list_title1"),
      sub_title: t("tickets_list1.tickets_list_subtitle1"),
      text: t("tickets_list1.tickets_list_text1"),
      button_text: t("u_button_text"),
      img: "https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/poyezd.jpg?alt=media&token=2360d6bb-6247-4d07-84b5-e5c7573a9bdd",
    },
    {
      id: 2,
      title: t("tickets_list2.tickets_list_title2"),
      sub_title: t("tickets_list2.tickets_list_subtitle2"),
      text: t("tickets_list2.tickets_list_text2"),
      button_text: t("u_button_text"),
      img: "https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/plane.jpg?alt=media&token=d9566059-97e7-41d8-a540-c2e0f290e42d",
    },
  ];
  return (
    <section className="pt-[70px]">
      <div className="container max-w-full px-4 mx-auto">
        <h2
          className="max-lg:w-[60%] max-sm:w-[80%] m-auto text-center font-bold leading-[70px] max-lg:leading-[30px] max-md:mb-4 max-sm:mb-0 text-[32px] max-lg:text-[24px] max-sm:text-[20px] text-[#2A2A2A]"
          data-aos="fade-up"
        >
          {t("tickets_title")}
        </h2>
        <p
          className="text-center text-[18px] max-sm:text-[14px] w-1/2 max-sm:w-[90%] font-mono m-auto mb-[30px] text-[#2A2A2A]"
          data-aos="fade-up"
        >
          {t("tickets_subtitle")}
        </p>
        <div>
          {ticketsData.map((item) => (
            <div
              className="flex justify-between items-center max-lg:flex-col gap-10 first:pb-8 last:pt-8 first:border-b-2"
              key={item.id}
            >
              <img
                className="w-1/3 max-lg:w-full rounded-3xl max-sm:w-[90%]"
                src={item.img}
                alt={item.title}
                data-aos="fade-right"
              />
              <div data-aos="fade-left">
                <div className="flex justify-between items-start mb-5  max-sm:items-center">
                  <div>
                    <h3 className="font-bold text-[22px] max-sm:text-[18px] max-sm:w-[80%] mb-1 text-[#2A2A2A]">
                      {t(item.title)}
                    </h3>
                    <h4 className="text-[#AFAFAF] text-[18px]">
                      {item.sub_title}
                    </h4>
                  </div>
                  <Link className="bg-[#B5DBF3] inline-block py-2 px-8 max-sm:px-5 text-center font-mono text-[14px]  rounded-3xl hover:bg-white border-2 hover:transition-colors border-[#B5DBF3]">
                    {item.button_text}
                  </Link>
                </div>
                <p className="text-[#AFAFAF] text-[18px] leading-[30px] max-sm:text-[16px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tickets;
