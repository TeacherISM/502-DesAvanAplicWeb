🚀 Travel Management System (React + Vite)
Este proyecto es una interfaz web para gestionar viajes empresariales. Se desarrolló como parte de un ejercicio práctico con React, Vite, Tailwind CSS, Styled Components y React Router.

Tecnologías utilizadas
React

Vite

TypeScript

Tailwind CSS

Styled Components

React Router

📦 Estructura del proyecto
src/
├── components/          → Botón, InputField, Menu  
├── Pages/               → Login, Dashboard, TravelRequestForm  
├── routes/              → AppRoutes con navegación  
├── utils/               → Lógica de fetch simulada  
└── App.tsx              → Estructura principal  
🔐 Funcionalidad principal
Login con asignación de roles (mock)
Puedes iniciar sesión desde /login.

El nombre de usuario determina el rol:

admin → vista de administrador

manager → vista de gerente

cualquier otro → vista de empleado

La contraseña puede ser cualquiera, ya que es una simulación.

Dashboard dinámico
El Dashboard se muestra con contenido diferente según el rol asignado:

Admin: puede administrar usuarios y configuración.

Manager: puede revisar y aprobar solicitudes de viaje.

Employee: puede enviar formularios de viaje y gastos.

Protección de rutas
No puedes acceder a /dashboard sin haber hecho login.

Se redirige automáticamente a /login si intentas acceder sin sesión.

Hooks utilizados
useState: manejar formularios, contador, errores.

useEffect: simula carga del login (loading).

useReducer: usado en el formulario de solicitud de viaje (TravelRequestForm).

Navegación
El proyecto incluye un menú en la parte superior para acceder fácilmente a:

Login

Dashboard

Travel Request Form

▶️ Cómo correr el proyecto
Clona el repositorio

Instala las dependencias:

bash
Copy
Edit
npm install
Corre el proyecto:

bash
Copy
Edit
npm run dev
Abre en el navegador:

arduino
Copy
Edit
http://localhost:5173/
📌 Notas
Este proyecto es un ejercicio práctico y no realiza validación real de credenciales ni conexión a una base de datos. Todo el comportamiento está simulado en frontend.
Josefina Santacruz del Valle
