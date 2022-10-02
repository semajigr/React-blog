import styled from "styled-components";
import { FavoritesIcon } from "../../assets";
import { Media } from "../../ui/breakpoints";
import { Color } from "../../ui/colors";

const StyledArticleItem = styled.li`
  height: 388px;
  background-color: ${Color.White};
  border-radius: 16px;

  ${Media.LG} {
    width: 328px;
  }

  ${Media.MD} {
    width: 272px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 208px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const Content = styled.div`
  margin: 20px 20px;
`;

const Date = styled.h3`
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Medium};

  ${Media.MD} {
    font-size: 14px;
  }
`;

const Title = styled.h2`
  height: 84px;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: ${Color.Secondary};

  ${Media.MD} {
    font-size: 14px;
  }
`;

const Button = styled.button`
  position: relative;
  left: 90%;
  background: none;
  cursor: pointer;
`;

const FavoriteIcon = styled(FavoritesIcon)`
  :hover {
    fill: red;
  }

  :active,
  :focus {
    fill: white;
  }
`;

export { StyledArticleItem, Image, Content, Date, Title, Button, FavoriteIcon };
