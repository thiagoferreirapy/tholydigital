import { ButtonWhatsapp } from "../../../../Components/ButtonWhatsapp/ButtonWhatsapp";
import {
  ContainerInformationQuantity,
  ContentQuantinty,
  Title,
  SubTitle,
  Text,
} from "./InformationQuantityStyle";

export function InformationQuantity() {
  return (
    <ContainerInformationQuantity>
      <Title>
      Se você tem um negócio e deseja elevar a qualidade do seu atendimento, você está no <span>lugar certo!</span>
      </Title>

      <ContentQuantinty>
        <SubTitle>+ 200.00.00</SubTitle>
        <Text>
        Com mais de 210 milhões de brasileiros conectados à internet, imagine o potencial que você tem para alcançar esse vasto público! Não deixe essa oportunidade passar — expanda sua presença online e faça sua marca ser vista e reconhecida por milhões!
        </Text>
        <ButtonWhatsapp ThemeButton={"lightgreen"} Label={"ENTRE EM CONTATO"} />
      </ContentQuantinty>
    </ContainerInformationQuantity>
  );
}
