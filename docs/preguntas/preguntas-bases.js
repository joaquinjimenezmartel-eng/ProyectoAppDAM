const preguntasBases = [
       {  id: 1,
  pregunta: "¿Cómo podemos representar y definir los datos sin tener en cuenta las necesidades tecnológicas?",
  opciones: [
    "Con un diagrama entidad/relación",
    "Con un diccionario de datos",
    "Con pseudocódigo",
    "Con un diagrama de cardinalidad"
  ],
  correcta: 0,
  explicacion: "Metáfora: Imagina que dibujas tu casa de los sueños en un papel; no te importa si usarás ladrillos o madera, solo cómo será. Técnico: El diagrama Entidad-Relación (DER) es un modelo conceptual de datos independiente del SGBD lógico o físico subyacente. Permite abstraer la semántica y estructura del dominio del problema sin acoplarse a un motor de base de datos específico."},

{ id: 2,
  pregunta: "¿En qué bloque se incluyen las sentencias y estructuras de la lógica del procedimiento?",
  opciones: [
    "En el bloque DECLARE",
    "En el bloque BEGIN",
    "En el bloque EXCEPTION",
    "Después de END"
  ],
  correcta: 1,
  explicacion: "Metáfora: Imagina un cuento. DECLARE es presentar a los personajes, pero BEGIN es cuando por fin empieza la aventura y hacen cosas. Técnico: En la estructura de un bloque anónimo o subprograma en PL/SQL, la sección ejecutable, que contiene la lógica de negocio, sentencias DML y estructuras de control, se delimita obligatoriamente a partir de la palabra clave BEGIN y finaliza con END o EXCEPTION."},

{ id: 3,
  pregunta: "¿Para qué sirven los índices?",
  opciones: [
    "Para saber el número de entidades que hay",
    "Permiten agilizar el acceso a un campo organizando su información",
    "Representa un índice de objetos de los metadatos",
    "Define la clave primaria de una entidad"
  ],
  correcta: 1,
  explicacion: "Metáfora: Como el índice al final de un libro gordo: te dice en qué página exacta está la palabra que buscas para no tener que leerte todo el libro. Técnico: Un índice es una estructura de datos física (como un Árbol-B o Hash) asociada a una tabla que minimiza el número de accesos a disco necesarios para localizar un registro, optimizando drásticamente la complejidad computacional de las consultas."},

{ id: 4,
  pregunta: "¿PL/SQL es compatible con todos los SGBD?",
  opciones: [
    "Sí, hay un estándar de aplicación",
    "Sí, contiene estructuras que entienden todos los SGBD",
    "Sí",
    "No, PL/SQL sirve para Oracle y PL/pgSQL para PostgreSQL"
  ],
  correcta: 3,
  explicacion: "Metáfora: Si PL/SQL es el idioma español, Oracle lo entiende perfecto, pero PostgreSQL habla francés (PL/pgSQL). ¡No se entienden entre ellos! Técnico: PL/SQL (Procedural Language/Structured Query Language) es una extensión procedimental propietaria desarrollada por Oracle Corporation. No es un estándar universal; otros SGBD implementan sus propios lenguajes, como T-SQL en SQL Server."},

{ id: 5,
  pregunta: "¿Qué condición tiene que cumplir la Segunda Forma Normal (2FN)?",
  opciones: [
    "Debe estar en la primera forma normal",
    "Puede tener valores atómicos",
    "Sus campos no dependen de la clave primaria",
    "Debe estar en la tercera forma normal"
  ],
  correcta: 0,
  explicacion: "Metáfora: Para pasar al segundo curso del colegio, ¡primero tienes que haber aprobado el primer curso! Técnico: El proceso de normalización relacional es secuencial e iterativo. Por definición matemática, para que una relación se encuentre en Segunda Forma Normal (2FN), el prerrequisito estricto es satisfacer las reglas de la Primera Forma Normal (1FN) y no poseer dependencias parciales de la clave."},

{ id: 6,
  pregunta: "¿Qué es un sistema gestor de base de datos (SGBD)?",
  opciones: [
    "Un tipo de base de datos",
    "Un software con herramientas de administración y gestión de base de datos",
    "Un software para programar una base de datos",
    "Un software de diseño de base de datos"
  ],
  correcta: 1,
  explicacion: "Metáfora: La base de datos es una biblioteca llena de libros, y el SGBD es el bibliotecario experto que los ordena, te los presta y los cuida. Técnico: Un SGBD o DBMS es una suite de software de sistema que proporciona una interfaz entre los usuarios, aplicaciones y datos físicos, garantizando abstracción, concurrencia, integridad, seguridad y recuperación transaccional."},

{ id: 7,
  pregunta: "¿Qué instrucción necesitamos para ver la estructura de una tabla?",
  opciones: [
    "DESC",
    "ESTRUCT",
    "SHOW TABLES",
    "SHOW DATABASES"
  ],
  correcta: 0,
  explicacion: "Metáfora: Imagina que quieres ver las instrucciones de un juguete; usas DESC para que te describa cada pieza que lo forma. Técnico: DESC (o DESCRIBE) es un comando de la interfaz de línea de comandos en SGBDs como Oracle o MySQL que devuelve los metadatos estructurales de una tabla, detallando sus columnas, tipos de datos y nulabilidad, aunque no sea estándar SQL puro."},

{ id: 8,
  pregunta: "¿Qué instrucción nos permite modificar una tabla?",
  opciones: [
    "INSERT",
    "UPDATE",
    "DROP TABLE",
    "ALTER TABLE"
  ],
  correcta: 3,
  explicacion: "Metáfora: Si quieres ponerle una ventana nueva a tu casita de Lego, usas ALTER TABLE para alterar su forma sin tener que destruirla entera. Técnico: ALTER TABLE es una sentencia DDL (Data Definition Language) que permite mutar el esquema físico de una tabla existente para añadir, modificar o eliminar columnas y restricciones (constraints) sin afectar a los datos ya almacenados."},

{id: 9,
  pregunta: "Bucle preparado con un número de repeticiones predeterminadas.",
  opciones: [
    "Bucle LOOP",
    "Bucle WHILE",
    "Bucle FOR",
    "Bucle ELSE"
  ],
  correcta: 2,
  explicacion: "Metáfora: Como cuando tu mamá te dice 'da exactamente 3 vueltas al patio'. Sabes el número exacto de vueltas antes de empezar (FOR). Técnico: El bucle FOR es una estructura de control iterativa determinada que inicializa un contador y lo evalúa automáticamente sobre un rango o cursor predefinido, garantizando un número exacto de iteraciones en tiempo de ejecución."},

{ id: 10,
  pregunta: "CREATE DATABASE nombre_bd; permite crear una base de datos empleando el lenguaje:",
  opciones: [
    "DDL",
    "DML",
    "DCL",
    "Todas las anteriores son incorrectas"
  ],
  correcta: 0,
  explicacion: "Metáfora: DDL es como el arquitecto que dibuja los planos y construye el edificio vacío. Técnico: CREATE DATABASE pertenece al DDL (Data Definition Language), subconjunto de SQL que se encarga de la definición, alteración y eliminación de las estructuras y objetos a nivel de esquema en el diccionario de datos del motor relacional."},

{ id: 11,
  pregunta: "Cuando hablamos de integridad referencial…",
  opciones: [
    "No podemos borrar un registro que está relacionado con otro mediante su clave foránea",
    "Cualquier cambio en un registro relacionado se transmite en cascada",
    "Establecer valores nulos en claves foráneas",
    "Todas son correctas"
  ],
  correcta: 3,
  explicacion: "Metáfora: Como una cadena de personas agarradas de las manos; si uno tira, mueve a los demás, y hay reglas para que nadie se caiga al vacío. Técnico: La integridad referencial garantiza la coherencia semántica entre tuplas usando Foreign Keys. Dependiendo de la política (RESTRICT, CASCADE o SET NULL), el SGBD impedirá el borrado, lo propagará o anulará la referencia, siendo todas acciones válidas."},

{ id: 12,
  pregunta: "Cuando se almacena una dirección o puntero en vez del valor de la información, estamos hablando de:",
  opciones: [
    "Datos físicos",
    "Referencias",
    "Herencia",
    "Datos extrapolados"
  ],
  correcta: 1,
  explicacion: "Metáfora: En vez de darte el tesoro pesado, te doy un mapa chiquitito (referencia) que te dice exactamente dónde está escondido. Técnico: A nivel de bases de datos objeto-relacionales, una referencia (como REF en Oracle o los OIDs) almacena una dirección de memoria o identificador lógico que apunta a la instancia del objeto real, evitando la redundancia masiva de datos."},

{ id: 13,
  pregunta: "Cuando tenemos una transferencia de datos entre distintos SGBD…",
  opciones: [
    "No hay que preocuparse, todos los SGBD tienen las mismas características",
    "Un tipo de datos se usa igual independientemente del SGBD",
    "Solo se puede hacer entre el mismo tipo de base de datos",
    "Es una tarea importante, cada SGBD tiene diferentes características y hay que adaptarlas según el cambio"
  ],
  correcta: 3,
  explicacion: "Metáfora: Es como mudarte a otro país: los enchufes son distintos, así que necesitas adaptadores para que tus aparatos sigan funcionando. Técnico: La migración entre SGBDs heterogéneos es un proceso crítico por las discrepancias en dialectos SQL, tipos de datos privativos (ej. NUMBER vs NUMERIC) y arquitecturas de almacenamiento, requiriendo un proceso de ETL y refactorización del esquema."},

{ id: 14,
  pregunta: "El lenguaje más empleado en bases de datos es:",
  opciones: [
    "SUL",
    "SDL",
    "SFL",
    "SQL"
  ],
  correcta: 3,
  explicacion: "Metáfora: Es como el idioma inglés en el mundo de los negocios; todos los programas lo usan para hablar con las bases de datos. Técnico: SQL (Structured Query Language) es el lenguaje estándar ANSI/ISO para el paradigma relacional. Proporciona una sintaxis declarativa basada en álgebra relacional para la definición, manipulación y control transaccional de los datos."},

{ id: 15,
  pregunta: "Es el lenguaje que usaremos para administrar la seguridad de los datos mediante permisos y usuarios.",
  opciones: [
    "DDL",
    "DML",
    "DCL",
    "Todas las anteriores son incorrectas"
  ],
  correcta: 2,
  explicacion: "Metáfora: DCL es como el guardia de seguridad de la puerta; él decide quién tiene una llave mágica para entrar y quién se queda fuera. Técnico: DCL (Data Control Language) engloba sentencias críticas como GRANT y REVOKE. Su rol es gestionar el modelo de seguridad del SGBD, definiendo los privilegios de los usuarios (Roles) sobre los distintos objetos del diccionario de datos."},

{ id: 16,
  pregunta: "Es un tipo de copia de seguridad.",
  opciones: [
    "Incompletas",
    "Incrementales",
    "Decrementales",
    "Existenciales"
  ],
  correcta: 1,
  explicacion: "Metáfora: Si ayer copiaste tus cromos, hoy solo haces una copia de los cromos nuevos que te han tocado, ¡así acabas súper rápido! Técnico: Un backup incremental (Incremental Backup) solo respalda los bloques de datos o ficheros transaccionales que han sido modificados desde la última copia de seguridad completa o incremental previa, optimizando drásticamente la ventana de backup y el almacenamiento."},

{ id: 17,
  pregunta: "Es un tipo de modelo de base de datos",
  opciones: [
    "Modelo relacional",
    "Modelo en red",
    "Modelo orientado a objetos",
    "Todas son correctas"
  ],
  correcta: 3,
  explicacion: "Metáfora: Puedes organizar tus piezas de construcción por colores, por tamaños o por formas. Todas son maneras válidas de ordenar. Técnico: A lo largo de la historia de los SGBD, han existido diversos paradigmas arquitectónicos para la persistencia. El modelo en red (arquitectura CODASYL), el relacional de Codd y el OODBMS (orientado a objetos) son implementaciones lógicas reconocidas y operativas."},

{ id: 18,
  pregunta: "Es un tipo de organización de los soportes de almacenamiento",
  opciones: [
    "Secuencial",
    "Aleatorio",
    "Multiplexado",
    "Concatenado"
  ],
  correcta: 0,
  explicacion: "Metáfora: Como una cinta de casete vieja; para llegar a la canción número 3, el aparato tiene que pasar primero por la 1 y la 2 obligatoriamente. Técnico: La organización física secuencial dispone los registros de datos en posiciones contiguas de memoria o soporte físico. Presenta alta latencia en accesos directos frente a estructuras indexadas, aunque sigue siendo útil en procesos por lotes o almacenamiento en cinta."},

{ id: 19,
  pregunta: "Es un tipo de relación",
  opciones: [
    "Comunicativas",
    "Reflexivas",
    "Concatenarías",
    "Expresivas"
  ],
  correcta: 1,
  explicacion: "Metáfora: Como cuando te miras en un espejo y chocas los cinco; ¡eres tú relacionándote contigo mismo! Técnico: En el modelado conceptual DER, una relación reflexiva o recursiva ocurre cuando una entidad asocia instancias de sí misma. A nivel relacional, se resuelve con una Clave Foránea (FK) que apunta a la Clave Primaria (PK) de su propia tabla (ej. un empleado y su supervisor)."},

{ id: 20,
  pregunta: "Es una consecuencia de las bases de datos objeto-relacionales",
  opciones: [
    "Que no tengamos campos atómicos",
    "Que las tablas no sean elementos bidimensionales",
    "Ninguna de las anteriores",
    "Todas son incorrectas"
  ],
  correcta: 0,
  explicacion: "Metáfora: Antes, en una caja de zapatos solo cabía un zapato. Con esto, puedes meter dentro de la caja de zapatos ¡otra cajita con calcetines! Técnico: Las BDOR (Objeto-Relacionales) relajan estrictamente la Primera Forma Normal (1FN). Al soportar Tipos Abstractos de Datos (TADs), nested tables y Varrays, permiten que una columna contenga colecciones complejas, perdiendo su propiedad de escalaridad o atomicidad."},

{ id: 21,
  pregunta: "Es una función de agregación o resumen",
  opciones: [
    "RESTA()",
    "MOD()",
    "TOTAL()",
    "COUNT()"
  ],
  correcta: 3,
  explicacion: "Metáfora: Como cuando metes la mano en un bote de caramelos y los cuentas en voz alta 'uno, dos, tres...' para saber cuántos hay en total. Técnico: COUNT() es una función escalar de agregación del estándar SQL. Itera sobre un result set para retornar la cardinalidad o número de tuplas (ignorando NULLs si se especifica un campo) que satisfacen las restricciones de un dominio agrupado."},

{ id: 22,
  pregunta: "Estructura de control que emplea las sentencias IF y CASE",
  opciones: [
    "Secuencia",
    "Iteración",
    "Segmentación",
    "Selección"
  ],
  correcta: 3,
  explicacion: "Metáfora: Es como llegar a un cruce de caminos y tener que elegir: si vas a la derecha pasa esto (IF), y si vas a la izquierda pasa lo otro (CASE). Técnico: Las estructuras de selección (bifurcaciones condicionales) evalúan expresiones lógicas booleanas para alterar el flujo lineal de ejecución. IF provee lógica binaria compleja, mientras que CASE implementa lógica de enrutamiento múltiple optimizada."},

{ id: 23,
  pregunta: "Existen dos tipos de clave, la primaria y:",
  opciones: [
    "La secundaria",
    "La exclusiva",
    "La jerarquizada",
    "La candidata"
  ],
  correcta: 3,
  explicacion: "Metáfora: En una carrera hay muchos niños rápidos que podrían ganar (candidatos), pero al final solo uno se lleva la medalla de oro (el primario). Técnico: Las claves candidatas son todas aquellas superclaves de cardinalidad mínima (atributos que garantizan unicidad sin redundancia). El DBA escoge una de ellas para ser la PK, y el resto quedan como alternativas (Unique Keys)."},

{ id: 24,
  pregunta: "La clave primaria:",
  opciones: [
    "Puede ser única",
    "Puede estar formada por un único campo o ser compuesta",
    "Se deriva de la clave secundaria",
    "Ninguna de las anteriores"
  ],
  correcta: 1,
  explicacion: "Metáfora: Tu ficha puede tener solo tu DNI (un campo), o si es el cine, necesitas fila y número juntos (compuesta) para saber tu asiento exacto. Técnico: Una Primary Key (PK) implementa la integridad de entidad. Su arquitectura puede ser simple (un único atributo escalar, ej. un secuencial) o compuesta (concatenación lógica de múltiples atributos, esencial en tablas intermedias N:M)."},

{ id: 25,
  pregunta: "La POO sirve para:",
  opciones: [
    "Que otros paradigmas se basen en esta",
    "Desarrollar solo software privativo",
    "Fallos de software",
    "Todas son incorrectas"
  ],
  correcta: 0,
  explicacion: "Metáfora: La programación con objetos es como las piezas básicas de Lego; casi todos los juguetes modernos usan estas mismas piezas para crearse. Técnico: La Programación Orientada a Objetos ha cimentado la arquitectura de software moderna. Su abstracción semántica (herencia, polimorfismo) ha servido como paradigma fundacional subyacente para las BDOR, el modelado UML y los mapeos ORM en la persistencia de datos."},

{ id: 26,
  pregunta: "La sentencia UPDATE nos permite:",
  opciones: [
    "La consulta de registros sobre varias tablas",
    "La eliminación de registros",
    "La modificación de registros",
    "Ninguna de las anteriores es correcta"
  ],
  correcta: 2,
  explicacion: "Metáfora: Si te equivocas pintando, no tiras el folio; usas tu goma mágica (UPDATE) para borrar ese trocito y pintarlo bien encima. Técnico: UPDATE es una instrucción DML transaccional que permite la mutación de datos persistentes en tuplas existentes. Requiere el uso de la cláusula SET para la reasignación de valores y debe ser controlada estrictamente mediante predicados WHERE para evitar sobreescrituras masivas."},

{ id: 27,
  pregunta: "Lenguaje que se centra en la consulta de información:",
  opciones: [
    "DDL",
    "DML",
    "DCL",
    "Ninguna de las anteriores"
  ],
  correcta: 1,
  explicacion: "Metáfora: DML es como el buscador de la biblioteca; es lo que usas para sacar los libros, leerlos y devolverlos al estante. Técnico: DML (Data Manipulation Language) concentra las sentencias transaccionales operativas sobre las tuplas de una base de datos. SELECT (a veces clasificado como DQL) es la instrucción estrella del DML para proyectar y restringir los datos almacenados bajo el álgebra relacional."},

{ id: 28,
  pregunta: "Lo que en un modelo entidad/relación es una entidad, en un modelo físico es llamado:",
  opciones: [
    "Registro",
    "Entidad",
    "Tipo",
    "Tabla"
  ],
  correcta: 3,
  explicacion: "Metáfora: En tu cabeza imaginas un 'Perro' (entidad), pero cuando lo metes en el ordenador, usas una 'Tabla' gigante para apuntar a todos los perros. Técnico: Durante la ingeniería directa desde el nivel conceptual (DER) al nivel lógico/físico relacional, las Entidades se mapean directamente como Tablas (Relations), materializando sus atributos como columnas (Fields) y definiendo dominios físicos sobre ellas."},

{ id: 29,
  pregunta: "Los fallos lógicos:",
  opciones: [
    "Son los que se producen por fallos de software",
    "Un virus es un fallo lógico",
    "Son los que se producen por fallos de hardware",
    "Todas son correctas"
  ],
  correcta: 0,
  explicacion: "Metáfora: Si el disco se rompe, es físico. Pero si el disco está perfecto y el programa se confunde y borra archivos, ¡es el cerebro del software (lógico) fallando! Técnico: Un fallo lógico compromete la integridad y disponibilidad de la información a nivel de software transaccional, sin daño físico en los soportes. Derivan de bugs de aplicación, transacciones SGBD corruptas o borrados indebidos, y se resuelven mediante rollbacks o restauraciones PITR."},

{ id: 30,
  pregunta: "Los ficheros:",
  opciones: [
    "Tienen su propio sistema de escritura",
    "Contienen texto plano",
    "Contienen código binario",
    "Pueden contener tanto texto plano como binario"
  ],
  correcta: 3,
  explicacion: "Metáfora: Una maleta puede guardar ropa que todo el mundo reconoce (texto plano) o piezas de robot que solo las máquinas entienden (binario). Técnico: Un fichero a nivel de Sistema Operativo es una abstracción de una secuencia de bytes. Su codificación de almacenamiento puede ser interpretada mediante mapas de caracteres estándar (UTF-8 en ficheros planos) o estructurada estáticamente para máquinas (ejecutables, LOBs, binarios)."},

{ id: 31,
  pregunta: "M:N es un concepto de:",
  opciones: [
    "Las claves",
    "La cardinalidad",
    "La modalidad",
    "Multidimensional"
  ],
  correcta: 1,
  explicacion: "Metáfora: Si muchos niños pueden usar muchos juguetes a la vez, se dice 'Muchos a Muchos' (M:N). Sirve para medir la cantidad de cosas que participan. Técnico: M:N representa la cardinalidad máxima en el diagrama Entidad-Relación. Identifica interrelaciones 'Muchos a Muchos', las cuales imponen semánticamente la generación de una tabla asociativa o puente al transformar el esquema conceptual en el modelo lógico relacional."},

{ id: 32,
  pregunta: "MySQL es:",
  opciones: [
    "Un sublenguaje de SQL",
    "Un tipo de base de datos",
    "Un SGBD",
    "Ninguna de las anteriores"
  ],
  correcta: 2,
  explicacion: "Metáfora: MySQL es el programa jefe de los libros; es el bibliotecario que usa el idioma SQL para colocar cada cosa en su sitio. Técnico: MySQL es un SGBD (Sistema Gestor de Bases de Datos) relacional, open source bajo licencia dual. Actúa como el daemon o motor servidor de fondo que procesa conexiones, optimiza consultas y persiste los datos físicos en sus motores transaccionales (como InnoDB)."},

{ id: 33,
  pregunta: "Para buscar un patrón de una cadena de caracteres usaremos…",
  opciones: [
    "AND",
    "BETWEEN",
    "LIKE",
    "No se puede buscar patrones"
  ],
  correcta: 2,
  explicacion: "Metáfora: Si solo te acuerdas de que tu amigo se llamaba 'Ro...' (Roberto o Rodrigo), usas la varita LIKE y te encuentra todas las palabras parecidas. Técnico: LIKE es un operador relacional de evaluación condicional utilizado dentro de predicados WHERE. Permite el pattern matching (coincidencia de patrones) parcial en tipos de datos string, valiéndose de caracteres comodín o wildcards de metadatos (como % y _)."},

{ id: 34,
  pregunta: "Para solucionar un fallo físico:",
  opciones: [
    "Podemos tirar todo y comprar nuevos equipos",
    "La gestión de los backups es una buena opción",
    "No es necesario recuperar un fallo físico",
    "Todas las anteriores son correctas"
  ],
  correcta: 1,
  explicacion: "Metáfora: Si se quema tu cuaderno donde dibujabas, menos mal que le sacaste fotos a los dibujos antes (backups) para no perder el trabajo. Técnico: Ante una contingencia física o hardware (ej. caída de arreglos RAID, pérdida de Datafiles), la continuidad del servicio depende de un Plan de Recuperación ante Desastres (DRP) robusto que combine el reemplazo del componente averiado con la aplicación estricta de políticas de Backup and Recovery."},

{ id: 35,
  pregunta: "PL/SQL no puede soportar:",
  opciones: [
    "DDL",
    "DML",
    "Los dos anteriores",
    "Todas las anteriores son incorrectas"
  ],
  correcta: 0,
  explicacion: "Metáfora: Al programa PL/SQL le dejan jugar con las piezas de dentro (DML), pero no le dejan ni romper ni fabricar cajas nuevas de repente (DDL). Técnico: En la compilación estática de bloques PL/SQL, las sentencias estructurales DDL (CREATE, ALTER, DROP) causan excepciones. Para eludir esta restricción y alterar el diccionario de datos dinámicamente, se debe inyectar el código utilizando sentencias de SQL dinámico nativo (EXECUTE IMMEDIATE)."},

{ id: 36,
  pregunta: "¿Qué debemos tener en cuenta en la gestión de fallos lógicos en una base de datos?",
  opciones: [
    "Controlar accesos a servicios y recursos",
    "Autenticación en el SGBD",
    "Gestión de perfiles y usuarios",
    "Todas son correctas"
  ],
  correcta: 3,
  explicacion: "Metáfora: Para que nadie tire tu torre de bloques por accidente, pones candado, revisas quién entra y le dices a cada uno qué puede tocar. Técnico: La profilaxis frente a contingencias lógicas operativas se fundamenta en un hardening del esquema de seguridad del SGBD. Esto implica una gobernanza rigurosa mediante DCL, aplicando el Principio de Mínimo Privilegio mediante perfiles, roles (RBAC) y auditorías concurrentes de accesos."},

{ id: 37,
  pregunta: "Se pueden usar para los subtipos y supertipos las cláusulas:",
  opciones: [
    "NOT FINAL",
    "FINAL",
    "UNDER",
    "Todas las anteriores son correctas"
  ],
  correcta: 3,
  explicacion: "Metáfora: FINAL significa 'no vas a tener más hijitos'. NOT FINAL es 'sí puedes'. Y UNDER significa que 'tú vienes de un padre mayor'. Técnico: En la definición de Tipos de Objetos (Object Types) para la herencia en BDOR, FINAL prohíbe derivaciones de clase, NOT FINAL expone el tipo para permitir polimorfismo, y UNDER se utiliza para definir e instanciar un subtipo directamente derivado de un supertipo existente."},

{ id: 38,
  pregunta: "Si queremos seleccionar unos datos y que no estén repetidos…",
  opciones: [
    "Preocuparnos de no insertar duplicados",
    "Hay que incluir DISTINCT",
    "En bases de datos relacionales no puede suceder",
    "Usar el operador <> "
  ],
  correcta: 1,
  explicacion: "Metáfora: Si le pides a tu amigo que te enseñe qué cartas tiene, pero sin mostrarte las repes, usas la orden mágica DISTINCT. Técnico: La palabra reservada DISTINCT es una restricción en la cláusula SELECT que instruye al motor SQL a proyectar una agrupación puramente matemática, filtrando y descartando del Set de Resultados o Recordset las tuplas que presenten redundancia idéntica en los atributos proyectados."},

{ id: 39,
  pregunta: "Un tipo que puede almacenar una colección es considerado como:",
  opciones: [
    "Array",
    "Tablas",
    "Columnas",
    "Filas"
  ],
  correcta: 0,
  explicacion: "Metáfora: Como una caja de lápices; es una sola caja, pero dentro guarda toda una colección ordenadita de muchos lápices juntos. Técnico: En programación y persistencia objeto-relacional, un Array (como VARRAY) es un Tipo Complejo (Complex Type) que permite modelar colecciones anidadas de elementos escalares bajo un solo identificador unidimensional, contraviniendo el precepto de atomicidad pura del modelo relacional plano."},

{ id: 40,
  pregunta: "UNIQUE es:",
  opciones: [
    "Una restricción en SQL se utiliza para garantizar que no se inserten valores duplicados en una columna",
    "Garantizar valores tipo NULL",
    "Garantizar formato correcto",
    "Ninguna de las anteriores"
  ],
  correcta: 0,
  explicacion: "Metáfora: UNIQUE es el policía que vigila y te dice: '¡Epa! Ese número de socio ya lo tiene otra persona, busca uno distinto'. Técnico: UNIQUE es una restricción (Constraint) de clave alternativa a nivel físico. Obliga al SGBD a mantener la integridad de dominio validando que ninguna tupla comparta un valor ya existente en dicho atributo, implementando implícitamente un índice único de respaldo en el motor."},

  {
  id: 41,
  pregunta: "El lenguaje más empleado en bases de datos es:",
  opciones: [
    "SUL.",
    "SDL.",
    "SFL.",
    "SQL."
  ],
  correcta: 3,
  explicacion: "Metáfora: Es como el idioma español en España, casi todos los ordenadores lo usan para hablar de datos. Técnico: SQL (Structured Query Language) es el estándar ANSI/ISO para sistemas de gestión de bases de datos relacionales, abarcando de forma unificada sublenguajes DML, DDL y DCL."
},

{
  id: 42,
  pregunta: "El mayor problema de la indexación es:",
  opciones: [
    "Que requiere de más espacio.",
    "Que al actualizarse automáticamente puede cometer fallos.",
    "Que no se actualiza automáticamente, por lo que resulta laboroso mantenerlo actualizado.",
    "Ninguna de la anteriores."
  ],
  correcta: 2,
  explicacion: "Metáfora: Como hacer un índice de un cuaderno a mano; si añades una página nueva, tienes que borrar y reescribir el índice tú mismo, ¡qué pereza! Técnico: En ciertos sistemas de ficheros históricos o estructuras físicas arcaicas, el índice no posee sincronización transaccional acoplada, derivando en un mantenimiento y rebalanceo de las estructuras de árbol sumamente costoso tras operaciones DML masivas."
},

{
  id: 43,
  pregunta: "El modelo de red:",
  opciones: [
    "Mejora la flexibilidad del jerárquico.",
    "Introdujo una multitud de novedades a su predecesor.",
    "Poseía una complejidad considerable.",
    "Todas las anteriores son ciertas."
  ],
  correcta: 3,
  explicacion: "Metáfora: Como una telaraña muy liada que te deja ir por muchos caminos distintos, pero es muy difícil de tejer y entender sin perderte. Técnico: El modelo arquitectónico en red (especificación CODASYL) solventó la rigidez del modelo jerárquico al permitir interrelaciones M:N mediadas por punteros lógicos, pero su navegación física explícita elevó críticamente su complejidad de mantenimiento."
},

{
  id: 44,
  pregunta: "El modelo relacional se ha fusionado con este para crear el que es hoy en día el más usado:",
  opciones: [
    "jerárquico.",
    "indexado.",
    "Orientado a objetos.",
    "Multidimensional."
  ],
  correcta: 2,
  explicacion: "Metáfora: Como mezclar piezas de construcción clásicas con plastilina; juntas lo mejor de ordenar en cajas cuadradas con poder darle la forma que tú quieras a la información. Técnico: La evolución del paradigma relacional hacia las Bases de Datos Objeto-Relacionales (BDOR) incorpora principios subyacentes de la Programación Orientada a Objetos, tales como Tipos Abstractos de Datos (TADs), herencia y polimorfismo sobre arquitecturas tabulares."
},

{
  id: 45,
  pregunta: "El soporte de datos direccionable permite:",
  opciones: [
    "La lectura, pero solo secuencialmente.",
    "La lectura, desde el dato deseado.",
    "El almacenamiento de datos jerárquicos indexados.",
    "No existe este tipo de soporte."
  ],
  correcta: 1,
  explicacion: "Metáfora: Como un tocadiscos moderno donde puedes poner la aguja directamente en tu canción favorita sin escuchar las anteriores. Técnico: El soporte de acceso directo o direccionable implementa rutinas físicas que localizan el bloque o clúster en memoria/disco duro accediendo de forma cuasi-inmediata mediante funciones Hash o índices, optimizando la complejidad temporal frente a los clásicos barridos secuenciales en cinta."
},

{
  id: 46,
  pregunta: "La codificación más común en el texto plano de los ficheros es:",
  opciones: [
    "UTF-8 o UTF-16.",
    "UTF-12 o UTF-24.",
    "UTF-8 o UTF-24.",
    "UTF-12 o UTF-16."
  ],
  correcta: 0,
  explicacion: "Metáfora: Es como el abecedario universal y mágico de los ordenadores, que les ayuda a entender tanto letras normales como iconos o caracteres chinos para que tú los veas bien. Técnico: UTF-8 y UTF-16 son formatos de codificación de longitud variable amparados bajo el consorcio Unicode. UTF-8 predomina en ficheros de texto plano debido a su compatibilidad regresiva con ASCII nativo, logrando una huella de memoria enormemente eficiente."
},

{
  id: 47,
  pregunta: "La indexación permite:",
  opciones: [
    "Mayor almacenamiento.",
    "Una búsqueda más eficiente.",
    "Un registro automático de la información.",
    "Ninguna de las anteriores."
  ],
  correcta: 1,
  explicacion: "Metáfora: Como tener etiquetas de colores con los nombres de tus juguetes en cada caja, así encuentras el cochecito rojo súper rápido sin tener que abrir y rebuscar en todas. Técnico: La creación de estructuras indexadas (frecuentemente árboles B+) dota al motor de acceso de vías algorítmicas veloces para localizar punteros físicos, reduciendo drásticamente las operaciones I/O del disco y mitigando el Full Table Scan en las consultas SELECT."
},

{
  id: 48,
  pregunta: "Los ficheros:",
  opciones: [
    "Tienen su propio sistema de escritura.",
    "Contienen texto plano.",
    "Contienen código binario.",
    "Puede contener tanto texto plano como binario."
  ],
  correcta: 3,
  explicacion: "Metáfora: Un baúl digital que sirve igual para guardar un cuento normal para leer, que para guardar un disco con la música secreta que usa un robot para moverse. Técnico: A nivel de abstracción del Kernel o Sistema Operativo, un fichero es sencillamente una secuencia contigua de bytes. Semánticamente pueden formatearse empleando juegos de caracteres estandarizados (archivos legibles o texto plano) o secuencias de máquina crudas (archivos binarios compilados o media)."
},

{
  id: 49,
  pregunta: "Podemos encontrar punteros en:",
  opciones: [
    "Los ficheros secuenciales.",
    "Las bases de datos jerárquicas.",
    "Los ficheros secuenciales encadenados.",
    "Las bases de datos objeto-relacional."
  ],
  correcta: 2,
  explicacion: "Metáfora: Es como un juego de pistas; encuentras un papel que te dice '¡Corre a buscar bajo la cama!' y bajo la cama hay otro papel apuntando hacia la cocina. Técnico: En la organización física de ficheros secuenciales encadenados, las estructuras lógicas de datos albergan internamente punteros de dirección en memoria para referenciar el bloque de almacenamiento de la siguiente tupla, burlando problemas de fragmentación física dispersa."
},

{
  id: 50,
  pregunta: "Un fichero secuencial encadenado:",
  opciones: [
    "Posee un índice.",
    "Posee una doble ordenación, secuencial y lógica.",
    "Permite la ordenación por objetos.",
    "Ninguna de las anteriores."
  ],
  correcta: 1,
  explicacion: "Metáfora: Imagina tu ropa tirada por toda la habitación, pero hay un hilo invisible que une los calcetines a los zapatos, ordenándolos lógicamente para saber qué ponerte. Técnico: Esta arquitectura disocia la secuencia lógica de los registros dictada por listas enlazadas (mediante punteros incrustados) de su ordenación secuencial física o temporal de llegada, posibilitando iterar la información congruentemente sin requerir compactación de volúmenes."
},

{
  id: 51,
  pregunta: "Es la modalidad que implica una única ocurrencia siempre:",
  opciones: [
    "0,1.",
    "1,1.",
    "1,N.",
    "0,N."
  ],
  correcta: 1,
  explicacion: "Metáfora: Es como tener exactamente una nariz en tu cara. Ni cero narices, ni dos. ¡Solo una, siempre! Técnico: En el modelado conceptual de participación y cardinalidad Min-Max, (1,1) indica una asociación restrictiva estricta: un ejemplar concreto de la entidad origen debe participar obligatoriamente con un único y exclusivo ejemplar de la entidad destino, lo que muchas veces se solventa integrando atributos o estableciendo dependencias fuertes de existencia."
},

{
  id: 52,
  pregunta: "Existen dos tipos de clave, la primaria y:",
  opciones: [
    "La secundaria.",
    "La exclusiva.",
    "La jerarquizada.",
    "La candidata."
  ],
  correcta: 3,
  explicacion: "Metáfora: En un concurso, está el ganador absoluto con la medalla de oro (la primaria) y los demás niños que llegaron a la final que también eran súper buenos (las candidatas). Técnico: Previo a la elección del administrador, un conjunto de atributos con la cualidad de unicidad se denominan genéricamente 'claves candidatas'. Una de ellas es ascendida semánticamente al rol de Clave Primaria (Primary Key), restando las sobrantes como subrogadas u opcionales (Unique Keys)."
},

{
  id: 53,
  pregunta: "La clave primaria se marca con:",
  opciones: [
    "Un círculo relleno.",
    "Un círculo en blanco",
    "Un rombo en blanco.",
    "Un rombo relleno."
  ],
  correcta: 0,
  explicacion: "Metáfora: Como ponerle una pegatina redondita negra y brillante a tu juguete favorito para saber al instante que es el jefe de todos los demás. Técnico: Siguiendo las notaciones clásicas propuestas para el modelado en el paradigma ER (Diagramas de Chen originales), los atributos se renderizan en formato elipse, diferenciándose específicamente el que ejerce un rol de identificador principal dotando la forma de relleno sólido o supraconservando un subrayado tipográfico explícito."
},

{
  id: 54,
  pregunta: "La clave primaria:",
  opciones: [
    "Puede ser única.",
    "Puede estar formada por un único campo o ser compuesta.",
    "Se deriva de la clave secundaria.",
    "Ninguna de las anteriores."
  ],
  correcta: 1,
  explicacion: "Metáfora: Tu candado secreto se abre con una sola llave normal, o a veces es tan seguro que necesitas meter dos llaves a la vez en agujeros distintos (compuesta) para abrirlo. Técnico: Estructuralmente, una restricción de Primary Key tiene la potestad de recaer sobre un único atributo escalar y determinista, o sobre una matriz y concatenación de atributos (Clave Compuesta), siendo este último supuesto un imperativo absoluto en tablas pivotantes resultantes del desdoble de relaciones n-arias o M:N."
},

{
  id: 55,
  pregunta: "¿Cómo surge la modalidad?",
  opciones: [
    "A partir de toda la relación de las entidades.",
    "A partir de los mínimos y máximos de las ocurrencias de cada entidad.",
    "A partir del número de atributos que tenga cada entidad.",
    "Ninguna de las anteriores."
  ],
  correcta: 1,
  explicacion: "Metáfora: Es poner las reglas básicas del juego de antemano: 'Puedes coger un mínimo de cero caramelos, y un máximo de tres'. Así sabemos de entrada cómo se juega. Técnico: La modalidad o cardinalidad acotada define la participación cuantitativa teórica. Expresa semánticamente, mediante el esquema (Min, Max), el ratio restrictivo interior de ocurrencias o instancias individuales que lícitamente intervienen desde la Entidad en el conjunto de interrelaciones."
},

{
  id: 56,
  pregunta: "La relación N-arias indica una relación entre:",
  opciones: [
    "5 entidades o más.",
    "Cualquier número de entidades.",
    "4 entidades o más.",
    "Ninguna de las anteriores."
  ],
  correcta: 2,
  explicacion: "Metáfora: Como un súper baile en grupo gigantesco donde 4 o más amigos se agarran de las manos y de los brazos todos a la vez para dar vueltas sin soltarse. Técnico: Aunque puramente de forma aritmética el sufijo n-ario significa 'grado N', en terminología docente de bases de datos las interrelaciones binarias (2) o ternarias (3) cuentan con su propio descriptor. Cuando convergen estructuralmente cuatro entidades o más en el rombo, englobando alta complejidad y generación de múltiples claves foráneas cruzadas, se estandariza el vocablo relación N-aria."
},

{
  id: 57,
  pregunta: "Las instancias se extraen de:",
  opciones: [
    "Las relaciones.",
    "Las entidades.",
    "La modalidad.",
    "De ninguna de las anteriores."
  ],
  correcta: 1,
  explicacion: "Metáfora: Si el diseño es 'Galleta', la galleta de chocolate calentita y real que te puedes comer es una instancia concreta de ese molde. Técnico: Una instancia, ocurrencia o ejemplar simboliza un fragmento real de información manifestado en la base temporal. A nivel subyacente derivan de la instanciación de un tipo o Entidad abstracta y conceptual, mutando físicamente a tuplas insertadas (filas) tras el materializado de la tabla en el SGBD."
},

{
  id: 58,
  pregunta: "Las ternarias son:",
  opciones: [
    "Elementos de cardinalidad.",
    "Elementos de Modalidad.",
    "Elementos de Entidades.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 3,
  explicacion: "Metáfora: Como un equipo de tres superhéroes trabajando juntos en una misma misión secreta; no es una persona, es la acción en grupo que une a los tres. Técnico: Las interrelaciones de grado tres o 'ternarias' no son atributos modales, ni de entidad ni de cardinalidad per se. Son asociaciones semánticas puras en el modelado de datos que enlazan obligatoria y concurrentemente ejemplares de tres constructos independientes, requiriendo un análisis meticuloso de dependencias funcionales para no quebrar las directrices de normalización estricta."
},

{
  id: 59,
  pregunta: "M:N es un concepto de:",
  opciones: [
    "Las claves.",
    "La cardinalidad.",
    "La modalidad.",
    "Multidimensional."
  ],
  correcta: 1,
  explicacion: "Metáfora: Es la forma de los mayores de decir: 'Muchos niños pueden comer Muchos caramelos, y los caramelos pueden ser comidos por Muchos niños'. Técnico: La proporción 'Muchos a Muchos' o M:N explicita el tipo de correspondencia máxima dentro de la métrica de cardinalidad en un DER. En el plano algebraico denota que múltiples tuplas de la Relación A referencian a múltiples tuplas de la Relación B, lo cual fuerza de forma implícita la derivación de una Tabla Asociativa en el ecosistema puramente relacional."
},

{
  id: 60,
  pregunta: "Un profesor que imparte clase a diversos alumnos formaría una relación:",
  opciones: [
    "M:N.",
    "1:N.",
    "N:M.",
    "1:1."
  ],
  correcta: 1,
  explicacion: "Metáfora: Como una mamá gallina cuidando a muchísimos pollitos a la vez en el corral. Una sola gallina y un montón de pollitos detrás. Técnico: Semánticamente, el caso de uso se encuadra en una cardinalidad jerárquica de asimetría 'Uno a Muchos' (1:N), siendo '1' la participación del conjunto Profesor y 'N' el volumen abarcado de Alumnos. Tras aplicar las reglas de paso al modelo lógico subyacente, implica incrustar el identificador primario del Profesor en calidad de Clave Foránea en la estructura de Alumno."
},

{
  id: 61,
  pregunta: "1FN busca introducir valores:",
  opciones: [
    "Duplicados.",
    "Numéricos.",
    "Atómicos.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 2,
  explicacion: "Metáfora: Como ordenar tu armario obligando a que en cada cajoncito pequeñito haya solo una cosita. No vale meter dos calcetines envueltos juntos, ¡tienes que separarlos! Técnico: La premisa matemática impuesta por la Primera Forma Normal de Edgar F. Codd es garantizar dominios con valores rigurosamente indivisibles o atómicos. Esta exigencia erradica la posibilidad de implementar arreglos dinámicos, matrices intrínsecas o campos compuestos dentro de un mismo punto de intersección fila-columna de la relación tabular."
},

{
  id: 62,
  pregunta: "DER son las siglas de:",
  opciones: [
    "Diagrama de Entidad/Relación.",
    "Diacronía entidad/relación.",
    "Diseño entidad/Relación.",
    "Ninguna de las anteriores."
  ],
  correcta: 0,
  explicacion: "Metáfora: Es el mapa del tesoro con dibujitos mágicos de rectángulos y líneas que nos ayudan a saber cómo vamos a montar luego el programa. Técnico: El Diagrama Entidad-Relación (acrónimo DER) es el estándar de facto concebido originalmente en 1976 por Peter Chen. Constituye un lenguaje gráfico abstracto fundamental en la etapa de diseño de requerimientos y modelado conceptual para capturar entidades subyacentes e interacciones topológicas antes de ligarse a una topología de bases de datos persistente."
},

{
  id: 63,
  pregunta: "El valor NULL:",
  opciones: [
    "Indica el valor 0.",
    "Indica un valor indeterminado.",
    "Indica el valor nulo.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 2,
  explicacion: "Metáfora: No es que te queden cero euros, es que tu hucha está atascada y ¡ni siquiera sabes si dentro hay dinero o no! Es un misterio mágico. Técnico: El metavalor NULL no computa lógicamente como un string vacío o un entero de valor aritmético cero. Es un marcador algebraico estructural que indica explícitamente la ausencia absoluta de información, la inaplicabilidad de un estado o, en su caso de estudio relacional, pura indeterminación lógica trivaluada (UNKNOWN)."
},

{
  id: 64,
  pregunta: "En el modelo físico de datos los valores lógicos se marcan con el prefijo:",
  opciones: [
    "V.",
    "v.",
    "L.",
    "l."
  ],
  correcta: 3,
  explicacion: "Metáfora: Como ponerle la inicial 'l' minúscula al nombre de un interruptor para recordar siempre que es para encender o apagar luces (lógico) y no para números. Técnico: Se trata de una convención sintáctica de Nomenclatura (Naming Convention, análoga a la notación húngara) adoptada históricamente por arquitectos físicos DBA en el Diccionario de Datos. Al anteponer el prefijo de notación 'l_' a columnas Booleanas o semánticas Flag/Bandera, se estandariza una enorme retroalimentación auto-documentada para sentencias integradas DML."
},

{
  id: 65,
  pregunta: "La integridad referencial se puede mantener empleando:",
  opciones: [
    "Prohibiciones a ciertas operaciones.",
    "Transmisión en cascada.",
    "Valores por defecto.",
    "Todas las anteriores son correctas."
  ],
  correcta: 3,
  explicacion: "Metáfora: Si tiras una ficha de dominó, puedes decidir si todas las demás caen detrás de ella, o poner la mano enfrente para prohibir que se muevan. Técnico: Las restricciones foráneas (Foreign Keys) preservan la consistencia ontológica mediante reglas de acción declarativa transaccional. Las especificaciones ON DELETE y ON UPDATE implementan lógicas de mitigación como RESTRICT (prohibir el aborto en un DML huérfano), CASCADE (propagar borrados recursivamente) o SET DEFAULT y SET NULL para amortiguar impactos asíncronos."
},

{
  id: 66,
  pregunta: "La política de bloqueo que permite la consulta del valor del elemento bloqueado, pero prohibiendo su modificación.",
  opciones: [
    "Exclusivas.",
    "Compartidos.",
    "Prohibitivos.",
    "Relacional."
  ],
  correcta: 1,
  explicacion: "Metáfora: Como ver un cuadro de la Mona Lisa en el museo: tú y tus amigos podéis mirarlo todos al mismo tiempo (compartido), ¡pero nadie puede sacar un rotulador y pintarle bigotes! Técnico: El mecanismo de concurrencia bajo Locks Compartidos (S-Locks / Shared Locks) permite a varias transacciones simultáneas aplicar operaciones de consulta (SELECT), evadiendo la lectura sucia de dirty data, al tiempo que impone un interbloqueo sobre sentencias DML (escrituras) garantizando una traza ACID de aislamiento óptimo temporal."
},

{
  id: 67,
  pregunta: "Lo que en un modelo entidad/ relación es una entidad, en un modelo físico es llamado:",
  opciones: [
    "Registro.",
    "Entidad.",
    "Tabla.",
    "Tipo"
  ],
  correcta: 2,
  explicacion: "Metáfora: En tu cabecita te imaginas un 'Gato' de forma abstracta, pero cuando tienes que escribirlo en un papel grande para el ordenador, lo dibujas como una cuadrícula gigante llamada 'Tabla'. Técnico: En la Ingeniería Directa (Forward Engineering) del diseño de bases de datos, las primitivas Entidades fuertes identificadas en un nivel superior derivan ontológicamente hacia relaciones matemáticas formales, que en terminología de bases de datos físicas (ANSI SQL) operan materializándose en estructuras de persistencia estáticas denominadas Tablas (Tablespaces)."
},

{
  id: 68,
  pregunta: "Los identificadores siempre emplean:",
  opciones: [
    "El prefijo I.",
    "El prefijo ID.",
    "El sufijo I.",
    "El sufijo ID."
  ],
  correcta: 3,
  explicacion: "Metáfora: Es el apellido secreto que le pones a todas las llaves mágicas, como cliente_ID o juguete_ID, para saber de un vistazo en qué cerradura encajan. Técnico: Representa una estandarización de Best Practices en la topología relacional. Terminar las columnas discriminatorias numéricas subrogadas utilizando explícitamente la sufijación '_ID' provee abstracción y uniformidad morfológica a las Claves Primarias y Foráneas a lo largo de arquitecturas masivas o Data Warehouses."
},

{
  id: 69,
  pregunta: "Podemos encontrar un total de:",
  opciones: [
    "2 Formas Normales.",
    "3 Formas Normales.",
    "5 Formas Normales.",
    "6 Formas Normales."
  ],
  correcta: 3,
  explicacion: "Metáfora: Imagina seis coladores de arena, uno encima de otro, cada vez con los agujeros más pequeñitos. Pasas la arena por los seis para que quede súper pura y limpia sin ninguna piedra. Técnico: Teóricamente hablando, la normalización matemática de las relaciones abarca hasta 6 niveles formales para neutralizar anomalías y dependencias anómalas redundantes: 1FN, 2FN, 3FN, BCNF, 4FN, 5FN e inclusive una extrema y rara vez materializada 6FN / DKNF de restricciones en dominio y clave pura."
},

{
  id: 70,
  pregunta: "UNIQUE es:",
  opciones: [
    "Una restricción en SQL se utiliza para garantizar que no se inserten valores duplicados en una columna.",
    "Una restricción en SQL se utiliza para garantizar los valores tipo NULL.",
    "Una restricción en SQL se utiliza para garantizar que no se inserten valores con un formato diferente al destinado.",
    "Ninguna de las anteriores."
  ],
  correcta: 0,
  explicacion: "Metáfora: Es el policía gigante en la puerta del evento que mira las invitaciones y grita: '¡Epa! ¡Este número de asiento ya lo lleva otro niño, búscate uno diferente para ti solo!' Técnico: La restricción arquitectónica UNIQUE Constraint implementa integridad referencial de dominio y clave candidata subyacente. Asegura matemáticamente, validando cada instrucción DML de Inserción, que toda tupla de la iteración alojará un valor diametralmente exclusivo con respecto al consolidado del Tablespace, apoyándose tácitamente en un índice."
},

{
  id: 71,
  pregunta: "Boolean es un tipo de dato de:",
  opciones: [
    "Números exactos.",
    "Números aproximados.",
    "Valor lógico.",
    "Ninguna de las anteriores."
  ],
  correcta: 2,
  explicacion: "Metáfora: Como la luz del comedor: o le das y está encendida (True), o le das y está apagada (False). No existen colores intermedios posibles. Técnico: El Data Type abstracto Boolean subyuga su espectro a la lógica computacional axiomática dictaminada por el Álgebra de Boole. En motores RDBMS implementa flags restrictivas delimitadas a dicotomías semánticas puros lógicas de TRUE / FALSE y la ocasional contingencia algorítmica NULL trivaluada."
},

{
  id: 72,
  pregunta: "CLOB es un tipo de dato de:",
  opciones: [
    "Números exactos.",
    "Números aproximados.",
    "Valor lógico.",
    "Ninguna de las anteriores."
  ],
  correcta: 3,
  explicacion: "Metáfora: Es como un globo mágico y gigante de letras en el que cabe todo un cuento súper larguísimo con millones de palabras de principio a fin, sin que explote. Técnico: CLOB (Character Large Object) pertenece a una derivación especial de tipos de datos complejos de LOB. Acomoda megabytes o gigabytes gigantescos de secuencias textuales (unibytes o multibytes de Unicode), logrando almacenar de forma integrada payloads JSON complejos, XML extensos o documentos textuales monolíticos carentes en tipos VARCHAR habituales."
},

{
  id: 73,
  pregunta: "CREATE DATABASE nombre_bd; permite crear una base de datos empleando el lenguaje:",
  opciones: [
    "DDL.",
    "DML.",
    "DCL.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 0,
  explicacion: "Metáfora: Es la orden de mando principal del jefe constructor. Le dice a las máquinas: '¡Haz un agujero en la tierra para poner los primeros cimientos de la casa enorme!' Técnico: CREATE DATABASE obedece como primitiva al estándar puramente estructural DDL (Data Definition Language). Opera en metanivel transaccional directo ordenando al SGBD físico el particionado de bloques, el montaje en directorio del diccionario interno y el empaque global para albergar un nuevo esquema lógico independiente."
},

{
  id: 74,
  pregunta: "Es el lenguaje que usaremos para administrar la seguridad de los datos mediante permisos y usuarios.",
  opciones: [
    "DDL.",
    "DML.",
    "DCL.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 2,
  explicacion: "Metáfora: El DCL es el policía con llaves maestras en la biblioteca. A un niño le da llave para sacar libros, a otro solo para mirarlos por el cristal, y al malo no le deja ni entrar. Técnico: El DCL (Data Control Language) actúa instrumentalizando el RBAC (Role-Based Access Control) y DAC bajo los paradigmas de bases de datos. Sus directivas base transaccionales, REVOKE y GRANT, interceden alterando la tabla de privilegios base para regular exhaustivamente la accesibilidad operativa a los objetos y vistas."
},

{
  id: 75,
  pregunta: "Es un sublenguaje de SQL:",
  opciones: [
    "DDL.",
    "DML.",
    "DCL.",
    "Todas las anteriores son correctas."
  ],
  correcta: 3,
  explicacion: "Metáfora: El lenguaje de los ordenadores tiene varias maletas de herramientas diferentes: una para romper cosas, otra para mover bloques y otra para cerrar candados. ¡Pero todas las maletas son de la misma marca! Técnico: El dialecto universal SQL no posee naturaleza monolítica per se; se halla estructural y sintácticamente ramificado en sublenguajes de control específico transaccional: el DML de recuperación de tuplas, el DDL estructural de persistencia estática, el DCL de privilegios de control algorítmico y el eventual TCL."
},

{
  id: 76,
  pregunta: "MySQL es:",
  opciones: [
    "Un sublenguaje de SQL.",
    "Un tipo de base de datos.",
    "Un SGBD.",
    "Ninguna de las anteriores."
  ],
  correcta: 2,
  explicacion: "Metáfora: MySQL no es la estantería ni los libros, es el bibliotecario experto con gafas que trabaja corriendo para colocar los libros cada vez que se lo pides hablando en su idioma mágico. Técnico: MySQL es la materialización en software de un SGBDR relacional monolítico multi-hilo, de código abierto en formato de licencias duales. Actúa como el daemon principal transaccional para provisionar aislamiento ACID, control concurrente e integridad en disco y memoria."
},

{
  id: 77,
  pregunta: "Tipo de dato que almacena imágenes, documentos, etc. en binario:",
  opciones: [
    "SMALLINT.",
    "BLOB.",
    "REAL.",
    "Ninguna de las anteriores."
  ],
  correcta: 1,
  explicacion: "Metáfora: Una caja fuerte súper especial donde no pones letras que entiendas, sino que metes la foto de tus vacaciones transformada en luces de ordenador mágicas de ceros y unos. Técnico: BLOB (Binary Large Object) se categoriza como tipo subyacente LOB físico. Resuelve el problema arquitectónico de ingesta estructural evadiendo la traducción forzada o parsing de charset, persistiendo flujos masivos de bits puros (vectores de multimedia o estáticos) directamente encastrados en nodos en los espacios de tabla y buffers paralelos."
},

{
  id: 78,
  pregunta: "Tipo de dato que almacena la hora en formato hora-minuto-segundo.:",
  opciones: [
    "TIME.",
    "TIMESTAMP.",
    "INTERVAL.",
    "Ninguna de las anteriores."
  ],
  correcta: 0,
  explicacion: "Metáfora: Como el reloj digital simple que llevas atado en tu muñeca; solo te cuenta las horas y los minutos que pasan cada tarde, pero no sabe en qué año está viviendo. Técnico: El tipo temporal TIME estandarizado por el ANSI rige una segregación estricta de dominios, almacenando puramente lapsos y posiciones cronológicas en el paradigma horológico interno del servidor de Base de Datos, aislando y prescindiendo del contexto calendárico del DATE u offsets dinámicos de zonas que integraría un TIMESTAMP."
},

{
  id: 79,
  pregunta: "Tipo de dato que teniendo la longitud del dato que almacenado menor a la definida, rellenará con espacios esta alcanzar el límite:",
  opciones: [
    "CHAR.",
    "VARCHAR.",
    "CLOB.",
    "BLOB."
  ],
  correcta: 0,
  explicacion: "Metáfora: Imagina comprar una caja rígida donde caben diez canicas; si solo metes dos, el hueco sigue existiendo y lo rellenamos con algodón mágico invisible para que no se mueva. ¡La caja siempre es del mismo tamaño gigante! Técnico: A diferencia de su derivado de longitud variable, el tipo CHAR subyuga un mapeo estático de fragmentos por bytes en discos lógicos duros, empleando algoritmos coercitivos de Right-Padding en RAM para suturar de blancos (0x20) los huecos y lograr la asimilación exacta y determinista del ancho de offset preasignado."
},

{
  id: 80,
  pregunta: "VARCHAR(60) es un tipo de dato para:",
  opciones: [
    "Caracteres.",
    "Números exactos.",
    "Números aproximados.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 0,
  explicacion: "Metáfora: Un cordón que parece chicle: se estira largo si le escribes un nombre enorme de muchas letras o se queda chiquitito y ahorra sitio si solo escribes la letra 'A' (con tope de 60 estirones). Técnico: VARCHAR opera semánticamente como un subtipo lógico predefinido en SGBDs destinado a almacenar arreglos alfanuméricos limitados dinámicos. El Constraint estático de '(60)' impone el límite estructural de cardinalidad máxima permitida a persistir, consumiendo únicamente el peso bruto del string iterado empalmado y una cabecera menor transaccional."
},

{
  id: 81,
  pregunta: "Emplea la sentencia SELECT para la selección de tablas:",
  opciones: [
    "DDL.",
    "DML.",
    "DCL.",
    "Ninguna de las anteriores."
  ],
  correcta: 1,
  explicacion: "Metáfora: SELECT es como usar tus gafas mágicas para encontrar tu juguete favorito en la caja de juguetes sin tener que romper nada. Técnico: SELECT pertenece al sublenguaje DML (Data Manipulation Language) y, aunque a veces se clasifica semánticamente como DQL (Data Query Language), su función principal es proyectar y restringir tuplas sin alterar el esquema físico del diccionario de datos."
},

{
  id: 82,
  pregunta: "INSERT es:",
  opciones: [
    "Un privilegio que se nos puede otorgar.",
    "Un tipo de vista.",
    "Las dos anteriores son correctas.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 0,
  explicacion: "Metáfora: Es el permiso súper especial que te da la profe para poder meter una ficha tuya nueva dentro del buzón de la clase. Técnico: A nivel de administración de seguridad DCL, INSERT no solo opera funcionalmente como sentencia DML para añadir tuplas, sino que se categoriza como un privilegio explícito de objeto que el DBA concede (GRANT) a un usuario o rol particular."
},

{
  id: 83,
  pregunta: "IS NULL permite:",
  opciones: [
    "Asignar el valor NULL.",
    "No asignar ningún valor.",
    "Comprueba si el valor es NULL.",
    "BLOB."
  ],
  correcta: 2,
  explicacion: "Metáfora: Es como asomarte a una caja sorpresa y preguntar: '¿Hay un agujero negro de la nada absoluta aquí dentro o hay algo de verdad?'. Técnico: IS NULL es un operador lógico relacional fundamental. Debido a que la lógica trivaluada de SQL impide evaluar un estado NULL utilizando operadores algebraicos de igualdad (=), se requiere estandarizadamente IS NULL para la validación booleana de ausencia de valor."
},

{
  id: 84,
  pregunta: "La función integrada ABS con parámetro número devuelve:",
  opciones: [
    "El valor absoluto del número.",
    "Valor con decimales.",
    "Resultado de la operación de la división de este número con el anterior.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 0,
  explicacion: "Metáfora: Es una lavadora mágica de números que limpia la mancha de 'menos' a los números negativos para que salgan siempre positivos y limpios. Técnico: La función matemática escalar ABS() procesa un argumento numérico por valor y devuelve su magnitud absoluta neta en aritmética de punto flotante o entero, suprimiendo incondicionalmente la penalización de signo algebraico."
},

{
  id: 85,
  pregunta: "La inserción de registros se puede realizar con la sentencia:",
  opciones: [
    "SELECT.",
    "UPDATE.",
    "DELETE.",
    "Ninguna de las anteriores."
  ],
  correcta: 3,
  explicacion: "Metáfora: Si quieres meter un cromo nuevo en el álbum, no lo miras (SELECT), no lo pintas encima (UPDATE) ni lo rompes (DELETE). Usas una orden secreta que no está en la lista. Técnico: La transacción de materialización en disco de una entidad física se implementa ineludiblemente bajo la orden INSERT (INTO). Las instrucciones presentadas abarcan alteración y proyección, por lo que intrínsecamente ninguna opción provista resuelve la cardinalidad de la inserción."
},

{
  id: 86,
  pregunta: "La sentencia UPDATE nos permite:",
  opciones: [
    "La consulta de registros sobre varias tablas.",
    "La Eliminación de registros.",
    "La modificación de registros.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 2,
  explicacion: "Metáfora: Es la goma de borrar mágica que te permite cambiar el color de un dibujo en el papel sin tener que empezar uno nuevo desde cero. Técnico: La instrucción UPDATE muta el estado de una o varias columnas de las tuplas persistidas dinámicamente. Al tratarse de una operación destructiva DML, requiere control por bloqueos (row-level locking) y debe delimitarse mediante cláusulas restrictivas WHERE para evitar anomalías masivas en la relación."
},

{
  id: 87,
  pregunta: "Lenguaje que se centra en la consulta de información :",
  opciones: [
    "DDL.",
    "DML.",
    "DCL.",
    "Ninguna de las anteriores."
  ],
  correcta: 1,
  explicacion: "Metáfora: Es el idioma del buscador de tesoros; sirve para hacerle preguntas al mapa mágico y poder sacar la información del cofre sin mover la isla de sitio. Técnico: El ecosistema transaccional DML (Data Manipulation Language) concentra las acciones sobre los ejemplares físicos instanciados. La instrucción core, SELECT, gestiona la filtración ortogonal (algebraicamente, selecciones y proyecciones relacionales) logrando la extracción aislada requerida por la capa aplicacional."
},

{
  id: 88,
  pregunta: "Para designar un alias debemos emplear el operador.",
  opciones: [
    "AND.",
    "OR.",
    "AS.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 2,
  explicacion: "Metáfora: Es como ponerte tu apodo de superhéroe en el recreo. En vez de llamarte Francisco para todos, usas el operador AS para llamarte 'Francisco AS Paco'. Técnico: La palabra reservada ANSI AS interviene como un operador de aliasing sintáctico en tiempo de proyección. Permite el renombramiento en memoria de metadatos de tabla o campo devolviéndolos renombrados temporalmente en el header del Result Set para optimizar mapeos posteriores en el backend."
},

{
  id: 89,
  pregunta: "WITH GRANT OPTION se emplea en:",
  opciones: [
    "DDL.",
    "DML.",
    "DCL.",
    "Ninguna de las anteriores."
  ],
  correcta: 2,
  explicacion: "Metáfora: Es como ser el jefe del club: no solo tienes la llave maestra, sino que el director te ha dado permiso para hacer copias y dárselas a los amigos que tú elijas. Técnico: La cláusula estructural WITH GRANT OPTION anida estandarizadamente sobre operaciones de concesión DCL (GRANT). Se invoca mediante perfiles altamente autorizados para parametrizar el privilegio en formato de cascada u otorgamiento escalado de roles."
},

{
  id: 90,
  pregunta: "WITH GRANT OPTION:",
  opciones: [
    "Otorga el privilegio SELECT.",
    "Revoca los privilegios que se nos otorguen.",
    "Otorga el derecho a otorgar derechos.",
    "Ninguna de las anteriores."
  ],
  correcta: 2,
  explicacion: "Metáfora: ¡Es el poder mágico de dar poderes! Como si un mago te enseña un truco y además te da permiso para que seas profe y se lo enseñes a otros niños. Técnico: A nivel de auditoría RBAC de base de datos, conceder un acceso WITH GRANT OPTION transfiere al 'Grantee' una potestad de administración discrecional. El usuario consume el permiso de objeto y se erige operativamente como un administrador proxy facultado para expandir la matriz del sistema a terceros."
},

{
  id: 91,
  pregunta: "Bucle preparado con un numero de repeticiones predeterminadas:",
  opciones: [
    "Bucle básico LOOP.",
    "Bucle con WHILE.",
    "Bucle FOR.",
    "Bucle ELSE."
  ],
  correcta: 2,
  explicacion: "Metáfora: Es como el juego de las sillas dando vueltas: ya sabes exacto cuántas vueltas vas a dar y cuántas sillas hay ANTES de empezar la música. Técnico: La iteración algorítmica FOR encapsula de forma implícita un contador escalar interno y lo evalúa sobre un límite inferior y superior preestablecidos (o rango de cursor implícito). Compila evadiendo el riesgo arquitectónico de los bucles infinitos no controlados propios de los ciclos indeterminados o abiertos."
},

{
  id: 92,
  pregunta: "El operador || determina la:",
  opciones: [
    "Potencia.",
    "Raíz.",
    "Concatenación.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 2,
  explicacion: "Metáfora: Son como dos gotitas de pegamento mágico que unen la palabra 'Hola' con la palabra 'Mundo' para que vayan juntas de la mano formando 'HolaMundo'. Técnico: El símbolo de doble tubería (pipe) es el operador léxico predeterminado de Oracle SQL (y homologado por el ANSI SQL:1999) para consumar la concatenación explícita de expresiones tipo STRING, iterando en tiempo de compilación una nueva instancia alfanumérica contigua en memoria."
},

{
  id: 93,
  pregunta: "En una operación lógica con OR si A es TRUE y B es FALSE el resultado es:",
  opciones: [
    "TRUE.",
    "FALSE.",
    "NULL.",
    "No se puede realizar esa operación."
  ],
  correcta: 0,
  explicacion: "Metáfora: Si mamá te dice 'te compro un helado SI te portas bien (A) O SI sacas buenas notas (B)'. Con que hagas UNA sola de las dos, ¡ya tienes helado (TRUE)! Técnico: La fundamentación algorítmica se rige sobre la disyunción binaria inclusiva del Álgebra Booleana. El operador lógico OR aplica evaluación en cortocircuito (short-circuiting), derivando indefectiblemente un valor absoluto TRUE al interceptar cualquier subexpresión verdadera independientemente del estado del resto."
},

{
  id: 94,
  pregunta: "Es un carácter de longitud variable:",
  opciones: [
    "CHAR.",
    "CHARVAR.",
    "VARCHAR2.",
    "Ninguna de las anteriores."
  ],
  correcta: 2,
  explicacion: "Metáfora: Una mochila mágica que se encoge mucho si llevas un libro pequeñito, pero se estira un montón si decides meter dentro todos los libros del colegio. Técnico: VARCHAR2 es un tipo nativo de dominio alfanumérico propietario de Oracle DB de asignación dinámica restrictiva. Minimiza el overhead estructural en disco al consumir operativamente solo la sumatoria bruta de bytes iterados de la cadena sin aplicar right-padding con caracteres en blanco intrínsecos al estándar de bloque CHAR."
},

{
  id: 95,
  pregunta: "Estructura de control que emplea las sentencias IF y CASE:",
  opciones: [
    "Selección.",
    "Iteración.",
    "Segmentación.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 0,
  explicacion: "Metáfora: Es como llegar a un cruce en el bosque y tener que elegir tu camino: 'Seleccionas' el derecho si hace sol (IF) o el izquierdo si llueve (CASE). Técnico: Pertenecen a la categoría puramente ramificadora de flujo algorítmico o condicional. La evaluación dicotómica estricta (IF) y el enrutamiento procedural paralelo de alternativas mutuamente excluyentes (CASE) son el cimiento de la selección del pathing transaccional en un script PL/SQL."
},

{
  id: 96,
  pregunta: "Estructura lógica que realiza una acción hasta que un valor, booleano, cambie:",
  opciones: [
    "Secuencia.",
    "Iteración.",
    "Segmentación.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 1,
  explicacion: "Metáfora: Es como estar en un tiovivo dando vueltas y vueltas sin parar, y solo puedes bajarte cuando suena la campana de que se ha acabado (el booleano cambia). Técnico: Las construcciones de iteración indefinida (WHILE, LOOP con centinela EXIT WHEN) ejecutan ciclos cíclicos de sentencias procedimentales. Estas evalúan forzosamente la condicionalidad variable (control state flag booleanos) para bifurcar la ejecución en runtime subrogando el break out del bloque lógico de iteración."
},

{
  id: 97,
  pregunta: "Los bloques se ejecutan con el carácter:",
  opciones: [
    "/.",
    "$.",
    "#.",
    "Ninguna de las anteriores."
  ],
  correcta: 0,
  explicacion: "Metáfora: Como la bandera verde brillante en las carreras de coches: cuando la ondeas (/) el coche por fin entiende que tiene permiso para correr. Técnico: En interfaces de consola heredadas propietarias (SQL*Plus / SQLcl), la barra diagonal o 'slash' (/) actúa a nivel de parseo de línea de comandos como el EOF o terminador virtual estricto de búfer. Ordena al analizador léxico local traspasar inmediatamente el bloque anónimo procedimental encapsulado al entorno servidor para su compilación integral."
},

{
  id: 98,
  pregunta: "Operador de la negación lógica es:",
  opciones: [
    "--.",
    "=-.",
    "+--.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 3,
  explicacion: "Metáfora: Es como el juego del 'Día del Revés', si es de día gritas ¡NO!. Pero ninguno de esos símbolos raros de la lista vale para jugar, te están intentando engañar. Técnico: El operador unario para implementar inversión booleana estandarizado es algorítmicamente el NOT, mientras que para evaluación comparativa de desigualdad numérica o léxica rigen != y <>. La sintaxis provista por las opciones se refiere o a anotaciones en comentario (--) o resultan constructos crudos de semántica inválida arrojando excepciones ORA."
},

{
  id: 99,
  pregunta: "PL/SQL no puede soportar:",
  opciones: [
    "DDL.",
    "DML.",
    "Los dos anteriores.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 0,
  explicacion: "Metáfora: PL/SQL es como un pintor invitado dentro de la casa: puede usar pintura y mover cosas (DML), pero no le dejan tirar paredes de ladrillo (DDL) con sus propias manos de forma directa. Técnico: En la etapa de pre-compilación y Early-Binding típica de procedimientos nativos PL/SQL estáticos, el intérprete repudia DDL explícito porque alteraría los punteros en tiempo real en los metadatos sobre los cuales el script asienta su validez y dependencias, requiriendo en su lugar la emulación mediante empaquetamiento de SQL dinámico transaccional explícito (EXECUTE IMMEDIATE)."
},

{
  id: 100,
  pregunta: "Un LOOP es:",
  opciones: [
    "Una excepción.",
    "Una invocación.",
    "Una función.",
    "Ninguna de las anteriores."
  ],
  correcta: 3,
  explicacion: "Metáfora: Es el hámster corriendo eternamente en la ruedita. No es una cosa rara, ni un error, ni una magia, es solo una forma de correr dando la vuelta. Técnico: En los estándares de codificación formal de lenguajes embebidos base (PL/pgSQL, PL/SQL), LOOP es ontológicamente una palabra clave que instaura un control procedimental de iteración de ciclo incondicional ilimitado. No cumple el rol de ser un bloque declarativo de fallo (excepcionalidad) ni un subprograma ejecutable de rutina (función/procedimiento/invocación), anulando cualquier otra acepción expuesta."
},

{
  id: 101,
  pregunta: "Es un fallo físico:",
  opciones: [
    "Avería en un servidor.",
    "Problema con el suministro eléctrico.",
    "Robo.",
    "Todas son correctas."
  ],
  correcta: 3,
  explicacion: "Metáfora: Si se rompe el motor del coche, si te quedas sin gasolina de golpe en el viaje, o si un malo te roba la puerta... ¡todo lo físico que se rompe entra ahí! Técnico: En auditoría de escalabilidad de sistemas informáticos y planes DRP de contingencia real, toda disrupción que no se origine por vectores semánticos algorítmicos (software, codificación o tuplas corruptas) se engloba como un evento de contingencia 'Física/Hardware': abarcando la degradación o destrucción pura de infraestructuras críticas como centros de datos, PDU, HDD/SSD de Storage, robos perimetrales y desastres termodinámicos."
},

{
  id: 102,
  pregunta: "La principal clasificación de fallos en las bases de datos se distingue en:",
  opciones: [
    "Fallos físicos y químicos.",
    "Fallos físicos y lógicos.",
    "Fallos de software y aplicaciones.",
    "Todas son incorrectas."
  ],
  correcta: 1,
  explicacion: "Metáfora: Cuando el juguete robótico falla puede ser por dos cosas: o se le ha roto una pierna de plástico (físico), o se le ha vuelto loco el cerebro de números que lleva dentro (lógico). Técnico: Al modelar planes de disaster recovery o DRP sobre un entorno RDBMS altamente tolerante a contingencias críticas, se orquestan soluciones a través de ramificar en dos las arquitecturas subyacentes: incidentes de estado Físico (infraestructural y media recovery) e incidentes de estado Lógico (integridad corrupta, inyección maliciosa o purgado errático por sentencias DML de usuarios directos mediante error humano)."
},

{
  id: 103,
  pregunta: "La restauración:",
  opciones: [
    "Es la remodelación de los dispositivos de la empresa.",
    "Es la recuperación de los datos de una copia de seguridad.",
    "Es el fin del ciclo de vida de una base de datos.",
    "Es una técnica de inserción de datos."
  ],
  correcta: 1,
  explicacion: "Metáfora: Como cuando deshaces tu torre gigante de legos por accidente, y usas una fotografía que le habías hecho antes para volver a montarla clavada pieza por pieza. Técnico: La fase crítica de Restore inmiscuye estrictamente la sobreescritura física extrayendo e inyectando un volcado previo validado desde las copias frías/calientes persistentes de seguridad (Backups RMAN). Seguidamente y con carácter imperativo requerirá aplicar la etapa de Recovery (re-instanciación de logs de Redo o transacciones en buffer) para sincronizar un estado de atomicidad final óptima asíncrona transaccionalmente."
},

{
  id: 104,
  pregunta: "Las copias de seguridad",
  opciones: [
    "Son un respaldo de la información del sistema.",
    "Se pueden recuperar más tarde en caso de fallo del sistema.",
    "A y B son correctas.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 2,
  explicacion: "Metáfora: Es tener los cromos repes hiper-protegidos en un sobre cerrado (respaldo) por si algún día se te caen los tuyos al charco, poder poner esos nuevos y seguir jugando sin problemas (recuperar). Técnico: Constituyen el protocolo sine qua non de mitigación estática. Son replicaciones inmutables persistidas temporal o periódicamente in-situ o externamente. Dotan a la corporación del respaldo algorítmico obligatorio exigido por gobernanzas GDPR y normativas estándar ISO en orden de evadir fallas catastróficas que atenten contra la perpetuidad de un motor informacional RDBMS materializado."
},

{
  id: 105,
  pregunta: "Las copias de seguridad pueden ser:",
  opciones: [
    "Borradas cada dos días",
    "Hechas a mano.",
    "Invisibles o espejadas.",
    "Todas son incorrectas"
  ],
  correcta: 3,
  explicacion: "Metáfora: Todas esas opciones mienten. Ni las hacemos a mano sudando con el boli, ni son fantasmas invisibles, ni se borran cada dos días como algo inútil. ¡Las hace el señor ordenador solo! Técnico: La estandarización de políticas de Backup and Recovery en la industria se cimienta bajo una clasificación ortogonal operativa clara: Full Data (Completas), Bloques Incrementales, Snapshot, Diferenciales o Continuas. Ninguno de los supuestos presentados refleja en terminología DAM un esquema procedimental de retención formal de archivado informático persistente."
},

{
  id: 106,
  pregunta: "Las copias de seguridad:",
  opciones: [
    "Se dividen en completas e incompletas.",
    "No se pueden realizar en una base de datos.",
    "Son una mala gestión de la seguridad,",
    "Todas son incorrectas"
  ],
  correcta: 3,
  explicacion: "Metáfora: ¡Te están intentando colar otra mentira! Claro que se pueden hacer copias, es lo mejor que puedes hacer para cuidarlas, y no existen esas cosas que llaman 'incompletas', sino que se llaman copias a 'trocitos'. Técnico: A nivel de recuperación de bases de datos es común errar el concepto del nivel físico. Sí existen esquemas de RECOVERY 'Incompleto' (Point-In-Time o Flashback log), pero no un BACKUP 'incompleto'. La definición imperante de las réplicas del nivel físico son Totales (Completos/Full) e Incrementales, invalidando las acepciones de las conjeturas previas."
},

{
  id: 107,
  pregunta: "Los fallos lógicos:",
  opciones: [
    "Son los que se producen por fallos de software.",
    "Un virus es un fallo lógico.",
    "A Y B son correctas.",
    "Son los que se producen por fallos de hardware."
  ],
  correcta: 2,
  explicacion: "Metáfora: Son los dolores de tripa feos del ordenador: su tripa está sana pero funciona mal o le ha entrado un bichito malo (virus) que le marea y le cambia las ideas que tenía guardadas. Técnico: Los desastres clasificados en el espectro lógico asumen explícitamente que la salud volumétrica del sector material físico en las infraestructuras sigue íntegra y sin alteración estructural, residiendo el eje del problema estrictamente en la desincronización matemática o semántica subyacente. Ejemplos críticos son un borrado humano errático (DROP TABLE equivocado) y la manipulación por Ransomware."
},

{
  id: 108,
  pregunta: "Los tipos de datos de una base de datos:",
  opciones: [
    "Se pueden diferenciar dependiendo del tipo del sistema que usemos.",
    "Son iguales en todos los SGBD.",
    "No se deben tener en cuenta cuando se hagan traspaso de datos.",
    "Todas son correctas."
  ],
  correcta: 0,
  explicacion: "Metáfora: Es como decir 'coche' en España y 'carro' en México. Son la misma máquina, pero cada fábrica usa su palabra favorita secreta para construirla y llamarla. Técnico: Las primitivas de escalares difieren severamente derivado de dialectos y extensiones nativas en los engines (por ejemplo T-SQL vs PL/SQL). Un TIMESTAMP nativo PostgreSQL no opera internamente con los mismos offsets que el DATETIME transaccional de SQL Server de Microsoft, condicionando severamente las tareas y transformaciones integradas de un proceso híbrido de ETL."
},

{
  id: 109,
  pregunta: "Para restaurar un backup:",
  opciones: [
    "Primero tenemos que restaurar todo lo que queramos no tener.",
    "En última instancia debemos eliminar todas las copias para ahorrar espacio.",
    "Lo primero que hay que hacer es restaurar la última copia de seguridad total.",
    "Ninguna es correcta."
  ],
  correcta: 2,
  explicacion: "Metáfora: Si se te borra tu dibujo chulo que pintabas poco a poco, primero tienes que restaurar el papel gigante del día uno entero (copia total), y luego le vas sumando las líneas pequeñitas de cada día. Técnico: El encadenamiento transaccional Media Recovery de RMAN instaura el RTO secuencial. La exigencia matemática algorítmica primordial demanda extraer obligatoriamente del repositorio e injertar primero el Bloque Completo inactivo Base (Last Full Backup Level 0). Exclusivamente a posteriori se tolerará aplicar y sincronizar parches incrementales o el hilo lineal de logs de redo generados asíncronamente."
},

{
  id: 110,
  pregunta: "Para solucionar un fallo físico:",
  opciones: [
    "Podemos tirar todo y comprar nuevos equipos.",
    "La gestión de los backups es una buena opción.",
    "No es necesario recuperar un fallo físico.",
    "Todas las anteriores son correctas."
  ],
  correcta: 1,
  explicacion: "Metáfora: Si se te quema la libreta y los rotus en un fuego (fallo físico), menos mal que eras súper listo y tenías una máquina haciendo fotos (backups) en casa de tu abuela para poder recuperarlo todo de nuevo en una libreta nueva. Técnico: La resolución sistémica real para incidentes físicos que colapsen por completo la operabilidad temporal (ej: roturas del arreglo de RAID 5 masivas en discos calientes) obliga inminente al DRP a instanciar la restitución material pertinente y re-alojar obligatoriamente las estructuras operativas completas recuperando e inyectando persistencia puramente desde volcados externos archivados remotos fuera del entorno del hardware afectado."
},

{
  id: 111,
  pregunta: "¿Qué clausula se usa únicamente en la herencia de los subtipos?:",
  opciones: [
    "La cláusula UNDER",
    "La cláusula NOT FINAL.",
    "La cláusula SELF.",
    "La cláusula NOT LIKE."
  ],
  correcta: 0,
  explicacion: "Metáfora: Es la pegatina que le pones a un hijo diciéndole: 'Tú eres un perrito pequeño que siempre vas a estar DEBAJO (UNDER) de la categoría gigante que pone Perro'. Técnico: Abarcando de pleno en el modelo lógico-conceptual tipificado en arquitecturas relacional extendidas Objeto-Relacional estáticas. La construcción algorítmica imperativa exige declarar CREATE TYPE implementando sintéticamente la palabra reservada clave UNDER para anclar jerárquicamente un subtipo con la potestad unívoca para heredar y heredar los arrays atómicos o polimorfismos procedentes del supertipo en tiempo de persistencia."
},

{
  id: 112,
  pregunta: "¿Qué es una referencia en bases de datos?:",
  opciones: [
    "Un puntero con un identificador (OID) que dirige a la información u otros objetos.",
    "Un elemento en el que la tabla guarda información de otras tablas.",
    "Un elemento donde se guardan únicamente datos de usuario.",
    "Ninguna es correcta."
  ],
  correcta: 0,
  explicacion: "Metáfora: En vez de darte a cargar la pesada caja fuerte con el tesoro gigante, el sistema te da una tarjetita mágica que dice 'El tesoro está enterrado tres metros debajo del árbol número 5', que pesa muy poco en el bolsillo. Técnico: Encapsulado en motores que asimilan paradigmas OODBMS. Constituye internamente una estructura de puntero de persistencia lógica o dereference vector de OID (Object Identificator) univoco. Posibilita aislar al límite las redundancias severas esquivando la clonación innecesaria en campos de bases transaccionales al materializar solo el enlace físico unívoco a un tipo instanciado existente subyacente en el mapeo en otro bloque en memoria."
},

{
  id: 113,
  pregunta: "El modelo relacional anidado:",
  opciones: [
    "No existe.",
    "Indica que los valores de un campo son únicos a esa tabla.",
    "Comprende que los valores de un campo puedan compartirse con únicamente otra tabla más.",
    "Comprende que los valores de un campo se puedan compartir con varias tablas."
  ],
  correcta: 3,
  explicacion: "Metáfora: Imagina jugar con las muñecas famosas rusas: abres la grandota de madera y dentro, incrustada sorpresa, tiene otra pequeña con sus propios bracitos, ¡y esa a su vez con otra menor! Técnico: A este patrón de diseño relacional híbrido se le denota históricamente NF2 (Non-First Normal Form) o tabla Nested Relation. Es el concepto teórico algorítmico primigenio por el cual una intersección atómica pura tabular (celda) transmuta su esencia escalar hacia dominios complejos para abarcar matrices multidimensionales o incluso integradas colecciones puras relacionales al interior de su fila transaccional principal superior abriendo un puente de relaciones multi-tuplas compartidas cruzadas jerárquicamente integrales."
},

{
  id: 114,
  pregunta: "El paradigma de la programación orientada a objetos:",
  opciones: [
    "Surge en los noventa.",
    "Simplifica las consultas SELECT",
    "Busca conseguir un código de mayor calidad.",
    "Todas son correctas."
  ],
  correcta: 3,
  explicacion: "Metáfora: Fue la técnica secreta de los mayores que se puso de moda hace años para crear juegos montando siempre las herramientas y cosas de una en una con su color y su cajita propia de calidad, ¡así ya no se rompían más de la nada al sacarlas de golpe! Técnico: La explosión empírica formal de la metódica POO a gran escala cimentó sólidas y absolutas bases transaccionales y de software de calidad por encima de lo procedural imperativo preexistente estandarizando axiomas puristas: herencia polimorfismo o tipificación fuerte, catapultando eficiencias absolutas logrando la asimilación del modelaje en el diseño extendido posterior acoplado híbrido en los gestores modernos BDOR."
},

{
  id: 115,
  pregunta: "Es una consecuencia de las bases de datos objeto-relacionales:",
  opciones: [
    "Que no tengamos campos atómicos.",
    "Que las tablas no sean elementos bidimensionales.",
    "A y B son correctas.",
    "Todas son incorrectas"
  ],
  correcta: 2,
  explicacion: "Metáfora: Cuando dejas la regla súper aburrida del papel cuadriculado plano atrás, puedes ahora empezar a incrustar castillos en tres dimensiones gigantes metiendo más figuritas agrupadas no atómicas que sobresalen por todo el tablero. Técnico: La arquitectura abstracta y subyacente híbrida ORDBMS infringe per se el concepto del dogma de la estandarizada y primaria Primera Forma Normal (1FN). Al dar cabida legal a estructuras moleculares encadenadas nativas pre-fabricadas y colecciones Varray o Nested intrínsecas se elimina drásticamente la dimensión en tabla estática y rígida de planitud atómica con escalares en una intersección posicional fila columna."
},

{
  id: 116,
  pregunta: "Indica que afirmación sobre la herencia es falsa:",
  opciones: [
    "Se puede extrapolar a las bases de datos.",
    "Comprende a las clases base y extendida.",
    "No tiene sentido en las bases de datos.",
    "Puede ser múltiple."
  ],
  correcta: 2,
  explicacion: "Metáfora: Te han intentado decir una mentira súper mala de que en este mundo que hemos hecho a los hijos de la base no les sirve poder recibir o heredar cosas de sus padres mágicos sin pedirlas... ¡y es falsísimo porque les ayuda un montón a todos! Técnico: El estigma purista negacionista relacional inicial frente a los SGBD fue rotundamente subsanado en la materialización del paradigma integrado híbrido del protocolo extendido SQL:1999 Objeto-relacional. Implica la completa traslación metodológica operativa algorítmica de los atributos o especializaciones de tipología en cascada dotando de una mitigación a la duplicidad severa, por tanto, postular falsedad en base de su utilidad relacional no tiene ningún sustento conceptual validable."
},

{
  id: 117,
  pregunta: "La POO sirve para:",
  opciones: [
    "Que otros paradigmas se basen en esta.",
    "Desarrollar solo software privativo",
    "Fallos de software.",
    "Todas son incorrectas."
  ],
  correcta: 0,
  explicacion: "Metáfora: Como la brillante persona que inventó la rueda perfecta redonda, ¡hizo un trabajo tan guay que ahora los coches, aviones, patines y trenecitos han cogido su súper idea para ellos sin parar! Técnico: El núcleo conceptual dogmático primigenio de la metodología de POO se instituye por su encapsulación de objetos tangibles o semánticos funcionales modulares. Su rigor de código arquitectónico trasciende los binarios sirviendo como un pilar en paradigmas colaterales de inyección y sobre todo siendo el axioma inspiracional esencial fundacional que cimenta y mapea el enrutamiento de diseño avanzado integrado de las arquitecturas SGBD y esquemas complejos Objeto-Relacional OODBMS."
},

{
  id: 118,
  pregunta: "Los tipos complejos:",
  opciones: [
    "No se pueden crear.",
    "Son incompatibles con los arrays.",
    "Solo sirven para definir un campo en específico.",
    "Todas son incorrectas."
  ],
  correcta: 3,
  explicacion: "Metáfora: Todas esas líneas de ahí dicen trampas. Los juguetes súper compuestos de los ordenadores sí que se pueden crear todos los días y encima se llevan súper de locura con los amigos 'arrays' que guardan hileras largas. Técnico: Los TAD o User-Defined Types Complejos dentro de la arquitectura de diccionario del modelo de base relacional ampliada estandarizan agrupaciones pre-empaquetadas complejas modulares multi-tipo de primitivas estáticas. Son altamente manipulables y operables con matrices VARRAY subyacentes e interaccionables a nivel de metadatos integrales de todo un clúster esquemático de tabla relacional superior desmintiendo frontalmente la restricción sintáctica absurda y las mermas o debilidades descritas en tales enunciados."
},

{
  id: 119,
  pregunta: "Se pueden usar para los subtipos y supertipos las cláusulas:",
  opciones: [
    "NOT FINAL.",
    "FINAL.",
    "UNDER.",
    "Todas las anteriores son correctas."
  ],
  correcta: 3,
  explicacion: "Metáfora: El juego tiene tres llaves doradas especiales. FINAL, si quieres ser el último abuelo de tu familia; NOT FINAL si dejas hueco a tus futuros hijitos; y UNDER si vienes por Debajo de una familia más grande de papás y abuelos. Técnico: Para orquestar sentencias estructuralmente resolutivas polimórficas DDL en cascada sobre los metadatos relacionales Objeto-Híbridos integrados la semántica restringe y modeliza los nodos de árbol utilizando directivas rígidas de parseo y sintaxis ANSI: FINAL imposibilita la subclase, NOT FINAL instaura vertientes de ramificación subrogada y abierta a hijos subordinados algorítmicos, validando explícitamente y finalmente el uso de UNDER que enlaza o engarza dependencias heredadas sobre tipos nativos."
},

{
  id: 120,
  pregunta: "Un array es:",
  opciones: [
    "Una colección de datos.",
    "Un tipo de dato obsoleto.",
    "Un elemento único de las bases de datos.",
    "Todas son incorrectas."
  ],
  correcta: 0,
  explicacion: "Metáfora: Como el gran estuche enorme que te compraste en septiembre para la escuela. No es un lápiz individual ni aburrido, es una fila entera de lápices hermanados juntos que forman todos a una tu súper colección completa de colores de verdad. Técnico: Un arreglo indexado, iterado algorítmicamente en los ecosistemas de PL/SQL avanzado bajo denominaciones nativas específicas como colecciones Varrays (Variable-Size Arrays) instaura en memoria física vectores ordenados escalarmente puros o de registros idénticos subrogados bajo un tamaño o contorno máximo delimitado de cardinalidad, quebrantando estricta la primera 1FN y permitiendo el recorrido contiguo de índices iterativos mediante scripts programáticos en bloque persistente."
}
];


