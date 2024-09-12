import React from "react";

import { useState, useEffect } from "react";
import bordillos from "@/app/mocks/bordillos.json";
import DeleteCurbModal from "./modals/DeleteCurbModal";
import EditCurbModal from "./modals/EditCurbModal";

const ListCurbs = () => {
  const [curbs, setCurbs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModalDeleteCurb, setShowModalDeleteCurb] = useState(false);
  const [curbId, setCurbId] = useState(false);
  const [showModalEditCurb, setShowModalEditCurb] = useState(false);

  useEffect(() => {
    try {
      const response = bordillos;
      setCurbs(response);
      setLoading(false);
    } catch (error) {
      console.error("Error al cargar los bordillos:", error);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Cargando bordillos...</p>;
  }

  return (
    <div className="container mt-4">
      <div
        className="table-responsive"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Largo</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          {curbs.length > 0 ? (
            <tbody>
              {curbs.map((curb) => (
                <tr key={curb.id}>
                  <th scope="row">{curb.id}</th>
                  <td>{curb.largo}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm me-2"
                      onClick={() => {
                        setCurbId(curb.id);
                        setShowModalDeleteCurb(true);
                      }}
                    >
                      ELIMINAR
                    </button>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => {
                        setCurbId(curb.id);
                        setShowModalEditCurb(true);
                      }}
                    >
                      EDITAR
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="3" className="text-center">
                  No hay bordillos disponibles para mostrar.
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>

      <DeleteCurbModal
        curbId={curbId}
        show={showModalDeleteCurb}
        handleClose={() => setShowModalDeleteCurb(false)}
      />
      <EditCurbModal
        id={curbId}
        show={showModalEditCurb}
        handleClose={() => setShowModalEditCurb(false)}
      />
    </div>
  );
};

export default ListCurbs;

// buscar por llave foranea del id del segmento en los bordillos
