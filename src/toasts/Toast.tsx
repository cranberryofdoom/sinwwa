import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toast = () => {
  return (
    <ToastContainer
      position="top-center"
      hideProgressBar
      pauseOnHover
      autoClose={5000}
      theme="colored"
    />
  );
};
