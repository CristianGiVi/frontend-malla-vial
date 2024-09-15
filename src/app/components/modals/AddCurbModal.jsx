import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { createCurb } from "@/app/api/createCurb";

const AddCurbModal = ({ show, handleClose, segmentId }) => {

    const [curbId, setCurbId] = useState("");
    const [curbLength, setCurbLength] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!curbId || !curbLength|| curbLength < 1) {
          alert("Por favor complete todos los campos con datos validos.");
          return;
        }
    
        const newCurb = {
          curbId: curbId,
          length: parseFloat(curbLength),
          segmentId: segmentId
        };
    
        try {
          await createCurb(newCurb);
          alert("Bordillo creado exitosamente");
          window.location.reload();
        } catch (error) {
          alert("Hubo un error al crear el bordillo");
        } finally {
          setCurbId("");
          setCurbLength("");
          handleClose();
        }
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
                  value={curbLength}
                  onChange={(e) => setCurbLength(e.target.value)}
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