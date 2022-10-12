import styled from "styled-components";
import { Media } from "ui/intex";
import { Color } from "ui/colors";

const StyledFavoritesArticle = styled.li`
  width: 100%;
  height: 388px;
  background-color: ${Color.White};
  border-radius: 16px;
  list-style: none;

  &:hover {
    box-shadow: 0px 0px 20px 10px rgba(24, 42, 56, 0.3);
    transition: all 1s;
  }

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

const Description = styled.div`
  margin: 20px 20px;
`;

const CustomDate = styled.h3`
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
  padding: 0 10px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 10px;
  background-color: ${Color.Secondary};
  color: ${Color.White};
  cursor: pointer;

  :hover {
    background-color: ${Color.Medium};
  }
  :active,
  :focus {
    background-color: ${Color.Secondary};
  }
`;

export { StyledFavoritesArticle, Image, CustomDate, Description, Title, Button };
