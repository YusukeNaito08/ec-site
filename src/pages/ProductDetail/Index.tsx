import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { Button } from "@mui/material";
//仮でお気に入り画像使用の為、インポート
import test from "/src/assets/productsSample.png";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const products = useSelector((state: RootState) => state.products);
  const product = products.find((p) => p.id === productId);
  return (
    <>
      <Layout>
        <Detail>
          <div className="inner">
            <Bread>
              <ul>
                <li>
                  <a href="">aaa</a>
                </li>
                <li>aaa</li>
              </ul>
            </Bread>
            {product && (
              <>
                <ImageBlock>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                  />
                </ImageBlock>
                <DetailBlock>
                  <div className="head">
                    <h2>{product.name}</h2>
                    <p>￥{product.price}</p>
                  </div>
                  <div className="sizes">
                    <p>サイズ</p>
                    <div className="buttons">
                      <button>XS</button>
                      <button>S</button>
                      <button>M</button>
                      <button>L</button>
                    </div>
                  </div>
                  <div className="adds">
                    <Button
                      type="button"
                      color="primary"
                      variant="contained"
                      size="large"
                      sx={{ color: "white", width: "60%;" }}
                    >
                      カートに追加
                    </Button>
                    <Button
                      type="button"
                      color="primary"
                      variant="contained"
                      size="large"
                      sx={{ color: "white", width: "60%;" }}
                    >
                      お気に入りに追加♡
                    </Button>
                  </div>
                  <div className="description">
                    <div className="summary">
                      <p>概要</p>
                      <p>テストテストテストテストテストテストテストテスト</p>
                    </div>
                    <div className="detail">
                      <p>詳細</p>
                      <p>テストテストテストテストテストテストテストテスト</p>
                    </div>
                  </div>
                </DetailBlock>
              </>
            )}
            <Favorite>
              <h3>おすすめ商品</h3>
              <div className="images">
                <img
                  src={test}
                  alt=""
                />
                <img
                  src={test}
                  alt=""
                />
                <img
                  src={test}
                  alt=""
                />
              </div>
            </Favorite>
          </div>
        </Detail>
      </Layout>
    </>
  );
};

const Detail = styled.div`
  & .inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "Bread Bread"
      "ImageBlock DetailBlock"
      "Favorite Favorite";
    padding: 4.8rem 0 14rem;
    grid-column-gap: 6.4rem;
  }
`;

const Bread = styled.div`
  grid-area: Bread;
  margin-bottom: 4.8rem;
  & ul {
    width: 100%;
    display: inline-flex;
    align-items: center;

    & li {
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.8rem;
      display: flex;
    }

    & li:not(:last-child):after {
      display: block;
      content: ">";
      padding: 0 0.8rem;
      color: #444;
    }
  }
`;
const ImageBlock = styled.div`
  grid-area: ImageBlock;
`;
const DetailBlock = styled.div`
  grid-area: DetailBlock;

  & .head {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    & h2 {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 3.6rem;
    }

    & p {
      font-size: 2rem;
      font-weight: 700;
      line-height: 3rem;

      &::after {
        content: "(税込)";
        display: inline-block;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.8rem;
      }
    }
  }
`;
const Favorite = styled.div`
  grid-area: Favorite;

  & .images {
    display: flex;
  }
`;

export default ProductDetail;
