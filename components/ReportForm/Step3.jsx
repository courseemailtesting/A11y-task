import { AddExpenseModal } from '@components/inputs/AddExpenseModal';
import { BlackButton, Button, WhiteButton } from '@components/inputs/Button';
import FormWrapper from '@components/inputs/FormWrapper';
import { ItemRow } from '@components/ReportForm/ItemRow';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useStageStore } from 'pages/_app';
import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }
  const [currentlyEditing, setCurrentlyEditing] = useState(null);
  const { thirdStage, setThirdStage } = useStageStore((state) => state);

  const { itemList } = thirdStage;
  const addItem = (item) => {
    setThirdStage({
      itemList: [...itemList, { ...item, id: new Date().toISOString() }],
    });
    closeModal();
  };

  const removeItem = (idToRemove) => {
    setThirdStage({
      itemList: thirdStage.itemList?.filter(({ id }) => id !== idToRemove),
    });
  };

  const openEditModal = (item) => {
    setModalOpen(true);
    setCurrentlyEditing(item);
  };

  const editItem = (editId, newItem) => {
    const item = itemList.find(({ id }) => editId === id);
    item.name = newItem.name;
    item.amount = newItem.amount;
    setCurrentlyEditing(null);
    closeModal();
  };

  return (
    <>
      <FormWrapper
        onSubmit={(e) => {
          e.preventDefault();
          if (e.target.length <= 3) {
            alert('no items added in expense report');
            return;
          }
          fetch('/submit').then(() => alert('form successfully commited'));
        }}
      >
        <SectionContainer role='list'>
          {itemList.map(({ id, amount, name }, index) => (
            <ItemRow
              key={id}
              index={index}
              id={id}
              amount={amount}
              name={name}
              removeItem={removeItem}
              openEditModal={openEditModal}
            />
          ))}
        </SectionContainer>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <WhiteButton type='button' onClick={openModal}>
            Add anohter expense
          </WhiteButton>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '30px 0',
          }}
        >
          <WhiteButton
            type='button'
            onClick={() => router.push('/claim-report/step-2')}
          >
            Return
          </WhiteButton>
          <BlackButton>Submit</BlackButton>
        </div>
      </FormWrapper>
      <AddExpenseModal
        addItem={addItem}
        editItem={editItem}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        currentlyEditing={currentlyEditing}
        setCurrentlyEditing={setCurrentlyEditing}
      />
    </>
  );
}
