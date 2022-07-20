import React from "react";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const Button: React.FC<IProps> = ({ className,  size = "medium", ...props }) => (
  <button
    {...props}
    className={"bg-[#0095d9] text-white text-lg font-medium br-90 rounded-full px-6 py-3 hover:shadow-lg transition"}
  />
);

export default Button;
