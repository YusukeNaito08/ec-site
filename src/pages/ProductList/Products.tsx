import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux/store/store";
import { Link } from "react-router-dom";

const Cards = () => {
  const products = useSelector((state: RootState) => state.products);
  return (
    <div>
      <div className="cardsWrap">
        {products.map((product) => {
          return (
            <Card key={product.id}>
              <Link to={`/product/${product.id}`}>
                <div className="imgWrap">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                  />
                </div>
                <h4 className="name">{product.name}</h4>
                <p className="price">￥{product.price}</p>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const Card = styled.div`
  width: calc((100% / 3) - 4.8rem);

  & .imgWrap {
    margin-bottom: 1.6rem;
  }

  & .title {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.1rem;
    margin-bottom: 0.8rem;
  }

  & .price {
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.7rem;

    &::after {
      content: "(税込)";
      display: inline-block;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.8rem;
    }
  }
`;

export default Cards;
