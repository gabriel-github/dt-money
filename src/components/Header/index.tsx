import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  openNewTransaction: () => void;
}

export function Header({ openNewTransaction }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo" />

        <button onClick={openNewTransaction}>Nova transação</button>
      </Content>
    </Container>
  );
}
