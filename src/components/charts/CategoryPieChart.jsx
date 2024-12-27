import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { colors } from '../../utils/colors';
import { calculateCategoryTotals } from '../../utils/chartHelpers';
import Title from '../common/Title';

function CategoryPieChart({ transactions, type = 'expense' }) {
  const categoryTotals = calculateCategoryTotals(transactions)[type];
  const data = Object.entries(categoryTotals).map(([name, value]) => ({ name, value }));
  
  const COLORS = [
    colors.accent.neutral,
    colors.accent.income,
    '#93c5fd',
    '#c084fc',
    '#f472b6',
    '#fb923c'
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md" style={{ background: colors.background.secondary }}>
      <Title>{type === 'income' ? 'Income' : 'Expense'} by Category</Title>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, value }) => `${name}: $${value}`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `$${value}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CategoryPieChart;