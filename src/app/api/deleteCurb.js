export const deleteCurb = async (curbId) => {
    try {
      const response = await fetch(`http://localhost:9000/curb/delete/${curbId}`, {
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
  