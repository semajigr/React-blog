import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledModal = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Color.Error};
  z-index: 10;
`;

const Title = styled.h2`
  color: ${Color.Error};
`;

const Button = styled.button`
  background-color: ${Color.Primary};
`;

export { StyledModal, Title, Button };
