const SegmentDetails = ({ segment }) => {
  const { direccion, largo, cantidad_calzadas, cantidad_bordillos, id } = segment;

  return (
    <div className="card w-50 mx-auto mb-4">
      <div className="card-header text-center">
        <h2 className="card-title">Detalles del Segmento</h2>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>ID: </strong> {id}
          </li>
          <li className="list-group-item">
            <strong>Dirección: </strong> {direccion}
          </li>
          <li className="list-group-item">
            <strong>Largo: </strong> {largo} metros
          </li>
          <li className="list-group-item">
            <strong>Cantidad de calzadas: </strong> {cantidad_calzadas}
          </li>
          <li className="list-group-item">
            <strong>Cantidad de bordillos: </strong> {cantidad_bordillos}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SegmentDetails;
