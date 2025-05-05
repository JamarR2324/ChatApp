import React, { useState, useEffect } from 'react';

function App() {
  const [transactions, setTransactions] = useState(() => {
    return JSON.parse(localStorage.getItem('transactions')) || [];
  });
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = () => {
    setTransactions([...transactions, { text, amount: parseFloat(amount) }]);
    setText('');
    setAmount('');
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Expense" />
      <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" type="number" />
      <button onClick={addTransaction}>Add</button>
      <ul>
        {transactions.map((t, i) => (
          <li key={i}>{t.text}: ${t.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
