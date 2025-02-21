import React, { useState, useEffect, useCallback } from "react";

// Toast Component
interface ToastProps {
  message: string;
  duration: number;
  type: "info" | "success" | "warning" | "error";
  position:
    | "top"
    | "center"
    | "bottom"
    | "left"
    | "right"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight";
  backGroundColor: string;
  textColor: string;
}

const Toast: React.FC<ToastProps> = ({
  message,
  duration,
  type,
  position,
  backGroundColor,
  textColor,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timerId);
  }, [duration]);

  const toastClasses = `absolute py-[15px] px-[20px] rounded-[5px] z-[9999]`;

  return (
    <div
      className={`${toastClasses} ${getPositionClasses(
        position
      )} text-[${textColor}]`}
      style={{
        display: isVisible ? "block" : "none",
        border: `1px solid ${backGroundColor}`,
        color: textColor,
      }}
    >
      <p className={`text-${type === "success" ? "green-500" : type}`}>
        {message}
      </p>
    </div>
  );
};

// Helper function for positioning
const getPositionClasses = (position: ToastProps["position"]): string => {
  switch (position) {
    case "top":
      return "top-0 left-[50%] transform translateX(-50%)";
    case "center":
      return "top-[50%] left-[50%] transform translate(-50%, -50%)";
    case "bottom":
      return "bottom-0 left-[50%] transform translateX(-50%)";
    case "left":
      return "top-[50%] left-0 transform translatey(-50%)";
    case "right":
      return "top-[50%] right-0 transform translatey(-50%)";
    case "topLeft":
      return "top-0 left-0";
    case "topRight":
      return "top-[3%] right-[3%]";
    case "bottomLeft":
      return "bottom-0 left-0";
    case "bottomRight":
      return "bottom-0 right-0";
    default:
      return "top";
  }
};

// Toaster Component
export function Toaster({ toasts }: { toasts: any[] }) {
  return (
    <div>
      {toasts.map((toast, index) => (
        <Toast
          key={index}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          position={toast.position}
          backGroundColor={toast.backGroundColor}
          textColor={toast.textColor}
        />
      ))}
    </div>
  );
}

// Custom Hook to use the toast system
export const useToast = () => {
  const [toasts, setToasts] = useState<any[]>([]);

  const showToast = useCallback(
    (
      message: string,
      type: "info" | "success" | "warning" | "error" = "error",
      duration: number = 3000,
      position:
        | "top"
        | "center"
        | "bottom"
        | "left"
        | "right"
        | "topLeft"
        | "topRight"
        | "bottomLeft"
        | "bottomRight" = "top",
      backGroundColor: string = "#006869",
      textColor: string = "#ffffff"
    ) => {
      // Add new toast to the state
      setToasts((prevToasts) => [
        ...prevToasts,
        { message, type, duration, position, backGroundColor, textColor },
      ]);
    },
    []
  );

  return { showToast, toasts };
};
