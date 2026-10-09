const resumenAccesoDatos = `
<article class="study-summary">
  <header class="study-summary__hero">
    <span class="study-summary__eyebrow">U1–U4 · Persistencia, JDBC y ORM</span>
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
  <section class="study-summary__section">
    <h4>JDBC, API y drivers</h4>
    <p>JDBC ofrece a las aplicaciones Java una API común para acceder a bases de datos. El driver implementa la comunicación con un gestor concreto y traduce las operaciones de JDBC a su protocolo. Algunas arquitecturas añaden una segunda traducción mediante un puente, aunque un driver directo suele reducir complejidad y sobrecarga.</p>
  </section>
  <section class="study-summary__section">
    <h4>Sentencias SQL desde Java</h4>
    <p><code>Statement</code> ejecuta SQL sin parámetros; <code>PreparedStatement</code> prepara una sentencia con marcadores <code>?</code> cuyos valores se asignan antes de ejecutarla; y <code>CallableStatement</code> permite llamar a procedimientos almacenados. <code>executeQuery()</code> se usa para consultas con resultados y <code>executeUpdate()</code> para modificaciones como INSERT, UPDATE o DELETE.</p>
  </section>
  <section class="study-summary__section">
    <h4>Transacciones en JDBC</h4>
    <p>Al desactivar el modo auto-commit, varias sentencias pueden formar una sola transacción. <code>commit()</code> confirma todos sus cambios y <code>rollback()</code> los deshace si una operación falla. Esta unidad de trabajo evita que una actualización relacionada quede aplicada solo a medias.</p>
  </section>
  <section class="study-summary__section">
    <h4>Índices y conectores</h4>
    <p>Un índice mantiene claves y referencias para localizar registros sin recorrer todos los datos; en sistemas de ficheros puede almacenarse separadamente. Un conector permite abrir la comunicación con la fuente, enviar consultas y recuperar resultados. El índice acelera el acceso; el conector hace posible la comunicación.</p>
  </section>
  <section class="study-summary__section">
    <h4>Búferes</h4>
    <p>Un búfer es una región de memoria temporal que acumula datos durante una transferencia. Al trabajar por bloques reduce el número de accesos físicos y ayuda a coordinar componentes con velocidades diferentes. Debe vaciarse o cerrarse correctamente para garantizar que los datos pendientes lleguen a su destino.</p>
  </section>
  <section class="study-summary__section">
    <h4>Mapeo objeto-relacional</h4>
    <p>Un <strong>ORM</strong> relaciona las clases y objetos de una aplicación con tablas y filas de una base de datos relacional. <strong>Hibernate</strong> aplica este modelo en Java y gestiona gran parte de la conversión entre ambos mundos. Las entidades pueden implementarse como POJOs sencillos y describir su mapeo mediante anotaciones o archivos XML.</p>
  </section>
  <section class="study-summary__section">
    <h4>Estados de una entidad</h4>
    <p>Una entidad es <strong>transitoria</strong> antes de asociarse a un contexto de persistencia; <strong>persistente</strong> mientras la Session la gestiona; <strong>separada</strong> cuando conserva su identidad pero ya no está asociada a ese contexto; y <strong>eliminada</strong> cuando está programada para borrarse. Comprender el estado permite prever qué cambios se sincronizarán con la base de datos.</p>
  </section>
  <section class="study-summary__section">
    <h4>Recuperación y consultas en Hibernate</h4>
    <p>Las operaciones <code>get()</code> y <code>load()</code> recuperan entidades por su identificador en la API tradicional. Para consultas más amplias, <strong>HQL</strong> trabaja con entidades y atributos mediante <code>createQuery()</code>; <code>createNativeQuery()</code> ejecuta SQL directamente sobre el gestor.</p>
  </section>
  <section class="study-summary__section">
    <h4>Configuración, mapeo y herencia</h4>
    <p><code>hibernate.cfg.xml</code> reúne la configuración clásica del framework y los archivos <code>.hbm.xml</code> describen el mapeo entre clases y tablas. Hibernate también permite representar jerarquías mediante estrategias como una tabla por jerarquía, una tabla por subclase o una tabla por clase concreta.</p>
  </section>
</article>`;
