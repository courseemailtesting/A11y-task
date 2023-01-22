import styled from 'styled-components';

export function Button({ onClick, children, type, color }) {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export const WhiteButton = styled('button')`
  background-color: white;
  color: black;
  margin-right: 16px;
  height: 30px;
  width: 150px;
`;

export const BlackButton = styled('button')`
  background-color: black;
  color: white;

  height: 30px;
  width: 150px;
  &:focus {
    outline: none !important;
    border: 1px solid white;
    box-shadow: 0 0 10px black;
  }
`;
