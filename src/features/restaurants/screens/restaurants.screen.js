import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList,SafeAreaView,StatusBar } from "react-native";
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {styled} from 'styled-components';
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';

const SafeArea = styled(SafeAreaView)`
flex:1;
${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
  padding: 13px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(error);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar style={{backgroundColor:'white'}} placeholder="Search" />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
              <RestaurantInfoCard restaurant={item} />
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};