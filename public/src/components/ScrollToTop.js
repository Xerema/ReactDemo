import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    //scroll to top after loading a new route
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // ei animaatiota
    });
  }, [pathname]);

  return null;
}
