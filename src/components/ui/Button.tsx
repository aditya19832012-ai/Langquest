import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "danger";
  children: ReactNode;
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`lq-button lq-button--${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
