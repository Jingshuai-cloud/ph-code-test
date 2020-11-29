import React from "react";
import styled from "styled-components";

export const TitleWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export default function Title() {
  return (
    <TitleWrapper>
      <h1>Predictive Hire</h1>
    </TitleWrapper>
  );
}
