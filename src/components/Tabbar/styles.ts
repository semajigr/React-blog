import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledTabbar = styled.div`
  margin-top: 40px;
  margin-bottom: 64px;
  border-bottom: 2px solid ${Color.Light};
`;

const ButtonTab = styled.button`
  font-size: 16px;
  line-height: 24px;
  padding: 10px 10px;
  margin-right: 10px;
  background: none;
`;

export { StyledTabbar, ButtonTab };
