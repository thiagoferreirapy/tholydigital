import { ContainerHome } from "./HomeStyle";
import { About } from "./components/About/About";
import { CardsQuality } from "./components/Cards/CardQuality/CardsQuality";
import { InformationQuantity } from "./components/InformationQuantity/InformationQuantity";
import { InitialHome } from "./components/InitialHome/InitialHome";
import { Projects } from "./components/Projects/Projects";
import { PromoBanner } from "./components/PromoBanner/PromoBanner";
import { WhyYouNeedASite } from "./components/WhyYouNeedASite/WhyYouNeedASite";

export function Home() {
  return (
    <ContainerHome>
      <InitialHome/>
      <CardsQuality/>
      <InformationQuantity/>
      <Projects/>
      <About/>      
      <PromoBanner/>
    </ContainerHome>
  );
}
