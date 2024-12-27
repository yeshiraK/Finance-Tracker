import { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import FinancialOverview from './components/FinancialOverview';
import FinancialChart from './components/charts/FinancialChart';
import CategoryPieChart from './components/charts/CategoryPieChart';
import { colors } from './utils/colors';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen" style={{ background: colors.background.primary }}>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-12" style={{ color: colors.text.primary }}>
          Freelancer Financial Tracker
        </h1>
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="xl:col-span-5 space-y-8">
            <TransactionForm onSubmit={addTransaction} />
            <TransactionList 
              transactions={transactions} 
              onDelete={deleteTransaction}
            />
          </div>
          
          {/* Right Column */}
          <div className="xl:col-span-7 space-y-8">
            <FinancialOverview transactions={transactions} />
            <FinancialChart transactions={transactions} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CategoryPieChart transactions={transactions} type="expense" />
              <CategoryPieChart transactions={transactions} type="income" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;