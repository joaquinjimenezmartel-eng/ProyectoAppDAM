// Generado desde contenido/tests/accesoDatos/*.json. Ejecutar npm run build:content.
const preguntasAccesoDatos = [
  {
    "id": 41,
    "pregunta": "¿Cuál de las siguientes afirmaciones describe mejor una característica de las bases de datos XML nativas?",
    "opciones": [
      "A. Son las bases de datos más empleadas en la actualidad.",
      "B. Se caracterizan por la facilidad de usar las transacciones.",
      "C. Se caracterizan por permitir introducir objetos directamente.",
      "D. Permiten la consulta, modificación, transformación y validación de documentos XML."
    ],
    "respuesta_correcta": "D. Permiten la consulta, modificación, transformación y validación de documentos XML.",
    "explicacion": "Una base de datos XML nativa conserva los documentos siguiendo su estructura XML y ofrece operaciones adaptadas a ese modelo. Puede consultar nodos y valores, modificar el contenido, transformarlo a otras representaciones y comprobarlo mediante reglas o esquemas de validación. Su ventaja principal no es ser el tipo de base de datos más utilizado, sino trabajar directamente con información jerárquica sin tener que convertirla primero en filas y columnas."
  },
  {
    "id": 42,
    "pregunta": "Almacenamiento primario o memoria principal:",
    "opciones": [
      "A. Su capacidad es baja y la información se borra cuando dejamos de trabajar con ella o cuando apagamos el ordenador.",
      "B. Permite el almacenamiento masivo de la información durante un periodo extendido de tiempo.",
      "C. En estas memorias se almacenan los datos persistentes.",
      "D. La segunda y tercera son correctas."
    ],
    "respuesta_correcta": "A. Su capacidad es baja y la información se borra cuando dejamos de trabajar con ella o cuando apagamos el ordenador.",
    "explicacion": "La memoria principal, normalmente la RAM, mantiene los datos y programas que el procesador necesita mientras están en uso. Es rápida, pero suele ofrecer menos capacidad que el almacenamiento secundario y es volátil: al apagar el equipo pierde su contenido. Los datos que deben conservarse se guardan en medios persistentes, como una unidad SSD o una base de datos almacenada en disco."
  },
  {
    "id": 43,
    "pregunta": "Dependiendo de la memoria o almacenamiento donde se encuentren los datos, pueden ser persistentes o…:",
    "opciones": [
      "A. Temporales.",
      "B. Transitorios.",
      "C. Transportables.",
      "D. Transaccionales."
    ],
    "respuesta_correcta": "B. Transitorios.",
    "explicacion": "Los datos persistentes sobreviven al cierre de la aplicación o al apagado del equipo porque se guardan en un medio no volátil. Los datos transitorios existen solo durante un proceso, una sesión o una ejecución determinada y pueden perderse al finalizarla. Una variable mantenida únicamente en memoria es transitoria; un registro confirmado y almacenado en una base de datos está pensado para persistir."
  },
  {
    "id": 44,
    "pregunta": "En ACID, esta característica: completadas las transacciones, se deben guardar todos los datos modificados como datos persistentes.",
    "opciones": [
      "A. Atomic.",
      "B. Consistent.",
      "C. Isolated.",
      "D. Durable."
    ],
    "respuesta_correcta": "D. Durable.",
    "explicacion": "Durable representa la durabilidad: cuando una transacción se confirma, sus cambios deben permanecer aunque después se produzca un fallo o se reinicie el sistema. El gestor de la base de datos puede apoyarse en registros de transacciones, escritura estable y mecanismos de recuperación. No debe confundirse con Atomic, que exige aplicar todas las operaciones de una transacción o no aplicar ninguna."
  },
  {
    "id": 45,
    "pregunta": "En ACID, esta característica: no se deben producir errores en la transacción y, si los hubiera, deben corregirse automáticamente.",
    "opciones": [
      "A. Atomic.",
      "B. Consistent.",
      "C. Isolated.",
      "D. Durable."
    ],
    "respuesta_correcta": "A. Atomic.",
    "explicacion": "Atomic expresa el principio de todo o nada. Si una operación de la transacción falla, el sistema revierte el conjunto para evitar que queden cambios parciales; si todas tienen éxito, puede confirmarlo. Esta recuperación no corrige por sí sola el dato que causó el error: restaura un estado válido y permite que la aplicación trate el problema o vuelva a intentarlo."
  },
  {
    "id": 46,
    "pregunta": "Iteradores o cursores:",
    "opciones": [
      "A. Son lo mismo y permiten el almacenamiento persistente de información.",
      "B. No son lo mismo y permiten el almacenamiento persistente de información.",
      "C. Son lo mismo y permiten realizar consultas en una base de datos.",
      "D. No son lo mismo y permiten realizar consultas en una base de datos."
    ],
    "respuesta_correcta": "D. No son lo mismo y permiten realizar consultas en una base de datos.",
    "explicacion": "Un cursor representa una posición dentro del resultado de una consulta y permite avanzar por sus filas. Un iterador es una abstracción de programación para recorrer elementos de una colección o secuencia. Pueden colaborar al procesar resultados, pero no son conceptos idénticos ni sirven para hacer persistente la información. En ambos casos, su utilidad está relacionada con acceder ordenadamente a los datos recuperados."
  },
  {
    "id": 47,
    "pregunta": "La indexación permite:",
    "opciones": [
      "A. Mayor almacenamiento.",
      "B. Una búsqueda más eficiente.",
      "C. Un registro automático de la información.",
      "D. Ninguna de las anteriores."
    ],
    "respuesta_correcta": "B. Una búsqueda más eficiente.",
    "explicacion": "Un índice mantiene una estructura auxiliar con valores de una o varias columnas o propiedades y referencias a los datos correspondientes. Así, el gestor puede localizar muchos resultados sin revisar todos los registros. Los índices aceleran consultas adecuadas, pero ocupan espacio y añaden trabajo a inserciones y actualizaciones, por lo que deben elegirse según las búsquedas reales de la aplicación."
  },
  {
    "id": 48,
    "pregunta": "Las bases de datos relacionales:",
    "opciones": [
      "A. Poseen una gran escalabilidad.",
      "B. Manejan bien las transacciones.",
      "C. Emplean mecanismos de seguridad y recuperación de datos.",
      "D. Todas las anteriores son correctas."
    ],
    "respuesta_correcta": "D. Todas las anteriores son correctas.",
    "explicacion": "Las bases de datos relacionales organizan la información en tablas relacionadas y suelen ofrecer transacciones, restricciones de integridad, control de acceso, copias de seguridad y recuperación. También pueden escalar mediante mejores recursos, réplicas, particiones u otras arquitecturas. La escalabilidad no es ilimitada ni automática: depende del motor, del diseño del esquema, de las consultas y de la infraestructura utilizada."
  },
  {
    "id": 49,
    "pregunta": "Tipo de base de datos que no emplea tablas en el almacenamiento ni tampoco transacciones y restricciones:",
    "opciones": [
      "A. XML-enabled.",
      "B. Bases de datos relacionales.",
      "C. Bases de datos NoSQL.",
      "D. Todas las anteriores son incorrectas."
    ],
    "respuesta_correcta": "C. Bases de datos NoSQL.",
    "explicacion": "NoSQL agrupa modelos no relacionales, como documentos, clave-valor, columnas y grafos, que no necesitan organizar la información en tablas. El contraste clásico destaca esquemas más flexibles y menos restricciones predefinidas. Sin embargo, NoSQL no significa ausencia total de garantías: muchos sistemas actuales permiten validación, operaciones atómicas e incluso transacciones con varias operaciones. Sus capacidades concretas dependen del motor elegido."
  },
  {
    "id": 50,
    "pregunta": "XML:",
    "opciones": [
      "A. Posee un orden jerárquico.",
      "B. Posee un orden arborescente.",
      "C. Puede poseer índices.",
      "D. Todas las anteriores son correctas."
    ],
    "respuesta_correcta": "D. Todas las anteriores son correctas.",
    "explicacion": "Un documento XML organiza elementos anidados formando una jerarquía que puede representarse como un árbol con un único elemento raíz. Los motores que almacenan o consultan XML pueden crear índices sobre nombres, rutas, texto o valores para acelerar determinadas búsquedas. El índice no forma parte obligatoria del archivo XML: es una estructura adicional que administra la herramienta o la base de datos."
  },
  {
    "id": 51,
    "pregunta": "La clase File de Java permite:",
    "opciones": [
      "A. Obtener información sobre un fichero.",
      "B. Crear un fichero.",
      "C. Abrir un fichero.",
      "D. Esa clase no es de Java."
    ],
    "respuesta_correcta": "A. Obtener información sobre un fichero.",
    "explicacion": "java.io.File representa una ruta abstracta a un archivo o directorio. Permite consultar información como su existencia, tamaño, permisos, nombre o ubicación, pero no abre el contenido para leerlo o escribirlo; para eso se utilizan flujos, lectores o canales. File también incluye operaciones sobre el sistema de archivos, como createNewFile(), mkdir() y delete(). Por tanto, su función principal es describir y consultar una ruta, aunque su API no se limita exclusivamente a obtener información."
  },
  {
    "id": 52,
    "pregunta": "La función seek() permite:",
    "opciones": [
      "A. Buscar metainformación de un fichero.",
      "B. Situar el cursor en la posición deseada.",
      "C. Introducir información en ficheros.",
      "D. Todas las anteriores son incorrectas."
    ],
    "respuesta_correcta": "B. Situar el cursor en la posición deseada.",
    "explicacion": "En RandomAccessFile, seek(posición) desplaza el puntero del archivo al desplazamiento indicado en bytes desde el inicio. La siguiente lectura o escritura comienza en esa posición. Esto permite acceder directamente a una parte concreta sin recorrer todo lo anterior. seek() no busca metadatos ni escribe por sí mismo: únicamente cambia la posición desde la que actuará la operación posterior."
  },
  {
    "id": 53,
    "pregunta": "Las bases de datos de ficheros:",
    "opciones": [
      "A. Ya no se usan.",
      "B. Siguen usándose ampliamente.",
      "C. Su uso se ha reducido a ciertos sectores específicos.",
      "D. Ninguna de las anteriores es correcta."
    ],
    "respuesta_correcta": "C. Su uso se ha reducido a ciertos sectores específicos.",
    "explicacion": "Los sistemas basados directamente en ficheros almacenan la información en archivos cuya estructura y acceso controla la aplicación. Siguen siendo útiles en escenarios concretos, pero para datos relacionados y compartidos suelen sustituirse por gestores de bases de datos que ofrecen consultas, concurrencia, integridad, seguridad y recuperación. Un archivo puede ser suficiente para una configuración o un intercambio sencillo; no siempre resulta adecuado como base de un sistema multiusuario."
  },
  {
    "id": 54,
    "pregunta": "Las clases FileReader y FileWriter pertenecen a:",
    "opciones": [
      "A. El modo de acceso secuencial.",
      "B. El modo de acceso aleatorio.",
      "C. El modo de acceso buffering.",
      "D. Todas las anteriores son incorrectas."
    ],
    "respuesta_correcta": "A. El modo de acceso secuencial.",
    "explicacion": "FileReader y FileWriter trabajan con flujos de caracteres que se consumen o producen siguiendo una secuencia. No ofrecen una operación como seek() para saltar directamente a una posición arbitraria. El buffering tampoco es un modo de acceso independiente: BufferedReader y BufferedWriter envuelven otros flujos para reducir operaciones físicas y mejorar la eficiencia. Cuando importa la codificación, conviene indicarla explícitamente mediante los constructores adecuados."
  },
  {
    "id": 55,
    "pregunta": "Los ficheros de texto almacenan:",
    "opciones": [
      "A. bytes.",
      "B. bits.",
      "C. Cadenas de caracteres.",
      "D. Las dos primeras son correctas."
    ],
    "respuesta_correcta": "C. Cadenas de caracteres.",
    "explicacion": "Un fichero de texto representa una secuencia de caracteres organizada según una codificación, como UTF-8. Físicamente el almacenamiento siempre utiliza bytes y, en último término, bits; la diferencia está en cómo se interpretan esos bytes. En un archivo de texto se decodifican como caracteres, mientras que en uno binario se interpretan según el formato concreto de imágenes, audio, objetos u otros datos."
  },
  {
    "id": 56,
    "pregunta": "Los modos de acceso son aleatorio y:",
    "opciones": [
      "A. De cierre.",
      "B. buffering.",
      "C. Secuencial.",
      "D. Ninguna de las anteriores."
    ],
    "respuesta_correcta": "C. Secuencial.",
    "explicacion": "En el acceso secuencial, los datos se recorren en orden desde la posición actual; para llegar a un elemento posterior se procesan los anteriores. En el acceso aleatorio se puede colocar el puntero directamente en una posición concreta, como permite RandomAccessFile. El cierre libera recursos y el buffering agrupa operaciones para mejorar el rendimiento, pero ninguno de ellos constituye uno de estos dos modos de acceso."
  },
  {
    "id": 57,
    "pregunta": "Para resolver excepciones podemos:",
    "opciones": [
      "A. Dar una única solución para todo.",
      "B. Dar soluciones individuales para cada una de las excepciones.",
      "C. Las dos anteriores son válidas.",
      "D. Las excepciones no se pueden resolver."
    ],
    "respuesta_correcta": "C. Las dos anteriores son válidas.",
    "explicacion": "Java permite agrupar varios tipos de excepción que comparten el mismo tratamiento o utilizar bloques catch separados para aplicar respuestas diferentes. Un manejador general puede ser útil si todas las situaciones requieren la misma acción, mientras que los manejadores específicos permiten recuperar el programa o informar al usuario con mayor precisión. Debe evitarse capturar excepciones demasiado generales si eso oculta errores que necesitan un tratamiento distinto."
  },
  {
    "id": 58,
    "pregunta": "RandomAccessFile es una clase para:",
    "opciones": [
      "A. El acceso aleatorio.",
      "B. El cierre del buffer.",
      "C. La búsqueda dentro de un fichero.",
      "D. Ninguna de las anteriores."
    ],
    "respuesta_correcta": "A. El acceso aleatorio.",
    "explicacion": "RandomAccessFile permite leer y, según el modo de apertura, escribir en posiciones arbitrarias de un archivo. Mantiene un puntero que puede consultarse con getFilePointer() y desplazarse con seek(). Resulta útil cuando los registros tienen posiciones conocidas o se necesita actualizar una parte concreta sin procesar el archivo completo. No representa un buffer ni realiza por sí sola búsquedas por contenido."
  },
  {
    "id": 59,
    "pregunta": "Try, catch y finally se emplean para:",
    "opciones": [
      "A. La codificación.",
      "B. La descodificación.",
      "C. La lectura de ficheros.",
      "D. Ninguna de las anteriores es correcta."
    ],
    "respuesta_correcta": "D. Ninguna de las anteriores es correcta.",
    "explicacion": "try, catch y finally forman parte del mecanismo de tratamiento de excepciones. try delimita el código que puede fallar, catch recibe y trata una excepción compatible y finally contiene tareas que deben ejecutarse al finalizar el bloque, haya ocurrido o no una excepción. Pueden aparecer al leer archivos porque esas operaciones pueden fallar, pero no son instrucciones específicas de lectura, codificación o descodificación. Para cerrar recursos, suele preferirse try-with-resources."
  },
  {
    "id": 60,
    "pregunta": "UTF-8:",
    "opciones": [
      "A. Está desapareciendo.",
      "B. Es compatible con ASCII.",
      "C. Es un tipo de fichero no muy usado.",
      "D. Todas las anteriores son correctas."
    ],
    "respuesta_correcta": "B. Es compatible con ASCII.",
    "explicacion": "UTF-8 es una codificación de longitud variable para representar Unicode mediante unidades de 8 bits. Los caracteres del repertorio ASCII conservan en UTF-8 los mismos valores de byte, lo que facilita la compatibilidad con protocolos y archivos existentes. Los demás caracteres se representan con secuencias de varios bytes. UTF-8 no es un tipo de fichero: es la codificación utilizada para convertir caracteres en bytes y recuperarlos después."
  },
  {
    "id": 61,
    "pregunta": "El placeholder más empleado es:",
    "opciones": [
      "A. next.",
      "B. Replay.",
      "C. ?.",
      "D. Ninguna de las anteriores."
    ],
    "respuesta_correcta": "C. ?.",
    "explicacion": "En un PreparedStatement de JDBC, el signo de interrogación actúa como marcador de posición para cada parámetro de entrada. Antes de ejecutar la sentencia se asigna un valor a cada marcador mediante métodos como setString(), setInt() o setDate(), numerándolos desde 1. Así los datos se transmiten como valores y no se concatenan directamente dentro del código SQL."
  },
  {
    "id": 62,
    "pregunta": "JDBC puede ejecutar SELECT, UPDATE, DELETE, etc. aunque son parte de:",
    "opciones": [
      "A. executeQuery().",
      "B. SQL.",
      "C. CSV.",
      "D. ODBC."
    ],
    "respuesta_correcta": "B. SQL.",
    "explicacion": "SELECT, UPDATE y DELETE son sentencias del lenguaje SQL. JDBC es la API de Java que permite enviar esas sentencias a una base de datos mediante un driver. executeQuery() es uno de los métodos de ejecución —se utiliza normalmente con consultas que devuelven un ResultSet—, pero no es el lenguaje al que pertenecen las sentencias."
  },
  {
    "id": 63,
    "pregunta": "Las transacciones permiten:",
    "opciones": [
      "A. Ejecutar diversas acciones predefinidas simultáneamente.",
      "B. Eliminar los resultados de diversas acciones predefinidas simultáneamente.",
      "C. Las dos primeras son correctas.",
      "D. Todas las anteriores son incorrectas."
    ],
    "respuesta_correcta": "C. Las dos primeras son correctas.",
    "explicacion": "Una transacción agrupa varias operaciones para tratarlas como una unidad. Si todo termina correctamente, commit hace permanentes sus resultados; si aparece un error, rollback permite deshacer los cambios del grupo. De esta forma, varias acciones relacionadas se confirman juntas o se eliminan sus efectos para evitar que los datos queden en un estado parcial."
  },
  {
    "id": 64,
    "pregunta": "Los índices:",
    "opciones": [
      "A. Son un fichero.",
      "B. Son un apartado del fichero.",
      "C. Son un tipo especial de fichero.",
      "D. Todas las anteriores son incorrectas."
    ],
    "respuesta_correcta": "A. Son un fichero.",
    "explicacion": "Un índice mantiene una estructura auxiliar con claves y referencias a la ubicación de los registros para acelerar las búsquedas. En sistemas basados en ficheros puede almacenarse como un fichero de índice separado del fichero principal de datos. En un gestor de bases de datos moderno su almacenamiento físico lo administra el propio motor, pero su función continúa siendo localizar información sin recorrer todos los registros."
  },
  {
    "id": 65,
    "pregunta": "Los conectores:",
    "opciones": [
      "A. Permiten enlazar diversos drivers.",
      "B. Permiten realizar consultas.",
      "C. Permiten indexar ficheros.",
      "D. No existen en las bases de datos."
    ],
    "respuesta_correcta": "B. Permiten realizar consultas.",
    "explicacion": "Un conector proporciona a la aplicación el acceso necesario para comunicarse con una base de datos. A través de él se abre la conexión, se envían sentencias SQL y se reciben resultados. En Java, JDBC define la API común y el driver implementa la comunicación concreta con el gestor; el conector no crea índices por sí mismo ni enlaza varios drivers entre sí."
  },
  {
    "id": 66,
    "pregunta": "Los procedimientos pueden introducirse con:",
    "opciones": [
      "A. Las sentencias UPDATE, DELETE e INSERT.",
      "B. Las cláusulas WHERE con UPDATE y DELETE.",
      "C. Las dos primeras son correctas.",
      "D. Todas las anteriores son incorrectas."
    ],
    "respuesta_correcta": "D. Todas las anteriores son incorrectas.",
    "explicacion": "Un procedimiento almacenado se define en la base de datos y se invoca mediante la sintaxis prevista por el gestor, habitualmente CALL. En JDBC se utiliza CallableStatement para preparar la llamada y gestionar sus parámetros de entrada o salida. UPDATE, DELETE e INSERT modifican datos, mientras que WHERE filtra filas; ninguno de esos elementos es por sí mismo el mecanismo para introducir o invocar un procedimiento."
  },
  {
    "id": 67,
    "pregunta": "SQL:",
    "opciones": [
      "A. Solo se emplea con API.",
      "B. Solo se emplea con drivers.",
      "C. Se emplea con ambos, incluso de manera simultánea.",
      "D. Ninguna de las anteriores es correcta."
    ],
    "respuesta_correcta": "C. Se emplea con ambos, incluso de manera simultánea.",
    "explicacion": "La aplicación utiliza una API como JDBC para construir y ejecutar operaciones, y el driver traduce esas llamadas al protocolo que entiende la base de datos. Las sentencias SQL atraviesan ambos niveles durante la misma comunicación: la API ofrece la interfaz al programa y el driver realiza la conexión concreta con el gestor. No son mecanismos excluyentes, sino partes complementarias del acceso a datos."
  },
  {
    "id": 68,
    "pregunta": "Statement nos permite trabajar con:",
    "opciones": [
      "A. SQL.",
      "B. XML.",
      "C. CSV.",
      "D. HTML."
    ],
    "respuesta_correcta": "A. SQL.",
    "explicacion": "Statement representa una sentencia SQL que se envía a la base de datos a través de una conexión JDBC. Puede ejecutar una consulta con executeQuery(), una modificación con executeUpdate() o una sentencia cuyo resultado no se conoce de antemano con execute(). XML, CSV y HTML son formatos de datos o marcado, no los lenguajes de ejecución de un Statement."
  },
  {
    "id": 69,
    "pregunta": "Un búfer es:",
    "opciones": [
      "A. Un tipo de aplicación.",
      "B. Un tipo de invocación.",
      "C. Un tipo de memoria.",
      "D. Ninguna de las anteriores es correcta."
    ],
    "respuesta_correcta": "C. Un tipo de memoria.",
    "explicacion": "Un búfer es una zona de memoria temporal utilizada mientras los datos se transfieren entre componentes que trabajan a velocidades o con tamaños de bloque diferentes. Permite acumular información y procesarla en grupos, reduciendo el número de accesos físicos o llamadas. Por ejemplo, un flujo con búfer puede leer varios bytes de una vez y entregarlos a la aplicación cuando los necesita."
  },
  {
    "id": 70,
    "pregunta": "Una arquitectura que entrelaza API y drivers en un sistema de traducción doble:",
    "opciones": [
      "A. Es posible.",
      "B. Es imposible.",
      "C. Posible, pero solo si se emplea CSV.",
      "D. Posible, pero solo con dos API, no API y drivers."
    ],
    "respuesta_correcta": "A. Es posible.",
    "explicacion": "Es posible encadenar una API con un driver puente y otra capa de acceso, de modo que cada nivel traduzca las llamadas antes de llegar al sistema de datos. Un ejemplo histórico es un puente entre JDBC y ODBC. La doble traducción añade dependencias y sobrecarga, por lo que suele preferirse un driver que se comunique directamente con la base de datos cuando está disponible."
  },
  {
    "id": 71,
    "pregunta": "¿Qué es un ORM?",
    "opciones": [
      "A. Técnicas y herramientas para destruir un objeto según una correspondencia entre un objeto y una tabla de una base de datos relacional.",
      "B. Técnicas y herramientas para persistir un objeto según una correspondencia entre un objeto y una tabla de una base de datos relacional.",
      "C. Técnicas y herramientas para persistir una tabla según una correspondencia entre un fichero y una tabla de una base de datos relacional.",
      "D. Es un organismo regional de mapeo."
    ],
    "respuesta_correcta": "B. Técnicas y herramientas para persistir un objeto según una correspondencia entre un objeto y una tabla de una base de datos relacional.",
    "explicacion": "ORM significa mapeo objeto-relacional. Relaciona clases y objetos de la aplicación con tablas y filas de una base de datos, y convierte las operaciones realizadas sobre esos objetos en operaciones de persistencia. Así se trabaja con el modelo orientado a objetos sin escribir manualmente todo el código de transformación."
  },
  {
    "id": 72,
    "pregunta": "Hibernate es...",
    "opciones": [
      "A. Un estado de hibernación",
      "B. Un framework para aplicar ORM.",
      "C. Un framework para ampliar la funcionalidad de Java.",
      "D. Ninguna de las respuestas anteriores es correcta"
    ],
    "respuesta_correcta": "B. Un framework para aplicar ORM.",
    "explicacion": "Hibernate ORM es un framework de persistencia para aplicaciones Java. Se sitúa entre la capa de acceso a datos y la base de datos relacional, gestiona la correspondencia entre entidades y tablas y permite guardar, recuperar, modificar o eliminar objetos mediante una Session o las APIs de persistencia compatibles."
  },
  {
    "id": 73,
    "pregunta": "La diferencia entre el método get() y load() es:",
    "opciones": [
      "A. No hay diferencias, ambos hacen lo mismo.",
      "B. Si el objeto a obtener no existe, get() devuelve null y load() una excepción",
      "C. Si el objeto a obtener no existe, get() devuelve una excepción y load() devuelve null",
      "D. Si el objeto a obtener no existe, get() lo busca en la base de datos y load() lo busca en memoria."
    ],
    "respuesta_correcta": "B. Si el objeto a obtener no existe, get() devuelve null y load() una excepción",
    "explicacion": "En la API tradicional de Hibernate, get() intenta obtener la entidad y devuelve null si no existe. load() puede devolver primero una referencia o proxy y presupone que el identificador corresponde a una entidad válida; cuando se necesita inicializarla y no existe, se produce una excepción."
  },
  {
    "id": 74,
    "pregunta": "Los objetos según su uso pueden tener los siguientes estados:",
    "opciones": [
      "A. Transitorio, Persistente, Separado o Corrupto",
      "B. Transitorio, Guardo, Separado o Eliminado",
      "C. Transitorio, Persistente, Insertado o Eliminado",
      "D. Transitorio, Persistente, Separado o Eliminado"
    ],
    "respuesta_correcta": "D. Transitorio, Persistente, Separado o Eliminado",
    "explicacion": "Una entidad es transitoria cuando todavía no está asociada a un contexto de persistencia; persistente cuando la Session la gestiona; separada cuando conserva su identidad pero dejó de estar asociada a ese contexto; y eliminada cuando está programada para borrarse de la base de datos."
  },
  {
    "id": 75,
    "pregunta": "Los POJOs:",
    "opciones": [
      "A. Son ficheros de texto que representan una correspondencia entre un objeto y una tabla de la base de datos",
      "B. Son clases de Java que representan una correspondencia entre un objeto y una tabla de la base de datos",
      "C. Son un atributo que representan una correspondencia entre un objeto y una tabla de la base de datos",
      "D. Son grupos de tablas que representan una correspondencia entre un objeto."
    ],
    "respuesta_correcta": "B. Son clases de Java que representan una correspondencia entre un objeto y una tabla de la base de datos",
    "explicacion": "Un POJO es una clase Java sencilla que no necesita heredar de una clase especial del framework. En Hibernate, una clase de entidad puede actuar como POJO y sus atributos se corresponden con los datos persistentes de una tabla mediante anotaciones o archivos de mapeo."
  },
  {
    "id": 76,
    "pregunta": "Para buscar un objeto podemos usar:",
    "opciones": [
      "A. El método get o load de sesión",
      "B. Uso de sentencias HQL con el método .createQuery",
      "C. Uso de sentencias SQL con el método .createNativeQuery",
      "D. Todas las respuestas anteriores son correctas"
    ],
    "respuesta_correcta": "D. Todas las respuestas anteriores son correctas",
    "explicacion": "Hibernate permite recuperar una entidad por su identificador mediante operaciones de Session como get() o load(). También puede buscar datos con HQL y createQuery(), trabajando con entidades y atributos, o ejecutar SQL nativo mediante createNativeQuery() cuando se necesita utilizar directamente el lenguaje de la base de datos."
  },
  {
    "id": 77,
    "pregunta": "Podemos afirmar que:",
    "opciones": [
      "A. En Hibernate no hay herramientas para aplicar la correspondencia cuando existe herencia de objetos",
      "B. Las bases de datos relacionales tienen un modelo de datos para representar la herencia.",
      "C. La correspondencia de herencia solo se puede aplicar si se elimina la jerarquía.",
      "D. Ninguna de las respuestas anteriores es correcta"
    ],
    "respuesta_correcta": "D. Ninguna de las respuestas anteriores es correcta",
    "explicacion": "Hibernate sí permite mapear jerarquías mediante estrategias como una tabla por jerarquía, una tabla por subclase o una tabla por clase concreta. El modelo relacional no incorpora la herencia de objetos como concepto propio, pero el ORM puede representarla con distintas estructuras de tablas sin eliminar la jerarquía del modelo Java."
  },
  {
    "id": 78,
    "pregunta": "Si queremos configurar Hibernate, tenemos que modificar el fichero:",
    "opciones": [
      "A. Los ficheros .hbm.xml",
      "B. Hibernate.cfg.xml",
      "C. Hibernate.reveng.xml",
      "D. HibernateUtils"
    ],
    "respuesta_correcta": "B. Hibernate.cfg.xml",
    "explicacion": "El archivo hibernate.cfg.xml centraliza la configuración clásica de Hibernate, como la conexión, el dialecto SQL, propiedades de la SessionFactory y referencias a los mapeos. Los archivos .hbm.xml describen la correspondencia de entidades concretas, mientras que reveng.xml se utiliza en procesos de ingeniería inversa."
  },
  {
    "id": 79,
    "pregunta": "Si queremos consultar la correspondencia o mapeo que hay entre una clase y una tabla de la base de datos consultaremos:",
    "opciones": [
      "A. Los ficheros .hbm.xml",
      "B. Hibernate.cfg.xml",
      "C. Hibernate.reveng.xml",
      "D. HibernateUtils"
    ],
    "respuesta_correcta": "A. Los ficheros .hbm.xml",
    "explicacion": "En la configuración XML clásica, un archivo .hbm.xml declara cómo se relacionan una clase, sus propiedades y asociaciones con tablas y columnas de la base de datos. El archivo hibernate.cfg.xml reúne la configuración global y puede indicar qué documentos de mapeo deben cargarse."
  },
  {
    "id": 80,
    "pregunta": "Si queremos hacer una consulta con el lenguaje HQL usaremos:",
    "opciones": [
      "A. La interfaz Query con el método .createQuery",
      "B. La interfaz Query con el método .createNativeQuery",
      "C. La interfaz SubQuery con el método .createQuery",
      "D. La interfaz SubQuery con el método .createNativeQuery"
    ],
    "respuesta_correcta": "A. La interfaz Query con el método .createQuery",
    "explicacion": "HQL expresa consultas utilizando entidades y atributos del modelo, y se prepara mediante createQuery(). createNativeQuery() se reserva para SQL nativo. La consulta resultante se representa mediante Query y puede ejecutarse para obtener una lista, un único resultado o realizar una operación de modificación."
  }
];
