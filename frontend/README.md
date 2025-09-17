# 🚀 Marvel Landing - Fullstack Application

Aplicación fullstack que consume la API de Marvel y permite crear personajes personalizados.  
Proyecto dividido en **Frontend (React + TypeScript + Tailwind)** y **Backend (Express + TypeScript + MongoDB)**.

---

## 📋 Índice

- [🚀 Inicio Rápido](#-inicio-rápido)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [🔧 Configuración del Entorno](#-configuración-del-entorno)
- [📡 API Endpoints](#-api-endpoints)

---

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (v18 o superior)
- MongoDB (local o MongoDB Atlas)
- Claves de API de Marvel ([Marvel Developer Portal](https://developer.marvel.com/))

### Instalación Completa

1. **Clonar el repositorio**

   ```bash
   git clone <repository-url>
   cd marvel
   ```

2. **Configurar variables de entorno**

   ```bash
   # Copiar archivo de ejemplo
   cp .env.example .env

   # Editar .env con tus credenciales
   ```

3. **Instalar dependencias del backend**

   ```bash
   cd backend
   npm install
   ```

4. **Instalar dependencias del frontend**

   ```bash
   cd ../frontend
   npm install
   ```

5. **Ejecutar la aplicación**

   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev

   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

6. **Acceder a la aplicación**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:3000](http://localhost:3000)

---

## 📂 Estructura del Proyecto

```
marvel/
├── frontend/                 # React + TypeScript + Tailwind
│   ├── src/
│   │   ├── components/       # Componentes reutilizables
│   │   ├── features/         # Funcionalidades principales
│   │   ├── hooks/           # Custom hooks
│   │   ├── pages/           # Páginas de la aplicación
│   │   ├── services/        # Servicios de API
│   │   └── types/           # Definiciones de tipos
│   ├── .env.example
│   └── package.json
├── backend/                  # Express + TypeScript + MongoDB
│   ├── src/
│   │   ├── controllers/     # Controladores HTTP
│   │   ├── dtos/           # Data Transfer Objects
│   │   ├── models/         # Modelos de MongoDB
│   │   ├── routes/         # Rutas de la API
│   │   └── services/       # Lógica de negocio
│   ├── .env.example
│   └── package.json
├── .env.example             # Variables de entorno globales
├── .gitignore
└── README.md
```

---

## 🔧 Configuración del Entorno

### Variables de Entorno Requeridas

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
# ==========================
# Frontend (React + Vite)
# ==========================
VITE_MARVEL_PUBLIC_KEY=tu_marvel_public_key
VITE_MARVEL_PRIVATE_KEY=tu_marvel_private_key
VITE_API_BASE_URL=http://localhost:3000

# ==========================
# Backend (Express)
# ==========================
PORT=3000

# ==========================
# Base de Datos (MongoDB)
# ==========================
# Opción 1: MongoDB Atlas (recomendado)
DB_URI=mongodb+srv://usuario:password@cluster0.mongodb.net/marvel-db

# Opción 2: MongoDB Local
# DB_URI=mongodb://localhost:27017/marvel-db
```

### Obtener Claves de Marvel API

1. Registrarse en [Marvel Developer Portal](https://developer.marvel.com/)
2. Crear una nueva aplicación
3. Copiar las claves pública y privada
4. Agregar las claves al archivo `.env`

#### Esquema de Personajes Personalizados

```typescript
{
  name: String,        // Solo caracteres alfabéticos
  date: String,        // Fecha de creación
  description: String, // Solo caracteres alfabéticos
  img: String         // URL de imagen
}
```

---

## 📡 API Endpoints

### Personajes

| Método | Endpoint                 | Descripción                                    |
| ------ | ------------------------ | ---------------------------------------------- |
| `GET`  | `/characters`            | Todos los personajes (Marvel + personalizados) |
| `GET`  | `/characters/merged`     | Personajes combinados con formato unificado    |
| `GET`  | `/characters/marvel`     | Solo personajes de Marvel                      |
| `GET`  | `/characters/marvel/:id` | Personaje específico de Marvel                 |
| `GET`  | `/characters/custom/:id` | Personaje personalizado específico             |
| `GET`  | `/characters/:id`        | Personaje personalizado por ID                 |
| `POST` | `/characters`            | Crear nuevo personaje personalizado            |

### Contenido Marvel

| Método | Endpoint             | Descripción      |
| ------ | -------------------- | ---------------- |
| `GET`  | `/characters/comics` | Comics de Marvel |
| `GET`  | `/characters/series` | Series de Marvel |

### Ejemplo de Creación de Personaje

```json
POST /characters
{
  "name": "Mi Heroe",
  "date": "2024-01-15",
  "description": "Un heroe personalizado",
  "img": "https://ejemplo.com/imagen.jpg"
}
```