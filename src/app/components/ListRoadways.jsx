"use client";

import { useState, useEffect } from "react";
import { getRoadways } from "@/app/api/getRoadways"

import DeleteRoadwayModal from "./modals/DeleteRoadwayModal";
import EditRoadwayModal from "./modals/EditRoadwayModal";

const ListRoadways = ({segmentId}) => {
  const [roadways, setRoadways] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModalDeleteRoadway, setShowModalDeleteRoadway] = useState(false);
  const [roadwayId, setRoadwayId] = useState(false);
  const [showModalEditRoadway, setShowModalEditRoadway] = useState(false);

  useEffect(() => {
    const fetchRoadways = async () => {
      try {
        const response = await getRoadways(segmentId);
        setRoadways(response);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar las calzadas:", error);
        setLoading(false);
      }
    };
    fetchRoadways();
  }, []);

  if (loading) {
    return <p>Cargando calzadas...</p>;
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
          {roadways.length > 0 ? (
            <tbody>
              {roadways.map((roadway) => (
                <tr key={roadway.id}>
                  <th scope="row">{roadway.roadwayId}</th>
                  <td>{roadway.length}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm me-2"
                      onClick={() => {
                        setRoadwayId(roadway.roadwayId);
                        setShowModalDeleteRoadway(true);
                      }}
                    >
                      ELIMINAR
                    </button>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => {
                        setRoadwayId(roadway.id);
                        setShowModalEditRoadway(true);
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
                  No hay calzadas disponibles para mostrar.
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
      <DeleteRoadwayModal
        roadwayId={roadwayId}
        show={showModalDeleteRoadway}
        handleClose={() => setShowModalDeleteRoadway(false)}
      />

      <EditRoadwayModal
        id={roadwayId}
        show={showModalEditRoadway}
        handleClose={() => setShowModalEditRoadway(false)}
      />
    </div>
  );
};

export default ListRoadways;

// buscar por llave foranea del id del segmento en las calzadas
