import { createRoot } from "react-dom/client";
// import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import Root from "./Root";
import ProviderConfig from "./tools/provider";

createRoot(document.getElementById("root")).render(
  <ProviderConfig>
    <Root />
  </ProviderConfig>
);
