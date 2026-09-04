const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const QUESTIONS_ROOT = path.join(PROJECT_ROOT, "www", "preguntas");

const FILES = [
  ["preguntas-bases.js", "preguntasBases"],
  ["preguntas-empleabilidad.js", "preguntasEmpleabilidad"],
  ["preguntas-entornos.js", "preguntasEntornos"],
  ["preguntas-lenguaje-marcas.js", "preguntasLenguajeMarcas"],
  ["preguntas-programacion.js", "preguntasProgramacion"],
  ["preguntas-sistemas.js", "preguntasSistemas"]
];

const REWRITES = {
  "preguntas-empleabilidad.js:21": "El Impuesto sobre Sociedades grava los beneficios obtenidos por sociedades y otras entidades jurídicas. Es un impuesto directo y de naturaleza personal porque recae sobre la renta de un contribuyente concreto. No grava la renta de las personas físicas, que corresponde al IRPF.",
  "preguntas-empleabilidad.js:25": "La teoría ERG reorganiza las necesidades humanas en tres grupos: existencia, relación y crecimiento. Las necesidades de existencia cubren lo material y la seguridad; las de relación se vinculan con los vínculos sociales; y las de crecimiento impulsan el desarrollo personal y profesional. McGregor y Adams formularon teorías diferentes sobre la motivación laboral.",
  "preguntas-empleabilidad.js:26": "La Agencia Estatal de Administración Tributaria (AEAT) es una entidad de derecho público adscrita al Ministerio de Hacienda. Se creó en 1992 y se encarga de aplicar de forma efectiva el sistema tributario estatal y aduanero. Las tres afirmaciones describen características compatibles de este organismo.",
  "preguntas-empleabilidad.js:34": "Los grupos profesionales se definen atendiendo a las aptitudes profesionales, las titulaciones y el contenido general del trabajo. También agrupan tareas, funciones y responsabilidades con características comunes. Por ello, todos los elementos indicados contribuyen a determinar el grupo profesional.",
  "preguntas-empleabilidad.js:35": "El balance social evalúa el desempeño de una organización mediante tres tipos de indicadores: eficiencia, para relacionar recursos y resultados; eficacia, para medir el grado de cumplimiento de los objetivos; e impacto, para observar los efectos reales de sus actuaciones.",
  "preguntas-empleabilidad.js:37": "Los recursos humanos pueden analizarse desde tres perspectivas complementarias. El enfoque administrativo-legal aborda normas, contratos y obligaciones; el enfoque contable-costes estudia su efecto económico; y el enfoque de gestión se ocupa de organizar, desarrollar y coordinar a las personas.",

  "preguntas-entornos.js:19": "La refactorización reorganiza la estructura interna del código sin cambiar su comportamiento observable. Permite eliminar duplicaciones y otros indicadores de diseño mejorable, reducir el acoplamiento y aumentar la cohesión. Las pruebas de regresión sirven para comprobar que el sistema sigue produciendo los mismos resultados después de los cambios.",
  "preguntas-entornos.js:33": "Los sistemas de control de versiones se clasifican en centralizados y distribuidos. En un sistema centralizado, como SVN, existe un repositorio principal compartido. En uno distribuido, como Git, cada desarrollador puede disponer de una copia completa del repositorio y de su historial.",
  "preguntas-entornos.js:78": "Un sistema de control de versiones centralizado mantiene un repositorio principal al que acceden los miembros del equipo. Un sistema distribuido permite que cada persona trabaje con una copia completa del repositorio y su historial. SVN y Git son ejemplos habituales de ambos modelos, respectivamente.",

  "preguntas-lenguaje-marcas.js:13": "En una DTD, CDATA declara que el valor de un atributo se interpreta como datos de caracteres, es decir, como texto. Valores como `azul` o `A123` son ejemplos válidos. Los tipos ID e IDREF se reservan para identificadores únicos y referencias entre elementos.",
  "preguntas-lenguaje-marcas.js:19": "En XSLT, `/` puede aparecer como valor de atributos como `match` o `select`. Dentro de la expresión XPath, la barra selecciona la raíz del documento XML. No representa un comentario ni es por sí misma un atributo.",
  "preguntas-lenguaje-marcas.js:22": "En XPath, el operador `|` combina los conjuntos de nodos obtenidos por dos expresiones. Así se pueden seleccionar, en una única expresión, nodos que cumplan cualquiera de los dos recorridos indicados.",
  "preguntas-lenguaje-marcas.js:26": "La información XML se almacena habitualmente en ficheros con extensión `.xml`. Estos archivos conservan tanto los datos como las etiquetas que describen su estructura. JSON es un formato diferente y un archivo JavaScript no es el contenedor propio de un documento XML.",
  "preguntas-lenguaje-marcas.js:29": "Una base de datos habilitada para XML no es necesariamente nativa XML: puede utilizar un modelo relacional y añadir funciones para almacenar, consultar o intercambiar documentos XML. Por eso puede reunir las tres características descritas.",
  "preguntas-lenguaje-marcas.js:35": "Un documento Atom se reconoce por el elemento raíz `<feed>` y por el espacio de nombres propio de Atom. Estos elementos lo diferencian de formatos de sindicación como RSS.",
  "preguntas-lenguaje-marcas.js:39": "XSL-FO y XSLT forman parte de la familia XSL. `XSL-FOR` no es el nombre de un lenguaje o especificación de esta familia, por lo que es el elemento que no pertenece al grupo.",
  "preguntas-lenguaje-marcas.js:41": "Los lenguajes de marcas permiten representar información estructurada de forma independiente de la plataforma. Esta característica facilita que aplicaciones y tecnologías diferentes intercambien e interpreten los mismos datos.",
  "preguntas-lenguaje-marcas.js:45": "ISO y W3C son dos de las principales organizaciones de estandarización relacionadas con los lenguajes de marcas y las tecnologías web. Sus especificaciones favorecen la interoperabilidad entre herramientas y plataformas.",
  "preguntas-lenguaje-marcas.js:53": "Una DTD define la estructura permitida de un documento XML: qué elementos y atributos pueden aparecer, en qué orden y con qué relaciones. Gracias a esas reglas se puede comprobar si el documento es válido.",
  "preguntas-lenguaje-marcas.js:68": "Los lenguajes de marcas pueden clasificarse según su finalidad en procedimentales, de presentación y descriptivos o semánticos. Cada grupo indica si el marcado define acciones, aspecto visual o significado y estructura de la información.",
  "preguntas-lenguaje-marcas.js:83": "Cuando `/` aparece en un atributo como `match=\"/\"` o `select=\"/\"`, constituye el valor de ese atributo. A la vez, como expresión XPath, selecciona la raíz del documento XML.",
  "preguntas-lenguaje-marcas.js:107": "La sindicación de contenidos mediante RSS ofrece varias ventajas: permite suscribirse cómodamente a sitios web, consultar actualizaciones desde un único lector y evitar la entrega del correo electrónico al sitio de origen, lo que reduce la exposición al spam. Por ello, las tres ventajas indicadas son compatibles.",
  "preguntas-lenguaje-marcas.js:114": "Un ERP puede importar, exportar o almacenar información en distintos formatos, entre ellos CSV, XML y documentos ofimáticos. El formato utilizado depende del sistema y del proceso de integración, por lo que todas las posibilidades indicadas son compatibles.",

  "preguntas-programacion.js:1": "Una conexión con la base de datos mantiene recursos abiertos mientras se utiliza. El método `close()` del objeto `Connection` permite liberarlos cuando termina el trabajo. En aplicaciones reales es recomendable cerrarla automáticamente mediante `try-with-resources` siempre que sea posible.",
  "preguntas-programacion.js:7": "HashMap almacena asociaciones formadas por una clave y un valor. La clave permite localizar el valor relacionado de forma eficiente. Técnicamente pertenece a la jerarquía `Map`, no a la interfaz `Collection`; ArrayList almacena elementos por posición, HashSet mantiene valores únicos y ArrayDeque implementa estructuras de tipo cola o pila.",
  "preguntas-programacion.js:16": "Una aplicación Java ejecutable necesita un punto de entrada. La JVM comienza la ejecución en el método `public static void main(String[] args)`. El código Java se organiza en clases, pero no es obligatorio definir paquetes ni utilizar una clase con un nombre concreto.",
  "preguntas-programacion.js:5": "Una colección dinámica puede aumentar o reducir su número de elementos durante la ejecución. A diferencia de un array, no exige fijar una capacidad invariable al declararla. Su tamaño práctico está limitado por los recursos disponibles del sistema.",
  "preguntas-programacion.js:29": "La herencia establece una relación entre una clase padre y una clase hija. En Java, una clase solo puede extender directamente una clase padre, aunque puede implementar varias interfaces. La subclase recibe los miembros accesibles de la superclase y puede ampliar o especializar su comportamiento.",
  "preguntas-programacion.js:30": "En el contexto descrito, la opción agrupa campos que normalmente se excluyen de la persistencia. Los miembros `static` pertenecen a la clase y no al estado de cada objeto; `transient` y `@Transient` indican que un campo no debe persistirse. El tratamiento de `final` puede depender de la tecnología utilizada y no constituye por sí solo una regla universal.",
  "preguntas-programacion.js:33": "El bucle `for` recorre los valores del 1 al 10 y los acumula en `resultado`, que debe haberse inicializado previamente a 0. La alternativa con `while` no incrementa el contador y la opción con `do-while` incrementa antes de sumar, por lo que no producen correctamente la suma solicitada.",
  "preguntas-programacion.js:50": "La programación surgió para automatizar tareas que, realizadas manualmente, resultaban repetitivas, lentas o propensas a errores. Un programa expresa una secuencia de instrucciones que el ordenador puede ejecutar de forma rápida y consistente.",
  "preguntas-programacion.js:52": "Una clase funciona como plantilla para crear objetos. A partir de ella pueden instanciarse tantos objetos como necesite la aplicación, dentro de los límites de memoria y recursos disponibles.",
  "preguntas-programacion.js:61": "Un archivo WAR empaqueta los recursos necesarios para desplegar una aplicación web Java, como clases compiladas, bibliotecas, páginas JSP, HTML y archivos de configuración. Aunque utiliza internamente un contenedor basado en ZIP, su función específica es actuar como archivo de despliegue web.",
  "preguntas-programacion.js:77": "La definición corresponde a las palabras reservadas: términos que el lenguaje utiliza con un significado propio y que no pueden emplearse libremente como identificadores. Como esa categoría no aparece entre las opciones A, B y C, corresponde seleccionar la opción restante.",
  "preguntas-programacion.js:81": "La depuración permite ejecutar e inspeccionar un programa paso a paso, observar el valor de sus variables y seguir su flujo de control. Con ella se localizan fallos y se comprueba si los resultados obtenidos corresponden a los datos de entrada. Estas tareas complementan las pruebas del software.",
  "preguntas-programacion.js:93": "JFreeChart es una biblioteca de código abierto para Java que permite generar gráficos de distintos tipos y personalizar su presentación. Se utiliza para incorporar visualizaciones de datos en aplicaciones Java.",
  "preguntas-programacion.js:111": "Los arrays de Java disponen de la propiedad `length`, que devuelve su número de elementos. También sería posible recorrerlos y contar sus posiciones, aunque `length` es la forma directa, clara y eficiente de conocer el tamaño.",
  "preguntas-programacion.js:185": "GridBagLayout es un gestor de diseño utilizado habitualmente para organizar componentes de interfaces Swing. Distribuye los elementos en una cuadrícula flexible y permite controlar su posición, tamaño, separación y comportamiento al redimensionar la ventana.",

  "preguntas-sistemas.js:90": "Ethernet, UDP y TCP/IP son tecnologías y protocolos fundamentales de las redes informáticas. Ethernet opera principalmente en las capas física y de enlace, UDP es un protocolo de transporte y TCP/IP designa la familia de protocolos utilizada en Internet. Como los tres pertenecen al ámbito principal de las comunicaciones de red, ninguna de las opciones A, B o C cumple la condición planteada."
};

function loadQuestions(fileName, variableName) {
  const source = fs.readFileSync(path.join(QUESTIONS_ROOT, fileName), "utf8");
  const result = vm.runInNewContext(`${source}\nJSON.stringify(${variableName});`);
  return JSON.parse(result);
}

function protectedDigest(questionBanks) {
  const protectedData = questionBanks.flatMap(({ fileName, questions }) =>
    questions.map((question) => ({
      asignatura: fileName,
      id: question.id,
      pregunta: question.pregunta,
      opciones: question.opciones,
      correcta: question.correcta,
      respuesta_correcta: question.respuesta_correcta,
      imagen: question.imagen
    }))
  );
  return crypto.createHash("sha256").update(JSON.stringify(protectedData)).digest("hex");
}

function normalizeExplanation(text, fileName, id) {
  const specific = REWRITES[`${fileName}:${id}`];
  if (specific) return specific;

  let normalized = text
    .replace(/^Metáfora:[\s\S]*?\bTécnico:\s*/i, "")
    .replace(/^Explicación fácil:\s*/i, "")
    .replace(/Por qué esa es la buena:/gi, "Por qué es correcta:")
    .replace(/Por qué las otras no:/gi, "Por qué se descartan las demás opciones:")
    .replace(/Idea fácil para recordar:/gi, "Idea clave:")
    .replace(/Quédate con esta idea:/gi, "Idea clave:")
    .replace(/\\n/g, "\n")
    .replace(/\\\.$/, ".")
    .trim();

  return normalized;
}

function explanationRanges(source) {
  const ranges = [];
  const keyPattern = /(?:"explicacion"|explicacion)\s*:\s*/g;
  let match;

  while ((match = keyPattern.exec(source))) {
    const start = keyPattern.lastIndex;
    if (source[start] !== '"') {
      throw new Error(`La explicación situada en ${start} no usa un literal de texto compatible.`);
    }

    let cursor = start + 1;
    let escaped = false;
    while (cursor < source.length) {
      const character = source[cursor];
      if (!escaped && character === '"') break;
      if (!escaped && character === "\\") escaped = true;
      else escaped = false;
      cursor += 1;
    }

    if (cursor >= source.length) {
      throw new Error(`No se encontró el cierre de la explicación situada en ${start}.`);
    }

    ranges.push({ start, end: cursor + 1, literal: source.slice(start, cursor + 1) });
    keyPattern.lastIndex = cursor + 1;
  }

  return ranges;
}

function rewriteFile(fileName, variableName) {
  const filePath = path.join(QUESTIONS_ROOT, fileName);
  const source = fs.readFileSync(filePath, "utf8");
  const questions = loadQuestions(fileName, variableName);
  const ranges = explanationRanges(source);

  if (ranges.length !== questions.length) {
    throw new Error(`${fileName}: se encontraron ${ranges.length} explicaciones para ${questions.length} preguntas.`);
  }

  let updatedSource = source;
  let modified = 0;

  for (let index = ranges.length - 1; index >= 0; index -= 1) {
    const range = ranges[index];
    const current = vm.runInNewContext(range.literal);
    if (current !== questions[index].explicacion) {
      throw new Error(`${fileName}, pregunta ${questions[index].id}: la explicación no coincide con su posición.`);
    }

    const updated = normalizeExplanation(current, fileName, questions[index].id);
    if (updated === current) continue;

    updatedSource = `${updatedSource.slice(0, range.start)}${JSON.stringify(updated)}${updatedSource.slice(range.end)}`;
    modified += 1;
  }

  fs.writeFileSync(filePath, updatedSource, "utf8");
  return modified;
}

const before = FILES.map(([fileName, variableName]) => ({
  fileName,
  questions: loadQuestions(fileName, variableName)
}));
const digestBefore = protectedDigest(before);

let modifiedTotal = 0;
for (const [fileName, variableName] of FILES) {
  modifiedTotal += rewriteFile(fileName, variableName);
}

const after = FILES.map(([fileName, variableName]) => ({
  fileName,
  questions: loadQuestions(fileName, variableName)
}));
const digestAfter = protectedDigest(after);

if (digestBefore !== digestAfter) {
  throw new Error(`Se modificó contenido protegido del test (${digestBefore} -> ${digestAfter}).`);
}

console.log(`Explicaciones revisadas: ${modifiedTotal}.`);
console.log(`Contenido evaluable intacto: ${digestAfter}.`);
