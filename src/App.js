import React from "react";
import styled from "styled-components";
import { apis } from "./lib/axios";
import Card from "./components/Card";
import Loading from "./components/Loading";

function App() {
  const [list, setList] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [isList, setIsList] = React.useState(true);
  const pageEnd = React.useRef();
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

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  React.useEffect(() => {
    getList(page);
  }, [page]);

  React.useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (e) => {
          // 더보기버튼이 보이는지 아닌지 boolean
          const isFocusEnd = e[0].isIntersecting;
          if (isFocusEnd) {
            setPage((prev) => prev + 1);
          }
        },
        { threshold: 1 }
      );
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  return (
    <React.Fragment>
      <AppStyle id="container">
        {list?.map((l, idx) => {
          const isLast = idx === list.length - 1;
          return <Card data={l} key={idx} />;
        })}
      </AppStyle>
      {isList ? (
        <React.Fragment>
          <div className="loading">
            <Loading />
          </div>
          <button onClick={loadMore} ref={pageEnd}>
            더보기
          </button>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}

const AppStyle = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export default App;
