import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import { WHITE_BACKGROUND_COLOR, BLACK_TEXT_COLOR } from '#/colors';

import {
  FadeOutHeaderText,
  FadeInLeftTopText,
  Underline,
} from '#/components/common/gsap';
import SkillContainer from '#/components/sections/skill/SkillContainer';
import SkillItem from '#/components/sections/skill/SkillItem';

const Container = styled.article`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${WHITE_BACKGROUND_COLOR};
  color: ${BLACK_TEXT_COLOR};
`;

const Skill = () => {
  const { setSkillOffsetTop }: any = useLayoutContext(); // eslint-disable-line 
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    console.log('setSkillOffsetTop:', containerOffsetTop); // eslint-disable-line
    setSkillOffsetTop(containerOffsetTop);
  }, [setSkillOffsetTop]);

  return (
    <Container ref={containerRef}>
      <FadeOutHeaderText delay={1}>Skill</FadeOutHeaderText>
      <FadeInLeftTopText delay={2.5}>
        <Underline delay={3.5}>Skill</Underline>
      </FadeInLeftTopText>
      <SkillContainer>
        <SkillItem delay={2}>막대기</SkillItem>
        <SkillItem delay={2.1}>막대기</SkillItem>
        <SkillItem delay={2.2}>막대기</SkillItem>
        <SkillItem delay={2.3}>막대기</SkillItem>
      </SkillContainer>
    </Container>
  );
};

export default Skill;
