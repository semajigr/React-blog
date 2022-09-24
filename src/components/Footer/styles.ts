import styled from "styled-components";
import { space } from "styled-system";
import { Media } from "../../ui/breakpoints";
import { Color } from "../../ui/colors";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 20px;
  border-top: 1px solid ${Color.Medium};

  ${Media.MD} {
    align-items: center;
    flex-direction: column;
  }
`;

const CopyRight = styled.h3`
  color: ${Color.Medium};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const Text = styled.h3`
  color: ${Color.Medium};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export { StyledFooter, CopyRight, Text };
