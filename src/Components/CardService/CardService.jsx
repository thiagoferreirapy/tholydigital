import {
  ServiceContent,
  Title,
  Text,
} from "./CardServiceStyled";

export function CardService({TitleService}) {
  return (
    <ServiceContent>
      <Title>{TitleService}</Title>
    </ServiceContent>
  );
}
