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
    grid-template-areas: 'image empty-space content-container';
    grid-template-columns: 1fr minmax(40px, 10%) minmax(0, 1fr);
    grid-template-rows: auto;
    padding: 30px 120px;
  }
`;

const ImageReplacement = styled('img')`
  grid-area: image;
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

const SecondHeding = styled('h2')``;

const ContentContainer = styled('div')`
  grid-area: content-container;
  display: flex;
  flex-direction: column;
`;

const Li = styled('li')`
  margin: 8px 0px;
`;

export function InsuranceSection() {
  return (
    <MainBannerContainer>
      <ImageReplacement alt='alt text' />
      <ContentContainer>
        <SecondHeding>Insurance for International Visitors</SecondHeding>
        <span>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        </span>
        <ul style={{ marginLeft: '-2.5rem' }}>
          <Li>List item 1</Li>
          <Li>List item 2</Li>
          <Li>List item 3</Li>
        </ul>
      </ContentContainer>
    </MainBannerContainer>
  );
}
