import { useEffect } from "react";
import homeImage from "../assets/imgs/home-image.jpg";

export function Home() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${homeImage})`;

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  return <div className="home-page"></div>;
}
