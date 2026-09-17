const resumenAccesoDatos = `
<article class="study-summary">
  <header class="study-summary__hero">
    <span class="study-summary__eyebrow">U1–U2 · Persistencia, bases de datos y ficheros</span>
    <h3 class="study-summary__title">Acceso a datos</h3>
    <p class="study-summary__lead">Acceder a datos implica decidir cómo se representan, dónde se conservan y qué garantías debe ofrecer el sistema cuando los consulta o modifica.</p>
  </header>
  <section class="study-summary__section">
    <h4>Datos persistentes y transitorios</h4>
    <p>La memoria principal mantiene información mientras el programa está en ejecución y normalmente pierde su contenido al apagar el equipo. El almacenamiento persistente conserva los datos entre sesiones mediante archivos, bases de datos u otros medios no volátiles.</p>
  </section>
  <section class="study-summary__section">
    <h4>Transacciones y propiedades ACID</h4>
    <p>Atomic impone el principio de todo o nada; Consistent protege las reglas de integridad; Isolated evita interferencias incorrectas entre transacciones concurrentes; y Durable garantiza que los cambios confirmados sobrevivan a fallos. Ante un error, la atomicidad revierte cambios parciales, pero no corrige automáticamente el dato que originó el problema.</p>
  </section>
  <section class="study-summary__section">
    <h4>Consultas, cursores e iteradores</h4>
    <p>Un cursor recorre las filas producidas por una consulta. Un iterador es una abstracción general para avanzar por una secuencia de objetos. Pueden utilizarse juntos al procesar resultados, aunque representan conceptos diferentes y no son mecanismos de almacenamiento.</p>
  </section>
  <section class="study-summary__section">
    <h4>Índices y eficiencia</h4>
    <p>Un índice evita revisar todos los registros en muchas búsquedas al mantener una estructura auxiliar organizada. Puede mejorar notablemente las lecturas, pero ocupa espacio y añade trabajo a las escrituras, por lo que debe diseñarse a partir de las consultas que realmente utilizará la aplicación.</p>
  </section>
  <section class="study-summary__section">
    <h4>Modelos relacional, NoSQL y XML</h4>
    <p>El modelo relacional trabaja con tablas, relaciones y restricciones. NoSQL agrupa modelos como documentos, clave-valor, columnas y grafos; algunos motores modernos también ofrecen transacciones y validación. XML representa información jerárquica como un árbol, y las bases de datos especializadas pueden consultarla, transformarla, validarla e indexarla.</p>
  </section>
  <section class="study-summary__section">
    <h4>Rutas y operaciones con ficheros</h4>
    <p><code>File</code> representa una ruta abstracta y permite consultar datos como la existencia, el tamaño o los permisos. No abre el contenido: la lectura y la escritura se realizan mediante flujos, lectores o canales. Su API también incluye operaciones como crear, renombrar o eliminar archivos y directorios.</p>
  </section>
  <section class="study-summary__section">
    <h4>Acceso secuencial y aleatorio</h4>
    <p><code>FileReader</code> y <code>FileWriter</code> procesan caracteres de manera secuencial. <code>RandomAccessFile</code> mantiene un puntero que puede desplazarse con <code>seek()</code> para leer o escribir en una posición concreta. El buffering mejora el rendimiento agrupando operaciones, pero no constituye otro modo de acceso.</p>
  </section>
  <section class="study-summary__section">
    <h4>Texto, bytes y UTF-8</h4>
    <p>Un fichero de texto contiene bytes interpretados como caracteres mediante una codificación. UTF-8 representa todo Unicode, conserva los mismos valores para los caracteres ASCII y emplea varios bytes cuando son necesarios. Al leer o escribir texto conviene indicar la codificación para obtener el mismo resultado en cualquier sistema.</p>
  </section>
  <section class="study-summary__section">
    <h4>Tratamiento de excepciones</h4>
    <p><code>try</code> delimita operaciones que pueden fallar, <code>catch</code> aplica el tratamiento apropiado y <code>finally</code> ejecuta tareas finales. Se pueden agrupar excepciones con el mismo tratamiento o utilizar manejadores específicos. Para recursos cerrables, <code>try-with-resources</code> simplifica el cierre seguro.</p>
  </section>
</article>`;
