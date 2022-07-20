import React from "react";
import { ImageProps } from "next/image";

const LogoNavbar: React.FC<Omit<ImageProps, "src" | "alt">> = ({
  width = 100,
  height = 40,
  ...props
}) => {
  return (
    <img
      {...props}
      src="/logo9.png"
      alt="Bountyz Logo"
      width={width}
      height={height}
    />
  );
};

export default LogoNavbar;
