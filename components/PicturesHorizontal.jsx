import styled from 'styled-components';
import { breakpoints } from '../constants/breakpoint';

const Header = styled('h2')`
  text-align: center;
`;

const PicturesHorizontalContainer = styled('div')`
  padding: 100px 30px;
  @media screen and (min-width: ${() => breakpoints.phone}) {
    padding: 100px 120px;
  }
`;

const Picture = styled('img')`
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid black;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const descriptions = [
  'Renting Vacation Homes',
  'Trends & Predictions',
  'Popular Travel Destinations for 2021',
  'Travel Gear for Safe Travels in 2021',
];

const TileContainer = styled('div')`
  display: grid;
  gap: 15px;

  grid-template-columns: 1fr 1fr;
  @media screen and (min-width: ${() => breakpoints.phone}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

function Tile({ description, index }) {
  return (
    <div>
      <Picture alt={description} aria-describedby={`description-${index}`} />
      <span id={`description-${index}`}>{description}</span>
    </div>
  );
}

export function PicturesHorizontal() {
  return (
    <PicturesHorizontalContainer>
      <Header>Explore our travel topics</Header>
      <TileContainer>
        {descriptions.map((description, index) => (
          <Tile key={description} description={description} index={index} />
        ))}
      </TileContainer>
    </PicturesHorizontalContainer>
  );
}
