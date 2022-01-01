import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <React.Fragment>
      <LoadingStyle>로딩중!</LoadingStyle>
    </React.Fragment>
  );
};

const ani = keyframes`
0%{transform:rotate(0deg)}
100%{transform:rotate(360deg)}
`;

const LoadingStyle = styled.div`
  text-indent: -9999px;
  width: 25px;
  height: 25px;
  border: 2px solid #f24171;
  animation: ${ani} 2s infinite linear;
  margin: 50px auto;
`;

export default Loading;
