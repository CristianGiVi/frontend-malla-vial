import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AddRoadwayModal = ({ show, handleClose }) => {

    const [roadWayId, setRoadwayId] = useState("");
    const [roadwayLenght, setRoadwayLenght] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (!roadWayId || !roadwayLenght|| roadwayLenght < 1) {
          alert("Por favor complete todos los campos con datos validos.");
          return;
        }
    
        const newRoadway = {
          id: roadWayId,
          length: parseFloat(roadwayLenght),
        };
    
        console.log(JSON.stringify(newRoadway, null, 2));

        setRoadwayId("");
        setRoadwayLenght("");
    
        handleClose();
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
                  value={roadwayLenght}
                  onChange={(e) => setRoadwayLenght(e.target.value)}
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