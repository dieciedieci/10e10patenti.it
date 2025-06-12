import type { ButtonProps } from "../types/Button";

export default function Button({ buttonLink, onClick, children }: ButtonProps) {
  const className = "cursor-pointer text-center rounded-lg bg-primary hover:bg-secondary transition-colors text-white text-xs uppercase px-6 py-3";

  if (buttonLink) {
    return (
      <a href={buttonLink} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
