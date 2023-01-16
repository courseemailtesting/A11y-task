import Link from 'next/link';
import styled from 'styled-components';
import { breakpoints } from '../constants/breakpoint';
import { CircleIcon } from './CircleIcon';

const FooterContainer = styled('footer')`
  padding: 60px 30px;

  background-color: #eee;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${() => breakpoints.phone}) {
    padding: 60px 120px;
    flex-direction: row;
  }

  align-content: center;
  justify-content: space-between;
`;

const FotterNavbar = styled('nav')`
  display: flex;
`;

const Ul = styled('ul')`
  list-style-type: none;
  padding: 0;
`;

export function Footer() {
  return (
    <FooterContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-start',
        }}
      >
        <span
          style={{
            marginRight: '10px',
          }}
        >
          The Insurer
        </span>
        <CircleIcon
          style={{
            marginTop: '5px',
          }}
        />
      </div>
      <FotterNavbar>
        <div style={{ margin: '0 40px' }}>
          <b>About us</b>
          <Ul>
            <Link href='/'>
              <li>Newsroom</li>
            </Link>
            <Link href='/'>
              <li>Careers</li>
            </Link>
            <Link href='/'>
              <li>Our shrefry</li>
            </Link>
            <Link href='/'>
              <li>Customer Stories</li>
            </Link>
          </Ul>
        </div>
        <div style={{ margin: '0 40px' }}>
          <b>Producs</b>
          <Ul>
            <Link href='/'>
              <li>Vacation / Holiday</li>
            </Link>
            <Link href='/'>
              <li>Student / Scholar</li>
            </Link>
            <Link href='/'>
              <li>Mission</li>
            </Link>
            <Link href='/'>
              <li>Marine Captain / Crew</li>
            </Link>
            <Link href='/'>
              <li>Employer / Business Traveler</li>
            </Link>
          </Ul>
        </div>
        <div>
          <b>Members</b>
          <Ul>
            <Link href='/'>
              <li>Forms Library</li>
            </Link>
            <Link href='/'>
              <li>Find a Doctor</li>
            </Link>
            <Link href='/'>
              <li>Renew Policy</li>
            </Link>
            <Link href='/'>
              <li>Claims Center</li>
            </Link>
          </Ul>
        </div>
      </FotterNavbar>
    </FooterContainer>
  );
}
