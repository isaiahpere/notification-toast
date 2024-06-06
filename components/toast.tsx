import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

import { getToastClass, getToastPosition } from "@/app/helpers";
import { ToastPosition } from "@/hooks/useToast";

export enum ToastIconsKey {
  success = "success",
  warning = "warning",
  info = "info",
  error = "error",
}

const animations = {
  fade: "fadeIn",
  pop: "popup",
  slide: "slideIn",
};
export type AnimationType = keyof typeof animations;

interface IProps {
  type?: ToastIconsKey | any;
  message?: string | any;
  position: ToastPosition;
  animationTye?: AnimationType;
  onClose?: () => void;
}

const icons = {
  success: <AiOutlineCheckCircle />,
  warning: <AiOutlineWarning />,
  info: <AiOutlineInfoCircle />,
  error: <AiOutlineCloseCircle />,
};
type IconKeys = keyof typeof icons;

const Toast = ({
  type = ToastIconsKey.info,
  message,
  position,
  animationTye = "slide",
  onClose,
}: IProps) => {
  let iconType: IconKeys = type;

  let toastclass = getToastClass(type);
  let positionClass = getToastPosition(position);

  return (
    <div
      className={` p-4 m-2.5 text-white flex items-center rounded-lg shadow-md ${toastclass} fixed ${positionClass}${animations[animationTye]}`}
    >
      <span className=" text-xl">{icons[iconType]}</span>
      <span className="px-4">{message}</span>
      <AiOutlineClose
        color="white"
        onClick={onClose}
        className="ml-auto cursor-pointer text-lg"
      />
    </div>
  );
};

export default Toast;
