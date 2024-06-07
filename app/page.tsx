"use client";
import useToast from "@/hooks/useToast";
import { ToastPosition } from "@/hooks/useToast";

import { ToastIconsKey } from "@/components/toast";

export default function Home() {
  // custom hook - useToast(position)
  const { NotificationComponent, triggerNotification } =
    useToast("bottomRight");

  return (
    <main className=" flex min-h-screen flex-col items-center p-8 w-full">
      <h1 className="text-center text-4xl font-bold">Toas Notifications</h1>
      {/* <Toast type={ToastIconsKey.success} message="You got a toast!" /> */}

      <button
        onClick={() =>
          triggerNotification({
            type: ToastIconsKey.success,
            message: "you trigger you notie",
            duration: 10000,
            animationType: "pop",
          })
        }
        className="border bg-lime-400 w-[200px] h-[36px] mt-4 mb-2 rounded-lg"
      >
        Success
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: ToastIconsKey.warning,
            message: "this is warning message",
            duration: 5000,
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
            duration: 5000,
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
      <div>{NotificationComponent}</div>
    </main>
  );
}
