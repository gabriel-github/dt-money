import logoImg from "../../assets/logo.svg";
import { useTransactions } from "../../hooks/TransactionsContext";
import { Container, Content } from "./styles";

export function Header() {
  const { handleOpenNewTransaction } = useTransactions();

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo" />

        <button onClick={handleOpenNewTransaction}>Nova transação</button>
      </Content>
    </Container>
  );
}
