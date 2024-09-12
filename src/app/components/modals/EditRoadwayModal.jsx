import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const EditRoadwayModal = ({ id, show, handleClose }) => {
  const [roadwayId, setRoadwayId] = useState("");
  const [roadwayLength, setRoadwayLength] = useState(""); // Cambiado a "Length" correctamente

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!roadwayId || !roadwayLength || roadwayLength < 1) {
      alert("Por favor complete todos los campos con datos válidos.");
      return;
    }

    const newRoadway = {
      id: roadwayId,
      length: parseFloat(roadwayLength),
    };

    console.log(JSON.stringify(newRoadway, null, 2));

    setRoadwayId("");
    setRoadwayLength(""); // Cambiado a "Length" correctamente

    handleClose();
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
