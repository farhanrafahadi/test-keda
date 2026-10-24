import { useState } from "react";
import Header from "../components/Header";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import HeroSection from "../sections/HeroSection";
import PricingSection from "../sections/PricingSection";
import LoginPage from "./LoginPage";

const LandingPage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-white font-sans">
      {/* Kirim props untuk membuka modal ke Header */}
      <Header onLoginClick={() => setIsLoginOpen(true)} />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <PricingSection />
        <ContactSection />
      </main>
      {isLoginOpen && <LoginPage onClose={() => setIsLoginOpen(false)} />}
    </div>
  );
};

export default LandingPage;
