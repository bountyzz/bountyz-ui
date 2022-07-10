import React from "react";
import Image, { ImageProps } from "next/image";

const LogoNavbar: React.FC<Omit<ImageProps, "src" | "alt">> = ({
  width = 160,
  height = 50,
  ...props
}) => {
  return (
    <Image
      {...props}
      src="/bountyz.jpg"
      alt="Bountyz Logo"
      width={width}
      height={height}
    />
  );
};

export default LogoNavbar;
