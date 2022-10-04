import { Search, SearchArticle, SearchBlog } from "components";
import { useInput } from "hooks/useInput";
import { StyledSearchPage } from "./styles";

export const SearchPage = () => {
  const articleInput = useInput();
  const blogInput = useInput();

  return (
    <StyledSearchPage>
      <Search {...articleInput} {...blogInput} />
      <SearchArticle {...articleInput} />
      <SearchBlog {...blogInput} />
    </StyledSearchPage>
  );
};
