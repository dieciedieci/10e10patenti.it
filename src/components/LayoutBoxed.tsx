import type { LayoutProps } from "../types/Layout";

export default function LayoutBoxed({ children, className }: LayoutProps) {
  return <div className={`w-full max-w-5xl mx-auto px-4 ${className}`}>{children}</div>;
}
