const preguntasEntornos = [

{ id: 1,
  pregunta: "Algunas características del software son:",
  opciones: [
    "Es intangible",
    "Se desarrolla",
    "En algunas ocasiones, es a medida",
    "Todas son correctas"
  ],
  correcta: 3,
  explicacion: "El software es como una idea o un pensamiento: no se puede tocar con las manos, requiere tiempo para imaginarse y construirse paso a paso, y a veces se diseña como un traje a medida solo para ti. A nivel técnico, el software es un producto lógico (intangible), que no se fabrica sino que requiere un ciclo de vida de ingeniería para desarrollarse, y que puede comercializarse como un producto genérico o ser un desarrollo ad hoc para necesidades específicas de un cliente."},

{ id: 2,
  pregunta: "Dentro de los modos de colaboración con los SCV (Sistemas de Control de Versiones) está:",
  opciones: [
    "Flujo de trabajo centralizado",
    "Flujo de trabajo con gestor de integración",
    "Flujo de trabajo con dictador y tenientes",
    "Todas son correctas"
  ],
  correcta: 3,
  explicacion: "Imagina la cocina de un restaurante: todos pueden meter mano en la misma olla (centralizado), puede haber un chef que revisa los platos antes de sacarlos (integrador), o un chef supremo con subjefes en los que confía (dictador y tenientes). En ingeniería de software, especialmente en sistemas distribuidos como Git, los equipos pueden usar un único repositorio central, trabajar con 'forks' y 'pull requests' validados por un integrador, o usar jerarquías de confianza (dictador y tenientes) típico de proyectos masivos como el kernel de Linux."},

{ id: 3,
  pregunta: "Durante la elaboración de diagramas de comportamiento de casos de uso, la relación de extensión es una situación donde dos casos de uso comparten funcionalidad y, además:",
  opciones: [
    "Uno de ellos añade un matiz extra",
    "Son idénticos",
    "Uno requiere del otro para su realización",
    "Ninguna de las anteriores"
  ],
  correcta: 0,
  explicacion: "Es como pedir una pizza margarita básica y decidir ponerle pepperoni extra; la pizza funciona sola, pero el extra le da un toque diferente si se cumplen ciertas condiciones. En UML, la relación '<<extend>>' indica que un caso de uso base puede ejecutarse de manera completamente independiente, pero bajo ciertas reglas de negocio (puntos de extensión), su comportamiento puede ser ampliado o alterado por un caso de uso de extensión."},

{ id: 4,
  pregunta: "Ejecutando el comando \"javac -version\":",
  opciones: [
    "Comprobamos que esta instalado el JDK (Java development kit)",
    "Comprobamos que está instalado el JVM",
    "Comprobamos que está instalado NetBeans",
    "Iniciamos el proceso de depuración de errores"
  ],
  correcta: 0,
  explicacion: "Es como llamar a la puerta del taller del constructor para ver si está dentro y preguntarle qué edad tiene. El comando 'javac' invoca al compilador de Java. Puesto que el compilador es una herramienta de desarrollo, solo se encuentra incluido dentro del JDK (Java Development Kit), no en el JRE ni en la JVM. Si responde con su versión, confirmamos que el entorno de desarrollo base está instalado y mapeado en el PATH del sistema operativo."},

{ id: 5,
  pregunta: "El compilador de Java también se denomina:",
  opciones: [
    "Javac",
    "JRE",
    "JVM",
    "JDK"
  ],
  correcta: 0,
  explicacion: "Es como el traductor oficial de la familia Java, cuyo nombre propio es 'Javac'. Técnicamente, 'javac' (Java Compiler) es el binario principal del JDK encargado de compilar el código fuente humano escrito en archivos '.java' y traducirlo a código intermedio o bytecode en archivos '.class', que posteriormente será interpretado por la JVM."},

{ id: 6,
  pregunta: "El diagrama de casos de uso permite:",
  opciones: [
    "Secuenciación temporal",
    "Clasifica clases y relaciones",
    "Representar varias aplicaciones de un sistema y los elementos que lo llevan a cabo",
    "Ninguna es correcta"
  ],
  correcta: 2,
  explicacion: "Es como el póster de una obra de teatro donde ves quiénes son los actores y qué cosas pueden hacer en el escenario, sin importar en qué orden. Los diagramas de casos de uso de UML son herramientas de comportamiento que modelan funcionalmente los límites de un sistema, identificando a los actores (usuarios o sistemas externos) y los casos de uso (las funciones o servicios que el sistema les proporciona)."},

{ id: 7,
  pregunta: "El nivel de visibilidad designado con \"-\" es:",
  opciones: [
    "Público",
    "Protegido",
    "Reflexivo",
    "El privado"
  ],
  correcta: 3,
  explicacion: "Es como un diario cerrado con candado: solo su dueño puede leer lo que hay escrito dentro. En el estándar de modelado UML, el símbolo '-' denota el modificador de acceso 'private'. Esto garantiza el principio de encapsulamiento de la POO, indicando que el atributo o método solo es accesible desde la lógica interna de la propia clase en la que fue declarado."},

{ id: 8,
  pregunta: "El proceso de reestructuración interna del código, generalmente para optimizar el comportamiento del código sin modificarlo, se llama:",
  opciones: [
    "Refactorizacion",
    "Recodificación",
    "Reordenación",
    "Regeneración"
  ],
  correcta: 0,
  explicacion: "Como ordenar tu habitación: sigues teniendo los mismos juguetes y muebles, no has comprado nada nuevo, pero ahora todo es mucho más fácil de encontrar. La refactorización es una técnica de ingeniería de software que consiste en alterar la estructura interna del código fuente (mejorando su mantenibilidad, legibilidad y reduciendo la complejidad ciclomática o la deuda técnica) garantizando que su comportamiento externo o funcionalidad permanezca inalterada."},

{ id: 9,
  pregunta: "El software estándar o enlatado:",
  opciones: [
    "Ya está desarrollado y se vende tal cual.",
    "Lo usan muchos usuarios o empresas, no un solo cliente.",
    "Está pensado para cubrir necesidades generales, no específicas.",
    "Todas son correctas"
  ],
  correcta: 3,
  explicacion: "Como comprar una camiseta en una tienda de ropa: ya está cosida, la compran miles de personas, y sirve para vestir, aunque no encaje perfectamente en el cuerpo de cada uno. El software estándar o COTS (Commercial Off-The-Shelf) se empaqueta y licencia para un mercado masivo. Al no ser un desarrollo a medida, amortiza sus costes de producción entre múltiples clientes al cubrir funcionalidades transversales."},

{ id: 10,
  pregunta: "El valor int:",
  opciones: [
    "Indica calores en números enteros.",
    "Números con decimales",
    "Línea de caracteres alfanuméricos",
    "Las dos primeras son correctas"
  ],
  correcta: 0,
  explicacion: "Es como contar ovejas reales: puedes tener tres o cuatro ovejas, pero nunca podrás tener media oveja suelta por el prado. En lenguajes fuertemente tipados, 'int' es un tipo de dato primitivo reservado para almacenar valores numéricos enteros (sin coma flotante o parte fraccionaria), ocupando generalmente 32 bits de memoria y permitiendo valores negativos y positivos."},

{ id: 11,
  pregunta: "En el lenguaje UML, los atributos de una clase se representan en:",
  opciones: [
    "Primera celda",
    "La segunda clase",
    "Tercera celda",
    "Ninguna de las anteriores"
  ],
  correcta: 1,
  explicacion: "Imagina una cajonera de tres pisos: arriba pones el nombre de la ropa, en medio cómo es (su color o talla) y abajo qué puedes hacer con ella. En la notación gráfica estándar de UML, una clase se dibuja como un rectángulo dividido en tres compartimentos o celdas: la superior para el identificador de la clase, la intermedia (o segunda) para los atributos (estado), y la inferior para las operaciones o métodos."},

{ id: 12,
  pregunta: "En los diagramas de secuencia, dentro de la elaboración de diagramas de comportamiento, el envío de mensajes puede ser:",
  opciones: [
    "Mensaje simple",
    "Mensaje sincrónico",
    "Mensaje asincrónico",
    "Todas son correctas"
  ],
  correcta: 3,
  explicacion: "Como hablar con amigos: puedes soltar un dato al aire (simple), hacer una pregunta y quedarte mirando hasta que te respondan (sincrónico), o enviar un WhatsApp y seguir a lo tuyo (asincrónico). En UML, los diagramas de secuencia tipifican las comunicaciones mediante flechas específicas: simples (sin asumir sincronía), síncronos (línea continua, cabeza rellena, bloquea el hilo emisor) y asíncronos (línea continua, cabeza abierta, el hilo emisor continúa su ejecución sin bloquearse)."},

{ id: 13,
  pregunta: "Entre las medidas para evaluar los principales criterios de calidad están:",
  opciones: [
    "Modularidad",
    "Estandarización de datos",
    "Tolerancia a errores",
    "Todas son correctas"
  ],
  correcta: 3,
  explicacion: "Para saber si un coche de juguete es bueno, miras si las piezas se encajan bien (modularidad), si usa pilas normales de las de siempre (estandarización) y si no se rompe al primer golpe (tolerancia). La calidad de la arquitectura de software (ISO/IEC 25010) se evalúa auditando métricas como la modularidad (baja dependencia entre componentes), la estandarización (uso de patrones consistentes) y la tolerancia a fallos (capacidad del sistema para mantener el servicio ante excepciones o inputs inválidos)."},

{ id: 14,
  pregunta: "Entre sus herramientas, un IDE puede contar con:",
  opciones: [
    "Editor",
    "Depurador",
    "Compilador",
    "Todas son correctas"
  ],
  correcta: 3,
  explicacion: "Es como la mochila mágica del cole: tiene el cuaderno para escribir (editor), la lupa por si te has equivocado en una letra (depurador) y la máquina que traduce tus deberes al idioma del profesor (compilador). Un Entorno de Desarrollo Integrado (IDE) es una suite de software que centraliza el ciclo de desarrollo en una única interfaz gráfica (GUI), agrupando típicamente un editor de código fuente inteligente, un compilador/intérprete automatizado y un depurador (debugger)."},

{ id: 15,
  pregunta: "Es muy recomendable que las pruebas:",
  opciones: [
    "Las realice personal del equipo de programación",
    "No cubran aspectos importantes",
    "Las realice personal externo al equipo de programación",
    "Todas son incorrectas"
  ],
  correcta: 2,
  explicacion: "Como cuando haces una tarta: es mejor que la pruebe otra persona para saber si está rica, porque a ti siempre te va a parecer que has cocinado genial. En metodologías de QA (Quality Assurance), es crucial la separación de roles. Un programador sufre sesgo de confirmación y tiende a probar los 'caminos felices'. Un equipo externo asegura la objetividad de las pruebas y somete el sistema a los casos límite (edge cases) que el desarrollador no previó."},

{ id: 16,
  pregunta: "Es un elemento de los diagramas de uso:",
  opciones: [
    "Actor",
    "Caso de uso",
    "Sistema",
    "Todas son correctas"
  ],
  correcta: 3,
  explicacion: "Como en un videojuego: necesitas al jugador con el mando (actor), la misión que va a jugar (caso de uso) y la videoconsola donde ocurre todo (sistema). Un diagrama de casos de uso en UML se compone de entidades externas que interactúan con el software (actores), las funcionalidades específicas del negocio (casos de uso representados por elipses) y el límite de la aplicación (sistema o frontera, representado por un rectángulo)."},

{ id: 17,
  pregunta: "La acción de depurar un programa se debe a:",
  opciones: [
    "Arreglar fallos de un programa",
    "Cambiar el programa",
    "Combinar varios programas",
    "Eliminar un programa"
  ],
  correcta: 0,
  explicacion: "Como usar un colador gigante en la leche del desayuno para quitarle todos los grumos malos. La depuración, o proceso de 'debugging', es la fase del desarrollo dedicada exclusivamente a aislar, trazar paso a paso y resolver bugs (errores de lógica, fallos en tiempo de ejecución o defectos de sintaxis no capturados por el compilador) para restablecer la correcta ejecución del algoritmo."},

{ id: 18,
  pregunta: "La fase en la que se definen los procesos específicos que van a seguir cada una de las fases de ejecución de la aplicación es:",
  opciones: [
    "Fase de diseño",
    "Fase de análisis",
    "Fase inicial",
    "Explotación"
  ],
  correcta: 0,
  explicacion: "Como hacer el plano de los tubos y los cables de la casa antes de empezar a poner ladrillos. En el ciclo de vida del software, tras recolectar qué debe hacer el sistema (Fase de análisis), la Fase de diseño determina el cómo se va a hacer. Aquí se especifica la arquitectura tecnológica, el diseño de interfaces, la base de datos y la algoritmia técnica mediante modelos UML o diagramas E/R."},

{ id: 19,
  pregunta: "La refactorización es:",
  opciones: [
    "Cambiar el funcionamiento",
    "El proceso de reestructuración interna de un código sin cambiar el programa",
    "Cambiar la velocidad del programa",
    "Todas son correctas"
  ],
  correcta: 1,
  explicacion: "Es como pasar a limpio unos apuntes con mejor letra y subrayando lo importante; la historia que cuentas no cambia, pero es más fácil leerla. Refactorizar implica aplicar técnicas estructuradas para optimizar la calidad interna del código (eliminando 'code smells', reduciendo el acoplamiento y mejorando la cohesión) garantizando mediante pruebas de regresión que los outputs o la semántica externa del sistema permanecen completamente inmutables."},

{ id: 20,
  pregunta: "La relación de agregación se marca con:",
  opciones: [
    "Triángulo vacío",
    "Un rombo vacío",
    "Rombo negro",
    "Círculo vacío"
  ],
  correcta: 1,
  explicacion: "Es como un collar de cuentas con un cierre suelto (un rombo vacío). Si el collar se rompe, las cuentas siguen existiendo por separado, igual que las piezas de un coche si lo desmontas. En UML, la agregación representa una relación 'todo-parte' débil y se denota con una línea sólida que finaliza en un rombo sin rellenar apuntando a la clase contenedora. Esto indica que las partes encapsuladas pueden sobrevivir a la destrucción del contenedor."},

{ id: 21,
  pregunta: "La UML es:",
  opciones: [
    "Un lenguaje de modelado",
    "Un tipo de programa OO",
    "Una OO",
    "Ninguna es correcta"
  ],
  correcta: 0,
  explicacion: "Como las señales de tráfico universales que todo el mundo entiende, independientemente de qué idioma hablen. UML (Unified Modeling Language) no es un lenguaje de programación, sino el estándar industrial respaldado por la OMG para la especificación, diseño, visualización y documentación mediante grafos y diagramas arquitectónicos de un sistema orientado a objetos."},

{ id: 22,
  pregunta: "Las primeras pruebas que se realizan durante las primeras fases del desarrollo del software son:",
  opciones: [
    "Pruebas de integración",
    "Pruebas de aceptación",
    "Pruebas unitarias",
    "Pruebas de validación"
  ],
  correcta: 2,
  explicacion: "Es como el control de calidad de la fábrica de Lego: revisas cada bloque pequeño individualmente antes de intentar montar el castillo entero. Las pruebas unitarias ('Unit Testing') son el nivel más atómico del testing de software. Se ejecutan durante la propia codificación para aislar y validar que un componente específico (un método, una función o una clase aislada mediante mocks) retorna la salida esperada de forma independiente."},

{ id: 23,
  pregunta: "Las pruebas que se deben realizar para comprobar que el software ofrece todo lo necesario y funciona son:",
  opciones: [
    "Diseñadas o mantenidas",
    "Explotadas o analizadas",
    "Codificadas o implementadas",
    "Funcionales o estructurales"
  ],
  correcta: 3,
  explicacion: "Como comprobar una casa nueva: miras que todos los interruptores den luz (funcional) y además miras dentro de las paredes para ver si los cables son los correctos (estructural). En aseguramiento de la calidad, las pruebas se dividen macroscópicamente en funcionales (caja negra, validan requisitos de negocio centrándose en inputs y outputs) y estructurales (caja blanca, analizan la cobertura de ramas y la ejecución interna del código fuente)."},

{ id: 24,
  pregunta: "Las pruebas que se realizan tras modificar algo en la aplicación para comprobar que los cambios no han afectado al software son:",
  opciones: [
    "Pruebas funcionales",
    "Pruebas unitarias",
    "Pruebas lineales",
    "Pruebas de regresión"
  ],
  correcta: 3,
  explicacion: "Es como asegurar que tras cambiarle el volante al coche, el pedal del freno no ha dejado de funcionar misteriosamente. Las pruebas de regresión son conjuntos de tests preexistentes (habitualmente automatizados en pipelines de CI/CD) que se reejecutan después de una modificación de código o refactorización. Su objetivo es certificar que no se han reintroducido bugs antiguos ni provocado daños colaterales en funcionalidades estables."},

{ id: 25,
  pregunta: "Las pruebas se realizan con el fin de:",
  opciones: [
    "Demostrar que el software cumple lo que se esperaba de él",
    "Detectar errores antes de que el software se use",
    "Asegurar que el programa funciona correctamente",
    "Todas son correctas"
  ],
  correcta: 3,
  explicacion: "Es como pasar la ITV de un coche antes de conducirlo: quieres que funcione bien, ver si frena y estar seguro de que te llevará donde quieres. La disciplina de testing de software cubre tanto la validación (asegurar que se cumple la especificación de requisitos del cliente) como la verificación (descubrir defectos de forma temprana para minimizar su coste de reparación antes de que alcancen el entorno de producción o despliegue)."},

{ id: 26,
  pregunta: "Las relaciones de inclusión:",
  opciones: [
    "Unen casos de uso cuando uno requiere de los otros para ejecutarse",
    "Flecha con rombo",
    "Diagramas de actividades",
    "Ninguna es correcta"
  ],
  correcta: 0,
  explicacion: "Como el cajero del banco: si quieres sacar dinero, te obliga siempre a meter la tarjeta y el PIN. El proceso de sacar incluye siempre el proceso del PIN. En UML, la dependencia de inclusión (marcada con el estereotipo '<<include>>' y una flecha discontinua hacia el caso de uso incluido) indica que el comportamiento de un caso de uso base requiere inexcusablemente y absorbe la funcionalidad descrita en otro caso de uso subyacente."},

{ id: 27,
  pregunta: "Los CASE permiten:",
  opciones: [
    "Reutilización del software",
    "Portabilidad del software",
    "Estandarización de la documentación",
    "Todas las anteriores son correctas"
  ],
  correcta: 3,
  explicacion: "Imagina una caja de herramientas del futuro: te guarda piezas para usarlas otro día, hace que lo que construyes encaje en cualquier parte y además te imprime las instrucciones perfectas para el usuario. Las herramientas CASE (Computer Aided Software Engineering) son plataformas que asisten en la ingeniería de software, automatizando la generación de código, facilitando el diseño arquitectónico multiplataforma, promoviendo la reusabilidad de componentes y auto-generando documentación en formatos estandarizados."},

{ id: 28,
  pregunta: "Los diagramas de estados poseen:",
  opciones: [
    "Un marcado inicio y final",
    "Semejanzas con los diagramas de clases",
    "Las dos anteriores son correctas",
    "Ninguna de las anteriores"
  ],
  correcta: 2,
  explicacion: "Es como el ciclo de vida de una mariposa: nace de un huevo y muere (inicio y fin) y va pasando por fases de oruga a capullo igual que nosotros describimos a un objeto. En UML, un diagrama de máquina de estados incluye nodos especiales (pseudostados de inicio y fin). Se correlacionan íntimamente con los diagramas de clases porque describen de forma dinámica las transiciones de estado y comportamientos que sufre una instancia particular de una clase debido al disparo de eventos."},

{ id: 29,
  pregunta: "Los lenguajes de programación que se clasifican dependiendo de cómo se ejecutan son:",
  opciones: [
    "Lenguajes compilados, interpretados y virtuales",
    "Máquina y medio nivel",
    "Alto nivel y ensamblador",
    "Ninguna es correcta"
  ],
  correcta: 0,
  explicacion: "Imagina que tienes un libro en alemán: puedes traducirlo entero a español y luego leerlo de golpe (compilado), o poner a alguien a tu lado que te traduzca en voz alta palabra por palabra sobre la marcha (interpretado). Atendiendo a su modelo de ejecución en el sistema, los lenguajes informáticos se taxonomizan en compilados (se transforman a binario de máquina objetivo), interpretados (se ejecutan sentencia a sentencia en tiempo real) e intermedios o híbridos (compilan a bytecode y se ejecutan sobre una Máquina Virtual como JRE o CLR)."},

{ id: 30,
  pregunta: "Los métodos:",
  opciones: [
    "Son las acciones que podrá desempeñar cada instancia",
    "No forma parte de los UML",
    "Se muestran siempre con un valor int",
    "La primera y tercera son correctas"
  ],
  correcta: 0,
  explicacion: "Si un objeto fuera un perro, sus atributos serían su tamaño o su nombre, y sus métodos serían las cosas que hace: ladrar, correr o comer. Dentro del paradigma de la Programación Orientada a Objetos (POO), los métodos son las funciones u operaciones encapsuladas dentro de una clase que definen el comportamiento de sus instancias, permitiendo manipular su estado interno u ofrecer servicios al exterior."},

{ id: 31,
  pregunta: "Los patrones de diseño son:",
  opciones: [
    "Programas CASE",
    "Elementos de corrección",
    "Programas de ordenación de código",
    "Soluciones prefabricadas para problemas comunes"
  ],
  correcta: 3,
  explicacion: "Es como usar el molde de hacer bizcochos de tu abuela que siempre funciona bien, en lugar de intentar inventar un molde nuevo y arriesgarte a quemar el bizcocho. En ingeniería de software (popularizado por el libro del 'Gang of Four'), los Design Patterns son modelos estandarizados y conceptuales que proveen de una arquitectura probada, robusta y reusable para solventar problemáticas recurrentes en el diseño de software orientado a objetos."},

{ id: 32,
  pregunta: "Los POO son:",
  opciones: [
    "Orientación Orgánica",
    "Programas Orientados a Objetos",
    "Programas de Objetos Orientados",
    "Objetos Ocultos"
  ],
  correcta: 1,
  explicacion: "Es un tipo de programa construido no como una simple lista de tareas aburridas, sino juntando muñecos de Lego (objetos) que interactúan entre ellos para que todo funcione. Comúnmente llamado Programación Orientada a Objetos en la literatura hispana (o OOP en inglés), es el paradigma arquitectónico dominante fundamentado en el uso de clases y entidades o instancias reales (objetos) que encapsulan datos (estado) y lógica (comportamiento)."},

{ id: 33,
  pregunta: "Los SCV (Sistemas de Control de Versiones) pueden ser:",
  opciones: [
    "Compartimentados",
    "Individuales",
    "Cíclicos",
    "Centralizados o distribuidos"
  ],
  correcta: 3,
  explicacion: "Como cuando tienes los apuntes para el examen: o el profesor tiene la única copia original en su mesa y vais a mirarlos allí (centralizado), o cada alumno tiene una copia idéntica y completa de todos los apuntes en su mochila (distribuido). A nivel de arquitectura, los Sistemas de Control de Versiones se dividen en Centralizados (CVCS como SVN, un único repositorio maestro) y Distribuidos (DVCS como Git, donde cada nodo o desarrollador clona el historial completo del repositorio de manera local)."},

{ id: 34,
  pregunta: "Los tipos de diagramas que pueden desarrollarse por UML se dividen en:",
  opciones: [
    "No existen grandes categorías",
    "Dos grandes categorías: estructura y comportamiento",
    "Interactividad y comunicación",
    "Tres grandes categorías"
  ],
  correcta: 1,
  explicacion: "Es como ver un coche: puedes pararlo y mirar el capó para ver cómo encajan sus piezas (estructura) o verlo rodar por la carretera a toda velocidad (comportamiento). El estándar UML 2.x define una taxonomía de 14 diagramas principales, bifurcados jerárquicamente en dos ramas fundacionales: diagramas estructurales (arquitectura estática como Clases, Componentes y Despliegue) y diagramas de comportamiento o dinámicos (Estados, Secuencia, Actividades y Casos de Uso)."},

{ id: 35,
  pregunta: "Los tipos de documentación fundamentales en la creación de software en función de su naturaleza son:",
  opciones: [
    "Documentos técnicos y funcionales",
    "Documentos orgánicos",
    "Funcionales y descriptivos",
    "Creacionales y estructurales"
  ],
  correcta: 0,
  explicacion: "Como cuando te compras una tele enorme: el manual pequeñito te explica cómo encenderla con el mando (funcional), y el libro gordo de atrás le sirve al electricista para no electrocutarse abriéndola (técnico). La ingeniería de requisitos documenta el SDLC (System Development Life Cycle) primordialmente en documentación orientada al usuario final (manuales, funcionales, centrados en el 'qué') y documentación orientada a equipos de ingeniería o mantenibilidad (arquitectura, APIs, código, diagramas, centrados en el 'cómo')."},

{ id: 36,
  pregunta: "Los tipos de lenguajes de programación son:",
  opciones: [
    "Diseño y contabilidad",
    "Estándar y mecanizado",
    "Interpretado y literal",
    "Lenguaje máquina, lenguaje de medio nivel o ensamblador y lenguaje de alto nivel"
  ],
  correcta: 3,
  explicacion: "Es como el alfabeto alienígena de ceros y unos que el ordenador entiende del tirón (máquina), palabras raras a medio camino (ensamblador), o directamente escribir en inglés casi humano (alto nivel). Atendiendo al grado de abstracción subyacente de la arquitectura del hardware y de gestión de memoria, clasificamos los lenguajes en bajo nivel (binario inteligible por CPU/ALU), nivel intermedio (nemónicos como Assembly) y de alto nivel (paradigma procedural o POO con tipado fuerte o inferido como C#, Java o Python)."},

{ id: 37,
  pregunta: "NetBeans es un IDE:",
  opciones: [
    "No es modular",
    "Solo Windows",
    "En el que podemos desarrollar en Java y otros lenguajes como C/C++, HTML, PHP y Python",
    "Ninguna es correcta"
  ],
  correcta: 2,
  explicacion: "Es como una navaja suiza gigante, que no solo vale para arreglar juguetes Java de todo tipo, sino que le salen más herramientas para arreglar tus páginas web de HTML y hasta motos C++. NetBeans (ahora Apache NetBeans) es un Entorno de Desarrollo Integrado libre y de código abierto que, aunque es nativo para el ecosistema Java (SE, EE, ME), provee una arquitectura modular políglota capaz de integrar plugins de terceros para interpretar, compilar y depurar múltiples stacks tecnológicos multiplataforma."},

{ id: 38,
  pregunta: "Un punto de interrupción al depurar un programa consiste en:",
  opciones: [
    "Un lugar en el programa donde se detendrá la ejecución y se espera a que el depurador proceda",
    "Actualiza la ejecución",
    "Modifica la ejecución",
    "Esperar un warning"
  ],
  correcta: 0,
  explicacion: "Es como ver un vídeo y darle al botón de pausa justo cuando el asesino va a asomarse, para mirar detenidamente a todos los personajes sin que se mueva la película. Un 'breakpoint' es una directiva o marca en una línea del código fuente que instruye al depurador (debugger) para suspender la ejecución del hilo principal (thread), posibilitando la inspección secuencial del contexto de ejecución, el valor de las variables y el estado de la pila de llamadas o 'call stack'."},

{ id: 39,
  pregunta: "Una de las características del lenguaje de modelado UML es:",
  opciones: [
    "Permite una documentación clara y sencilla",
    "Está estandarizado y es el lenguaje más usado en sistemas orientados a objetos",
    "Tiene una gran capacidad para crear diagramas que representan sistemas",
    "Todas son correctas"
  ],
  correcta: 3,
  explicacion: "Es como el mapa perfecto de un tesoro que sirve para no perderte (documentación), que cualquier pirata del mundo sepa leerlo porque todos usan las mismas cruces (estandarizado) y que además pinta desde las montañas hasta las hormiguitas (diagramas). UML es una notación agnóstica estandarizada por la OMG (Object Management Group) que permite generar metamodelos, abstracciones visuales y documentación rigurosa e inequívoca durante la arquitectura y ciclo de vida de cualquier sistema informático OO."},

{ id: 40,
  pregunta: "Una instancia es:",
  opciones: [
    "Un valor de un atributo",
    "Conjunto de entidades",
    "Cada uno de los objetos particulares de una clase",
    "Todas son incorrectas"
  ],
  correcta: 2,
  explicacion: "Si la clase es el molde con forma de estrella para hacer galletas y no se puede comer, la instancia es la galleta concreta de chocolate calentita que te acabas de meter en la boca. A nivel de arquitectura de la máquina virtual o del sistema, una instancia u objeto es la materialización semántica y volátil en memoria (Heap) de un tipo de dato abstracto o molde conceptual definido por una clase, adquiriendo una identidad en memoria (referencia) y un estado particular propio."},

{
  id: 41,
  pregunta: "Algunas características del software son:",
  opciones: [
    "Es intangible.",
    "Se desarrolla.",
    "En algunas ocasiones, es a medida.",
    "Todas son correctas."
  ],
  correcta: 3,
  explicacion: "Un cuento que te imaginas no se puede tocar (intangible), lo vas escribiendo poco a poco (se desarrolla) y puedes hacerlo especialmente para que lo lea tu hermanito (a medida). A nivel técnico, el software es una construcción lógica que requiere un ciclo de ingeniería para programarse, sin un proceso de fabricación física, y su tipología puede ser empaquetada (estándar) o diseñada ad hoc para un cliente concreto."
},

{
  id: 42,
  pregunta: "Dentro del personal que se necesita para desarrollar una aplicación, el que decir qué lenguaje se va a usar es:",
  opciones: [
    "Arquitecto de software.",
    "Jefe de proyecto.",
    "Analista de sistemas.",
    "Programador."
  ],
  correcta: 0,
  explicacion: "Es como el jefe de obra que dibuja los planos de la casa y decide si se van a usar ladrillos o madera antes de que lleguen los obreros. En la ingeniería de software, el arquitecto es el perfil técnico de más alto nivel encargado de definir el stack tecnológico (lenguajes, frameworks, bases de datos) y los patrones estructurales que garantizarán la escalabilidad y seguridad del sistema."
},

{
  id: 43,
  pregunta: "El link-programa exe es generado por:",
  opciones: [
    "El intérprete.",
    "El compilador.",
    "Ambos.",
    "Ninguno."
  ],
  correcta: 1,
  explicacion: "Es como una máquina mágica que coge todas las hojas sueltas que has escrito y las encuaderna para que tengas un libro de verdad listo para leer. En el ciclo clásico de desarrollo (como en C o C++), el proceso completo de compilación culmina cuando la subherramienta de montaje (linker) enlaza los distintos archivos objeto generados y las librerías dinámicas/estáticas para construir el fichero binario autoejecutable (.exe en Windows)."
},

{
  id: 44,
  pregunta: "El primer paso sobre cómo funciona un compilador es:",
  opciones: [
    "Se traduce el lenguaje ensamblador o el código abierto.",
    "Se enlaza el linker con el código abierto.",
    "Se realiza un preprocesado del código fuente.",
    "Se compilan lo archivos del código fuente."
  ],
  correcta: 2,
  explicacion: "Como limpiar y pelar bien las patatas antes de empezar a freírlas para que todo salga perfecto. Antes de iniciar el análisis léxico y sintáctico real, el motor de compilación lanza un 'preprocesador' que limpia el código fuente: elimina los comentarios humanos, expande las macros y resuelve las directivas de inclusión de ficheros o bibliotecas externas."
},

{
  id: 45,
  pregunta: "El tipo de software que se desarrolla según ciertas características acordes a las necesidades es:",
  opciones: [
    "Software enlatado.",
    "Software estándar.",
    "Software específico.",
    "Software desarrollado."
  ],
  correcta: 2,
  explicacion: "Es como ir al sastre para que te tome las medidas y te cosa un traje que solo te vale a ti, en lugar de comprar una camiseta en el supermercado. El software específico o desarrollo 'a medida' (ad hoc o custom software) se construye mediante el levantamiento de requisitos funcionales exclusivos de un cliente particular, optimizando sus procesos internos de manera única."
},

{
  id: 46,
  pregunta: "La fase en la que se realiza un análisis léxico del programa informático es:",
  opciones: [
    "Fase 1.",
    "Fase 2.",
    "Fase 3.",
    "Fase 4."
  ],
  correcta: 0,
  explicacion: "Es como coger una lupa y revisar que todas las letras de una carta estén bien escritas en tu idioma antes de intentar entender qué dice la frase. La Fase 1 del proceso de compilación es el análisis léxico (scanner); aquí el texto plano se fragmenta en bloques con significado lógico llamados 'tokens' (palabras reservadas, identificadores, símbolos), detectando errores ortográficos básicos."
},

{
  id: 47,
  pregunta: "Las pruebas que se deben realizar para comprobar que el software ofrece todo lo necesario y funciona son:",
  opciones: [
    "Diseñadas o mantenidas.",
    "Explotadas o analizadas.",
    "Codificadas o implementadas.",
    "Funcionales o estructurales."
  ],
  correcta: 3,
  explicacion: "Como revisar si una bicicleta te lleva rápido a los sitios (funcional) y además darle la vuelta para mirar si la cadena está bien engrasada (estructural). El aseguramiento de calidad (QA) requiere una visión bifocal: pruebas funcionales (caja negra) para garantizar que el producto cumple con los requisitos del negocio, y pruebas estructurales (caja blanca) para auditar la robustez algorítmica y las ramas de ejecución internas."
},

{
  id: 48,
  pregunta: "Los lenguajes de programación que se clasifican dependiendo de cómo se ejecutan son:",
  opciones: [
    "Lenguajes compilados, interpretados y virtuales.",
    "Lenguajes de máquina y de medio nivel.",
    "Lenguajes de alto nivel y de ensamblador.",
    "Ninguna es correcta."
  ],
  correcta: 0,
  explicacion: "Es como traducir un libro entero de golpe (compilado), que te lo traduzcan al oído mientras vas caminando (interpretado) o usar un idioma comodín inventado que entiende tu móvil (virtual). En función del flujo de ejecución, los lenguajes generan binarios nativos procesables por la CPU (compilados como C++), se procesan línea a línea en tiempo real (interpretados como Python/JS) o usan un bytecode intermedio ejecutado por una VM (virtuales como Java/C#)."
},

{
  id: 49,
  pregunta: "Un programa informático está compuesto por:",
  opciones: [
    "Instrucciones.",
    "Recomendaciones.",
    "Aplicaciones informáticas.",
    "Ninguna es correcta."
  ],
  correcta: 0,
  explicacion: "Es como la receta paso a paso para hacer una tarta de chocolate: primero echa harina, luego dos huevos y bate. Un programa es la materialización de un algoritmo; a bajo nivel y conceptualmente, se estructura como una secuencia finita y ordenada de instrucciones, sentencias imperativas o declaraciones operativas que indican al procesador de la máquina qué tarea debe ejecutar."
},

{
  id: 50,
  pregunta: "Una característica de JavaScript es:",
  opciones: [
    "Aunque casis todo el alto nivel, se pueden dar trozos de códigos a bajo nivel.",
    "Al interpretarse en el lado del cliente, cualquier puede ver su código.",
    "No hace falta definir variables, es un lenguaje interpretado.",
    "Se suele programar el código fuente en la herramienta Microsoft Visual Studio."
  ],
  correcta: 1,
  explicacion: "Hacer magia con JavaScript es como hacer un truco frente a un espejo sin mangas: cualquiera que esté mirando puede ver dónde escondes la carta. JS es el lenguaje nativo del Frontend web; al descargarse el archivo directamente en el navegador del usuario y ser interpretado localmente por su motor (como V8), su código fuente original (o minificado) queda siempre expuesto a través de las 'Developer Tools'."
},

{
  id: 51,
  pregunta: "Cuando se elimina un módulo, se puede:",
  opciones: [
    "Desactivar y Desinstalar",
    "Modificar",
    "Borrar",
    "Ninguna de las anteriores es correcta"
  ],
  correcta: 0,
  explicacion: "Cuando un juguete hace un ruido molesto, puedes apagar el interruptor para que se calle pero dejarlo ahí (desactivar), o directamente abrirlo y sacarle el altavoz para siempre (desinstalar). En arquitecturas de software modulares (como plugins en IDEs o CMS), la gestión de dependencias permite un borrado suave (desactivación que mantiene configuraciones y ficheros) o un borrado duro (desinstalación física del disco)."
},

{
  id: 52,
  pregunta: "El compilador de Java también se denomina:",
  opciones: [
    "Javac.",
    "JRE.",
    "JVM.",
    "JDK"
  ],
  correcta: 0,
  explicacion: "Es el nombre propio del trabajador de la fábrica de Java que traduce las cartas. Se llama 'Javac'. En el ecosistema técnico de Java SE, 'javac' corresponde al acrónimo de Java Compiler, el ejecutable de línea de comandos que transforma los ficheros '.java' escritos en texto plano en archivos '.class' que contienen las instrucciones bytecode."
},

{
  id: 53,
  pregunta: "El IDE que fue más potente entre los primeros entornos de desarrollo fue:",
  opciones: [
    "Visual Basic 6.",
    "Turbo Pascal.",
    "Delphi.",
    "Ninguno de los anteriores."
  ],
  correcta: 1,
  explicacion: "Es el abuelo súper fuerte de todos los programas para hacer otros programas; nos enseñó a escribir y probar súper rápido sin cambiar de ventana. Lanzado por Borland en la década de 1980, Turbo Pascal es un hito de la ingeniería de software al integrar por primera vez un editor de texto, un compilador ultrarrápido y un depurador en una sola interfaz cohesiva para el SO DOS."
},

{
  id: 54,
  pregunta: "Entre los primeros entornos de desarrollo, encontramos:",
  opciones: [
    "NetBeans.",
    "Eclipse.",
    "Delphi.",
    "Xcode."
  ],
  correcta: 2,
  explicacion: "Es un taller mágico de hace muchos años donde la gente aprendió a dibujar ventanas y botones en la pantalla arrastrándolos con el ratón. Borland Delphi, lanzado en 1995 como sucesor de Turbo Pascal, fue pionero en establecer el estándar del Desarrollo Rápido de Aplicaciones (RAD) enfocado a eventos y programación visual basada en componentes sobre el entorno Windows."
},

{
  id: 55,
  pregunta: "La acción de depurar un programa se debe a:",
  opciones: [
    "Arreglar fallos de un programa.",
    "Cambiar el programa.",
    "Combinar varios programas.",
    "Eliminar un programa."
  ],
  correcta: 0,
  explicacion: "Igual que usar una lupa para buscar y quitar un bichito que ha caído en tu sopa. El 'debugging' es la fase crítica del ciclo de vida centrada en aislar y mitigar errores lógicos, comportamientos anómalos (bugs) o excepciones de ejecución (crashes), utilizando para ello inspecciones de memoria, trazas de pila y control de hilos."
},

{
  id: 56,
  pregunta: "La herramienta con la que se crean, por ejemplo, los campos de texto y las pestañas, es:",
  opciones: [
    "Editor.",
    "Compilador.",
    "Depurador.",
    "Constructor de interfaces gráficos."
  ],
  correcta: 3,
  explicacion: "Imagina una caja de pegatinas donde solo coges un botón, lo arrastras con el dedo y lo pegas en el dibujo de tu pantalla. Un GUI Builder (Constructor de interfaces) es el módulo del entorno de desarrollo (como WindowBuilder para Java o Scene Builder para JavaFX) que implementa un modelo WYSIWYG, autogenerando el código XML o las clases encargadas de pintar las ventanas."
},

{
  id: 57,
  pregunta: "La herramienta de entornos de desarrollo que se utiliza para crear aplicaciones para Apple es:",
  opciones: [
    "JCreator.",
    "KDevelop.",
    "Visual Studio.",
    "Xcode."
  ],
  correcta: 3,
  explicacion: "Es la fábrica exclusiva de la manzana mordida donde debes entrar obligatoriamente si quieres fabricar juguetes para el iPhone o el Mac. Xcode es el IDE propietario de Apple Inc., que provee los compiladores (LLVM, Clang), los SDKs y los simuladores necesarios de forma exclusiva para programar en Swift y Objective-C dentro de los entornos iOS, macOS y watchOS."
},

{
  id: 58,
  pregunta: "Para comenzar el proyecto de depuración, hay que teclear:",
  opciones: [
    "Ctrl-F3",
    "Ctrl-F4",
    "Ctrl-F5",
    "Ctrl-F6"
  ],
  correcta: 2,
  explicacion: "Como pulsar el botón rojo del mando a distancia que pone los dibujos a cámara lenta para que puedas ver por qué tropieza el personaje. En la parametrización clásica de atajos de teclado de varios entornos (especialmente en la familia Visual Studio y configuraciones C/C++ abordadas convencionalmente), esta combinación invoca la compilación y levanta el proceso atando el debugger al hilo de ejecución."
},

{
  id: 59,
  pregunta: "RAD, en español, hace referencia a:",
  opciones: [
    "Entorno de ejecución de Java.",
    "Desarrollo rápido de aplicaciones.",
    "Recolector de basura de aplicaciones.",
    "Equipo de desarrollo de Java."
  ],
  correcta: 1,
  explicacion: "Es construir un castillo gigante usando piezas de Lego que ya están montadas, terminando mil veces más rápido que si tuvieras que crear tú el plástico. Rapid Application Development (RAD) es un marco metodológico ágil que prioriza la construcción iterativa, los prototipos rápidos y la inyección intensiva de componentes GUI reusables sobre la planificación puramente secuencial."
},

{
  id: 60,
  pregunta: "Un punto de interrupción al depurar un programa consiste en:",
  opciones: [
    "Un lugar en el programa donde se detendrá la ejecución y se espera a que el depurador proceda.",
    "Un lugar en el programa donde se actualiza la ejecución y se espera a que el depurador proceda.",
    "Un lugar en el programa donde se modifica la ejecución y se espera a que el depurador proceda.",
    "Un lugar en el programa donde se eliminará la ejecución y se espera a que el depurador proceda."
  ],
  correcta: 0,
  explicacion: "Igual que gritarle '¡Estatua!' a tu amigo cuando está corriendo para que se quede congelado y puedas mirarlo bien de cerca. Un breakpoint es una marca dinámica inyectada en una línea del código fuente que lanza una interrupción (trap) a la CPU virtual/real, congelando el thread (hilo) en ese instante de tiempo para auditar el stack trace y las variables en caliente."
},

{
  id: 61,
  pregunta: "Algunos de los criterios más comunes que se miden para evaluar la calidad del software son:",
  opciones: [
    "El número de errores por un número determinado de líneas de código.",
    "El número medio de revisiones realizadas a una función o módulo del programa.",
    "El número repeticiones de las pruebas a todo el sistema.",
    "A y B son correctas."
  ],
  correcta: 3,
  explicacion: "Para saber si un profe corrige bien, miras cuántos fallos te ha marcado en un folio y cuántas veces te hace repetir los deberes. En QA (Aseguramiento de Calidad), las métricas estandarizadas evalúan el código fuente calculando la 'densidad de defectos' (bugs por KLOC o mil líneas de código) y el esfuerzo de revisión o 'code churn' (qué tanto fluctúa y debe repararse un módulo específico)."
},

{
  id: 62,
  pregunta: "El testers se basará en:",
  opciones: [
    "Opinión sobre el software.",
    "Documentación sobre el software.",
    "Uso del software.",
    "Recomendaciones del software."
  ],
  correcta: 1,
  explicacion: "El juez de un concurso de repostería no puntúa la tarta porque le guste el chocolate, sino porque lee la receta original para ver si cumple todo lo pedido. Un ingeniero QA o Tester no diseña los casos de prueba basándose en intuiciones, sino mapeando exhaustivamente los requerimientos plasmados en los Documentos de Especificación Funcional y Técnica (Casos de Uso) trazados durante la fase de análisis."
},

{
  id: 63,
  pregunta: "El tipo de prueba de clases de equivalencia de datos es un tipo de prueba de:",
  opciones: [
    "Prueba de caja negra.",
    "Prueba de caja blanca.",
    "Prueba de regresión.",
    "Ninguna es correcta."
  ],
  correcta: 0,
  explicacion: "Si la máquina de chicles solo acepta euros, echas un euro para probarla; no necesitas meter todos los euros del mundo porque todos van a funcionar igual sin mirar dentro de la máquina. La 'Partición de Equivalencia' es una técnica fundamental del testing de caja negra: agrupa el dominio de inputs en clases, de forma que si el sistema procesa bien un valor representativo de esa clase, inferimos estadísticamente que procesará bien el resto, sin inspeccionar el código interno."
},

{
  id: 64,
  pregunta: "El tipo de prueba que se realiza para asegurarnos de que los cambios no han afectado al software son:",
  opciones: [
    "Prueba de caja negra.",
    "Prueba de caja blanca.",
    "Prueba de regresión.",
    "Ninguna es correcta."
  ],
  correcta: 2,
  explicacion: "Tras arreglar una rueda pinchada, pruebas la bocina y las luces por si acaso, sin querer, has tocado un cable que no debías. Las pruebas de regresión son suites automatizadas de testing que se ejecutan inmediatamente después de someter una base de código heredado a refactorizaciones, parches de seguridad o nuevos features, certificando que las modificaciones no han 'roto' la funcionalidad histórica estable."
},

{
  id: 65,
  pregunta: "Las primeras pruebas que se realizan durante las primeras fases del desarrollo del software son:",
  opciones: [
    "Pruebas de integración.",
    "Pruebas de aceptación.",
    "Pruebas unitarias.",
    "Pruebas de validación."
  ],
  correcta: 2,
  explicacion: "En la fábrica de juguetes, primero prueban si la pequeña pata del muñeco se mueve bien antes de montar el cuerpo entero y vestirlo. A nivel metodológico (y en enfoques TDD), las Pruebas Unitarias son el estrato más bajo de la pirámide de testing; las codifica el propio programador paralelamente al desarrollo para certificar matemáticamente el comportamiento aislado de funciones o clases individuales mediante mocks."
},

{
  id: 66,
  pregunta: "Las pruebas de caja blanca pueden ser del tipo:",
  opciones: [
    "Prueba de cubrimiento.",
    "Prueba de condiciones.",
    "Prueba de bucles.",
    "Todas son correctas."
  ],
  correcta: 3,
  explicacion: "Como mirar la casa de hormigas de cristal para comprobar que todas las galerías están limpias (cubrimiento), que los cruces de camino funcionan (condiciones) y que pueden dar vueltas en círculo sin atascarse (bucles). Al ser un testing estructural guiado por el código interno, la caja blanca aplica métricas de cobertura de sentencias o caminos lógicos ('Statement Coverage', 'Branch/Condition Coverage' y 'Loop Testing') para asegurar que todas las líneas compiladas se ejecutan al menos una vez."
},

{
  id: 67,
  pregunta: "Las pruebas de caja negra analizan:",
  opciones: [
    "La arquitectura del sistema.",
    "Los errores que comete el sistema.",
    "El funcionamiento interno del sistema.",
    "Las funciones que realiza el sistema."
  ],
  correcta: 3,
  explicacion: "Usar un microondas sin saber nada de electrónica: tú solo le das al botón de un minuto y pruebas si tu leche ha salido caliente. En las pruebas basadas en especificaciones (Caja Negra), el tester ignora por completo la algoritmia y la base de datos interna; su objetivo es modelar un actor externo y verificar que los flujos de entrada (inputs) generan sistemáticamente las respuestas esperadas (outputs) del negocio."
},

{
  id: 68,
  pregunta: "Las pruebas deben estar enfocadas a:",
  opciones: [
    "Partes específicas del software por separado.",
    "La totalidad del software.",
    "Lo más viejo del software.",
    "Lo más nuevo del software."
  ],
  correcta: 0,
  explicacion: "Cuando vas al médico porque te encuentras mal, te mira primero el estómago, luego la garganta y luego el corazón, uno a uno, para saber qué duele. Siguiendo el principio de 'divide y vencerás' y la alta cohesión, el testing debe diseccionar el software en módulos atómicos. Detectar un defecto en una unidad aislada ahorra recursos exponenciales frente a intentar debuguear un fallo en un sistema monolítico completamente ensamblado."
},

{
  id: 69,
  pregunta: "Las pruebas se realizan con el fin de:",
  opciones: [
    "Convencer de que el software cumple con los objetivos.",
    "Comprobar que no hay errores en el software.",
    "Asegurar que el software está operativo.",
    "Todas son correctas."
  ],
  correcta: 3,
  explicacion: "Como cuando los padres prueban los frenos, los cinturones y el motor de un cochecito de pedales antes de subir al niño, para que vaya feliz y súper seguro. El propósito holístico de las disciplinas de pruebas de software es validar los requisitos (demostrar la operatividad y cumplir objetivos), verificar su estado interno y descubrir sistemáticamente fallos tempranos en un entorno controlado (sandbox) previo al despliegue en producción."
},

{
  id: 70,
  pregunta: "Testear la usabilidad es un proceso correspondiente al tipo de prueba:",
  opciones: [
    "Prueba de valores límite.",
    "Prueba de interfaces.",
    "Prueba de cubrimiento.",
    "Prueba de clases de equivalencia de datos."
  ],
  correcta: 1,
  explicacion: "Comprobar que los botones del mando de la tele sean blanditos y grandotes para que tu abuelo vea los canales sin usar gafas. La usabilidad es una dimensión crítica de la experiencia de usuario (UX); se audita a través de pruebas funcionales de interfaz gráfica (GUI Testing) que validan la ergonomía, la accesibilidad de componentes y la respuesta visual humana (HCI) frente a interacciones en front-end."
},

{
  id: 71,
  pregunta: "Dentro de los documentos:",
  opciones: [
    "Se debe incluir toda la información en el cuerpo principal por motivos de registro.",
    "Debemos clasificar la información y eliminar la menos relevante.",
    "Debemos clasificar la información e incluir en anexos la menos relevante.",
    "Ninguna es correcta."
  ],
  correcta: 2,
  explicacion: "Es como el libro donde salen las pegatinas: en el centro están los dibujos chulos para jugar, y las instrucciones aburridas de dónde se fabricaron van al final del todo donde no molestan. Las normativas de documentación técnica (como IEEE 830) indican que el cuerpo principal de un documento debe mantener la coherencia semántica para una lectura rápida. Los diagramas extremadamente complejos, logs de errores o glosarios secundarios se estructuran como anexos complementarios."
},

{
  id: 72,
  pregunta: "El workflow es:",
  opciones: [
    "Un modelo de trabajo.",
    "Un programa CASE.",
    "Un mecanismo de corrección.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 0,
  explicacion: "Como la cadena de montaje de regalos de los elfos de Navidad: uno corta la madera, se la pasa al que pinta y éste se la pasa al que le pone el lazo. En la ingeniería de software corporativa, un Workflow (Flujo de Trabajo) es el modelado operacional y formal de un proceso de negocio, definiendo estrictamente las transiciones de estado, responsables, roles y dependencias que sigue un entregable desde su inicio hasta su final."
},

{
  id: 73,
  pregunta: "En los POO:",
  opciones: [
    "Es preferible poseer un único objeto sobreexplotado que una multitud de objetos.",
    "Es preferible poseer un objeto para cada función.",
    "Debemos evitar la sobreexplotación de los objetos, pero también la creación inútil de estos.",
    "Ninguna es correcta."
  ],
  correcta: 2,
  explicacion: "Ni intentar que una sola navaja suiza tenga 50 herramientas y pese como una piedra, ni llevar cien herramientas diferentes en los bolsillos. Este paradigma representa el equilibrio en el diseño de clases: condena los 'God Objects' (clases divinas antipatrón con demasiadas responsabilidades y bajo SRP de SOLID) y simultáneamente evita la proliferación de clases anémicas microscópicas que fragmenten exageradamente la semántica y llenen de referencias el Heap."
},

{
  id: 74,
  pregunta: "La documentación debe ser siempre:",
  opciones: [
    "Correcta y en lenguaje técnico.",
    "Fácil de entender y sin emplear lenguaje técnico.",
    "Adaptado al nivel del lector.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 2,
  explicacion: "Al bebé le dices 'el perrito hace guau' y al veterinario le dices 'el cánido tiene buena garganta'. Dependiendo de quién vaya a leer el texto, cambiaremos nuestras palabras. La documentación de un proyecto abarca múltiples perfiles (stakeholders): un Manual de Usuario exige un lenguaje natural y orientación a negocio (requisitos funcionales), mientras que una Especificación de API o modelo E/R debe ser completamente técnica y rigurosa para los programadores."
},

{
  id: 75,
  pregunta: "La refactorización es:",
  opciones: [
    "Un medio para cambiar el funcionamiento del programa.",
    "El proceso de reestructuración interna de un código sin cambiar el programa.",
    "Cambiar la velocidad del programa.",
    "Todas son correctas."
  ],
  correcta: 1,
  explicacion: "Como borrar tu dibujo de la pizarra que estaba un poco torcido y volverlo a hacer rectito y bonito usando una regla; es la misma casa, pero se ve mucho mejor. A nivel de ingeniería, el refactoring consiste en aplicar patrones de mejora continua al código fuente (como Extraer Método o renombrar variables) para maximizar la legibilidad, minimizar la deuda técnica y bajar la complejidad, asegurando invariablemente la semántica original mediante Test de Regresión."
},

{
  id: 76,
  pregunta: "Los patrones creacionales:",
  opciones: [
    "Ayudan en la creación de objetos fuera de los POO.",
    "Ayudan en la creación de relaciones entre objetos fuera de los POO.",
    "Ayudan en la creación de objetos en los POO.",
    "Ayudan en la creación de objetos fuera de los POO."
  ],
  correcta: 2,
  explicacion: "Son moldes mágicos de hacer galletas que calculan ellos solos cuánta harina y azúcar echar para que la galleta salga perfecta y tú no te manches las manos. En la arquitectura Orientada a Objetos, los patrones de diseño creacionales (como el Factory Method, Singleton o Abstract Factory) son plantillas estructurales que encapsulan y gestionan la lógica de instanciación, ocultando las complejidades del operador 'new' y promoviendo el bajo acoplamiento."
},

{
  id: 77,
  pregunta: "Los patrones de diseño son:",
  opciones: [
    "Programas CASE.",
    "Elementos de corrección.",
    "Programas de ordenación de código.",
    "Soluciones prefabricadas para problemas comunes."
  ],
  correcta: 3,
  explicacion: "Es la receta secreta súper famosa que usan todas las abuelas para arreglar cualquier sopa que sale sosa, porque saben que funciona siempre. Los Design Patterns (como los clasificados por el Gang of Four) proporcionan esquemas abstractos y plantillas arquitectónicas conceptuales que representan las mejores prácticas probadas de la industria para resolver de forma elegante y reutilizable las incidencias estándar del diseño orientado a objetos."
},

{
  id: 78,
  pregunta: "Los SCV pueden ser:",
  opciones: [
    "Centralizados o compartimentados.",
    "Compartimentados o individuales.",
    "Cíclicos o centralizados.",
    "Centralizados o distribuidos."
  ],
  correcta: 3,
  explicacion: "O la profesora tiene la única copia del examen original en su gran cajón cerrado, o mágicamente cada niño tiene una copia entera y perfecta del examen guardada en su propia mochila. Los Sistemas de Control de Versiones dividen su topología fundamentalmente en dos familias: Centralizados (arquitectura de un solo repositorio remoto maestro como SVN) o Distribuidos (topología de nodos donde cada cliente aloja un clon completo y autónomo del repositorio como Git)."
},

{
  id: 79,
  pregunta: "Para realizar documentos es necesario:",
  opciones: [
    "El empleo de procesadores de texto.",
    "El empleo de la herramienta más conveniente.",
    "El empleo de una única herramienta sea cual sea por motivos de homogeneización.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 1,
  explicacion: "No usas unas tijeras para pintar de colores, ni usas lápices de cera para recortar un cartón; siempre buscas la caja de herramientas que sirva para lo que vas a hacer. En el ecosistema de documentación de software no existe un estándar absoluto: se seleccionan utilidades de Markdown (GitHub), lenguajes de marcado (HTML/LaTeX), wikis empresariales o herramientas CASE automatizadas en función del framework y la metodología del equipo."
},

{
  id: 80,
  pregunta: "Uno de los métodos de refactorización es:",
  opciones: [
    "La sustitución de constantes por variables.",
    "El empleo de más constantes.",
    "La encapsulación de constantes.",
    "Todas son correctas"
  ],
  correcta: 1,
  explicacion: "En lugar de decirle a tu mejor amigo cada día 'vamos a jugar a las 5', le dices 'vamos a jugar a la hora del bocadillo'; así si un día merendáis a las 6, él lo sabrá solito. En refactorización técnica (Clean Code), la técnica 'Replace Magic Number with Symbolic Constant' consiste en sustituir literales numéricos o cadenas sueltas distribuidas por el código por constantes globales nombradas (static final en Java), centralizando sus valores y dotándolos de un significado semántico evidente."
},

{
  id: 81,
  pregunta: "El diagrama de casos de uso permite:",
  opciones: [
    "Secuenciación temporal del programa con las interacciones entre objetos.",
    "Clasifica las clases y especifica las relaciones entre ellas.",
    "Representar varias aplicaciones de un sistema y los elementos que lo llevan a cabo.",
    "A y B don correctas."
  ],
  correcta: 2,
  explicacion: "Como hacer un dibujo de los niños jugando en el parque y los columpios que están usando para divertirse. A nivel técnico, modela los límites del sistema (frontieres), los actores externos y los servicios o funcionalidades que el sistema expone, abstrayéndose completamente de la secuenciación o de la arquitectura interna de la aplicación."
},

{
  id: 82,
  pregunta: "El OO es:",
  opciones: [
    "Objetivo de orientación.",
    "Orientación a objetos.",
    "Un programa de asistencia.",
    "Ninguna en realidad es POO."
  ],
  correcta: 1,
  explicacion: "Es como organizar el mundo de tus juguetes separándolos en cosas reales que puedes ver y tocar, como un coche o un perro. La Orientación a Objetos (OO) es un paradigma o modelo de diseño arquitectónico que abstrae el dominio del problema en entidades discretas llamadas objetos, los cuales encapsulan estado (datos) y comportamiento (lógica)."
},

{
  id: 83,
  pregunta: "La diagramación es:",
  opciones: [
    "Un modelo de elaboración de elementos.",
    "Un programa CASE.",
    "El acto o cualidad de transformar algo en un diagrama.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 2,
  explicacion: "Es como dibujar un mapa del tesoro en un papel para que tus amigos sepan por dónde ir, en lugar de explicárselo todo de palabra y que se pierdan. En ingeniería de software, la diagramación es el proceso metodológico de abstraer y representar visualmente la arquitectura, estructura, comportamiento o flujos de un sistema mediante notaciones gráficas estandarizadas (como UML)."
},

{
  id: 84,
  pregunta: "La UML es:",
  opciones: [
    "Un lenguaje de Modelado.",
    "Un tipo de programa OO.",
    "Una OO.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 0,
  explicacion: "Son como las señales de tráfico internacionales que todos los conductores del mundo entienden, hablen el idioma que hablen. El Unified Modeling Language (UML) no es un lenguaje de programación para compilar, sino un lenguaje visual semántico estandarizado por la OMG para especificar, construir, visualizar y documentar los artefactos de un sistema software orientado a objetos."
},

{
  id: 85,
  pregunta: "La versión 3.1 de UML:",
  opciones: [
    "Se publicó en 2009.",
    "No se llegó a publicar como tal, ya que se pasó directamente a la 3.1.1.",
    "Es la última publicada en 2017 y la que empleamos.",
    "Aún no se ha publicado."
  ],
  correcta: 3,
  explicacion: "Es como la película de tus dibujos favoritos que el director todavía no ha terminado de inventar, así que no existe para verla en el cine. Históricamente, el estándar UML se encuentra consolidado en su familia 2.x (llegando a la versión 2.5.1). No existe formalmente una especificación mayor UML 3.1 ratificada o publicada por el Object Management Group (OMG) en el ecosistema actual."
},

{
  id: 86,
  pregunta: "¿Cuál de las siguientes no es una herramienta para el diseño de UML?",
  opciones: [
    "Microsoft Vision",
    "Poseidon",
    "MagicDraw",
    "Adobe Photoshop"
  ],
  correcta: 3,
  explicacion: "Como intentar usar un pincel de pintura para atornillar una tuerca; simplemente no sirve para eso. Adobe Photoshop es un editor de gráficos rasterizados para manipulación de imágenes artísticas y fotografía, careciendo por completo de semántica de modelado, verificación de sintaxis UML o capacidades de ingeniería inversa que sí poseen herramientas CASE o de diseño específico como Visio o MagicDraw."
},

{
  id: 87,
  pregunta: "Los case permiten:",
  opciones: [
    "La reutilización del software.",
    "La portabilidad del software.",
    "La estandarización de la documentación.",
    "Todas las anteriores son correctas."
  ],
  correcta: 3,
  explicacion: "Es como la mochila robótica de un superhéroe que le guarda los juguetes para otro día, le imprime manuales de instrucciones solos y hace que las piezas encajen en cualquier ordenador. Las herramientas Computer-Aided Software Engineering (CASE) automatizan el ciclo de vida del software, facilitando la reusabilidad de componentes, asegurando la interoperabilidad (portabilidad) a través de generación de código, y auto-generando documentación bajo formatos estandarizados."
},

{
  id: 88,
  pregunta: "¿Cuál es un propósito de la carga o descarga de datos en una herramienta CASE?",
  opciones: [
    "Generar prototipos de aplicaciones.",
    "Simplificar el mantenimiento.",
    "Facilitar la comunicación con otras herramientas.",
    "Limitar la portabilidad de las aplicaciones."
  ],
  correcta: 2,
  explicacion: "Como meter tus legos en una caja y llevárselos a la casa de tu amigo para que él pueda montar su castillo juntándolos con los suyos. La importación y exportación de metadatos en herramientas CASE (a menudo mediante estándares neutros como XML/XMI) persigue la interoperabilidad de modelos entre diferentes suites del equipo de ingeniería (toolchain), evitando el vendor lock-in y fomentando el flujo continuo en proyectos grandes."
},

{
  id: 89,
  pregunta: "Los diagramas se dividen en las dos categorías de:",
  opciones: [
    "OO o POO.",
    "Estandarizados o anómalos.",
    "Clase y estado.",
    "Estructura y comportamiento."
  ],
  correcta: 3,
  explicacion: "Como ver un muñeco quieto para saber de qué piezas de plástico está hecho y luego verlo caminar cuando le pones las pilas. La taxonomía canónica del estándar UML agrupa sus diagramas en dos grandes familias fundamentales: diagramas estructurales (modelan la arquitectura estática y relaciones invariables, como clases o componentes) y diagramas de comportamiento (modelan la dinámica funcional y el paso del tiempo, como secuencia o estados)."
},

{
  id: 90,
  pregunta: "UML cuenta con las características de:",
  opciones: [
    "Estandarización y diagramación.",
    "Diagramación únicamente",
    "Agregación de cardinalidades",
    "Nivel público de visibilidad"
  ],
  correcta: 0,
  explicacion: "Es como tener reglas mágicas para dibujar caras: todos saben que va un círculo redondo y luego le pintas los ojos dentro. UML destaca por proveer un metamodelo unificado (estandarización avalada universalmente por el OMG) y una representación gráfica consistente (diagramación semántica) que permite eliminar la ambigüedad técnica entre los analistas, arquitectos y programadores."
},

{
  id: 91,
  pregunta: "El boolean o booleano:",
  opciones: [
    "Es un tipo de asociación.",
    "Es uno de los tipos de atributos.",
    "Es un tipo de instancia.",
    "Es un tipo de valor."
  ],
  correcta: 3,
  explicacion: "Es como el botón de la luz de tu habitación: solo puede estar encendido o apagado, no hay una luz 'a medias'. En la teoría de lenguajes fuertemente tipados, un booleano es un tipo de dato primitivo o escalar que representa un valor lógico binario, limitando su dominio estrictamente a dos estados mutuamente excluyentes en memoria: 'true' (verdadero) o 'false' (falso)."
},

{
  id: 92,
  pregunta: "El nivel de visibilidad designado con \"#\" es:",
  opciones: [
    "El público.",
    "El protegido.",
    "El reflexivo.",
    "El privado."
  ],
  correcta: 1,
  explicacion: "Es como una casita del árbol secreta: solo pueden entrar tú y tus hijos, pero no está permitido que entren los vecinos de fuera. En la notación UML, el símbolo '#' representa el modificador de acceso 'protected'. Esto expone el atributo o método a la propia clase contenedora y a toda su jerarquía de clases derivadas (subclases por herencia), pero lo mantiene encapsulado e inaccesible para entidades de otros paquetes."
},

{
  id: 93,
  pregunta: "El valor int:",
  opciones: [
    "Indica valores en números enteros.",
    "Indica valores en números con decimales.",
    "Indica valores con una línea de caracteres alfanuméricos.",
    "Las dos primeras son correctas."
  ],
  correcta: 0,
  explicacion: "Es como contar los dedos de tu mano: tienes uno, dos o tres dedos enteros, no puedes tener 'un dedo y un cuartito'. A nivel de declaración, el tipo 'int' (integer) se reserva en memoria (típicamente 32 bits) para representar números enteros precisos (positivos y negativos) operados aritméticamente por la ALU, excluyendo expresamente el manejo de mantisas o arquitecturas de coma flotante."
},

{
  id: 94,
  pregunta: "La diferencia entre composición y agregación:",
  opciones: [
    "El tipo de valor de atributo en sus clases.",
    "El empleo de los diferentes niveles de visibilidad.",
    "La fuerza de la unión entre los elementos que lo componen.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 2,
  explicacion: "La agregación es meter peras en una cesta (si rompes la cesta, las peras siguen vivas), y la composición es tu propia mano (si tú desapareces, tu mano también desaparece). En UML, ambas son relaciones 'todo-parte'. La agregación (rombo vacío) denota acoplamiento débil donde el ciclo de vida del componente es independiente; la composición (rombo negro) implica acoplamiento fuerte, donde el contenedor instancia y destruye inexorablemente a sus componentes."
},

{
  id: 95,
  pregunta: "La herencia:",
  opciones: [
    "Es uno más de los tipos de asociaciones.",
    "Es un tipo de asociación en el que se emplean únicamente instancias.",
    "Están restringidas por la cantidad de instancias",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 3,
  explicacion: "Es como el molde grande de un coche del que sacamos coches de carreras y coches de policía; todos son coches pero heredan su forma y le añaden luces. La herencia ('generalización' en UML) no es una asociación clásica estructural ni trabaja a nivel de 'instancias', sino que es una relación taxonómica a nivel de clases ('is-a') donde una subclase deriva y amplía la implementación y estado de una superclase padre. Ninguna opción propuesta es correcta."
},

{
  id: 96,
  pregunta: "Las asociaciones con restricciones pueden ser:",
  opciones: [
    "De un solo tipo mediante el empleo de elecciones con \"o\".",
    "De un solo tipo mediante el empleo de números mínimos y máximos de entidades.",
    "De diversas formas como las anteriores.",
    "No existen restricciones en las asociaciones."
  ],
  correcta: 2,
  explicacion: "Como poner reglas a un juego: puede ser la regla de que jugáis de 2 a 4 amigos, o la regla de que solo se puede elegir la ficha verde o la roja. En UML, las asociaciones pueden parametrizarse semánticamente mediante restricciones formales ('constraints'). Éstas adoptan formas variadas, desde la cardinalidad multiplicativa explícita (p.e. '1..*') hasta restricciones lógicas lógicas operacionales (como '{xor}' para asociaciones mutuamente excluyentes)."
},

{
  id: 97,
  pregunta: "Las herramientas CASE:",
  opciones: [
    "Son herramientas de cálculo para los atributos.",
    "Son herramientas para la inserción de plugins.",
    "Son herramientas para asistencia en la creación de software en general.",
    "Ninguna es correcta."
  ],
  correcta: 2,
  explicacion: "Es como el gran taller mágico de Papá Noel que le ayuda a fabricar, pintar, ordenar e imprimir las pegatinas de todos los juguetes súper rápido sin equivocarse. Las Computer-Aided Software Engineering tools son ecosistemas de software orientados a proveer asistencia integral y transversal durante todas las fases del ciclo de vida del desarrollo de sistemas (SDLC), desde el análisis UML hasta el versionado de código."
},

{
  id: 98,
  pregunta: "Las notas adjuntas:",
  opciones: [
    "No permiten más de 10 palabras.",
    "Permiten más de 10 palabras, pero no imágenes.",
    "No permite más de 10 palabras, pero si imágenes.",
    "Ninguna es correcta."
  ],
  correcta: 3,
  explicacion: "Son como los post-it que le pegas a tu libro de dibujos; puedes escribir letras, hacer un monigote o apuntar un secreto, y no hay un policía de post-its que te ponga multas. En la sintaxis de UML, una nota es un artefacto de anotación visual genérico que no posee ninguna restricción formal del OMG sobre el límite numérico de palabras que alberga. Sirve para inyectar OCL (restricciones lógicas), comentarios léxicos o enlaces a recursos no modelables."
},

{
  id: 99,
  pregunta: "Los métodos:",
  opciones: [
    "Son las acciones que podrá desempeñar cada instancia.",
    "No forma parte de los UML.",
    "Se muestran siempre con un valor int.",
    "La primera y tercera son correctas."
  ],
  correcta: 0,
  explicacion: "Si tu mascota es el objeto, sus atributos son lo suave que es su pelo, y los métodos son todas las cosas guays que sabe hacer: dar la patita, saltar y correr. En el paradigma Orientado a Objetos y en el modelado estático, los métodos (u operaciones) son subrutinas o funciones invocables que implementan el comportamiento de la clase, posibilitando mutar su estado o responder a mensajes emitidos por otras instancias."
},

{
  id: 100,
  pregunta: "Una instancia es:",
  opciones: [
    "Un valor de uno de los atributos.",
    "El conjunto de entidades que forman un tipo de objeto.",
    "Cada uno de los objetos particulares de una clase.",
    "Todas son incorrectas."
  ],
  correcta: 2,
  explicacion: "La clase es el papel donde está apuntada la receta del bizcocho, y la instancia es el bizcocho real, calentito y de chocolate, que te estás zampando ahora mismo. A nivel arquitectónico de ejecución (runtime), una instancia es la materialización en la memoria dinámica (heap) de la estructura teórica definida por una clase abstracta, adquiriendo su propia referencia de memoria y su propio estado variable independiente."
},

{
  id: 101,
  pregunta: "La concurrencia ocurre en:",
  opciones: [
    "Los diagramas de uso.",
    "Los diagramas de colaboración.",
    "Los diagramas de actividades.",
    "Los diagramas de secuencia."
  ],
  correcta: 2,
  explicacion: "Es como cuando en la cocina tu madre bate los huevos y tu padre fríe las patatas exactamente a la misma vez para terminar antes. En la semántica dinámica de UML, el diagrama de actividades es el artefacto predilecto para modelar paralelismo (multithreading); utiliza nodos de sincronización especiales ('fork' para dividir el hilo principal en hilos concurrentes, y 'join' para volver a reunificarlos)."
},

{
  id: 102,
  pregunta: "La línea de vida:",
  opciones: [
    "Es un modo de mostrar la escala temporal.",
    "Puede acompañarse de otras líneas de vida en posición paralela.",
    "Se encuentran en los diagramas de secuencia.",
    "Todas las anteriores son correctas."
  ],
  correcta: 3,
  explicacion: "Es la cuerda larguísima de un globo que cuelga desde el cielo; cuanto más bajas la mirada por la cuerda, más tiempo del día ha pasado mientras los niños juegan con él. En un diagrama de secuencia UML, la línea de vida (lifeline) es un eje vertical discontinuo que fluye hacia abajo marcando la cronología temporal. Se trazan en paralelo para representar la convivencia y la interacción asíncrona o síncrona de múltiples objetos vivos."
},

{
  id: 103,
  pregunta: "La representación recursiva:",
  opciones: [
    "Es el empleo de mensajes de ida y vuelta.",
    "Es el empleo de mensajes que no requieren respuesta, pero que se envían de manera periódica.",
    "Es el mensaje que un proceso se envía a sí mismo, él es tanto el emisor como el receptor.",
    "Ninguna de las anteriores."
  ],
  correcta: 2,
  explicacion: "Como ponerte delante del espejo de tu baño y hablar contigo mismo para recordarte que debes lavarte los dientes; tú hablas y tú mismo te escuchas. En los diagramas de interacción, un auto-mensaje o delegación reflexiva modela una llamada de un objeto a un método implementado dentro de sí mismo (invocación local al 'this'). Se diagrama visualmente como una flecha que sale de su línea de vida y gira en 'U' para apuntar de nuevo a su propio foco de control."
},

{
  id: 104,
  pregunta: "Las relaciones de inclusión:",
  opciones: [
    "Unen casos de uso cuando uno requiere de los otros para ejecutarse.",
    "Se marcan empleando una flecha con un rombo por cabeza.",
    "Se encuentran en los diagramas de actividades",
    "Ninguna es correcta."
  ],
  correcta: 0,
  explicacion: "Como intentar subir a la noria gigante; obligatoriamente el feriante te va a pedir el ticket. La acción de subir incluye por narices la acción de dar el ticket. En UML, la dependencia estereotipada '<<include>>' establece un vínculo obligatorio por el cual un caso de uso base ejecuta y asimila en su flujo interno el comportamiento estipulado en otro caso de uso, refactorizando lógica subyacente que se repite en el sistema."
},

{
  id: 105,
  pregunta: "Los diagramas de colaboración:",
  opciones: [
    "Poseen una gran semejanza con los diagramas de uso, pero centrándose en la temporización.",
    "Poseen una gran semejanza con los diagramas de actividades, pero centrándose en el estado.",
    "Poseen una gran semejanza con los diagramas de secuencia, pero centrándose en la temporalización.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 3,
  explicacion: "No se parecen a relojes de arena midiendo el tiempo, sino más bien a un mapa que muestra dónde se sientan los niños en clase y quién le tira avioncitos de papel a quién. En la nomenclatura moderna de UML (Diagramas de Comunicación), son estructuralmente isomorfos a los diagramas de secuencia pero se abstraen de la cronología temporal vertical; su foco arquitectónico reside en la topología de la red de objetos y los enlaces (links) espaciales que canalizan los mensajes."
},

{
  id: 106,
  pregunta: "Los diagramas de estados poseen:",
  opciones: [
    "Un marcado inicio y final.",
    "Semejanzas con los diagramas de clases por su uso de estados semejante a los atributos.",
    "Las dos anteriores son correctas.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 2,
  explicacion: "Es como observar a una oruguita nacer, hacerse crisálida y convertirse en mariposa (inicio y fin); y cada fase nos dice cómo está su cuerpo por dentro. Las máquinas de estados finitos en UML mapean dinámicamente el ciclo vital completo de un objeto mediante nodos especiales de transición (estado inicial explícito y finales). Guardan correlación con el diagrama de clases porque cada 'estado' es una derivación lógica de los valores discretos de los atributos de la instancia."
},

{
  id: 107,
  pregunta: "Los diagramas de uso poseen:",
  opciones: [
    "Dos elementos fundamentales.",
    "Tres elementos fundamentales",
    "Cuatro elementos fundamentales",
    "No posee elementos fundamentales, ya que posee una amplia batería de elementos para elegir."
  ],
  correcta: 1,
  explicacion: "Para jugar al teatro solo necesitas tres cosas súper importantes: el escenario (sistema), los actores disfrazados (actores) y el guion de qué tienen que decir (caso de uso). A nivel de sintaxis gráfica, el modelo fundacional de un Diagrama de Casos de Uso se sustenta rígidamente en la triada: los 'Actores' (roles de usuarios), los 'Casos de Uso' (elipses de funcionalidad) y las 'Asociaciones' o fronteras de comunicación que los interconectan lógicamente."
},

{
  id: 108,
  pregunta: "Los objetos en los diagramas representan:",
  opciones: [
    "Los usuarios reales.",
    "Cada uno de los programas orientados a objetos.",
    "Los estados de los POO.",
    "Ninguna de las anteriores."
  ],
  correcta: 3,
  explicacion: "No son los niños jugando, ni las videoconsolas enteras, sino un soldadito de plástico sacado de un molde que sirve para la batalla en ese momento concreto. En la vista dinámica de UML (como el diagrama de objetos o de secuencias), un objeto es estrictamente una materialización volátil en tiempo de ejecución (una 'instancia') clonada a partir del molde estático de su clase, abstrayendo a los actores biomecánicos u otros elementos estructurales ajenos a su dominio."
},

{
  id: 109,
  pregunta: "Los POO son:",
  opciones: [
    "Programas de Orientación Orgánica.",
    "Programas Orientados a Objetos.",
    "Programas de Objetos Orientados.",
    "Programas con Objetos Ocultos."
  ],
  correcta: 1,
  explicacion: "Es hacer un videojuego montando muñequitos de Lego y haciendo que se hablen, en lugar de escribir una lista aburridísima e interminable con todas las órdenes matemáticas del mundo. Hace referencia a la Programación Orientada a Objetos (o sistemas resultantes bajo este paradigma, OOP en inglés), una metodología de ingeniería de software que desacopla la lógica imperativa encapsulando los datos y el comportamiento dentro de abstracciones reusables tipificadas como clases e instancias."
},

{
  id: 110,
  pregunta: "Los subestados son:",
  opciones: [
    "Conjunto de estados específicos que conforman un estado más complejo",
    "Estados derivados de la conclusión de un estado principal.",
    "Estados que permiten la secuencia.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 0,
  explicacion: "Como el estado de 'estar castigado': dentro de ese gran aburrimiento, puedes pasar por el subestado 'llorar' y luego por el subestado 'pedir perdón'. En los grafos dinámicos basados en statecharts (Harel), un subestado (o estado anidado) es un estado atómico subordinado topológicamente dentro de la región de un estado compuesto de orden superior, permitiendo gestionar transiciones jerárquicas y abstracciones de comportamiento concurrente o secuencial interno."
}

];

 