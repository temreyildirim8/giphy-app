/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components';
import menuIcon from '../../assets/iconfinder_00-ELASTOFONT-STORE-READY_price_2738303.png';
import notificationIcon from '../../assets/notification.png';


const StyledContainer = styled(View)`
  flex: 1;
  background-color: #ffffff;
`;

const StyledMenuContainer = styled(View)`
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  background-color: #375E66;
`;

const StyledOtherPartContainer = styled(View)`
  background-color: #ffffff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  top: -10px;
`;

const StyledMenuImages = styled(Image)`
  width: 30px;
  height: 30px;
`;

const StyledText = styled(Text)`
  height: 30px;
  font-size: 15px;
  padding: 3px 0;
  color: #ffffff;
`;

const StyledFeauturedTitle = styled(View)`
  margin: 20px 10px 10px;
`;

const StyledFeaturedContaioner = styled(View)`

`;

export default class Results extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledMenuContainer>
          <StyledMenuImages source={menuIcon}/>
          <StyledText> new giphy app </StyledText>
          <StyledMenuImages source={notificationIcon}/>
        </StyledMenuContainer>

        <StyledOtherPartContainer>
          <StyledFeauturedTitle>
            <Text> featured giphs </Text>
          </StyledFeauturedTitle>

          <StyledFeaturedContaioner>

          </StyledFeaturedContaioner>
        </StyledOtherPartContainer>
      </StyledContainer>
    );
  }
}