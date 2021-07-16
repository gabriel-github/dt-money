import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface TransactionTypes {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactionsList, setTransactionsList] = useState<TransactionTypes[]>(
    []
  );

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactionsList(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactionsList.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className="deposit">{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
