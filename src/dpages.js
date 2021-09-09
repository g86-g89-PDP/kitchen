import React from "react";
import All from "./components/all";
import Home from "./pages/home";
import Tel from "./pages/tel";
import { useParams } from "react-router-dom";
import Settings from "./pages/settings";
import Dashboards from "./pages/dashboards";
import Error from "./components/error";

const Dpages = () => {
  const { pages } = useParams();

  const Pages = (pages) => {
    switch (pages) {
      case "home":
        return <Home />;

      case "settings":
        return <Settings />;

      case "dashboards":
        return <Dashboards />;

      case "tel":
        return <Tel />;

      default:
        return <Error />;
    }
  };

  console.log(pages);
  return <All>{Pages(pages)}</All>;
};

export default Dpages;
