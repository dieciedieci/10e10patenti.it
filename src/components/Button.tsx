import type { ButtonProps } from "../types/Button";

export default function Button({ buttonLink, isReverse, onClick, children }: ButtonProps) {
  const HTMLTag = buttonLink ? "a" : "button";
  const className = `flex justify-center items-start gap-2 cursor-pointer text-center rounded-lg ${isReverse ? "border-2 border-secondary text-secondary" : "bg-primary text-white"
    } hover:bg-secondary hover:text-white transition-colors  text-sm px-2 md:px-4 pt-3 md:pt-4 pb-2 md:pb-3`;
  return (
    <HTMLTag href={buttonLink} onClick={onClick} className={className}>
      {children}
    </HTMLTag>
  );
}
