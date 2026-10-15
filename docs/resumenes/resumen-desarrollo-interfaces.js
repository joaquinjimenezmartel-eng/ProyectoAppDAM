const resumenDesarrolloInterfaces = `
<article class="study-summary">
  <header class="study-summary__hero">
    <span class="study-summary__eyebrow">U1–U6 · Diseño, componentes y lenguajes de interfaz</span>
    <h3 class="study-summary__title">Desarrollo de interfaces</h3>
    <p class="study-summary__lead">Una interfaz eficaz combina comunicación visual, comprensión del usuario y validación temprana. Su objetivo no es solo resultar atractiva, sino ayudar a completar tareas con claridad y confianza.</p>
  </header>
  <section class="study-summary__section">
    <h4>Diseño gráfico con función</h4>
    <p>La composición, la tipografía, el color, los iconos y el espacio crean jerarquía y orientan la atención. Estos recursos deben reforzar el significado y la interacción. En RGB, cada canal de rojo, verde y azul suele representarse con valores de 0 a 255; en hexadecimal, esos valores se expresan con cifras del 0 al 9 y letras de la A a la F.</p>
  </section>
  <section class="study-summary__section">
    <h4>Del boceto al prototipo</h4>
    <p>El sketching permite explorar ideas mediante bocetos rápidos y fáciles de modificar. Después, un prototipo representa la estructura o el comportamiento de la interfaz para comprobar recorridos y detectar problemas antes de desarrollar el producto definitivo.</p>
  </section>
  <section class="study-summary__section">
    <h4>Alcance de los prototipos</h4>
    <p>El prototipo horizontal ofrece una visión amplia con poca profundidad; el vertical desarrolla con detalle una función concreta; y el diagonal combina amplitud general con profundidad en algunos recorridos. El tipo adecuado depende de qué aspecto se necesita validar.</p>
  </section>
  <section class="study-summary__section">
    <h4>Interacción persona-ordenador</h4>
    <p>La IPO, también llamada HCI, estudia la relación entre las personas y los sistemas interactivos. Considera la utilidad, la facilidad de aprendizaje, la eficiencia, la accesibilidad y el contexto de uso. Una respuesta bien comunicada mantiene al usuario informado incluso cuando una operación necesita tiempo.</p>
  </section>
  <section class="study-summary__section">
    <h4>Personas y límites del proyecto</h4>
    <p>El cliente define objetivos, el usuario aporta necesidades reales y el presupuesto condiciona el alcance, el equipo y el tiempo disponibles. Diseñar consiste en equilibrar esos factores y validar las decisiones con prototipos antes de asumir el coste de la implementación final.</p>
  </section>
  <section class="study-summary__section">
    <h4>AWT y Swing</h4>
    <p>AWT aporta la infraestructura gráfica básica de Java y Swing amplía esa base con componentes como <code>JLabel</code>, <code>JButton</code>, <code>JComboBox</code>, <code>JFrame</code> y <code>JDialog</code>. Una etiqueta presenta texto o imágenes; un diálogo crea una ventana secundaria que puede ser modal o no modal.</p>
  </section>
  <section class="study-summary__section">
    <h4>Gestores de disposición</h4>
    <p>Un layout manager calcula cómo se colocan los componentes dentro de un contenedor. <code>GridLayout</code> crea una rejilla de celdas del mismo tamaño; <code>GridBagLayout</code> permite una distribución más flexible mediante restricciones; y <code>BorderLayout</code> divide el espacio en zonas. Las propiedades <code>hgap</code> y <code>vgap</code> controlan la separación horizontal y vertical.</p>
  </section>
  <section class="study-summary__section">
    <h4>Eventos y listeners</h4>
    <p>Los eventos describen acciones o cambios que la aplicación puede detectar. Para reaccionar, se registra un listener en el componente adecuado. El listener recibe un objeto con información sobre el evento y ejecuta una respuesta breve; las tareas costosas no deben bloquear el hilo de eventos de Swing.</p>
  </section>
  <section class="study-summary__section">
    <h4>Ventanas modales</h4>
    <p>Un diálogo modal bloquea la interacción con otras ventanas incluidas en su ámbito hasta que se cierra. Es útil para decisiones que deben resolverse antes de continuar. Un diálogo no modal permanece abierto sin impedir el uso del resto de la aplicación.</p>
  </section>
  <section class="study-summary__section">
    <h4>Orientación a objetos</h4>
    <p>La POO permite organizar la interfaz en objetos con responsabilidades concretas, encapsular su estado y reutilizar componentes. Separar la presentación, los datos y la lógica de interacción ayuda a mantener el código y facilita las pruebas.</p>
  </section>
  <section class="study-summary__section">
    <h4>Componentes: estado y comportamiento</h4>
    <p>Los atributos almacenan el estado de un objeto, las propiedades exponen características como el color o la tipografía y los métodos definen las acciones que puede realizar. El constructor establece el estado inicial cuando se crea una instancia. El ámbito determina desde qué parte del programa puede utilizarse cada elemento.</p>
  </section>
  <section class="study-summary__section">
    <h4>Propiedades JavaBeans</h4>
    <p>Una propiedad simple representa un único valor y suele utilizar métodos de lectura y escritura. Una propiedad indexada representa una colección y permite acceder al conjunto completo o a una posición concreta. Las propiedades enlazadas pueden avisar de sus cambios mediante eventos y listeners.</p>
  </section>
  <section class="study-summary__section">
    <h4>Reflexión e introspección</h4>
    <p>La reflexión permite examinar y utilizar clases, campos, métodos y constructores durante la ejecución. La introspección aplica convenciones para descubrir las propiedades, los métodos y los eventos de un componente JavaBean. Estas técnicas permiten que herramientas visuales y frameworks trabajen con componentes sin conocer previamente todos sus detalles.</p>
  </section>
  <section class="study-summary__section">
    <h4>Origen de los eventos</h4>
    <p>Un evento externo nace de la interacción o del entorno, como una pulsación o el movimiento del ratón. Un evento interno refleja un cambio producido dentro de la aplicación o de un componente. Interfaces como <code>KeyListener</code> y <code>ActionListener</code> permiten recibir eventos concretos; <code>MotionKeyListener</code> no es un listener estándar.</p>
  </section>
  <section class="study-summary__section">
    <h4>Herramientas de edición gráfica</h4>
    <p>Aplicaciones como Paint, Photoshop y GIMP permiten crear imágenes desde cero, aunque ofrecen distintos niveles de edición. GIMP es una herramienta libre y gratuita que incorpora capas, selecciones, filtros y recursos de retoque. La herramienta adecuada depende de la complejidad del resultado y del flujo de trabajo.</p>
  </section>
  <section class="study-summary__section">
    <h4>Distribución e instalación</h4>
    <p>Una aplicación puede reunir ejecutables, librerías y recursos multimedia. Internet permite distribuir estos elementos sin depender de soportes físicos. En Windows son habituales los archivos <strong>EXE</strong> y los paquetes <strong>MSI</strong>; un asistente de instalación guía al usuario mediante pasos controlados y reduce la complejidad del proceso.</p>
  </section>
  <section class="study-summary__section">
    <h4>Aplicaciones Java y Launch4j</h4>
    <p><strong>Launch4j</strong> envuelve una aplicación Java empaquetada como JAR en un ejecutable ligero para Windows. El lanzador puede añadir icono, pantalla inicial y comprobación del entorno Java, y se integra en el proceso de preparación de la aplicación para su distribución.</p>
  </section>
  <section class="study-summary__section">
    <h4>Paquetes TAR y compresión</h4>
    <p>Un archivo <strong>TAR</strong> agrupa varios archivos y sus metadatos siguiendo una secuencia de bloques, pero no los comprime por sí mismo. Para reducir el tamaño puede combinarse con gzip, bzip2 o xz. Por eso <code>.tar</code> identifica el archivo y extensiones como <code>.tar.gz</code> indican además la compresión aplicada.</p>
  </section>
  <section class="study-summary__section">
    <h4>Firma digital y almacenes de claves</h4>
    <p>La firma digital utiliza una clave privada para firmar y la clave pública correspondiente para verificar la autoría y la integridad. En un almacén de claves, un alias identifica la entrada que contiene el material criptográfico. El alias no sustituye a la contraseña que protege el almacén o la clave.</p>
  </section>
  <section class="study-summary__section">
    <h4>XML: elementos y atributos</h4>
    <p><strong>XML</strong> estructura información mediante elementos anidados y puede utilizarse para metadatos, intercambio y almacenamiento de contenidos. Un atributo añade una característica a la etiqueta de apertura y se escribe como <code>nombre="valor"</code>. La sintaxis distingue etiquetas de apertura, de cierre y de elemento vacío.</p>
  </section>
  <section class="study-summary__section">
    <h4>SVG, RSS y MathML</h4>
    <p><strong>SVG</strong> describe gráficos vectoriales; <strong>RSS</strong> distribuye novedades mediante canales de sindicación; y <strong>MathML</strong> representa expresiones matemáticas para que puedan mostrarse y procesarse. Los tres formatos emplean estructuras de marcado especializadas.</p>
  </section>
  <section class="study-summary__section">
    <h4>Eventos del ratón</h4>
    <p><code>mousedown</code> se produce cuando se presiona un botón del ratón sobre un elemento. No debe confundirse con situar el puntero encima ni con <code>click</code>, que normalmente requiere completar la pulsación y la liberación. Un listener permite responder a cada evento en el momento adecuado.</p>
  </section>
  <section class="study-summary__section">
    <h4>Edición colaborativa</h4>
    <p>La colaboración en tiempo real permite que varias personas compartan una sesión de código, observen cambios y trabajen juntas sobre el proyecto. Atom ofreció esta posibilidad mediante Teletype y Visual Studio Code la proporciona mediante Live Share.</p>
  </section>
  <section class="study-summary__section">
    <h4>Formatos y compresión de imágenes</h4>
    <p><strong>GIF</strong> es un formato rasterizado que puede contener animación y resulta adecuado para gráficos sencillos. La compresión puede ser con pérdida, cuando elimina información para reducir el tamaño, o sin pérdida, cuando conserva los datos necesarios para reconstruir la imagen original.</p>
  </section>
  <section class="study-summary__section">
    <h4>Tamaño, profundidad y resolución</h4>
    <p>El tamaño sin comprimir depende del número de píxeles y de la información almacenada en cada uno. Si las dimensiones físicas son L y A, la resolución es R y la profundidad es P, puede expresarse como <code>R²·L·A·P</code>. Una profundidad de 16 bits representa 65 536 valores y la resolución se expresa habitualmente en píxeles por pulgada (ppp).</p>
  </section>
  <section class="study-summary__section">
    <h4>Imagen rasterizada y vectorial</h4>
    <p>Una imagen <strong>rasterizada</strong> se compone de píxeles y es apropiada para fotografías, aunque puede perder nitidez al ampliarse. Una imagen <strong>vectorial</strong> utiliza formas matemáticas y puede escalarse sin perder calidad, por lo que funciona bien en logotipos e iconos. Photoshop se especializa principalmente en la edición de imágenes rasterizadas.</p>
  </section>
  <section class="study-summary__section">
    <h4>Iconos y licencias Creative Commons</h4>
    <p>Los iconos comunican acciones, objetos y estados dentro de una interfaz gráfica. Las licencias <strong>Creative Commons</strong> combinan atribución (BY), compartir igual (SA), uso no comercial (NC) y ausencia de obras derivadas (ND) para indicar de forma clara cómo puede reutilizarse una creación.</p>
  </section>
</article>`;
