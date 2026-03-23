const resumenProgramacion = `
  <article class="study-summary">
    <header class="study-summary__hero">
      <span class="study-summary__eyebrow">DAM · Guía de estudio</span>
      <h3 class="study-summary__title">Programación</h3>
      <p class="study-summary__lead">Programación reúne la lógica del algoritmo, la sintaxis del lenguaje y la construcción de software orientado a objetos. El recorrido natural va desde los datos más básicos hasta la persistencia, las interfaces gráficas y el control de errores.</p>
      <div class="study-summary__chips">
        <span class="study-summary__chip">Variables y tipos</span>
        <span class="study-summary__chip">Control de flujo</span>
        <span class="study-summary__chip">POO</span>
        <span class="study-summary__chip">Colecciones</span>
        <span class="study-summary__chip">Excepciones</span>
        <span class="study-summary__chip">Persistencia</span>
      </div>
    </header>

    <section class="study-summary__section">
      <h4>1. Datos, variables y operadores</h4>
      <p>Todo programa nace de la necesidad de manejar información. Una aplicación útil necesita entrada y salida de datos, ya sea por argumentos, consola o lectura de otras fuentes. En Java, la salida normal se realiza con <code>System.out</code> y los errores con <code>System.err</code>.</p>
      <p>Para guardar información usamos <strong>variables</strong>, identificadas con nombres válidos que no pueden ser palabras reservadas como <code>continue</code>, <code>default</code>, <code>else</code> o <code>try</code>. Un identificador puede incluir el símbolo dólar, pero no caracteres como <code>%</code>, <code>&amp;</code> o <code>#</code>. También se siguen convenciones de notación como <em>UpperCamelCase</em> y <em>lowerCamelCase</em>.</p>
      <ul>
        <li><strong>Tipos primitivos:</strong> <code>int</code>, <code>double</code>, <code>boolean</code> o <code>char</code>.</li>
        <li><strong>Clases y objetos:</strong> <code>String</code> no es un tipo primitivo, sino una clase. Para convertir un número a texto se usa <code>String.valueOf()</code> y para recortar una cadena <code>substring(inicio, fin)</code>.</li>
        <li><strong>Casting:</strong> la conversión de tipos puede ser implícita o explícita.</li>
        <li><strong>Operadores:</strong> símbolos como <code>&lt;</code>, <code>%</code>, <code>!</code> o <code>||</code> permiten comparar, combinar y transformar valores.</li>
        <li><strong>Comentarios:</strong> se crean con <code>//</code>, <code>/* */</code> o <code>/** */</code>.</li>
      </ul>
    </section>

    <section class="study-summary__section">
      <h4>2. Controlando el flujo del programa</h4>
      <p>El código se ejecuta de arriba abajo, pero un programa real necesita tomar decisiones y repetir acciones. Las estructuras condicionales como <code>if</code> y <code>switch</code> permiten seleccionar caminos según una condición o un valor exacto.</p>
      <p>Las estructuras iterativas como <code>for</code> repiten un bloque un número determinado de veces. En un bucle que va de 0 a 9, la instrucción interna y el incremento se ejecutan 10 veces. Si en un momento dado hace falta salir del bucle de forma inmediata, se utiliza <code>break</code>.</p>
      <p>Cuando el programa no se comporta como esperas, entra en juego la <strong>depuración</strong> o <em>debugging</em>, que consiste en ejecutar el código paso a paso para localizar errores lógicos.</p>
    </section>

    <section class="study-summary__section">
      <h4>3. Paradigma orientado a objetos</h4>
      <p>En Java la información se organiza en <strong>clases</strong>, que actúan como moldes. Sus características reciben el nombre de campos, atributos o variables. A partir de una clase se crean <strong>objetos</strong> mediante el operador <code>new</code> y un método especial llamado <strong>constructor</strong>.</p>
      <ul>
        <li><strong>Constructores:</strong> inicializan el objeto, no se pueden heredar directamente ni se pueden sobrescribir.</li>
        <li><strong>Métodos:</strong> describen el comportamiento. Si no devuelven resultado se declaran con <code>void</code>.</li>
        <li><strong>Métodos observadores:</strong> permiten consultar campos privados, normalmente mediante getters.</li>
        <li><strong>Paso por valor:</strong> al enviar datos a un método se transmite una copia del valor original.</li>
        <li><strong>Static:</strong> un campo o método <code>static</code> pertenece a la clase y es compartido por todos los objetos.</li>
        <li><strong>Paquetes:</strong> agrupan clases, evitan conflictos de nombres y controlan visibilidad. La visibilidad <code>protected</code> permite acceso desde el mismo paquete o desde subclases en otros paquetes.</li>
        <li><strong>Garbage Collector:</strong> mecanismo automático que limpia memoria no utilizada.</li>
      </ul>
      <p>Dentro de la POO avanzada debes distinguir <strong>sobrecarga</strong>, que consiste en definir varios métodos con el mismo nombre y distintos parámetros, y <strong>sobrescritura</strong> u <em>override</em>, que modifica un método heredado y suele acompañarse de la anotación <code>@Override</code>. También aparecen las <strong>clases abstractas</strong>, que no pueden instanciarse, las <strong>interfaces</strong>, que funcionan como contratos, el operador <code>instanceof</code> y la <strong>composición</strong>, donde una parte depende totalmente del todo.</p>
    </section>

    <section class="study-summary__section">
      <h4>4. Arrays y colecciones</h4>
      <p>Cuando necesitas guardar varios datos juntos puedes recurrir a arrays o a colecciones. Los <strong>arrays</strong> son estructuras estáticas y secuenciales cuyo tamaño queda fijado al crearlos. Su propiedad <code>.length</code> devuelve el número de posiciones y sus índices comienzan en 0.</p>
      <p>Las <strong>colecciones</strong> son estructuras dinámicas y más flexibles. Las dos raíces principales son <code>Collection</code> y <code>Map</code>. A partir de ahí debes recordar los rasgos básicos de cada familia:</p>
      <ul>
        <li><strong>Set:</strong> no admite elementos repetidos; <code>TreeSet</code> además ordena.</li>
        <li><strong>Queue:</strong> representa colas; <code>PriorityQueue</code> permite duplicados y ordena por prioridad.</li>
        <li><strong>ArrayDeque:</strong> puede actuar como cola y pila.</li>
        <li><strong>List:</strong> incluye estructuras como <code>ArrayList</code>, un array dinámico. En él, <code>lastIndexOf()</code> localiza la última posición de un elemento.</li>
        <li><strong>Map:</strong> almacena pares clave-valor, con una clave única y un valor asociado.</li>
      </ul>
      <p>Si necesitas copias totalmente independientes de los datos, debes recurrir a una <strong>copia deep</strong> o profunda.</p>
    </section>

    <section class="study-summary__section">
      <h4>5. Manejo de excepciones</h4>
      <p>Una <strong>excepción</strong> es un error que aparece en tiempo de ejecución y altera el flujo normal del programa. Todas heredan de la clase <code>Throwable</code>. Para tratarlas se usa el bloque <code>try</code>, el bloque <code>catch</code> y, opcionalmente, <code>finally</code>, que contiene código que se ejecuta siempre.</p>
      <ul>
        <li><strong><code>throw</code>:</strong> lanza una excepción concreta.</li>
        <li><strong><code>throws</code>:</strong> indica que un método propaga la excepción y no la gestiona allí.</li>
        <li><strong>Call Stack:</strong> la pila de llamadas permite localizar de dónde viene el fallo.</li>
        <li><strong>Checked exceptions:</strong> son leves o previsibles y su tratamiento es obligatorio.</li>
      </ul>
      <p>Como criterio general, no conviene capturar excepciones genéricas si puedes ser más específico.</p>
    </section>

    <section class="study-summary__section">
      <h4>6. Recursividad y complejidad</h4>
      <p>La <strong>recursividad</strong> resuelve problemas dividiéndolos en otros más pequeños hasta llegar a una condición de terminación o caso base. Puede ser simple, múltiple, cruzada o anidada. La simple y la múltiple se diferencian por el número de llamadas que se hacen a sí mismas; la cruzada implica dos métodos distintos que se invocan entre sí.</p>
      <p>Su gran coste es el consumo de memoria. Por eso hay que medir la eficiencia de los algoritmos mediante <strong>Big-O</strong>, también llamada notación asintótica o de Landau. En bucles anidados se multiplican las <code>n</code>; en condicionales se conserva la rama de mayor complejidad; y en estructuras como <code>for (int i = 100; i &gt; 0; i /= 2)</code> la complejidad se reduce a <code>O(log n)</code>. Entre las complejidades frecuentes, <code>O(n²)</code> es una de las peores para datos masivos.</p>
    </section>

    <section class="study-summary__section">
      <h4>7. Persistencia: ficheros, bases de datos y JPA</h4>
      <p>Un programa útil necesita guardar información. En Java, un flujo se denomina <strong>Stream</strong> y puede clasificarse por tipo de datos, dirección y forma de acceso. Con <code>FileWriter</code> escribes texto, con <code>RandomAccessFile</code> accedes de forma aleatoria a un archivo, y con <code>File</code> puedes crear directorios mediante <code>mkdir()</code> o comprobar su existencia con <code>exists()</code>. Las fases comunes son siempre apertura, transmisión y cierre. Si quieres guardar un objeto entero, necesitas <strong>serialización</strong>.</p>
      <p>En bases de datos relacionales como <strong>MariaDB</strong> debes distinguir DDL y DML. Una <strong>clave primaria</strong> identifica de forma inequívoca un registro. <code>UPDATE</code> modifica filas y <code>DELETE</code> las elimina. Para conectar Java con la base de datos se carga un <strong>driver</strong> específico en formato <code>.jar</code> y se ejecutan consultas con <code>Statement</code>. Si desactivas el autocommit con <code>setAutoCommit(false)</code>, deberás usar <code>commit()</code> o <code>rollback()</code>.</p>
      <p>En las bases de datos orientadas a objetos y en <strong>JPA</strong>, una clase persistente debe tener constructor sin argumentos. Los campos <code>static</code>, <code>final</code>, <code>transient</code> o anotados con <code>@Transient</code> no se almacenan. Para guardar un objeto se usa <code>persist(Object)</code>, para recuperarlo <code>find(Clase.class, id)</code> y para operaciones masivas sobre JPQL se emplea <code>createQuery(String)</code>.</p>
    </section>

    <section class="study-summary__section">
      <h4>8. Interfaces gráficas</h4>
      <p>La cara visible del programa son las interfaces gráficas. En Java, <strong>AWT</strong> fue la biblioteca clásica y sirvió de base para <strong>Swing</strong>. Los componentes Swing se reconocen porque suelen comenzar por <code>J</code>, como <code>JButton</code>. Ambas bibliotecas manejan los eventos con una lógica similar.</p>
      <ul>
        <li><strong>Listener:</strong> elemento que capta el evento y dispara la acción correspondiente.</li>
        <li><strong>FlowLayout:</strong> coloca los componentes en horizontal y salta de línea si no caben.</li>
        <li><strong>GridBagLayout:</strong> es más complejo y se basa en una cuadrícula.</li>
        <li><strong>Menús:</strong> controles como <code>MenuBar</code>, <code>MenuItem</code> o <code>PopupMenu</code>.</li>
        <li><strong>Look and Feel:</strong> temas visuales como <code>MotifLookAndFeel</code>.</li>
        <li><strong>Herramientas visuales:</strong> plugins como <strong>WindowBuilder</strong> facilitan el diseño drag and drop.</li>
      </ul>
    </section>

    <aside class="study-summary__note">
      <strong>Idea guía.</strong>
      Programar bien no es solo escribir sintaxis correcta. Es saber modelar datos, controlar el flujo, estructurar objetos, persistir información, manejar errores y construir interfaces sin perder de vista la eficiencia.
    </aside>
  </article>
`;
