import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Services from "@/components/services"
import About from "@/components/about"
// import Portfolio from "@/components/portfolio"
import Team from "@/components/team"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Industries from "@/components/industries"
import Technologies from "@/components/technologies"
import HowWeWork from "@/components/howwework"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Industries/>
      <Technologies/>
      <HowWeWork/>
      {/* <Portfolio /> */}
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}

