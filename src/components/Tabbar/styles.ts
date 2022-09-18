import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledTabbar = styled.div`
  border-bottom: 2px solid ${Color.Light};
  margin-top: 40px;
  margin-bottom: 64px;
`;

const ButtonTab = styled.button`
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  background: transparent;
  padding: 0 40px 24px 40px;

  &:active,
  :focus {
    border-bottom: 2px solid ${Color.Secondary};
  }
`;

export { StyledTabbar, ButtonTab };
