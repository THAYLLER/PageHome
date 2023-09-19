import React from 'react';
import { ItemContainer, ItemImage, ItemName, ItemDescription, ItemPrice, ItemPreviousPrice, ItemCard, ButtonContainer } from './style';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { CircleButton } from '../circleButton';

interface ItemProps {
  item: {
    id: string;
    image: any; 
    name: string;
    warningMessage: string;
    price: number;
    previousPrice: number;
  };
}

export const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <ItemContainer>
      <ItemCard>
        <ItemImage source={item.image} />
        <ButtonContainer>
          <FontAwesome name="snowflake-o" size={20} color="#5D5FEF" />
          <CircleButton 
              icon={
                <AntDesign name="plus" size={20} color="#F6AF1F" />
              } 
              onPress={() => console.log('Botão pressionado')}
            />
        </ButtonContainer>
      </ItemCard>
      <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
      <ItemPreviousPrice>R$ {item.previousPrice.toFixed(2)}</ItemPreviousPrice>
      <ItemName>{item.name}</ItemName>
      <ItemDescription>{item.warningMessage}</ItemDescription>
    </ItemContainer>
  );
};
