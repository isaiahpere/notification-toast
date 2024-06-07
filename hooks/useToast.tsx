"use client";
import React, { useCallback, useState } from "react";
import Toast, { AnimationType } from "@/components/toast";
import { ToastIconsKey } from "@/components/toast";
import { v4 as uuid_v4 } from "uuid";
import { getToastPosition } from "@/helpers";

export enum ToastPosition {
  topRight = "top-right",
  topLeft = "top-left",
  bottomRight = "bottom-right",
  bottomLeft = "bottom-left",
}
export type positionType = keyof typeof ToastPosition;

interface IToastProps {
  id?: string;
  type: ToastIconsKey;
  message: string | any;
  duration: number;
  animationType: AnimationType;
}
const useToast = (position: positionType) => {
  const [notifications, setNotifications] = useState<IToastProps[]>([]);

  let positionClass = getToastPosition(position);
  let isTopOriented = position.substring(0, 3) === "top"; // top-right ===> top

  // TOAST TRIGGER
  const triggerNotification = useCallback((toastProps: IToastProps) => {
    // set new props
    let toastId = uuid_v4();
    setNotifications((prev) => [
      ...prev,
      {
        id: toastId,
        ...toastProps,
      },
    ]);

    // set timerer
    setTimeout(() => {
      setNotifications((prev) => prev.filter((item) => item?.id !== toastId));
    }, toastProps.duration);
  }, []);

  // closes toast by after clicking on x
  const handleToastClose = (index: number) => {
    setNotifications((prev) => {
      let updatedNotifications = [...prev];
      updatedNotifications.splice(index, 1);
      return updatedNotifications;
    });
  };

  // Generate Notifications
  const NotificationComponent = (
    <div
      className={`fixed flex ${
        isTopOriented ? "flex-col" : "flex-col-reverse"
      } ${positionClass}`}
    >
      {notifications.map((toast, index) => (
        <Toast
          key={toast.id}
          type={toast?.type}
          message={toast?.message}
          animationType={toast?.animationType}
          position={position}
          onClose={() => handleToastClose(index)}
        />
      ))}
    </div>
  );

  return { NotificationComponent, triggerNotification };
};

export default useToast;
