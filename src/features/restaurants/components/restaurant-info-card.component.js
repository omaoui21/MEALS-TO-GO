import React from 'react';
import {Image, Text,View } from 'react-native';
import { Card } from 'react-native-paper';
import {styled} from 'styled-components';
import { SvgXml } from 'react-native-svg';
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
background-color:${(props)=>props.theme.colors.bg.primary};
margin-bottom:${(props)=>props.theme.space[2]};
`;
const RestaurantCardCover = styled(Card.Cover)`
background-color:${(props)=>props.theme.colors.bg.primary};
padding:${(props)=>props.theme.space[3]};
`;
const Info=styled(View)`
padding:${(props)=>props.theme.space[3]};
`;
const Rating=styled(View)`
flex-direction:row;
padding-top:${(props)=>props.theme.space[2]};
padding-bottom:${(props)=>props.theme.space[2]};
`;
const Section=styled(View)`
flex-direction:row;
align-item:center;
`;
const SectionEnd=styled(View)`
flex:1;
flex-direction:row;
justify-content:flex-end
`;
// const Open=styled(SvgXml)`
// flex-direction:row;
// `;
const CloseTemp=styled(Text)`
color:red;
font-family:${(props)=>props.theme.fonts.body};
`;
const Address=styled(Text)`
font-size:${(props)=>props.theme.fontSizes.caption};
font-family:${(props)=>props.theme.fonts.body};
`;
const Title=styled(Text)`
font-family:${(props)=>props.theme.fonts.heading};
font-size:${(props)=>props.theme.fontSizes.body};
color:${(props)=>props.theme.colors.ui.primary};
`;
export const RestaurantInfoCard = ({restaurant={}}) => {
    const {
        name="Some Restaurant",
        icon="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos=["https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
        address="10 some random restaurant",
        isOpenNow=true,
        rating=4,
        isCloseTemporarily=true,
    }=restaurant;
    const ratingArray = Array.from(new Array(rating));
  return (
    <>
    <RestaurantCard elevation={5} >
    <RestaurantCardCover key={name} source={{ uri:photos[0]}} />
      <Info>
      <Title>{name}</Title>
      <Section>
      <Rating>
        {ratingArray.map((index)=>(
           <SvgXml key={index} xml={star} width={20} height={20}/>
        ))}
     
      </Rating>
      <SectionEnd>
        {isCloseTemporarily && 
        (<CloseTemp>
          CLOSED TEMPORARILY
        </CloseTemp>)}
        <View style={{marginLeft:8}} />
      {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
      <View style={{marginLeft:8}} />
      <Image style={{width:15,height:15}} source={{uri:icon}}/>
      </SectionEnd>
      </Section>
      <Address>{address}</Address>
      </Info>
    </RestaurantCard>
    </>
  )
}