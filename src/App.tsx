import FeatureBlock from "./components/FeatureBlock"
import Footer from "./components/Footer"
import LayoutBoxed from "./components/LayoutBoxed"
import LayoutFullWidth from "./components/LayoutFullWidth"
import Navigation from "./components/Navigation"
import PlanBlock from "./components/PlanBlock"
import { features } from "./data/features"
import { plans } from "./data/plans"

function App() {
  return (
    <main className="font-display text-body grid">
      <LayoutBoxed>
        <Navigation />
      </LayoutBoxed>
      <LayoutBoxed className="bg-linear-to-b from-secondary to-white md:my-16 pt-16 rounded-t-2xl items-center flex flex-col gap-16">
        <div className="flex flex-col gap-4 max-w-2xl mx-auto text-center">
          <h1 className="font-bold text-4xl md:text-6xl text-white">Semplifica la gestione della tua autoscuola</h1>
          <h2 className="md:text-lg text-gray-200">Risparmia tempo gestendo in modo automatico gli studenti e gli istruttori della tua autoscuola.</h2>
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
            <h2 className="text-2xl md:text-4xl text-white font-bold">Un piano per ogni necessità</h2>
            <p className="text-md md:text-lg text-gray-200">Puoi adottare la soluzione che preferisci, e cambiarla quando vuoi, in base al numero di utenti attivi mensili della tua autoscuola.</p>
          </div>
          <div className="grid items-center gap-4 grid-cols-1 md:grid-cols-7">
            {plans.map((plan, index) => {
              const colSpan = index !== 1 ? "md:col-span-2" : "md:col-span-3";
              const extraClasses = index === 1 ? "md:min-h-[450px]" : "";

              return (
                <PlanBlock
                  key={index}
                  className={`md:row-span-1 ${colSpan} ${extraClasses}`}
                  planInfo={plan}
                />
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
