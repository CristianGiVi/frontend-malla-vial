"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { getSegment } from "@/app/api/getSegment";

import SegmentDetails from "@/app/components/SegmentDetails";
import ListCurbs from "@/app/components/ListCurbs";
import ListRoadways from "@/app/components/ListRoadways";
import AddCurbModal from "@/app/components/modals/AddCurbModal";
import AddRoadwayModal from "@/app/components/modals/AddRoadwayModal";
import EditSegmentModal from "@/app/components/modals/EditSegmentModal";

const SegmentPage = ({ params }) => {
  const [segment, setSegment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModalAddCurb, setShowModalAddCurb] = useState(false);
  const [showModalAddRoadway, setShowModalAddRoadway] = useState(false);
  const [showModalEditSegment, setShowModalEditSegment] = useState(false);

  const router = useRouter();
  const { id } = params;

   useEffect(() => {
    const fetchSegment = async () => {
      try {
        const response = await getSegment(id);
        if (response) {
          setSegment(response);
        } else {
          setSegment(null);
        }
      } catch (error) {
        console.error("Error al cargar el segmento:", error);
        setSegment(null);
      } finally {
        setLoading(false);
      }
    };
    fetchSegment();
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
        onClick={() => router.push(`/`)}
      >
        &#8592; REGRESAR
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
          <ListCurbs segmentId={id}/>
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
          <ListRoadways segmentId={id}/>
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
        segmentId={id}  
      />
      <AddRoadwayModal
        show={showModalAddRoadway}
        handleClose={() => setShowModalAddRoadway(false)}
        segmentId={id}
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

