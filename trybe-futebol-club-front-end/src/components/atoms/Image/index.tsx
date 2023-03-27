import React from "react";
import ImageProps from "./types";


const Image: React.FC<ImageProps> = ({src,alt}:ImageProps) => {
  return(<img src={src} alt={alt}/>);
};


export default Image;