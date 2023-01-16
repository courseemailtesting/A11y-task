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

const Picture = styled('div')`
  aspect-ratio: 1;
  border: 1px solid black;
  margin-bottom: 1rem;
`;

const descriptions = [
  'Description is 1',
  'Description is 2',
  'Description is 3',
  'Description is 4',
];

const TileContainer = styled('div')`
  display: flex;
`;

function Tile({ description }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        margin: '1rem',
      }}
    >
      <Picture />
      {description}
    </div>
  );
}

export function PicturesHorizontal() {
  return (
    <PicturesHorizontalContainer>
      <Header>Explore our travel topics</Header>
      <TileContainer>
        {descriptions.map((description) => (
          <Tile description={description} />
        ))}
      </TileContainer>
    </PicturesHorizontalContainer>
  );
}
