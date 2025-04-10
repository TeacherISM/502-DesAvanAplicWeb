export const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Error al obtener datos');
      return await response.json();
    } catch (error) {
      console.error('Error en fetch:', error);
      return [];
    }
  };
  