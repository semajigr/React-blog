import { CustomSelect } from "../CustomSelect/CustomSelect";
import { ButtonTab, ContainerTab, StyledTabbar } from "./styles";

interface IProps {
  tab: string;
  setTab: (tab: string) => void;
}

export const Tabbar = ({ setTab }: IProps) => {
  const handleArticle = () => {
    setTab("articles");
  };

  const handleBlog = () => {
    setTab("blogs");
  };

  return (
    <StyledTabbar>
      <ContainerTab>
        <ButtonTab onClick={handleArticle}>Articles</ButtonTab>
        <ButtonTab onClick={handleBlog}>Blogs</ButtonTab>
      </ContainerTab>
      <CustomSelect />
    </StyledTabbar>
  );
};
