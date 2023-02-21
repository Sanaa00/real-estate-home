import { useState, useEffect } from "react";

export default function useOffset() {
  const [offset, setOffset] = useState(window.pageYOffset);

  useEffect(() => {
    function handleResize() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleResize);
    return () => window.removeEventListener("scroll", handleResize);
  }, []);

  return offset;
}
