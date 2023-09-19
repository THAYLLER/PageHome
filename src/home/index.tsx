
import React from "react";
import { View, FlatList,ScrollView } from "react-native";

import { 
  ButtonContainer, 
  Card, 
  CardRow, 
  CardLogo, 
  CardLogoBox, 
  CardStoreDescription, 
  CardStoreDescriptionPoint, 
  CardStoreInfo, 
  CardStoreName, 
  Container, 
  ContainerRight, 
  Header, 
  Image, 
  StoreNameText,
  CardStoreInfoText,
  CardStoreInfoTextBold,
  CardStoreInfoTextBoldOrange,
  CardBanner,
  ImageBanner
} from "./style";

import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';

import { CircleButton } from "../components/circleButton";


import CircleStar from '../assets/imgs/circle_star.svg';

import { OutlineInfo } from "../components/outlineInfo";
import { Item } from "../components/item";

const mockData = {
  storeName: 'Cantinho da Skol',
  storeDescription: 'Uma descrição curta da loja',
  storeLogoUrl: require('../assets/imgs/storeLogo.png'),
  storeFollowUp: 'Cervejas',
  storeDistance: '1,8 km',
  storeValueMin: 'R$ 25,90',
  storeDeliveryValue: '$$$$$',
  storeOpenUntil: '00h',
  storeActions: [
    {
      key: '1',
      icon: <MaterialIcons name="star" size={18} color="#F6AF1F" />,
      text: '4,8 (234)',
    },
    {
      key: '2',
      icon: null,
      text: 'Baixo cancelamento',
    },
    {
      key: '3',
      icon: null,
      text: 'Entrega Grátis',
    },
  ],
  itens: [
    {
      id: '1',
      image: require('../assets/imgs/product_img_1.png'),
      name: 'Cerveja Skol 600ml Retornável',
      warningMessage: 'Produto para maiores de 18 anos.',
      price: 7.99,
      previousPrice: 10.00,
    },
    {
      id: '2',
      image: require('../assets/imgs/product_img_1.png'),
      name: 'Cerveja Skol 600ml Retornável',
      warningMessage: 'Produto para maiores de 18 anos.',
      price: 7.99,
      previousPrice: 10.00,
    },
    {
      id: '3',
      image: require('../assets/imgs/product_img_1.png'),
      name: 'Cerveja Skol 600ml Retornável',
      warningMessage: 'Produto para maiores de 18 anos.',
      price: 7.99,
      previousPrice: 10.00,
    },
    {
      id: '4',
      image: require('../assets/imgs/product_img_1.png'),
      name: 'Cerveja Skol 600ml Retornável',
      warningMessage: 'Produto para maiores de 18 anos.',
      price: 7.99,
      previousPrice: 10.00,
    },
    {
      id: '5',
      image: require('../assets/imgs/product_img_1.png'),
      name: 'Cerveja Skol 600ml Retornável',
      warningMessage: 'Produto para maiores de 18 anos.',
      price: 7.99,
      previousPrice: 10.00,
    },
    {
      id: '6',
      image: require('../assets/imgs/product_img_1.png'),
      name: 'Cerveja Skol 600ml Retornável',
      warningMessage: 'Produto para maiores de 18 anos.',
      price: 7.99,
      previousPrice: 10.00,
    },
  ]
};

export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Header>
          <Image source={require('../assets/imgs/header.png')} resizeMode="cover" />
          <ButtonContainer>
            <CircleButton 
              icon={
                <MaterialIcons name="keyboard-arrow-left" size={40} color="#F6AF1F" />
              } 
              onPress={() => console.log('Botão pressionado')}
            />
            <ContainerRight>
              <CircleButton 
                icon={
                  <Feather name="heart" size={25} color="#F6AF1F" />
                }
                onPress={() => console.log('Botão pressionado')}
              />
              <CircleButton 
                icon={
                  <AntDesign name="search1" size={25} color="#F6AF1F" />
                }
                onPress={() => console.log('Botão pressionado')}
              />
            </ContainerRight>
          </ButtonContainer>
        </Header>
        <Card>
          <CardRow>
            <CardStoreInfo>
              <CardStoreName>
                <CardStoreName>
                  <StoreNameText>
                    {mockData.storeName}
                  </StoreNameText>
                </CardStoreName>
                <CircleStar
                  width={18}
                  height={18}
                />
              </CardStoreName>
              <CardStoreDescription>
                {mockData.storeFollowUp}
                <CardStoreDescriptionPoint> . </CardStoreDescriptionPoint>
                {mockData.storeDistance}
                <CardStoreDescriptionPoint> . </CardStoreDescriptionPoint>
                {mockData.storeDeliveryValue} 
              </CardStoreDescription>
            </CardStoreInfo>
            <CardLogoBox>
              <CardLogo source={mockData.storeLogoUrl} />
            </CardLogoBox>
          </CardRow>
          <CardRow style={{ marginTop: 25 }}>
            <View>
              <CardStoreInfoText>
                  Aberto até {mockData.storeOpenUntil}
              </CardStoreInfoText>
              <CardStoreInfoText>
                Pedido min. 
                  <CardStoreInfoTextBold> {mockData.storeValueMin} </CardStoreInfoTextBold>
              </CardStoreInfoText>
            </View>
            <CardStoreInfoTextBoldOrange>
              Perfil da Loja
            </CardStoreInfoTextBoldOrange>
          </CardRow>
          <CardRow>
            <FlatList
              data={mockData.storeActions}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <OutlineInfo
                  icon={item.icon}
                  text={item.text}
                  borderColor="#F6AF1F"
                  textColor="#F6AF1F"
                />
              )}
              keyExtractor={(item) => item.key}
              style={{ marginTop: 15, height: 60 }}
            />
          </CardRow>
          <CardBanner>
            <ImageBanner source={require('../assets/imgs/banner_1.png')} />
          </CardBanner>
          <CardRow style={{ marginTop: 15, marginBottom: 15 }}>
            <CardStoreInfoTextBold>
              Ofertas
            </CardStoreInfoTextBold>
            <CardStoreInfoTextBoldOrange>
              Ver mais
            </CardStoreInfoTextBoldOrange>
          </CardRow>
          <FlatList
            numColumns={4}
            showsHorizontalScrollIndicator={false}
            data={mockData.itens}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id}
          />
        </Card>
      </Container>
    </ScrollView>
  );
}
