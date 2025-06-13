import { IoLogoApple, IoLogoGooglePlaystore } from "react-icons/io5";
import Button from './Button';

const appStoreLinks = [
  {
    buttonIcon: IoLogoApple,
    buttonLink: 'https://apps.apple.com/it/app/10e10/id6503172984',
    buttonText: 'App Store'
  },
  {
    buttonIcon: IoLogoGooglePlaystore,
    buttonLink: 'https://play.google.com/store/apps/details?id=app.dieciedieci.autoscuola&pcampaignid=web_share',
    buttonText: 'Play Store'
  },

];

export default function AppStoreLinks() {
  return (
    <section className='grid gap-8 py-16'>
      <div className="text-center mb-8 grid gap-4 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold">Un piano per ogni necessità</h2>
        <p className="text-md md:text-lg text-gray-400">Puoi adottare la soluzione che preferisci, e cambiarla quando vuoi, in base al numero di utenti attivi mensili della tua autoscuola.</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 md:gap-8">
      {appStoreLinks.map((link, index) => {
        const Icon = link.buttonIcon;
        return (
          <Button key={index} buttonLink={link.buttonLink} isReverse="true">
            <Icon /> {link.buttonText}
          </Button>
        );
      })}
      </div>
    </section>
  )
}
