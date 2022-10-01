import { Input, SearchButton, StyledSearch } from "./styles";

export const Search = () => {
  return (
    <StyledSearch>
      <Input type="search" placeholder="Search" />
      <SearchButton>Search</SearchButton>
    </StyledSearch>
  );
};
