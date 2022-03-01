export const getPhysicians = async () => {
    try {
      let res = await fetch("/api/physicians");
      return await res.json();
    } catch (err) {
      console.log(err)
    }

  }

