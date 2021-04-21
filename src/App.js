import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./routes/Routes";
import ScrollReset from "./components/ScrollReset";

import "react-lazy-load-image-component/src/effects/opacity.css";
import "leaflet/dist/leaflet.css";
import "assets/css/index.css";

import "swiper/css/swiper.min.css";
import "aos/dist/aos.css";

const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <Router history={browserHistory}>
      <ScrollReset />
      <Routes />
    </Router>
  );
};

export default App;
