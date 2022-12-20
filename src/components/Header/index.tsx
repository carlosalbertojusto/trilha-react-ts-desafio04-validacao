import { Container, Wrapper, Row, MenuRight, Menu } from "./styles"
import logo from "../../assets/logo-dio.png"
const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Menu>
            <img src={logo} alt="Logo dio" />
          </Menu>
        </Row>
        <Row>
          <MenuRight>Home</MenuRight>
          <MenuRight>Catálogo</MenuRight>
          <MenuRight>Planos</MenuRight>
          <MenuRight>Para empresas</MenuRight>
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
