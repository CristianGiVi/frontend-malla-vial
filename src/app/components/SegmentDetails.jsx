const SegmentDetails = ({ segment }) => {
  const { address, length, segmentId } = segment.segment;
  const {amountCurbs, amountRoadways} = segment;

  return (
    <div className="card w-50 mx-auto mb-4">
      <div className="card-header text-center">
        <h2 className="card-title">Detalles del Segmento</h2>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>ID: </strong> {segmentId}
          </li>
          <li className="list-group-item">
            <strong>Dirección: </strong> {address}
          </li>
          <li className="list-group-item">
            <strong>Largo: </strong> {length} metros
          </li>
          <li className="list-group-item">
            <strong>Cantidad de calzadas: </strong> {amountRoadways}
          </li>
          <li className="list-group-item">
            <strong>Cantidad de bordillos: </strong> {amountCurbs}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SegmentDetails;
