import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ModalTransaction } from "./components/ModalTransaction";
import { GlobalStyle } from "./styles/global";

import Modal from "react-modal";

function App() {
  const [isOpenNewTransaction, setIsOpenNewTransaction] = useState(false);

  function handleCloseNewTransaction() {
    setIsOpenNewTransaction(false);
  }

  function handleOpenNewTransaction() {
    setIsOpenNewTransaction(true);
  }

  Modal.setAppElement("#root");

  return (
    <>
      <Header openNewTransaction={handleOpenNewTransaction} />
      <Dashboard />
      <GlobalStyle />
      <ModalTransaction
        isOpen={isOpenNewTransaction}
        requestClose={handleCloseNewTransaction}
      />
    </>
  );
}

export default App;
