import { CustomSelect } from "../CustomSelect/CustomSelect";
import { ButtonTab, ContainerTab, StyledTabbar } from "./styles";

interface IProps {
  tab: string;
  setTab: (tab: string) => void;
}

export const Tabbar = ({ setTab }: IProps) => {
  return (
    <StyledTabbar>
      <ContainerTab>
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
      </ContainerTab>
      <CustomSelect />
    </StyledTabbar>
  );
};
