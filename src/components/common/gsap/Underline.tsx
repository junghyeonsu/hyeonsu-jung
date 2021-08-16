import React, { useRef, useEffect, ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

interface Color {
  color: string;
}

interface UnderlineProps {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
  delay: number;
  color: string;
}

const UnderlineContainer = styled.span`
  background-image: linear-gradient(
    transparent 80%,
    ${(props: Color) => props.color} 20%
  );
  background-size: 0% 100%;
  background-repeat: no-repeat;
  z-index: -1;
`;

const Underline = ({ delay, children, color }: UnderlineProps) => {
  const target = useRef(null);
  useEffect(() => {
    gsap.to(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'restart reset restart reset',
      },
      backgroundImage: `linear-gradient(transparent 80%, ${color} 20%)`,
      backgroundSize: '100% 100%',
      delay,
      duration: 0.6,
      ease: 'expo.out',
    });
  }, [delay, color]);
  return (
    <UnderlineContainer color={color} ref={target}>
      {children}
    </UnderlineContainer>
  );
};

export default Underline;
