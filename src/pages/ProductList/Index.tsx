import styled from "styled-components";
import Layout from "../../components/layout/Layout";
import Products from "./Products";

const Index = () => {
  return (
    <>
      <Layout>
        <Hero className="kv"></Hero>
        <ProductLists>
          <div className="inner">
            <Tabs>
              <button>すべて</button>
              <button>メンズ</button>
              <button>レディース</button>
            </Tabs>
            <Sidebar>
              <h2 className="categoryHead">カテゴリ(14)</h2>
              <div className="sidebar">
                <div className="sidebar-inner">
                  <div className="category">
                    <h3>カテゴリ</h3>
                    <select
                      name=""
                      id=""
                    >
                      <option value="">カテゴリ1</option>
                    </select>
                  </div>
                  <div className="price">
                    <h3>価格</h3>
                    <ul className="check">
                      <li>
                        <input
                          type="checkbox"
                          name=""
                          id="all"
                        />
                        <label htmlFor="all">全て</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name=""
                          id="1000"
                        />
                        <label htmlFor="all">〜￥1000</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name=""
                          id="5000"
                        />
                        <label htmlFor="all">〜￥5000</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="10000"
                          id="all"
                        />
                        <label htmlFor="all">〜￥10000</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name=""
                          id="upper10000"
                        />
                        <label htmlFor="all">〜￥10000以上</label>
                      </li>
                    </ul>
                  </div>
                  <div className="size">
                    <h3>サイズ</h3>
                    <ul className="check">
                      <li>
                        <input
                          type="checkbox"
                          name="XS"
                          id="all"
                        />
                        <label htmlFor="all">XS</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="S"
                          id="all"
                        />
                        <label htmlFor="all">S</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="M"
                          id="all"
                        />
                        <label htmlFor="all">M</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name=""
                          id="L"
                        />
                        <label htmlFor="all">L</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name=""
                          id="2XL"
                        />
                        <label htmlFor="all">2XL</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Sidebar>
            <CardList>
              <div>
                <Sort>
                  <select
                    name=""
                    id=""
                  >
                    <option value="">並び替え</option>
                  </select>
                </Sort>
                <Products />
                <Pagination>
                  <a href="#">
                    <span>&laquo;</span>
                  </a>
                  <a href="#">
                    <span>1</span>
                  </a>
                  <a href="#">
                    <span>2</span>
                  </a>
                  <a href="#">
                    <span>&raquo;</span>
                  </a>
                </Pagination>
              </div>
            </CardList>
          </div>
        </ProductLists>
      </Layout>
    </>
  );
};

const Hero = styled.div`
  width: 100%;
  min-height: 27rem;
  background-color: red;
`;

const ProductLists = styled.div`
  & .inner {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "Tab  Tab"
      "Sidebar Cards";
    padding: 6.4rem 0 12.8rem;
  }
`;

const Tabs = styled.div`
  grid-area: Tab;
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 0.8rem;
  margin-bottom: 4.8rem;

  & button {
    display: flex;
    padding: 0.4rem 1.2rem;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.1rem;
    border-radius: 0.8rem;
    border: #444;
  }
`;

const Sidebar = styled.div`
  grid-area: Sidebar;
  width: 20.9rem;

  & .categoryHead {
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.6rem;
    margin-bottom: 3.8rem;
  }

  & .sidebar {
    padding: 2.4rem;
    background-color: #f7f7f7;

    &-inner {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2.4rem;
    }
  }
  & h3 {
    font-family: Roboto;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.4rem;
    margin-bottom: 1.6rem;
  }

  & .category,
  .price,
  .size {
    width: 100%;

    & .check {
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;
      align-self: stretch;
    }
  }

  & .category {
    & select {
      width: 100%;
      display: flex;
      padding: 1.2rem 0.8rem;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
    }
  }
`;

const CardList = styled.div`
  grid-area: Cards;
  width: 100%;

  & .cardsWrap {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 4.8rem;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 6.4rem;
  }
`;

const Sort = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3.8rem;
  & select {
    display: flex;
    width: 12.8rem;
    padding: 1.2rem 0.8rem;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    border: none;
  }
`;

const Pagination = styled.div`
  display: inline-flex;
  justify-content: center;
  gap: 1.2rem;
  width: 100%;

  & > a {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 0.4rem;
    border: 1px solid #444;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & span {
      width: 0.8rem;
    }
  }
`;

export default Index;
