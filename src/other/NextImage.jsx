import React, { useEffect, useState } from "react";
import Image from "next/image";

const NextImage = (props) => {
  const { src, altImage, className, ...rest } = props;
  const [imgSrc, setImgSrc] = useState("");
  const [isImageFine, setIsImageFine] = useState(true);
  useEffect(() => {
    if (src) setImgSrc(src);
    setIsImageFine(true);
  }, [src]);
  return isImageFine ? (
    <Image
      {...rest}
      src={imgSrc}
      alt={altImage}
      onError={() => {
        setIsImageFine(false);
      }}
      className={props.className ? props.className : "relative"}
      fill
    />
  ) : (
    <Image
      {...rest}
      src=""
      alt={altImage}
      className={props.className ? props.className : "!relative"}
      fill
    />
  );
};

export default NextImage;
