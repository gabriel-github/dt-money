import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ModalTransaction } from "./components/ModalTransaction";
import { useToastNotification } from "./hooks/ToastNotificationContext";
import { TransactionsProvider } from "./hooks/TransactionsContext";
import { GlobalStyle } from "./styles/global";
import { ToastNotification } from "./utils/ToastNotification";

function App() {
  Modal.setAppElement("#root");
  const { notification } = useToastNotification();

  return (
    <TransactionsProvider>
      <ToastNotification notification={notification} />
      <Header />
      <Dashboard />
      <GlobalStyle />
      <ModalTransaction />
    </TransactionsProvider>
  );
}

export default App;
