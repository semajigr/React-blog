import { Search } from "../../components/Search/Search";
import { SearchArticle } from "../../components/SearchArticle/SearchArticle";
import { SearchBlog } from "../../components/SearchBlog/SearchBlog";
import { useInput } from "../../hooks/useInput";
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
