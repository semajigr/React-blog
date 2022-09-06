import styled from "styled-components";
import { Color } from "../../ui/colors";
import { space } from "styled-system";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterCopyRight = styled.h3`
  ${space};
`;

const FooterToggle = styled.h3``;

export { StyledFooter, FooterCopyRight, FooterToggle };
