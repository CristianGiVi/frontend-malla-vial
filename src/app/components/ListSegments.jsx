"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import segmentos from "@/app/mocks/segmentos.json";

import AddSegmentModal from "@/app/components/modals/AddSegmentModal";
import DeleteSegmentModal from "@/app/components/modals/DeleteSegmentModal"; // Importar el nuevo modal

const ListSegments = () => {
  const router = useRouter();

  const [segments, setSegments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModalAddSegment, setShowModalAddSegment] = useState(false);
  const [showModalDeleteSegment, setShowModalDeleteSegment] = useState(false);
  const [segmentId, setSegmentId] = useState(0);

  useEffect(() => {
    try {
      const response = segmentos;
      setSegments(response);
      setLoading(false);
    } catch (error) {
      console.error("Error al cargar los segmentos:", error);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Cargando segmentos...</p>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h1 className="display-4">Segmentos de la malla vial</h1>
          <p className="lead">
            A continuación se muestra la información de los segmentos viales,
            donde podrás gestionar los detalles de cada uno.
          </p>
        </div>
        <div className="col-md-4 text-md-end text-center mt-3 mt-md-0">
          <button
            className="btn btn-primary btn-lg"
            onClick={() => setShowModalAddSegment(true)}
          >
            AÑADIR SEGMENTO
          </button>
        </div>
      </div>

      {/* Descripción adicional */}
      <div className="alert alert-info mt-4">
        Aquí podrás ver la información sobre los segmentos, añadir nuevos,
        eliminar existentes y modificar los datos de cada uno.
      </div>

      {/* Tabla de segmentos */}
      <div
        className="table-responsive"
        style={{ maxHeight: "600px", overflowY: "auto" }}
      >
        <table className="table table-bordered table-hover mt-4">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Dirección</th>
              <th scope="col">Largo (m)</th>
              <th scope="col">Cantidad Calzadas</th>
              <th scope="col">Cantidad Bordillos</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          {segments.length > 0 ? (
            <tbody>
              {segments.map((segment) => (
                <tr key={segment.id}>
                  <th scope="row">{segment.id}</th>
                  <td>{segment.direccion}</td>
                  <td>{segment.largo}</td>
                  <td>{segment.cantidad_calzadas}</td>
                  <td>{segment.cantidad_bordillos}</td>
                  <td>
                    {/* Botón 'Examinar' */}
                    <button
                      className="btn btn-info btn-sm me-2"
                      onClick={() => router.push(`/segment/${segment.id}`)}
                    >
                      EXAMINAR
                    </button>
                    {/* Botón para eliminar */}
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        setSegmentId(segment.id);
                        setShowModalDeleteSegment(true);
                      }}
                    >
                      ELIMINAR
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="6" className="text-center">
                  No hay segmentos disponibles para mostrar.
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>

      {/* Modal para añadir nuevo segmento */}
      <AddSegmentModal
        show={showModalAddSegment}
        handleClose={() => setShowModalAddSegment(false)}
      />
      <DeleteSegmentModal
        segmentId={segmentId}
        show={showModalDeleteSegment}
        handleClose={() => setShowModalDeleteSegment(false)}
      />
    </div>
  );
};

export default ListSegments;

// import { getSegments } from "../api/getSegments";

/*   useEffect(() => {
    const fetchSegments = async () => {
      try {
        const response = await getSegments();
        setSegments(response);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar los segmentos:", error);
        setLoading(false);
      }
    };
    fetchSegments();
  }, []);  */
