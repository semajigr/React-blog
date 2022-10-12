import styled from "styled-components";
import { Color } from "ui/colors";
import { Media } from "ui/intex";

const StyledFavoritesPage = styled.div`
  margin-top: 152px;
  margin-bottom: 72px;
`;

const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 56px;
  line-height: 80px;
  color: ${Color.Secondary};

  ${Media.MD} {
    font-size: 32px;
    line-height: 48px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CountAllArticles = styled.p`
  font-size: 18px;
  line-height: 80px;
  color: ${Color.Secondary};

  ${Media.MD} {
    line-height: 48px;
  }
`;

const Description = styled.h3`
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  margin-top: 30px;
  color: ${Color.Secondary};
`;

export { StyledFavoritesPage, Title, CountAllArticles, Container, Description };
