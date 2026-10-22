const resumenMultimediaMoviles = `
<article class="study-summary">
  <header class="study-summary__hero">
    <span class="study-summary__eyebrow">U1–U9 · Fundamentos y Android</span>
    <h3 class="study-summary__title">Programación multimedia y dispositivos móviles</h3>
    <p class="study-summary__lead">Para crear una aplicación móvil necesitas conocer el dispositivo, el sistema operativo y las herramientas de desarrollo. Estos fundamentos te ayudan a entender cómo una app utiliza los recursos del teléfono y se comunica con la persona que la usa.</p>
  </header>
  <section class="study-summary__section">
    <h4>1. El dispositivo y sus recursos</h4>
    <p>La capacidad de procesado, el tamaño y la conectividad condicionan una aplicación. Una pantalla pequeña requiere una interfaz clara; una conexión inestable exige gestionar las esperas; y la batería limita cuánto trabajo conviene realizar continuamente. Una tablet ofrece una pantalla táctil más amplia que un teléfono en un formato portátil.</p>
  </section>
  <section class="study-summary__section">
    <h4>2. Kernel, API e interfaz de usuario</h4>
    <p>El <strong>kernel</strong> gestiona los recursos del sistema y el acceso al hardware. Una <strong>API</strong> permite solicitar funciones a un componente. La <strong>UI</strong> reúne los elementos con los que interactúa el usuario, como botones y menús. Son funciones distintas: tocar un botón puede provocar una petición que el sistema termine ejecutando sobre el hardware.</p>
    <p>En la arquitectura clásica de iOS, <strong>Cocoa Touch</strong> es la capa de frameworks para construir aplicaciones. Incluye UIKit para crear interfaces y gestionar la interacción.</p>
  </section>
  <section class="study-summary__section">
    <h4>3. Desarrollo nativo y multiplataforma</h4>
    <p>El desarrollo nativo aprovecha las herramientas específicas de cada plataforma. Ofrece control para integrar sus funciones y optimizar la aplicación, pero mantener versiones para diferentes sistemas puede exigir distintos lenguajes y conocimientos. El desarrollo multiplataforma busca compartir más código; la elección depende de las funciones, el rendimiento y el mantenimiento necesarios.</p>
  </section>
  <section class="study-summary__section">
    <h4>4. Comunicaciones móviles</h4>
    <p>Las generaciones de redes móviles han ampliado la capacidad de comunicación y los servicios de datos. <strong>UMTS se asocia a 3G</strong>. La experiencia real también depende de la cobertura, la congestión y el dispositivo: una generación más reciente no garantiza por sí sola una conexión perfecta.</p>
  </section>
  <section class="study-summary__section">
    <h4>5. Estructura de una aplicación Android</h4>
    <p><strong>AndroidManifest.xml</strong> declara componentes, permisos y características necesarias. Los cuatro componentes principales son Activity, Service, Broadcast Receiver y Content Provider. Una Activity representa habitualmente una pantalla; cada componente mantiene su propio ciclo de vida.</p>
  </section>
  <section class="study-summary__section">
    <h4>6. Recursos y clase R</h4>
    <p>Los recursos se separan del código y se organizan en directorios como <code>res/layout</code>, <code>res/mipmap</code> y <code>res/values</code>. Las herramientas generan en la clase <strong>R</strong> identificadores enteros para referenciarlos desde el código o desde otros XML. Gradle construye el proyecto, pero no es una carpeta de recursos dentro de <code>res</code>.</p>
  </section>
  <section class="study-summary__section">
    <h4>7. Permisos, aislamiento y ADB</h4>
    <p>Android 6.0 Marshmallow introdujo la solicitud de permisos peligrosos durante la ejecución. Cada aplicación funciona normalmente con un identificador de usuario de Linux propio, que contribuye a aislar sus archivos y procesos. <strong>ADB</strong> comunica el equipo de desarrollo con dispositivos o emuladores para instalar, ejecutar comandos y depurar aplicaciones.</p>
  </section>
  <section class="study-summary__section">
    <h4>8. Intents explícitos e implícitos</h4>
    <p>Un <strong>Intent</strong> describe una acción que Android debe realizar. Puede incluir componente, acción, datos, categorías, extras y flags. Un Intent <strong>explícito</strong> señala directamente el componente de destino mediante recursos como <code>setComponent()</code>, <code>setClass()</code> o <code>setClassName()</code>. Un Intent <strong>implícito</strong> declara la acción y deja que el sistema encuentre una aplicación compatible.</p>
  </section>
  <section class="study-summary__section">
    <h4>9. Ciclo de vida y estado de una Activity</h4>
    <p>La etapa visible se desarrolla entre <code>onStart()</code> y <code>onStop()</code>, mientras que <code>onResume()</code> y <code>onPause()</code> delimitan la interacción en primer plano. <code>onSaveInstanceState()</code> permite guardar en un <strong>Bundle</strong> información temporal que ayudará a reconstruir la pantalla si la Activity se recrea. Los datos permanentes deben almacenarse mediante otro mecanismo.</p>
  </section>
  <section class="study-summary__section">
    <h4>10. Pila de actividades y PendingIntent</h4>
    <p>La pila de actividades sigue el principio <strong>LIFO</strong>: la última Activity que entra es la primera que sale al retroceder. Un <strong>PendingIntent</strong> permite que otro componente ejecute más adelante una acción con la identidad y los permisos de la aplicación creadora. Es habitual en notificaciones y puede funcionar aunque la Activity que lo creó ya no esté activa.</p>
  </section>
  <section class="study-summary__section">
    <h4>11. Contenedores y distribución de la interfaz</h4>
    <p>Los layouts organizan las vistas de una pantalla. <strong>GridLayout</strong> utiliza una cuadrícula y permite que una vista abarque varias filas con <code>layout_rowSpan</code>. <strong>TableLayout</strong> distribuye el contenido en filas y columnas; dentro de una fila, <code>layout_span</code> hace que una celda ocupe varias columnas. <strong>FrameLayout</strong> sitúa sus hijos en una misma superficie, por lo que pueden quedar superpuestos.</p>
  </section>
  <section class="study-summary__section">
    <h4>12. Posición, alineación y tamaño</h4>
    <p><strong>RelativeLayout</strong> coloca una vista respecto a otra o respecto al contenedor padre. Reglas como <code>layout_alignTop</code> alinean bordes entre controles. Los atributos <code>layout_width</code> y <code>layout_height</code> determinan el espacio que ocupa cada vista, mientras que <code>android:orientation</code> establece una dirección vertical u horizontal en los contenedores que admiten este atributo.</p>
  </section>
  <section class="study-summary__section">
    <h4>13. Controles de selección y progreso</h4>
    <p><strong>CheckBox</strong> permite combinar varias opciones independientes; <strong>Spinner</strong> presenta una lista desplegable para elegir un elemento; y <strong>SeekBar</strong> selecciona un valor numérico dentro de un intervalo mediante un indicador deslizable. <strong>ProgressBar</strong> comunica el avance de una tarea con una representación lineal o circular.</p>
  </section>
  <section class="study-summary__section">
    <h4>14. Apariencia, color y entrada de texto</h4>
    <p><code>android:background</code> establece el fondo de una vista y <code>android:thumb</code> personaliza el indicador de un SeekBar. Un color <strong>ARGB</strong> combina alfa, rojo, verde y azul; el canal alfa determina la opacidad. En un EditText, <code>textCapSentences</code> solicita que cada frase comience con mayúscula.</p>
    <p>Como cualquier View, un TextView puede animarse mediante propiedades como traslación, rotación y transparencia. Estas animaciones modifican su presentación sin cambiar el contenido del texto.</p>
  </section>
  <section class="study-summary__section">
    <h4>15. GridView y ListView</h4>
    <p><strong>GridView</strong> muestra elementos en una cuadrícula. <code>android:gravity</code> alinea el contenido de sus celdas y <code>android:stretchMode</code> determina cómo se distribuye el espacio sobrante entre las columnas. En <strong>ListView</strong>, <code>android:divider</code> define el separador entre elementos y <code>android:dividerHeight</code> establece su grosor.</p>
  </section>
  <section class="study-summary__section">
    <h4>16. Menús y barra de acciones</h4>
    <p><strong>OptionsMenu</strong> reúne las acciones principales de una pantalla. Las más importantes pueden aparecer en la <strong>Action Bar</strong> y las demás en el menú de desbordamiento. Un <strong>SubMenú</strong> permite agrupar opciones relacionadas dentro de otra opción para mantener una navegación ordenada.</p>
  </section>
  <section class="study-summary__section">
    <h4>17. Adaptadores, desplazamiento y reutilización</h4>
    <p>Un <strong>Adapter</strong> conecta una fuente de datos con una vista adaptada, como ListView o GridView, y proporciona la representación de cada elemento. El scroll es el desplazamiento del contenido y no es un tipo de adaptador. Para mejorar el rendimiento, las listas pueden reutilizar vistas que han salido de la pantalla; una Dirty View necesita actualizarse antes de mostrarse y una ScrapView queda disponible para su reutilización.</p>
  </section>
  <section class="study-summary__section">
    <h4>18. Diálogos y selección de fechas</h4>
    <p>Un diálogo solicita una decisión o información sin ocupar toda la pantalla. <strong>AlertDialog</strong> puede combinar un título opcional, un área de contenido y hasta tres botones de acción. <strong>DatePickerDialog</strong> es un diálogo especializado que incorpora los controles necesarios para seleccionar una fecha válida.</p>
  </section>
  <section class="study-summary__section">
    <h4>19. Preferencias de la aplicación</h4>
    <p>Las preferencias representan ajustes que pueden conservarse entre usos. <strong>CheckBoxPreference</strong> almacena un valor booleano con dos estados, mientras que EditTextPreference guarda texto y ListPreference permite elegir un valor de una lista. Atributos como <code>title</code>, <code>summary</code> y <code>key</code> definen su nombre, descripción e identificador persistente.</p>
  </section>
  <section class="study-summary__section">
    <h4>20. Recursos con Image Asset Studio</h4>
    <p><strong>Image Asset Studio</strong> genera iconos de inicio y de notificación a partir de imágenes, iconos de Material o texto. Crea los recursos con las resoluciones y carpetas adecuadas para las distintas densidades de pantalla; no programa por sí mismo notificaciones, mensajes Toast ni preferencias.</p>
  </section>
  <section class="study-summary__section">
    <h4>21. Toast y notificaciones</h4>
    <p>Un <strong>Toast</strong> es un aviso breve que desaparece automáticamente y no exige interacción. Una <strong>notificación</strong> es gestionada por el sistema, puede aparecer fuera de la interfaz habitual de la aplicación, conservar una referencia temporal y ofrecer acciones. Las notificaciones emergentes pueden mostrarse sobre otra aplicación activa.</p>
  </section>
  <section class="study-summary__section">
    <h4>22. Acciones futuras con PendingIntent</h4>
    <p>Un <strong>PendingIntent</strong> permite que otro componente ejecute más adelante una acción definida por la aplicación original. En una notificación se utiliza para abrir una Activity, iniciar un servicio o emitir un evento cuando la persona selecciona el aviso, incluso si la interfaz que lo creó ya no está visible.</p>
  </section>
  <section class="study-summary__section">
    <h4>23. Tarjetas, esquinas y elevación</h4>
    <p><strong>CardView</strong> presenta contenido dentro de una tarjeta. <code>cardCornerRadius</code> controla el redondeo de sus esquinas y la elevación determina la sombra proyectada. En Material Design, esa sombra comunica que un elemento está situado por encima de otro y refuerza su jerarquía visual.</p>
  </section>
  <section class="study-summary__section">
    <h4>24. Botones flotantes y barras de acciones</h4>
    <p><strong>FloatingActionButton</strong> representa una acción principal y admite los tamaños normal, mini y automático. La <strong>ActionBar</strong> o una Toolbar configurada como barra de acciones organiza la navegación y las acciones superiores; no debe confundirse con TabLayout, TextInputLayout ni FloatingActionButton.</p>
  </section>
  <section class="study-summary__section">
    <h4>25. Color y avisos temporales</h4>
    <p><strong>Palette</strong> extrae colores representativos de una imagen para construir una gama coherente. <strong>Snackbar</strong> muestra información breve de forma similar a un Toast, pero puede incorporar una acción. Utilizar una paleta preseleccionada mejora la consistencia y facilita controlar el contraste.</p>
  </section>
  <section class="study-summary__section">
    <h4>26. Campos de texto y reciclado de vistas</h4>
    <p><strong>TextInputLayout</strong> envuelve un campo de texto y aporta etiquetas flotantes animadas, ayuda, errores, contadores e iconos. En RecyclerView, una vista <em>scrapped</em> queda apartada temporalmente para poder retirarla o reutilizarla sin crear innecesariamente otra representación.</p>
  </section>
  <section class="study-summary__section">
    <h4>27. Hilos y comunicación con la interfaz</h4>
    <p>El hilo principal procesa la interfaz y debe mantenerse libre de operaciones largas. Desde un hilo secundario se puede solicitar trabajo en la interfaz mediante <code>View.post()</code>, <code>Activity.runOnUiThread()</code> o un <strong>Handler</strong> asociado al hilo principal. Así se evitan ralentizaciones, bloqueos y errores ANR.</p>
    <p><strong>AsyncTask</strong> utilizaba los tipos genéricos <code>Params</code>, <code>Progress</code> y <code>Result</code>. Desde <code>doInBackground()</code>, <code>publishProgress()</code> enviaba valores que <code>onProgressUpdate()</code> recibía en el hilo principal. AsyncTask está obsoleto desde Android 11; en proyectos actuales se prefieren corrutinas de Kotlin, ejecutores o las APIs de trabajo adecuadas al ciclo de vida.</p>
  </section>
  <section class="study-summary__section">
    <h4>28. Fragmentos y DialogFragment</h4>
    <p>Un <strong>Fragment</strong> es una parte modular y reutilizable de la interfaz que debe alojarse en una Activity u otro fragmento. Mantiene su propio ciclo de vida con callbacks como <code>onAttach()</code> y <code>onDestroyView()</code>; <code>onActivityCreated()</code> existió en la API, aunque actualmente está obsoleto. Los fragmentos no se declaran como componentes de la aplicación en <code>AndroidManifest.xml</code>.</p>
    <p><strong>DialogFragment</strong> integra un diálogo en el ciclo de vida de Fragment. Sus argumentos pueden entregarse mediante un Bundle y debe mostrarse utilizando <strong>FragmentManager</strong>, para que el sistema gestione correctamente su estado y su retirada.</p>
  </section>
  <section class="study-summary__section">
    <h4>29. Comunicación con servicios enlazados</h4>
    <p>Un <strong>Bound Service</strong> permite que otros componentes se enlacen, envíen solicitudes y reciban respuestas. El servicio devuelve un <strong>IBinder</strong>; para comunicación entre procesos pueden emplearse <strong>Messenger</strong>, que serializa mensajes, o <strong>AIDL</strong>, que define una interfaz IPC más directa y exige controlar la concurrencia.</p>
  </section>
  <section class="study-summary__section">
    <h4>30. Sincronía y difusiones persistentes</h4>
    <p>Una tarea <strong>síncrona</strong> obliga a esperar su resultado antes de continuar; una tarea asíncrona permite que el flujo principal siga atendiendo otras acciones. Esta diferencia es esencial en Android, donde bloquear el hilo de la interfaz degrada la respuesta de la aplicación.</p>
    <p><code>sendStickyBroadcast()</code> conservaba el último Intent después de la difusión para que pudiera recuperarlo un receptor registrado posteriormente. Es el comportamiento histórico de una difusión <em>sticky</em>, pero la API está obsoleta por motivos de seguridad y no debe emplearse en desarrollos nuevos.</p>
  </section>
</article>`;
