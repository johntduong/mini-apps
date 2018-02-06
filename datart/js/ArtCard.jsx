// @flow

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ArtCard = (props: {
  title: string,
  description: string,
  poster: string,
  url: string
}) => (
  <Wrapper>
    <Image alt={`${props.title} Art Photo`} src={`${props.poster}`} />
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.url}</p>
    </div>
  </Wrapper>
);

export default ArtCard;
