import type { LayoutProps } from "../types/Layout";

export default function LayoutFullWidth({ children, className }: LayoutProps) {
  return <div className={`${className}`}>{children}</div>;
}
