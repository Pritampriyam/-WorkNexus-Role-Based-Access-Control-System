import { useState, useEffect } from "react";

export const useVisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    // Get current visitor count from localStorage
    const currentCount = localStorage.getItem("visitorCount");
    const sessionVisited = sessionStorage.getItem("visited");

    if (!sessionVisited) {
      // New visit in this session
      const newCount = currentCount ? parseInt(currentCount) + 1 : 1;
      localStorage.setItem("visitorCount", newCount.toString());
      sessionStorage.setItem("visited", "true");
      setVisitorCount(newCount);
    } else {
      // Already visited in this session
      setVisitorCount(currentCount ? parseInt(currentCount) : 0);
    }
  }, []);

  return visitorCount;
};
