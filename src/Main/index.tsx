import { Header } from '../components/Header';
import {
  CategoriesContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer
} from './styles';

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer />

        <MenuContainer />
      </Container>
      <Footer>
        <FooterContainer />
      </Footer>
    </>
  );
}
