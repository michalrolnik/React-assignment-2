// src/App.js
import React, { useState } from 'react';
import Clock from './components/Clock';
import Expenses from './components/Expenses';
import ExpenseForm from './components/ExpenseForm';
import './App.css';

function App() {
    const [expenses, setExpenses] = useState([
        { title: 'mazda', amount: 30000, date: new Date(2020, 2, 28) },
        { title: 'ford', amount: 20000, date: new Date(2023, 3, 28) },
        { title: 'nissan', amount: 15000, date: new Date(2024, 4, 28) },
        { title: 'honda', amount: 40000, date: new Date(2025, 5, 28) }
    ]);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <Clock />
            <ExpenseForm onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
