import styled from 'styled-components';
import { breakpoints } from '../constants/breakpoint';

const MainBannerContainer = styled('div')`
  min-height: 350px;

  display: grid;

  padding: 30px 30px;
  grid-template-rows: auto;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'image'
    'content-container';

  @media screen and (min-width: ${() => breakpoints.phone}) {
    grid-template-areas: 'content-container empty-space image';
    grid-template-columns: 1fr minmax(40px, 10%) minmax(0, 1fr);
    grid-template-rows: auto;
    padding: 30px 120px;
  }
`;

const ImageReplacement = styled('img')`
  grid-area: image;
  border: 1px solid black;
`;

const SecondHeding = styled('h2')``;

const ContentContainer = styled('div')`
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
      <ImageReplacement alt='Plane waiting on an brazilian airport to depart' />
    </MainBannerContainer>
  );
}
