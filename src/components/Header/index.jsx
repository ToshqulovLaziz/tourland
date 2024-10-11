import { Link } from "react-router-dom";
import { Select } from "antd";
import { MenuOutlined, CloseSquareOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../redux/languageSlice";
import { setHamburgerBtn } from "../../redux/modalSlice";
import HamburgerBtn from "./HamburgerBtn";
const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { hamburgerBtn } = useSelector((state) => state.modal);
  const language = useSelector((state) => state.language.language);

  const handleChange = (value) => {
    dispatch(changeLanguage(value));
  };
  return (
    <>
      <HamburgerBtn />
      <header className="sticky top-0 bg-[#fff] z-50">
        <div className="container max-w-full sm:max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl px-4 mx-auto">
          <div className="flex justify-between items-center py-[10px]">
            <div>
              <Link to="/">
                <img
                  width={"120px"}
                  src="https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/logo-tourland.png?alt=media&token=7f9ed93d-97fd-4c7e-a7f8-fb5664f4f714"
                  alt="Tourland logo"
                />
              </Link>
            </div>
            <div className="flex justify-between items-center gap-[150px] max-lg:gap-10 max-lg:hidden">
              <div>
                <ul className="flex gap-6 text-[24px]">
                  <li>
                    <Link>{t("home")}</Link>
                  </li>
                  <li>
                    <Link>{t("about")}</Link>
                  </li>
                  <li>
                    <Link>{t("tours")}</Link>
                  </li>
                  <li>
                    <Link>{t("contact")}</Link>
                  </li>
                </ul>
              </div>
              <div className="flex justify-between items-center gap-6">
                <Select
                  defaultValue={"en"}
                  value={language}
                  style={{
                    width: 70,
                  }}
                  options={[
                    {
                      label: <span>uz</span>,
                      value: "uz",
                    },
                    {
                      label: <span>rus</span>,
                      value: "rus",
                    },
                    {
                      label: <span>en</span>,
                      value: "en",
                    },
                  ]}
                  onChange={handleChange}
                />
                <div className="flex items-center gap-6">
                  <button>
                    <img
                      width={"30"}
                      src="https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/icons8-telegram.svg?alt=media&token=8ffffa9e-88f5-48cf-bd7f-80b7fc0ca4eb"
                      alt="telegram icon"
                    />
                  </button>
                  <button>
                    <img
                      width={"30"}
                      src="https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/icons8-instagram.svg?alt=media&token=95ce931d-a408-4bd1-b584-464de31590b6"
                      alt="instagarm icon"
                    />
                  </button>
                </div>
              </div>
            </div>
            {hamburgerBtn ? (
              <CloseSquareOutlined className="text-[30px]" />
            ) : (
              <MenuOutlined
                className=" hidden max-lg:inline-block text-[30px]"
                onClick={() => dispatch(setHamburgerBtn())}
              />
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
