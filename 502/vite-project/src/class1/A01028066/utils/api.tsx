// Función genérica para hacer una solicitud fetch a una URL y obtener datos tipados
export async function fetchData<T>(url: string): Promise<T> {
  // Realiza la petición a la URL especificada
  const response = await fetch(url);

  // Verifica si la respuesta es exitosa (código 200–299)
  if (!response.ok) {
    // Si no es exitosa, lanza un error con el mensaje de la respuesta
    throw new Error(`Error: ${response.statusText}`);
  }

  // Convierte la respuesta a JSON y la retorna como tipo T
  return await response.json();
}
