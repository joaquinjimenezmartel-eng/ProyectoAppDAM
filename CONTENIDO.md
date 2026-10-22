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

## Incorporación del 8 de octubre de 2026

- Asignatura ampliada: **Programación multimedia y dispositivos móviles**, ID técnico `multimediaMoviles`.
- U3 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 61–70. JSON `contenido/tests/multimediaMoviles/u3-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 71.
- Se conserva la respuesta correcta mostrada por la plataforma en las diez preguntas. Las únicas modificaciones son correcciones ortográficas, gramaticales y de puntuación documentadas en el JSON; no alteran el sentido ni la solución.
- Cada pregunta incorpora una explicación didáctica sobre Intents, procesos, ciclo de vida, estado de una Activity, pila LIFO y PendingIntent. El resumen de la asignatura se amplía de U1–U2 a U1–U3.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 850 preguntas existentes antes de U3 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 8 de octubre de 2026 — Servicios y procesos U3

- Asignatura ampliada: **Programación de servicios y procesos**, ID técnico `serviciosProcesos`.
- U3 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 61–70. JSON `contenido/tests/serviciosProcesos/u3-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 71.
- Se conserva la respuesta correcta mostrada por la plataforma en las diez preguntas. La única modificación del contenido evaluable es la corrección ortográfica «indica que afirmación» → «indica qué afirmación» en la pregunta original 5; no cambia su solución.
- Cada pregunta incorpora una explicación didáctica sobre TCP, UDP, IP, sockets, puertos y protocolos de aplicación. El resumen de la asignatura se amplía de U1–U2 a U1–U3.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 860 preguntas existentes antes de esta U3 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 8 de octubre de 2026 — Desarrollo de interfaces U3

- Asignatura ampliada: **Desarrollo de interfaces**, ID técnico `desarrolloInterfaces`.
- U3 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 61–70. JSON `contenido/tests/desarrolloInterfaces/u3-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 71.
- En la pregunta original 6, la opción seleccionada en el intento es incorrecta. Se conserva como solución la corrección explícita del documento: opción A, «Permiten modificar funcionalidades estáticas en Java».
- Las únicas modificaciones textuales son correcciones ortográficas y de puntuación documentadas en el JSON: «en que» → «en qué», retirada de dos puntos sobrantes después del cierre de interrogación y normalización del nombre «GIMP». Ninguna cambia la solución.
- Cada pregunta incorpora una explicación didáctica sobre ámbito, componentes, constructores, métodos, eventos, listeners, propiedades JavaBeans, reflexión e introspección. El resumen se amplía de U1–U2 a U1–U3.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 870 preguntas existentes antes de esta U3 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 8 de octubre de 2026 — Acceso a datos U3

- Asignatura ampliada: **Acceso a datos**, ID técnico `accesoDatos`.
- U3 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 61–70. JSON `contenido/tests/accesoDatos/u3-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 71.
- En la pregunta original 4 se conserva la corrección explícita del documento, opción A («Son un fichero»), en lugar de la opción C seleccionada en el intento. En la pregunta original 6 se conserva la opción D («Todas las anteriores son incorrectas»), en lugar de la opción C seleccionada.
- Las únicas modificaciones textuales son correcciones ortográficas, gramaticales y de puntuación documentadas en el JSON: «El placeholders» → «El placeholder», «OBDC» → «ODBC» y retirada de un punto duplicado. Ninguna cambia la solución.
- Cada pregunta incorpora una explicación didáctica sobre JDBC, SQL, PreparedStatement, transacciones, índices, conectores, procedimientos almacenados, Statement, búferes y drivers. El resumen se amplía de U1–U2 a U1–U3.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 880 preguntas existentes antes de esta U3 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 8 de octubre de 2026 — Sistemas de gestión empresarial U3

- Asignatura ampliada: **Sistemas de gestión empresarial**, ID técnico `sistemasGestionEmpresarial`.
- U3 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 61–70. JSON `contenido/tests/sistemasGestionEmpresarial/u3-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 71.
- En la pregunta original 4 se conserva la corrección explícita del documento, opción D («Todas son correctas»), en lugar de la opción A seleccionada en el intento. En la pregunta original 10 se conserva la opción C («Controlador»), en lugar de la opción A seleccionada.
- Las únicas modificaciones textuales son correcciones gramaticales y ortotipográficas documentadas en el JSON: concordancia singular de «Módulo» en dos opciones y «instalación de solución Cloud» → «instalación de una solución cloud». Ninguna cambia la solución.
- Cada pregunta incorpora una explicación didáctica sobre Odoo, MVC, módulos empresariales, instalaciones, modo desarrollador y PostgreSQL. El resumen se amplía de U1–U2 a U1–U3.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 890 preguntas existentes antes de esta U3 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 9 de octubre de 2026 — Multimedia U4

- Asignatura ampliada: **Programación multimedia y dispositivos móviles**, ID técnico `multimediaMoviles`.
- U4 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 71–80. JSON `contenido/tests/multimediaMoviles/u4-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 81.
- En las preguntas originales 2, 4, 5 y 7, la opción seleccionada en el intento es incorrecta. Se conservan las soluciones explícitas de la corrección: D («Ninguna de las anteriores»), C («TableLayout»), B («TableLayout») y A («De posición»), respectivamente.
- Las únicas modificaciones textuales son correcciones ortográficas, gramaticales y de puntuación documentadas en el JSON. Incluyen los nombres técnicos `ConstraintLayout`, `android:layout_alignTop`, `android:layout_span` y `layout_height`; ninguna altera la solución.
- Cada pregunta incorpora una explicación didáctica sobre GridLayout, TableLayout, FrameLayout, RelativeLayout y atributos de disposición. El resumen se amplía de U1–U3 a U1–U4.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 900 preguntas existentes antes de esta U4 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 9 de octubre de 2026 — Servicios y procesos U4

- Asignatura ampliada: **Programación de servicios y procesos**, ID técnico `serviciosProcesos`.
- U4 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 71–80. JSON `contenido/tests/serviciosProcesos/u4-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 81.
- En las preguntas originales 1, 4 y 7, la opción seleccionada en el intento es incorrecta. Se conservan las soluciones explícitas de la corrección: D («Todas son incorrectas»), C («Un protocolo del nivel de aplicación para la encriptación de los datos») y B («Permite enviar un mensaje de correo como resultado de varios mensajes agrupados»), respectivamente.
- Las únicas modificaciones textuales son dos correcciones ortográficas documentadas en el JSON: «que afirmación» → «qué afirmación» y «especifico» → «específico». Ninguna altera la solución.
- Cada pregunta incorpora una explicación didáctica sobre Apache Commons Net, TLS, SSH, protocolos de correo, HTTP POST y la clase URL de Java. El resumen se amplía de U1–U3 a U1–U4.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 910 preguntas existentes antes de esta U4 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 9 de octubre de 2026 — Desarrollo de interfaces U4

- Asignatura ampliada: **Desarrollo de interfaces**, ID técnico `desarrolloInterfaces`.
- U4 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 71–80. JSON `contenido/tests/desarrolloInterfaces/u4-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 81.
- En la pregunta original 5, la opción seleccionada en el intento es incorrecta. Se conserva la solución explícita de la corrección: opción B, «Un creador de asistentes de instalación».
- Las únicas modificaciones textuales son correcciones ortográficas y gramaticales documentadas en el JSON: «Acabo» → «Acabó», «acceso acciones» → «acceso a acciones» y la concordancia «Paquetes» → «Paquete» en las definiciones de TAR. Ninguna altera la solución.
- Cada pregunta incorpora una explicación didáctica sobre distribución de aplicaciones, claves y firma digital, Launch4j, formatos de Windows, asistentes de instalación, ejecutables y archivos TAR. El resumen se amplía de U1–U3 a U1–U4.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 920 preguntas existentes antes de esta U4 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 9 de octubre de 2026 — Acceso a datos U4

- Asignatura ampliada: **Acceso a datos**, ID técnico `accesoDatos`.
- U4 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 71–80. JSON `contenido/tests/accesoDatos/u4-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 81.
- Las diez respuestas seleccionadas en el intento coinciden con las soluciones indicadas en la revisión; no ha sido necesario sustituir ninguna.
- Las únicas modificaciones textuales son correcciones ortográficas, gramaticales y de puntuación documentadas en el JSON. Incluyen la normalización de «Java» y «Hibernate» como nombres propios, la concordancia de «Ninguna ... es correcta» y signos finales en varios enunciados. Ninguna altera la solución.
- Cada pregunta incorpora una explicación didáctica sobre ORM, Hibernate, estados de entidades, POJOs, recuperación de objetos, HQL, SQL nativo, configuración XML y mapeo de herencia. El resumen se amplía de U1–U3 a U1–U4.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 930 preguntas existentes antes de esta U4 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 9 de octubre de 2026 — Sistemas de gestión empresarial U4

- Asignatura ampliada: **Sistemas de gestión empresarial**, ID técnico `sistemasGestionEmpresarial`.
- U4 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 71–80. JSON `contenido/tests/sistemasGestionEmpresarial/u4-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 81.
- En la pregunta original 10, la opción A («Contactos») fue seleccionada incorrectamente. Se conserva la solución explícita de la revisión: opción B, «Planificación de actividades».
- Las siglas «CMR» se mantienen exactamente como aparecen en el documento para no alterar el contenido evaluable sin autorización expresa.
- Las únicas modificaciones textuales son correcciones ortográficas y gramaticales de la pregunta original 1, documentadas en el JSON. Ninguna altera la solución.
- Cada pregunta incorpora una explicación didáctica sobre servicios profesionales, contactos, partes de horas, contabilidad, facturación, punto de venta, proyectos y planificación de actividades. El resumen se amplía de U1–U3 a U1–U4.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 940 preguntas existentes antes de esta U4 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 13 de octubre de 2026 — Multimedia U5

- Asignatura ampliada: **Programación multimedia y dispositivos móviles**, ID técnico `multimediaMoviles`.
- U5 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 81–90. JSON `contenido/tests/multimediaMoviles/u5-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 91.
- En la pregunta original 6, la opción B («Spinner») fue seleccionada incorrectamente. Se conserva la solución explícita de la revisión: opción D, «Ninguna de las anteriores».
- Las únicas modificaciones textuales son correcciones ortográficas y ortotipográficas documentadas en el JSON: `Textview` → `TextView`, «Transilación» → «Traslación» y normalización del espaciado del valor ARGB. Ninguna altera la solución.
- Cada pregunta incorpora una explicación didáctica sobre TextView, SeekBar, Spinner, animaciones, color ARGB, CheckBox, ProgressBar y EditText. El resumen se amplía de U1–U4 a U1–U5.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 950 preguntas existentes antes de esta U5 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 13 de octubre de 2026 — Servicios y procesos U5

- Asignatura ampliada: **Programación de servicios y procesos**, ID técnico `serviciosProcesos`.
- U5 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 81–90. JSON `contenido/tests/serviciosProcesos/u5-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 91.
- La pregunta original 1 incorpora la imagen entregada por el propietario, guardada como `www/images/servicios-procesos/pregunta81.png` y referenciada desde el JSON. La sincronización web crea su copia en `docs` y el manifiesto offline la incluye automáticamente.
- En las preguntas originales 6 y 8, las opciones seleccionadas en el intento son incorrectas. Se conservan las soluciones explícitas de la revisión: C («SSH») y D («Todas son correctas»), respectivamente.
- Se conserva literalmente la opción `SHS` de la pregunta original 6 para no convertirla en un segundo `SSH` ni alterar el contenido evaluable. Las únicas modificaciones textuales son la normalización `x.509` → `X.509` y la puntuación interrogativa de la pregunta original 7.
- Cada pregunta incorpora una explicación didáctica sobre claves criptográficas, AES, fases de un ataque, X.509, funciones hash, SSH, JCA, firma digital, autoridades certificadoras y DSA. El resumen se amplía de U1–U4 a U1–U5.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 960 preguntas existentes antes de esta U5 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 13 de octubre de 2026 — Desarrollo de interfaces U5

- Asignatura ampliada: **Desarrollo de interfaces**, ID técnico `desarrolloInterfaces`.
- U5 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 81–90. JSON `contenido/tests/desarrolloInterfaces/u5-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 91.
- Las diez opciones seleccionadas coinciden con las soluciones indicadas en la revisión; no ha sido necesario sustituir ninguna respuesta.
- Las únicas modificaciones textuales son correcciones ortográficas, léxicas y de puntuación documentadas en el JSON: retirada de dos puntos tras una interrogación, «sindicalización» → «sindicación», eliminación de una repetición accidental y corrección de `¿Qué tipos de etiquetas usa XML?`. Ninguna altera la solución.
- Cada pregunta incorpora una explicación didáctica sobre XML, atributos, SVG, eventos, RSS, edición colaborativa, MathML y MouseDown. El resumen se amplía de U1–U4 a U1–U5.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 970 preguntas existentes antes de esta U5 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 13 de octubre de 2026 — Acceso a datos U5

- Asignatura ampliada: **Acceso a datos**, ID técnico `accesoDatos`.
- U5 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 81–90. JSON `contenido/tests/accesoDatos/u5-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 91.
- Las diez opciones seleccionadas coinciden con las soluciones indicadas en la revisión; no ha sido necesario sustituir ninguna respuesta.
- Las únicas modificaciones textuales son correcciones gramaticales, ortográficas y de puntuación documentadas en el JSON: retirada de dos puntos tras una interrogación, «bases de datos objeto» → «bases de datos de objetos» y normalización de signos finales. Ninguna altera la solución.
- Cada pregunta incorpora una explicación didáctica sobre bases de datos de objetos y objeto-relacionales, OQL, tablas anidadas, REF, DISTINCT, SQL:1999, Oracle y ODL. El resumen se amplía de U1–U4 a U1–U5.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 980 preguntas existentes antes de esta U5 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 13 de octubre de 2026 — Sistemas de gestión empresarial U5

- Asignatura ampliada: **Sistemas de gestión empresarial**, ID técnico `sistemasGestionEmpresarial`.
- U5 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 81–90. JSON `contenido/tests/sistemasGestionEmpresarial/u5-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 91.
- En las preguntas originales 3, 8 y 9, las opciones seleccionadas en el intento son incorrectas. Se conservan las soluciones explícitas de la revisión: C («El estudio de viabilidad del sistema»), A («Dirigido al producto y dirigido al usuario») y D («Todas son correctas»), respectivamente.
- Las únicas modificaciones textuales son correcciones ortográficas y de puntuación documentadas en el JSON. Incluyen la coma final de «Caída de la eficacia general» y la normalización de los enunciados interrogativos; ninguna altera la solución.
- Cada pregunta incorpora una explicación didáctica sobre transición, viabilidad, diseño, pruebas en paralelo, usabilidad, requisitos, riesgos y selección de un ERP. El resumen se amplía de U1–U4 a U1–U5.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 990 preguntas existentes antes de esta U5 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 15 de octubre de 2026 — Multimedia U6

- Asignatura ampliada: **Programación multimedia y dispositivos móviles**, ID técnico `multimediaMoviles`.
- U6 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 91–100. JSON `contenido/tests/multimediaMoviles/u6-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 101.
- En la pregunta original 10, la opción seleccionada en el intento es incorrecta. Se conserva la solución explícita de la revisión: C («Dirty View»).
- La única modificación textual es la corrección ortográfica documentada «de ante mano» → «de antemano»; no altera la solución.
- Cada pregunta incorpora una explicación didáctica sobre GridView, ListView, menús, Action Bar, adaptadores, desplazamiento y reutilización de vistas. El resumen se amplía de U1–U5 a U1–U6.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 1000 preguntas existentes antes de esta U6 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 15 de octubre de 2026 — Desarrollo de interfaces U6

- Asignatura ampliada: **Desarrollo de interfaces**, ID técnico `desarrolloInterfaces`.
- U6 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 91–100. JSON `contenido/tests/desarrolloInterfaces/u6-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 101.
- Las diez opciones seleccionadas coinciden con las soluciones indicadas en la revisión; no ha sido necesario sustituir ninguna respuesta.
- Las únicas modificaciones textuales son correcciones ortográficas y de concordancia documentadas en el JSON: normalización de la sigla «GIF» y corrección de dos opciones sobre iconos. Ninguna altera la solución.
- Cada pregunta incorpora una explicación didáctica sobre GIF, compresión, tamaño y profundidad de imagen, resolución, Creative Commons, iconos, Photoshop e imágenes rasterizadas y vectoriales. El resumen se amplía de U1–U5 a U1–U6.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 1010 preguntas existentes antes de esta U6 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 15 de octubre de 2026 — Acceso a datos U6

- Asignatura ampliada: **Acceso a datos**, ID técnico `accesoDatos`.
- U6 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 91–100. JSON `contenido/tests/accesoDatos/u6-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 101.
- Las diez opciones seleccionadas coinciden con las soluciones indicadas en la revisión; no ha sido necesario sustituir ninguna respuesta.
- Las únicas modificaciones textuales son correcciones ortográficas y de puntuación documentadas en el JSON. El distractor «DTX» se conserva literalmente para no modificar ni volver ambigua la pregunta original.
- Cada pregunta incorpora una explicación didáctica sobre XML, DOM, esquemas, XPath, nodos, JAXB y transformaciones XSLT. El resumen se amplía de U1–U5 a U1–U6.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 1020 preguntas existentes antes de esta U6 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 15 de octubre de 2026 — Sistemas de gestión empresarial U6

- Asignatura ampliada: **Sistemas de gestión empresarial**, ID técnico `sistemasGestionEmpresarial`.
- U6 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 91–100. JSON `contenido/tests/sistemasGestionEmpresarial/u6-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 101.
- Las diez opciones seleccionadas coinciden con las soluciones indicadas en la revisión; no ha sido necesario sustituir ninguna respuesta.
- Las únicas modificaciones textuales son correcciones ortográficas, técnicas y de puntuación documentadas en el JSON: signos de interrogación, `postgres` → `PostgreSQL`, `Qweb` → `QWeb`, `xPath` → `XPath`, `cual` → `cuál` y normalización de signos finales. Ninguna altera la solución.
- La respuesta `B. Res_partner` de la pregunta original 2 se conserva literalmente, aunque la explicación muestra la convención técnica habitual `res.partner` → `res_partner`.
- Cada pregunta incorpora una explicación didáctica sobre la arquitectura de Odoo, ORM, modelos, vistas, menús, acciones, secuencias, XML, XPath, identificadores, tipos de modelo y QWeb. El resumen se amplía de U1–U5 a U1–U6.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 1030 preguntas existentes antes de esta U6 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 19 de octubre de 2026 — Multimedia U7

- Asignatura ampliada: **Programación multimedia y dispositivos móviles**, ID técnico `multimediaMoviles`.
- U7 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 101–110. JSON `contenido/tests/multimediaMoviles/u7-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 111.
- En la pregunta original 8, la opción seleccionada en el intento es incorrecta. Se conserva la solución explícita de la revisión: D («Notificación»).
- Las únicas modificaciones textuales son correcciones ortográficas y gramaticales documentadas en el JSON: `toast` → `Toast` y `tittle, summary key` → `title, summary y key`. Ninguna altera la solución.
- Cada pregunta incorpora una explicación didáctica sobre DatePickerDialog, preferencias, Image Asset Studio, AlertDialog, Toast, PendingIntent y notificaciones. El resumen se amplía de U1–U6 a U1–U7.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 1040 preguntas existentes antes de esta U7 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 19 de octubre de 2026 — Desarrollo de interfaces U7

- Asignatura ampliada: **Desarrollo de interfaces**, ID técnico `desarrolloInterfaces`.
- U7 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 101–110. JSON `contenido/tests/desarrolloInterfaces/u7-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 111.
- Las diez opciones seleccionadas coinciden con las soluciones indicadas en la revisión; no ha sido necesario sustituir ninguna respuesta.
- Las únicas modificaciones textuales son correcciones ortográficas y de puntuación documentadas en el JSON: incorporación de signos de interrogación en las preguntas 1 y 7 y de una coma tras `W3C` en la pregunta 8. Ninguna altera la solución.
- Cada pregunta incorpora una explicación didáctica sobre implementación, evaluación, moderación visual, color, parámetros subjetivos, evaluación heurística, principios WCAG, ISO, robustez, acceso anónimo y conformidad de páginas completas. El resumen se amplía de U1–U6 a U1–U7.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 1050 preguntas existentes antes de esta U7 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 19 de octubre de 2026 — Acceso a datos U7

- Asignatura ampliada: **Acceso a datos**, ID técnico `accesoDatos`.
- U7 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 101–110. JSON `contenido/tests/accesoDatos/u7-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 111.
- En la pregunta original 2, la opción A («Lenguaje de etiquetas para representar datos») fue seleccionada incorrectamente. Se conserva la solución explícita de la revisión: opción C, «Las respuestas A y B son correctas».
- Las únicas modificaciones textuales son correcciones ortográficas, gramaticales y de puntuación documentadas en el JSON. Incluyen signos de interrogación, la retirada de una palabra repetida y correcciones de concordancia; ninguna altera la solución.
- Cada pregunta incorpora una explicación didáctica sobre persistencia XML, transacciones, XQuery, expresiones FLWOR, XQJ, XML:DB, bases de datos nativas de XML, XQuery Update y eXist-db. El resumen se amplía de U1–U6 a U1–U7.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 1060 preguntas existentes antes de esta U7 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 19 de octubre de 2026 — Sistemas de gestión empresarial U7

- Asignatura ampliada: **Sistemas de gestión empresarial**, ID técnico `sistemasGestionEmpresarial`.
- U7 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 101–110. JSON `contenido/tests/sistemasGestionEmpresarial/u7-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 111.
- En la pregunta original 2, la opción A (`list`) fue seleccionada incorrectamente. Se conserva la solución explícita de la revisión: opción C, `QWeb`.
- Las únicas modificaciones textuales son correcciones ortográficas, gramaticales y de grafía técnica documentadas en el JSON: «tiupo» → «tipo», `qweb` → `QWeb`, `_init_.py` / `_manifest_.py` → `__init__.py` / `__manifest__.py` y retirada de la preposición innecesaria en «se deben de construir». Ninguna altera la opción correcta.
- Cada pregunta incorpora una explicación didáctica sobre registros XML, QWeb, estructura de módulos, herencia de vistas, archivos de seguridad CSV, informes, scaffold, campos calculados e `ir.ui.view`. El resumen se amplía de U1–U6 a U1–U7.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 1070 preguntas existentes antes de esta U7 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 20 de octubre de 2026 — Multimedia U8

- Asignatura ampliada: **Programación multimedia y dispositivos móviles**, ID técnico `multimediaMoviles`.
- U8 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 111–120. JSON `contenido/tests/multimediaMoviles/u8-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 121.
- En la pregunta original 4, la opción A (`2`) fue seleccionada incorrectamente. Se conserva la solución explícita de la revisión: opción B, `3`.
- Las únicas modificaciones textuales son correcciones ortográficas, gramaticales, técnicas y de puntuación documentadas en el JSON: `SnackBar` → `Snackbar`, `Floating ActionButton` → `FloatingActionButton`, incorporación del verbo que faltaba en la pregunta 4 y eliminación de un punto duplicado. Ninguna altera las soluciones.
- Cada pregunta incorpora una explicación didáctica sobre CardView, navegación, ActionBar, FloatingActionButton, Palette, color, Snackbar, elevación, TextInputLayout y reciclado de vistas. El resumen se amplía de U1–U7 a U1–U8.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 1080 preguntas existentes antes de esta U8 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 20 de octubre de 2026 — Desarrollo de interfaces U8

- Asignatura ampliada: **Desarrollo de interfaces**, ID técnico `desarrolloInterfaces`.
- U8 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 111–120. JSON `contenido/tests/desarrolloInterfaces/u8-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 121.
- En las preguntas originales 5, 7 y 10, las opciones seleccionadas en el intento son incorrectas. Se conservan las soluciones explícitas de la revisión: D («Ninguna de las anteriores es correcta»), B («Documentación sobre un problema o proceso concreto») y D («Todas las anteriores son incorrectas»), respectivamente.
- Las únicas modificaciones textuales son correcciones ortográficas, gramaticales y de puntuación documentadas en el JSON: retirada de dos puntos tras una interrogación, incorporación de signos de interrogación, `esto` → `estos`, `video` → `vídeo`, incorporación del artículo que faltaba en una opción y normalización de mayúsculas. Ninguna altera las soluciones.
- Se conservan literalmente los términos `Help Work World` e `IPJ` porque forman parte de las opciones del contenido evaluable.
- Cada pregunta incorpora una explicación didáctica sobre sistemas y formatos de ayuda, estructura de JavaHelp, guías rápidas y de referencia, ayuda contextual y documentación técnica. El resumen se amplía de U1–U7 a U1–U8.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 1090 preguntas existentes antes de esta U8 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 20 de octubre de 2026 — Acceso a datos U8

- Asignatura ampliada: **Acceso a datos**, ID técnico `accesoDatos`.
- U8 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 111–120. JSON `contenido/tests/accesoDatos/u8-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 121.
- Las diez opciones seleccionadas coinciden con las soluciones indicadas en la revisión; no ha sido necesario sustituir ninguna respuesta.
- Las únicas modificaciones textuales son correcciones ortográficas, gramaticales, técnicas y de puntuación documentadas en el JSON. Incluyen `EjB` → `EJB`, `JavaBeans` → `JavaBean` cuando se refiere a una unidad, `serializable` → `Serializable`, `Manifest.mf` → `MANIFEST.MF`, `objecto` → `objeto`, signos de interrogación, concordancias y eliminación de una letra sobrante. Ninguna altera las soluciones.
- Cada pregunta incorpora una explicación didáctica sobre componentes, JavaBeans, Enterprise JavaBeans, descriptores de despliegue, JSP, servlets y el patrón MVC. El resumen se amplía de U1–U7 a U1–U8.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 1100 preguntas existentes antes de esta U8 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 20 de octubre de 2026 — Sistemas de gestión empresarial U8

- Asignatura ampliada: **Sistemas de gestión empresarial**, ID técnico `sistemasGestionEmpresarial`.
- U8 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 111–120. JSON `contenido/tests/sistemasGestionEmpresarial/u8-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 121.
- Las diez opciones seleccionadas coinciden con las soluciones indicadas en la revisión; no ha sido necesario sustituir ninguna respuesta.
- Las únicas modificaciones textuales son correcciones ortográficas, gramaticales y de grafía técnica documentadas en el JSON: `en referencia a` → `respecto a`, `pgAdmin4` → `pgAdmin 4`, incorporación de la preposición que faltaba en una opción, tilde en `qué`, espaciado de `System (OdooBot)` y normalización de una mayúscula. Ninguna altera las soluciones.
- Cada pregunta incorpora una explicación didáctica sobre derechos de acceso, usuarios, `pg_dump`, workers, proxy inverso, configuración del servidor, superusuario, OdooBot y correo corporativo. El resumen se amplía de U1–U7 a U1–U8.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 1110 preguntas existentes antes de esta U8 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 22 de octubre de 2026 — Multimedia U9

- Asignatura ampliada: **Programación multimedia y dispositivos móviles**, ID técnico `multimediaMoviles`.
- U9 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 121–130. JSON `contenido/tests/multimediaMoviles/u9-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 131.
- En las preguntas originales 7 y 8, las opciones seleccionadas en el intento son incorrectas. Se conservan las soluciones explícitas de la revisión: D («Todas las opciones son correctas») y C («Es aquel proceso que necesita esperar resultados y/o pausa el proceso que lo invocó»), respectivamente.
- Las únicas modificaciones textuales son correcciones ortográficas, gramaticales, técnicas y de puntuación documentadas en el JSON. Incluyen signos de interrogación, `Post()` → `post()`, eliminación de puntos unidos a nombres de métodos o duplicados, `simultanea` → `simultánea` y `todas la demás` → `todas las demás`. Ninguna altera las soluciones.
- Cada pregunta incorpora una explicación didáctica sobre AsyncTask, comunicación con el hilo principal, fragmentos, DialogFragment, Bound Service, sincronía, difusiones persistentes y trabajo en hilos secundarios. Las explicaciones advierten de que AsyncTask y `sendStickyBroadcast()` están obsoletos, sin alterar las respuestas históricas evaluadas. El resumen se amplía de U1–U8 a U1–U9.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 1120 preguntas existentes antes de esta U9 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.

## Incorporación del 22 de octubre de 2026 — Desarrollo de interfaces U9

- Asignatura ampliada: **Desarrollo de interfaces**, ID técnico `desarrolloInterfaces`.
- U9 autoevaluación: 10 preguntas de repaso/apoyo con soluciones, IDs 121–130. JSON `contenido/tests/desarrolloInterfaces/u9-test1.json`. El siguiente test de apoyo debe comenzar en el ID libre 131.
- En la pregunta original 7, la opción C fue seleccionada incorrectamente. Se conserva la solución explícita de la revisión: D («Nunca, dependen totalmente de los informes»).
- Las únicas modificaciones textuales son correcciones ortográficas, técnicas y de puntuación documentadas en el JSON: retirada de los dos puntos situados tras una interrogación, incorporación de signos de interrogación, normalización de `Column Footer` y adición de un punto final omitido. Ninguna altera las soluciones.
- Se conservan literalmente el sentido del enunciado de la pregunta 2 y la formulación de la pregunta 7, aunque resulten discutibles, porque corregirlas exigiría modificar contenido evaluable más allá de las erratas autorizadas. Las explicaciones aclaran los conceptos sin sustituir las respuestas del documento.
- Cada pregunta incorpora una explicación didáctica sobre secciones de informes, buenas prácticas, gráficas, rutas de imágenes, consultas SQL, informes incrustados, subinformes y variables. El resumen se amplía de U1–U8 a U1–U9.
- El bloque de examen final continúa pendiente. Los IDs 1–40 permanecen libres y el modo examen sigue desactivado hasta que se incorporen completos.
- Las 1130 preguntas existentes antes de esta U9 quedan protegidas por una huella específica en `scripts/test-new-subject.js`.
