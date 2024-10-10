import { Modal } from "antd";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { setHamburgerBtn } from "../../../redux/modalSlice";
import { changeLanguage } from "../../../redux/languageSlice";
import { useDispatch, useSelector } from "react-redux";

const HamburgerBtn = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const { hamburgerBtn } = useSelector((state) => state.modal);
  const handleChange = (value) => {
    dispatch(changeLanguage(value));
    dispatch(setHamburgerBtn());
  };
  return (
    <Modal
      open={hamburgerBtn}
      onCancel={() => dispatch(setHamburgerBtn())}
      footer={false}
    >
      <div className="flex justify-center mt-4">
        <ul className="flex flex-col items-center gap-4 text-[18px]">
          <li>
            <Link onClick={() => dispatch(setHamburgerBtn())} to="/">
              {t("home")}
            </Link>
          </li>
          <li>
            <Link onClick={() => dispatch(setHamburgerBtn())} to="/about">
              {t("about")}
            </Link>
          </li>
          <li>
            <Link onClick={() => dispatch(setHamburgerBtn())} to="/tours">
              {t("tours")}
            </Link>
          </li>
          <li>
            <Link onClick={() => dispatch(setHamburgerBtn())} to="/contact">
              {t("contact")}
            </Link>
          </li>
          <li>
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
          </li>
          <li>
            <button>
              <img
                width={"30"}
                src="https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/icons8-telegram.svg?alt=media&token=8ffffa9e-88f5-48cf-bd7f-80b7fc0ca4eb"
                alt="telegram icon"
              />
            </button>
            <button>
              <img
                className="ml-4"
                width={"30"}
                src="https://firebasestorage.googleapis.com/v0/b/greenshop-d3fdb.appspot.com/o/icons8-instagram.svg?alt=media&token=95ce931d-a408-4bd1-b584-464de31590b6"
                alt="instagarm icon"
              />
            </button>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default HamburgerBtn;
