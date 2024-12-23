# **Global Task Reestructurado**

## **Introducción**
Este archivo contiene un resumen detallado del estado actual, instrucciones clave y planificación general del proyecto **Portfolio**. Incluye:
- **Estado del proyecto**: Fase actual, progreso y próximos pasos.
- **Instrucciones clave**: Para mantener consistencia y evitar errores.
- **Planificación actual y prioridades**: Tareas organizadas por secciones.

**Nota Importante:**
1. Antes de trabajar en cualquier sección, solicita y adjunta el archivo padre más actualizado.
2. Valida visualmente todos los cambios antes de avanzar al siguiente paso.
3. Si detectas algún conflicto entre estas instrucciones y las acciones solicitadas, notifica inmediatamente.

---

## **ESTADO GENERAL DEL PROYECTO**
1. **Fase Actual:** Rediseño y reestructuración de SCSS/CSS (responsive incluido).
2. **Próxima Fase:** Implementación y optimización de **JavaScript**.
3. **Progreso:**
   - Responsive en **1024px** completado para `Header`, `Hero`, y `Projects`.  
   - Desktop de `Projects` completado.
   - Responsive y desktop para `About`, `Contact`, y `Footer` pendientes.

---

## **INSTRUCCIONES CLAVE**
1. **Estructura del Responsive:**  
   - Trabajar de `HEADER` a `FOOTER`, primero el diseño desktop y después el responsive, incluyendo cada sección (`Header`, `Hero`, `Projects`, `About`, `Contact`, `Footer`) en **orden secuencial** y para todos los tamaños de pantalla (`1024px`, `768px`, `480px`, `320px`).  
   - **Antes de implementar:** Verifica siempre el archivo padre (desktop) y solicita la versión más actual si no está claro.
   - **Progreso:**  
     - `1024px`: Header, Hero, y Projects completados.  
     - `768px`, `480px`, `320px`: Pendiente para todos.

2. **Validación Constante:**  
   - Cambios en SCSS/CSS o JavaScript deben incluirse **por partes**:
     - Validar visualmente cada paso.
     - Confirmar que no hay errores ni inconsistencias antes de avanzar.

3. **Optimización:**  
   - **Evitar redundancias:** No duplicar estilos entre responsive y el archivo base.  
   - **Deprecados:** Nunca usar funciones como `color.scale()` o `darken()`. En su lugar, define variables en `_variables.scss`.

4. **Uso de Variables:**
   - Todos los valores de colores, fuentes y dimensiones comunes deben estar centralizados en `_variables.scss`:
     - Colores: `$primary-color`, `$secondary-color`, `$text-color`, `$link-hover-color`, etc.
     - Tipografías: `$font-primary`, `$font-secondary`.
     - Espaciados: `$header-padding`, `$nav-gap`, etc.
   - Evitar valores "hardcodeados" en los archivos SCSS individuales. Si es necesario un nuevo valor global, debe ser añadido en `_variables.scss` y reutilizado donde aplique.

5. **Colaboración:**  
   - Siempre trabaja con la última versión del archivo adjunta.  
   - Notifica inmediatamente inconsistencias o contradicciones.

6. **Errores de Lienzo:**  
   - Si el lienzo no funciona, avisa para recibir el contenido en formato markdown.

7. **Sincronización con GitHub:**  
   - Actualiza el repositorio tras completar un archivo o sección.
   - **Pasos para subir archivos:**
     1. Abre Git Bash en la carpeta raíz del proyecto:
        ```bash
        cd C:/Users/marco/OneDrive/Escritorio/Master FrontEnd LemonCode/MarcosGiannini.github.io
        ```
     2. Agrega archivos modificados a la etapa de commit:
        ```bash
        git add .
        ```
     3. Escribe un mensaje de commit descriptivo:
        ```bash
        git commit -m "Breve descripción de los cambios en inglés"
        ```
     4. Sube los cambios al repositorio remoto:
        ```bash
        git push origin main
        ```
     5. Actualiza localmente para evitar conflictos:
        ```bash
        git pull origin main
        ```
   - Verifica los cambios en el repositorio remoto: [Portfolio GitHub](https://github.com/MarcosGiannini/MarcosGiannini.github.io).

---

## **PENDIENTES ACTUALES**

### **Diseño SCSS/CSS**
| **Sección**   | **Estado Desktop**   | **Responsive 1024px** | **Responsive 768px** | **Responsive 480px** | **Responsive 320px** | **Comentarios**                            |
|---------------|----------------------|-----------------------|-----------------------|-----------------------|-----------------------|--------------------------------------------|
| **Header**    | ✔️                   | ✔️                    | ❌                    | ❌                    | ❌                    | Revisar archivo padre y optimizar variables|
| **Hero**      | ✔️                   | ✔️                    | ❌                    | ❌                    | ❌                    | Revisar archivo padre y optimizar variables|
| **Projects**  | ✔️                   | ✔️                    | ❌                    | ❌                    | ❌                    | Revisar variables en `_variables.scss`     |
| **About**     | ❌                   | ❌                    | ❌                    | ❌                    | ❌                    | Todo pendiente                              |
| **Contact**   | ❌                   | ❌                    | ❌                    | ❌                    | ❌                    | Todo pendiente                              |
| **Footer**    | ❌                   | ❌                    | ❌                    | ❌                    | ❌                    | Todo pendiente                              |


---

### **Planificación Actual**
| **Proyecto**              | **Prioridad** | **Tarea Principal**                                 | **Estado** |
|---------------------------|---------------|----------------------------------------------------|------------|
| **Portfolio - JavaScript**| Alta          | Revisar y estructurar archivos `main.js` y `utils.js`| ❌         |
|                           | Alta          | Implementar scroll suave para enlaces del menú    | ❌         |
|                           | Alta          | Crear validación básica de formularios en Contact | ❌         |
|                           | Media         | Aplicar animaciones de scroll para elementos visibles| ❌       |
|                           | Media         | Crear efecto dinámico en el header al hacer scroll| ❌         |
| **Portfolio - Recursos**  | Alta          | Crear `hero-background.jpg` para la sección Hero  | ❌         |
|                           | Alta          | Diseñar `logo.svg` para el header                 | ❌         |
|                           | Alta          | Crear `favicon.ico` como ícono del navegador      | ❌         |
| **Portfolio - Documentación** | Media       | Completar `README.md` con capturas y guías        | ❌         |
|                           | Media         | Escribir comentarios de código en inglés         | ❌         |
|                           | Media         | Crear roadmap del proyecto                        | ❌         |
|                           | Media         | Revisar enlaces, botones y contenido en todas las resoluciones| ❌ |
| **Portfolio - Revisión**  | Media         | Revisar efectos en responsive que dejaron de funcionar| ❌     |
|                           | Media         | Revisión final de enlaces y botones en desktop y responsive| ❌|
| **Portfolio - Producción**| Alta          | Subir la versión final a GitHub Pages o Vercel    | ❌         |
|                           | Media         | Realizar pruebas finales en producción            | ❌         |
|                           | Media         | Verificar funcionamiento en resoluciones y navegadores| ❌     |
| **Evaluaciones**          | Alta          | Realizar pruebas de habilidades técnicas e inglés| ❌         |
|                           | Media         | Simular entrevistas técnicas                      | ❌         |
|                           | Media         | Actualizar CV y LinkedIn profesionalmente         | ❌         |
| **Máster**                | Alta          | Ponerte al día con clases diferidas               | ❌         |
|                           | Alta          | Completar entregas pendientes                     | ❌         |
|                           | Media         | Consolidar conocimientos actuales                 | ❌         |
| **Forza**                 | Media         | Configurar entorno inicial (bundler, ESLint)      | ❌         |
|                           | Media         | Subir versión básica al portfolio                 | ❌         |

---

### **Resumen de Prioridades**
1. **SCSS/CSS:** Completar diseño responsive (1024px en progreso).
2. **JavaScript:** Estructurar y añadir funcionalidades.
3. **Recursos Visuales:** Crear imágenes (Hero, logo y favicon).
4. **Revisión Final:** Validar enlaces, botones y responsive.
5. **Producción:** Subida final y pruebas en GitHub Pages o Vercel.
