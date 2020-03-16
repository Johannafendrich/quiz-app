import React from 'react';
import Logo from './Logo';
import Title from './Title';
import styled from '@emotion/styled';

const Header = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: white;
  position: absolute;
  top: 0;
`;

function AppHeader() {
  return (
    <Header>
      <Title>Cologne Quiz</Title>
      <Logo />
    </Header>
  );
}

export default AppHeader;
