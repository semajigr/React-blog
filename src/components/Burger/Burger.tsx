import { BurgersIcon, StyledBurger } from "./styles";

interface IProps {
  type: "button" | "submit";
  onClick: () => void;
}

export const Burger = ({ onClick }: IProps) => {
  return (
    <StyledBurger onClick={onClick} type={"button"}>
      <BurgersIcon />
    </StyledBurger>
  );
};
