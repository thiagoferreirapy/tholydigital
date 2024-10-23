import { ContainerCardsQuality, ContentCards, Card, Title, Description} from "./CardsQualityStyled.jsx";

export function CardsQuality() {
  return (
    <ContainerCardsQuality>
      <ContentCards>
        <Card BgTheme={true}>
            <Title>Ganhe Tempo</Title>
            <Description>Invista em nós e ganhe mais tempo para focar no que você faz de melhor. Nós cuidamos de suas necessidades digitais, para que você não precise fazer isso.</Description>
        </Card>
        <Card BgTheme={false}>
            <Title>Acessível</Title>
            <Description>Atraia cada vez mais clientes e amplie suas vendas, oferecendo produtos físicos e/ou digitais 24 horas por dia. Com um site moderno e eficiente, seu negócio estará sempre à disposição!</Description>
        </Card>
        <Card BgTheme={true}>
            <Title>Melhor Estratégia</Title>
            <Description>Elaboramos as melhores estratégias digitais para alavancar seu negócio. Abordagem baseada em dados, orientada para resultados e adaptada aos seus objetivos.</Description>
        </Card>
        <Card BgTheme={false}>
            <Title>Atraia Clientes</Title>
            <Description>Informe e eduque seu público com conteúdos de qualidade, fortalecendo sua autoridade e construindo uma comunidade fiel e engajada ao redor da sua marca.</Description>
        </Card>
      </ContentCards>
    </ContainerCardsQuality>
  );
}
