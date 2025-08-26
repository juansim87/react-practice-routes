# 🧪 Ejercicios de Rutas y React Router

## 🌟 Objetivo
Practicar la configuración de un router, la adaptción de un proyecto existente y añadirle rutas.

---

## 🚀 Pasos iniciales

### 1) Trabajarás con varios proyectos.
  - Una copia del proyecto `React Curriculum`.
  - El código de clase
  - Un nuevo repositorio que crearás en el paso 2.

### 2) Crea un nuevo repositorio en tu GitHub
Nombre sugerido: `react-rutas-y-router`. Haz commits pequeños y claros.

### 2) Crea un proyecto base con Vite (React + JS)
```bash
npm create vite@latest react-rutas-y-router -- --template react
cd react-rutas-y-router
npm i
npm run dev
npm install react-router-dom
```

### 3) Limpia el proyecto
Deja un `App.jsx` simple y crea carpetas (añade todas las que necesites)
```
src/
  pages/
  components/
  styles.css
```

### 4) Realiza los ejercicios en tu repo
Monta cada componente de ejercicio desde `App.jsx` (puedes comentar/descomentar).

Este ejercicio está "encadenado". Lo que quiere decir, que usarás el mismo proyecto para ir iterando sobre el y añadiendo nuevas páginas o funcionalidades al router.

---

## ✅ Requisitos

- **Código y nombres en inglés.**
- React con **JavaScript** (sin TypeScript).
- **Sin librerías externas** (a excepción de `react-router-dom`).
- Componentes **funcionales** y **hooks**.
- Configura el router en `main.jsx` y las rutas en `App.jsx`.

--- 

## 🧹 Ejercicios

> ⚠️ **Todo en inglés** (nombres de variables, funciones y componentes).

> Los componentes no necesitan tener contenidos, con un `<h1>` es suficiente, aunque puedes añadir algo de código si lo deseas. Puedes preguntarle a la IA para añadir este "relleno".

### 1) Crear y configurar el router
**Objetivo:** Aprender a crear y configurar un router en React

**Instrucciones:** En el nuevo proyecto que has creado, tienes que instalar y configurar `react-router-dom`. Luego, crea una página `HomePage.jsx`y otro `src/pages/AboutPage.jsx`. En `App.jsx`, configura las rutas para que `HomePage` se muestre en la ruta `/` y `AboutPage` en la ruta `/about`.

**Pistas:**
- Recuerda configurar el `<BrowserRouter>`.
---

### 2) Crea el Navbar
**Archivo:** `src/components/Navbar.jsx`  

**Objetivo:** Tener un navbar que te permita navegar por tu página

**Instrucciones:** Crea un componente `Navbar` que contenga los enlaces a las diferentes páginas. Usa el componente `NavLink` de `react-router-dom` y añade estilos para que el enlace activo se destaque.

---

### 3) Crea 2 rutas anidadas.
**Objetivo:** Crear un nuevo componente que tenga 2 rutas anidadas como mínimo.

**Instrucciones:** El componente será `UserProfile` y se renderizará en la ruta `/user` y tendrá 2 rutas anidadas: `/user/settings` y `/user/profile`.

Estos componentes pueden ser simples, por ejemplo, `UserSettings` y `UserDetails`, que muestren un título y algo de texto.

**Pistas:**
- Usa el componente `Outlet` de `react-router-dom` para renderizar las rutas anidadas.

---

### 4) Privatiza la Ruta.
**Archivo:** `src/components/PrivateRoute.jsx`  

**Objetivo:** Poner la ruta del usuario como privada.

**Instrucciones:** Tienes que poner la ruta del usuario privada, por consecuente, las rutas anidadas también serán privadas.

**Pista:** Puedes crear el componente `PrivateRoute` que encontrarás en el código de clase. Este componente debe comprobar si el usuario está autenticado. Para conocer el estado del usuario, basta con un ejemplo de `true/false` guardado en un contexto tal como hemos visto en clase.

---

### 5) Poryecto existente - Crea una copia de tu proyecto React CV.
**Objetivo:** Practicar la implementación de un router en un proyecto existente.

**Instrucciones:** Te recomiendo que crees una copia de tu proyecto de React CV. En este proyecto, tendrás que instalar el router y sustituir las pestañas de tu CV por rutas. Como mínimo debes tener 2 rutas. De manera opcional, añade todas las que quieras.

**Pista:**
  - Borra la carpeta `node_modules` antes de hacer la copia para no copiar miles de archivos.
  - Una vez que tengas tu proyecto copiado, cámbiale el nombre a la carpeta, por ejemplo `react-cv-router`.
  - Elimina la carpeta `.git` del proyecto copiado para no tener conflictos con tu repositorio original.

---

## BONUS 🤑

### 6) Implementa filtros en una copia del proyecto de clase
**Objetivo:** Añadir filtros a la lista de elementos en el proyecto de clase.

**Importante:**
  - Clona el repositorio del código de clase de GitHub.
  - ⚠️ Elimina la carpeta `.git` del proyecto. No olvides esto.
  - Crea tu propio repositorio de git con `git init` y sube el repositorio a tu cuenta.

**Instrucciones:** De manera muy parecida al "Filtro por categorías" de clase, implementa 2 nuevos filtros.
  - Filtro por Rating
  - Filtro por rango de Precio.

Para estos filtros, tendrás que crear varios inputs
  - Un `select` con los valores `1, 2, 3, 4, 5` para el Rating.
  - Dos inputs de tipo `number` para el rango de Precio. Uno para el precio mínimo y otro para el precio máximo. 

**Pista:** Puedes modificar la estructura de datos si lo deseas o necesitas para probar estos filtros.

---

## SUPER BONUS 🤑

### 7) ¿De verdad quieres un super bonus?

**Instrucciones:** Si te has quedado con ganas de más, comentalo con tu mentor Juan Macías y te dará acceso a un reto aún mayor.