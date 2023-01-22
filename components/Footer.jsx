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

  a {
    text-decoration: none;
    color: black;
    box-sizing: border-box;
    padding: 10px 5px 10px 0;
  }
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
            <Li>
              <Link href='/empty?header=Newsroom'>Newsroom</Link>
            </Li>

            <Li>
              <Link href='/empty?header=Careers'>Careers</Link>
            </Li>

            <Li>
              <Link href='/empty?header=Our shrefry'>Our shrefry</Link>
            </Li>

            <Li>
              <Link href='/empty?header=Customer Stories'>
                Customer Stories
              </Link>
            </Li>
          </Ul>
        </ListContainer>
        <ListContainer>
          <b>Producs</b>
          <Ul>
            <Li>
              <Link href='/empty?header=Vacation / Holiday'>
                Vacation / Holiday
              </Link>
            </Li>

            <Li>
              <Link href='/empty?header=Student / Scholar'>
                Student / Scholar
              </Link>
            </Li>

            <Li>
              <Link href='/empty?header=Mission'>Mission</Link>
            </Li>

            <Li>
              <Link href='/empty?header=Marine Captain / Crew'>
                Marine Captain / Crew
              </Link>
            </Li>

            <Li>
              <Link href='/empty?header=Employer / Business Traveler'>
                Employer / Business Traveler
              </Link>
            </Li>
          </Ul>
        </ListContainer>
        <ListContainer>
          <b>Members</b>
          <Ul>
            <Li>
              <Link href='/empty?header=Forms Library'>Forms Library</Link>
            </Li>

            <Li>
              <Link href='/empty?header=Find a Doctor'>Find a Doctor</Link>
            </Li>

            <Li>
              <Link href='/empty?header=Renew Policy'>Renew Policy</Link>
            </Li>

            <Li>
              <Link href='/empty?header=Claims Center'>Claims Center</Link>
            </Li>
          </Ul>
        </ListContainer>
      </FotterNavbar>
    </FooterContainer>
  );
}
