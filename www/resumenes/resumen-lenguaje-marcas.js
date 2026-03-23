const resumenLenguajeMarcas = `
  <article class="study-summary">
    <header class="study-summary__hero">
      <span class="study-summary__eyebrow">DAM · Guía de estudio</span>
      <h3 class="study-summary__title">Lenguajes de Marcas y Sistemas de Gestión</h3>
      <p class="study-summary__lead">Esta asignatura explica cómo se estructura, valida, transforma, almacena y distribuye la información. El hilo conductor va desde los lenguajes de marcas clásicos hasta su uso real en sindicación de contenidos y en sistemas empresariales.</p>
      <div class="study-summary__chips">
        <span class="study-summary__chip">HTML y CSS</span>
        <span class="study-summary__chip">XML</span>
        <span class="study-summary__chip">DTD y XSLT</span>
        <span class="study-summary__chip">XPath y XQuery</span>
        <span class="study-summary__chip">RSS y Atom</span>
        <span class="study-summary__chip">ERP y CRM</span>
      </div>
    </header>

    <section class="study-summary__section">
      <h4>1. Fundamentos de los lenguajes de marcas</h4>
      <p>El origen del área se remonta a la década de <strong>1960</strong>, cuando surgió la necesidad de permitir el <strong>intercambio de datos entre diferentes aplicaciones</strong> sin depender del sistema operativo o de la tecnología concreta. La base de esta solución es el <strong>texto plano</strong>, porque es universal y no lleva formato visual incrustado.</p>
      <p>Sobre ese texto se aplican marcas o etiquetas. Los lenguajes de marcas se desarrollan bajo la supervisión de organismos como la <strong>ISO</strong> y el <strong>W3C</strong>. Se clasifican en <strong>procedimiento</strong>, <strong>presentación</strong> y <strong>descriptivos o semánticos</strong>. Los más importantes aquí son los del tercer tipo, como <strong>XML y HTML</strong>, porque describen qué es el dato y no solo cómo debe verse.</p>
    </section>

    <section class="study-summary__section">
      <h4>2. HTML y CSS como base de la web</h4>
      <p><strong>HTML 5</strong>, recomendado oficialmente en <strong>2014</strong>, es el lenguaje central de la web. Funciona mediante etiquetas y atributos, y para asignar valor a un atributo se usa el signo igual, como en <code>id="principal"</code>. HTML 5 introduce etiquetas semánticas específicas como <code>&lt;dialog&gt;</code>, <code>&lt;figure&gt;</code> y <code>&lt;progress&gt;</code>.</p>
      <p>La presentación visual se separa del contenido con <strong>CSS</strong>. Entre las propiedades importantes aparece <code>border-radius</code>, que puede aceptar uno, dos, tres o cuatro valores para controlar esquinas. Los recursos externos se enlazan con <code>&lt;link&gt;</code>, y es esencial distinguir entre enlaces relativos y <strong>enlaces absolutos</strong>, que emplean una URL completa con protocolo y dominio.</p>
    </section>

    <section class="study-summary__section">
      <h4>3. XML como estándar de intercambio</h4>
      <p><strong>XML</strong> es un metalenguaje derivado de SGML y sirve para construir otros lenguajes como <strong>XHTML, MathML o SVG</strong>. Su sintaxis es estricta: distingue mayúsculas y minúsculas, exige un <strong>único elemento raíz</strong> y obliga a escribir los valores de los atributos <strong>entrecomillados</strong>.</p>
      <ul>
        <li><strong>Prólogo:</strong> incluye la declaración XML, por ejemplo <code>&lt;?xml version="1.0"?&gt;</code>.</li>
        <li><strong>Cuerpo:</strong> contiene la estructura jerárquica real del documento.</li>
        <li><strong>CDATA:</strong> secciones <code>&lt;![CDATA[ ... ]]&gt;</code> para incluir caracteres especiales sin que el parser los interprete.</li>
        <li><strong>Parser:</strong> procesador que interpreta el documento XML.</li>
        <li><strong>Codificación estándar:</strong> <strong>UTF-8</strong>.</li>
      </ul>
    </section>

    <section class="study-summary__section">
      <h4>4. Validación con DTD y transformación con XSLT</h4>
      <p>Para que un XML siga una gramática concreta se emplea una <strong>DTD</strong>, que define qué elementos y atributos son válidos. Dentro de esa gramática, el modificador <code>#IMPLIED</code> indica que un atributo es <strong>opcional</strong>.</p>
      <p>Cuando esos datos deben transformarse, por ejemplo a HTML, se utiliza <strong>XSLT</strong>, que trabaja con dos entradas: el documento XML y la hoja XSL. Para localizar nodos dentro del árbol se usa <strong>XPath</strong>, donde la barra <code>/</code> remite al nodo raíz, la tubería <code>|</code> une conjuntos de nodos y expresiones como <code>last()-1</code> seleccionan posiciones concretas.</p>
      <p>En las hojas XSLT las etiquetas llevan prefijo de espacio de nombres, como <code>&lt;xsl:value-of&gt;</code>, y estructuras como <code>&lt;xsl:choose&gt;</code> permiten tomar decisiones lógicas. Herramientas relevantes son <strong>Saxon</strong> y <strong>Oxygen XML Editor</strong>.</p>
    </section>

    <section class="study-summary__section">
      <h4>5. Bases de datos XML y lenguaje de consulta</h4>
      <p>El almacenamiento de documentos XML puede hacerse en <strong>bases de datos nativas</strong>, pensadas para estructuras jerárquicas, o en bases <strong>XML Enabled</strong>, que son relacionales pero incluyen módulos de importación y exportación XML. Entre los ejemplos estudiados aparecen <strong>BaseX, Sedna, eXist-db</strong> y <strong>Oracle Berkeley DB XML</strong>.</p>
      <p>Para consultar este tipo de información se usa <strong>XQuery</strong>, lenguaje funcional y tipado diseñado por el W3C para extraer y manipular datos XML.</p>
    </section>

    <section class="study-summary__section">
      <h4>6. Sindicación de contenidos con RSS y Atom</h4>
      <p>Una aplicación masiva del XML es la sindicación de contenidos mediante <strong>RSS</strong> y <strong>Atom</strong>. RSS significa <strong>Really Simple Syndication</strong> y permite a los usuarios suscribirse a novedades con ayuda de <strong>agregadores</strong> o <em>feed readers</em>.</p>
      <ul>
        <li>Un feed RSS tiene un <code>channel</code> con tres elementos obligatorios: <strong>Title, Link y Description</strong>.</li>
        <li>Las fechas siguen el formato estricto <strong>RFC 822</strong>.</li>
        <li>El elemento <code>ttl</code> define cuánto tiempo permanece el contenido en caché.</li>
        <li>Herramientas como <em>FeedForAll</em> facilitan la creación de feeds.</li>
      </ul>
    </section>

    <section class="study-summary__section">
      <h4>7. ERP, CRM y gestión empresarial</h4>
      <p>En el nivel más alto de integración aparecen los <strong>ERP</strong> y los <strong>CRM</strong>. La tendencia moderna es trabajar con un <strong>único sistema integral</strong> para evitar incompatibilidades entre módulos. En un ERP, el <strong>TPV</strong> es clave para mantener el inventario actualizado en tiempo real.</p>
      <p>Los <strong>CRM</strong>, como Salesforce o SugarCRM, se apoyan en tres pilares: <strong>marketing, ventas y servicio posventa</strong>. Toda la información generada puede analizarse mediante <strong>Data Mining</strong>, cuyo objetivo es encontrar, verificar y aplicar <strong>patrones</strong>. El intercambio entre estos sistemas y el exterior se realiza, de forma estándar, a través de <strong>ficheros XML</strong>.</p>
    </section>

    <aside class="study-summary__note">
      <strong>Idea guía.</strong>
      Lenguajes de Marcas no trata solo de etiquetas. Trata de cómo dar estructura a la información para que pueda circular, validarse, transformarse y reutilizarse en entornos reales.
    </aside>
  </article>
`;
