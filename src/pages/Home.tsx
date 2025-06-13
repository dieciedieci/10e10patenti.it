import FaqItem from "../components/FaqItem"
import FeatureBlock from "../components/FeatureBlock"
import LayoutBoxed from "../components/LayoutBoxed"
import LayoutFullWidth from "../components/LayoutFullWidth"
import { features } from "../data/features"
import { faqs } from "../data/faqs"

export default function Home() {
  return (
    <>
      <LayoutBoxed className="bg-linear-to-b from-secondary to-white pt-16 rounded-t-2xl items-center flex flex-col gap-16">
        <div className="flex flex-col gap-4 max-w-2xl mx-auto text-center">
          <h1 className="font-bold text-4xl md:text-6xl text-white">Per un autoscuola moderna</h1>
          <h2 className="md:text-lg text-gray-200">Vogliamo autarti a stare al passo, portandoti dove si trovano gli studenti</h2>
        </div>
        <img className="rounded-lg" src="https://placehold.co/700x500" alt="Image" />

      </LayoutBoxed>
      <LayoutBoxed className="grid gap-22 md:gap-8 my-22">
        {features.map((feature, index) => (
          <FeatureBlock key={index} {...feature} />
        ))}
      </LayoutBoxed>
      <LayoutFullWidth className="py-16 bg-secondary">
        <LayoutBoxed className="grid gap-8">
          <div className="text-center grid gap-4 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl mb-6 text-white font-bold">Spendi solo quando guadagni</h2>
            <p className="text-md md:text-lg text-gray-300">Molti dei servizi offerti seguono un piano mensile per utente attivo. Come per esempio l'accesso alle applicazioni mobile.</p>
            <p className="text-md md:text-lg text-gray-300">Per diventare autoscuola dieci e dieci, se ti serve un aiuto con la parte infrastrutturale invece faremo un prezzo apposito.</p>
            <p className="text-md md:text-lg text-gray-300">Se ti abbiamo incuriosito e per saperne di piu' scrivici un <a href="mailto:info@10e10patenti.it">e-mail</a></p>
          </div>
        </LayoutBoxed>
      </LayoutFullWidth>
      <LayoutFullWidth className="py-16">
        <LayoutBoxed className="grid gap-8">
          <div className="text-center mb-8 grid gap-4 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold">Domande frequenti</h2>
          </div>
          <div className="grid gap-8">
            {faqs.map((faq, index) => {
              return (
                <FaqItem key={index} question={faq.question} answer={faq.answer} />
              );
            })}
          </div>
        </LayoutBoxed>
      </LayoutFullWidth>
    </>
  )
}
