import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';
import { colors } from '../../utils/colors';
import { processTransactionData } from '../../utils/chartHelpers';
import Title from '../common/Title';

function FinancialChart({ transactions }) {
  const data = processTransactionData(transactions);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md" style={{ background: colors.background.secondary }}>
      <Title>Financial Trends</Title>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.accent.income} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={colors.accent.income} stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.accent.expense} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={colors.accent.expense} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="date" 
              tickFormatter={(date) => format(parseISO(date), 'MMM d')}
              stroke={colors.text.secondary}
            />
            <YAxis stroke={colors.text.secondary} />
            <Tooltip 
              labelFormatter={(date) => format(parseISO(date), 'MMM d, yyyy')}
              formatter={(value) => [`$${value}`, '']}
              contentStyle={{ background: colors.background.primary }}
            />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="income" 
              stroke={colors.accent.income}
              fillOpacity={1}
              fill="url(#incomeGradient)"
              name="Income"
            />
            <Area 
              type="monotone" 
              dataKey="expenses" 
              stroke={colors.accent.expense}
              fillOpacity={1}
              fill="url(#expenseGradient)"
              name="Expenses"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default FinancialChart;