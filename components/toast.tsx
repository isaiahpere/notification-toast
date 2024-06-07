"use client";
import React, { LegacyRef, MutableRefObject, useEffect, useRef } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

import { getToastClass, getAnimation } from "@/helpers";
import { positionType } from "@/hooks/useToast";

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
  position: positionType;
  animationType?: AnimationType;
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
  animationType = "slide",
  onClose,
}: IProps) => {
  const toastRef = useRef<any>(null); // ref
  let iconType: IconKeys = type;

  let toastclass = getToastClass(type);
  let animationClass = getAnimation(animationType);

  const ariaRole = type === "error" || type === "warning" ? "alert" : "status";
  const ariaLive =
    type === "error" || type === "warning" ? "assertive" : "polite";

  useEffect(() => {
    if (toastRef.current) {
      toastRef.current?.focus();
    }
  }, []);

  return (
    <div
      className={`p-4 m-2.5 text-white flex items-center rounded-lg shadow-md ${toastclass} ${animationClass}`}
      aria-live={ariaLive}
      role={ariaRole}
      ref={toastRef}
      tabIndex={-1}
    >
      <span className=" text-xl">{icons[iconType]}</span>
      <span className="px-4">{message}</span>
      <button
        className="ml-auto cursor-pointer text-lg"
        onClick={onClose}
        aria-label="close toast"
      >
        <AiOutlineClose color="white" />
      </button>
    </div>
  );
};

export default Toast;
