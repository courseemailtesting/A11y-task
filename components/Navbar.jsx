import Link from 'next/link';
import styled from 'styled-components';
import { breakpoints } from '../constants/breakpoint';
import { CircleIcon } from './CircleIcon';

const NavLi = styled('li')`
  display: flex;
  justify-self: flex-end;
  padding: 0 10px;
  align-items: center;
`;

const NavbarContainer = styled('header')`
  margin-bottom: 20px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${() => breakpoints.phone}) {
    margin-bottom: 0px;
    flex-direction: row;
    padding: 0 120px;
  }

  justify-content: space-between;
  align-items: center;

  list-style-type: none;
  a {
    text-decoration: none;
    color: black;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
  }
`;

const Nav = styled('nav')`
  height: 100%;
  display: flex;
  justify-items: flex-end;
`;

const StyledUl = styled('ul')`
  display: flex;
  margin: 0;
`;

export function Navbar() {
  return (
    <NavbarContainer>
      <Link href='/' tabIndex={0}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
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
      </Link>
      <Nav>
        <StyledUl>
          <NavLi>
            <Link href='/'>Insurance</Link>
          </NavLi>
          <NavLi>
            <Link href='/empty?header=About us'>About us</Link>
          </NavLi>
          <NavLi>
            <Link href='/claim-report/step-1'>Claim report</Link>
          </NavLi>
          <NavLi>
            <Link href='/empty?header=Contact'>Contact</Link>
          </NavLi>
        </StyledUl>
      </Nav>
    </NavbarContainer>
  );
}
