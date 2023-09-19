import React, { FC } from 'react';
import { GestureResponderEvent } from 'react-native';
import { Button } from './style';

interface IconButtonProps {
  icon: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

export const CircleButton: FC<IconButtonProps> = ({  icon,onPress }) => {
  return (
    <Button onPress={onPress}>
      {icon}
    </Button>
  );
};


