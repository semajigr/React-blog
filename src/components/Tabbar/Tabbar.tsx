import { CustomSelectArticle, CustomSelectBlog } from "components";
import { useToggle } from "hooks/useToggle";
import { ButtonTab, ButtonTabIsActive, ContainerTab, StyledTabbar } from "./styles";

interface IProps {
  tab: string;
  setTab: (tab: string) => void;
}

export const Tabbar = ({ setTab, tab }: IProps) => {
  const [isActive, setIsActive] = useToggle(false);

  const handleArticle = () => {
    setTab("articles");
    setIsActive();
  };

  const handleBlog = () => {
    setTab("blogs");
    setIsActive();
  };

  return (
    <StyledTabbar>
      <ContainerTab>
        {tab === "articles" ? (
          <ButtonTabIsActive>Articles</ButtonTabIsActive>
        ) : (
          <ButtonTab onClick={handleArticle}>Articles</ButtonTab>
        )}
        <ButtonTab onClick={handleBlog}>Blogs</ButtonTab>
      </ContainerTab>
      {isActive ? <CustomSelectArticle /> : <CustomSelectBlog />}
    </StyledTabbar>
  );
};
