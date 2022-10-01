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
  margin-bottom: 40px;
`;

const ButtonTab = styled.button`
  padding: 0 40px 15px 40px;
  font-size: 16px;
  line-height: 24px;
  background: transparent;
  color: ${Color.Secondary};

  &:active,
  :focus {
    border-bottom: 1px solid ${Color.Secondary};
    color: ${Color.Primary};
  }
`;

export { StyledTabbar, ButtonTab, ContainerTab };
