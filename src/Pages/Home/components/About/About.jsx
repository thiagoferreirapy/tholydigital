import { CardService } from "../../../../Components/CardService/CardService";
import {
  ContainerAbout,
  ContentQuantinty,
  Title,
  Article,
  Text,
} from "./AboutStyle";

export function About() {
  return (
    <ContainerAbout>
      <Title>
        Por que você deve ter um site com a <span>THOLY</span>?
      </Title>

      <Text>
        A Tholy nasceu de um sonho. Um jovem empreendedor, apaixonado por
        tecnologia, descobriu sua vocação como programador logo no início da
        faculdade. Foi nesse momento que ele criou seu primeiro projeto, um
        esboço do que um dia se tornaria a Tholy. Em 2024, após anos de
        dedicação e aprendizado, esse sonho se transformou em realidade, e a
        Tholy foi fundada com um propósito claro: levar tecnologia e inovação
        para empreendedores que desejam crescer e conquistar seu espaço no
        ambiente digital.
      </Text>

      <ContentQuantinty>
        <CardService TitleService={"Autoridade"} />
        <CardService TitleService={"Divulgação"} />
        <CardService TitleService={"Autonomia"} />
        <CardService TitleService={"Relevancia"} />
        <CardService TitleService={"Fluidez e gerenciamento"} />
        <CardService TitleService={"Websites Personalizados"} />
        <CardService TitleService={"Landing Pages modernas"} />
        <CardService TitleService={"E-commerces de Alta Qualidade"} />
        <CardService TitleService={"Muito mais segurança"} />
        <CardService TitleService={"Sistemas Personalizados"} />
      </ContentQuantinty>
    </ContainerAbout>
  );
}
