import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';

function IncomeExpenseGraph({ transactions }) {
  const processData = () => {
    const dataMap = new Map();
    
    transactions.forEach(transaction => {
      const date = transaction.date;
      if (!dataMap.has(date)) {
        dataMap.set(date, { date, income: 0, expenses: 0 });
      }
      
      const data = dataMap.get(date);
      if (transaction.type === 'income') {
        data.income += transaction.amount;
      } else {
        data.expenses += transaction.amount;
      }
    });

    return Array.from(dataMap.values())
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const data = processData();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Income vs Expenses</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              tickFormatter={(date) => format(parseISO(date), 'MMM d')}
            />
            <YAxis />
            <Tooltip 
              labelFormatter={(date) => format(parseISO(date), 'MMM d, yyyy')}
              formatter={(value) => [`$${value}`, '']}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="income" 
              stroke="#4CAF50" 
              name="Income"
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="expenses" 
              stroke="#E53935" 
              name="Expenses"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default IncomeExpenseGraph;