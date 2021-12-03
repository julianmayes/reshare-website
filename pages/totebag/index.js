import styled from "styled-components";
import React, { useState, useEffect, Suspense } from "react";
import Link from "next/dist/client/link";

// --------- Functions --------

// --------- Components--------
import Images from "../../comps/Images";

const ContainerUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  height: 100%;
  background-color:white;
`;

//------- Marketing Container -------
const TopPageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 1024px;
    padding-top: 100px;
    overflow: hidden;
`;
const LeftContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 45%;
    height: 1024px;
`;
const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width:58%;
    height: 1024px;
    padding-top: 100px;
    padding-left: 101px;
    background-color: White;
`;
const RightTitle = styled.p`
    font-size:28px;
    margin: 0;
`;
const RightSubHeading = styled.p`
    font-size: 18px;
`;
const PrimaryImage = styled.div`
    display: flex;
    margin-top: 15px;
`;


const ReshareProduct = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1024px;
    padding: 100px 114px 0 80px ;
`;
const MarketingTitle = styled.p`
    font-size: 90px;
    font-weight: 500;
    margin-bottom: 100px;
`; 


export default function Home() {

  // const Orb = Parallax(<div style={styles.orb}><ReshareTitle>RESHARE</ReshareTitle></div>,0.05);
  
  return (
  <ContainerUI>
      <TopPageContainer>
    <LeftContainer>
        <img width="634px"  src="./LeftHeroCardTote.png"/>
    </LeftContainer>

    <RightContainer>
        <RightTitle>Reshare Tote Bag Design</RightTitle>
        <RightSubHeading>Designed by Illustrator</RightSubHeading>

    <PrimaryImage>
        <img width="620px" src="./Bag.png"/>
    </PrimaryImage>
        
    </RightContainer>

      </TopPageContainer>

    <ReshareProduct>
        <MarketingTitle>
            Reshare Product
        </MarketingTitle>

        <Images/>

    </ReshareProduct>
  </ContainerUI>
  );
}












// export async function getStaticProps({ params }) {
//   const posts = await client.fetch(postQuery);

//   return {
//     props: {
//       posts,
//     },
//   };
// }