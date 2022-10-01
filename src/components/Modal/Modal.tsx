import { useNavigate } from "react-router-dom";
import { Portal, PortalTarget } from "../Portal/Portal";
import { Button, Container, ModalContent, StyledModal, Title } from "./styles";

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const Modal = ({ toggleModal }: IProps) => {
  const navigate = useNavigate();
  return (
    <Portal target={PortalTarget.MODAL}>
      <Container>
        <StyledModal>
          <ModalContent>
            <Title>Authorization Successful!</Title>
            <Button
              type="button"
              onClick={() => {
                toggleModal(false);
                navigate("/");
              }}
            >
              Got it
            </Button>
          </ModalContent>
        </StyledModal>
      </Container>
    </Portal>
  );
};
