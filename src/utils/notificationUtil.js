import { toast } from "react-toastify";

const configuration = {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  progress: undefined,
};

const showToast = (status, message) => (status ? toast.success(message, configuration) : toast.error(message, configuration));

export default showToast;
