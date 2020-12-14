import React from "react";

const Avatar = (props: any) => (
  <img
    alt={props.alt}
    className={props.className}
    src={props.url}
    width={props.imageWidth}
  />
);

export default Avatar;
