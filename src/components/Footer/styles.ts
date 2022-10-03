import styled from "styled-components";
import { Media } from "../../ui/intex";
import { Color } from "../../ui/colors";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
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

const ThemeFooter = styled.button`
  padding: 10px;
  border-radius: 5px;
`;

export { StyledFooter, CopyRight, Text, ThemeFooter };
