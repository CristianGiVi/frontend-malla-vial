export const getRoadways = async (id) => {
    const response = await fetch(`http://localhost:9000/roadwaysbysegment/${id}`);
    const data = await response.json();
    return data;
  };