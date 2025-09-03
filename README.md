# 📝 Lista de Tareas React

Aplicación web desarrollada con **React** que permite gestionar tareas de forma intuitiva y profesional. Esta práctica incluye funcionalidades completas de **CRUD**, filtrado por prioridad, validaciones visuales y diseño responsive mobile-first.

---

## 🌐 DEspliegue

> Puedes incluir capturas de pantalla aquí si lo deseas, mostrando el formulario, la lista de tareas y el modal de edición.

---

## 🚀 Funcionalidades

- ✅ **Agregar tareas** con descripción y prioridad (secundaria o prioritaria)
- ✏️ **Editar tareas** en un modal superpuesto con validación visual
- 🗑️ **Eliminar tareas** individualmente
- 📌 **Marcar como completadas o pendientes**
- 🔍 **Filtrar tareas** por importancia (todas, prioritarias, secundarias)
- ⚠️ **Validación de duplicados** y campos vacíos con mensajes visuales
- 📱 **Diseño mobile-first** con media queries para pantallas grandes

---

## 🛠️ Tecnologías utilizadas

- **React** con `useState` para manejo de estado
- **CSS puro** con variables, clases universales y media queries
- **Vite** como entorno de desarrollo rápido
- **Git & GitHub** para control de versiones y despliegue

---

## 📐 Estructura del proyecto

src/
├── components/
│ ├── TaskForm.jsx
│ ├── TaskList.jsx
│ ├── TaskItem.jsx
│ ├── TaskFilter.jsx
│ └── TaskEditor.jsx
├── styles/
│ ├── App.css
│ ├── form.css
│ └── modal.css
├── App.jsx
└── main.jsx

---

## 🎨 Diseño y experiencia de usuario

- Estilos organizados por contexto: `App.css` para globales, `form.css` y `modal.css` para componentes específicos
- Clases universales como `.btn`, `.error`, `.modal-overlay` para mantener consistencia
- Paleta de colores accesible y moderna usando variables CSS
- Layout adaptable con `flex`, `gap`, y `clamp()` para tipografía fluida

---

## 📦 Instalación y ejecución

**Clonar el repositorio**
git clone https://github.com/tu-usuario/lista-tareas-react.git

**Instalar dependencias**
npm install

**Ejecutar en modo desarrollo**
npm run dev

---

## 🧠 Aprendizajes clave

Modularización de componentes con lógica clara y reutilizable

- Manejo de estado global vs. local
- Validaciones visuales y semántica
- Diseño mobile-first y escalabilidad visual
- Buenas prácticas con Git y estructura de carpetas

---

📄 Licencia
Este proyecto está bajo la licencia MIT. Puedes usarlo libremente con atribución.

---

## 📬 Contacto

Desarrollado por Gonzalo Montoya si te gustó, ¡dale una estrella ⭐ en GitHub!📍 Apartadó, Antioquia, Colombia
