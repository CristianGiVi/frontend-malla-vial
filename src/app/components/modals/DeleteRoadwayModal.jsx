import { Modal, Button } from "react-bootstrap";

const DeleteRoadwayModal = ({ roadwayId, show, handleClose }) => {
    // Confirmar la eliminación
    const handleDelete = () => {
      console.log(`Calzada ${roadwayId} borrada`);
      handleClose();
    };
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmar Eliminación</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ¿Estás seguro de que deseas eliminar la calzada con ID{" "}
            <strong>{roadwayId}</strong>? Esta acción no se puede deshacer.
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
  
export default DeleteRoadwayModal