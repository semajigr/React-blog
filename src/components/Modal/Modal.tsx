import { Portal, PortalTarget } from "../Portal/Portal";
import { Button, StyledModal, Title } from "./styles";

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const Modal = ({ toggleModal }: IProps) => {
  return (
    <Portal target={PortalTarget.MODAL}>
      <StyledModal>
        <Title>Authorization Successful!</Title>
        <Button type="button" onClick={() => toggleModal(false)}>
          Got it
        </Button>
      </StyledModal>
    </Portal>
  );
};
