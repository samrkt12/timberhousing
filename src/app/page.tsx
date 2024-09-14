import Approach from "@/components/Approach";
import Contact3d from "@/components/Contact3d";
import HighlightedServices from "@/components/HighlightedServices";
import LandingSection from "@/components/LandingSection";
import Series from "@/components/Series";
import StartToday from "@/components/StartToday";
import WhatMakesUsUnique from "@/components/WhatMakesUsUnique";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhyPrefabricated from "@/components/WhyPrefabricated";
import WorkProcess from "@/components/WorkProcess";

export default function Home() {
  return (
    <>
      <LandingSection />
      <WhyChooseUs />
      <Approach />
      <WhatMakesUsUnique />
      <HighlightedServices />
      <Series />
      <Contact3d />
      <WorkProcess />
      <WhyPrefabricated />
      <StartToday />
    </>
  );
}
