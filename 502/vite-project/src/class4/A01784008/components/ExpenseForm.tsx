import { useState } from 'react';
import InputField from '../../../class2/A01784008/components/InputField';
import Button from '../../../class2/A01784008/components/Button';

const ExpenseForm = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    console.log('Expense:', { amount, category, description });
  };

  return (
    <div className="form-section">
      <h2>Expense Form</h2>
      <InputField type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <InputField type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="p-2 border rounded w-full" />
      <Button label="Submit" type="submit" onClick={handleSubmit} />
    </div>
  );
};

export default ExpenseForm;
