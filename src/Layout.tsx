import Footer from "./components/Footer"
import LayoutBoxed from "./components/LayoutBoxed"
import Navigation from "./components/Navigation"
import { Outlet } from "react-router"

export default function Layout() {
  return (
    <main className="font-display text-body grid">
      <LayoutBoxed>
        <Navigation />
      </LayoutBoxed>
      <main>
        <Outlet />
      </main>
      <LayoutBoxed>
        <Footer />
      </LayoutBoxed>
    </main >
  )
}
