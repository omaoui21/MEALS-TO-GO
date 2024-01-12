import React from 'react';
import {StatusBar,View,SafeAreaView,FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {styled} from 'styled-components';


const SafeArea = styled(SafeAreaView)`
flex:1;
${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled(View)`
padding:${(props)=>props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  return (
    <>
     <SafeArea>
      <SearchContainer>
      <Searchbar style={{backgroundColor:'white'}} placeholder="Search"/>
      </SearchContainer>
      <FlatList
      data={[
        {name:1},
        {name:2},
        {name:3},
        {name:4},
        {name:5},
        {name:6},
        {name:7},
        {name:8},
      ]}
      renderItem={()=><RestaurantInfoCard/>}
      keyExtractor={(item)=>item.name}
      contentContainerStyle={{padding:16}}
      />
    </SafeArea>
    </>
  )
}
