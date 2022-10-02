import { ChangeEvent } from "react";
import { Input, StyledSearch } from "./styles";

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ value, onChange }: IProps) => {
  return (
    <StyledSearch>
      <Input type="search" placeholder="Search" value={value} onChange={onChange} />
    </StyledSearch>
  );
};
