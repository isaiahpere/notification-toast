"use client";
import useToast from "@/hooks/useToast";
import { ToastPosition } from "@/hooks/useToast";
import Lottie from "lottie-react";
import groovy from "./bulbasor.json";

import { ToastIconsKey } from "@/components/toast";

export default function Home() {
  // custom hook - useToast(position)
  const { NotificationComponent, triggerNotification } =
    useToast("bottomRight");

  return (
    <main className="bg-purple-50 flex min-h-screen flex-col items-center p-8 w-full relative">
      <div>
        <h1 className="text-center text-4xl font-bold">
          Bulbasur Notifications
        </h1>
      </div>
      <div className="flex items-center justify-center w-[200px] h-auto">
        <Lottie animationData={groovy} />
      </div>
      <div>
        <button
          onClick={() =>
            triggerNotification({
              type: ToastIconsKey.success,
              message: "you trigger you notie",
              duration: 3000,
              animationType: "pop",
            })
          }
          className="border bg-lime-400 w-[200px] h-[36px] mt-4 mb-2 rounded-lg"
        >
          Success
        </button>
      </div>
      <button
        onClick={() =>
          triggerNotification({
            type: ToastIconsKey.warning,
            message: "this is warning message",
            duration: 3000,
            animationType: "slide",
          })
        }
        className="border bg-yellow-400 w-[200px] h-[36px]  mb-2 rounded-lg"
      >
        warning
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: ToastIconsKey.error,
            message: "Your request Failed",
            duration: 3000,
            animationType: "fade",
          })
        }
        className="border bg-red-400 w-[200px] h-[36px]  mb-2 rounded-lg"
      >
        Error
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: ToastIconsKey.info,
            message: "Informational Material Very Long Item Here",
            duration: 3000,
            animationType: "slide",
          })
        }
        className="border bg-blue-400 w-[200px] h-[36px]  mb-2 rounded-lg"
      >
        Info
      </button>
      {NotificationComponent}
    </main>
  );
}
