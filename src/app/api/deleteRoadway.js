export const deleteRoadway = async (roadwayId) => {
    try {
      const response = await fetch(`http://localhost:9000/roadway/delete/${roadwayId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
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
  