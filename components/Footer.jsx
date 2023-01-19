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

const ListContainer = styled('div')`
  margin: 0 40px 0 0;
  &:nth-child(1) {
    margin-left: 0px;
    @media screen and (min-width: ${() => breakpoints.phone}) {
      margin-left: 40px;
    }
  }
`;

const Ul = styled('ul')`
  list-style-type: none;
  padding: 0;
`;

const Li = styled('li')`
  margin: 10px 0;
`;

const TextIconContainer = styled('div')`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  align-self: flex-start;
`;

export function Footer() {
  return (
    <FooterContainer>
      <TextIconContainer>
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
      </TextIconContainer>
      <FotterNavbar>
        <ListContainer>
          <b>About us</b>
          <Ul>
            <Link href='/'>
              <Li>Newsroom</Li>
            </Link>
            <Link href='/'>
              <Li>Careers</Li>
            </Link>
            <Link href='/'>
              <Li>Our shrefry</Li>
            </Link>
            <Link href='/'>
              <Li>Customer Stories</Li>
            </Link>
          </Ul>
        </ListContainer>
        <ListContainer>
          <b>Producs</b>
          <Ul>
            <Link href='/'>
              <Li>Vacation / Holiday</Li>
            </Link>
            <Link href='/'>
              <Li>Student / Scholar</Li>
            </Link>
            <Link href='/'>
              <Li>Mission</Li>
            </Link>
            <Link href='/'>
              <Li>Marine Captain / Crew</Li>
            </Link>
            <Link href='/'>
              <Li>Employer / Business Traveler</Li>
            </Link>
          </Ul>
        </ListContainer>
        <ListContainer>
          <b>Members</b>
          <Ul>
            <Link href='/'>
              <Li>Forms Library</Li>
            </Link>
            <Link href='/'>
              <Li>Find a Doctor</Li>
            </Link>
            <Link href='/'>
              <Li>Renew PoLicy</Li>
            </Link>
            <Link href='/'>
              <Li>Claims Center</Li>
            </Link>
          </Ul>
        </ListContainer>
      </FotterNavbar>
    </FooterContainer>
  );
}
