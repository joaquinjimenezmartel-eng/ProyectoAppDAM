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
  }
];
