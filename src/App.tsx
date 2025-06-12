import AppStoreLinks from "./components/AppStoreLinks"
import FaqItem from "./components/FaqItem"
import FeatureBlock from "./components/FeatureBlock"
import Footer from "./components/Footer"
import LayoutBoxed from "./components/LayoutBoxed"
import LayoutFullWidth from "./components/LayoutFullWidth"
import Navigation from "./components/Navigation"
import { features } from "./data/features"
import { faqs } from "./data/faqs"
//import { plans } from "./data/plans"

function App() {
  return (
    <main className="font-display text-body grid">
      <LayoutBoxed>
        <Navigation />
      </LayoutBoxed>
      <LayoutBoxed className="bg-linear-to-b from-secondary to-white md:my-16 pt-16 rounded-t-2xl items-center flex flex-col gap-16">
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
          <div className="text-center mb-8 grid gap-4 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl text-white font-bold">Spendi solo quando guadagni</h2>
            <p className="text-md md:text-lg text-gray-200">Molti dei servizi offerti seguono un piano mensile per utente attivo. Come per esempio l'accesso alle applicazioni mobile.</p>
            <p className="text-md md:text-lg text-gray-200">Per diventare autoscuola dieci e dieci, se ti serve un aiuto con la parte infrastrutturale invece faremo un prezzo apposito.</p>
            <p className="text-md md:text-lg text-gray-200">Se ti abbiamo incuriosito e per saperne di piu' scrivici un <a href="mailto:info@10e10patenti.it">e-mail</a></p>
          </div>
          <div className="grid items-center gap-4 grid-cols-1 md:grid-cols-7">
            {//plans.map((plan, index) => {
              //const colSpan = index !== 1 ? "md:col-span-2" : "md:col-span-3";
              //const extraClasses = index === 1 ? "md:min-h-[450px]" : "";

              //return (
                //<PlanBlock
                  //key={index}
                  //className={`md:row-span-1 ${colSpan} ${extraClasses}`}
                  //planInfo={plan}
                ///>
              //);
            //})
            }
          </div>
        </LayoutBoxed>
      </LayoutFullWidth>
      <LayoutBoxed>
        <AppStoreLinks />
      </LayoutBoxed>
      <LayoutFullWidth className="py-16 bg-secondary">
        <LayoutBoxed className="grid gap-8">
          <div className="text-center mb-8 grid gap-4 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl text-white font-bold">Domande frequenti</h2>
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
      <LayoutBoxed>
        <Footer />
      </LayoutBoxed>

    </main >
  )
}

export default App
