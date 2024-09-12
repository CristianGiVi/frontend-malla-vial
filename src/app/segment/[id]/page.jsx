"use client"; // siempre que se usa un hook

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import result from "@/app/mocks/result.json";
import SegmentDetails from "@/app/components/SegmentDetails";
import ListCurbs from "@/app/components/ListCurbs";
import ListRoadways from "@/app/components/ListRoadways";
import AddCurbModal from "@/app/components/modals/AddCurbModal";
import AddRoadwayModal from "@/app/components/modals/AddRoadwayModal";
import EditSegmentModal from "@/app/components/modals/EditSegmentModal";

const SegmentPage = ({ params }) => {
  const [segment, setSegment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModalAddCurb, setShowModalAddCurb] = useState(false);
  const [showModalAddRoadway, setShowModalAddRoadway] = useState(false);
  const [showModalEditSegment, setShowModalEditSegment] = useState(false);

  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    try {
      const segmentId = parseInt(id, 10);
      const response = result.find((seg) => seg.id === segmentId);

      setSegment(response);
      setLoading(false);
    } catch (error) {
      console.error("Error al cargar el segmento:", error);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <p>Cargando segmento...</p>;
  }

  if (!segment) {
    return <p>Segmento no encontrado</p>;
  }
  return (
    <div className="container mt-4">

      {/* Botón de regresar */}
      <button
        className="btn btn-secondary position-absolute"
        style={{ top: "20px", left: "20px" }}
        onClick={() => router.back()}
      >
        &#8592; Regresar
      </button>


      {/* Detalles del segmento */}
      <SegmentDetails segment={segment} />

      {/* Botón para editar el segmento */}
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-success"
          onClick={() => {
            setShowModalEditSegment(true);
          }}
        >
          EDITAR SEGMENTO
        </button>
      </div>

      {/* Dividir las tablas en dos columnas */}
      <div className="row mt-4">
        {/* Tabla de bordillos (ListCurbs) */}
        <div className="col-md-6">
          <h3>Bordillos</h3>
          <ListCurbs />
          {/* Botón para crear un bordillo */}
          <div className="d-flex justify-content-center mt-3">
            <button
              className="btn btn-success"
              onClick={() => setShowModalAddCurb(true)}
            >
              AÑADIR NUEVO BORDILLO
            </button>
          </div>
        </div>

        {/* Tabla de calzadas (ListRoadways) */}
        <div className="col-md-6">
          <h3>Calzadas</h3>
          <ListRoadways />
          {/* Botón para crear una calzada */}
          <div className="d-flex justify-content-center mt-3">
            <button
              className="btn btn-success"
              onClick={() => setShowModalAddRoadway(true)}
            >
              AÑADIR NUEVA CALZADA
            </button>
          </div>
        </div>
      </div>
      <AddCurbModal
        show={showModalAddCurb}
        handleClose={() => setShowModalAddCurb(false)}
      />
      <AddRoadwayModal
        show={showModalAddRoadway}
        handleClose={() => setShowModalAddRoadway(false)}
      />
      <EditSegmentModal
        id={id}
        show={showModalEditSegment}
        handleClose={() => setShowModalEditSegment(false)}
      />
    </div>
  );
};

export default SegmentPage;

// import { getSegment } from "@/app/api/getSegment";

/*   useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getSegment(id);
        setSegment(response);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar el segmento:", error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);  */
