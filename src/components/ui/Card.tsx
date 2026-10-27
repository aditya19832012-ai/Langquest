import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  title?: string;
  subtitle?: string;
};

export default function Card({
  children,
  title,
  subtitle,
  className = "",
  ...props
}: CardProps) {
  return (
    <div className={`lq-card ${className}`} {...props}>
      {(title || subtitle) && (
        <div className="lq-card__header">
          {title && <h3 className="lq-card__title">{title}</h3>}
          {subtitle && <p className="lq-card__subtitle">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
