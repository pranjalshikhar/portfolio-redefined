import { useEffect, useState } from "react";

export function useLocalTime(timeZone = "Asia/Kolkata", locale = "en-IN") {
  const [time, setTime] = useState("");

  useEffect(() => {
    const options = {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const update = () => setTime(new Date().toLocaleTimeString(locale, options));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timeZone, locale]);

  return time;
}
