import { Search, SearchArticle } from "components";
import { useInput } from "hooks/useInput";
import { StyledSearchPage } from "./styles";

export const SearchPage = () => {
  const searchInput = useInput();

  return (
    <StyledSearchPage>
      <Search {...searchInput} />
      <SearchArticle {...searchInput} />
    </StyledSearchPage>
  );
};
