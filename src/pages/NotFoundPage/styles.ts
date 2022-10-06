import styled from "styled-components";
import { Color } from "ui/colors";
import { Media } from "ui/intex";

const StyledNotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-top: 70px;
`;

const Title = styled.h1`
  font-size: 300px;
  font-weight: 100;
  line-height: 350px;
  color: ${Color.Secondary};

  ${Media.LG} {
    font-size: 200px;
    line-height: 280px;
  }

  ${Media.MD} {
    font-size: 90px;
    line-height: 170px;
  }
`;

const ErrorPage = styled.div`
  position: absolute;
  text-align: center;
  font-size: 42px;
  font-weight: bold;
  line-height: 64px;
  top: 65%;
  width: 720px;
  background-color: ${Color.Gray};
  color: ${Color.Secondary};

  ${Media.LG} {
    width: 550px;
    font-size: 32px;
    line-height: 54px;
    top: 61%;
  }

  ${Media.MD} {
    width: 271px;
    top: 58%;
    font-size: 16px;
    line-height: 24px;
  }
`;

const ButtonHome = styled.button`
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  padding: 10px;
  border-radius: 4px;
  color: ${Color.Gray};
  background-color: ${Color.Primary};
  cursor: pointer;

  :hover {
    background-color: ${Color.PrimaryLight};
  }
`;

export { StyledNotFoundPage, Title, ErrorPage, ButtonHome };
