import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { createRoadway } from "@/app/api/createRoadway";

const AddRoadwayModal = ({ show, handleClose, segmentId }) => {

    const [roadWayId, setRoadwayId] = useState("");
    const [roadwayLength, setRoadwayLength] = useState("");

    const handleSubmit = async(event) => {
        event.preventDefault();
    
        if (!roadWayId || !roadwayLength|| roadwayLength < 1) {
          alert("Por favor complete todos los campos con datos validos.");
          return;
        }
    
        const newRoadway = {
          roadwayId: roadWayId,
          length: parseFloat(roadwayLength),
          segmentId: segmentId
        };
    
        try {
          await createRoadway(newRoadway);
          alert("Calzada creada exitosamente");
          window.location.reload();
        } catch (error) {
          alert("Hubo un error al crear la calzada");
        } finally {
          setRoadwayId("");
          setRoadwayLength("");
          handleClose();
        }
      };
    
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Añadir una nueva calzada</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="curbId">ID de la calzada</label>
                <input
                  type="number"
                  className="form-control"
                  id="curbId"
                  value={roadWayId}
                  onChange={(e) => setRoadwayId(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="length">Largo de la calzada</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  id="length"
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
              CREAR
            </Button>
          </Modal.Footer>
        </Modal>
      );
    };


export default AddRoadwayModal