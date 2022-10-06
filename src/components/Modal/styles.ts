import styled from "styled-components";
import { Color } from "ui/colors";

const Container = styled.div`
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;

const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -100px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  padding: 30px 20px;
  background-color: ${Color.Gray};
  border-radius: 16px;
`;

const Title = styled.h2`
  color: ${Color.Secondary};
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const Button = styled.button`
  background-color: ${Color.Primary};
  color: ${Color.White};
  width: 50%;
  font-size: 16px;
  font-weight: bold;
  padding: 20px;
  border-radius: 16px;
  color: ${Color.Secondary};

  :hover,
  :active {
    background-color: ${Color.PrimaryLight};
  }
`;

export { Container, StyledModal, ModalContent, Title, Button };
