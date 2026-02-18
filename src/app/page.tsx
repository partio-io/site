import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { CliDemo } from "@/components/sections/cli-demo";
import { OpenSource } from "@/components/sections/open-source";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <CliDemo />
        <OpenSource />
      </main>
      <Footer />
    </>
  );
}
