import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import {
  BLACK_BACKGROUND_COLOR,
  WHITE_TEXT_COLOR,
  UNDER_LINE_COLOR,
} from '#/colors';
import { COMMON_BODY_WIDTH } from '#/constants';

import {
  FadeInHeaderText,
  FadeInBodyText,
  Underline,
} from '#/components/common/gsap';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${BLACK_BACKGROUND_COLOR};
  color: ${WHITE_TEXT_COLOR};
`;

const Body = styled.div`
  width: ${COMMON_BODY_WIDTH}vw;
`;

const Introduction = () => {
  const { setIntroductionOffsetTop }: any = useLayoutContext(); // eslint-disable-line 
  const containerRef = useRef<any>(null); // eslint-disable-line

  useEffect(() => {
    const containerOffsetTop = containerRef.current.offsetTop;
    console.log('setIntroductionOffsetTop:', containerOffsetTop); // eslint-disable-line
    setIntroductionOffsetTop(containerOffsetTop);
  }, [setIntroductionOffsetTop]);

  return (
    <Container ref={containerRef}>
      <Body>
        <FadeInHeaderText delay={1}>
          <Underline color={UNDER_LINE_COLOR} delay={4}>
            정현수
          </Underline>
          <span style={{ fontSize: '4vw' }}>입니다</span>
        </FadeInHeaderText>
        <FadeInBodyText delay={2}>
          많은 사람들에게 영향을 주는 서비스를 만드는,
        </FadeInBodyText>
        <FadeInBodyText delay={2.4}>
          무언가를 예쁘게 꾸미고 디자인하는,
        </FadeInBodyText>
        <FadeInBodyText delay={2.8}>
          끊임없이 아이디어를 내고 기획을 잘하는
        </FadeInBodyText>
        <FadeInBodyText delay={3.2}>개발자를 꿈꾸고 있습니다.</FadeInBodyText>
      </Body>
    </Container>
  );
};

export default Introduction;
