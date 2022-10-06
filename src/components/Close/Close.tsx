import { ClosesIcon, StyledClose } from "./styles";

interface IProps {
  type: "button" | "submit";
  onClick: () => void;
}

export const Close = ({ onClick }: IProps) => {
  return (
    <StyledClose type={"button"} onClick={onClick}>
      <ClosesIcon />
    </StyledClose>
  );
};
