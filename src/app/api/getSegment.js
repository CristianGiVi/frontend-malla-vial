export const getSegment = async (id) => {
  const response = await fetch(`http://localhost:9000/segmentdetails/${id}`);
  const data = await response.json();
  return data;
};
  