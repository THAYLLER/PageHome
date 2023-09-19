import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex: 2;
  align-items: center;
  width: 100%;
  height: 220px;
`;

export const Image = styled.Image`
  width: 100%;
  align-self: stretch;
`;

export const ButtonContainer = styled.View`
  width: 100%; 
  position: absolute;
  top: 70px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;

export const ContainerRight = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 35%; 
`;


export const Card = styled.View`
  flex: 6;
  width: 100%; 
  height: 100%; 
  background-color: #FFFDF4;
  border-radius: 20px;
  padding: 20px;
  margin-top: -30px;
`;

export const CardLogo = styled.Image`
  width: 100%;
  height: 100%;
`;

export const CardLogoBox = styled.View`
  width: 75px;
  height: 65px;
  border-radius: 15px;
  padding: 10px;
  background: #FACF54;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 4;
`;

export const CardStoreInfo = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const CardStoreName = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StoreNameText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-right: 15px;
`;


export const CardStoreDescription = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #858585;
`;

export const CardStoreDescriptionPoint = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #858585;
`;

export const CardRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardStoreInfoText = styled.Text`
  font-size: 16px;
  color: #000;
`;

export const CardStoreInfoTextBold = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

export const CardStoreInfoTextBoldOrange = styled.Text`
  font-size: 18px;
  color: #F6AF1F;
  font-weight: bold;
`;


export const ImageBanner = styled.Image`
  width: 100%;
  border-radius: 20px;
`;

export const CardBanner = styled.View`
  width: 100%;
  margin-top: 30px;
  border-radius: 20px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 4;
`;
