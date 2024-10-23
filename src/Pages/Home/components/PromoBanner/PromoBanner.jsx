import { ButtonWhatsapp } from "../../../../Components/ButtonWhatsapp/ButtonWhatsapp";
import {
  ContainerPromoBanner,
  Title,
  Text,
} from "./PromoBannerStyle";

import banner from "../../../../assets/images/banner.png"
export function PromoBanner() {
  return (
    <ContainerPromoBanner>
      <Title>
      Transforme seu negócio com nossos serviços de criação de sites profissionais, levando sua marca ao próximo nível com design impactante e resultados garantidos!
      </Title>
      <Text>Transforme sua presença online com um site moderno, otimizado e focado em resultados. Na Tholy, criamos plataformas digitais que realmente impulsionam o seu negócio. Não espere mais, entre em contato agora e juntos vamos desenvolver o site perfeito para sua empresa.</Text>
      <ButtonWhatsapp ThemeButton={"lightgreen"} Label={"Dê um passo inicial para transformar o seu negócio em um site profissional: Peça um orçamento agora"} width={true}/>
    </ContainerPromoBanner>
  );
}
