import {
  HeaderContainer,
  Navigation,
  NavLink,
} from "./HeaderStyle";
import useWindowWidth from "../../hooks/ControlWinSize";
import MenuMobile from "../../components/menu/MenuMobile";
import { ButtonWhatsapp } from "../../Components/ButtonWhatsapp/ButtonWhatsapp";


export function Header() {
  const width = useWindowWidth(); 

  return (
    <>
      <HeaderContainer>
        <h1 style={{zIndex: 200}}>Header</h1>

        {width < 900 ? (
          <MenuMobile />
        ) : (
          <Navigation aria-label="Navegação principal">
            <ul>
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/servicos">Serviços</NavLink>
              </li>
              <li>
                <NavLink href="/sobre">Sobre nós</NavLink>
              </li>
              <li>
                <NavLink href="/projetos">Projetos</NavLink>
              </li>
              <li>
                <NavLink href="/contato">Contato</NavLink>
              </li>
              <ButtonWhatsapp
                Label={"Solicitar orçamento"}
                To={"https://store.steampowered.com/app/2172010/Until_Dawn/"}
                ThemeButton={"lightgreen"}
              />
            </ul>
          </Navigation>
        )}
      </HeaderContainer>
    </>
  );
}