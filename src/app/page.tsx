import AboutUs from "@/components/custom/AboutUs";
import ChatWithUs from "@/components/custom/ChatWithUs";
import ContactUs from "@/components/custom/ContactUs";
import HeroSectionHome from "@/components/custom/Hero";
import NavBar from "@/components/custom/NavBar";
import Products from "@/components/custom/Products";
import Services from "@/components/custom/Services";




export default function Home() {
  return (
    <>
      <ChatWithUs />
      <NavBar />
      <HeroSectionHome />
      <Products/>
      <Services/>
      <AboutUs />
      <ContactUs />
    </>
  );
}
