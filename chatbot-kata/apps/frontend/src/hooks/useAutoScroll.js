import { useEffect, useRef } from "react";

export function useAutoScroll(dependency) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [dependency]);

  return ref;
}