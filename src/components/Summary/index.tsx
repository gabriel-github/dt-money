import { Card, Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <Card>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>

        <h3>10000</h3>
      </Card>
      <Card>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <h3>10000</h3>
      </Card>
      <Card className="total">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Total" />
        </header>
        <h3>10000</h3>
      </Card>
    </Container>
  );
}
