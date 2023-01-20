import { PenIcon } from '@components/icons/PenIcon';
import { TrashIcon } from '@components/icons/TrashIcon';
import styled, { createGlobalStyle } from 'styled-components';

const EnhancedIcon = styled('button')`
  height: 40px;
  width: 40px;
  background-color: #ccc;
  border-radius: 50%;

  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemRowContainer = styled('div')`
  display: grid;
  grid-template-columns: 70px 1fr 60px 40px;
  align-items: center;
`;

export function ItemRow({ id, amount, name, removeItem, openEditModal }) {
  return (
    <ItemRowContainer role='listitem'>
      <b>{amount}</b> <span>{name}</span>
      <EnhancedIcon
        tabIndex={1}
        style={{ marginRight: '20px' }}
        onClick={() => {
          removeItem(id);
        }}
      >
        <TrashIcon />
      </EnhancedIcon>
      <EnhancedIcon tabIndex={1} onClick={() => openEditModal(id)}>
        <PenIcon />
      </EnhancedIcon>
    </ItemRowContainer>
  );
}
