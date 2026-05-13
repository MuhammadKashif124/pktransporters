import { CoverageMap, Hero, ScaleStats, ServicesGrid, TestimonialsFaq, TrustMarquee, WhyChoose } from "@/components/sections/home-sections";

export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <ScaleStats />
      <ServicesGrid />
      <WhyChoose />
      <CoverageMap />
      <TestimonialsFaq />
    </>
  );
}
