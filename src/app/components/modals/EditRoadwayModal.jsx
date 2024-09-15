import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { editRoadway } from "@/app/api/editRoadway";

const EditRoadwayModal = ({ id, show, handleClose }) => {
  const [roadwayId, setRoadwayId] = useState("");
  const [roadwayLength, setRoadwayLength] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!roadwayId || !roadwayLength || roadwayLength < 1) {
      alert("Por favor complete todos los campos con datos válidos.");
      return;
    }

    const updatedRoadway = {
      roadwayId: roadwayId,
      length: parseFloat(roadwayLength),
    };

    try {
      const success = await editRoadway(id, updatedRoadway);
      if (success) {
        alert("Calzada actualizado exitosamente");
        window.location.reload();
      } else {
        alert("Hubo un error al actualizar la calzada");
      }
    } catch (error) {
      alert("Hubo un error al actualizar el segmento");
    } finally {
      setRoadwayId("");
      setRoadwayLength("");
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar la calzada {id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="roadwayId">ID de la calzada</label>
            <input
              type="number"
              className="form-control"
              id="roadwayId"
              value={roadwayId}
              onChange={(e) => setRoadwayId(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="roadwayLength">Largo de la calzada</label> {/* Cambiado a "Length" */}
            <input
              type="number"
              step="0.01"
              className="form-control"
              id="roadwayLength" // Cambiado a "Length" correctamente
              value={roadwayLength}
              onChange={(e) => setRoadwayLength(e.target.value)}
              required
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          CERRAR
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          EDITAR
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditRoadwayModal;
