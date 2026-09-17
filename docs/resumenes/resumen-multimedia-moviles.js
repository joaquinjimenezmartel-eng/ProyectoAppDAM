const resumenMultimediaMoviles = `
<article class="study-summary">
  <header class="study-summary__hero">
    <span class="study-summary__eyebrow">U1–U2 · Fundamentos y Android</span>
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
</article>`;
