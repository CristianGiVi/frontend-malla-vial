import { Modal, Button } from "react-bootstrap";
import { deleteSegment } from "@/app/api/deleteSegment";

const DeleteSegmentModal = ({ segmentId, show, handleClose }) => {

  const handleDelete = async () => {
    const success = await deleteSegment(segmentId);
    if (success) {
      alert(`Segmento ${segmentId} borrado exitosamente`);
      window.location.reload();
    } else {
      alert("Error al intentar eliminar el segmento");
    }

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
