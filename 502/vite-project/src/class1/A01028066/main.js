import { fetchData } from './utils/api.tsx';

// Espera a que todo el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', async () => {
  document.body.style.display = 'flex';
  document.body.style.flexDirection = 'column';
  document.body.style.alignItems = 'center';

  try {
    // Llama a la función fetchData para obtener los posts desde una API falsa
    const data = await fetchData('https://jsonplaceholder.typicode.com/posts');

    // Selecciona el contenedor donde se insertarán los posts
    const container = document.getElementById('posts-container');
    container.style.maxWidth = '800px'; // Establece el ancho máximo
    container.style.marginTop = '20px'; // Margen superior para separación

    // Itera sobre cada post recibido y lo muestra en el DOM
    data.forEach(({ title, body }) => {
      const postElement = document.createElement('div');
      postElement.className = 'post'; // Clase para estilos CSS
      postElement.innerHTML = `<h2>${title}</h2><p>${body}</p>`;
      container.appendChild(postElement); // Añade el post al contenedor
    });
  } catch (error) {
    // Si ocurre un error al obtener los datos, lo muestra en la consola
    console.error('Error fetching posts:', error);
  }
});
