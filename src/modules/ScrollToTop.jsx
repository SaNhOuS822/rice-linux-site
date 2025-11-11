import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { DURATION } from "../components/TransitionScreen/ExitScreenVertical.jsx";


export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, (DURATION) * 1000 - 100);
  }, [pathname]);
}

