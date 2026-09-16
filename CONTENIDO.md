# Preguntas y próximos test

Reglas confirmadas por el propietario el 7 de septiembre de 2026. Leer antes de incorporar contenido.

## Reglas que deben conservarse

- Alcance confirmado: los próximos test serán de asignaturas nuevas. Por ahora no se añadirán preguntas a las seis asignaturas existentes ni se modificarán sus bancos. El procedimiento para ampliar una asignatura existente queda reservado a una futura petición expresa.

- Los IDs 1–40 de cada asignatura son posibles preguntas del examen final, no una garantía de que salgan todas en el examen real.
- Los IDs superiores a 40 son preguntas de repaso y apoyo de esa asignatura.
- Pueden existir enunciados repetidos entre ambos grupos y entre test de apoyo. No deduplicar automáticamente.
- Un ID debe ser único dentro de su asignatura, pero puede repetirse en otra asignatura.
- No renumerar IDs existentes ni modificar enunciados, opciones, respuestas correctas o imágenes existentes sin autorización expresa. Las sesiones y el progreso se vinculan a asignatura + ID.
- Se pueden redactar y mejorar explicaciones para estudiantes. Evitar lenguaje como «según los PDF adjuntos», «parece que en los apuntes» o referencias al proceso de elaboración.
- Si una respuesta del material parece incorrecta, es ilegible o falta la solución, señalarlo al propietario; no corregirla ni inventarla silenciosamente.

## Arquitectura actual comprobada

1. `www/preguntas/preguntas-*.js`: arrays por asignatura. Campos: `id`, `pregunta`, `opciones`, `respuesta_correcta` (texto) o `correcta` (índice desde cero), `explicacion` e `imagen` opcional.
2. `www/asignaturas.js`: catálogo con ID, nombre, sigla, color, array de preguntas y resumen.
3. `www/index.html`: carga los archivos de preguntas y resúmenes antes del catálogo y el motor.
4. `www/preguntas/preguntas.js`: crea `bancoDePreguntas` normalizando la respuesta a un índice en copias de los registros. La comparación textual ignora mayúsculas y diferencias de espacios. Su fallback devuelve cero si no resuelve la respuesta: nunca usarlo como solución; la validación debe detectar el problema antes de publicar.
5. `www/script.js`: configura la sesión, selecciona preguntas, mezcla opciones manteniendo la solución y restaura las sesiones con su orden de opciones.
6. `www/progreso.js`: guarda progreso por asignatura e ID y sesiones independientes de estudio, examen y repaso en almacenamiento local.
7. `docs/`: copia publicada en GitHub Pages; no es la fuente de edición. `npm run sync:web` regenera los recursos offline y sincroniza desde `www/`.

## Selección real de preguntas

- Examen: `iniciarTest` selecciona todos los IDs disponibles entre 1 y 40, inclusive. Añade hasta la cantidad de extras configurada desde los IDs > 40; con cero extras solo utiliza el bloque base.
- En las asignaturas sin política adicional, el motor conserva su excepción de usar apoyo si no existe base. En multimediaMoviles, por petición expresa, `requiereBloqueExamenCompleto: true` impide abrir, iniciar o reanudar un examen hasta disponer de todos los IDs 1–40. No cambia el comportamiento de las seis asignaturas anteriores.
- Estudio sin rango: comparte la selección base + extras del motor.
- Estudio con rango: trabaja con posiciones de la lista ordenada, no necesariamente con IDs. Actualmente, si está activada la mezcla, toma esa cantidad de preguntas aleatorias de toda la asignatura. No confundir este comportamiento con la regla de IDs del examen.
- Repaso inteligente: selecciona hasta 20 preguntas ya practicadas cuyo repaso corresponde, usando el historial. No está restringido al bloque del examen final.
- Mezclar respuestas cambia su posición en la sesión, nunca cuál es la respuesta correcta del banco original.

## Procedimiento para cada test recibido

1. Identificar asignatura, nombre del test, material fuente y si pertenece a examen final o apoyo. Si no está claro, preguntar antes de asignar IDs definitivos. No asumir que los primeros 40 elementos de cualquier archivo nuevo pertenecen al examen final.
2. Transcribir fielmente enunciados, todas las opciones, solución e imágenes necesarias. Conservar la numeración original del test por separado del ID de la app.
3. Crear un JSON independiente en `contenido/tests/<asignatura>/<test>.json`. Para multimediaMoviles, `npm run build:content` genera exclusivamente su archivo JavaScript desde los JSON. La app sigue cargando JavaScript, sin depender de peticiones JSON adicionales.
4. Usar una estructura con `version`, `asignaturaId`, `testId`, `fuente`, `tipo` (`examen-final` o `apoyo`) y `preguntas`. Cada pregunta debe registrar `numeroOriginal`, `id`, `pregunta`, `opciones`, `respuesta_correcta`, `explicacion` e `imagen` si corresponde. No duplicar la solución también como índice en el JSON salvo necesidad: evitar dos fuentes de verdad.
5. Para apoyo de una asignatura existente, asignar nuevos IDs libres superiores a 40 sin tocar los existentes. Para examen final, comprobar primero los IDs 1–40 ocupados: no reemplazar un bloque existente ni desplazar preguntas automáticamente; consultar cómo incorporar el nuevo material si hay conflicto.
6. Redactar una explicación pertinente por pregunta: concepto, motivo de la solución y ejemplo o contraste cuando ayude. Mantener el texto dirigido al estudiante; una repetición de enunciado no autoriza alterar las opciones o la solución.
7. Integrar las preguntas aprobadas en el array JavaScript correspondiente y comprobar que coinciden con el JSON. En una asignatura nueva, añadir también catálogo, scripts de carga y resumen. No migrar toda la arquitectura a JSON por iniciativa propia.
8. Comparar todos los registros preexistentes antes y después: no deben cambiar sus campos protegidos. Las altas autorizadas cambian la huella global de `scripts/validate-content.js`; actualizarla solo después de verificar que la diferencia es exclusivamente la incorporación autorizada, nunca para silenciar un error.
9. Ejecutar `npm test`, verificar base/extras e IDs únicos y comprobar que el nuevo material y sus imágenes están en el manifiesto offline. Ejecutar `npm run sync:web` y revisar el diff antes de publicar mediante el flujo Git autorizado.

## Incorporación del 10 de septiembre de 2026

- Nueva asignatura: **Programación multimedia y dispositivos móviles**, ID técnico `multimediaMoviles`.
- Fuente: U1/TEST1.pdf, 10 preguntas de apoyo con soluciones. JSON `contenido/tests/multimediaMoviles/u1-test1.json`, IDs 41–50. No incluye datos personales ni enlaces de la revisión del intento del PDF.
- Única corrección autorizada del enunciado: pregunta original 9, ID 49, `UTMS` → `UMTS`. Opciones y soluciones conservadas.
- Explicación didáctica por pregunta y resumen breve de los conceptos de esta U1; no se presenta como resumen completo de toda la asignatura.
- **Pendiente para futuras incorporaciones:** añadir el bloque de preguntas de examen final cuando lo entregue el propietario. La disponibilidad del examen se reactivará automáticamente cuando existan todos los IDs 1–40. Comprobar entonces el botón y la selección del examen; no retirar por olvido esta posibilidad ni rellenar el bloque con preguntas de apoyo.
- Los próximos test de apoyo de esta asignatura empezarán en el siguiente ID libre (actualmente 51), previa confirmación de su clasificación. Conservar repeticiones con IDs distintos.
- Las seis asignaturas anteriores permanecen intactas; `test-new-subject.js` verifica su huella original de forma independiente.
- Antes de cualquier decisión nueva sobre contenido, clasificación, IDs o comportamiento, consultar al propietario. No inferir autorización para corregir más enunciados a partir de la excepción UMTS.

## Incorporación del 16 de septiembre de 2026

- Nueva asignatura: **Programación de servicios y procesos**, ID técnico `serviciosProcesos`.
- U1 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 41–50. JSON en `contenido/tests/serviciosProcesos/u1-test1.json`. Las siguientes preguntas de apoyo empezarán en el siguiente ID libre, actualmente 51, previa confirmación del material.
- Correcciones textuales autorizadas: pregunta 1 (ID 41), «a la secundario» → «a la secundaria» en opciones A/B/C y texto de la solución A; pregunta 8 (ID 48), «a media que» → «a medida que» en la opción A. No cambia cuál es la opción correcta de ninguna pregunta.
- Cada pregunta incorpora explicación didáctica. El resumen de U1 cubre únicamente los fundamentos presentes, no el conjunto de la asignatura.
- Examen desactivado por `requiereBloqueExamenCompleto: true`; se habilita automáticamente al incorporar los IDs 1–40. No ocupar esos IDs con preguntas de apoyo.
- `npm run build:content` genera los bancos de multimediaMoviles y serviciosProcesos desde sus JSON. No modifica los otros seis bancos.
- Las 760 preguntas de las siete asignaturas anteriores mantienen su huella. Las pruebas verifican además que las respuestas se conservan al mezclar las opciones y que la nueva asignatura forma parte de los recursos offline.
