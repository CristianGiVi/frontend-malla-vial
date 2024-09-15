import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import { createSegment } from "@/app/api/createSegment";

const AddSegmentModal = ({ show, handleClose }) => {
  const [segmentId, setSegmentId] = useState("");
  const [address, setAddress] = useState("");
  const [length, setLength] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!segmentId || !address || !length || length < 1) {
      alert("Por favor complete todos los campos con datos validos.");
      return;
    }

    const newSegment = {
      segmentId: parseInt(segmentId, 10),
      address: address,
      length: parseFloat(length),
    };

    try {
      await createSegment(newSegment);
      alert("Segmento creado exitosamente");
      window.location.reload();
    } catch (error) {
      alert("Hubo un error al crear el segmento");
    } finally {
      setSegmentId("");
      setAddress("");
      setLength("");
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Añadir un nuevo segmento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="segmentId">ID del Segmento</label>
            <input
              type="number"
              className="form-control"
              id="segmentId"
              value={segmentId}
              onChange={(e) => setSegmentId(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="address">Dirección del Segmento</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="length">Largo del Segmento</label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              id="length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
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

export default AddSegmentModal;
