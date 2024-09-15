import { Modal, Button } from "react-bootstrap";
import { deleteCurb } from "@/app/api/deleteCurb";

const DeleteCurbModal = ({ curbId, show, handleClose }) => {

  const handleDelete = async () => {
    const success = await deleteCurb(curbId);
    if (success) {
      alert(`Bordillo ${curbId} borrado exitosamente`);
      window.location.reload();
    } else {
      alert("Error al intentar eliminar el bordillo");
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
          ¿Estás seguro de que deseas eliminar el bordillo con ID{" "}
          <strong>{curbId}</strong>? Esta acción no se puede deshacer.
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

export default DeleteCurbModal;
