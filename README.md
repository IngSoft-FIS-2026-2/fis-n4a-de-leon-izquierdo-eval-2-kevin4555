# Ejercicio Movie 🎬​

## Objetivos 🎯​
- Uso de elementos HTML para el ingreso de información.
- Implementar validaciones de datos en la interfaz.
- Utilizar componentes y estilos Bootstrap.
- Evaluar y mejorar la accesibilidad de la interfaz.

### Requisitos previos

Antes de comenzar, es necesario:

- Tener instalado **Google Chrome**.
- Instalar la extensión [**WAVE** en Google Chrome](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh).

## Preparación 🔨​
- Clonar el repositorio para trabajar localmente.
- Abrir la carpeta del proyecto en Visual Studio Code.
- Instalar las dependencias con `npm install`.
- Iniciar el proyecto con `npm run dev` y abrir en el navegador la dirección que muestra la terminal.
- Probar el comportamiento de la página: completar el formulario, pulsar **Registrar** y comprobar que la película aparezca en la lista.

---

## Desactivación de herramientas de IA

Para la resolución de este ejercicio **no está permitido el uso de herramientas de asistencia basadas en inteligencia artificial**. Es responsabilidad del estudiante desactivarlas antes de comenzar, entendiendo que **su utilización durante la evaluación implica la pérdida total del puntaje del ejercicio**.

A modo de ejemplo, se detalla a continuación el procedimiento para desactivar GitHub Copilot.

### Desactivación de GitHub Copilot en Visual Studio Code
1. Abrir Visual Studio Code.
2. Acceder a la sección de Extensiones (ícono de bloques en la barra lateral o mediante el atajo Ctrl + Shift + X).
3. Buscar la extensión “GitHub Copilot”.
4. Seleccionar la extensión.
5. Hacer clic en “Disable” (Deshabilitar).
6. Verificar que no se muestren sugerencias de código generadas automáticamente, tales como texto en gris o completado automático avanzado.

---

## 📐Parte A: Ajustes en Formulario HTML

1. Incluir un campo con su etiqueta (label) que permita ingresar el director de la película. El campo debe ser **requerido**.
    - Al registrar una película, **el nombre del director debe visualizarse en la lista de películas registradas**. Realizar las modificaciones necesarias para lograrlo.
2. Implementar casilla de verificación (checkbox) que indique si la película fue vista por el usuario. 
3. Implementar validación de datos con HTML:
    - El campo 'Título de la película' es **requerido**
    - El campo Año de estreno debe aceptar solo **números** entre **1900 y 2026**.
4. Guardar los cambios y subirlos al repositorio remoto.
5. Crear un issue en GitHub con el título **Parte A - Apellido Nombre, NroEstudiante** y subir una captura de pantalla del formulario web visualizado en el navegador.

---

## 🖼️ Parte B: Bootstrap

6. Aplicar la clase `btn btn-success` al botón de envío del formulario.
7. Aplicar la clase `form-control` a los inputs del formulario excepto al de tipo checkbox, y la clase `form-label` a las etiquetas correspondientes a cada input.
8. Aumentar el padding de la clase card de Bootstrap del formulario a 'p-3'.
9. Guardar los cambios y subirlos al repositorio remoto.
10. Crear un issue en GitHub con el título **Parte B - Apellido Nombre, NroEstudiante** y subir una captura de pantalla del formulario web visualizado en el navegador.

---

## 🔍 Parte C: Evaluación y mejora de la accesibilidad

11. Utilizar la extensión `WAVE Evaluation Tool` para evaluar la accesibilidad de la página.
12. Identificar y corregir TODOS los problemas de accesibilidad detectados por la herramienta, incluyendo:
    - errores (errors), incluye errores de contraste
    - alertas (alerts)
    
    Las correcciones deberán implementarse directamente en el código HTML o, si corresponde, en la hoja de estilos (CSS).

13. Guardar los cambios y subirlos al repositorio remoto.
14. Crear un issue en GitHub con el título: **Parte C - Apellido Nombre, NroEstudiante**.
    En el issue, adjuntar una captura de pantalla de la evaluación de accesibilidad (WAVE).

---

## Recursos adicionales 
- [Documentación de HTML](https://html.spec.whatwg.org/multipage/)
- [Documentación de HTML - mdn](https://developer.mozilla.org/es/docs/Web/HTML)
- [Documentación de Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [WAVE Evaluation Tool](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
