import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledSearch = styled.div`
  display: flex;
  margin-top: 20px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  line-height: 20px;
  background-color: ${Color.Primary};
  color: ${Color.White};
  cursor: pointer;

  :active,
  :hover {
    background-color: ${Color.Primary_Light};
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${Color.Extra_Light};
  color: ${Color.Medium};
  font-size: 16px;
  line-height: 20px;
  padding: 10px;
`;

export { StyledSearch, SearchButton, Input };
