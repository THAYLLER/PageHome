import React, { ReactNode } from 'react';
import { Container, IconContainer, Text } from './style';

interface OutlineProps {
  icon: ReactNode;
  text: string;
  borderColor: string;
  textColor: string;
}

export const OutlineInfo: React.FC<OutlineProps> = ({ icon, text, borderColor, textColor }) => {
  return (
    <Container borderColor={borderColor}>
      <IconContainer>{icon}</IconContainer>
      <Text textColor={textColor}>{text}</Text>
    </Container>
  );
};
