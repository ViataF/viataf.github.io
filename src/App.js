import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Intro from "./components/layout/pages/Intro";
import Portfolio from "./components/layout/pages/Portfolio";
import About from "./components/layout/pages/About";
import NotFound from "./components/layout/pages/NotFound";
import Testimonials from "./components/layout/pages/Testimonials";
import Contact from "./components/layout/pages/Contact";
import Pagination from "./components/layout/Pagination/Pagination";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
    M.Carousel.init({ carousel: true });
  });

  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="container">
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/testimonial" component={Testimonials} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
          <Pagination />
        </div>
      </div>
    </Router>
  );
};

export default App;
