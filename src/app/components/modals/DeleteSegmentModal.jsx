import { Modal, Button } from "react-bootstrap";

const DeleteSegmentModal = ({ segmentId, show, handleClose }) => {

  // Confirmar la eliminación
  const handleDelete = () => {
    console.log(`segmento ${segmentId} borrado`)
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar el segmento con ID <strong>{segmentId}</strong>? Esta acción no se puede deshacer.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteSegmentModal;
