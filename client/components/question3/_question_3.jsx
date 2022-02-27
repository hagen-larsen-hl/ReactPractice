import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../../utils/api_context';
import { Transaction } from './transaction';

export const Question3 = () => {
  const api = useContext(ApiContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(async () => {
    let { transactions } = await api.get('/transactions');
    transactions = setTransactions(transactions);
  }, []);

  return (
    <div>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};
