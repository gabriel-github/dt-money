import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsContext {
  isOpenNewTransaction: boolean;
  transactionsList: Transaction[];
  addNewTransaction: (newTransaction: TransactionInput) => Promise<void>;
  handleOpenNewTransaction: () => void;
  handleCloseNewTransaction: () => void;
}

interface TransactionProviderProps {
  children: ReactNode;
}

const TransactionContext = createContext({} as TransactionsContext);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [isOpenNewTransaction, setIsOpenNewTransaction] = useState(false);
  const [transactionsList, setTransactionsList] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactionsList(response.data.transactions));
  }, []);

  function handleCloseNewTransaction() {
    setIsOpenNewTransaction(false);
  }

  function handleOpenNewTransaction() {
    setIsOpenNewTransaction(true);
  }

  async function addNewTransaction(newTransaction: TransactionInput) {
    const response = await api.post("transactions", {
      ...newTransaction,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactionsList([...transactionsList, transaction]);
  }

  return (
    <TransactionContext.Provider
      value={{
        isOpenNewTransaction,
        handleOpenNewTransaction,
        handleCloseNewTransaction,
        transactionsList,
        addNewTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);
  return context;
}
