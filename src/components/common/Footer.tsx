import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>
      <div className="inner">
        <small>©︎ sample.com, Inc. All Rights Reserved.</small>
      </div>
    </FooterWrap>
  );
};
const FooterWrap = styled.footer`
  position: sticky;
  top: 100vh;
  width: 100%;
  background-color: #444444;
  color: #fff;

  & .inner {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding: 1.2rem 0;
  }
`;

export default Footer;
