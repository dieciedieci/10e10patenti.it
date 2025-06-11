import type { FeatureProps } from "../types/Feature";

export default function FeatureBlock({ feature }: FeatureProps) {
  return (
    <div className='flex flex-col md:flex-row sm:items-center gap-4 md:gap-16'>
      <div className={`flex flex-col gap-6 ${feature.isReverse ? 'md:order-2' : ''}`}>
        <div>
          <h3 className="text-gray-500 text-lg">{feature.eyebrow}</h3>
          <h2 className="text-2xl font-bold">{feature.title}</h2>
        </div>
        <p className="text-md">{feature.description}</p>
      </div>
      <img className="rounded-lg" src={feature.image} alt={feature.imageAlt} />
    </div>
  )
}
