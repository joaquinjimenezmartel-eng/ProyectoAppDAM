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
  explicacion: "El software es un producto lógico e intangible que se desarrolla mediante actividades de análisis, diseño, programación, pruebas y mantenimiento. Puede distribuirse como producto estándar para muchos clientes o construirse a medida de unas necesidades concretas. Por ello, las características enumeradas son compatibles entre sí."},

{ id: 2,
  pregunta: "Dentro de los modos de colaboración con los SCV (Sistemas de Control de Versiones) está:",
  opciones: [
    "Flujo de trabajo centralizado",
    "Flujo de trabajo con gestor de integración",
    "Flujo de trabajo con dictador y tenientes",
    "Todas son correctas"
  ],
  correcta: 3,
  explicacion: "Los sistemas de control de versiones admiten distintos modelos de colaboración. Un flujo centralizado concentra los cambios en un repositorio; el modelo con integrador revisa contribuciones antes de incorporarlas; y el modelo de dictador y tenientes delega revisiones por niveles. Todos son esquemas válidos según el tamaño y la organización del proyecto."},

{ id: 3,
  pregunta: "Durante la elaboración de diagramas de comportamiento de casos de uso, la relación de extensión es una situación donde dos casos de uso comparten funcionalidad y, además:",
  opciones: [
    "Uno de ellos añade un matiz extra",
    "Son idénticos",
    "Uno requiere del otro para su realización",
    "Ninguna de las anteriores"
  ],
  correcta: 0,
  explicacion: "En UML, `<<extend>>` expresa que un caso de uso añade comportamiento opcional o condicionado a otro. El caso base tiene sentido y puede completarse por sí mismo; el caso de extensión interviene solo cuando se cumple una condición en un punto previsto. Se diferencia de `<<include>>`, que incorpora comportamiento necesario y reutilizable."},

{ id: 4,
  pregunta: "Ejecutando el comando \"javac -version\":",
  opciones: [
    "Comprobamos que esta instalado el JDK (Java development kit)",
    "Comprobamos que está instalado el JVM",
    "Comprobamos que está instalado NetBeans",
    "Iniciamos el proceso de depuración de errores"
  ],
  correcta: 0,
  explicacion: "`javac -version` ejecuta el compilador de Java y muestra su versión. Como `javac` forma parte del JDK, una respuesta válida confirma que el kit de desarrollo está instalado y que el ejecutable puede localizarse desde la terminal, normalmente mediante `PATH`. No basta con disponer únicamente de un entorno de ejecución sin compilador."},

{ id: 5,
  pregunta: "El compilador de Java también se denomina:",
  opciones: [
    "Javac",
    "JRE",
    "JVM",
    "JDK"
  ],
  correcta: 0,
  explicacion: "`javac` es el compilador incluido en el JDK. Traduce los archivos fuente `.java` a archivos `.class` con *bytecode*, que después ejecuta la máquina virtual de Java. No debe confundirse con el comando `java`, que inicia la JVM para ejecutar una clase ya compilada."},

{ id: 6,
  pregunta: "El diagrama de casos de uso permite:",
  opciones: [
    "Secuenciación temporal",
    "Clasifica clases y relaciones",
    "Representar varias aplicaciones de un sistema y los elementos que lo llevan a cabo",
    "Ninguna es correcta"
  ],
  correcta: 2,
  explicacion: "Un diagrama de casos de uso muestra los servicios que ofrece un sistema y los actores externos que participan en ellos. Representa el límite funcional y las relaciones entre actores y casos de uso, pero no el orden temporal de los pasos ni la implementación interna. Puede abarcar varias funciones o aplicaciones relacionadas del sistema."},

{ id: 7,
  pregunta: "El nivel de visibilidad designado con \"-\" es:",
  opciones: [
    "Público",
    "Protegido",
    "Reflexivo",
    "El privado"
  ],
  correcta: 3,
  explicacion: "En un diagrama de clases UML, el signo `-` indica visibilidad privada. El atributo u operación solo es accesible desde la propia clase, lo que ayuda a encapsular su estado y controlar cómo se modifica. Como referencia, `+` significa público y `#` protegido."},

{ id: 8,
  pregunta: "El proceso de reestructuración interna del código, generalmente para optimizar el comportamiento del código sin modificarlo, se llama:",
  opciones: [
    "Refactorizacion",
    "Recodificación",
    "Reordenación",
    "Regeneración"
  ],
  correcta: 0,
  explicacion: "La refactorización modifica la estructura interna del código sin alterar su comportamiento observable. Puede consistir en extraer un método, eliminar duplicación o mejorar nombres. Su objetivo es facilitar la lectura, las pruebas y el mantenimiento; no añade una funcionalidad nueva, aunque prepara el código para cambios posteriores."},

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
  explicacion: "`int` es un tipo de dato destinado a números enteros, sin parte decimal. En Java ocupa 32 bits y representa valores positivos, negativos y cero dentro de un rango definido. Para cantidades con fracción se utilizan tipos como `float` o `double`; por eso `int` no almacena valores como `3,5`."},

{ id: 11,
  pregunta: "En el lenguaje UML, los atributos de una clase se representan en:",
  opciones: [
    "Primera celda",
    "La segunda clase",
    "Tercera celda",
    "Ninguna de las anteriores"
  ],
  correcta: 1,
  explicacion: "Una clase UML se representa normalmente mediante un rectángulo dividido en tres compartimentos: nombre en la parte superior, atributos en la segunda sección y operaciones o métodos en la tercera. Por tanto, los atributos se sitúan en el compartimento intermedio, no en una clase distinta."},

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
  explicacion: "La modularidad evalúa si el sistema está dividido en componentes con responsabilidades claras; la estandarización comprueba el uso coherente de normas y convenciones; y la tolerancia a fallos mide si el servicio puede continuar ante errores. Como las tres aportan información sobre la calidad del software, todas son correctas."},

{ id: 14,
  pregunta: "Entre sus herramientas, un IDE puede contar con:",
  opciones: [
    "Editor",
    "Depurador",
    "Compilador",
    "Todas son correctas"
  ],
  correcta: 3,
  explicacion: "Un IDE reúne en una misma interfaz herramientas habituales del desarrollo: editor de código, compilador o intérprete y depurador. También puede integrar pruebas, control de versiones y gestión de dependencias. La integración permite escribir, ejecutar y diagnosticar el programa sin cambiar continuamente de aplicación."},

{ id: 15,
  pregunta: "Es muy recomendable que las pruebas:",
  opciones: [
    "Las realice personal del equipo de programación",
    "No cubran aspectos importantes",
    "Las realice personal externo al equipo de programación",
    "Todas son incorrectas"
  ],
  correcta: 2,
  explicacion: "Es recomendable que parte de las pruebas las realice personal distinto de quien programó la funcionalidad. Una mirada independiente suele explorar casos límite y usos no previstos y evalúa el resultado frente a los requisitos. Esto no elimina las pruebas del desarrollador: las complementa con una verificación menos condicionada por la implementación."},

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
  explicacion: "La refactorización reorganiza la estructura interna del código sin cambiar su comportamiento observable. Permite eliminar duplicaciones y otros indicadores de diseño mejorable, reducir el acoplamiento y aumentar la cohesión. Las pruebas de regresión sirven para comprobar que el sistema sigue produciendo los mismos resultados después de los cambios."},

{ id: 20,
  pregunta: "La relación de agregación se marca con:",
  opciones: [
    "Triángulo vacío",
    "Un rombo vacío",
    "Rombo negro",
    "Círculo vacío"
  ],
  correcta: 1,
  explicacion: "La agregación UML representa una relación todo-parte débil mediante un rombo vacío situado en el extremo del todo. Las partes pueden existir independientemente del objeto agregado. La composición utiliza un rombo relleno y expresa una dependencia de ciclo de vida más fuerte entre el todo y sus partes."},

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
  explicacion: "Las pruebas unitarias verifican unidades pequeñas del código, como un método o una clase, y suelen escribirse desde las primeras fases del desarrollo. Permiten detectar defectos cerca de su origen y ejecutarse con rapidez. Pueden usar dobles de prueba para aislar dependencias, aunque no siempre es necesario."},

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
  explicacion: "Las pruebas de regresión se vuelven a ejecutar después de modificar el software para comprobar que funciones antes correctas continúan funcionando. Detectan efectos secundarios y defectos reintroducidos. Su automatización en integración continua permite repetirlas con frecuencia, pero no garantiza por sí sola la ausencia total de errores."},

{ id: 25,
  pregunta: "Las pruebas se realizan con el fin de:",
  opciones: [
    "Demostrar que el software cumple lo que se esperaba de él",
    "Detectar errores antes de que el software se use",
    "Asegurar que el programa funciona correctamente",
    "Todas son correctas"
  ],
  correcta: 3,
  explicacion: "Las pruebas verifican que el producto se ha construido conforme a sus especificaciones, validan que satisface las necesidades y descubren defectos antes de llegar a producción. También aportan evidencia para mantener el software con seguridad. Como las finalidades enumeradas son complementarias, todas resultan correctas."},

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
  explicacion: "Las herramientas CASE asisten tareas del ciclo de vida del software, como modelado, generación de código, documentación y mantenimiento de artefactos. Cuando utilizan modelos y formatos comunes favorecen la reutilización, la interoperabilidad y el trabajo multiplataforma. Por eso las capacidades propuestas pueden coexistir en este tipo de herramienta."},

{ id: 28,
  pregunta: "Los diagramas de estados poseen:",
  opciones: [
    "Un marcado inicio y final",
    "Semejanzas con los diagramas de clases",
    "Las dos anteriores son correctas",
    "Ninguna de las anteriores"
  ],
  correcta: 2,
  explicacion: "Un diagrama de estados puede incluir un pseudestado inicial y uno o varios estados finales. Describe cómo una instancia cambia de estado en respuesta a eventos y condiciones, por lo que complementa la estructura definida por sus clases. Las dos características indicadas —inicio y fin, y relación con objetos de clases— son compatibles."},

{ id: 29,
  pregunta: "Los lenguajes de programación que se clasifican dependiendo de cómo se ejecutan son:",
  opciones: [
    "Lenguajes compilados, interpretados y virtuales",
    "Máquina y medio nivel",
    "Alto nivel y ensamblador",
    "Ninguna es correcta"
  ],
  correcta: 0,
  explicacion: "Según su modelo de ejecución, un lenguaje puede compilarse a código nativo antes de ejecutarse, interpretarse durante la ejecución o traducirse a código intermedio para una máquina virtual. C++ es un ejemplo habitual de compilación nativa; Java genera *bytecode* para la JVM. En la práctica, algunos entornos combinan interpretación y compilación JIT."},

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
  explicacion: "Los patrones de diseño documentan soluciones generales que han resultado útiles ante problemas recurrentes de diseño. Describen contexto, participantes, relaciones y consecuencias; no son componentes terminados que deban copiarse sin adaptación. Patrones como *Observer* o *Factory Method* ofrecen un vocabulario compartido entre desarrolladores."},

{ id: 32,
  pregunta: "Los POO son:",
  opciones: [
    "Orientación Orgánica",
    "Programas Orientados a Objetos",
    "Programas de Objetos Orientados",
    "Objetos Ocultos"
  ],
  correcta: 1,
  explicacion: "POO significa Programación Orientada a Objetos. Este paradigma estructura el software mediante objetos que reúnen estado —sus datos o atributos— y comportamiento —sus métodos—. Las clases definen las características comunes y los objetos son sus instancias concretas; esta organización favorece la encapsulación, la reutilización y el mantenimiento del código."},

{ id: 33,
  pregunta: "Los SCV (Sistemas de Control de Versiones) pueden ser:",
  opciones: [
    "Compartimentados",
    "Individuales",
    "Cíclicos",
    "Centralizados o distribuidos"
  ],
  correcta: 3,
  explicacion: "Los sistemas de control de versiones se clasifican en centralizados y distribuidos. En un sistema centralizado, como SVN, existe un repositorio principal compartido. En uno distribuido, como Git, cada desarrollador puede disponer de una copia completa del repositorio y de su historial."},

{ id: 34,
  pregunta: "Los tipos de diagramas que pueden desarrollarse por UML se dividen en:",
  opciones: [
    "No existen grandes categorías",
    "Dos grandes categorías: estructura y comportamiento",
    "Interactividad y comunicación",
    "Tres grandes categorías"
  ],
  correcta: 1,
  explicacion: "UML agrupa sus diagramas en dos grandes categorías: los estructurales muestran la organización estática, como clases, componentes o despliegue; los de comportamiento describen la dinámica, como actividades, estados, casos de uso e interacciones. Los diagramas de secuencia son una especialización de los diagramas de interacción."},

{ id: 35,
  pregunta: "Los tipos de documentación fundamentales en la creación de software en función de su naturaleza son:",
  opciones: [
    "Documentos técnicos y funcionales",
    "Documentos orgánicos",
    "Funcionales y descriptivos",
    "Creacionales y estructurales"
  ],
  correcta: 0,
  explicacion: "La documentación funcional explica qué debe hacer el sistema y cómo lo utiliza el usuario; la técnica describe arquitectura, interfaces, datos, despliegue y mantenimiento para el equipo especializado. Ambas son fundamentales, pero se dirigen a lectores y objetivos distintos, por lo que deben adaptar estructura y nivel de detalle."},

{ id: 36,
  pregunta: "Los tipos de lenguajes de programación son:",
  opciones: [
    "Diseño y contabilidad",
    "Estándar y mecanizado",
    "Interpretado y literal",
    "Lenguaje máquina, lenguaje de medio nivel o ensamblador y lenguaje de alto nivel"
  ],
  correcta: 3,
  explicacion: "Según su nivel de abstracción se distinguen lenguaje máquina, ensamblador o nivel intermedio y lenguajes de alto nivel. El código máquina contiene instrucciones ejecutables por una arquitectura concreta; el ensamblador utiliza mnemónicos próximos al hardware; y los lenguajes de alto nivel expresan operaciones con mayor independencia de la máquina."},

{ id: 37,
  pregunta: "NetBeans es un IDE:",
  opciones: [
    "No es modular",
    "Solo Windows",
    "En el que podemos desarrollar en Java y otros lenguajes como C/C++, HTML, PHP y Python",
    "Ninguna es correcta"
  ],
  correcta: 2,
  explicacion: "Apache NetBeans es un IDE de código abierto especialmente conocido por su soporte para Java. Su arquitectura modular permite trabajar también con otros lenguajes y tecnologías mediante módulos o complementos, como C/C++, HTML y PHP. La disponibilidad concreta de cada lenguaje depende de la versión y de los módulos instalados."},

{ id: 38,
  pregunta: "Un punto de interrupción al depurar un programa consiste en:",
  opciones: [
    "Un lugar en el programa donde se detendrá la ejecución y se espera a que el depurador proceda",
    "Actualiza la ejecución",
    "Modifica la ejecución",
    "Esperar un warning"
  ],
  correcta: 0,
  explicacion: "Un punto de interrupción indica al depurador que suspenda la ejecución al alcanzar una línea o condición. Mientras el programa está detenido se pueden inspeccionar variables, pila de llamadas e hilos y avanzar paso a paso. No modifica la lógica funcional del programa; es una herramienta de diagnóstico del entorno de desarrollo."},

{ id: 39,
  pregunta: "Una de las características del lenguaje de modelado UML es:",
  opciones: [
    "Permite una documentación clara y sencilla",
    "Está estandarizado y es el lenguaje más usado en sistemas orientados a objetos",
    "Tiene una gran capacidad para crear diagramas que representan sistemas",
    "Todas son correctas"
  ],
  correcta: 3,
  explicacion: "UML es un lenguaje de modelado estandarizado por el OMG que utiliza diagramas para visualizar, especificar y documentar sistemas. Su notación común facilita la comunicación entre perfiles técnicos. UML no garantiza por sí solo un modelo sin ambigüedades: la precisión depende también de elegir y elaborar correctamente cada diagrama."},

{ id: 40,
  pregunta: "Una instancia es:",
  opciones: [
    "Un valor de un atributo",
    "Conjunto de entidades",
    "Cada uno de los objetos particulares de una clase",
    "Todas son incorrectas"
  ],
  correcta: 2,
  explicacion: "Una instancia es un objeto concreto creado a partir de una clase. La clase declara qué atributos y métodos tendrán sus objetos, mientras que cada instancia posee identidad y estado propios en memoria. Por ejemplo, dos objetos de la clase `Cuenta` comparten la misma estructura, pero pueden almacenar titulares y saldos diferentes."},

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
  explicacion: "El arquitecto de software toma decisiones técnicas de alto nivel: lenguajes, plataformas, bases de datos, integración y patrones estructurales. Debe relacionarlas con requisitos como seguridad, rendimiento, mantenibilidad y escalabilidad. La decisión suele coordinarse con el equipo, pero corresponde a su responsabilidad arquitectónica."
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
  explicacion: "En un proceso de compilación típico, el compilador traduce el código fuente a código objeto y el enlazador combina esos objetos con las bibliotecas necesarias para producir el ejecutable. Aunque el enlace puede realizarlo una herramienta específica, suele formar parte del proceso dirigido por el compilador. En Windows, el resultado puede ser un archivo `.exe`."
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
  explicacion: "El software específico o a medida se diseña a partir de los requisitos particulares de una organización o usuario. Puede adaptarse estrechamente a sus procesos, pero suele exigir más análisis, coste y mantenimiento que un producto estándar destinado a muchos clientes."
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
  explicacion: "El análisis léxico es la primera etapa del análisis de un compilador. Lee la secuencia de caracteres y la agrupa en *tokens*, como palabras reservadas, identificadores, literales y operadores. En esta fase se detectan secuencias de caracteres no válidas; la estructura gramatical se comprueba después, durante el análisis sintáctico."
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
  explicacion: "Por su forma de ejecución, los lenguajes pueden traducirse previamente a código nativo, ejecutarse mediante un intérprete o generar un código intermedio para una máquina virtual. Java, por ejemplo, compila a *bytecode* y la JVM puede interpretarlo o compilarlo en tiempo de ejecución. Las implementaciones modernas pueden combinar varias técnicas."
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
  explicacion: "Un programa está formado por instrucciones escritas en un lenguaje de programación y organizadas para realizar una tarea. Esas instrucciones pueden incluir declaraciones, decisiones, bucles y llamadas, y finalmente se traducen o interpretan para ejecutarse. Los datos por sí solos no constituyen el programa que los procesa."
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
  explicacion: "El JavaScript del lado cliente se descarga en el navegador para poder ejecutarse, por lo que el usuario puede inspeccionar los archivos recibidos incluso si están minificados. La ofuscación dificulta la lectura, pero no convierte el código en secreto. Las claves y reglas de seguridad críticas deben permanecer en el servidor."
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
  explicacion: "Un módulo puede desactivarse para impedir que se cargue conservando sus archivos y, normalmente, su configuración; también puede desinstalarse para retirar sus componentes del sistema. La desactivación facilita volver a habilitarlo, mientras que la desinstalación es apropiada cuando ya no se necesita."
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
  explicacion: "Turbo Pascal destacó entre los primeros entornos de desarrollo por integrar editor y compilador en una misma herramienta y ofrecer tiempos de compilación muy rápidos para su época. Esa combinación acortó el ciclo de escribir, compilar y corregir código, anticipando características habituales de los IDE modernos."
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
  explicacion: "Delphi fue uno de los primeros entornos de desarrollo visual ampliamente utilizados para crear aplicaciones de Windows. Popularizó un enfoque RAD (*Rapid Application Development*) basado en componentes, formularios y programación dirigida por eventos, permitiendo diseñar interfaces y asociarles código desde un único entorno."
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
  explicacion: "Depurar consiste en localizar, comprender y corregir los defectos que provocan resultados incorrectos o fallos de ejecución. Un depurador permite detener el programa en puntos de ruptura, avanzar instrucción a instrucción e inspeccionar variables y la pila de llamadas para identificar la causa, no solo el síntoma."
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
  explicacion: "Un constructor gráfico de interfaces permite colocar controles como campos de texto, botones y pestañas mediante una vista visual. La herramienta genera o actualiza la descripción de la interfaz, por ejemplo código o XML. WindowBuilder y Scene Builder son ejemplos, aunque el resultado debe revisarse y conectarse con la lógica de la aplicación."
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
  explicacion: "Xcode es el entorno de desarrollo de Apple para crear, probar, firmar y distribuir aplicaciones de sus plataformas. Incluye los SDK, compiladores, depurador, simuladores y herramientas de interfaz necesarios para iOS, macOS y otros sistemas de Apple. Otros editores pueden participar en el desarrollo, pero la cadena oficial se integra en Xcode."
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
  explicacion: "Iniciar la depuración ejecuta el proyecto bajo el control del depurador. Esto permite detener el programa en puntos de interrupción, avanzar instrucción a instrucción e inspeccionar variables y la pila de llamadas. El atajo exacto depende del entorno de desarrollo y de su configuración; en el contexto planteado, la combinación indicada inicia esa sesión."
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
  explicacion: "Un *breakpoint* indica al depurador que detenga temporalmente la ejecución al alcanzar una línea o condición. Durante la pausa se inspeccionan variables, pila de llamadas e hilos y se puede continuar paso a paso. Su propósito es observar el estado del programa para localizar la causa de un comportamiento incorrecto."
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
  explicacion: "La calidad puede medirse mediante indicadores complementarios. El número o la densidad de defectos informa sobre los fallos encontrados, mientras que la frecuencia y el esfuerzo de revisión muestran cuánto trabajo requiere comprobar y corregir el código. Ninguna métrica aislada describe toda la calidad, pero ambas aportan evidencia útil."
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
  explicacion: "El personal de pruebas diseña los casos a partir de los requisitos y las especificaciones del sistema. Cada prueba debe comprobar una conducta esperada y poder relacionarse con el requisito que valida, lo que aporta trazabilidad. Basarse únicamente en la intuición dejaría funciones sin cubrir y dificultaría demostrar que el producto cumple lo solicitado."
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
  explicacion: "Las pruebas unitarias verifican unidades pequeñas y aislables del código, como una función o una clase, y suelen ejecutarse desde las primeras fases del desarrollo. Por ejemplo, una prueba puede comprobar que un método calcula correctamente un descuento. Los dobles de prueba pueden aislar dependencias, pero no son obligatorios en todos los casos."
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
  explicacion: "Las pruebas permiten verificar que el software se comporta como se ha diseñado, validar que satisface las necesidades y descubrir defectos antes de que lleguen al usuario. También aportan confianza para realizar cambios. Como las opciones recogen finalidades compatibles —comprobar funcionamiento, detectar fallos y evaluar el estado—, todas son correctas."
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
  explicacion: "La documentación debe ordenar la información según su importancia para el lector. El cuerpo principal contiene lo necesario para comprender y utilizar el documento; los detalles extensos o secundarios, como listados, registros o diagramas auxiliares, pueden trasladarse a anexos y referenciarse desde el texto."
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
  explicacion: "En orientación a objetos conviene equilibrar responsabilidades. Una clase con demasiadas funciones concentra dependencias y resulta difícil de probar y mantener; dividir cada detalle en clases sin una responsabilidad real también añade complejidad. El objetivo es crear objetos cohesionados, con una finalidad clara y colaboraciones justificadas."
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
  explicacion: "La documentación debe adaptarse a los conocimientos y objetivos de quien la consulta. Un manual de usuario explica tareas con lenguaje directo y ejemplos; una referencia de API necesita parámetros, tipos, errores y contratos técnicos. Adaptar el nivel no significa perder precisión, sino ofrecer la información necesaria de forma comprensible."
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
  explicacion: "La refactorización modifica la estructura interna del código sin cambiar su comportamiento observable. Operaciones como extraer un método, eliminar duplicación o renombrar elementos mejoran la legibilidad y reducen la complejidad. Las pruebas de regresión permiten comprobar que, tras esos cambios internos, el programa continúa ofreciendo los mismos resultados."
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
  explicacion: "Los patrones creacionales ofrecen soluciones reutilizables para decidir cómo se construyen los objetos. *Factory Method* o *Abstract Factory*, por ejemplo, separan al cliente de las clases concretas que instancia. Así se reduce el acoplamiento y se puede cambiar el proceso de creación sin modificar todo el código consumidor."
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
  explicacion: "Un patrón de diseño describe una solución general y reutilizable para un problema de diseño que aparece con frecuencia. No es código terminado para copiar sin cambios: define participantes, relaciones y consecuencias que deben adaptarse al contexto. *Observer* y *Factory Method* son ejemplos conocidos."
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
  explicacion: "Un sistema de control de versiones centralizado mantiene un repositorio principal al que acceden los miembros del equipo. Un sistema distribuido permite que cada persona trabaje con una copia completa del repositorio y su historial. SVN y Git son ejemplos habituales de ambos modelos, respectivamente."
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
  explicacion: "Un diagrama de casos de uso representa qué servicios ofrece un sistema y qué actores externos participan en ellos. Muestra el límite del sistema, los actores y sus relaciones con los casos de uso, pero no describe el orden temporal de los mensajes ni la implementación interna de cada función."
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
  explicacion: "OO significa orientación a objetos. Este paradigma modela el problema mediante objetos que combinan estado —sus datos— y comportamiento —las operaciones que pueden realizar—. Por ejemplo, un objeto `Cuenta` puede conservar un saldo y ofrecer métodos para ingresar o retirar una cantidad."
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
  explicacion: "La diagramación transforma información sobre un sistema en una representación visual. En ingeniería de software puede mostrar estructura, comportamiento, relaciones o flujos mediante una notación como UML. El diagrama selecciona una vista útil del sistema; no sustituye necesariamente toda su especificación textual."
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
  explicacion: "El estándar formal publicado por el Object Management Group se mantiene en la familia UML 2.x, con UML 2.5.1 como especificación disponible. No existe una especificación oficial UML 3.1 publicada por el OMG. Conviene comprobar siempre el catálogo oficial, porque una numeración utilizada por una herramienta no equivale a una versión del estándar."
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
  explicacion: "Las herramientas CASE asisten en tareas del ciclo de vida del software, como modelado, generación de código, documentación y mantenimiento de artefactos. Estas funciones pueden favorecer la reutilización y la interoperabilidad cuando emplean modelos y formatos comunes. Por eso las capacidades enumeradas son compatibles entre sí."
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
  explicacion: "UML agrupa sus diagramas en dos grandes categorías: los estructurales representan la organización estática del sistema, como clases, componentes o despliegue; los de comportamiento describen su funcionamiento y evolución, como actividades, estados o interacciones. Esta separación permite estudiar tanto qué elementos existen como qué hacen y cómo colaboran."
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
  explicacion: "UML es un lenguaje de modelado estandarizado que define elementos, relaciones y distintos tipos de diagramas para representar un sistema. La estandarización permite compartir los modelos con una notación común; la diagramación ofrece vistas estructurales y de comportamiento. UML reduce ambigüedades, aunque un diagrama aún debe estar bien elaborado."
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
  explicacion: "Un booleano es un tipo de valor lógico con dos estados: `true` y `false`. Se utiliza para condiciones y decisiones, por ejemplo para indicar si un usuario está activo. No representa una cantidad numérica ni una cadena, aunque su representación interna concreta depende del lenguaje y del entorno."
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
  explicacion: "En un diagrama de clases UML, `#` representa visibilidad protegida. El miembro puede utilizarse desde la clase que lo declara y sus especializaciones según las reglas del lenguaje de implementación. `+` indica público, `-` privado y `~` visibilidad de paquete; por eso no deben intercambiarse estos símbolos."
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
  explicacion: "El tipo `int` representa números enteros, sin parte fraccionaria. En Java utiliza 32 bits con signo y tiene un rango definido; en otros lenguajes el tamaño puede depender de la plataforma. Los valores decimales requieren tipos de coma flotante o clases numéricas específicas, según la precisión necesaria."
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
  explicacion: "La herencia se representa en UML como una generalización entre clasificadores: una subclase especializa a una superclase y puede heredar atributos y operaciones. No es una relación entre instancias ni una asociación ordinaria entre objetos. Como ninguna alternativa describe una generalización de tipo «es-un», ninguna resulta correcta."
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
  explicacion: "CASE significa *Computer-Aided Software Engineering*. Son herramientas que apoyan la creación de software en actividades como análisis, modelado, diseño, generación de código, documentación o mantenimiento. Algunas cubren una fase concreta y otras integran varias; su finalidad común es asistir al proceso de ingeniería de software."
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
  explicacion: "Una nota de UML añade información aclaratoria a un elemento o a una relación del diagrama. Puede contener comentarios, restricciones —incluidas expresiones OCL— o referencias complementarias, y se conecta al elemento anotado mediante una línea discontinua. UML no establece un límite formal de palabras, aunque conviene mantenerla breve para conservar la legibilidad."
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
  explicacion: "Los diagramas de actividades pueden representar flujos concurrentes mediante nodos `fork`, que dividen un flujo en varias ramas, y `join`, que las sincronizan de nuevo. Por eso son adecuados para mostrar actividades que pueden avanzar en paralelo. No implican necesariamente hilos reales de programación: modelan concurrencia en el comportamiento."
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
  explicacion: "En un diagrama de secuencia UML, una línea de vida representa la participación de un actor u objeto a lo largo de una interacción. El tiempo avanza de arriba hacia abajo y los mensajes se dibujan entre líneas de vida. Cada una ocupa una columna distinta, por lo que también se representan en paralelo."
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
  explicacion: "Los diagramas de colaboración, llamados diagramas de comunicación en UML actual, destacan los objetos, sus enlaces y los mensajes que intercambian. El orden suele indicarse numerando los mensajes, no mediante un eje temporal vertical como en un diagrama de secuencia. Por eso ninguna descripción incompatible de las opciones resulta correcta."
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
  explicacion: "Un diagrama de estados muestra los estados de una instancia y las transiciones provocadas por eventos, e incluye pseudestados iniciales y finales cuando corresponde. Complementa al diagrama de clases: la clase define estructura y operaciones, mientras la máquina de estados explica cómo cambia el comportamiento de sus objetos a lo largo del tiempo."
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
  explicacion: "Un diagrama de casos de uso se construye con tres elementos básicos: actores, casos de uso y relaciones. Los actores representan roles externos; los casos de uso, servicios que el sistema ofrece; y las relaciones muestran cómo participan o se conectan. El límite del sistema ayuda además a situar qué funcionalidad pertenece a la aplicación."
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
  explicacion: "En orientación a objetos, un objeto es una instancia concreta de una clase. La clase define la estructura y el comportamiento común; el objeto posee su propia identidad y estado durante la ejecución. En UML puede aparecer, por ejemplo, como `pedido42:Pedido`. Si ninguna opción expresa esta idea, corresponde «Ninguna de las anteriores»."
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


