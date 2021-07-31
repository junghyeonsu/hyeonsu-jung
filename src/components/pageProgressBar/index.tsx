import React, { useMemo } from 'react';
import styled from 'styled-components';

import { useLayoutContext } from '#/contexts/LayoutContext';
import { BLACK_UNACTIVE_TEXT_COLOR, WHITE_UNACTIVE_TEXT_COLOR } from '#/colors';
import {
  COMMON_TRANSITION,
  PROGRESS_BAR_HEIGHT,
  PROGRESS_BAR_TOP,
} from '#/constants';
import ProgressItem from '#/components/pageProgressBar/progressItem';

const Container = styled.div`
  position: fixed;
  width: 0.3vw;
  height: ${PROGRESS_BAR_HEIGHT}vh;
  right: 10px;
  top: ${PROGRESS_BAR_TOP}vh;
  transition: ${COMMON_TRANSITION};
`;

const PageProgressBar = () => {
  const { isWhiteColor }: any = useLayoutContext(); // eslint-disable-line 
  const barColor = useMemo(
    () =>
      isWhiteColor ? WHITE_UNACTIVE_TEXT_COLOR : BLACK_UNACTIVE_TEXT_COLOR,
    [isWhiteColor],
  );

  return (
    <Container style={{ background: barColor }}>
      <ProgressItem text="Introduction" order={0} />
      <ProgressItem text="Skills" order={1} />
      <ProgressItem text="Experiences" order={2} />
      <ProgressItem text="Contact" order={3} />
    </Container>
  );
};

export default PageProgressBar;
