"use client";
import React, { useCallback, useState } from "react";
import Toast, { AnimationType } from "@/components/toast";
import { ToastIconsKey } from "@/components/toast";

export enum ToastPosition {
  topRight = "top-right",
  topLeft = "top-left",
  bottomRight = "bottom-right",
  bottomLeft = "bottom-left",
}

interface IToastProps {
  type: ToastIconsKey;
  message: string | any;
  duration: number;
  animationType: AnimationType;
}
interface IProps {
  position: ToastPosition;
}
const useToast = ({ position }: IProps) => {
  const [notificationProps, setNotificationProps] =
    useState<IToastProps | null>(null);
  let timer: any;

  // TOAST TRIGGER
  const triggerNotification = useCallback((toastProps: IToastProps) => {
    console.log(toastProps);
    clearTimeout(timer); // clear previous timeout

    setNotificationProps(toastProps); // set new props

    // set timererr
    timer = setTimeout(() => {
      setNotificationProps(null);
    }, toastProps.duration);
  }, []);

  // return toast if props provided
  const NotificationComponent = notificationProps ? (
    <Toast
      type={notificationProps?.type}
      message={notificationProps?.message}
      position={position}
      animationTye={notificationProps.animationType}
    />
  ) : null;
  return { NotificationComponent, triggerNotification };
};

export default useToast;
