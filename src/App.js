import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import ScrollProgress from "./views/ScrollProgress";
import InfiniteScroll from "./views/InfiniteScroll";
import ParallaxScroll from "./views/ParallaxScroll";




export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navigation/>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/scroll-progress" component={ScrollProgress}></Route>
        <Route path="/infinite-scroll" component={InfiniteScroll}></Route>
        <Route path="/parallax-scroll" component={ParallaxScroll}></Route>
      </HashRouter>
    </div>
  );
}