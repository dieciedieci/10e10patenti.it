import type { PlanProps } from "../types/Plan";
import Button from "./Button";

export default function PlanBlock({ className, planInfo }: PlanProps) {
  if (!planInfo) return null;

  return (
    <div className={`flex flex-col justify-between gap-4 p-6 rounded-xl bg-white ${className}`}>
      <header className="grid gap-4">
        <div className="flex flex-col font-bold">
          <h4 className="text-2xl">{planInfo.title}</h4>
          {planInfo.isMostPopular && <div className="text-xs text-primary">Il più conveniente</div>}
        </div>
        <p className="text-sm">{planInfo.description}</p>
      </header>

      <div className="grid gap-4">
        <p className="font-bold text-sm text-gray-400">
          <span className="text-2xl text-body">{planInfo.price}</span> per utenti attivi
        </p>
        <ul className="text-sm">
          {planInfo.features.map((feature, index) => (
            <li key={index} className={`border-t border-gray-200 py-2 ${index === 0 ? 'border-t-0' : ''}`}>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Button buttonLink={planInfo.buttonLink}>{planInfo.buttonText}</Button>
    </div>
  );
}
