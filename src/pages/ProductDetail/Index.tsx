import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { Button } from "@mui/material";

import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

//仮でお気に入り画像使用の為、インポート
import test from "/src/assets/productsSample.png";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const products = useSelector((state: RootState) => state.products);
  const product = products.find((p) => p.id === productId);

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

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
                  <Swiper
                    modules={[Navigation, Thumbs]}
                    loop={true}
                    slidesPerView={1}
                    pagination={{
                      clickable: true,
                    }}
                    grabCursor={true}
                    navigation={true}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <img src={product.imageUrl[0]} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={product.imageUrl[1]} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={product.imageUrl[2]} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={product.imageUrl[3]} />
                    </SwiperSlide>
                  </Swiper>
                  <Swiper
                    loop={false}
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    modules={[Navigation, Thumbs]}
                    onSwiper={setThumbsSwiper}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={product.imageUrl[0]} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={product.imageUrl[1]} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={product.imageUrl[2]} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={product.imageUrl[3]} />
                    </SwiperSlide>
                  </Swiper>
                </ImageBlock>
                <DetailBlock>
                  <div className="head">
                    <h2>{product.name}</h2>
                    <p>￥{product.price}</p>
                  </div>
                  <div className="sizes">
                    <p className="sizes__title">サイズ</p>
                    <div className="sizes__buttons">
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
                      size="medium"
                    >
                      カートに追加
                    </Button>
                    <Button
                      type="button"
                      color="primary"
                      variant="contained"
                      size="medium"
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
  width: 600px;
`;
const DetailBlock = styled.div`
  grid-area: DetailBlock;

  & .head {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 3.2rem;
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

  & .sizes {
    margin-bottom: 3.2rem;
    &__title {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2.1rem;
      margin-bottom: 0.8rem;
    }

    &__buttons {
      display: flex;
      align-items: flex-start;
      align-content: flex-start;
      gap: 1.2rem;
      flex-wrap: wrap;

      & button {
        display: flex;
        width: 6.4rem;
        padding: 0.4rem 1.2rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.8rem;
        flex-shrink: 0;
        border-radius: 0.4rem;
        border: 1px solid #444;
        background-color: #fff;
      }
    }
  }

  & .adds {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 3.2rem;
    & button {
      display: flex;
      width: 37rem;
      padding: 1.2rem;
      justify-content: center;
      align-items: center;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.4rem;
      color: #fff;
      border-radius: 0.8rem;
    }
  }
`;

const Favorite = styled.div`
  grid-area: Favorite;
  margin-top: 8rem;

  & h3 {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 4.8rem;
  }

  & .images {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 6.4rem;

    & img {
      width: calc((100% / 3) - 6.4rem);
    }
  }
`;

export default ProductDetail;
