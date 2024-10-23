import { ButtonWhatsapp } from "../../../../Components/ButtonWhatsapp/ButtonWhatsapp";
import {
  ContainerInitialHome,
  Title,
  Text,
} from "./InitialHomeStyled";

export function InitialHome() {
  return (
    <ContainerInitialHome>
      <Title>
        Tranformamos seus sonhos <br /> <span>em resultados</span>
      </Title>
      <Text>
        Nós não criamos apenas um site, mas sim uma nova maneira de construir
        sua presença online com <span>impacto e propósito</span>
      </Text>
      <ButtonWhatsapp ThemeButton={"lightgreen"} Label={"ENTRE EM CONTATO"} />
    </ContainerInitialHome>
  );
}
