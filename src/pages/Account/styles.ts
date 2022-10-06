import styled from "styled-components";
import { Color } from "ui/colors";
import { Media } from "ui/intex";

const StyledAccount = styled.div`
  min-height: 100vh;
`;

const Title = styled.h1`
  margin-top: 152px;
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
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  margin: 0 auto;
  padding: 20px 20px;
  width: 624px;
  height: 300px;
  border-radius: 16px;
  background-color: ${Color.White};
  color: ${Color.Secondary};

  ${Media.LG} {
    width: 688px;
  }

  ${Media.MD} {
    width: 272px;
  }
`;

const Name = styled.h2`
  font-size: 32px;
  line-height: 44px;

  ${Media.MD} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Email = styled.h2`
  font-size: 32px;
  line-height: 44px;

  ${Media.MD} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const CreationTime = styled.h2`
  font-size: 32px;
  line-height: 44px;

  ${Media.MD} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const LogOut = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  line-height: 20px;
  background-color: ${Color.Primary};
  color: ${Color.ExtraLight};
  border-radius: 16px;
  cursor: pointer;

  :active,
  :hover {
    background-color: ${Color.PrimaryLight};
  }
`;

export { StyledAccount, Name, Title, Container, Email, CreationTime, LogOut };
