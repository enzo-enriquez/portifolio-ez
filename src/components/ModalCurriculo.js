import { Modal, Button } from "react-bootstrap";

function ModalCurriculo({ show, handleClose, imagem }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Meu Currículo</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <img
          src={imagem}
          alt="Currículo"
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCurriculo;
