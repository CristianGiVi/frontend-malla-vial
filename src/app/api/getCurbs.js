export const getCurbs = async (id) => {
    const response = await fetch(`http://localhost:9000/curbsbysegment/${id}`);
    const data = await response.json();
    return data;
  };