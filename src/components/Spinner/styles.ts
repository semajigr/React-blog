import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledSpinner = styled.div`
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border: 3px solid ${Color.Primary};
  border-top: 1px solid ${Color.Primary_Light};
  border-right: 1px solid transparent;
  border-radius: 50%;
  animation: 1s spin linear infinite;
  @keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export { StyledSpinner };
