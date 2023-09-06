import type { V2_MetaFunction } from "@remix-run/react";
import Footer from "~/components/Footer";
import AboutSection from "~/containers/AboutSection";
import AppSection from "~/containers/AppSection";
import ContactSection from "~/containers/ContactSection";
import DashboardSection from "~/containers/DashboardSection";
import FaqSection from "~/containers/FaqSection";
import FeedbackSection from "~/containers/FeedbackSection";
import ZeroSection from "~/containers/ZeroSection";
import Main from "~/layouts/Main";

export default function Index() {
  return (
    <Main>
      <ZeroSection />
      <AboutSection />
      <AppSection />
      <DashboardSection />
      <FeedbackSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </Main>
  );
}
