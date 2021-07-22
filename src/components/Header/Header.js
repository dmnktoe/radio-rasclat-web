import React from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/scale-subtle.css';

import { ReactComponent as Logo } from './../../assets/logo_rasclat.svg';

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  font-family: "Adieu";
`;

const NavHeader = styled.div`
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
`;

const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;

  svg {
    width: 50px;
  }
`;

const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;

const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;

  &:active,
  &:focus {
    text-align: left;
  }
`;

const NavRight = styled.div`
  width: 33.333%;
  text-align: right;

  svg {
    margin-right: 20px;
  }
`;

const NavLink = styled.a``;

function Header() {
  return (
    <Nav>
      <Container>
        <NavHeader>
          <NavLeft>
            <Logo />
          </NavLeft>

          <NavCenter>
            <Input type="text" placeholder="Search" />
          </NavCenter>

          <NavRight>
            <NavLink href="#">
              Broadcasts
            </NavLink>

            <NavLink href="#">
              Shows
            </NavLink>

            <NavLink href="#">
              Schedule
            </NavLink>

            <Tippy
              content={<span>Tooltip</span>}
              trigger="click"
              theme="light"
              allowHTML="true"
              animation="scale-subtle"
              interactive="true"
            >
              <button>My button</button>
            </Tippy>
          </NavRight>
        </NavHeader>
      </Container>
    </Nav>
  );
}

export default Header;
