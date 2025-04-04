// import About from "@/components/about";
import About2 from "@/components/about2";
import AboutUs from "@/components/aboutUs";
// import DirectionsSection from "@/components/directions";
import Directions from "@/components/directions2";
import FAQ from "@/components/faq";
import LibraryMap from "@/components/map";
import NewsSection from "@/components/news";
import ProjectsSection from "@/components/projects";
import RegistrationForm from "@/components/registration";
import Showcase from "@/components/showcase";

export default function HomePage() {
  return (
    <>
      <Showcase />
      <AboutUs/>
      <Directions/>
      <About2/>
      <NewsSection/>
      <ProjectsSection/>
      <RegistrationForm/>
      <FAQ/>
      <LibraryMap/>
    </>
  );
}
