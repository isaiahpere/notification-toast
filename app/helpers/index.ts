import { ToastIconsKey } from "@/components/toast";
import { ToastPosition } from "@/hooks/useToast";

export const getToastClass = (type: ToastIconsKey) => {
  switch (type) {
    case ToastIconsKey.success:
      return "bg-[#4caf50]";
    case ToastIconsKey.warning:
      return "bg-[#ff9800]";
    case ToastIconsKey.info:
      return "bg-[#2196f3]";
    case ToastIconsKey.error:
      return "bg-[#f44336]";
    default:
      return "bg-[#2196f3]";
  }
};

export const getToastPosition = (position: ToastPosition) => {
  switch (position) {
    case ToastPosition.topRight:
      return "top-[20px] right-[20px]";
    case ToastPosition.topLeft:
      return "top-[20px] left-[20px]";
    case ToastPosition.bottomRight:
      return "bottom-[20px] right-[20px]";
    case ToastPosition.bottomLeft:
      return "bottom-[20px] left-[20px]";
    default:
      console.log("DEFAULT HIT");
      return "top-[20px] right-[20px]";
  }
};
