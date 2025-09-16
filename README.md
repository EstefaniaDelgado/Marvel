# 🚀 Marvel Landing - Fullstack Test

Prueba técnica para desarrollador Web Full Stack.  
Este proyecto está dividido en **Frontend (React + Tailwind + Vite)** y **Backend (Express + DB)**.  

---

## 📂 Estructura del proyecto
```
marvel/
 ├── frontend/   # React + Tailwind (landing page)
 ├── backend/    # Express (API REST de characters)
 ├── .gitignore
 ├── .env.example
 └── README.md
```

---

<details>
<summary>🎨 Frontend</summary>

### Tecnologías
- React (con Vite)
- Tailwind CSS
- React Router
- Consumo de la API de Marvel

### Funcionalidades
- **Sección 1**: Slider de series/comics de Marvel.  
- **Sección 2**: Cards de personajes (12 iniciales de Marvel + los creados en el backend).  
- **Sección 3**: Formulario para crear un nuevo personaje (nombre, fecha, descripción, imagen).  
- **Extra (opcional)**: Vista detalle `/characters/:id` con descripción ampliada.  

### Instalación y ejecución
```bash
cd frontend
npm install
npm run dev
```

La app se iniciará en [http://localhost:5173](http://localhost:5173) (por defecto en Vite).
</details>

---

<details>
<summary>⚙️ Backend</summary>

### Tecnologías
- Node.js + Express
- Base de datos: ** MongoDB **


### Endpoints requeridos
- `POST /characters` → Crear personaje con:
  - `name` (alfabético)  
  - `date` (string alfabético)  
  - `description` (alfabético)  
  - `img` (url)  

- `GET /characters/:id` → Obtener personaje por ID  

- *(Opcional)* `GET /characters` → Listar todos los personajes creados  

### Instalación y ejecución
```bash
cd backend
npm install
npm run dev
```

El servidor correrá en [http://localhost:3000](http://localhost:3000) (configurable vía `.env`).
</details>

---

<details>
<summary>🔑 Variables de entorno</summary>

Debes crear un archivo `.env` en la raíz a partir de `.env.example`:  

```bash
cp .env.example .env
```

### Ejemplo contenido `.env`:
```env
# ==========================
# Frontend (React + Vite)
# ==========================
VITE_MARVEL_PUBLIC_KEY=tu_public_key_aqui
VITE_MARVEL_PRIVATE_KEY=tu_private_key_aqui
VITE_API_BASE_URL=http://localhost:5000   # URL del backend

# ==========================
# Backend (Express)
# ==========================
PORT=5000

# Base de datos
# Ejemplo con MongoDB Atlas:
DB_URI=mongodb+srv://usuario:password@cluster0.mongodb.net/marvel-db

```
</details>

---

<details>
<summary>📦 Scripts útiles</summary>

- **Frontend**
  - `npm run dev` → Inicia servidor de desarrollo
  - `npm run build` → Construye la app

- **Backend**
  - `npm run dev` → Inicia servidor con nodemon (si lo configuras)
  - `npm start` → Inicia servidor en producción
</details>

---

<details>
<summary>📝 Notas</summary>

- El diseño de la landing page sigue el [Figma proporcionado](https://www.figma.com/design/hybU1uhWNTfZzovZKHhRYh/Prueba-tecnica-WH?node-id=2020-30&t=w7rhHkhr8Da30Gpc-1) (contraseña: `WH1234`).  
- El diseño es **responsive** siguiendo la guía de Figma.  
- Para consumir la API de Marvel, se deben generar claves en [Marvel Developer Portal](https://developer.marvel.com/).  
</details>

---

<details>
<summary>📤 Entrega</summary>

- Repositorio público en GitHub: **[colocar URL aquí]**    
</details>
