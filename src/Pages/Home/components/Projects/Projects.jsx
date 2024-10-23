import { ButtonWhatsapp } from "../../../../components/ButtonWhatsapp/Button";
import { CardService } from "../../../../Components/CardService/CardService";
import { CardProducts } from "../Cards/CardProducts/CardProducts";
import {
  ContainerProjects,
  ContentCardsProducts,
  Title,
  SubTitle,
  Text,
  BoxAlign
} from "./ProjectsStyle";

export function Projects() {
  return (
    <ContainerProjects>
      <Title>Veja alguns dos nossos projetos</Title>
      <SubTitle>
        Confira os casos de sucesso dos nossos primeiros clientes e veja como
        podemos impulsionar o seu negócio!
      </SubTitle>
      <ContentCardsProducts>
        <CardProducts/>
        <CardProducts/>
        <CardProducts/>
        <CardProducts/>
      </ContentCardsProducts>
      <BoxAlign>
        <Text>Estamos com uma promoção para os nossos primeiros cliente, você pode ter essa sorte!
        </Text>
        <ButtonWhatsapp ThemeButton={"lightgreen"} Label={"ENTRE EM CONTATO"} />
      </BoxAlign>
    </ContainerProjects>
  );
}
