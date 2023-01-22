import ReactModal from 'react-modal';

import { BlackButton, Button, WhiteButton } from '@components/inputs/Button';
import { Input } from '@components/inputs/Input';
import { useEffect, useState } from 'react';

export function AddExpenseModal({
  addItem,
  editItem,
  isModalOpen,
  closeModal,
  currentlyEditing,
}) {
  const [name, setName] = useState(currentlyEditing?.name ?? '');
  const [amount, setAmount] = useState(currentlyEditing?.amount ?? '');

  useEffect(() => {
    setName(currentlyEditing?.name);
    setAmount(currentlyEditing?.amount.replace(/[^0-9,.]/g, ''));
  }, [currentlyEditing]);

  return (
    <ReactModal
      style={{
        content: {
          padding: '20px',
          margin: '20vh 10vw',
          fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
        },
      }}
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel='Expense'
      ariaHideApp={false}
    >
      <h2>Expense</h2>
      <Input
        label='Name'
        onChange={(event) => setName(event.target.value)}
        value={name}
        required
      />
      <Input
        label='Price'
        onChange={(event) => setAmount(event.target.value)}
        type='number'
        value={amount}
        required
        aria-describedby='currency-info'
      />
      <span style={{ marginTop: '-10px' }} id='currency-info'>
        (value should be provided in US dollars)
      </span>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <WhiteButton onClick={closeModal}>Cancel</WhiteButton>

        {currentlyEditing ? (
          <BlackButton
            onClick={() =>
              editItem(currentlyEditing?.id, {
                name,
                amount: `${amount} $`,
              })
            }
          >
            Edit
          </BlackButton>
        ) : (
          <BlackButton onClick={() => addItem({ name, amount: `${amount} $` })}>
            Add
          </BlackButton>
        )}
      </div>
    </ReactModal>
  );
}
