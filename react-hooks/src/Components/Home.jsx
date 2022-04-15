import React from "react";
import styled from "styled-components";
import { Profile } from "./Profile";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  gap: 1%;
  margin: 20px;
  padding: 0px;
  height: 100vh;
`;

const GridItem1 = styled.div`
  grid-column: 1/3;
  /* background-color: yellow; */
`;

const GridItem2 = styled.div`
  grid-column: 3/6;
  /* background-color: yellow; */
`;

const GridItem3 = styled.div`
  grid-column: 6/9;
  /* background-color: yellow; */
`;

const GridItem4 = styled.div`
  grid-column: 9/12;
  /* background-color: yellow; */
`;

export const Home = () => {
  return (
    <div>
      <Container>
        <GridItem1>
          <Profile />
        </GridItem1>
        <GridItem2>TODO</GridItem2>
        <GridItem3>INPROGRESS</GridItem3>
        <GridItem4>DONE</GridItem4>
      </Container>
    </div>
  );
};
