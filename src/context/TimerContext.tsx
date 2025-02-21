import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const TimerContext = createContext<{
  timer: number;
  isTimerExpired: boolean;
  setTimer: any;
  setIsTimerExpired: (isExpired: boolean) => void;
  otpemail: string;
  setOtpemail: (email: string) => void;
}>({
  timer: 0,
  isTimerExpired: false,
  setTimer: () => {},
  setIsTimerExpired: () => {},
  otpemail: "",
  setOtpemail: () => {},
});

export const TimerProvider = ({ children }: any) => {
  const [timer, setTimer] = useState(Number(localStorage.getItem("timer")));
  const [isTimerExpired, setIsTimerExpired] = useState(false);
  const [otpemail, setOtpemail] = useState(
    String(localStorage.getItem("email"))
  );

  const handleCountdown = useCallback(() => {
    if (timer > 0) {
      setTimer((prevTimer) => prevTimer - 1);
    } else {
      setIsTimerExpired(true);
    }
    localStorage.setItem("timer", JSON.stringify(timer));
  }, [timer]);

  useEffect(() => {
    const countdown = setInterval(handleCountdown, 1000);
    return () => clearInterval(countdown);
  }, [handleCountdown]);

  useEffect(() => {
    localStorage.setItem("email", otpemail);
  }, [otpemail]);
  const value = useMemo(
    () => ({
      timer,
      isTimerExpired,
      setTimer,
      setIsTimerExpired,
      otpemail,
      setOtpemail,
    }),
    [timer, isTimerExpired, otpemail]
  );
  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};

export const useTimerContext = () => {
  return useContext(TimerContext);
};
