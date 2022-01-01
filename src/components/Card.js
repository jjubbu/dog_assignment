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
  padding-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(34, 41, 64, 0.2);
  transition: transform 0.5s ease;

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
  }

  @media only screen and (max-width: 690px) {
    min-width: 100%;
    border-radius: 0px;
  }
`;

export default Card;
