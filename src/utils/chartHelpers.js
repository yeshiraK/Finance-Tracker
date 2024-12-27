export const processTransactionData = (transactions) => {
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

export const calculateCategoryTotals = (transactions) => {
  return transactions.reduce((acc, transaction) => {
    const { category, amount, type } = transaction;
    if (!acc[type]) {
      acc[type] = {};
    }
    acc[type][category] = (acc[type][category] || 0) + amount;
    return acc;
  }, { income: {}, expense: {} });
};