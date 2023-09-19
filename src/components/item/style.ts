import styled from 'styled-components/native';

export const ItemContainer = styled.View`
  width: 160px;
  border-radius: 10px;
  background-color: #fff;
  margin-right: 20px;
`;

export const ItemCard = styled.View`
  width: 160px;
  height: 160px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 4;
`;

export const ItemImage = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 10px;
`;

export const ItemName = styled.Text`
  font-size: 16px;
  margin-top: 10px;
`;

export const ItemDescription = styled.Text`
  font-size: 12px;
  color: #888;
`;

export const ItemPrice = styled.Text`
  font-size: 18px;
  margin-top: 5px;
  font-weight: bold;
  color: #F6AF1F;
`;

export const ItemPreviousPrice = styled.Text`
  font-size: 14px;
  color: #888;
  text-decoration: line-through;
  margin-top: 5px;
  color: #F6AF1F;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  top: 0;
  left: 100px;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
`;