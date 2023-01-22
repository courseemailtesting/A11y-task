import styled from 'styled-components';

const StyledRadioInput = styled('input')`
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.05em solid currentColor;
  border-radius: 50%;
`;
export function RadioButtons({ defaultValue, setPurposeOfTravel }) {
  const onRadioChange = (e) => setPurposeOfTravel(e.target.value);
  return (
    <fieldset style={{ border: 'none', padding: '0', margin: '15px 0' }}>
      <legend>
        <b>Purpose of travel</b>
      </legend>

      <div>
        <StyledRadioInput
          type='radio'
          id='tourism'
          name='purpose-of-travel'
          value='tourism'
          defaultChecked={defaultValue === 'tourism'}
          onChange={onRadioChange}
        />
        <label htmlFor='tourism' style={{ padding: '5px' }}>
          tourism
        </label>
      </div>

      <div>
        <StyledRadioInput
          type='radio'
          id='study-mental-work'
          name='purpose-of-travel'
          defaultChecked={defaultValue === 'study / mental work'}
          value='study / mental work'
          onChange={onRadioChange}
        />
        <label htmlFor='study-mental-work' style={{ padding: '5px' }}>
          study / mental work
        </label>
      </div>

      <div>
        <StyledRadioInput
          type='radio'
          id='physical-work'
          name='purpose-of-travel'
          defaultChecked={defaultValue === 'physical work'}
          value='physical work'
          onChange={onRadioChange}
        />
        <label htmlFor='physical-work' style={{ padding: '5px' }}>
          physical work
        </label>
      </div>
      <div>
        <StyledRadioInput
          type='radio'
          id='high-risk-sport'
          name='purpose-of-travel'
          defaultChecked={defaultValue === 'high-risk sport'}
          value='high-risk sport'
          onChange={onRadioChange}
        />
        <label htmlFor='high-risk-sport' style={{ padding: '5px' }}>
          high-risk sport
        </label>
      </div>
    </fieldset>
  );
}
