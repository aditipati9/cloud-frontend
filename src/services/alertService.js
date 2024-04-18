import { ToastContainer, toast } from "react-toastify";

export const notifySuccess = (message,position) => {
    toast.success(message, {
      position: position,
      autoClose:2000
    });
  };

export const notifyError = (message,position) => {
    toast.error(message, {
      position: position,
      autoClose:2000
    });
  };