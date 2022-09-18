import { ButtonTab, StyledTabbar } from "./styles";

interface IProps {
  tab: string;
  setTab: (tab: string) => void;
}

export const Tabbar = ({ setTab }: IProps) => {
  return (
    <StyledTabbar>
      <ButtonTab
        onClick={() => {
          setTab("articles");
        }}
      >
        Articles
      </ButtonTab>
      <ButtonTab
        onClick={() => {
          setTab("blogs");
        }}
      >
        Blogs
      </ButtonTab>
    </StyledTabbar>
  );
};
