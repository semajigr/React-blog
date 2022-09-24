import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledTabbar = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-bottom: 64px;
`;

const ContainerTab = styled.div`
  width: 100%;
  border-bottom: 2px solid ${Color.Medium};
  margin-bottom: 40px;
`;

const ButtonTab = styled.button`
  padding: 0 40px 24px 40px;
  font-size: 16px;
  line-height: 24px;
  background: transparent;
  color: ${Color.Secondary};

  &:active,
  :focus {
    border-bottom: 2px solid ${Color.Secondary};
  }
`;

export { StyledTabbar, ButtonTab, ContainerTab };
