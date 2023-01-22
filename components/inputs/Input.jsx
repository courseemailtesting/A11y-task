import styled from 'styled-components';

const InputContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const StyledInput = styled('input')`
  height: 30px;
  line-height: 25px;
  font-size: 18px;
`;

export function Input(props) {
  const { label, describedby, dollars, ...passedDownProps } = props;
  return (
    <InputContainer>
      <label
        htmlFor={props.id}
        style={{ fontWeight: '700', marginBottom: '8px' }}
      >
        {props.label}
      </label>
      <StyledInput
        describedby={props.describedby ? `describes-${props.id}` : undefined}
        {...passedDownProps}
      />
      {props.describedby && (
        <span id={`describes-${props.id}`}>{props.describedby}</span>
      )}
    </InputContainer>
  );
}
