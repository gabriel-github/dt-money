import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useToastNotification } from "../../hooks/ToastNotificationContext";
import { useTransactions } from "../../hooks/TransactionsContext";
import { api } from "../../services/api";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

export function ModalTransaction() {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const { isOpenNewTransaction, handleCloseNewTransaction, addNewTransaction } =
    useTransactions();

  const { showToastNotification } = useToastNotification();

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await addNewTransaction({
      title,
      amount,
      type,
      category,
    });

    showToastNotification({
      type: "success",
      message: "transação realizada com sucesso",
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
    handleCloseNewTransaction();
  }

  return (
    <Modal
      isOpen={isOpenNewTransaction}
      onRequestClose={handleCloseNewTransaction}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={handleCloseNewTransaction}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
