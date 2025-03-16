import AboutUs from "@/components/home/AboutUs";
import ContactUs from "@/components/home/ContactUs";
import HeroSectionHome from "@/components/home/Hero";
import NavBar from "@/components/home/NavBar";
import Products from "@/components/home/Products";
import Services from "@/components/home/Services";




export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSectionHome />
      <AboutUs />
      <Products/>
      <Services/>
      <ContactUs />
    </>
  );
}
