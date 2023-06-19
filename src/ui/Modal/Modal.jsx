import { REQUEST_STATUS } from "../../constants/constants";
import Container from "../Container/Container";
import ModalStatusError from "./ModalStatusError/ModalStatusError";
import ModalStatusSuccess from "./ModalStatusSuccess/ModalStatusSuccess";
import cn from "./Modal.module.scss";

function Modal({ modalStatus, onClose }) {
  return (
    <Container classname={cn.modal}>
      {modalStatus === REQUEST_STATUS.success ? (
        <ModalStatusSuccess />
      ) : (
        <ModalStatusError onClose={onClose} />
      )}
    </Container>
  );
}

export default Modal;
