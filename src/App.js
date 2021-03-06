import React from "react";
import styled, { keyframes } from "styled-components";
import { apis } from "./lib/axios";
import Card from "./components/Card";
import Loading from "./components/Loading";

function App() {
  const [list, setList] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [isList, setIsList] = React.useState(true);
  const pageEnd = React.useRef();

  // 서버에서 리스트를 받아와 state에 저장
  const getList = (num) => {
    apis
      .getListAX(num)
      .then((res) => {
        const data = res.data;
        setList((prev) => [...prev, ...data.list]);
        setLoading(true);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setIsList(false);
        }
      });
  };

  React.useEffect(() => {
    getList(page);
  }, [page]);

  // 옵저버 선언
  const observer = new IntersectionObserver(
    (e) => {
      const isFocusEnd = e[0].isIntersecting;
      // 타겟이 뷰에 온전히 들어올 경우 setPage 를 실행
      if (isFocusEnd) {
        setPage((prev) => prev + 1);
      }
    },
    { threshold: 1 }
  );

  React.useEffect(() => {
    if (loading) {
      // 옵저버의 타겟을 정해줌
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  return (
    <React.Fragment>
      <TitleStyle>
        <span>무한스크롤,</span>
        가보자고!
      </TitleStyle>
      <AppStyle id="container">
        {list?.map((l, idx) => {
          return <Card data={l} key={idx} />;
        })}
      </AppStyle>
      {isList ? (
        <React.Fragment>
          <div className="loading" ref={pageEnd}>
            <Loading />
          </div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}

const pageTitleAni = keyframes`
0%{width:0;}
100%{width:100%;}
`;

const TitleStyle = styled.h1`
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  gap: 10px;
  span {
    font-style: italic;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 10px;
      background: #f24171;
      bottom: -5px;
      left: 0;
      z-index: -10;
      animation: ${pageTitleAni} 1s ease;
    }
  }
  @media only screen and (max-width: 450px) {
    font-size: 20px;
    padding: 15px;
  }
`;

const AppStyle = styled.div`
  max-width: 1200px;
  padding: 0px 20px 20px;
  width: 100%;
  margin: 20px auto 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media only screen and (max-width: 690px) {
    padding: 0;
  }
  @media only screen and (max-width: 450px) {
    margin: 10px auto 0;
  }
`;

export default App;
