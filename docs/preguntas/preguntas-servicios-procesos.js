// Generado desde contenido/tests/serviciosProcesos/*.json. Ejecutar npm run build:content.
const preguntasServiciosProcesos = [
  {
    "id": 41,
    "pregunta": "Cuál de las siguientes afirmaciones es correcta...",
    "opciones": [
      "A. El planificador a medio plazo gestiona el paso de procesos de la memoria principal a la secundaria y viceversa.",
      "B. El planificador a corto plazo gestiona el paso de procesos de la memoria principal a la secundaria y viceversa.",
      "C. El planificador a largo plazo gestiona el paso de procesos de la memoria principal a la secundaria y viceversa.",
      "D. B y C son correctas."
    ],
    "respuesta_correcta": "A. El planificador a medio plazo gestiona el paso de procesos de la memoria principal a la secundaria y viceversa.",
    "explicacion": "El planificador a medio plazo decide qué procesos se suspenden para liberar memoria y cuáles pueden volver a ella. En el modelo clásico, este intercambio entre RAM y almacenamiento secundario se llama swapping. Imagina una mesa de trabajo llena: guardas temporalmente una tarea para dejar espacio y la recuperas después. No lo confundas con el planificador a corto plazo, que elige quién usa la CPU, ni con el de largo plazo, que decide qué trabajos se admiten."
  },
  {
    "id": 42,
    "pregunta": "La multiprogramación consiste en ejecutar de forma concurrente...",
    "opciones": [
      "A. Varios procesos en un sistema monoprocesador.",
      "B. Varios procesos en un sistema multiprocesador.",
      "C. Un proceso en varios sistemas monoprocesador.",
      "D. Un proceso en varios sistemas multiprocesador."
    ],
    "respuesta_correcta": "A. Varios procesos en un sistema monoprocesador.",
    "explicacion": "Un único procesador puede hacer avanzar varios procesos alternando entre ellos. Si uno espera una operación de entrada o salida, otro puede aprovechar la CPU. Eso es concurrencia: las tareas progresan durante el mismo intervalo, aunque no ejecuten instrucciones al mismo instante en ese procesador. Es como una persona que cocina varios platos y prepara uno mientras otro está en el horno. La multiprogramación no necesita varios procesadores; tampoco deja de ser útil cuando hay varios."
  },
  {
    "id": 43,
    "pregunta": "La multitarea...",
    "opciones": [
      "A. Aprovecha las operaciones de E/S para ejecutar otros procesos.",
      "B. Solo se consigue en sistemas monoprocesador.",
      "C. Solo se consigue en sistemas multiprocesadores.",
      "D. Ninguna de las opciones es correcta."
    ],
    "respuesta_correcta": "A. Aprovecha las operaciones de E/S para ejecutar otros procesos.",
    "explicacion": "E/S significa entrada y salida, por ejemplo leer un archivo o recibir datos de la red. Cuando un proceso queda esperando esa operación, el sistema puede ejecutar otro que esté preparado, evitando dejar la CPU sin trabajo. La multitarea funciona tanto con uno como con varios procesadores. Además, no depende únicamente de las esperas de E/S: en la multitarea apropiativa, el sistema también puede interrumpir una tarea al agotarse su turno para dar paso a otra."
  },
  {
    "id": 44,
    "pregunta": "La programación concurrente se basa en...",
    "opciones": [
      "A. Técnicas de comunicación y sincronización entre sistemas operativos.",
      "B. Técnicas de comunicación y sincronización entre clases.",
      "C. Técnicas de comunicación y sincronización entre procesos.",
      "D. A y C son correctas."
    ],
    "respuesta_correcta": "C. Técnicas de comunicación y sincronización entre procesos.",
    "explicacion": "La comunicación permite intercambiar información entre tareas; la sincronización coordina cuándo pueden actuar o acceder a un recurso compartido. Por ejemplo, un proceso puede producir datos y otro consumirlos: el consumidor debe esperar si todavía no hay datos. Estas técnicas también se aplican a hilos. Una clase describe datos y comportamiento, pero por sí sola no es una tarea en ejecución. Coordinar procesos no exige que cada uno utilice un sistema operativo distinto."
  },
  {
    "id": 45,
    "pregunta": "Los cambios de contexto...",
    "opciones": [
      "A. Los gestiona el usuario mediante una interfaz.",
      "B. Los gestiona el módulo de E/S.",
      "C. No se permiten cambios de contexto en un sistema iniciado.",
      "D. Los gestiona el núcleo del sistema operativo."
    ],
    "respuesta_correcta": "D. Los gestiona el núcleo del sistema operativo.",
    "explicacion": "Un cambio de contexto permite dejar de ejecutar una tarea y continuar con otra. El núcleo guarda el estado necesario de la tarea que sale, como los registros y la posición de ejecución, y restaura el de la que entra. Se parece a colocar un marcapáginas antes de cambiar de libro: después puedes retomar el punto exacto. Una operación de E/S puede provocar que una tarea se bloquee, pero la gestión del cambio corresponde al núcleo, no al usuario."
  },
  {
    "id": 46,
    "pregunta": "Los hilos...",
    "opciones": [
      "A. Comparten la memoria principal del sistema con todos los hilos de todos los procesos.",
      "B. Comparten la memoria con hilos del mismo proceso.",
      "C. Comparten la memoria secundaria del sistema con todos los hilos de todos los procesos.",
      "D. Ninguna de las opciones es correcta."
    ],
    "respuesta_correcta": "B. Comparten la memoria con hilos del mismo proceso.",
    "explicacion": "Los hilos de un mismo proceso comparten su espacio de direcciones, incluido el código y datos como los objetos del heap. Por eso pueden trabajar sobre un mismo objeto sin enviarlo a otro proceso. Cada hilo mantiene su propio estado de ejecución y su pila. Compartir memoria no implica que puedan acceder libremente a la de otros procesos. Si dos hilos modifican un dato compartido, hay que coordinar el acceso para evitar resultados inconsistentes."
  },
  {
    "id": 47,
    "pregunta": "Process...",
    "opciones": [
      "A. Es una clase abstracta por lo que puedes crear instancias suyas, pero no de sus subclases.",
      "B. Es una clase abstracta por lo que no puedes crear instancias suyas, pero sí de sus subclases.",
      "C. No es una clase abstracta.",
      "D. A es correcta, pero no es una clase abstracta."
    ],
    "respuesta_correcta": "B. Es una clase abstracta por lo que no puedes crear instancias suyas, pero sí de sus subclases.",
    "explicacion": "En Java, java.lang.Process es abstracta: no puedes construirla directamente con new Process(). Sí puedes obtener objetos de subclases concretas, que implementan las operaciones necesarias. Lo habitual es iniciar un proceso mediante ProcessBuilder.start(), que devuelve una referencia de tipo Process para controlarlo, consultar sus flujos o esperar a que termine. Que la variable sea de tipo Process no significa que se haya instanciado directamente la clase abstracta: el objeto pertenece a una implementación concreta."
  },
  {
    "id": 48,
    "pregunta": "Un programa...",
    "opciones": [
      "A. Se va creando a medida que se va ejecutando.",
      "B. Se almacena en medios de almacenamiento secundario.",
      "C. Se ejecuta en varios procesadores a la vez para aumentar su rendimiento.",
      "D. Carga todos los datos que utiliza en la memoria principal para que vaya más rápido."
    ],
    "respuesta_correcta": "B. Se almacena en medios de almacenamiento secundario.",
    "explicacion": "Un programa es un conjunto de instrucciones que puede guardarse como archivo en un SSD, disco u otro medio de almacenamiento secundario. Cuando se ejecuta, el sistema crea un proceso con su estado y sus recursos. Una comparación útil es receta y preparación: el programa es la receta guardada; el proceso es la actividad de cocinarla. Ejecutar un programa no obliga a usar varios procesadores ni a cargar de antemano todos los datos que utilizará."
  },
  {
    "id": 49,
    "pregunta": "Un servicio...",
    "opciones": [
      "A. Es transparente para el usuario.",
      "B. Se ejecuta en segundo plano.",
      "C. Se puede configurar para que arranque de forma automática en el momento de iniciar el sistema operativo.",
      "D. Todas las opciones anteriores son correctas."
    ],
    "respuesta_correcta": "D. Todas las opciones anteriores son correctas.",
    "explicacion": "Un servicio del sistema realiza una función en segundo plano sin necesitar una ventana con la que el usuario interactúe continuamente. Por ejemplo, un servicio de impresión puede gestionar trabajos mientras utilizas otras aplicaciones. Puede configurarse para arrancar con el sistema, aunque también existen servicios de inicio manual o bajo demanda. Ser transparente significa que el usuario no tiene que dirigir cada paso de su funcionamiento; no significa que sea imposible verlo o administrarlo."
  },
  {
    "id": 50,
    "pregunta": "Un sistema fuertemente acoplado...",
    "opciones": [
      "A. Existe una memoria compartida para todos los procesadores.",
      "B. Existe una memoria para cada procesador, pero están conectadas entre ellas.",
      "C. Existe una memoria para cada procesador, pero son independientes entre ellas.",
      "D. B y C son correctas."
    ],
    "respuesta_correcta": "A. Existe una memoria compartida para todos los procesadores.",
    "explicacion": "En un sistema multiprocesador fuertemente acoplado, los procesadores pueden acceder a una memoria principal compartida. Imagina varias personas trabajando sobre una misma pizarra: pueden intercambiar información allí, pero deben coordinarse para no sobrescribir el trabajo de otra. Esto contrasta con sistemas de memoria distribuida, donde cada nodo tiene su propia memoria y se comunica con los demás. La memoria compartida no excluye que cada procesador disponga de registros o cachés propios."
  },
  {
    "id": 51,
    "pregunta": "¿Cuándo finaliza la ejecución de la Java Virtual Machine?",
    "opciones": [
      "A. Cuando finaliza la ejecución de todos los hilos.",
      "B. Cuando finaliza la ejecución de todos los hilos que no sean de tipo Daemon.",
      "C. Cuando finaliza el método main.",
      "D. Ninguna de las opciones anteriores es correcta."
    ],
    "respuesta_correcta": "B. Cuando finaliza la ejecución de todos los hilos que no sean de tipo Daemon.",
    "explicacion": "La máquina virtual puede iniciar su cierre cuando ya no queda ningún hilo no daemon en ejecución. Los hilos daemon prestan servicios auxiliares y no mantienen por sí solos activa la aplicación. Por eso, terminar main no siempre finaliza el programa: si otro hilo no daemon continúa trabajando, la máquina virtual permanece activa. En cambio, los hilos daemon pendientes pueden detenerse cuando desaparece el último hilo no daemon."
  },
  {
    "id": 52,
    "pregunta": "¿Cuándo podemos afirmar que existe un interbloqueo?",
    "opciones": [
      "A. No se pueden producir.",
      "B. Cuando todos los hilos del proceso se bloquean.",
      "C. Son de carácter transitorio siempre.",
      "D. Ninguna de las opciones es correcta."
    ],
    "respuesta_correcta": "D. Ninguna de las opciones es correcta.",
    "explicacion": "Existe un interbloqueo cuando dos o más hilos quedan esperando de forma circular recursos que están retenidos entre ellos y ninguno puede avanzar. No es necesario que se bloqueen todos los hilos del proceso, y la situación no se resuelve necesariamente por sí sola. Un ejemplo típico aparece cuando un hilo conserva el bloqueo A y espera B, mientras otro conserva B y espera A. Mantener un orden común al adquirir bloqueos ayuda a evitarlo."
  },
  {
    "id": 53,
    "pregunta": "¿Cuándo podemos interrumpir un hilo?",
    "opciones": [
      "A. Cuando otro hilo lo interrumpe.",
      "B. Con sleep y wait.",
      "C. Con el método interrupt.",
      "D. Todas las opciones anteriores son correctas."
    ],
    "respuesta_correcta": "D. Todas las opciones anteriores son correctas.",
    "explicacion": "La interrupción es una solicitud de cooperación que normalmente realiza otro hilo mediante interrupt(). Si el hilo destinatario está bloqueado en sleep(), wait() o join(), suele salir de esa espera lanzando InterruptedException; si está ejecutando código, puede consultar su estado de interrupción y reaccionar. sleep() y wait() no generan por sí mismos la interrupción: son operaciones sensibles a una solicitud de interrupción. Conviene restaurar el indicador o finalizar de forma ordenada cuando no se pueda completar el trabajo."
  },
  {
    "id": 54,
    "pregunta": "¿Cuándo utilizaremos notifyAll() y cuándo notify()?",
    "opciones": [
      "A. Si se quiere que continúen todos los hilos: notifyAll().",
      "B. Si se quiere que continúe solo un hilo: notify().",
      "C. Si se quiere que continúe solo un hilo: notifyAll().",
      "D. A y B son correctas."
    ],
    "respuesta_correcta": "D. A y B son correctas.",
    "explicacion": "notify() despierta a uno de los hilos que esperan sobre el monitor del objeto, mientras que notifyAll() los despierta a todos. Los hilos despertados no continúan simultáneamente: deben volver a competir por el monitor y comprobar de nuevo la condición de espera. Ambos métodos deben invocarse mientras el hilo posee ese monitor, normalmente dentro de un bloque synchronized. notifyAll() suele ser más seguro cuando distintos hilos esperan condiciones diferentes."
  },
  {
    "id": 55,
    "pregunta": "¿Qué método se usa para interrumpir la ejecución del hilo actual?",
    "opciones": [
      "A. break()",
      "B. wait()",
      "C. block()",
      "D. stop()"
    ],
    "respuesta_correcta": "B. wait()",
    "explicacion": "wait() hace que el hilo actual deje temporalmente de ejecutar y espere sobre el monitor de un objeto. Al hacerlo libera ese monitor, de modo que otro hilo puede entrar en la sección sincronizada y cambiar la condición esperada. Debe llamarse poseyendo el monitor y suele utilizarse dentro de un bucle que vuelve a comprobar la condición. break sale de un bucle o switch, block() no es un método estándar de Thread y stop() está obsoleto porque puede dejar datos compartidos en un estado inconsistente."
  },
  {
    "id": 56,
    "pregunta": "¿Qué sucede si el hilo principal no ejecuta el método join sobre el resto de los hilos?",
    "opciones": [
      "A. El hilo principal podría finalizar antes que algún otro hilo.",
      "B. Se pueden interrumpir todos a la vez.",
      "C. El proceso finalizará con un error.",
      "D. Los hilos secundarios no finalizarán nunca."
    ],
    "respuesta_correcta": "A. El hilo principal podría finalizar antes que algún otro hilo.",
    "explicacion": "join() permite que el hilo actual espere a que termine otro hilo. Si main no realiza esa espera, puede llegar al final antes que los hilos que ha iniciado. Esto no provoca por sí solo un error ni impide que los hilos secundarios terminen. La máquina virtual seguirá activa mientras quede algún hilo no daemon en ejecución, aunque el hilo principal ya haya finalizado."
  },
  {
    "id": 57,
    "pregunta": "Los hilos de un mismo proceso...",
    "opciones": [
      "A. Tienen la misma prioridad.",
      "B. Comparten código y datos.",
      "C. Comparten registros del procesador.",
      "D. Se crean y se lanzan al mismo tiempo."
    ],
    "respuesta_correcta": "B. Comparten código y datos.",
    "explicacion": "Los hilos de un proceso comparten su código y recursos como los objetos del heap, por lo que pueden trabajar sobre la misma información. Cada hilo conserva, sin embargo, su propia pila, contador de programa y estado de registros para poder ejecutar de forma independiente. Tampoco tienen que poseer la misma prioridad ni comenzar al mismo tiempo. El acceso concurrente a datos mutables compartidos debe coordinarse para evitar carreras."
  },
  {
    "id": 58,
    "pregunta": "Para crear un hilo en Java se parte de una clase que implementa la interfaz...",
    "opciones": [
      "A. Runnable.",
      "B. Start.",
      "C. Main.",
      "D. Run."
    ],
    "respuesta_correcta": "A. Runnable.",
    "explicacion": "Runnable representa una tarea mediante su método run(). Una forma habitual de ejecutarla en otro hilo es crear un objeto Thread con ese Runnable y llamar a start(); start() prepara el nuevo hilo y hace que invoque run(). Llamar directamente a run() no crea un hilo nuevo. Java también permite extender Thread, aunque separar la tarea mediante Runnable suele favorecer una mejor organización y reutilización del código."
  },
  {
    "id": 59,
    "pregunta": "Si un objeto se pasa a varios hilos...",
    "opciones": [
      "A. Los cambios que un hilo produzca sobre el objeto no son visibles por el resto de los hilos.",
      "B. Los cambios que un hilo produzca sobre el objeto serán visibles por el resto de los hilos siempre que estén dentro del método synchronized.",
      "C. Los cambios que un hilo produzca sobre el objeto serán visibles por el resto de los hilos.",
      "D. No se permite pasar un objeto a varios hilos."
    ],
    "respuesta_correcta": "C. Los cambios que un hilo produzca sobre el objeto serán visibles por el resto de los hilos.",
    "explicacion": "Varios hilos pueden compartir una referencia al mismo objeto y, por tanto, trabajar sobre su mismo estado. Para que la visibilidad y el orden de las modificaciones estén garantizados entre hilos, hay que establecer una relación de sincronización mediante synchronized, volatile, bloqueos u otras utilidades de concurrencia. Sin esa coordinación, un hilo puede observar un valor desactualizado o una combinación inconsistente de cambios. Compartir el objeto es posible; compartirlo de forma segura requiere diseñar el acceso concurrente."
  },
  {
    "id": 60,
    "pregunta": "Una clase se considera de tipo thread-safe cuando...",
    "opciones": [
      "A. Siempre.",
      "B. Nunca.",
      "C. No existen mecanismos de sincronización para el uso concurrente de objetos.",
      "D. Existen mecanismos de sincronización para el uso concurrente de objetos implementados en los métodos de la clase."
    ],
    "respuesta_correcta": "D. Existen mecanismos de sincronización para el uso concurrente de objetos implementados en los métodos de la clase.",
    "explicacion": "Una clase es thread-safe si mantiene sus reglas y produce resultados correctos cuando varios hilos la utilizan a la vez. Proteger sus métodos o secciones críticas con sincronización es una forma de conseguirlo. También pueden emplearse inmutabilidad, variables atómicas, bloqueos explícitos o confinamiento de datos. La clave es que quien usa la clase pueda hacerlo concurrentemente sin tener que corregir estados intermedios incoherentes."
  }
];
