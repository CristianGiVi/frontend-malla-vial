export const getSegment = async (id) => {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await response.json();
    return data.data;
  };
  