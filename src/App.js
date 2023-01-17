import Header from './component/Header';
import './App.css';
import Balance from './component/Balance';
import Expenses from './component/Expenses';
import ExpensesList from './component/ExpensesList';
import AddExpenses from './component/AddExpenses';
import { GlobalProvider } from './context/TransactionsState';

function App() {
  return (
   <GlobalProvider>
   <Header/>
   <div className="container">
    <Balance/>
    <Expenses/>
    <ExpensesList/>
    <AddExpenses/>
   </div>
   </GlobalProvider>

  );
}

export default App;
