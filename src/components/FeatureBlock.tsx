import type { FeatureProps } from "../types/Feature";
import AppStoreLinks from "./AppStoreLinks"

export default function FeatureBlock({ eyebrow, title, description, image, imageAlt, isReverse, displayMobileAppDownloadCards }: FeatureProps) {
  return (
    <div className='flex flex-col md:flex-row sm:items-center gap-4 md:gap-16'>
      <div className={`flex flex-col gap-6 ${isReverse ? 'md:order-2' : ''}`}>
        <div>
          <h3 className="text-gray-400">{eyebrow}</h3>
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <p className="text-md">{description}</p>
        <p style={{display: displayMobileAppDownloadCards ? 'block' : 'none' }}>
            <AppStoreLinks />
        </p>
      </div>
      <img className="rounded-lg" src={image} alt={imageAlt} style={{"height": "400px"}} />
    </div>
  )
}
