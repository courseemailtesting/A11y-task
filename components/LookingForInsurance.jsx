import styled from 'styled-components';
import { breakpoints } from '../constants/breakpoint';

const MainContainer = styled('div')`
  height: 150px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${() => breakpoints.phone}) {
    padding: 40px 120px;
    flex-direction: row;
  }

  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

const ButtonsContainer = styled('div')`
  display: flex;
  margin: 20px;
`;

const Button = styled('button')`
  height: 38px;
  width: 120px;
  @media screen and (min-width: ${() => breakpoints.phone}) {
    height: 38px;
    width: 160px;
  }

  border-width: 1px;
  border-radius: 3px;
`;

const LeftButton = styled(Button)`
  background-color: white;
  color: black;
  margin-right: 16px;
`;

const RightButton = styled(Button)`
  background-color: black;
  color: white;
`;

export function LookingForInsurance() {
  return (
    <MainContainer>
      <TextContainer>
        <h2 style={{ marginBottom: '4px' }}>Are you looking for insurance?</h2>
        <span>Contact us to order now</span>
      </TextContainer>
      <ButtonsContainer>
        <LeftButton>Call us</LeftButton>
        <RightButton>Send a Message</RightButton>
      </ButtonsContainer>
    </MainContainer>
  );
}
