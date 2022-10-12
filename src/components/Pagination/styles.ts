import styled from "styled-components";
import { Color } from "ui/colors";

type setCurrent = { current: number };

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;

const ButtonPage = styled.button`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  color: ${Color.Secondary};
  background-color: ${Color.Gray};

  cursor: pointer;

  :hover {
    color: ${Color.PrimaryLight};
  }
`;

const PageList = styled.ul`
  display: flex;
  gap: 32px;
  align-items: center;
  li {
    font-size: 20px;
    font-weight: 600;
    color: #000000;
  }
`;

const FirstPageItem = styled.li<setCurrent>`
  display: ${({ current }) => (current <= 1 ? "none" : "block")};
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: ${Color.Secondary};
`;

const SecondPageItem = styled.li<setCurrent>`
  display: block;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: ${Color.Secondary};
`;

const CurrentPageItem = styled.li``;

const CurrentButton = styled.button`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: ${Color.Primary};
  background-color: ${Color.Gray};
  cursor: pointer;

  :hover {
    color: ${Color.PrimaryLight};
  }
`;
export {
  StyledPagination,
  ButtonPage,
  PageList,
  FirstPageItem,
  SecondPageItem,
  CurrentButton,
  CurrentPageItem,
};
