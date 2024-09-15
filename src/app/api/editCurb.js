export const editCurb = async (id, updatedCurb) => {
    try {
      const response = await fetch(`http://localhost:9000/curb/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCurb),
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
  