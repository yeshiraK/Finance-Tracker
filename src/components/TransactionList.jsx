import { colors } from '../utils/colors';

function TransactionList({ transactions, onDelete }) {
  return (
    <div className="rounded-xl p-6" style={{ background: colors.background.card }}>
      <h2 className="text-2xl font-semibold mb-6" style={{ color: colors.text.primary }}>
        Recent Transactions
      </h2>
      <div className="space-y-4">
        {transactions.map(transaction => (
          <div
            key={transaction.id}
            className="p-4 rounded-lg flex justify-between items-center"
            style={{ background: colors.background.secondary }}
          >
            <div>
              <p className="font-semibold" style={{ color: colors.text.primary }}>
                {transaction.description}
              </p>
              <p style={{ color: colors.text.muted }}>
                {transaction.category} • {transaction.date}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span style={{ 
                color: transaction.type === 'income' 
                  ? colors.accent.income 
                  : colors.accent.expense,
                fontWeight: 'bold'
              }}>
                {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
              </span>
              <button
                onClick={() => onDelete(transaction.id)}
                className="text-gray-500 hover:text-red-500 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        ))}
        {transactions.length === 0 && (
          <p className="text-center" style={{ color: colors.text.muted }}>
            No transactions yet
          </p>
        )}
      </div>
    </div>
  );
}

export default TransactionList;