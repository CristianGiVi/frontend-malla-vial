"use client";

import { useState, useEffect } from "react";
import { getCurbs } from "@/app/api/getCurbs";

import DeleteCurbModal from "./modals/DeleteCurbModal";
import EditCurbModal from "./modals/EditCurbModal";

const ListCurbs = ({segmentId}) => {
  const [curbs, setCurbs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModalDeleteCurb, setShowModalDeleteCurb] = useState(false);
  const [curbId, setCurbId] = useState(false);
  const [showModalEditCurb, setShowModalEditCurb] = useState(false);

  useEffect(() => {
    const fetchCurbs = async () => {
      try {
        const response = await getCurbs(segmentId);
        setCurbs(response);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar los bordillos:", error);
        setLoading(false);
      }
    };
    fetchCurbs();
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
                  <th scope="row">{curb.curbId}</th>
                  <td>{curb.length}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm me-2"
                      onClick={() => {
                        setCurbId(curb.curbId);
                        setShowModalDeleteCurb(true);
                      }}
                    >
                      ELIMINAR
                    </button>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => {
                        setCurbId(curb.curbId);
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

