import styled from "styled-components";
const Card = (props) => {
  const data = props.data;
  return (
    <CardStyle>
      <h3>{data.title}</h3>
      <img src={data.image} alt="card" />
      <p>{data.contents}</p>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  max-width: 50%;
  min-width: 40%;
  flex: 1;

  border: 2px solid #333;
  border-radius: 10px;

  img {
    width: 100%;
  }
  h3,
  p {
    padding: 0 10px;
  }

  @media only screen and (max-width: 650px) {
    max-width: 100%;
  }
`;

export default Card;
