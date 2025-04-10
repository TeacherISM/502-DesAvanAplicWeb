import { fetchData } from './utils/api.js';

document.addEventListener('DOMContentLoaded', async () => {
  // Centramos todo el body
  document.body.style.display = 'flex';
  document.body.style.flexDirection = 'column';
  document.body.style.alignItems = 'center';

  try {
    const data = await fetchData('https://jsonplaceholder.typicode.com/posts');
    const container = document.getElementById('posts-container');
    container.style.maxWidth = '800px'; 
    container.style.marginTop = '20px';

    data.forEach(({ title, body }) => {
      const postElement = document.createElement('div');
      postElement.className = 'post';
      postElement.innerHTML = `<h2>${title}</h2><p>${body}</p>`;
      container.appendChild(postElement);
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
});
