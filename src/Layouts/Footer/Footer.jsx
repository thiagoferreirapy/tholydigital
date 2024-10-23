
import { ButtonWhatsapp } from "../../components/ButtonWhatsapp/Button";
import { FooterContainer,ContentFooter, BoxInofrmatioFooter,ContentTerms, Title, TitleBox, SubTitle, Text } from "./FooterStyle";

export function Footer() {
    return (
      <FooterContainer>
        <Title>Vamos <span>mudar o seu futuro</span> no digital?</Title>
        <ContentFooter>
          <BoxInofrmatioFooter>
            <SubTitle>
            THOLY <span>DIGITAL</span>
            </SubTitle>
            <Text>Seu site na palma da sua mão: <br />rápido, moderno e seguro!</Text>
            <ButtonWhatsapp
                Label={"Solicitar orçamento"}
                To={"https://store.steampowered.com/app/2172010/Until_Dawn/"}
                ThemeButton={"lightgreen"}
              />
          </BoxInofrmatioFooter>
          <BoxInofrmatioFooter>
            <TitleBox>
            Intitucional
            </TitleBox>
            <Text>Home</Text>
            <Text>Serviços</Text>
            <Text>Sobre nós</Text>
            <Text>Projetos</Text>
          </BoxInofrmatioFooter>
          <BoxInofrmatioFooter>
            <TitleBox>
            Endereço/Contatos
            </TitleBox>
            <Text>Atendemos o Brasil inteiro</Text>
            <Text>(61) 99416-2084</Text>
            <Text>(61) 99416-2084</Text>
            <Text>contato@tholy.com.br</Text>
          </BoxInofrmatioFooter>
          <BoxInofrmatioFooter>
            <TitleBox>
            Nossas redes sociais
            </TitleBox>
            <Text>/tholydigital</Text>
            <Text>@tholydigital</Text>
          </BoxInofrmatioFooter>
        </ContentFooter>
        <ContentTerms>
          <p> © 2024 Criado por Tholy Technology. Todos os direitos reservados  </p>
        </ContentTerms>
      </FooterContainer>
    );
  }
  