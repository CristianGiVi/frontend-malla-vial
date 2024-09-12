import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AddCurbModal = ({ show, handleClose }) => {

    const [curbId, setCurbId] = useState("");
    const [curbLenght, setCurbLenght] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (!curbId || !curbLenght|| curbLenght < 1) {
          alert("Por favor complete todos los campos con datos validos.");
          return;
        }
    
        const newCurb = {
          id: curbId,
          length: parseFloat(curbLenght),
        };
    
        console.log(JSON.stringify(newCurb, null, 2));

        setCurbId("");
        setCurbLenght("");
    
        handleClose();
      };
    
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Añadir un nuevo bordillo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="curbId">ID del Bordillo</label>
                <input
                  type="number"
                  className="form-control"
                  id="curbId"
                  value={curbId}
                  onChange={(e) => setCurbId(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="length">Largo del bordillo</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  id="length"
                  value={curbLenght}
                  onChange={(e) => setCurbLenght(e.target.value)}
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

export default AddCurbModal