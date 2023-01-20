import ReactModal from 'react-modal';

import { Button } from '@components/inputs/Button';
import { Input } from '@components/inputs/Input';
import { useState } from 'react';

export function AddExpenseModal({
  addItem,
  isModalOpen,
  closeModal,
  currenclyEdditing,
}) {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel='Expense'
    >
      <h2>Expense</h2>
      <Input
        label='Name'
        onChange={(event) => setName(event.target.value)}
        required
      />
      <Input
        label='Prince'
        onChange={(event) => setAmount(event.target.value)}
        type='number'
        required
      />
      <div style={{ display: 'flex' }}>
        <Button onClick={closeModal}>Cancel</Button>

        <Button onClick={() => addItem({ name, amount: `${amount} $` })}>
          Add
        </Button>
      </div>
    </ReactModal>
  );
}
