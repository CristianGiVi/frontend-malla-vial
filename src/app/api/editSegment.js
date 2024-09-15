export const editSegment = async (id, updatedSegment) => {
    try {
      const response = await fetch(`http://localhost:9000/segment/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedSegment),
      });
  
      if (!response.ok) {
        return false;
      }
  
      return true;
    } catch (error) {
      console.error("Error al realizar la petición:", error);
      return false;
    }
  };
  