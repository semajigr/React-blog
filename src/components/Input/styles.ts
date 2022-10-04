import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledInput = styled.input`
  width: 100%;
  padding: 18px;
  margin-top: 8px;
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 20px;
  background-color: ${Color.Light};
  border: 1px solid ${Color.Shadow};
  color: ${Color.Medium};
`;

export { StyledInput };
