import React from "react";
import { render } from "react-dom";

import { BrowserRouter, Match, Miss } from "react-router";

import "./css/style.css";
import App from "./components/App";
import StorePicker from "./components/StorePicker";


// Router component
const Root = () => {
  return (
    <BrowserRouter> {/* Browser Router component */}
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match exactly pattern="/store/" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
};
render(<App />, document.querySelector("#main"));
