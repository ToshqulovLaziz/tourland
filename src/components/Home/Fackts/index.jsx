import {
  GlobalOutlined,
  HomeOutlined,
  UserOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Fackts = () => {
  const { t } = useTranslation();
  const facktsData = [
    {
      id: 1,
      title: t("fackts_list1.fackts_title"),
      sub_title: t("fackts_list1.fackts_subtitle"),
      text: t("fackts_list1.fackts_text"),
      img: "https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/choy-w3JqHud4.jpg?alt=media&token=0685bf4b-a4f5-4dbc-bfe8-cd3cc85abe00",
      population: "8.66 M",
      land_area: "41.290 km",
      price: "$400",
    },
    {
      id: 2,
      title: t("fackts_list2.fackts_title"),
      sub_title: t("fackts_list2.fackts_subtitle"),
      text: t("fackts_list2.fackts_text"),
      img: "https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/fakt2-D3v8jOP9.jpg?alt=media&token=9fa90d4e-9fde-46e2-a794-74242e438cd3",
      population: "44.48 M",
      land_area: "275.400 km",
      price: "$946",
    },
    {
      id: 3,
      title: t("fackts_list3.fackts_title"),
      sub_title: t("fackts_list3.fackts_subtitle"),
      text: t("fackts_list3.fackts_text"),
      img: "https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/xitoyta-J6lzAjoF.jpeg?alt=media&token=5fd3586c-6c36-4b02-9f81-7b0c6baf0abb",
      population: "67.41 M",
      land_area: "551.500 km",
      price: "$425",
    },
    {
      id: 4,
      title: t("fackts_list4.fackts_title"),
      sub_title: t("fackts_list4.fackts_subtitle"),
      text: t("fackts_list4.fackts_text"),
      img: "https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/panda-mRCbW3Hl.jpg?alt=media&token=3812d409-a39a-4330-9af7-12fa0be99d26",
      population: "44.48 M",
      land_area: "275.400 km",
      price: "$546",
    },
  ];
  return (
    <section className="py-[90px] max-sm:py-[50px] max-sm:pb-0">
      <div className="container max-w-full sm:max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl px-4 mx-auto">
        <h2 className="max-lg:w-[60%] max-sm:w-[80%] m-auto max-md:text-center font-bold leading-[70px] max-lg:leading-[30px] max-md:mb-4 max-sm:mb-0 text-[32px] max-lg:text-[24px] max-sm:text-[20px] text-[#2A2A2A]">
          {t("fackts_title")}
        </h2>
        <p className="text-[16px] w-1/2 max-sm:w-full max-md:m-auto max-md:mb-[40px] max-md:text-center font-mono mb-[30px] text-[#2A2A2A]">
          {t("fackts_text")}
        </p>
        <div className="flex flex-col gap-8">
          {facktsData.map((item) => (
            <div
              className="flex justify-between items-start max-md:flex-col gap-10 pb-10 border-b-2 border-[#000] last:border-none max-sm:gap-6"
              key={item.id}
            >
              <img
                className="w-1/3 h-[250px] max-md:w-full rounded-3xl max-sm:h-auto"
                src={item.img}
                alt={item.title}
              />
              <div className={item.id === 3 ? "pl-[27px] max-sm:pl-0" : ""}>
                <div className="flex justify-between items-start mb-5  max-sm:items-center">
                  <div>
                    <h3 className="font-bold text-[22px] max-sm:text-[18px] mb-1 text-[#2A2A2A]">
                      {item.title}
                    </h3>
                    <h4 className="text-[#AFAFAF] text-[18px] max-sm:text-[16px]">
                      {item.sub_title}
                    </h4>
                  </div>
                  <Link className="bg-[#B5DBF3] inline-block py-3 px-8 font-mono text-[14px] max-sm:text-[12px] rounded-3xl hover:bg-white border-2 hover:transition-colors border-[#B5DBF3] max-sm:py-2 max-sm:px-6">
                    {t("u_button_text")}
                  </Link>
                </div>
                <p className="text-[#AFAFAF] text-[18px] max-sm:text-[16px] leading-[30px] border-b-2 pb-6">
                  {item.text}
                </p>
                <div className="flex justify-between text-[16px] items-center mb-8 py-3 border-b-2 text-[#AFAFAF] max-sm:text-[14px]">
                  <span>
                    <UserOutlined className="pr-2" />
                    {item.population}
                  </span>
                  <span>
                    <GlobalOutlined className="pr-2" />
                    {item.land_area}
                  </span>
                  <span>
                    <HomeOutlined className="pr-2" />
                    {item.price}
                  </span>
                </div>
                <Link className="text-[#9FD1F0] font-extrabold text-[18px] max-sm:text-[16px]">
                  {t("fackts_button_text")} <ArrowRightOutlined />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fackts;
