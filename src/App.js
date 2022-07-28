import React, { useState, useEffect }  from "react";
import Form from "./components/Form";

import Header from "./components/Header";
import Resume from "./components/Resume";
import Global from './styles/global';

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactions, setTransactions] = useState(data ? JSON.parse(data) : []);
  const [total, setTotal] = useState(0);
  const [inCome, setInCome] = useState(0);
  const [saida, setSaida] = useState(0);

  useEffect(() => {
    const amountExpense = transactions.filter((item) => item.expense).map((transaction) => Number(transaction.amount));

    const amountIncome = transactions.filter((item) => !item.expense).map((transaction) => Number(transaction.amount));

    const totalExpense = amountExpense.reduce((acc, curr) => acc + curr, 0).toFixed(2);
    const totalIncome = amountIncome.reduce((acc, curr) => acc + curr, 0).toFixed(2);

    const total = Math.abs(totalExpense - totalIncome).toFixed(2);

    setInCome('R$ ' + totalIncome);
    setSaida('R$ ' + totalExpense);
    setTotal(`${Number(totalIncome) < Number(totalExpense) ? '-' : ''}R$ ${total}`);

  }, [transactions]);

  


  return (
    <>
      <Header />
      <Resume inCome={totalIncome} expense={totalExpense} total={total} />
      <Form />
      <Global />
    </>
  );
};

export default App;
