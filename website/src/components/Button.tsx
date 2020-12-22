import React from "react";

const Button: React.FC = (props: any) => (
  <button
    type={props.type}
    className={props.className}
    onClick={props.onClickEvent}
  >
    {props.children}
  </button>
);

export default Button;