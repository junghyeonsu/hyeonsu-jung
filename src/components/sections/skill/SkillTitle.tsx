import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';
import { BOLD_TEXT } from '#/constants';

interface TextProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
}

const TextContainer = styled.div`
  position: absolute;
  top: 8%;
  left: 5%;
  font-family: ${BOLD_TEXT};
  font-size: 3.4vw;
  z-index: 5;

  @media ${props => props.theme.mobile} {
    top: 3%;
    font-size: 8vw;
  }
`;

const SkillTitle = ({ children }: TextProps) => {
  return <TextContainer>{children}</TextContainer>;
};

export default SkillTitle;
