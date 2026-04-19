import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const DEFAULT_CONFIG = { damping: 30, stiffness: 400 };

export function useCursorSpring(config = DEFAULT_CONFIG) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const x = useSpring(cursorX, config);
  const y = useSpring(cursorY, config);

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return { x, y };
}
