import { AddExpenseModal } from '@components/inputs/AddExpenseModal';
import { Button } from '@components/inputs/Button';
import FormWrapper from '@components/inputs/FormWrapper';
import { ItemRow } from '@components/ReportForm/ItemRow';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

const SectionContainer = styled('section')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const itemList = [
  {
    id: 1,
    amount: '120 $',
    name: 'very very very expesive item',
  },
  {
    id: 2,
    amount: '50 $',
    name: ' very expesive item',
  },
  {
    id: 3,
    amount: '80 $',
    name: ' expesive item',
  },
  {
    id: 4,
    amount: '15 $',
    name: 'this item is relativly cheap',
  },
];

export function Step3() {
  const [isModalOpen, setModalOpen] = useState(false);
  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }
  const [currenclyEdditing, setCurrenclyEdditing] = useState(false);
  const [list, setList] = useState(itemList);
  const addItem = (item) => {
    setList((list) => [...list, { ...item, id: new Date().toISOString() }]);
    closeModal();
  };

  const removeItem = (idToRemove) => {
    setList((list) => list.filter(({ id }) => id !== idToRemove));
  };

  const openEditModal = (editId) => {
    setCurrenclyEdditing(editId);
  };

  const editItem = (editId, newItem) => {
    const item = list.find(({ id }) => editId === id);
    item.name = newItem.name;
    item.amount = newItem.amount;
  };

  return (
    <>
      <FormWrapper>
        <SectionContainer role='list'>
          {list.map(({ id, amount, name }) => (
            <ItemRow
              key={id}
              amount={amount}
              name={name}
              removeItem={removeItem}
              openEditModal={openEditModal}
            />
          ))}
        </SectionContainer>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type='button' onClick={openModal}>
            Add anohter expense
          </Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link href={'/claim-report/step-2'}>
            <Button type='button'>Return</Button>
          </Link>
        </div>
      </FormWrapper>
      <AddExpenseModal
        addItem={addItem}
        editItem={editItem}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        currenclyEdditing={currenclyEdditing}
      />
    </>
  );
}
