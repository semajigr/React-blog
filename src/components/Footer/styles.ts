import styled from "styled-components";
import { space } from "styled-system";
import { Color } from "../../ui/colors";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
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
