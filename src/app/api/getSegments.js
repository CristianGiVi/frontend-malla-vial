export const getSegments = async () => {
  const response = await fetch(`http://localhost:9000/segmentdetails`);
  const data = await response.json();
  return data;
};
