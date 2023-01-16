import styled from 'styled-components';
import { breakpoints } from '../constants/breakpoint';

const MainBannerContainer = styled('div')`
  height: 350px;
  display: flex;
  padding: 30px 30px;
  @media screen and (min-width: ${() => breakpoints.phone}) {
    padding: 30px 120px;
  }

  align-content: center;
  align-items: center;
  justify-content: space-between;
`;

const ImageReplacement = styled('div')`
  width: 40%;
  height: 60%;
  border: 1px solid black;
`;

const SecondHeding = styled('h2')``;

const ContentContainer = styled('div')`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const Span = styled('span')``;

export function SafeTravels() {
  return (
    <MainBannerContainer>
      <ContentContainer>
        <SecondHeding>Safe Travels</SecondHeding>
        <Span>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        </Span>
      </ContentContainer>
      <ImageReplacement />
    </MainBannerContainer>
  );
}
