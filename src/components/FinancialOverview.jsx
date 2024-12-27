import { colors } from '../utils/colors';

function FinancialOverview({ transactions }) {
  const calculateTotals = () => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.amount;
        } else {
          acc.expenses += transaction.amount;
        }
        acc.balance = acc.income - acc.expenses;
        return acc;
      },
      { income: 0, expenses: 0, balance: 0 }
    );
  };

  const { income, expenses, balance } = calculateTotals();

  return (
    <div className="rounded-xl p-6" style={{ background: colors.background.card }}>
      <h2 className="text-2xl font-semibold mb-6" style={{ color: colors.text.primary }}>
        Financial Overview
      </h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center p-4 rounded-lg" style={{ background: colors.background.secondary }}>
          <p style={{ color: colors.text.muted }}>Income</p>
          <p className="text-2xl font-bold" style={{ color: colors.accent.income }}>
            ${income}
          </p>
        </div>
        <div className="text-center p-4 rounded-lg" style={{ background: colors.background.secondary }}>
          <p style={{ color: colors.text.muted }}>Expenses</p>
          <p className="text-2xl font-bold" style={{ color: colors.accent.expense }}>
            ${expenses}
          </p>
        </div>
        <div className="text-center p-4 rounded-lg" style={{ background: colors.background.secondary }}>
          <p style={{ color: colors.text.muted }}>Balance</p>
          <p className="text-2xl font-bold" style={{ color: balance >= 0 ? colors.accent.income : colors.accent.expense }}>
            ${balance}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FinancialOverview;