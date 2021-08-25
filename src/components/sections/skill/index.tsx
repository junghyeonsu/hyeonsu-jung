import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import {
  WHITE_BACKGROUND_COLOR,
  BLACK_TEXT_COLOR,
  UNDER_LINE_COLOR,
} from '#/colors';

import {
  FadeOutHeaderText,
  FadeInContent,
  Underline,
} from '#/components/common/gsap';
import SkillContainer from '#/components/sections/skill/SkillContainer';
import SkillItem from '#/components/sections/skill/SkillItem';
import SkillTitle from '#/components/sections/skill/SkillTitle';

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
    setSkillOffsetTop(containerOffsetTop);
  }, [setSkillOffsetTop]);

  return (
    <Container ref={containerRef}>
      <FadeOutHeaderText delay={1}>Skill</FadeOutHeaderText>
      <FadeInContent delay={2.5}>
        <SkillTitle>
          <Underline color={UNDER_LINE_COLOR} delay={3.5}>
            Skill
          </Underline>
        </SkillTitle>
      </FadeInContent>
      <SkillContainer>
        <SkillItem exp={90} delay={2} skill="HTML / CSS" />
        <SkillItem exp={80} delay={2.1} skill="JAVASCRIPT" />
        <SkillItem exp={70} delay={2.2} skill="TYPESCRIPT" />
        <SkillItem exp={60} delay={2.3} skill="REACT.JS" />
        <SkillItem exp={50} delay={2.3} skill="NEXT.JS" />
        <SkillItem exp={40} delay={2.3} skill="GIT / GITHUB" />
      </SkillContainer>
    </Container>
  );
};

export default Skill;
