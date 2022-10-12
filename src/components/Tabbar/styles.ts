import styled from "styled-components";
import { Color } from "ui/colors";
import { Media } from "ui/intex";

const StyledTabbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 64px;

  ${Media.MD} {
    flex-wrap: wrap;
  }
`;

const ContainerTab = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 16px;
`;

const ButtonTab = styled.button`
  padding: 0 40px 15px 40px;
  font-size: 16px;
  line-height: 24px;
  background: transparent;
  color: ${Color.Secondary};
  cursor: pointer;

  :hover {
    color: ${Color.PrimaryLight};
  }

  &:active,
  :focus {
    border-bottom: 1px solid ${Color.Secondary};
    color: ${Color.Primary};
  }
`;

const ButtonTabIsActive = styled(ButtonTab)`
  padding: 0 40px 15px 40px;
  font-size: 16px;
  line-height: 24px;
  background: transparent;
  border-bottom: 1px solid ${Color.Secondary};
  color: ${Color.Primary};
  cursor: pointer;

  :hover {
    color: ${Color.PrimaryLight};
  }

  &:active,
  :focus {
    border-bottom: 1px solid ${Color.Secondary};
    color: ${Color.Primary};
  }
`;

export { StyledTabbar, ButtonTab, ContainerTab, ButtonTabIsActive };
