import { Modal } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { setHamburgerBtn } from "../../../redux/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const HamburgerBtn = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { hamburgerBtn } = useSelector((state) => state.modal);
  return (
    <Modal
      open={hamburgerBtn}
      onCancel={() => dispatch(setHamburgerBtn())}
      footer={false}
    >
      <div className="flex justify-center mt-4">
        <ul className="flex flex-col items-center gap-4 text-[18px]">
          <li>
            <Link onClick={() => dispatch(setHamburgerBtn())} to="/">{t("home")}</Link>
          </li>
          <li>
            <Link onClick={() => dispatch(setHamburgerBtn())} to="/about">{t("about")}</Link>
          </li>
          <li>
            <Link onClick={() => dispatch(setHamburgerBtn())} to="/tours">{t("tours")}</Link>
          </li>
          <li>
            <Link onClick={() => dispatch(setHamburgerBtn())} to="/contact">{t("contact")}</Link>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default HamburgerBtn;
