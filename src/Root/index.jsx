import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import ModalVisibilty from "../components/Modal";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <>
      <ModalVisibilty />
      <ToastContainer
        autoClose={5000}
        closeOnClick
        theme="light"
        position="top-right"
      />
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default Root;
