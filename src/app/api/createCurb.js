export const createCurb = async (newCurb) => {
    try {
      const response = await fetch("http://localhost:9000/curb/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCurb),
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
  