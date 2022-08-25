import { Container, Anchor, Name } from './styles';

export function Footer() {
  return (
    <Container id="footer">
      <Anchor
        href="https://github.com/HallanCosta"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mantido por {' '}
        <Name>
          HállanCosta
        </Name>
      </Anchor>
    </Container>
  );
}