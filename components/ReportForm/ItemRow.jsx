import { PenIcon } from '@components/icons/PenIcon';
import { TrashIcon } from '@components/icons/TrashIcon';
import { breakpoints } from 'constants/breakpoint';
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
  grid-template-columns: 70px 1fr;
  grid-template-rows: 1fr 1fr;
  margin-bottom: 30px;

  @media screen and (min-width: ${() => breakpoints.phone}) {
    grid-template-columns: 70px 1fr 60px 40px;
    grid-template-rows: 1fr;
  }
  align-items: center;
`;

export function ItemRow({ id, amount, name, removeItem, openEditModal }) {
  return (
    <ItemRowContainer role='listitem'>
      <b>{amount}</b> <span>{name}</span>
      <EnhancedIcon
        type='button'
        tabIndex={0}
        style={{ marginRight: '20px' }}
        onClick={() => {
          removeItem(id);
        }}
      >
        <TrashIcon />
      </EnhancedIcon>
      <EnhancedIcon
        type='button'
        tabIndex={0}
        onClick={() => openEditModal({ id, amount, name })}
      >
        <PenIcon />
      </EnhancedIcon>
    </ItemRowContainer>
  );
}
