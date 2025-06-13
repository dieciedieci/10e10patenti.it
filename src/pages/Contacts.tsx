import LayoutBoxed from "../components/LayoutBoxed";
import LayoutFullWidth from "../components/LayoutFullWidth";

export default function Contacts() {
  return (
    <LayoutFullWidth className="bg-secondary text-white min-h-64 flex items-center justify-center">
      <LayoutBoxed>
        <h1 className="text-4xl md:text-6xl text-center">Contacts</h1>
      </LayoutBoxed>
    </LayoutFullWidth>
  )
}
