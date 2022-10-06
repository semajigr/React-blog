import { CloseIcon } from "assets";
import styled from "styled-components";
import { Color } from "ui/colors";

const StyledClose = styled.button`
  width: 24px;
  height: 24px;
  background: none;
`;

const ClosesIcon = styled(CloseIcon)`
  .cls-1 {
    stroke: ${Color.Secondary};
  }
`;

export { StyledClose, ClosesIcon };
