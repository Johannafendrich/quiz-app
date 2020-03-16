import React from 'react';
import quizLogo from './quizLogo.png';
import styled from '@emotion/styled';

const Img = styled.img`
  height: 70px;
  margin-left: 20px;
`;

function Logo(props) {
  return <Img src={quizLogo} alt="logo" {...props} />;
}
export default Logo;
