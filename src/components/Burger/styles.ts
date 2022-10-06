import styled from "styled-components";
import { BurgerIcon } from "assets";
import { Color } from "ui/colors";

const StyledBurger = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-color: ${Color.White};
  color: ${Color.White};
`;

const BurgersIcon = styled(BurgerIcon)`
  path {
    stroke: ${Color.Secondary};
  }
  fill: ${Color.Secondary};
`;

export { StyledBurger, BurgersIcon };
