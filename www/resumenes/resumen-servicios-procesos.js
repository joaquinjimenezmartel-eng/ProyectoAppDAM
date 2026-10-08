const resumenServiciosProcesos = `
<article class="study-summary">
  <header class="study-summary__hero">
    <span class="study-summary__eyebrow">U1–U3 · Procesos, concurrencia y comunicación en red</span>
    <h3 class="study-summary__title">Programación de servicios y procesos</h3>
    <p class="study-summary__lead">Un programa contiene instrucciones; un proceso las ejecuta. Comprender cómo se reparte la CPU, cómo se coordinan las tareas y cómo se comunican por red permite construir aplicaciones concurrentes y servicios conectados.</p>
  </header>
  <section class="study-summary__section">
    <h4>Programa, proceso e hilo</h4>
    <p>El programa puede estar guardado en un archivo. Al ejecutarlo, aparece un proceso con estado y recursos. Dentro de un proceso puede haber varios hilos: comparten su espacio de memoria, pero cada uno tiene su propio estado de ejecución y su pila.</p>
  </section>
  <section class="study-summary__section">
    <h4>Concurrencia y uso de la CPU</h4>
    <p>Concurrencia significa que varias tareas progresan durante un mismo intervalo. Un único procesador puede alternarlas; el paralelismo permite ejecución simultánea con varios recursos de procesamiento. Si una tarea espera una operación de entrada o salida, otra puede aprovechar la CPU. La comunicación intercambia información; la sincronización coordina el trabajo y el acceso a recursos compartidos.</p>
  </section>
  <section class="study-summary__section">
    <h4>Planificación y cambios de contexto</h4>
    <p>El planificador de corto plazo elige qué tarea preparada recibe la CPU. El de medio plazo gestiona la suspensión y reincorporación de procesos mediante intercambio de memoria en el modelo clásico. El de largo plazo regula la admisión de trabajos. Al cambiar de tarea, el núcleo guarda y restaura su contexto para poder reanudarla.</p>
  </section>
  <section class="study-summary__section">
    <h4>Procesos en Java y servicios</h4>
    <p><code>Process</code> es una clase abstracta. <code>ProcessBuilder.start()</code> devuelve un objeto de una implementación concreta que permite gestionar un proceso. Un servicio realiza una función en segundo plano y puede configurarse para arrancar con el sistema; no requiere atención continua del usuario.</p>
  </section>
  <section class="study-summary__section">
    <h4>Memoria compartida</h4>
    <p>En un sistema fuertemente acoplado, los procesadores comparten memoria principal. Esto permite intercambiar datos, pero requiere coordinación si varios modifican la misma información. Compartir memoria no significa que todos los procesos tengan acceso libre a los datos privados de los demás.</p>
  </section>
  <section class="study-summary__section">
    <h4>Ciclo de vida, daemon y <code>join()</code></h4>
    <p>El hilo principal puede terminar antes que otros hilos si no espera con <code>join()</code>. La máquina virtual permanece activa mientras exista al menos un hilo no daemon; los daemon realizan tareas auxiliares y no evitan por sí solos el cierre. Para iniciar una tarea en otro hilo puede implementarse <code>Runnable</code>, pasarlo a <code>Thread</code> y llamar a <code>start()</code>.</p>
  </section>
  <section class="study-summary__section">
    <h4>Interrupción, espera y notificación</h4>
    <p><code>interrupt()</code> solicita que un hilo interrumpa de forma cooperativa su trabajo. Si está en <code>sleep()</code>, <code>wait()</code> o <code>join()</code>, puede recibir <code>InterruptedException</code>. <code>wait()</code> libera el monitor mientras espera; <code>notify()</code> despierta a un hilo y <code>notifyAll()</code> a todos los que esperan sobre ese monitor.</p>
  </section>
  <section class="study-summary__section">
    <h4>Datos compartidos y seguridad</h4>
    <p>Los hilos de un proceso comparten código y objetos, pero cada uno mantiene su propia pila y estado de ejecución. Para garantizar la visibilidad y el orden de las modificaciones se utilizan mecanismos como <code>synchronized</code>, <code>volatile</code>, bloqueos o variables atómicas. Una clase thread-safe conserva un estado válido incluso cuando varios hilos la usan simultáneamente.</p>
  </section>
  <section class="study-summary__section">
    <h4>Evitar interbloqueos</h4>
    <p>Un interbloqueo aparece cuando varios hilos esperan de forma circular recursos que permanecen retenidos entre ellos. Adquirir los bloqueos siempre en el mismo orden, mantener pequeñas las secciones críticas y evitar esperas innecesarias mientras se posee un bloqueo reduce este riesgo.</p>
  </section>
  <section class="study-summary__section">
    <h4>TCP, UDP e IP</h4>
    <p>IP identifica los equipos y encamina los paquetes en la capa de red. Sobre él trabajan TCP y UDP en la capa de transporte. TCP establece una conexión y ofrece un flujo fiable, ordenado y bidireccional. UDP envía datagramas sin conexión ni garantía de entrega, con menos control y sobrecarga.</p>
  </section>
  <section class="study-summary__section">
    <h4>Sockets y extremos de comunicación</h4>
    <p>Un socket representa un extremo de comunicación. La dirección IP identifica el equipo y el puerto identifica la aplicación o servicio dentro de ese equipo. En una conexión TCP los dos extremos pueden enviar y recibir simultáneamente. Al recibir un datagrama UDP también se obtiene la dirección y el puerto del emisor para poder responder.</p>
  </section>
  <section class="study-summary__section">
    <h4>Puertos de servidor y cliente</h4>
    <p>Un servidor suele escuchar en un puerto del sistema o registrado, conocido por sus clientes. El cliente utiliza normalmente un puerto efímero asignado de forma temporal. La combinación de IP y puerto permite que el sistema operativo entregue cada mensaje al proceso adecuado y distinga comunicaciones simultáneas.</p>
  </section>
  <section class="study-summary__section">
    <h4>Protocolos de aplicación</h4>
    <p>La capa de aplicación define el formato y las reglas de los mensajes que intercambian los programas. Un protocolo puede estar basado en texto o utilizar una representación binaria; también puede mantener estado o tratar cada petición de forma independiente. «Booleano» es un tipo de dato, no una categoría de protocolo.</p>
  </section>
</article>`;
