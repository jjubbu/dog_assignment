import React from "react";
import styled, { keyframes } from "styled-components";
const Card = (props) => {
  const data = props.data;
  const ref = React.useRef();

  return (
    <CardStyle ref={ref}>
      <h3>{data.title}</h3>
      <img src={data.image} alt="card" />
      <p>{data.contents}</p>
    </CardStyle>
  );
};

const titleAni = keyframes`
 0% { transform: translate(.5px, .5px) rotate(0deg); }
  10% { transform: translate(-.5px, -1px) rotate(-1deg); }
  20% { transform: translate(-1.5px, -.5px) rotate(1deg); }
  30% { transform: translate(1.5px, 1px) rotate(0deg); }
  40% { transform: translate(.5px, -.5px) rotate(1deg); }
  50% { transform: translate(-.5px, 1px) rotate(-1deg); }
  60% { transform: translate(-1.5px, .5px) rotate(0deg); }
  70% { transform: translate(1.5px, .5px) rotate(-1deg); }
  80% { transform: translate(-.5px, -.5px) rotate(1deg); }
  90% { transform: translate(.5px, 1px) rotate(0deg); }
  100% { transform: translate(.5px, -1px) rotate(-1deg); }`;

const cardAni = keyframes`
0%{transform:scale(0)}
100%{transform:scale(1)}
`;

const CardStyle = styled.div`
  max-width: 50%;
  min-width: 40%;
  flex: 1;
  padding-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(34, 41, 64, 0.2);
  transition: transform 0.5s ease;
  animation: ${cardAni} 1.5s ease;
  img {
    width: 100%;
  }
  h3,
  p {
    padding: 10px 20px;
  }

  &:hover {
    transform: translateY(-10px);
    transition: transform 0.5s ease;
    h3 {
      animation: ${titleAni} 1s ease;
    }
  }

  @media only screen and (max-width: 690px) {
    min-width: 100%;
    border-radius: 0px;
  }

  @media only screen and (max-width: 450px) {
    h3 {
      font-size: 15px;
    }
    p {
      font-size: 12px;
    }
  }
`;

export default Card;
