import styled from 'styled-components';
import { CircleIcon } from './CircleIcon';

const MainBannerContainer = styled('div')`
  height: 360px;
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
  width: 70%;
`;

export function QuoteBanner() {
  return (
    <MainBannerContainer>
      <BannerCenterContainer>
        <q style={{ marginBottom: '20px' }}>
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        </q>
        <CircleIcon />
        <span>Donald Duck, CEO of Disney</span>
      </BannerCenterContainer>
    </MainBannerContainer>
  );
}
