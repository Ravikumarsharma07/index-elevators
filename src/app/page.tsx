import AboutUs from "@/components/home/AboutUs";
import ChatWithUs from "@/components/home/ChatWithUs";
import ContactUs from "@/components/home/ContactUs";
import HeroSectionHome from "@/components/home/Hero";
import NavBar from "@/components/home/NavBar";
import Products from "@/components/home/Products";
import Services from "@/components/home/Services";




export default function Home() {
  return (
    <>
      <ChatWithUs />
      <NavBar />
      <HeroSectionHome />
      <AboutUs />
      <Products/>
      <Services/>
      <ContactUs />
    </>
  );
}
