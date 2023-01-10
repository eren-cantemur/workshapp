import Content from "../components/Content";
import CTA from "../components/CTA";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <CTA />
      <Content />
      <SocialProof />
      <Footer />
    </>
  );
}
