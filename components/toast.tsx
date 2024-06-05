import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

export enum IconsKeys {
  success = "success",
  warning = "warning",
  info = "info",
  error = "error",
}
interface IProps {
  type: IconsKeys;
  message?: string;
  onClose?: () => void;
}

const icons = {
  success: <AiOutlineCheckCircle />,
  warning: <AiOutlineWarning />,
  info: <AiOutlineInfoCircle />,
  error: <AiOutlineCloseCircle />,
};

const Toast = ({ type = IconsKeys.info, message, onClose }: IProps) => {
  const getToastClass = (type: IconsKeys) => {
    switch (type) {
      case IconsKeys.success:
        return "bg-[#4caf50]";
      case IconsKeys.warning:
        return "bg-[#ff9800]";
      case IconsKeys.info:
        return "bg-[#2196f3]";
      case IconsKeys.error:
        return "bg-[#f44336]";
      default:
        return "bg-[#2196f3]";
    }
  };
  let toastclass = getToastClass(type);
  console.log("HELLO");

  console.log(toastclass);
  return (
    <div
      className={`w-full p-4 m-2.5 text-white flex items-center rounded-lg shadow-md ${toastclass}`}
    >
      <span className="mr-4 text-xl">{icons[type]}</span>
      {message}
      <AiOutlineClose
        color="white"
        onClick={onClose}
        className="ml-auto cursor-pointer text-lg"
      />
    </div>
  );
};

export default Toast;
