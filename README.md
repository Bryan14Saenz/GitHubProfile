# 🌐 GitHub Profile | Dev Challenge

**GitHub Profile** es un proyecto desarrollado para un reto de programación de Dev Challenge.  
Se trata de una interfaz web para buscar y visualizar perfiles de GitHub con sus repositorios usando la API oficial de GitHub y tecnologías modernas como TypeScript y React.

---

## 📌 Descripción

Esta aplicación de perfil de GitHub permite al usuario:

- Buscar usuarios de GitHub por su username
- Ver información detallada del perfil (nombre, bio, seguidores, etc.)
- Explorar los repositorios públicos del usuario
- Acceder directamente a los repositorios con un clic
- Visualizar estadísticas como estrellas, forks y lenguajes

El objetivo es practicar habilidades modernas de frontend como:

- Consumo de APIs REST
- Manejo de estado con React
- Interacción del usuario
- Reutilización de componentes
- Manejo de errores y rate limiting

---

## 🧩 Tecnologías utilizadas

- React 18
- TypeScript
- HTML5
- CSS3
- Tailwind CSS
- GitHub API REST v4
- Fetch API
- Responsive Design
- Vite (Build tool)

---

## 🧭 Funcionalidades

- **Barra de búsqueda** para encontrar usuarios de GitHub
- **Perfil de usuario** con avatar, nombre, bio y estadísticas
- **Grid de repositorios** con información detallada
- **Enlaces directos** a repositorios en GitHub
- **Responsive UI** adaptada a móviles, tablets y desktop
- **Manejo de errores** para usuarios no encontrados
- **Rate limiting** respetando límites de la API

---

## 📂 Estructura del proyecto

```bash
.
├── index.html
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── components/
│   │   ├── search/
│   │   │   └── Search.tsx
│   │   └── repo/
│   │       └── Repos.tsx
│   ├── models/
│   │   ├── user.ts
│   │   └── repos.ts
│   ├── services/
│   │   └── githubAPI.ts
│   └── index.css
├── public/
│   └── favicon.ico
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

---

## 🚀 Instalación y uso

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/Bryan14Saenz/GitHubProfile.git
   cd GitHubProfile
   ```

2. **Instalar dependencias**

   ```bash
   pnpm install
   # o npm install
   ```

3. **Ejecutar en desarrollo**

   ```bash
   pnpm dev
   # o npm run dev
   ```

4. **Construir para producción**
   ```bash
   pnpm build
   # o npm run build
   ```

---

## 🛠️ Características técnicas

- **TypeScript** para tipado estático y mejor DX
- **Tailwind CSS** para estilos utilitarios y responsive
- **GitHub API** sin autenticación (60 requests/hora)
- **Error handling** para casos edge
- **Debouncing** en búsqueda para optimizar requests
- **Loading states** para mejor UX

---

## 🧑‍💻 Autor

**Bryan14Saenz**

> "Programa no para resolver problemas, sino para crear soluciones."

📧 Correo: [14bryansaenz@gmail.com](mailto:14bryansaenz@gmail.com)  
🌐 GitHub: [github.com/Bryan14Saenz](https://github.com/Bryan14Saenz)  
🔗 LinkedIn: [linkedin.com/in/14bryansaenz](https://www.linkedin.com/in/14bryansaenz)

---

## 🌍 Demo en línea

🟢 Disponible en [githubprofileb14s.netlify.app](https://githubprofileb14s.netlify.app),
