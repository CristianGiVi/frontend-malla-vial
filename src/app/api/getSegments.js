export const getSegments = async () => {
  const response = await fetch(`https://reqres.in/api/users`);
  const data = await response.json();
  return data.data;
};
