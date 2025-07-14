import React, { Fragment } from "react";
import "./loader.css";

export const Loader = ({ state }) => {
  return <Fragment>{state && <div id="loader"></div>}</Fragment>;
};
