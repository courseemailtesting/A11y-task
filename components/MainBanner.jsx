import { useRouter } from 'next/router';
import styled from 'styled-components';

const MainBannerContainer = styled('div')`
  height: 500px;
  background-color: #eee;
  display: flex;
  flex-direction: column;

  align-content: center;
  align-items: center;
  justify-content: center;
`;

const BannerCenterContainer = styled('div')`
  display: flex;
  flex-direction: column;

  align-content: center;
  align-items: center;
  text-align: center;
  width: 400px;
`;

const Button = styled('button')`
  width: 150px;
  height: 36px;

  background-color: black;
  color: white;
  &:focus {
    outline: none !important;
    border: 1px solid white;
    box-shadow: 0 0 10px black;
  }
`;

const Span = styled('span')`
  margin-bottom: 15px;
`;

export function MainBanner() {
  const router = useRouter();
  return (
    <MainBannerContainer>
      <BannerCenterContainer>
        <h1>{'Travel Insurance'}</h1>
        <Span>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        </Span>
        <Button onClick={() => router.push('/empty?header=Order now')}>
          Order now
        </Button>
      </BannerCenterContainer>
    </MainBannerContainer>
  );
}
