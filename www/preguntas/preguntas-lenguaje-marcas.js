const preguntasLenguajeMarcas = [
  {
    "id": 1,
    "pregunta": "¿Cuál de las siguientes etiquetas no pertenece al lenguaje XSLT?",
    "opciones": [
      "A. <xsl:value-of>",
      "B. <xsl:for-each>",
      "C. <xsl:boolean>",
      "D. <xsl:choose>"
    ],
    "respuesta_correcta": "C. <xsl:boolean>",
    "explicacion": "Explicación fácil:\nXSLT tiene unas etiquetas propias para trabajar con documentos XML, como si fueran herramientas de una caja. Algunas sirven para recorrer datos, otras para sacar valores y otras para elegir entre varias opciones.\nLa opción <xsl:boolean> parece que podría existir, pero en realidad no es una etiqueta de XSLT.\n\nEjemplo:\n<xsl:value-of> sí se usa para mostrar el valor de un dato.\n<xsl:for-each> sí se usa para recorrer varios nodos.\n<xsl:choose> sí se usa para elegir entre varias posibilidades.\n\nPor qué esa es la buena:\nPorque <xsl:boolean> no forma parte de las etiquetas propias de XSLT.\n\nPor qué las otras no:\n- A no es correcta porque <xsl:value-of> sí existe en XSLT.\n- B no es correcta porque <xsl:for-each> sí existe en XSLT.\n- D no es correcta porque <xsl:choose> sí existe en XSLT."
  },
  {
    "id": 2,
    "pregunta": "¿Cuál de las siguientes extensiones no corresponde con un archivo de lenguaje de marcas?",
    "opciones": [
      "A. .css.",
      "B. .sgml.",
      "C. .html.",
      "D. .xml."
    ],
    "respuesta_correcta": "A. .css.",
    "explicacion": "Explicación fácil:\nUn lenguaje de marcas se usa para estructurar o marcar contenido, como pasa con HTML o XML. CSS no hace eso. CSS se usa para decir cómo se ve una página: colores, tamaños, márgenes y cosas así.\n\nEjemplo:\nHTML dice que algo es un título.\nCSS dice si ese título va en azul, grande o centrado.\n\nPor qué esa es la buena:\nPorque .css no corresponde a un archivo de lenguaje de marcas, sino a una hoja de estilos.\n\nPor qué las otras no:\n- B no es correcta porque .sgml sí pertenece al ámbito de los lenguajes de marcas.\n- C no es correcta porque .html sí es un lenguaje de marcas.\n- D no es correcta porque .xml sí es un lenguaje de marcas."
  },
  {
    "id": 3,
    "pregunta": "¿Cuál de los siguientes no es un formato para el intercambio y almacenamiento de los datos?",
    "opciones": [
      "A. Ficheros CSV.",
      "B. Ficheros JSON.",
      "C. Ficheros XML.",
      "D. Fichero TEMP."
    ],
    "respuesta_correcta": "D. Fichero TEMP.",
    "explicacion": "Explicación fácil:\nCSV, JSON y XML sí son formatos pensados para guardar o intercambiar información entre programas. En cambio, TEMP hace referencia a un archivo temporal, no a un formato estándar de datos.\n\nEjemplo:\nUn programa puede guardar una lista de usuarios en CSV, JSON o XML para luego abrirla en otro sitio.\nUn archivo TEMP normalmente se crea solo para uso momentáneo del sistema o de una aplicación.\n\nPor qué esa es la buena:\nPorque Fichero TEMP no es un formato de intercambio y almacenamiento de datos como los otros.\n\nPor qué las otras no:\n- A no es correcta porque CSV sí se usa para guardar e intercambiar datos.\n- B no es correcta porque JSON sí se usa para guardar e intercambiar datos.\n- C no es correcta porque XML sí se usa para guardar e intercambiar datos."
  },
  {
    "id": 4,
    "pregunta": "¿Qué debe incluir el prólogo del documento XML?",
    "opciones": [
      "A. Presentación.",
      "B. Versión.",
      "C. Estructura del documento.",
      "D. Ninguna es correcta."
    ],
    "respuesta_correcta": "B. Versión.",
    "explicacion": "Explicación fácil:\nEl prólogo de un documento XML es la parte del principio, como la cabecera. Ahí se indica información básica del documento, y una de las más importantes es la versión de XML.\n\nEjemplo:\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\nAquí aparece claramente la versión.\n\nPor qué esa es la buena:\nPorque en el prólogo del XML se indica la versión del documento.\n\nPor qué las otras no:\n- A no es correcta porque la presentación no forma parte del prólogo XML.\n- C no es correcta porque la estructura del documento va en el contenido del XML, no como dato básico del prólogo.\n- D no es correcta porque B sí es correcta."
  },
  {
    "id": 5,
    "pregunta": "¿Qué es XQuery?",
    "opciones": [
      "A. Lenguaje de consultas especializado en datos XML.",
      "B. Lenguaje de procesamiento de documentos XML.",
      "C. Lenguaje de verificación empleado por DTD",
      "D. Todas las anteriores son incorrecta."
    ],
    "respuesta_correcta": "A. Lenguaje de consultas especializado en datos XML.",
    "explicacion": "Explicación fácil:\nXQuery sirve para buscar y sacar información de documentos XML. Es como hacer preguntas dentro de un archivo XML para encontrar justo lo que necesitas.\n\nEjemplo:\nSi tienes un XML con libros, XQuery te puede ayudar a obtener solo los títulos o solo los autores.\n\nPor qué esa es la buena:\nPorque XQuery es un lenguaje pensado específicamente para hacer consultas sobre datos XML.\n\nPor qué las otras no:\n- B no es correcta porque esa descripción encaja mejor con otras tecnologías usadas para procesar o transformar XML.\n- C no es correcta porque DTD no usa XQuery como lenguaje de verificación.\n- D no es correcta porque A sí es correcta."
  },
  {
    "id": 6,
    "pregunta": "¿Qué tipo de estructura jerárquica tiene un documento XML?",
    "opciones": [
      "A. Estructura ascendente arbórea.",
      "B. Estructura descendente canórea.",
      "C. Estructura descendente arbórea.",
      "D. Ninguna de las anteriores es correcta."
    ],
    "respuesta_correcta": "C. Estructura descendente arbórea.",
    "explicacion": "Explicación fácil:\nUn documento XML se organiza como un árbol. Arriba está la raíz y debajo van colgando los elementos hijos, y de esos pueden salir más hijos. Por eso se dice que es una estructura arbórea y descendente.\n\nEjemplo:\n<libro>\n  <titulo>XML</titulo>\n  <autor>Ana</autor>\n</libro>\nAquí libro es el nodo principal y debajo están titulo y autor.\n\nPor qué esa es la buena:\nPorque XML tiene una estructura en forma de árbol que va desde un elemento principal hacia elementos inferiores.\n\nPor qué las otras no:\n- A no es correcta porque no se describe como ascendente.\n- B no es correcta porque canórea no es la denominación correcta aquí.\n- D no es correcta porque C sí es correcta."
  },
  {
    "id": 7,
    "pregunta": "Como se denomina el elemento que modifica o añade información a una etiqueta",
    "opciones": [
      "A. Elemento.",
      "B. Gramática.",
      "C. Etiqueta.",
      "D. Atributo."
    ],
    "respuesta_correcta": "D. Atributo.",
    "explicacion": "Explicación fácil:\nUn atributo es un dato extra que se mete dentro de una etiqueta para completar su información. Es como ponerle una pegatina con detalles a una caja.\n\nEjemplo:\n<libro tipo=\"novela\">\nLa etiqueta es libro y el atributo es tipo=\"novela\".\n\nPor qué esa es la buena:\nPorque el atributo sirve precisamente para modificar o añadir información a una etiqueta.\n\nPor qué las otras no:\n- A no es correcta porque un elemento es algo más completo que puede incluir etiquetas y contenido.\n- B no es correcta porque gramática no es el nombre de esa parte.\n- C no es correcta porque la etiqueta es la propia marca, no la información adicional."
  },
  {
    "id": 8,
    "pregunta": "Con que programa podemos crear un documento HTML",
    "opciones": [
      "A. Kompozer",
      "B. Bloc de Notas.",
      "C. HTML Online Editor.",
      "D. Todas las anteriores son correctas."
    ],
    "respuesta_correcta": "D. Todas las anteriores son correctas.",
    "explicacion": "Explicación fácil:\nPara crear un documento HTML no necesitas obligatoriamente un programa especial. Puedes usar un editor visual, un editor de texto sencillo o incluso una herramienta online.\n\nEjemplo:\nPuedes escribir una página HTML en Bloc de Notas, guardarla con extensión .html y abrirla en el navegador.\nTambién puedes hacerla con Kompozer o con un editor online.\n\nPor qué esa es la buena:\nPorque todas las opciones anteriores sirven para crear un documento HTML.\n\nPor qué las otras no:\n- A por sí sola no es la única correcta, porque hay más programas que también sirven.\n- B por sí sola no es la única correcta, porque no solo se puede hacer con Bloc de Notas.\n- C por sí sola no es la única correcta, porque tampoco es la única opción válida."
  },
  {
    "id": 9,
    "pregunta": "CSS son las siglas de:",
    "opciones": [
      "A. Code Sheets Style.",
      "B. Code Style Sheets.",
      "C. Cascading Style Sheets.",
      "D. Cascading Sheets Style."
    ],
    "respuesta_correcta": "C. Cascading Style Sheets.",
    "explicacion": "Explicación fácil:\nCSS es el lenguaje que se usa para dar estilo a una página web. Sus siglas en inglés significan Cascading Style Sheets.\n\nEjemplo:\nCon CSS puedes decir que un título sea rojo, que un texto esté centrado o que un bloque tenga un borde.\n\nPor qué esa es la buena:\nPorque el significado correcto de las siglas CSS es Cascading Style Sheets.\n\nPor qué las otras no:\n- A no es correcta porque ese desarrollo de siglas no existe.\n- B no es correcta porque ese desarrollo de siglas tampoco es el correcto.\n- D no es correcta porque el orden de las palabras no es el válido."
  },
  {
    "id": 10,
    "pregunta": "Cuál es el símbolo faltante, marcado con (…), en esta etiqueta xsl, <xsl(…)value-of:",
    "opciones": [
      "A. =, igual.",
      "B. ?, interrogación.",
      "C. _, barra baja.",
      "D. :, Dos punto."
    ],
    "respuesta_correcta": "D. :, Dos punto.",
    "explicacion": "Explicación fácil:\nEn XSLT, muchas etiquetas usan un prefijo y luego el nombre separado por dos puntos. Es como si llevaran nombre y apellido unidos por ese símbolo.\n\nEjemplo:\n<xsl:value-of>\nAquí xsl es el prefijo y value-of es el nombre de la instrucción. Entre los dos va :\n\nPor qué esa es la buena:\nPorque la forma correcta de esa etiqueta es <xsl:value-of> y el símbolo que falta es :\n\nPor qué las otras no:\n- A no es correcta porque el signo igual no se usa para separar el prefijo del nombre de la etiqueta.\n- B no es correcta porque la interrogación no corresponde a esa etiqueta.\n- C no es correcta porque la barra baja tampoco es el separador correcto."
  },
  {
    "id": 11,
    "pregunta": "Documento que permite validar un documento XML:",
    "opciones": [
      "A. DTD.",
      "B. OS/2.",
      "C. SASS.",
      "D. Ninguna de las anteriores es correcta."
    ],
    "respuesta_correcta": "A. DTD.",
    "explicacion": "Explicación fácil:\nUna DTD es como una plantilla de reglas que le dice a un documento XML cómo debe estar hecho. Sirve para comprobar si ese XML está bien construido según unas normas.\n\nEjemplo:\nSi una DTD dice que un libro debe tener titulo y autor, el XML se revisa para ver si realmente tiene esas partes.\n\nPor qué esa es la buena:\nPorque la DTD se usa para validar un documento XML.\n\nPor qué las otras no:\n- B no es correcta porque OS/2 es un sistema operativo, no un sistema de validación de XML.\n- C no es correcta porque SASS es una herramienta relacionada con hojas de estilo, no con validación XML.\n- D no es correcta porque A sí es correcta."
  },
  {
    "id": 12,
    "pregunta": "DTD es:",
    "opciones": [
      "A. Un sistema numérico.",
      "B. Un tipo de atributo.",
      "C. Un documento de verificación.",
      "D. Un tipo de etiqueta."
    ],
    "respuesta_correcta": "C. Un documento de verificación.",
    "explicacion": "Explicación fácil:\nDTD es un documento que contiene reglas para comprobar si un XML cumple la estructura que debería tener. Es como una hoja con instrucciones para revisar si todo está bien colocado.\n\nEjemplo:\nSi una DTD dice que un alumno debe tener nombre y edad, se puede revisar el XML para ver si esos datos aparecen correctamente.\n\nPor qué esa es la buena:\nPorque una DTD sirve para verificar o validar la estructura de un documento XML.\n\nPor qué las otras no:\n- A no es correcta porque una DTD no es un sistema numérico.\n- B no es correcta porque no es un tipo de atributo.\n- D no es correcta porque tampoco es un tipo de etiqueta."
  },
  {
    "id": 13,
    "pregunta": "El atributo CDATA de DTD implica que el valor:",
    "opciones": [
      "A. Es un contenido único e inequívoco.",
      "B. Refiere a otro elemento",
      "C. Es alfanumérico.",
      "D. Ninguna de las anteriores es correcta."
    ],
    "respuesta_correcta": "C. Es alfanumérico.",
    "explicacion": "Explicación fácil:\nCDATA indica que el valor de ese atributo se trata como texto. En este tipo de examen lo simplifican diciendo que es alfanumérico, o sea, que puede contener caracteres de texto.\n\nEjemplo:\nSi un atributo pone color=\"azul\" o codigo=\"A123\", eso se entiende como un valor de texto.\n\nPor qué esa es la buena:\nPorque en este test CDATA se identifica con un valor alfanumérico.\n\nPor qué las otras no:\n- A no es correcta porque eso encaja más con un identificador único.\n- B no es correcta porque referirse a otro elemento se asocia más a otros tipos como IDREF.\n- D no es correcta porque C es la opción que da por válida el examen."
  },
  {
    "id": 14,
    "pregunta": "El módulo encargado de permitir la venta online mediante el pago electrónico es:",
    "opciones": [
      "A. Módulo de TPV.",
      "B. Módulo de Marketing.",
      "C. Módulo de proyectos.",
      "D. Módulo de gestión de almacenes."
    ],
    "respuesta_correcta": "A. Módulo de TPV.",
    "explicacion": "Explicación fácil:\nCuando una tienda vende por internet y alguien paga con tarjeta o con un sistema de cobro electrónico, hace falta un módulo que se encargue de gestionar ese pago. Ese módulo es el TPV.\n\nEjemplo:\nEn una tienda online, cuando pulsas pagar y metes la tarjeta, normalmente estás usando un TPV virtual.\n\nPor qué esa es la buena:\nPorque el módulo de TPV es el que permite gestionar el pago electrónico en la venta online.\n\nPor qué las otras no:\n- B no es correcta porque marketing sirve para promocionar o atraer clientes, no para cobrar.\n- C no es correcta porque proyectos no gestiona pagos online.\n- D no es correcta porque la gestión de almacenes controla stock, no el cobro electrónico."
  },
  {
    "id": 15,
    "pregunta": "Elementos básicos de un feed que se deben introducir en channel:",
    "opciones": [
      "A. Title, link y URL.",
      "B. Title, link e imagen.",
      "C. Title, URL y description.",
      "D. Title, link y description."
    ],
    "respuesta_correcta": "D. Title, link y description.",
    "explicacion": "Explicación fácil:\nEn un feed RSS, la parte channel necesita unos datos básicos para identificar de qué trata ese canal. Los más importantes son el título, el enlace y una descripción.\n\nEjemplo:\nUn canal de noticias puede tener un title con el nombre del sitio, un link con su web y un description explicando de qué informa.\n\nPor qué esa es la buena:\nPorque los elementos básicos que se suelen poner en channel son title, link y description.\n\nPor qué las otras no:\n- A no es correcta porque en este contexto se usa link, no URL como elemento básico del canal.\n- B no es correcta porque imagen puede aparecer, pero no es uno de los básicos que pide la pregunta.\n- C no es correcta porque vuelve a usar URL en lugar de link."
  },
  {
    "id": 16,
    "pregunta": "En el lenguaje XPath, la expresión de ruta \"/\" se utiliza para seleccionar:",
    "opciones": [
      "A. El nodo con un nombre específico.",
      "B. El nodo raíz.",
      "C. El nodo actual.",
      "D. Todas las anteriores son incorrectas."
    ],
    "respuesta_correcta": "B. El nodo raíz.",
    "explicacion": "Explicación fácil:\nEn XPath, la barra / sola representa el punto de inicio del documento, es decir, la raíz. Es como empezar a mirar un árbol desde su parte principal.\n\nEjemplo:\nSi escribes /libros/libro, empiezas desde la raíz y luego bajas hasta libros y libro.\n\nPor qué esa es la buena:\nPorque la expresión / se usa para señalar el nodo raíz del documento.\n\nPor qué las otras no:\n- A no es correcta porque un nodo con nombre específico sería algo como libro o autor.\n- C no es correcta porque el nodo actual se representa de otra forma.\n- D no es correcta porque B sí es correcta."
  },
  {
    "id": 17,
    "pregunta": "En esta regla de CSS: h2 { color: #B6E1F9; } definimos \"color\" como:",
    "opciones": [
      "A. Selector",
      "B. Declaración",
      "C. Propiedad.",
      "D. Valor"
    ],
    "respuesta_correcta": "C. Propiedad.",
    "explicacion": "Explicación fácil:\nEn CSS, una regla tiene varias partes. El selector dice a qué elemento afecta, la propiedad dice qué aspecto quieres cambiar y el valor dice con qué lo quieres cambiar.\n\nEjemplo:\nEn h2 { color: #B6E1F9; }\nh2 es el selector, color es la propiedad y #B6E1F9 es el valor.\n\nPor qué esa es la buena:\nPorque color es el nombre de la característica que se quiere modificar.\n\nPor qué las otras no:\n- A no es correcta porque el selector es h2.\n- B no es correcta porque la declaración completa es color: #B6E1F9;.\n- D no es correcta porque el valor es #B6E1F9."
  },
  {
    "id": 18,
    "pregunta": "En HTML la etiqueta <link> determina:",
    "opciones": [
      "A. La versión.",
      "B. Estándar empleado.",
      "C. Recursos externos, hojas de estilo.",
      "D. Estilos empleados."
    ],
    "respuesta_correcta": "C. Recursos externos, hojas de estilo.",
    "explicacion": "Explicación fácil:\nLa etiqueta <link> sirve para conectar el documento HTML con recursos que están fuera, sobre todo archivos CSS. Es como decirle a la página dónde está la ropa que se va a poner.\n\nEjemplo:\n<link rel=\"stylesheet\" href=\"estilos.css\">\nCon eso el HTML carga una hoja de estilo externa.\n\nPor qué esa es la buena:\nPorque la etiqueta <link> se usa para enlazar recursos externos, especialmente hojas de estilo.\n\nPor qué las otras no:\n- A no es correcta porque la versión del documento no la define esta etiqueta.\n- B no es correcta porque tampoco indica el estándar empleado.\n- D no es correcta porque no escribe los estilos dentro del HTML, sino que enlaza recursos externos."
  },
  {
    "id": 19,
    "pregunta": "En las hojas de estilo XSL el símbolo / en solitario indica:",
    "opciones": [
      "A. Un comentario.",
      "B. Un atributo.",
      "C. Un valor.",
      "D. Todos los anteriores son correctos."
    ],
    "respuesta_correcta": "C. Un valor.",
    "explicacion": "Explicación fácil:\nEn este examen, cuando aparece el símbolo / solo dentro de una expresión de XSL, lo están tratando como el valor que se pone en un atributo como match o select.\n\nEjemplo:\nEn una instrucción como match=\"/\", la barra va dentro del valor del atributo.\n\nPor qué esa es la buena:\nPorque según el criterio del test, / en solitario se considera un valor.\n\nPor qué las otras no:\n- A no es correcta porque / no marca un comentario en XSL.\n- B no es correcta porque / no es un atributo.\n- D no es correcta porque las anteriores no son todas válidas."
  },
  {
    "id": 20,
    "pregunta": "En un DTD, #IMPLIED implica que el atributo:",
    "opciones": [
      "A. Es obligatorio.",
      "B. Es opcional.",
      "C. Es fijo.",
      "D. Ninguna de las anteriores es correcta."
    ],
    "respuesta_correcta": "B. Es opcional.",
    "explicacion": "Explicación fácil:\nCuando en una DTD un atributo aparece con #IMPLIED, significa que no es obligatorio ponerlo. Puede estar o no estar, y el documento sigue siendo válido.\n\nEjemplo:\nSi un atributo telefono está marcado como #IMPLIED, una persona puede tener telefono en el XML o no tenerlo.\n\nPor qué esa es la buena:\nPorque #IMPLIED indica que el atributo es opcional.\n\nPor qué las otras no:\n- A no es correcta porque obligatorio sería otra indicación distinta.\n- C no es correcta porque fijo corresponde a otro caso.\n- D no es correcta porque B sí es correcta."
  },
  {
    "id": 21,
    "pregunta": "En XML los valores siempre deben:",
    "opciones": [
      "A. Ser numéricos.",
      "B. Entrecomillarse.",
      "C. Ir entre símbolos de igual.",
      "D. Acotarse con los símbolos \"<\" y \">\"."
    ],
    "respuesta_correcta": "B. Entrecomillarse.",
    "explicacion": "Explicación fácil:\nEn XML, cuando escribes un valor en un atributo, ese valor tiene que ir entre comillas. Es como poner una palabra dentro de una cajita para que el ordenador sepa exactamente dónde empieza y dónde termina.\n\nEjemplo:\n<persona nombre=\"Ana\">\nAquí el valor Ana va entre comillas.\n\nPor qué esa es la buena:\nPorque en XML los valores de los atributos deben escribirse entrecomillados.\n\nPor qué las otras no:\n- A no es correcta porque los valores no tienen por qué ser numéricos.\n- C no es correcta porque no van entre símbolos de igual, sino junto a un igual y entre comillas.\n- D no es correcta porque los símbolos < y > se usan para las etiquetas, no para los valores."
  },
  {
    "id": 22,
    "pregunta": "En XPath \"|\" permite:",
    "opciones": [
      "A. Computar dos nodos simultáneos.",
      "B. Dividir los valores de dos nodos.",
      "C. Marcar una disyunción entre uno o más nodos entre los que elegir.",
      "D. Ninguna de las anteriores es correcta ese símbolo no se emplea."
    ],
    "respuesta_correcta": "A. Computar dos nodos simultáneos.",
    "explicacion": "Explicación fácil:\nEn este examen, el símbolo | se entiende como una forma de trabajar con dos caminos o nodos a la vez dentro de una expresión XPath. Es como decirle al programa que tenga en cuenta dos sitios al mismo tiempo.\n\nEjemplo:\nSi quieres señalar dos partes distintas de un documento, el símbolo | permite unir esas dos selecciones en una misma expresión.\n\nPor qué esa es la buena:\nPorque en el criterio de corrección de este test, | se interpreta como que permite computar dos nodos simultáneos.\n\nPor qué las otras no:\n- B no es correcta porque | no se usa para dividir valores.\n- C no es la opción que da por válida este examen.\n- D no es correcta porque ese símbolo sí se emplea en XPath."
  },
  {
    "id": 23,
    "pregunta": "Entre los elementos secundarios de channel, el elemento ttl:",
    "opciones": [
      "A. Marca la fecha de publicación.",
      "B. El tipo de licencia.",
      "C. Marca el tiempo de actualización en el caché.",
      "D. Todas las anteriores son incorrectas."
    ],
    "respuesta_correcta": "C. Marca el tiempo de actualización en el caché.",
    "explicacion": "Explicación fácil:\nEl elemento ttl en un canal RSS sirve para indicar cuánto tiempo puede pasar antes de volver a comprobar si hay contenido nuevo. Es como decir cada cuánto rato conviene mirar si algo ha cambiado.\n\nEjemplo:\nSi un feed tiene un ttl de cierto tiempo, el lector no va a estar preguntando cada segundo, sino cuando toque volver a actualizar.\n\nPor qué esa es la buena:\nPorque ttl está relacionado con el tiempo de vida en caché y la actualización del canal.\n\nPor qué las otras no:\n- A no es correcta porque no marca la fecha de publicación.\n- B no es correcta porque no indica el tipo de licencia.\n- D no es correcta porque C sí es correcta."
  },
  {
    "id": 24,
    "pregunta": "HTML son las siglas de:",
    "opciones": [
      "A. Hypertext Markup Language",
      "B. Hypertext Medium Language.",
      "C. Hyperlink Meta List.",
      "D. Hiperlink Mask Line"
    ],
    "respuesta_correcta": "A. Hypertext Markup Language",
    "explicacion": "Explicación fácil:\nHTML es el lenguaje básico con el que se construyen las páginas web. Sus siglas significan Hypertext Markup Language.\n\nEjemplo:\nCon HTML puedes poner títulos, párrafos, enlaces, imágenes y muchas otras partes de una página.\n\nPor qué esa es la buena:\nPorque ese es el significado correcto de las siglas HTML.\n\nPor qué las otras no:\n- B no es correcta porque ese desarrollo no existe.\n- C no es correcta porque no corresponde al significado real de HTML.\n- D no es correcta porque también es una formulación incorrecta."
  },
  {
    "id": 25,
    "pregunta": "La estructura de XML consta de:",
    "opciones": [
      "A. Prólogo y directorio.",
      "B. Índice y cuerpo.",
      "C. Prólogo y cuerpo.",
      "D. Todas las anteriores son incorrectas"
    ],
    "respuesta_correcta": "C. Prólogo y cuerpo.",
    "explicacion": "Explicación fácil:\nUn documento XML se divide de forma básica en dos grandes partes. Primero va el prólogo, que es la parte inicial con datos como la versión, y luego va el cuerpo, que contiene la información del documento.\n\nEjemplo:\nLa línea <?xml version=\"1.0\" encoding=\"UTF-8\"?> sería parte del prólogo, y las etiquetas con los datos formarían el cuerpo.\n\nPor qué esa es la buena:\nPorque la estructura básica de XML se compone de prólogo y cuerpo.\n\nPor qué las otras no:\n- A no es correcta porque directorio no es la parte que se usa en esta estructura.\n- B no es correcta porque índice no es la denominación habitual en XML.\n- D no es correcta porque C sí es correcta."
  },
  {
    "id": 26,
    "pregunta": "La información XML se puede almacenar en forma de:",
    "opciones": [
      "A. Archivos javascript",
      "B. Ficheros",
      "C. JSON",
      "D. Bases de en MySQL"
    ],
    "respuesta_correcta": "B. Ficheros",
    "explicacion": "Explicación fácil:\nLo más normal es guardar la información XML en archivos, es decir, en ficheros. Es como guardar un documento en una carpeta del ordenador para abrirlo cuando quieras.\n\nEjemplo:\nUn archivo llamado datos.xml es un fichero que guarda información en formato XML.\n\nPor qué esa es la buena:\nPorque la forma básica y típica de almacenar información XML es en ficheros.\n\nPor qué las otras no:\n- A no es correcta porque un archivo javascript no es la forma que busca la pregunta para guardar XML.\n- C no es correcta porque JSON es otro formato distinto.\n- D no es correcta porque aunque en otros contextos puede haber almacenamiento en bases de datos, la respuesta que da por válida el examen es ficheros."
  },
  {
    "id": 27,
    "pregunta": "La seguridad de los ERP:",
    "opciones": [
      "A. No es muy alta, por lo que se deben implementar medidas por parte de la empresa.",
      "B. No es muy alta, pero un mínimo cuidado por parte de la empresa es suficiente.",
      "C. Es muy alta, por lo que no requiere de otras medidas por parte de la empresa.",
      "D. Es muy alta, pero, además, se recomienda que la empresa tome sus propias medidas de seguridad adicional"
    ],
    "respuesta_correcta": "D. Es muy alta, pero, además, se recomienda que la empresa tome sus propias medidas de seguridad adicional",
    "explicacion": "Explicación fácil:\nUn ERP suele tener buenas medidas de seguridad, pero eso no significa que la empresa pueda olvidarse del tema. Es como tener una puerta fuerte en casa: sigue siendo buena idea cerrar con llave y poner alarma si hace falta.\n\nEjemplo:\nAunque el ERP tenga seguridad, la empresa debe controlar usuarios, contraseñas, permisos y copias de seguridad.\n\nPor qué esa es la buena:\nPorque reconoce dos cosas a la vez: que el ERP puede ser seguro y que la empresa debe añadir medidas propias.\n\nPor qué las otras no:\n- A no es correcta porque parte de que la seguridad del ERP no es muy alta.\n- B no es correcta porque además de decir que no es muy alta, minimiza demasiado la protección necesaria.\n- C no es correcta porque nunca es buena idea pensar que no hacen falta más medidas."
  },
  {
    "id": 28,
    "pregunta": "La sintaxis FLOWR es un acrónimo de For, Let, Where, Order by y....",
    "opciones": [
      "A. Rearrange.",
      "B. React.",
      "C. Return.",
      "D. Remove."
    ],
    "respuesta_correcta": "C. Return.",
    "explicacion": "Explicación fácil:\nFLOWR es una forma de escribir consultas en XQuery. Cada letra representa una palabra. La última letra, la R, corresponde a Return, que es la parte donde dices qué quieres devolver como resultado.\n\nEjemplo:\nPrimero buscas datos con for, luego puedes filtrar, ordenar y al final con return indicas qué se muestra.\n\nPor qué esa es la buena:\nPorque en el acrónimo FLOWR, la R significa Return.\n\nPor qué las otras no:\n- A no es correcta porque Rearrange no forma parte de FLOWR.\n- B no es correcta porque React tampoco forma parte de FLOWR.\n- D no es correcta porque Remove no es la palabra usada en este acrónimo."
  },
  {
    "id": 29,
    "pregunta": "Las bases de datos XML enabled son:",
    "opciones": [
      "A. Bases de datos no nativas.",
      "B. Bases de datos relacionales.",
      "C. Bases de datos que trabajan con XML.",
      "D. Todas las anteriores son correctas."
    ],
    "respuesta_correcta": "D. Todas las anteriores son correctas.",
    "explicacion": "Explicación fácil:\nUna base de datos XML enabled no está hecha desde cero solo para XML, pero sí está preparada para trabajar con ese tipo de datos. Normalmente se apoya en bases de datos que ya existen, como las relacionales, y les añade esa capacidad.\n\nEjemplo:\nUna base de datos tradicional puede guardar y manejar documentos XML aunque no sea una base nativa XML.\n\nPor qué esa es la buena:\nPorque en este contexto se consideran correctas las tres ideas: que son no nativas, que pueden ser relacionales y que trabajan con XML.\n\nPor qué las otras no:\n- A por sí sola no es la única correcta, porque la pregunta admite más características.\n- B por sí sola no es la única correcta, porque también importa que trabajen con XML.\n- C por sí sola no es la única correcta, porque el test da por válidas las tres anteriores."
  },
  {
    "id": 30,
    "pregunta": "Las marcas de cierre:",
    "opciones": [
      "A. Son iguales que las de apertura.",
      "B. Se marcan con ?.",
      "C. Se marcan con =.",
      "D. Se marcan con /."
    ],
    "respuesta_correcta": "D. Se marcan con /.",
    "explicacion": "Explicación fácil:\nCuando una etiqueta se cierra, se añade una barra para indicar que ya termina. Es como poner una señal de fin.\n\nEjemplo:\n<titulo>Hola</titulo>\nLa primera etiqueta abre y la segunda cierra porque lleva /.\n\nPor qué esa es la buena:\nPorque las marcas de cierre se identifican con la barra /.\n\nPor qué las otras no:\n- A no es correcta porque las de cierre no son iguales a las de apertura: llevan /.\n- B no es correcta porque ? no marca el cierre de una etiqueta normal.\n- C no es correcta porque = tampoco se usa para cerrar etiquetas."
  },
  {
    "id": 31,
    "pregunta": "Los agregadores pueden ser:",
    "opciones": [
      "A. Online.",
      "B. De escritorio.",
      "C. De clientes de correo web y navegadores web.",
      "D. Todas las anteriores son correctas."
    ],
    "respuesta_correcta": "D. Todas las anteriores son correctas.",
    "explicacion": "Explicación fácil:\nUn agregador es una herramienta que recoge noticias o novedades de varios sitios. Eso se puede hacer desde una web, desde un programa instalado en el ordenador o incluso desde algunos correos y navegadores.\n\nEjemplo:\nPuedes leer novedades de varias páginas desde un lector online, desde una aplicación en tu equipo o desde herramientas integradas en otros programas.\n\nPor qué esa es la buena:\nPorque los agregadores pueden existir en todas esas formas.\n\nPor qué las otras no:\n- A por sí sola no es la única correcta, porque no solo pueden ser online.\n- B por sí sola no es la única correcta, porque también pueden ser de otros tipos.\n- C por sí sola no es la única correcta, porque no es la única forma posible."
  },
  {
    "id": 32,
    "pregunta": "Los lenguajes de marcas se pueden utilizar en:",
    "opciones": [
      "A. Páginas web.",
      "B. Mensajería instantánea.",
      "C. Sindicación de contenidos.",
      "D. Todas son correctas."
    ],
    "respuesta_correcta": "D. Todas son correctas.",
    "explicacion": "Explicación fácil:\nLos lenguajes de marcas sirven para estructurar información, y eso se puede aprovechar en muchos sitios distintos. No se usan solo en páginas web.\n\nEjemplo:\nHTML se usa en páginas web, XML puede aparecer en mensajería y también en sistemas de sindicación como RSS o Atom.\n\nPor qué esa es la buena:\nPorque los lenguajes de marcas pueden utilizarse en todos esos ámbitos.\n\nPor qué las otras no:\n- A por sí sola no es la única correcta, porque también se usan en otros contextos.\n- B por sí sola no es la única correcta, porque no es el único uso posible.\n- C por sí sola no es la única correcta, porque tampoco es el único caso."
  },
  {
    "id": 33,
    "pregunta": "Los sistemas de gestión empresarial requieren de múltiples herramientas, por lo que:",
    "opciones": [
      "A. Se recomienda emplear múltiples herramientas específicas individuales.",
      "B. Se recomiendo realizarlo todo en una única herramienta, aunque no sea lo ideal.",
      "C. Se recomienda emplear un único sistema con diversas herramientas incorporadas, para evitar problemas de incompatibilidad.",
      "D. Lo sistemas de gestión empresarial deben hacer uso de una única herramienta."
    ],
    "respuesta_correcta": "C. Se recomienda emplear un único sistema con diversas herramientas incorporadas, para evitar problemas de incompatibilidad.",
    "explicacion": "Explicación fácil:\nCuando una empresa usa muchas partes distintas, lo mejor es que estén integradas en un mismo sistema. Así evitas que unas herramientas choquen con otras o que haya datos repetidos o mal pasados.\n\nEjemplo:\nEs mejor tener ventas, almacén y facturación dentro de un sistema conectado que usar muchos programas separados que no se entienden bien entre sí.\n\nPor qué esa es la buena:\nPorque un único sistema con varias herramientas incorporadas ayuda a evitar incompatibilidades y mejora la gestión.\n\nPor qué las otras no:\n- A no es correcta porque usar muchas herramientas separadas suele generar más problemas de coordinación.\n- B no es correcta porque está mal enfocada y además dice que no es lo ideal.\n- D no es correcta porque no se trata de una sola herramienta simple, sino de un sistema integrado con varias funciones."
  },
  {
    "id": 34,
    "pregunta": "Los tres pilares de los CRM son:",
    "opciones": [
      "A. Marketing, venta y servicio postventa.",
      "B. Marketing, compra y servicio postventa.",
      "C. Marketing, venta y análisis.",
      "D. Marketing, compra y análisis."
    ],
    "respuesta_correcta": "A. Marketing, venta y servicio postventa.",
    "explicacion": "Explicación fácil:\nUn CRM está pensado para gestionar la relación con los clientes. Esa relación empieza al atraerlos, sigue al venderles y continúa después para atenderlos.\n\nEjemplo:\nPrimero una empresa hace campañas de marketing, luego vende un producto y después resuelve dudas o incidencias del cliente.\n\nPor qué esa es la buena:\nPorque los tres pilares básicos de un CRM son marketing, venta y servicio postventa.\n\nPor qué las otras no:\n- B no es correcta porque compra no forma parte de esos tres pilares básicos.\n- C no es correcta porque análisis puede existir, pero no sustituye al servicio postventa como pilar principal aquí.\n- D no es correcta porque mezcla compra y análisis, que no son la combinación correcta en esta pregunta."
  },
  {
    "id": 35,
    "pregunta": "Qué tipo de sindicación se utiliza en este documento XML.",
    "imagen": "images/lenguaje-marcas/pregunta35.png",
    "opciones": [
      "A. FeedTe.",
      "B. RSS.",
      "C. ATOM.",
      "D. Todos los anteriores son incorrectos."
    ],
    "respuesta_correcta": "C. ATOM.",
    "explicacion": "Explicación fácil:\nCuando un documento XML pertenece a Atom, suele verse por detalles típicos de ese formato, como la etiqueta feed y otras etiquetas propias de ese tipo de sindicación.\n\nEjemplo:\nSi en el documento aparece algo como <feed> y una referencia al espacio de nombres de Atom, eso indica que se trata de ATOM.\n\nPor qué esa es la buena:\nPorque el documento del examen corresponde a una sindicación de tipo ATOM.\n\nPor qué las otras no:\n- A no es correcta porque FeedTe no es la opción válida del documento mostrado.\n- B no es correcta porque en este caso no corresponde a RSS.\n- D no es correcta porque sí hay una opción correcta, que es C."
  },
  {
    "id": 36,
    "pregunta": "RSS hace referencia a:",
    "opciones": [
      "A. Really Simple Syndication.",
      "B. Real Sindication Simple .",
      "C. Real Sindicate Simplified.",
      "D. Todas las anteriores son incorrectas."
    ],
    "respuesta_correcta": "A. Really Simple Syndication.",
    "explicacion": "Explicación fácil:\nRSS es el nombre que se usa para un sistema de sindicación de contenidos. Sus siglas significan Really Simple Syndication.\n\nEjemplo:\nCuando una web publica noticias y permite suscribirse a sus novedades, muchas veces lo hace mediante RSS.\n\nPor qué esa es la buena:\nPorque ese es el desarrollo correcto de las siglas RSS.\n\nPor qué las otras no:\n- B no es correcta porque las palabras están mal formuladas.\n- C no es correcta porque tampoco corresponde al significado real.\n- D no es correcta porque A sí es correcta."
  },
  {
    "id": 37,
    "pregunta": "Un texto que se encuentra en un símbolo menor que (<) y otro símbolo mayor que (>) se denomina:",
    "opciones": [
      "A. Elemento.",
      "B. Gramática.",
      "C. Etiqueta.",
      "D. Atributo."
    ],
    "respuesta_correcta": "C. Etiqueta.",
    "explicacion": "Explicación fácil:\nCuando ves algo escrito entre los símbolos < y >, eso es una etiqueta. Es la marca que se usa para indicar qué tipo de dato o parte del documento estás escribiendo.\n\nEjemplo:\n<titulo> es una etiqueta.\n</titulo> también es una etiqueta.\n\nPor qué esa es la buena:\nPorque el texto que va entre < y > recibe el nombre de etiqueta.\n\nPor qué las otras no:\n- A no es correcta porque un elemento suele incluir más cosas, no solo la marca.\n- B no es correcta porque gramática no es el nombre de esa parte.\n- D no es correcta porque un atributo va dentro de una etiqueta, pero no es la propia etiqueta."
  },
  {
    "id": 38,
    "pregunta": "XML se incluye en el tipo de lenguaje de marcas:",
    "opciones": [
      "A. Tipo 1 o de procedimiento.",
      "B. Tipo 2 o de presentación.",
      "C. Tipo 3 o descriptivos o semánticos.",
      "D. En todos los anteriores."
    ],
    "respuesta_correcta": "C. Tipo 3 o descriptivos o semánticos.",
    "explicacion": "Explicación fácil:\nXML no está pensado para decir cómo se ve algo, sino para describir qué es cada dato y cómo se organiza. Por eso se considera un lenguaje descriptivo o semántico.\n\nEjemplo:\nSi pones <autor> o <precio> en XML, estás describiendo el significado del dato, no su color ni su tamaño en pantalla.\n\nPor qué esa es la buena:\nPorque XML pertenece al grupo de lenguajes de marcas descriptivos o semánticos.\n\nPor qué las otras no:\n- A no es correcta porque XML no es un lenguaje de procedimiento.\n- B no es correcta porque no es un lenguaje de presentación.\n- D no es correcta porque no pertenece a todos los tipos anteriores."
  },
  {
    "id": 39,
    "pregunta": "XSL-FOR son las siglas de:",
    "opciones": [
      "A. extensible stylesheet language formatting.",
      "B. extensible stylesheet language formatting objects reload.",
      "C. XML stylesheets language for transformation.",
      "D. XSL-FOR no existe."
    ],
    "respuesta_correcta": "D. XSL-FOR no existe.",
    "explicacion": "Explicación fácil:\nLa trampa de esta pregunta está en el nombre. XSL-FOR no es una sigla real en este tema. Se parece a otros nombres de XSL, pero escrito así no existe.\n\nEjemplo:\nEn estos contenidos sí aparecen nombres como XSLT o XSL-FO, pero XSL-FOR no es una denominación correcta.\n\nPor qué esa es la buena:\nPorque XSL-FOR, tal como está escrito en la pregunta, no existe.\n\nPor qué las otras no:\n- A no es correcta porque no corresponde a una sigla válida con ese nombre.\n- B no es correcta porque añade palabras que no forman una denominación real.\n- C no es correcta porque esa descripción corresponde a otra cosa distinta."
  },
  {
    "id": 40,
    "pregunta": "XSLT requiere la entrada de:",
    "opciones": [
      "A. Una hoja de estilo.",
      "B. Dos hojas de estilo.",
      "C. Una hoja de estilo y un documento XML.",
      "D. Dos documentos XML."
    ],
    "respuesta_correcta": "C. Una hoja de estilo y un documento XML.",
    "explicacion": "Explicación fácil:\nXSLT se usa para transformar un documento XML siguiendo unas reglas. Para hacer eso necesita dos cosas: el documento XML que quieres transformar y la hoja de estilo que dice cómo hacerlo.\n\nEjemplo:\nTienes un XML con datos de libros y una hoja XSLT que indica cómo convertir esos datos en otra salida, por ejemplo HTML.\n\nPor qué esa es la buena:\nPorque XSLT necesita un documento XML de entrada y una hoja de estilo con las instrucciones de transformación.\n\nPor qué las otras no:\n- A no es correcta porque solo con la hoja de estilo no hay nada que transformar.\n- B no es correcta porque no hacen falta dos hojas de estilo.\n- D no es correcta porque no se necesitan dos documentos XML, sino un XML y una hoja XSLT."
  },
{
    "id": 41,
    "pregunta": "El intercambio de datos entre diferentes aplicaciones es posible gracias a:",
    "opciones": [
      "A. Los lenguajes de marcado.",
      "B. El texto plano.",
      "C. Los editores.",
      "D. Windows."
    ],
    "respuesta_correcta": "A. Los lenguajes de marcado.",
    "explicacion": "El temario especifica que el ámbito de aplicación de los lenguajes de marcas es muy diverso, ya que permite el intercambio de datos entre distintas aplicaciones, independientemente de la plataforma y la tecnología utilizada."
  },
  {
    "id": 42,
    "pregunta": "Elige la respuesta que describe el texto plano (plain text) en el contexto de lenguajes de marcas:",
    "opciones": [
      "A. Un formato de texto que permite almacenar información con formato.",
      "B. Documentos que pueden contener elementos de programación.",
      "C. Documentos formados exclusivamente por caracteres sin formato adicional.",
      "D. Documentos que incluyen automáticamente elementos multimedia como imágenes y videos."
    ],
    "respuesta_correcta": "C. Documentos formados exclusivamente por caracteres sin formato adicional.",
    "explicacion": "Los documentos de texto plano se caracterizan por no incluir formatos adicionales (ni tamaño, ni color de letras); únicamente contienen texto en un formato estándar almacenando caracteres básicos."
  },
  {
    "id": 43,
    "pregunta": "El tipo de lenguaje de marca que se usa para describir datos de manera estructurada y semántica en documentos y aplicaciones web es:",
    "opciones": [
      "A. Tipo 1 o de procedimiento",
      "B. Tipo 2 o de presentación",
      "C. Tipo 3 o descriptivos o semánticos",
      "D. En todos los anteriores"
    ],
    "respuesta_correcta": "C. Tipo 3 o descriptivos o semánticos",
    "explicacion": "Los lenguajes de marcas de Tipo 3 (descriptivos o semánticos) son los más flexibles, ya que sus etiquetas dan forma estructurada al contenido, e incluyen lenguajes web clave como XML y HTML."
  },
  {
    "id": 44,
    "pregunta": "La década en la que se empezaron a utilizar los lenguajes de marcado es:",
    "opciones": [
      "A. 1950.",
      "B. 1960.",
      "C. 1970.",
      "D. 1980."
    ],
    "respuesta_correcta": "B. 1960.",
    "explicacion": "Históricamente, los lenguajes de marcas comenzaron a utilizarse a finales de la década de los 60 con el propósito de introducir anotaciones dentro de documentos electrónicos."
  },
  {
    "id": 45,
    "pregunta": "Las dos principales organizaciones desarrolladoras de los lenguajes de marcas son:",
    "opciones": [
      "A. DTD y XML Esquema.",
      "B. ISO y W3C.",
      "C. ISO y Relax NG.",
      "D. W3C y DTD."
    ],
    "respuesta_correcta": "B. ISO y W3C.",
    "explicacion": "El temario destaca a dos grandes organizaciones responsables del desarrollo de estos lenguajes: la Organización Internacional para la Estandarización (ISO) y el World Wide Web Consortium (W3C)."
  },
  {
    "id": 46,
    "pregunta": "Los lenguajes de marcas se pueden utilizar en:",
    "opciones": [
      "A. Páginas web.",
      "B. Mensajería instantánea.",
      "C. Sindicación de contenidos.",
      "D. Todas son correctas."
    ],
    "respuesta_correcta": "D. Todas son correctas.",
    "explicacion": "Los lenguajes de marcas tienen usos muy diversos que abarcan la mensajería instantánea (ej. XMPP), las páginas web (HTML) y la sindicación de contenidos (RSS)."
  },
  {
    "id": 47,
    "pregunta": "XML se incluye en el tipo de lenguaje:",
    "opciones": [
      "A. Tipo 1 o de procedimiento.",
      "B. Tipo 2 o de presentación.",
      "C. Tipo 3 o descriptivos o semánticos.",
      "D. En todos los anteriores."
    ],
    "respuesta_correcta": "C. Tipo 3 o descriptivos o semánticos.",
    "explicacion": "Dentro de la clasificación de los lenguajes de marcas, el XML, al igual que el HTML, pertenece al grupo de lenguajes de Tipo 3 (descriptivos o semánticos)."
  },
  {
    "id": 48,
    "pregunta": "El nombre de un elemento que se encuentra entre un símbolo menor que (<) y otro símbolo mayor que (>) se denomina:",
    "opciones": [
      "A. Clase",
      "B. Gramática",
      "C. Etiqueta",
      "D. Atributo."
    ],
    "respuesta_correcta": "C. Etiqueta",
    "explicacion": "En la estructura de un documento de marcas, el texto que se ubica entre el símbolo menor que (<) y el símbolo mayor que (>) recibe el nombre de etiqueta o 'tag'."
  },
  {
    "id": 49,
    "pregunta": "Una de las características comunes de los lenguajes de marcas es:",
    "opciones": [
      "A. Ineficacia.",
      "B. Complejidad.",
      "C. Interactividad.",
      "D. Flexibilidad."
    ],
    "respuesta_correcta": "D. Flexibilidad.",
    "explicacion": "Entre las características comunes de los lenguajes de marcas se subraya que son flexibles y fáciles de crear, necesitando tan solo un editor de texto."
  },
  {
    "id": 50,
    "pregunta": "La función de una gramática en un documento de lenguaje de marcas es:",
    "opciones": [
      "A. Definir el lenguaje de programación utilizado.",
      "B. Definir el marcado permitido en el documento, el marcado requerido y cómo debe ser utilizado dicho marcado.",
      "C. Definir la ortografia en lenguajes de marcas.",
      "D. Establecer las reglas para la numeración de páginas en el documento."
    ],
    "respuesta_correcta": "B. Definir el marcado permitido en el documento, el marcado requerido y cómo debe ser utilizado dicho marcado.",
    "explicacion": "Todo documento de un lenguaje de marcas comparte una gramática; su función es definir el marcado permitido en esa clase, cuál es el requerido y cómo se debe utilizar dentro del propio documento."
  },
  {
      "id": 51,
      "pregunta": "Con qué programa podemos crear un documento HTML:",
      "opciones": [
        "A. Kompozer",
        "B. Bloc de Notas.",
        "C. HTML Online Editor.",
        "D. Todas las anteriores son correctas."
      ],
      "respuesta_correcta": "D. Todas las anteriores son correctas.",
      "explicacion": "Un documento HTML no deja de ser un archivo de texto plano. Por lo tanto, se puede crear con editores básicos (como el Bloc de Notas), editores visuales tipo WYSIWYG (como Kompozer) o editores en la nube (HTML Online Editor)."
    },
    {
      "id": 52,
      "pregunta": "CSS son las siglas de:",
      "opciones": [
        "A. Code Sheets Style.",
        "B. Code Style Sheets.",
        "C. Cascading Style Sheets.",
        "D. Cascading Sheets Style."
      ],
      "respuesta_correcta": "C. Cascading Style Sheets.",
      "explicacion": "Las siglas CSS significan 'Cascading Style Sheets', que se traduce como Hojas de Estilo en Cascada. Es el lenguaje encargado de definir la presentación y diseño visual de los documentos estructurados en HTML."
    },
    {
      "id": 53,
      "pregunta": "Documento que permite validar un documento XML:",
      "opciones": [
        "A. DTD.",
        "B. OS/2.",
        "C. SASS.",
        "D. Ninguna de las anteriores es correcta."
      ],
      "respuesta_correcta": "A. DTD.",
      "explicacion": "Como vimos desde la primera unidad, una DTD (Document Type Definition) es la gramática que define la estructura, los elementos permitidos y los atributos de un documento XML, sirviendo para validarlo."
    },
    {
      "id": 54,
      "pregunta": "Dreamweaver es:",
      "opciones": [
        "A. Una herramienta de diseño web de código abierto.",
        "B. Una herramienta de diseño web comercial.",
        "C. No es una herramienta de diseño web, sino de edición.",
        "D. Ninguna de las anteriores es correcta."
      ],
      "respuesta_correcta": "B. Una herramienta de diseño web comercial.",
      "explicacion": "Adobe Dreamweaver es un software propietario y de pago (comercial) enfocado en la creación, diseño y edición de sitios web, a diferencia de herramientas de código abierto que son gratuitas y libres."
    },
    {
      "id": 55,
      "pregunta": "En HTML la etiqueta <link> determina:",
      "opciones": [
        "A. La versión.",
        "B. Estándar empleado.",
        "C. Recursos externos, hojas de estilo.",
        "D. Estilos empleados."
      ],
      "respuesta_correcta": "C. Recursos externos, hojas de estilo.",
      "explicacion": "La etiqueta <link> se utiliza en la cabecera (<head>) del documento para vincular el archivo HTML actual con recursos externos. Su uso más habitual es cargar las hojas de estilo CSS externas."
    },
    {
      "id": 56,
      "pregunta": "HTML 5 surgió en el año:",
      "opciones": [
        "A. 1998.",
        "B. 2001.",
        "C. 2014.",
        "D. 2020."
      ],
      "respuesta_correcta": "C. 2014.",
      "explicacion": "Aunque los borradores y el desarrollo comenzaron mucho antes, la especificación final y recomendación oficial de HTML5 por parte del consorcio W3C se publicó en octubre de 2014."
    },
    {
      "id": 57,
      "pregunta": "Las esquinas redondeadas se pueden crear introduciendo:",
      "opciones": [
        "A. Solamente con un valor.",
        "B. Con uno o dos valores.",
        "C. Con uno, dos o tres valores.",
        "D. Con uno, dos, tres o cuatros valores."
      ],
      "respuesta_correcta": "D. Con uno, dos, tres o cuatros valores.",
      "explicacion": "La propiedad CSS 'border-radius' es muy flexible: permite un valor (aplica igual a las 4 esquinas), dos valores (diagonales), tres valores, o cuatro valores independientes (arriba-izquierda, arriba-derecha, abajo-derecha, abajo-izquierda)."
    },
    {
      "id": 58,
      "pregunta": "¿Cómo se asigna un valor a un atributo HTML?",
      "opciones": [
        "A. Mediante el signo +.",
        "B. Usando comillas dobles.",
        "C. Con un guion bajo.",
        "D. Usando el signo igual (=)."
      ],
      "respuesta_correcta": "D. Usando el signo igual (=).",
      "explicacion": "La sintaxis correcta en HTML para asignar el valor a un atributo requiere el uso del signo igual (=) justo después del nombre del atributo (por ejemplo: id='cabecera'). Las comillas envuelven el valor, pero el operador de asignación es el igual."
    },
    {
      "id": 59,
      "pregunta": "Los enlaces absolutos:",
      "opciones": [
        "A. Emplean una URL.",
        "B. Emplean archivos en el mismo servidor.",
        "C. Emplean archivos en la misma página.",
        "D. Ninguna de las anteriores es correcta."
      ],
      "respuesta_correcta": "A. Emplean una URL.",
      "explicacion": "Los enlaces absolutos apuntan a un destino proporcionando la URL (dirección) completa, incluyendo el protocolo (http/https) y el dominio de internet, sin importar en qué servidor esté alojada nuestra propia web."
    },
    {
      "id": 60,
      "pregunta": "No es una de las nuevas etiquetas HTML 5:",
      "opciones": [
        "A. dialog.",
        "B. figure.",
        "C. progress.",
        "D. form."
      ],
      "respuesta_correcta": "D. form.",
      "explicacion": "La etiqueta <form> existe desde las versiones clásicas de HTML para la creación de formularios. En cambio, <dialog>, <figure> y <progress> son etiquetas semánticas y de control introducidas específicamente como novedades en HTML5."
    },
    {
        "id": 61,
        "pregunta": "Además de Windows Gedit puede emplearse con:",
        "opciones": [
          "A. Uso en Windows y entornos como GNOME.",
          "B. Guardar y copiar texto.",
          "C. Uso en Windows.",
          "D. Distintos usos de fuentes."
        ],
        "respuesta_correcta": "A. Uso en Windows y entornos como GNOME.",
        "explicacion": "Gedit es un editor de texto plano muy conocido en el ecosistema Linux, siendo el editor oficial por defecto del entorno de escritorio GNOME, aunque también tiene versiones compatibles con Windows."
      },
      {
        "id": 62,
        "pregunta": "Con cual de estos podemos editar páginas web:",
        "opciones": [
          "A. Bloc de notas de Windows.",
          "B. Gedit.",
          "C. Notepad++.",
          "D. Todas las anteriores son correcta."
        ],
        "respuesta_correcta": "D. Todas las anteriores son correcta.",
        "explicacion": "Las páginas web (archivos HTML) y los documentos XML son archivos de texto plano. Por tanto, pueden crearse y editarse con cualquier editor de texto básico o avanzado, como el Bloc de Notas, Gedit o Notepad++."
      },
      {
        "id": 63,
        "pregunta": "El formato de codificación de caracteres generalmente empleado por XML es:",
        "opciones": [
          "A. uef-8.",
          "B. utf-8.",
          "C. uft-8.",
          "D. ufe-8."
        ],
        "respuesta_correcta": "B. utf-8.",
        "explicacion": "La codificación estándar y más utilizada globalmente para documentos XML (y web en general) para representar caracteres de forma universal es UTF-8 (Unicode Transformation Format)."
      },
      {
        "id": 64,
        "pregunta": "En XML los valores siempre deben:",
        "opciones": [
          "A. Ser numéricos.",
          "B. Entrecomillarse.",
          "C. Ir entre símbolos de igual.",
          "D. Acotarse con los símbolos \"<\" y \">\"."
        ],
        "respuesta_correcta": "B. Entrecomillarse.",
        "explicacion": "Una de las reglas estrictas de sintaxis en XML es que todos los valores de los atributos deben ir siempre encerrados entre comillas, ya sean dobles (\") o simples (')."
      },
      {
        "id": 65,
        "pregunta": "Señala la afirmación correcta:",
        "opciones": [
          "A. Los elementos XML no necesitan estar anidados correctamente.",
          "B. Un documento XML puede tener múltiples elementos raíz.",
          "C. La estructura de los documenta XML debe ser jerárquica con un único elemento raíz.",
          "D. No es necesario que los elementos se abran y cierren en el orden correcto."
        ],
        "respuesta_correcta": "C. La estructura de los documenta XML debe ser jerárquica con un único elemento raíz.",
        "explicacion": "Para que un documento XML esté 'bien formado', es obligatorio que todos los elementos estén contenidos dentro de un único elemento principal o padre, conocido como elemento raíz."
      },
      {
        "id": 66,
        "pregunta": "La estructura de XML consta de:",
        "opciones": [
          "A. Prólogo y directorio.",
          "B. &IACUTE;ndice y cuerpo.",
          "C. Prólogo y cuerpo.",
          "D. Todas las anteriores son incorrectas."
        ],
        "respuesta_correcta": "C. Prólogo y cuerpo.",
        "explicacion": "A nivel estructural, un documento XML se divide en dos partes principales: el prólogo (que contiene la declaración XML e información de configuración opcional) y el cuerpo (que contiene el elemento raíz y todos sus datos)."
      },
      {
        "id": 67,
        "pregunta": "La extensión predeterminada de los archivos del bloc de notas es:",
        "opciones": [
          "A. .txt.",
          "B. .doc.",
          "C. .docx.",
          "D. .xml."
        ],
        "respuesta_correcta": "A. .txt.",
        "explicacion": "El Bloc de Notas (Notepad) de Windows es un editor de texto sin formato, y guarda sus archivos por defecto con la extensión .txt (texto plano)."
      },
      {
        "id": 68,
        "pregunta": "Los lenguajes de marcas pueden ser de:",
        "opciones": [
          "A. Procedimiento.",
          "B. Presentación.",
          "C. Descriptivos.",
          "D. Todas las anteriores son correctas."
        ],
        "respuesta_correcta": "D. Todas las anteriores son correctas.",
        "explicacion": "Como se vio en la Unidad 1, los lenguajes de marcas se clasifican en tres tipos principales: de procedimiento (Tipo 1), de presentación (Tipo 2) y descriptivos o semánticos (Tipo 3)."
      },
      {
        "id": 69,
        "pregunta": "SGML son las siglas de:",
        "opciones": [
          "A. standard generalized markup language.",
          "B. sistem generalized markup language.",
          "C. synthesis generalized markup language.",
          "D. Es GSML no SGML."
        ],
        "respuesta_correcta": "A. standard generalized markup language.",
        "explicacion": "SGML significa Standard Generalized Markup Language. Es el lenguaje estándar de marcado generalizado del cual derivan lenguajes posteriores como HTML y XML."
      },
      {
        "id": 70,
        "pregunta": "¿Cuál de las siguientes características no es comúnmente proporcionada por Notepad++?",
        "opciones": [
          "A. Autocompletado.",
          "B. Búsqueda y reemplazo.",
          "C. Resultado de sintaxis.",
          "D. Edición de imágenes."
        ],
        "respuesta_correcta": "D. Edición de imágenes.",
        "explicacion": "Notepad++ es un editor de código fuente y texto enriquecido para programación (ofrece resaltado de sintaxis, autocompletado y búsqueda avanzada), pero no es un programa de diseño gráfico, por lo que no permite la edición de imágenes."
      },
      {
          "id": 71,
          "pregunta": "En el contexto de XML, el término Case Sensitive se refiere a:",
          "opciones": [
            "A. Cualidad que permite referenciar elementos DTD.",
            "B. Propiedad que permite distinguir entre mayúsculas y minúsculas.",
            "C. Cualidad de los elementos de consulta que permite asignar valores.",
            "D. Ninguna de las anteriores es correcta."
          ],
          "respuesta_correcta": "B. Propiedad que permite distinguir entre mayúsculas y minúsculas.",
          "explicacion": "En la sintaxis de XML, 'Case Sensitive' significa que el lenguaje distingue estrictamente entre letras mayúsculas y minúsculas. Por lo tanto, una etiqueta llamada <Texto> es completamente diferente a <texto> o <TEXTO>."
        },
        {
          "id": 72,
          "pregunta": "Cuál no es una herramienta de creación y edición de XML:",
          "opciones": [
            "A. Stylus Studio.",
            "B. Oxygen XML.",
            "C. Excharger XN1L Editor.",
            "D. Todas las anteriores son herramientas de creación y edición de XML."
          ],
          "respuesta_correcta": "D. Todas las anteriores son herramientas de creación y edición de XML.",
          "explicacion": "En el mercado existen multitud de entornos de desarrollo integrados (IDE) y editores específicos para trabajar con XML de forma profesional, entre los que destacan clásicos como Stylus Studio, el popular Oxygen XML y Exchanger XML Editor."
        },
        {
          "id": 73,
          "pregunta": "Del lenguaje XML surgieron otros como:",
          "opciones": [
            "A. XHTML.",
            "B. MathML.",
            "C. SVG.",
            "D. Todos los anteriores son correctos."
          ],
          "respuesta_correcta": "D. Todos los anteriores son correctos.",
          "explicacion": "XML es un metalenguaje, es decir, un lenguaje utilizado para crear otros lenguajes. Gracias a su versatilidad, surgieron lenguajes estructurados derivados como XHTML (para web), MathML (para expresiones matemáticas) y SVG (para gráficos vectoriales)."
        },
        {
          "id": 74,
          "pregunta": "DTD es:",
          "opciones": [
            "A. Un sistema numérico.",
            "B. Un tipo de atributo.",
            "C. Un documento de verificación.",
            "D. Un tipo de etiqueta."
          ],
          "respuesta_correcta": "C. Un documento de verificación.",
          "explicacion": "Una DTD (Definición de Tipo de Documento) funciona como un documento de verificación o gramática que define la estructura legal, los elementos y atributos permitidos en un archivo XML, permitiendo validar si el documento es correcto."
        },
        {
          "id": 75,
          "pregunta": "El prólogo del documento XML se marca con:",
          "opciones": [
            "A. <= ... =>.",
            "B. <\" ... \">.",
            "C. < ... >.",
            "D. <? ...?>."
          ],
          "respuesta_correcta": "D. <? ...?>.",
          "explicacion": "La primera línea de un documento XML bien formado suele ser el prólogo (o declaración XML), que indica la versión y la codificación. Su sintaxis estricta exige que esté encerrado entre los símbolos especiales <? y ?> (por ejemplo: <?xml version=\"1.0\"?>)."
        },
        {
          "id": 76,
          "pregunta": "El valor #IMPLIED de DTD implica que el atributo:",
          "opciones": [
            "A. Es obligatorio.",
            "B. Es opcional.",
            "C. Es fijo.",
            "D. Ninguna de las anteriores es correcta."
          ],
          "respuesta_correcta": "B. Es opcional.",
          "explicacion": "Dentro de la declaración de atributos en una DTD, la palabra clave #IMPLIED se utiliza para indicar que la presencia de ese atributo en la etiqueta no es obligatoria, es decir, es completamente opcional."
        },
        {
          "id": 77,
          "pregunta": "Las anotaciones con <![CDATA[ deben cerrarse con:",
          "opciones": [
            "A. ]!>.",
            "B. !]>.",
            "C. ]]>.",
            "D. ]!]>. "
          ],
          "respuesta_correcta": "C. ]]>.",
          "explicacion": "Las secciones CDATA (Character Data) se utilizan en XML para incluir bloques de texto que no deben ser interpretados por el analizador sintáctico (por ejemplo, fragmentos de código). Su sintaxis de apertura es <![CDATA[ y siempre deben cerrarse estrictamente con ]]>"
        },
        {
          "id": 78,
          "pregunta": "Las etiquetas XML:",
          "opciones": [
            "A. Pueden contener espacios.",
            "B. Deben estar acompañadas de los signos \"[\" y \"]\" para delimitarlas.",
            "C. No requieren el uso de los signos \"<\" y \">\" para delimitarlas.",
            "D. Deben estar acompañadas de los signos \"<\" y \">\" para delimitarlas."
          ],
          "respuesta_correcta": "D. Deben estar acompañadas de los signos \"<\" y \">\" para delimitarlas.",
          "explicacion": "La norma básica y universal de los lenguajes de marcado como XML es que todas las etiquetas (ya sean de apertura o de cierre) deben estar obligatoriamente delimitadas por los caracteres menor que (<) y mayor que (>)."
        },
        {
          "id": 79,
          "pregunta": "Selecciona el elemento XML correcto:",
          "opciones": [
            "A. <Texto></Text>",
            "B. <.Texto></.Texto>",
            "C. <Texto$></Texto$>",
            "D. <Texto />"
          ],
          "respuesta_correcta": "D. <Texto />",
          "explicacion": "La opción D es la única correcta porque representa un 'elemento vacío' perfectamente formado en XML, cerrándose a sí mismo con la barra al final. La A falla por Case Sensitive (Texto vs Text), la B porque los nombres no suelen empezar por punto como convención principal y la C porque el símbolo del dólar ($) no está permitido en los nombres de elementos XML."
        },
        {
          "id": 80,
          "pregunta": "Parser es:",
          "opciones": [
            "A. Un analizador sintáctico.",
            "B. Un modelo de base de datos No-SQL.",
            "C. Un nodo de XPath.",
            "D. Ninguna de las anteriores, Parser no existe."
          ],
          "respuesta_correcta": "A. Un analizador sintáctico.",
          "explicacion": "En el ecosistema XML, un 'parser' es un programa o componente de software que actúa como analizador sintáctico. Su función es leer el documento XML, procesar sus etiquetas y comprobar que el código está bien formado y cumple con las reglas."
        },
        {
            "id": 81,
            "pregunta": "Cuál es el símbolo faltante, marcado con (...), en esta etiqueta xsl, <xsl(...)value-of:",
            "opciones": [
              "A. =, igual.",
              "B. ?, interrogación.",
              "C. _, barra baja.",
              "D. :, Dos puntos."
            ],
            "respuesta_correcta": "D. :, Dos puntos.",
            "explicacion": "En la sintaxis de XSLT, los elementos del lenguaje siempre pertenecen al espacio de nombres (namespace) de XSL. Para separarlo del nombre de la etiqueta, se utilizan obligatoriamente los dos puntos (:), quedando la etiqueta estructurada como <xsl:value-of>."
          },
          {
            "id": 82,
            "pregunta": "El concepto de paquete:",
            "opciones": [
              "A. No existe en XSLT.",
              "B. Se introduce en la versión 2.0.",
              "C. Se introduce en la versión 3.0.",
              "D. Ninguna de las anteriores es correcta."
            ],
            "respuesta_correcta": "B. Se introduce en la versión 2.0.",
            "explicacion": "El concepto de 'paquete' (packages) para permitir una mayor modularidad y reutilización de código en proyectos grandes fue una de las grandes novedades introducidas oficialmente en la especificación de XSLT 3.0."
          },
          {
            "id": 83,
            "pregunta": "En las hojas de estilo XSL el símbolo / en solitario indica:",
            "opciones": [
              "A. Un comentario.",
              "B. Un atributo.",
              "C. Un valor.",
              "D. Todos los anteriores son correctos."
            ],
            "respuesta_correcta": "C. Un valor.",
            "explicacion": "Nota didáctica: En el estándar XPath/XSLT real, el símbolo '/' en solitario representa el 'nodo raíz' del documento XML. Sin embargo, en el contexto de este test específico, la opción esperada suele agrupar respuestas anteriores por error de formulación del examen. Técnicamente, ninguna de las opciones A, B o C es correcta, por lo que un examen sin erratas debería marcar 'Ninguna de las anteriores'."
          },
          {
            "id": 84,
            "pregunta": "La etiqueta <xsl:choose> permite:",
            "opciones": [
              "A. Delimitar un elemento seleccionado.",
              "B. Seleccionar un elemento seleccionado.",
              "C. Seleccionar diversos elementos.",
              "D. Todas las anteriores son incorrectas."
            ],
            "respuesta_correcta": "C. Seleccionar diversos elementos.",
            "explicacion": "La etiqueta <xsl:choose> funciona de manera idéntica a una estructura 'switch' en programación. Se utiliza en combinación con múltiples etiquetas <xsl:when> para evaluar diferentes condiciones y seleccionar entre diversos elementos o caminos posibles."
          },
          {
            "id": 85,
            "pregunta": "La transformación XSLT da como resultado:",
            "opciones": [
              "A. Un solo documento de salida.",
              "B. Dos documentos de salida.",
              "C. Tres documentos de salida.",
              "D. XSLT no produce transformaciones."
            ],
            "respuesta_correcta": "A. Un solo documento de salida.",
            "explicacion": "En su funcionamiento estándar (especialmente en XSLT 1.0), al aplicar una hoja de estilo sobre un documento XML, el motor de transformación procesa la entrada y genera como resultado un único árbol o documento de salida (que puede ser XML, HTML o texto plano)."
          },
          {
            "id": 86,
            "pregunta": "Oxygen XML Editor permite:",
            "opciones": [
              "A. La edición estructurada de XML.",
              "B. El empleo de herramientas de validación.",
              "C. Depuración de XSLT.",
              "D. Todas las anteriores son correctas."
            ],
            "respuesta_correcta": "D. Todas las anteriores son correctas.",
            "explicacion": "Oxygen XML Editor es uno de los IDEs más completos del mercado. Integra funcionalidades avanzadas que abarcan tanto la edición visual estructurada, como validación frente a esquemas (DTD, XSD) y un potente depurador (debugger) para transformaciones XSLT."
          },
          {
            "id": 87,
            "pregunta": "Saxon es:",
            "opciones": [
              "A. Es un procesador XSLT.",
              "B. Una herramienta para validar HTML.",
              "C. Una herramienta para trabajar con XHTML.",
              "D. Ninguna de las anteriores Saxon no existe."
            ],
            "respuesta_correcta": "A. Es un procesador XSLT.",
            "explicacion": "Saxon es uno de los procesadores XSLT y XQuery más populares, potentes y utilizados a nivel mundial. Su función es tomar un documento XML y una hoja de estilos XSLT, ejecutarlos y generar el resultado final."
          },
          {
            "id": 88,
            "pregunta": "Una style sheets es:",
            "opciones": [
              "A. Una hoja de estilo.",
              "B. Un estilo de escritura.",
              "C. Un estilo de codificación.",
              "D. Es style sheeps no style sheets."
            ],
            "respuesta_correcta": "A. Una hoja de estilo.",
            "explicacion": "La traducción literal y técnica del término informático 'style sheet' (como en CSS o XSL) es 'hoja de estilo'. Se trata de un documento que contiene reglas para definir la presentación y el formato visual de otro documento estructurado."
          },
          {
            "id": 89,
            "pregunta": "XSL-FOR son las siglas de:",
            "opciones": [
              "A. extensible stylesheet language formatting.",
              "B. extensible stylesheet language formatting objects reload.",
              "C. XML stylesheets language for transformation.",
              "D. XSL-FOR no existe."
            ],
            "respuesta_correcta": "D. XSL-FOR no existe.",
            "explicacion": "El término 'XSL-FOR' es inventado y no existe en el ecosistema XML. El estándar real para objetos de formato es XSL-FO (Extensible Stylesheet Language Formatting Objects)."
          },
          {
            "id": 90,
            "pregunta": "XSLT requiere la entrada de:",
            "opciones": [
              "A. Una hoja de estilo.",
              "B. Dos hojas de estilo.",
              "C. Una hoja de estilo y un documento XML.",
              "D. Dos documentos XML."
            ],
            "respuesta_correcta": "C. Una hoja de estilo y un documento XML.",
            "explicacion": "Para que un procesador XSLT pueda realizar una transformación de manera efectiva, necesita obligatoriamente dos elementos de entrada: los datos origen (el documento XML) y las instrucciones de transformación (la hoja de estilo XSLT)."
          },
          {
              "id": 91,
              "pregunta": "En XPath “|” permite:",
              "opciones": [
                "A. Computar dos nodos simultáneos.",
                "B. Dividir los valores de dos nodos.",
                "C. Marcar una disyunción entre uno o más nodos entre los que elegir.",
                "D. Ninguna de las anteriores es correcta ese símbolo no se emplea."
              ],
              "respuesta_correcta": "A. Computar dos nodos simultáneos.",
              "explicacion": "En el lenguaje XPath, el operador tubería o 'pipe' (|) funciona como un operador de unión lógica o disyunción. Permite seleccionar un conjunto de nodos evaluando múltiples rutas a la vez (por ejemplo, seleccionar nodos A o nodos B simultáneamente)."
            },
            {
              "id": 92,
              "pregunta": "¿Cuál de los siguientes elementos se considera un nodo en XPath?",
              "opciones": [
                "A. Elemento.",
                "B. Texto.",
                "C. Atributo.",
                "D. Todas las anteriores son correctas."
              ],
              "respuesta_correcta": "D. Todas las anteriores son correctas.",
              "explicacion": "En el modelo jerárquico de XPath, un documento XML se trata como un árbol formado por diferentes tipos de nodos. Los más fundamentales incluyen los nodos de elemento, los nodos de atributo y los nodos de texto (además de comentarios, procesamiento, raíz y namespace)."
            },
            {
              "id": 93,
              "pregunta": "El valor atómico, en este tema, hace referencia a:",
              "opciones": [
                "A. Un tipo de base de datos.",
                "B. Un tipo de nodo.",
                "C. Un tipo de analizador sintáctico.",
                "D. Todos los anteriores son incorrectos."
              ],
              "respuesta_correcta": "B. Un tipo de nodo.",
              "explicacion": "En el modelo de datos de XPath/XQuery, un elemento puede ser un nodo o un valor atómico. Un valor atómico es un dato simple (como un número entero o una cadena de texto) que no posee jerarquía (ni nodos hijos ni padre), por lo que se diferencia explícitamente de los nodos y de las otras opciones."
            },
            {
              "id": 94,
              "pregunta": "En una dirección [last()-1] permite la selección de:",
              "opciones": [
                "A. El último elemento.",
                "B. El penúltimo elemento.",
                "C. Todos los elementos menos el último.",
                "D. Todas las anteriores son incorrectas."
              ],
              "respuesta_correcta": "B. El penúltimo elemento.",
              "explicacion": "En XPath, la función last() devuelve la posición del último nodo del conjunto que se está evaluando. Al restarle 1, matemáticamente estamos apuntando de forma exacta al elemento inmediatamente anterior, es decir, al penúltimo."
            },
            {
              "id": 95,
              "pregunta": "En el lenguaje XPath, la expresión de ruta \"/\" se utiliza para seleccionar:",
              "opciones": [
                "A. El nodo con un nombre específico",
                "B. El nodo raíz",
                "C. Selecciona el nodo actual",
                "D. Todas las anteriores son incorrectas"
              ],
              "respuesta_correcta": "B. El nodo raíz",
              "explicacion": "Una ruta absoluta en XPath comienza siempre con una barra diagonal única ('/'). Este símbolo representa el inicio del documento o, lo que es lo mismo, el nodo raíz del árbol XML desde el cual cuelgan todos los demás elementos."
            },
            {
              "id": 96,
              "pregunta": "Las bases de datos XML enabled son:",
              "opciones": [
                "A. Bases de datos no nativas.",
                "B. Bases de datos relacionales.",
                "C. Bases de datos que trabajan con XML.",
                "D. Todas las anteriores son correctas."
              ],
              "respuesta_correcta": "D. Todas las anteriores son correctas.",
              "explicacion": "Las bases de datos 'XML enabled' (habilitadas para XML) son sistemas de gestión clásicos (como las bases de datos relacionales tradicionales, que no son nativas XML) a los que se les ha añadido una capa o módulo de software para permitirles importar, exportar y trabajar con datos estructurados en XML."
            },
            {
              "id": 97,
              "pregunta": "Namespace es:",
              "opciones": [
                "A. Un tipo de lenguaje de consulta.",
                "B. Un elemento de XQuery.",
                "C. Un nodo de XPath.",
                "D. Ninguna de las anteriores."
              ],
              "respuesta_correcta": "C. Un nodo de XPath.",
              "explicacion": "Dentro de los siete tipos de nodos que define el modelo de datos de XPath, se encuentra el nodo de espacio de nombres (Namespace node). Su objetivo es evitar ambigüedades y colisiones cuando se utilizan etiquetas con el mismo nombre pero provenientes de vocabularios XML distintos."
            },
            {
              "id": 98,
              "pregunta": "No es una base de datos nativa:",
              "opciones": [
                "A. BaseX.",
                "B. BaseN.",
                "C. Sedna.",
                "D. eXist."
              ],
              "respuesta_correcta": "B. BaseN.",
              "explicacion": "En el mercado de las Bases de Datos XML Nativas (NXD), sistemas como BaseX, Sedna y eXist-db son muy conocidos y ampliamente utilizados. 'BaseN', por el contrario, no existe como un gestor nativo XML estándar."
            },
            {
              "id": 99,
              "pregunta": "Oracle Berkeley DB XML posee una licencia:",
              "opciones": [
                "A. De código abierto.",
                "B. BSD.",
                "C. LGPL.",
                "D. Apache."
              ],
              "respuesta_correcta": "A. De código abierto.",
              "explicacion": "Oracle Berkeley DB XML se distribuye mediante un modelo de doble licencia, ofreciendo una versión de código abierto (Open Source) para la comunidad, lo que permite su uso gratuito bajo ciertos términos, frente a la versión comercial propietaria."
            },
            {
              "id": 100,
              "pregunta": "¿Qué es XQuery?",
              "opciones": [
                "A. Lenguaje de consultas especializado en datos XML.",
                "B. Lenguaje de procesamiento de documentos XML",
                "C. Lenguaje de verificación empleado por DTD",
                "D. Todas las anteriores son incorrectas"
              ],
              "respuesta_correcta": "A. Lenguaje de consultas especializado en datos XML.",
              "explicacion": "XQuery es un lenguaje funcional fuertemente tipado diseñado por el W3C. Su principal objetivo es proporcionar una sintaxis potente y especializada para realizar consultas, extraer y manipular datos procedentes de documentos o bases de datos XML (al igual que SQL lo hace en bases de datos relacionales)."
            },
            {
                "id": 101,
                "pregunta": "Los agregadores pueden ser: _____",
                "opciones": [
                  "A. Online.",
                  "B. De escritorio.",
                  "C. De clientes de correo web y navegadores web.",
                  "D. Todas las anteriores son correctas."
                ],
                "respuesta_correcta": "D. Todas las anteriores son correctas.",
                "explicacion": "Los lectores de feeds o agregadores son herramientas muy versátiles y están disponibles en múltiples plataformas: como aplicaciones de escritorio instalables, integrados en navegadores o clientes de correo electrónico, y como servicios web (online)."
              },
              {
                "id": 102,
                "pregunta": "Elementos básicos de un feed que se deben introducir en channel:",
                "opciones": [
                  "A. Title, link y URL.",
                  "B. Title, link e imagen.",
                  "C. Title, URL y description.",
                  "D. Title, link y description."
                ],
                "respuesta_correcta": "D. Title, link y description.",
                "explicacion": "Según la especificación oficial de RSS 2.0, todo elemento <channel> requiere obligatoriamente tres etiquetas secundarias básicas para ser válido: <title> (el nombre del canal), <link> (la URL del sitio web) y <description> (una breve descripción del contenido)."
              },
              {
                "id": 103,
                "pregunta": "Entre los elementos secundarios de channel, el elemento ttl:",
                "opciones": [
                  "A. Marca la fecha de publicación.",
                  "B. El tipo de licencia.",
                  "C. Marca el tiempo de actualización en el caché.",
                  "D. Todas las anteriores son incorrectas."
                ],
                "respuesta_correcta": "C. Marca el tiempo de actualización en el caché.",
                "explicacion": "La etiqueta <ttl> significa 'Time To Live' (Tiempo de vida). Indica el número de minutos que un canal puede ser mantenido en la memoria caché del agregador antes de que este necesite solicitar una actualización al servidor."
              },
              {
                "id": 104,
                "pregunta": "Entre los elementos secundarios de item, el elemento pubDate designa la hora y fecha de publicación en formato:",
                "opciones": [
                  "A. RFC 733.",
                  "B. RFC 3501.",
                  "C. RFC 5322.",
                  "D. RFC 822."
                ],
                "respuesta_correcta": "D. RFC 822.",
                "explicacion": "La especificación del estándar RSS exige que las fechas y horas, como las utilizadas en el elemento <pubDate>, sigan estrictamente el formato de fecha y hora estándar de internet definido como RFC 822 (por ejemplo: Sat, 07 Sep 2002 00:00:01 GMT)."
              },
              {
                "id": 105,
                "pregunta": "Freeware es:",
                "opciones": [
                  "A. Un tipo licencia para software gratuito, pero con derechos de autor.",
                  "B. Un tipo de licencia para software de código abierto.",
                  "C. Un tipo de licencia para software de pago.",
                  "D. Ninguna de las anteriores es correcta."
                ],
                "respuesta_correcta": "A. Un tipo licencia para software gratuito, pero con derechos de autor.",
                "explicacion": "El software tipo Freeware se distribuye de forma gratuita para que cualquiera pueda usarlo, pero a diferencia del software libre u Open Source, su código fuente no es público y el creador original conserva todos los derechos de autor (copyright)."
              },
              {
                "id": 106,
                "pregunta": "Herramientas como FeedForAll:",
                "opciones": [
                  "A. Es una herramienta que permite la validación de feed.",
                  "B. Es una herramienta que permite la creación de feed.",
                  "C. Es una herramienta que permite la distribución de feed.",
                  "D. Todas las anteriores son correctas."
                ],
                "respuesta_correcta": "D. Todas las anteriores son correctas.",
                "explicacion": "FeedForAll es un software clásico y comercial diseñado específicamente para facilitar la creación, edición visual y publicación de canales RSS y podcasts, permitiendo a los usuarios generar estos archivos sin necesidad de escribir el código XML a mano."
              },
              {
                "id": 107,
                "pregunta": "La sindicalización no permite:",
                "opciones": [
                  "A. La subscripción.",
                  "B. Evitar el spam.",
                  "C. Acceder a noticias en tiempo real.",
                  "D. Permite todas las anteriores."
                ],
                "respuesta_correcta": "D. Permite todas las anteriores.",
                "explicacion": "Es una pregunta trampa. La sindicación de contenidos (RSS) ofrece múltiples ventajas: permite la suscripción cómoda a sitios web, evita el spam (ya que no necesitas dar tu correo electrónico para suscribirte) y facilita el acceso a actualizaciones casi en tiempo real desde un único lugar."
              },
              {
                "id": 108,
                "pregunta": "Otro tipo de sindicalización de contenido muy parecido a RSS es:",
                "opciones": [
                  "A. FeedTe.",
                  "B. REIS.",
                  "C. ATOM.",
                  "D. Todos los anteriores son incorrectos."
                ],
                "respuesta_correcta": "C. ATOM.",
                "explicacion": "Atom es el otro gran estándar de formato de sindicación web basado en XML. Fue creado por la comunidad como una alternativa moderna para superar algunas limitaciones técnicas y ambigüedades presentes en las primeras versiones del estándar RSS."
              },
              {
                "id": 109,
                "pregunta": "RSS hace referencia a:",
                "opciones": [
                  "A. Really Simple Syndication.",
                  "B. Real Sindication Simple .",
                  "C. Real Sindicate Simplified.",
                  "D. Todas las anteriores son incorrectas."
                ],
                "respuesta_correcta": "A. Really Simple Syndication.",
                "explicacion": "Aunque históricamente ha tenido otros significados en sus primeras versiones (como Rich Site Summary o RDF Site Summary), en su versión más popular y estandarizada globalmente (RSS 2.0), las siglas se asientan como 'Really Simple Syndication' (Sindicación Realmente Simple)."
              },
              {
                "id": 110,
                "pregunta": "URI se puede definir como:",
                "opciones": [
                  "A. Un identificador que incluye el subtipo URL",
                  "B. Localizador de datos",
                  "C. Unidad de Registro de Información",
                  "D. Validador de datos"
                ],
                "respuesta_correcta": "A. Un identificador que incluye el subtipo URL",
                "explicacion": "URI (Uniform Resource Identifier) es una cadena de caracteres que identifica de forma inequívoca un recurso en una red. Es un concepto global o 'paraguas' que engloba a otros subtipos más específicos, siendo el más famoso y utilizado la URL (Uniform Resource Locator)."
              },
              {
                  "id": 111,
                  "pregunta": "La seguridad de los ERP: _____",
                  "opciones": [
                    "A. No es muy alta, por lo que se deben implementar medidas por parte de la empresa.",
                    "B. No es muy alta, pero un mínimo cuidado por parte de la empresa es suficiente.",
                    "C. Es muy alta, por lo que no requiere de otras medidas por parte de la empresa.",
                    "D. Es muy alta, pero, además, se recomienda que la empresa tome sus propias medidas de seguridad adicionales."
                  ],
                  "respuesta_correcta": "D. Es muy alta, pero, además, se recomienda que la empresa tome sus propias medidas de seguridad adicionales.",
                  "explicacion": "Los sistemas ERP modernos cuentan con protocolos de seguridad muy altos y robustos por diseño. Sin embargo, al centralizar toda la información crítica de la organización, la buena práctica dicta que la empresa siempre debe implementar capas de seguridad adicionales (políticas de acceso, copias de seguridad, firewalls)."
                },
                {
                  "id": 112,
                  "pregunta": "Dentro de los ERP podemos encontrar el módulo TPV, el cual permite:",
                  "opciones": [
                    "A. La exposición masiva al público.",
                    "B. Controlar de manera eficaz la logística.",
                    "C. Mantener el inventario actualizado.",
                    "D. Mantener un registro de los recursos humanos."
                  ],
                  "respuesta_correcta": "C. Mantener el inventario actualizado.",
                  "explicacion": "El módulo TPV (Terminal Punto de Venta) está directamente conectado con el sistema central. Su principal ventaja en un ERP es que, al registrar una venta en mostrador o tienda, descuenta automáticamente el artículo vendido, permitiendo mantener el inventario completamente actualizado en tiempo real."
                },
                {
                  "id": 113,
                  "pregunta": "El último paso de la minería de datos es:",
                  "opciones": [
                    "A. La obtención de los patrones deseados",
                    "B. La verificación los patrones obtenidos.",
                    "C. Llevar a la puesta en práctica dicho patrón verificado.",
                    "D. Comprobar los resultados de dicho patrón una vez puesto en práctica."
                  ],
                  "respuesta_correcta": "B. La verificación los patrones obtenidos.",
                  "explicacion": "Dentro del proceso formal de extracción de conocimiento (KDD), tras aplicar los algoritmos y obtener los patrones (la minería en sí), el paso final es la evaluación o verificación de esos patrones para confirmar que son válidos, comprensibles y útiles antes de tomar decisiones de negocio con ellos."
                },
                {
                  "id": 114,
                  "pregunta": "El intercambio y almacenamiento de datos por parte de los ERP se suele hacer en:",
                  "opciones": [
                    "A. Ficheros CSV.",
                    "B. Ficheros XML.",
                    "C. Documentos ofimáticos.",
                    "D. Todas los anteriores son correctas."
                  ],
                  "respuesta_correcta": "D. Todas los anteriores son correctas.",
                  "explicacion": "Los ERP pueden intercambiar y almacenar datos usando distintos formatos, como ficheros CSV, ficheros XML y documentos ofimáticos, según el sistema y la necesidad. Por eso, según el criterio del test, la opción correcta es D: todas las anteriores son correctas."
                },
                {
                  "id": 115,
                  "pregunta": "El sistema de gestión CRM hace referencia a:",
                  "opciones": [
                    "A. Client Relation Management.",
                    "B. Client Relationship Management.",
                    "C. Customer Relationship Management.",
                    "D. Todas las anteriores son incorrectas."
                  ],
                  "respuesta_correcta": "C. Customer Relationship Management.",
                  "explicacion": "Las siglas CRM provienen del inglés 'Customer Relationship Management', que se traduce como Gestión de las Relaciones con los Clientes. Es el software diseñado para administrar todas las interacciones de la empresa con sus clientes actuales y potenciales."
                },
                {
                  "id": 116,
                  "pregunta": "La minería de datos, o data mining, permite:",
                  "opciones": [
                    "A. Hacer acopio de toda la información posible para encontrar patrones con dicha información.",
                    "B. Encontrar datos específicos dentro de grandes bases de datos.",
                    "C. Recopilar información, reducida, pero relevante.",
                    "D. Todas las anteriores son incorrectas."
                  ],
                  "respuesta_correcta": "A. Hacer acopio de toda la información posible para encontrar patrones con dicha información.",
                  "explicacion": "El objetivo principal del Data Mining no es buscar un dato concreto (para eso están las consultas SQL clásicas), sino procesar volúmenes masivos de información para descubrir tendencias, anomalías o patrones de comportamiento ocultos que aporten valor estratégico."
                },
                {
                  "id": 117,
                  "pregunta": "Los sistemas de gestión empresarial requieren de múltiples herramientas, por lo que:",
                  "opciones": [
                    "A. Se recomienda emplear múltiples herramientas específicas individuales.",
                    "B. Se recomiendo realizarlo todo en una única herramienta, aunque no sea lo ideal.",
                    "C. Se recomienda emplear un único sistema con diversas herramientas incorporadas, para evitar problemas de incompatibilidad.",
                    "D. Lo sistemas de gestión empresarial deben hacer uso de una única herramienta."
                  ],
                  "respuesta_correcta": "C. Se recomienda emplear un único sistema con diversas herramientas incorporadas, para evitar problemas de incompatibilidad.",
                  "explicacion": "Esta es la filosofía fundamental de los ERP. En lugar de tener programas aislados que no se comunican entre sí, se recomienda implementar un único sistema centralizado que incorpore todos los módulos (contabilidad, ventas, RRHH), garantizando la integridad de los datos y evitando incompatibilidades."
                },
                {
                  "id": 118,
                  "pregunta": "Los tres pilares de los CRM son:",
                  "opciones": [
                    "A. Marketing, venta y servicio postventa.",
                    "B. Marketing, compra y servicio postventa.",
                    "C. Marketing, venta y análisis.",
                    "D. Marketing, compra y análisis."
                  ],
                  "respuesta_correcta": "A. Marketing, venta y servicio postventa.",
                  "explicacion": "Un CRM gestiona el ciclo de vida completo del cliente basándose en tres pilares fundamentales: la captación a través del Marketing, la conversión mediante la Venta, y la fidelización/soporte a través del Servicio Postventa (atención al cliente)."
                },
                {
                  "id": 119,
                  "pregunta": "No es un CRM:",
                  "opciones": [
                    "A. Slack",
                    "B. Salesforce",
                    "C. SalesBoom",
                    "D. SugarCRM"
                  ],
                  "respuesta_correcta": "A. Slack",
                  "explicacion": "Salesforce, SalesBoom y SugarCRM son tres de las plataformas de CRM más conocidas del mercado. Por el contrario, Slack es una herramienta de comunicación y mensajería corporativa, no un sistema de gestión de relaciones con clientes."
                },
                {
                  "id": 120,
                  "pregunta": "OLAP es el acrónimo de:",
                  "opciones": [
                    "A. online analytical process.",
                    "B. online analysis processing.",
                    "C. offline analytical processing.",
                    "D. Ninguna de las anteriores."
                  ],
                  "respuesta_correcta": "D. Ninguna de las anteriores.",
                  "explicacion": "Las siglas OLAP significan exactamente 'Online Analytical Processing' (Procesamiento Analítico en Línea). Como ninguna de las opciones A, B o C está escrita de forma 100% correcta (process en lugar de processing, analysis en lugar de analytical, u offline en lugar de online), la respuesta correcta es la D."
                }
];
