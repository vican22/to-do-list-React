import React from "react";
import "./List.css";

const list = props => (
  <ul>
    {props.items.map((item, index) => (
      <li onClick={props.onClick} key={index}>
        {item}
      </li>
    ))}
  </ul>
);

export default list;
