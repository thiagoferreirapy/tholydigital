import { ButtonWhatsapp } from "../../../../Components/ButtonWhatsapp/ButtonWhatsapp";
import { CardService } from "../../../../Components/CardService/CardService";
import {
  ContainerWhyYouNeedASite,
  ContentBenefitsSection,
  ContentCardBenefits,
  CardBenefits,
  Title,
  Text,
  TitleCard,
  TextCard,
} from "./WhyYouNeedASiteStyle";

export function WhyYouNeedASite() {
  return (
    <ContainerWhyYouNeedASite>
      <Title>
        Por que você <span>deve ter um site?</span>
      </Title>
      <Text>
        Pense em qualquer grande, certamente, elas têm uma forte presença
        online. <br /> Agora, reflita: por que o seu negócio ainda não segue
        esse caminho? Ter um site é essencial para construir credibilidade,
        alcançar novos clientes e expandir sua presença no mercado digital. Não
        fique para trás – entre para o mundo online e faça seu negócio brilhar!
      </Text>

      <ContentBenefitsSection>
        <ContentCardBenefits>
          <CardBenefits>
            <TitleCard>Autoridade</TitleCard>
            <TextCard>
              Um site bem construído é como um livro escrito por um
              especialista: ele não apenas demonstra seu conhecimento e
              experiência no setor, mas também aumenta a confiança dos clientes
              em sua marca.
            </TextCard>
          </CardBenefits>
          <CardBenefits>
            <TitleCard>Divulgação</TitleCard>
            <TextCard>
              Um site é um canal de divulgação constante, alcançando um público
              global 24 horas por dia. Com uma presença online impactante, você
              aumenta a visibilidade e atrai potenciais clientes para seus
              produtos e serviços.
            </TextCard>
          </CardBenefits>
        </ContentCardBenefits>

        <ContentCardBenefits>
          <CardBenefits>
            <TitleCard>Autonomia</TitleCard>
            <TextCard>
              Imagine ter um funcionário sempre disponível, pronto para atender
              seus clientes e promover seus produtos a qualquer hora. Um site
              faz exatamente isso! Ele otimiza suas operações, oferece
              informações instantâneas e aumenta a eficiência, permitindo que
              você dedique mais tempo a outras prioridades.
            </TextCard>
          </CardBenefits>
          <CardBenefits>
            <TitleCard>Relevancia</TitleCard>
            <TextCard>
              Um site é como um farol que ilumina seu negócio no vasto oceano
              digital. Ele garante que sua marca se destaque e seja facilmente
              encontrada por clientes em potencial, independentemente da hora ou
              do lugar.
            </TextCard>
          </CardBenefits>
        </ContentCardBenefits>
        {/* <ButtonWhatsapp ThemeButton={"lightgreen"} Label={"Solicitar orçamento"} /> */}
      </ContentBenefitsSection>
    </ContainerWhyYouNeedASite>
  );
}
