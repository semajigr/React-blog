import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledSearch = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${Color.ExtraLight};
  color: ${Color.Medium};
  font-size: 16px;
  line-height: 20px;
  padding: 10px;
  margin-bottom: 40px;
`;

export { StyledSearch, Input };
