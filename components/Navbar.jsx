import Link from 'next/link';
import styled from 'styled-components';
import { breakpoints } from '../constants/breakpoint';
import { CircleIcon } from './CircleIcon';

const NavLi = styled('li')`
  display: flex;
  justify-self: flex-end;
  padding: 0 10px;
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
`;

const Nav = styled('nav')`
  display: flex;
  justify-items: flex-end;
`;

export function Navbar() {
  return (
    <NavbarContainer>
      <Link href='/'>
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
        <NavLi>
          <Link href='/'>Insurance</Link>
        </NavLi>
        <NavLi>
          <Link href='/empty-page'>About us</Link>
        </NavLi>
        <NavLi>
          <Link href='/claim-report/step-1'>Claim report</Link>
        </NavLi>
        <NavLi>
          <Link href='/empty-page'>Contact</Link>
        </NavLi>
      </Nav>
    </NavbarContainer>
  );
}
