import { useState } from 'react';
import { colors } from '../utils/colors';

const categories = ['Business', 'Personal', 'Travel', 'Equipment', 'Software', 'Other'];

function TransactionForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    type: 'income',
    amount: '',
    description: '',
    category: 'Business',
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.amount || !formData.description) return;
    
    onSubmit({
      ...formData,
      amount: Number(formData.amount)
    });
    
    setFormData({
      type: 'income',
      amount: '',
      description: '',
      category: 'Business',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const inputStyle = {
    background: colors.background.secondary,
    color: colors.text.primary,
    borderColor: colors.background.accent,
  };

  return (
    <div className="rounded-xl p-6" style={{ background: colors.background.card }}>
      <h2 className="text-2xl font-semibold mb-6" style={{ color: colors.text.primary }}>
        Add Transaction
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-6">
          <label className="flex items-center">
            <input
              type="radio"
              name="type"
              value="income"
              checked={formData.type === 'income'}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="mr-2"
            />
            <span style={{ color: colors.text.primary }}>Income</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="type"
              value="expense"
              checked={formData.type === 'expense'}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="mr-2"
            />
            <span style={{ color: colors.text.primary }}>Expense</span>
          </label>
        </div>

        <div>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            placeholder="Amount"
            className="w-full p-3 rounded-lg focus:ring-2 focus:ring-opacity-50"
            style={inputStyle}
          />
        </div>

        <div>
          <input
            type="text"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Description"
            className="w-full p-3 rounded-lg focus:ring-2 focus:ring-opacity-50"
            style={inputStyle}
          />
        </div>

        <div>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full p-3 rounded-lg focus:ring-2 focus:ring-opacity-50"
            style={inputStyle}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full p-3 rounded-lg focus:ring-2 focus:ring-opacity-50"
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 rounded-lg transition-colors duration-200"
          style={{ 
            background: colors.background.accent,
            color: colors.text.primary,
          }}
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;