import { fetchTemplate, fetchContent } from "@/utils/api";
import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import Categories from "@/components/Categories";
import SpecialOffers from "@/components/SpecialOffers";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default async function Home() {
  const template = await fetchTemplate(1); // Estructura base de la plantilla
  const content = await fetchContent(1);  // Contenido dinámico

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header content={content.header} />

      {/* Secciones dinámicas */}
      <Welcome content={content.welcome} />
      <Categories content={content.categories} />
      <SpecialOffers content={content.special_offers} />
      <About content={content.about} />
      <Contact content={content.contact} />
      <Subscribe content={content.subscribe} />
      <Footer content={content.footer} />
    </div>
  );
}
