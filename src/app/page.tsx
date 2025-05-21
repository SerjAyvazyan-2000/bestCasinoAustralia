import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Partners from "@/components/Partners";
import CustomSlider from "@/components/CustomSlider";
import Contact from "@/components/Contact";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import TopCasinos from "@/components/TopCasinos";

export default function Home() {
  return <>
    <Hero/>
    <Services/>
    <About/>
    <Faq/>
        <TopCasinos />
    <Partners/>
    <CustomSlider />
    <Contact />
    <Pricing />
    <WhyUs />


  </>
}
