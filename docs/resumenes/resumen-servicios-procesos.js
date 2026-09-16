const resumenServiciosProcesos = `
<article class="study-summary">
  <header class="study-summary__hero">
    <span class="study-summary__eyebrow">U1 · Procesos y concurrencia</span>
    <h3 class="study-summary__title">Programación de servicios y procesos</h3>
    <p class="study-summary__lead">Un programa contiene instrucciones; un proceso las ejecuta. Comprender cómo se reparte la CPU y cómo se coordinan las tareas es el primer paso para crear aplicaciones concurrentes.</p>
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
</article>`;
