/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components';
import menuIcon from '../../assets/hamburger-icon-white-png-13.png';
import notificationIcon from '../../assets/youtube-notifications-bell-png-13.png';
import catIcon from '../../assets/giphs/titles/cat.gif';
import dogIcon from '../../assets/giphs/titles/dog.gif';
import monkeyIcon from '../../assets/giphs/titles/monkey.gif';
import rabbitIcon from '../../assets/giphs/titles/rabbit.gif';
import wildIcon from '../../assets/giphs/titles/wild.gif';

import forYouFirst from '../../assets/giphs/giphy.gif'
import forYouSecond from '../../assets/giphs/giphy(2).gif'
import forYouThird from '../../assets/giphs/QmZr4UGAHZVjcU8krA6cAj3ujW2rxVyzDsQJYRiGae9Vff.gif'

const Container = styled(ScrollView)`
  flex: 1;
  background-color: #ffffff;
`;

const MenuContainer = styled(View)`
  flex-direction: row;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  background-color: #375E66;
`;

const MenuIcon = styled(Image)`
  width: 30px;
  height: 30px;
`;

const NotificationIcon = styled(Image)`
  width: 25px;
  height: 25px;
`;

const MenuText = styled(Text)`
  height: 30px;
  font-size: 16px;
  padding: 3px 0;
  color: #ffffff;
`;

const OtherPartContainer = styled(ScrollView)`
  background-color: #ffffff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  top: -15px;
  padding: 10px 0px;
`;

const FeauturedTitleContainer = styled(View)`
  margin: 20px 20px 0px;
`;

const FeaturedText = styled(Text)`
  font-size: 15px;
`;

const FeaturedContaioner = styled(View)`
  height: 90px;
  margin: 5px 20px 10px;
  flex-direction: row;
`;

const FeaturedImageContainer = styled(View)`
  padding: 5px 10px 5px 5px;
`;

const FeaturedImage = styled(Image)`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;

const ForYouContainer = styled(View)`
  margin: 10px 20px;
`;

const ForYouTitleContainer = styled(View)`
  margin: 0 0 5px 0;
`;

const ForYouText = styled(Text)`
  font-size: 15px;
`;

const ForYouImageContainer = styled(View)`
  padding: 5px;
`;

const ForYouImage = styled(Image)`
  border-radius: 10px;
  width: 100%;
  height: 300px;
  max-width: 100%;
`;


export default class Results extends Component {
  render() {
    return (
      <Container>
        <MenuContainer>
          <MenuIcon source={menuIcon}/>
          <MenuText> giphy app </MenuText>
          <NotificationIcon source={notificationIcon}/>
        </MenuContainer>

        <OtherPartContainer>
          <FeauturedTitleContainer>
            <FeaturedText> featured giphy categories </FeaturedText>
          </FeauturedTitleContainer>

          <FeaturedContaioner>
            <FeaturedImageContainer>
              <FeaturedImage source={catIcon}/>
            </FeaturedImageContainer>
            <FeaturedImageContainer>
              <FeaturedImage source={dogIcon}/>
            </FeaturedImageContainer>
            <FeaturedImageContainer>
              <FeaturedImage source={monkeyIcon}/>
            </FeaturedImageContainer>
            <FeaturedImageContainer>
              <FeaturedImage source={rabbitIcon}/>
            </FeaturedImageContainer>
            <FeaturedImageContainer>
              <FeaturedImage source={wildIcon}/>
            </FeaturedImageContainer>
          </FeaturedContaioner>

          <ForYouContainer>
            <ForYouTitleContainer>
              <ForYouText> for you </ForYouText>
            </ForYouTitleContainer>
            <ForYouImageContainer>
              <ForYouImage source={forYouFirst}/>
            </ForYouImageContainer>
            <ForYouImageContainer>
              <ForYouImage source={forYouSecond}/>
            </ForYouImageContainer>
            <ForYouImageContainer>
              <ForYouImage source={forYouThird}/>
            </ForYouImageContainer>
          </ForYouContainer>

        </OtherPartContainer>
      </Container>
    );
  }
}