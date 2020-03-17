import React from 'react';
import quizLogo from './quizLogo.png';
import styled from '@emotion/styled';

const Img = styled.img`
  height: 200px;
  margin-left: 20px;
`;

function LogoBig(props) {
  return <Img src={quizLogo} alt="logo" {...props} />;
}
export default LogoBig;
