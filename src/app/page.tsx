import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import Approach from "@/components/Approach/Approach";
import Process from "@/components/Process/Process";
import Advantages from "@/components/Advantages/Advantages";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Перейти к содержанию
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Projects />
        <Approach />
        <Process />
        <Advantages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
