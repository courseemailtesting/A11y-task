import styled from 'styled-components';

const InputContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export function Input(props) {
  const { label, describedby, ...passedDownProps } = props;
  return (
    <InputContainer>
      <label for={props.id}>{props.label}</label>
      <input
        describedby={props.describedby ? `describes-${props.id}` : undefined}
        {...passedDownProps}
      />
      {props.describedby && (
        <span id={`describes-${props.id}`}>{props.describedby}</span>
      )}
    </InputContainer>
  );
}
