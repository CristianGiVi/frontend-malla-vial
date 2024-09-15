export const editRoadway = async (id, updatedRoadway) => {
    try {
      const response = await fetch(`http://localhost:9000/roadway/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRoadway),
      });
  
      if (!response.ok) {
        return false; // Devuelve false si hay algún error
      }
  
      return true; // Devuelve true si la actualización fue exitosa
    } catch (error) {
      console.error("Error al realizar la petición:", error);
      return false; // Devuelve false si hay una excepción
    }
  };
  