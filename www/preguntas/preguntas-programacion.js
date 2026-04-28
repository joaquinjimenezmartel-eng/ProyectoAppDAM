const preguntasProgramacion = [
    {
        "id": 1,
        "pregunta": "¿Como podemos cerrar una conexión de la base de datos?",
        "opciones": [
            "A. No hay mecanismos para cerrar la conexión.",
            "B. Haciendo uso del método .close() sobre el objeto Connection",
            "C. Estableciendo en la conexión que se autocierre cuando no se use.",
            "D. Todas las anteriores son incorrectas."
        ],
        "respuesta_correcta": "B. Haciendo uso del método .close() sobre el objeto Connection",
        "explicacion": "Explicación fácil:\nLa conexión con la base de datos es como una puerta que abres para entrar a hablar con ella. Cuando terminas, tienes que cerrar la puerta para no dejarla abierta.\nEn programación, esa puerta se cierra con .close().\n\nEjemplo:\nSi tienes una conexión guardada en una variable llamada conexion, se cerraría así:\nconexion.close();\n\nPor qué esa es la buena:\nPorque en Java, cuando trabajas con bases de datos, el objeto Connection tiene precisamente ese método para cerrar la conexión de forma correcta.\n\nPor qué las otras no:\n- A es falsa, porque sí hay mecanismo para cerrarla.\n- C no es la forma normal ni correcta de responder a esta pregunta tipo test.\n- D es falsa, porque B sí es correcta."
    },
    {
        "id": 2,
        "pregunta": "¿Como podemos comprobar si un fichero o directorio existe?",
        "opciones": [
            "A. Usando isFile()",
            "B. Usando isDirectory()",
            "C. Usando exists()",
            "D. Usando getPath()"
        ],
        "respuesta_correcta": "C. Usando exists()",
        "explicacion": "Explicación fácil:\nSi quieres saber si algo está ahí de verdad en el ordenador, usas exists().\nEs como mirar si una caja existe antes de abrirla.\n\nEjemplo:\nImagina que tienes un fichero llamado foto.txt. Puedes preguntar:\nFile f = new File(\"foto.txt\");\nf.exists();\n\nSi devuelve true, es que sí existe.\nSi devuelve false, es que no está.\n\nPor qué las otras no:\n- A. isFile(): sirve para saber si es un fichero, pero no es la forma general de comprobar existencia.\n- B. isDirectory(): sirve para saber si es un directorio.\n- D. getPath(): solo te da la ruta, no comprueba si existe."
    },
    {
        "id": 3,
        "pregunta": "¿Cuál es la palabra reservada que convierte a un campo en común entre todos los objetos de una clase?",
        "opciones": [
            "A. static.",
            "B. getter.",
            "C. setter.",
            "D. Todas las anteriores son incorrectas."
        ],
        "respuesta_correcta": "A. Static.",
        "explicacion":"Explicación fácil:\nUn campo normal es como un juguete que tiene cada niño por separado.\nUn campo static es como un juguete único en clase que comparten todos.\n\nEso significa que ese dato no pertenece a un objeto concreto, sino a la clase entera.\n\nEjemplo:\nImagina una clase Coche.\n\n- Si color es normal, cada coche puede tener un color distinto.\n- Si ruedas fuera static, sería un dato común para todos los coches de esa clase.\n\nclass Coche {\n    static int ruedas = 4;\n}\n\nAquí no hace falta crear un coche para saber que tienen 4 ruedas, porque ese dato es común a todos.\n\nPor qué las otras no:\n- B. getter: no es una palabra reservada; es un método para leer un valor.\n- C. setter: tampoco es una palabra reservada; es un método para cambiar un valor.\n- D es falsa, porque la idea correcta sí está en la A."
    },
    {
        "id": 4,
        "pregunta": "¿Es posible cambiar el tamaño de un array durante su ejecución?",
        "opciones": [
            "A. Sí.",
            "B. Sí, solo cuando tenga un primer valor asignado.",
            "C. Sí, en cualquier momento.",
            "D. No, solo se puede indicar su tamaño en la declaración inicial."
        ],
        "respuesta_correcta": "D. No, solo se puede indicar su tamaño en la declaración inicial.",
        "explicacion": "Explicación fácil:\nUn array es como una caja con huecos fijos.\n\nSi haces una caja para 5 juguetes, esa caja ya nace con 5 huecos.\nLuego puedes cambiar qué metes dentro, pero no puedes hacer que la misma caja pase a tener 8 huecos.\n\nPor eso, el tamaño de un array no se cambia durante la ejecución. Si necesitas más espacio, normalmente creas otro array nuevo más grande.\n\nEjemplo:\nint[] numeros = new int[3];\n\nAquí el array tiene 3 huecos.\nPuedes guardar números dentro, por ejemplo:\nnumeros[0] = 10;\nnumeros[1] = 20;\nnumeros[2] = 30;\n\nPero no puedes convertir ese mismo array en uno de 5 posiciones.\nTendrías que crear otro nuevo.\n\nPor qué las otras no:\n- A. Sí -> falso, porque un array no cambia de tamaño.\n- B. Sí, solo cuando tenga un primer valor asignado -> falso, eso no tiene nada que ver.\n- C. Sí, en cualquier momento -> falso, todavía peor: no se puede en ningún momento."
    },
    {
        "id": 5,
        "pregunta": "¿Qué es una colección?",
        "opciones": [
            "A. Una estructura estática que almacena elementos de forma secuencial con un tamaño ilimitado de valores.",
            "B. Una estructura estática que almacena elementos con un tamaño limitado de valores.",
            "C. Una estructura dinámica que almacena un grupo de elementos limitado.",
            "D. Una estructura dinámica que almacena un grupo de elementos ilimitado."
        ],
        "respuesta_correcta": "D. Una estructura dinámica que almacena un grupo de elementos ilimitado.",
        "explicacion": "Ojo: esto está mal expresado técnicamente. No es ilimitado de verdad, porque en un programa siempre hay límites de memoria. Pero en un test como este, la opción que quieren marcar es la D, porque una colección puede crecer y cambiar de tamaño, a diferencia de un array.\n\nExplicación fácil:\nUna colección es como una caja flexible.\n\n- Un array es una caja con huecos fijos.\n- Una colección es una caja a la que le puedes ir metiendo más cosas según las necesites.\n\nPor eso se dice que es dinámica.\n\nEjemplo:\nImagina una lista de nombres:\nArrayList<String> nombres = new ArrayList<>();\nnombres.add(\"Ana\");\nnombres.add(\"Luis\");\nnombres.add(\"Marta\");\n\nAquí vas metiendo nombres y la colección va creciendo.\n\nPor qué las otras no:\n- A: dice estática, y eso no encaja con colección.\n- B: también dice estática, así que también está mal.\n- C: dice dinámica, eso va bien, pero dice elementos limitado, y normalmente en estos tests quieren destacar que no tiene tamaño fijo.\n\nQuédate con esta idea:\n- Array = tamaño fijo\n- Colección = tamaño variable"
    },
    {
        "id": 6,
        "pregunta": "¿Qué es una excepción?",
        "opciones": [
            "A. Un error producido en tiempo de ejecución y que altera el flujo normal del programa.",
            "B. Un evento producido en tiempo de compilación y que altera el flujo normal del programa.",
            "C. Un código excepcional que se usa cuando se produce un evento.",
            "D. Un código excepcional que se usa en casos especiales."
        ],
        "respuesta_correcta": "A. Un error producido en tiempo de ejecución y que altera el flujo normal del programa.",
        "explicacion": "Explicación fácil:\nUna excepción es como cuando estás haciendo algo tranquilamente y pasa un problema inesperado.\n\nPor ejemplo, imagina que quieres abrir una puerta con una llave, pero la llave no entra. Entonces algo falla y no puedes seguir como tenías pensado.\n\nEn programación pasa igual: el programa va funcionando normal, pero ocurre un problema durante la ejecución y el camino normal se rompe. A eso se le llama excepción.\n\nEjemplo:\nSi un programa quiere dividir un número entre 0:\nint x = 10 / 0;\n\nEso da un error en ejecución, porque no se puede dividir entre 0.\nEl programa esperaba seguir normal, pero aparece un problema y salta una excepción.\n\nPor qué las otras no:\n- B es incorrecta porque habla de tiempo de compilación, y una excepción normalmente se refiere a problemas que aparecen cuando el programa ya está corriendo.\n- C es incorrecta porque una excepción no es un código especial, sino un problema o situación anómala.\n- D también es incorrecta porque lo explica de forma muy vaga y poco técnica.\n\nIdea fácil para recordar:\n- Excepción = problema inesperado mientras el programa está funcionando."
    },
    {
        "id": 7,
        "pregunta": "¿Qué tipo de colección hace uso de una clave como identificador?",
        "opciones": [
            "A. HashMap.",
            "B. ArrayList.",
            "C. HashSet.",
            "D. ArrayDeque."
        ],
        "respuesta_correcta": "A. HashMap.",
        "explicacion": "Explicación fácil:\nUn HashMap guarda la información en forma de parejas:\n\n- una clave\n- y un valor\n\nLa clave sirve como si fuera una etiqueta o un nombre único para encontrar lo que buscas.\n\nEs como un armario con cajones: en cada cajón pones una pegatina, y luego buscas por esa pegatina.\n\nEjemplo:\nImagina que guardas teléfonos por nombre:\nHashMap<String, String> telefonos = new HashMap<>();\ntelefonos.put(\"Ana\", \"600111222\");\ntelefonos.put(\"Luis\", \"600333444\");\n\nAquí:\n- \"Ana\" es la clave\n- \"600111222\" es el valor\n\nSi quieres el teléfono de Ana, la buscas por su clave.\n\nPor qué las otras no:\n- B. ArrayList: guarda elementos por posición (0, 1, 2...), no por clave.\n- C. HashSet: guarda elementos sin repetir, pero no usa clave y valor.\n- D. ArrayDeque: sirve para colas o pilas, no para identificar por clave.\n\nMatiz importante:\nTécnicamente, en Java HashMap pertenece a la familia de los Map, no a la interfaz Collection. Pero en un test como este, la respuesta que buscan claramente es A."
    },
    {
        "id": 8,
        "pregunta": "Al capturar una excepción que realiza este método printStackTrace()",
        "opciones": [
            "A. Imprime la causa del error.",
            "B. Obtiene el código de error de la excepción",
            "C. Obtiene el mensaje de la excepción",
            "D. Imprime el flujo de llamadas donde ocurrió el error."
        ],
        "respuesta_correcta": "D. Imprime el flujo de llamadas donde ocurrió el error.",
        "explicacion": "Explicación fácil:\nprintStackTrace() sirve para enseñar el camino que ha seguido el programa hasta chocar con el error.\n\nEs como si te caes por una escalera y alguien te dice:\nPrimero estabas aquí, luego subiste aquí, luego pasaste por aquí... y aquí fue donde te caíste.\n\nEso ayuda a ver en qué método y en qué línea pasó el problema.\n\nEjemplo:\nSi tienes esto:\ntry {\n    int x = 10 / 0;\n} catch (Exception e) {\n    e.printStackTrace();\n}\n\nEl programa imprimirá información parecida a:\n- qué error fue,\n- en qué línea ocurrió,\n- y qué métodos se llamaron antes.\n\nPor qué las otras no:\n- A. Imprime la causa del error -> no exactamente. Puede mostrar información relacionada, pero su función principal es enseñar la traza de llamadas.\n- B. Obtiene el código de error de la excepción -> no, printStackTrace() no saca ningún código de error.\n- C. Obtiene el mensaje de la excepción -> eso se parece más a getMessage(), no a printStackTrace().\n\nIdea fácil para recordar:\n- getMessage() = te dice qué pasó\n- printStackTrace() = te enseña dónde y cómo pasó"
    },
    {
        "id": 9,
        "pregunta": "Código traducido para que pueda ser interpretado por el microprocesador:",
        "opciones": [
            "A. Código fuente.",
            "B. Código máquina.",
            "C. Código intermedio.",
            "D. Todas las anteriores son incorrectas."
        ],
        "respuesta_correcta": "B. Código máquina.",
        "explicacion": "Explicación fácil:\nEl microprocesador no entiende palabras como las escribimos nosotros en Java o en otros lenguajes.\nÉl entiende un lenguaje muy básico, como si solo supiera leer órdenes muy simples. Ese lenguaje es el código máquina.\n\nEs como esto:\n- Tú hablas idioma humano -> código fuente\n- El ordenador habla idioma máquina -> código máquina\n\nPor eso el programa tiene que traducirse para que el microprocesador lo pueda entender.\n\nEjemplo:\nTú escribes algo así:\nint suma = 2 + 3;\n\nEso lo entiende una persona que programa.\nPero el procesador no lee eso directamente: necesita que se convierta en instrucciones de máquina.\n\nPor qué las otras no:\n- A. Código fuente -> es el que escribes tú, no el que entiende directamente el microprocesador.\n- C. Código intermedio -> en algunos lenguajes existe, pero sigue sin ser lo que entiende directamente el procesador.\n- D. Todas las anteriores son incorrectas -> falso, porque la B sí es correcta.\n\nIdea fácil para recordar:\n- Código fuente = lo escribe el programador\n- Código máquina = lo entiende el ordenador"
    },
    {
        "id": 10,
        "pregunta": "Coloca cada componente horizontalmente de izquierda a derecha. Si sobrepasa la fila comienza en la siguiente.:",
        "opciones": [
            "A. BorderLayout.",
            "B. CardLayout.",
            "C. FlowLayout.",
            "D. GridLayout."
        ],
        "respuesta_correcta": "C. FlowLayout.",
        "explicacion": "Explicación fácil:\nFlowLayout coloca los componentes en fila, de izquierda a derecha.\nY si ya no caben más en esa fila, baja y sigue en la siguiente línea.\n\nEs como cuando pones cromos en una mesa:\n- los vas poniendo uno al lado del otro,\n- y cuando no cabe otro más,\n- empiezas una fila nueva.\n\nEjemplo:\nSi tienes varios botones:\n- Botón 1\n- Botón 2\n- Botón 3\n- Botón 4\n\nFlowLayout los pone seguidos. Si la ventana es pequeña y no caben todos, algunos pasan abajo a otra fila.\n\nPor qué las otras no:\n- A. BorderLayout: divide la ventana en zonas como norte, sur, este, oeste y centro.\n- B. CardLayout: muestra una carta o panel cada vez, como si cambiaras de pantalla.\n- D. GridLayout: coloca todo en una cuadrícula fija de filas y columnas.\n\nIdea fácil para recordar:\n- Flow = fluye de izquierda a derecha y salta a otra línea si hace falta."
    },
    {
        "id": 11,
        "pregunta": "Como podemos capturar una excepción",
        "opciones": [
            "A. Incluir el código que puede provocar una excepción dentro del bloque try.",
            "B. Incluir el código que puede provocar una excepción dentro del bloque catch.",
            "C. Incluir el código que puede provocar una excepción dentro del bloque finally.",
            "D. Incluir el código que puede provocar una excepción dentro de un método exclusivo."
        ],
        "respuesta_correcta": "A. Incluir el código que puede provocar una excepción dentro del bloque try.",
        "explicacion": "Explicación fácil:\nSi crees que una parte del programa puede fallar, esa parte la metes dentro de try.\n\nEs como si fueras a coger un vaso que puede caerse. Entonces dices:\nVoy a hacerlo con cuidado, y si pasa algo, lo controlo.\n\n- try = aquí metes el código que puede dar problema\n- catch = aquí dices qué hacer si falla\n\nEjemplo:\ntry {\n    int x = 10 / 0;\n} catch (Exception e) {\n    System.out.println(\"Ha ocurrido un error\");\n}\n\nAquí:\n- en try va la operación peligrosa,\n- y en catch se controla el error.\n\nPor qué las otras no:\n- B es incorrecta porque el código que puede fallar no va en catch; catch sirve para capturar y tratar la excepción.\n- C es incorrecta porque finally se usa normalmente para ejecutar algo siempre, haya error o no, como cerrar archivos o conexiones.\n- D es incorrecta porque no existe eso de método exclusivo para capturar excepciones.\n\nIdea fácil para recordar:\n- try = esto puede fallar\n- catch = si falla, hago esto\n- finally = esto se hace siempre"
    },
    {
        "id": 12,
        "pregunta": "El código fuente en java se identifica por:",
        "opciones": [
            "A. Usar la extensión .class",
            "B. Usar la extensión .doc",
            "C. Usar la extensión .ear",
            "D. Usar la extensión .java"
        ],
        "respuesta_correcta": "D. Usar la extensión .java",
        "explicacion": "Explicación fácil:\nEl código fuente es el archivo donde tú escribes el programa.\nEn Java, ese archivo se guarda con la extensión .java.\n\nEs como si un dibujo se guardara como .png o una canción como .mp3.\nPues el programa escrito en Java se guarda como .java.\n\nEjemplo:\nSi haces una clase llamada Hola, el archivo normal sería:\nHola.java\n\nDentro de ese archivo escribes el código del programa.\n\nPor qué las otras no:\n- A. .class -> no es el código fuente; es el archivo ya compilado.\n- B. .doc -> es un documento, no un archivo de Java.\n- C. .ear -> es otro tipo de archivo usado en despliegues Java EE, no para el código fuente.\n\nIdea fácil para recordar:\n- .java = lo escribe el programador\n- .class = lo genera el compilador"
    },
    {
        "id": 13,
        "pregunta": "El código intermedio compilado en java se identifica por:",
        "opciones": [
            "A. Usar la extensión .class",
            "B. Usar la extensión .doc",
            "C. Usar la extensión .ear",
            "D. Usar la extensión .java"
        ],
        "respuesta_correcta": "A. Usar la extensión .class",
        "explicacion": "Explicación fácil:\nEn Java, tú escribes el programa en un archivo .java.\nDespués, el compilador lo transforma en otro archivo que ya está más preparado para ejecutarse. Ese archivo es .class.\n\nEse .class es el código intermedio compilado de Java, también llamado bytecode.\n\nEjemplo:\nTú escribes esto en:\nHola.java\n\nCuando lo compilas, se crea:\nHola.class\n\nAsí que:\n- .java = lo escribes tú\n- .class = lo genera Java al compilar\n\nPor qué las otras no:\n- B. .doc -> eso es un documento, no un archivo de Java compilado.\n- C. .ear -> es un paquete de aplicaciones Java EE, no el código intermedio normal.\n- D. .java -> eso es código fuente, no código compilado.\n\nIdea fácil para recordar:\n- .java = antes de compilar\n- .class = después de compilar"
    },
    {
        "id": 14,
        "pregunta": "El Pseudocódigo es",
        "opciones": [
            "A. Un lenguaje de programación",
            "B. Un lenguaje descriptivo para desarrollar algoritmos.",
            "C. Código binario o hexadecimal.",
            "D. Una estructura de control."
        ],
        "respuesta_correcta": "B. Un lenguaje descriptivo para desarrollar algoritmos.",
        "explicacion": "Explicación fácil:\nEl pseudocódigo sirve para escribir los pasos de un programa de forma simple, sin usar todavía un lenguaje real como Java.\n\nEs como explicar una receta antes de cocinar:\n\n1. coge los ingredientes\n2. mézclalos\n3. mételos al horno\n\nNo estás cocinando aún, pero ya estás diciendo qué hay que hacer.\n\nEn programación pasa igual: el pseudocódigo te ayuda a pensar el algoritmo antes de escribir el código de verdad.\n\nEjemplo:\nLeer número\nSi número es mayor que 10\n   Mostrar \"Es mayor que 10\"\nSi no\n   Mostrar \"Es 10 o menor\"\n\nEso no es Java exacto, pero sirve para entender la lógica.\n\nPor qué las otras no:\n- A. Un lenguaje de programación -> no exactamente. El pseudocódigo no es un lenguaje formal que el ordenador ejecute.\n- C. Código binario o hexadecimal -> no tiene nada que ver.\n- D. Una estructura de control -> tampoco. Una estructura de control puede ser un if o un while, pero el pseudocódigo es algo más general.\n\nIdea fácil para recordar:\n- Pseudocódigo = explicar el programa con palabras parecidas a código, pero sin ser código real."
    },
    {
        "id": 15,
        "pregunta": "En la utilización de los sistemas de ficheros, ¿Qué hace el método listFiles()?",
        "opciones": [
            "A. Comprueba si la ruta existe.",
            "B. Comprueba si es un directorio",
            "C. Obtiene un listado de ficheros que hay en la ruta.",
            "D. Obtiene el directorio padre."
        ],
        "respuesta_correcta": "C. Obtiene un listado de ficheros que hay en la ruta.",
        "explicacion": "Explicación fácil:\nlistFiles() sirve para mirar qué cosas hay dentro de una carpeta.\nEs como abrir un cajón y ver todo lo que tiene dentro:\n- un archivo\n- otro archivo\n- una carpeta\n- otra carpeta\n\nTe devuelve la lista de elementos que hay en ese directorio.\n\nEjemplo:\nSi tienes una carpeta llamada documentos, puedes hacer algo así:\nFile carpeta = new File(\"documentos\");\nFile[] lista = carpeta.listFiles();\n\nAquí lista tendrá los archivos y carpetas que hay dentro de documentos.\n\nPor qué las otras no:\n- A. Comprueba si la ruta existe -> eso lo hace más bien exists().\n- B. Comprueba si es un directorio -> eso lo hace isDirectory().\n- D. Obtiene el directorio padre -> eso se hace con métodos como getParent() o parecidos, no con listFiles().\n\nIdea fácil para recordar:\n- listFiles() = enséñame lo que hay dentro de la carpeta."
    },
    {
        "id": 16,
        "pregunta": "En una aplicación en java:",
        "opciones": [
            "A. Tiene que haber una clase denominada .x",
            "B. Es obligatorio usar paquetes.",
            "C. Tiene que haber un método main.",
            "D. Puede no haber ninguna clase."
        ],
        "respuesta_correcta": "C. Tiene que haber un método main.",
        "explicacion": "Explicación fácil:\nEn una aplicación Java normal, el programa necesita un punto de entrada, es decir, un sitio por donde empezar.\n\nEse punto de entrada es el método main.\n\nEs como una carrera:\n- todos están preparados,\n- pero alguien tiene que decir ya para empezar.\n\nEn Java, ese ya es main.\n\nEjemplo:\npublic class Hola {\n    public static void main(String[] args) {\n        System.out.println(\"Hola\");\n    }\n}\n\nAquí el programa empieza en main.\n\nPor qué las otras no:\n- A. Tiene que haber una clase denominada .x -> eso no existe. No hay ninguna obligación de que una clase se llame así.\n- B. Es obligatorio usar paquetes -> no, puedes hacer programas Java sin definir paquetes.\n- D. Puede no haber ninguna clase -> falso, en Java el código va dentro de clases.\n\nMatiz importante:\nSi el test habla de una aplicación Java ejecutable normal, la respuesta correcta es C.\nAdemás, en Java clásico el main suele tener esta forma:\npublic static void main(String[] args)"
    },
    {
        "id": 17,
        "pregunta": "Es habitual trabajar directamente con ficheros de tipo de datos",
        "opciones": [
            "A. De bytes o caracteres.",
            "B. De enteros.",
            "C. De cadena de caracteres.",
            "D. De hexadecimal."
        ],
        "respuesta_correcta": "A. De bytes o caracteres.",
        "explicacion": "Explicación fácil:\nCuando un programa trabaja con ficheros, normalmente lo que maneja directamente son:\n\n- bytes -> para datos más básicos o binarios\n- caracteres -> para texto\n\nEs como leer una carta:\n- si la lees como texto, trabajas con caracteres\n- si abres un archivo más por dentro, trabajas con bytes\n\nEjemplo:\n- Un archivo .txt suele trabajarse con caracteres\n- Una imagen o un archivo binario suele trabajarse con bytes\n\nEn Java esto se ve mucho con:\n- InputStream y OutputStream -> bytes\n- Reader y Writer -> caracteres\n\nPor qué las otras no:\n- B. De enteros -> no es la forma habitual de clasificar los ficheros.\n- C. De cadena de caracteres -> suena parecido al texto, pero la clasificación normal en Java es bytes o caracteres, no cadenas.\n- D. De hexadecimal -> hexadecimal es una forma de representar datos, no un tipo habitual de fichero en este contexto.\n\nIdea fácil para recordar:\n- Ficheros en Java = bytes o caracteres"
    },
    {
        "id": 18,
        "pregunta": "Estos, char, int, boolean y double, son:",
        "opciones": [
            "A. Constantes.",
            "B. Tipos de datos primitivos.",
            "C. Operadores.",
            "D. Ninguna de las anteriores."
        ],
        "respuesta_correcta": "B. Tipos de datos primitivos.",
        "explicacion": "Explicación fácil:\nchar, int, boolean y double son como los bloques básicos que trae Java para guardar información.\n\nSirven para guardar cosas simples:\n- char -> un carácter, como 'A'\n- int -> un número entero, como 7\n- boolean -> true o false\n- double -> números con decimales, como 3.14\n\nSe llaman primitivos porque son los tipos más básicos, los que ya vienen incorporados en el lenguaje.\n\nEjemplo:\nchar letra = 'A';\nint edad = 20;\nboolean encendido = true;\ndouble precio = 9.99;\n\nAquí cada variable guarda un tipo de dato distinto.\n\nPor qué las otras no:\n- A. Constantes -> no, una constante es un valor que no cambia, pero char, int, boolean y double son tipos, no constantes.\n- C. Operadores -> tampoco; operadores son símbolos como +, -, *, &&.\n- D. Ninguna de las anteriores -> falso, porque la B sí es correcta.\n\nIdea fácil para recordar:\n- Los tipos primitivos son los recipientes básicos para guardar datos simples."
    },
    {
        "id": 19,
        "pregunta": "Indica que controlador permite introducir texto en un campo",
        "opciones": [
            "A. Button.",
            "B. Label.",
            "C. Checkbox.",
            "D. TextField."
        ],
        "respuesta_correcta": "D. TextField.",
        "explicacion": "Explicación fácil:\nSi quieres que una persona escriba texto en una ventana o formulario, usas un TextField.\n\nEs como una cajita en blanco donde puedes poner tu nombre, tu edad o cualquier palabra.\n\nEjemplo:\nImagina un formulario que pone:\n\nNombre: [          ]\n\nEsa parte vacía donde escribes sería un TextField.\n\nEn Java sería algo así:\nTextField campo = new TextField();\n\no en Swing, más habitual:\nJTextField campo = new JTextField();\n\nPor qué las otras no:\n- A. Button -> es un botón para pulsar, no para escribir.\n- B. Label -> solo muestra texto, no deja escribir.\n- C. Checkbox -> sirve para marcar o desmarcar una opción.\n\nIdea fácil para recordar:\n- TextField = cajita para escribir texto"
    },
    {
        "id": 20,
        "pregunta": "La estructura basada en bucles es:",
        "opciones": [
            "A. Secuencial.",
            "B. Alternativa.",
            "C. Iterativa.",
            "D. Ninguna de las anteriores."
        ],
        "respuesta_correcta": "C. Iterativa.",
        "explicacion": "Explicación fácil:\nUn bucle sirve para repetir algo varias veces.\n\nY cuando una estructura repite una acción, se llama iterativa.\n\nEs como cuando te dicen:\nDa 5 palmadas.\n\nNo te lo dicen 5 veces una por una. Te dan una instrucción que se repite.\nEso hace un bucle.\n\nEjemplo:\nfor (int i = 0; i < 3; i++) {\n    System.out.println(\"Hola\");\n}\n\nAquí el programa escribe Hola 3 veces.\nComo está repitiendo una acción, es una estructura iterativa.\n\nPor qué las otras no:\n- A. Secuencial -> es cuando las instrucciones van una detrás de otra, sin decidir ni repetir.\n- B. Alternativa -> es cuando el programa elige entre opciones, como con if o else.\n- D. Ninguna de las anteriores -> falso, porque iterativa sí es correcta.\n\nIdea fácil para recordar:\n- Secuencial = hacer pasos seguidos\n- Alternativa = elegir\n- Iterativa = repetir"
    },
    {
        "id": 21,
        "pregunta": "La estructura de una clase está compuesta por:",
        "opciones": [
            "A. Solo variables",
            "B. Solo métodos",
            "C. Campos y métodos.",
            "D. Métodos y funciones."
        ],
        "respuesta_correcta": "C. Campos y métodos.",
        "explicacion": "Explicación fácil:\nUna clase es como una ficha de un personaje o de una cosa.\n\nTiene dos partes importantes:\n- campos -> lo que tiene\n- métodos -> lo que puede hacer\n\nPor eso una clase se compone de campos y métodos.\n\nEjemplo:\nImagina una clase Perro.\n\n- Campos: nombre, edad, color\n- Métodos: ladrar, correr, comer\n\nclass Perro {\n    String nombre;\n    int edad;\n\n    void ladrar() {\n        System.out.println(\"Guau\");\n    }\n}\n\nAquí:\n- nombre y edad son campos\n- ladrar() es un método\n\nPor qué las otras no:\n- A. Solo variables -> no, porque una clase no tiene solo datos; también tiene comportamiento.\n- B. Solo métodos -> tampoco, porque también guarda información.\n- D. Métodos y funciones -> en Java, dentro de una clase normalmente hablamos de métodos. Esa opción está mal planteada.\n\nIdea fácil para recordar:\n- Campos = datos\n- Métodos = acciones"
    },
    {
        "id": 22,
        "pregunta": "La estructura if",
        "opciones": [
            "A. Permite hacer saltos incondicionales",
            "B. Permite ejecutar una parte de código según una condición.",
            "C. Permite ejecutar varias veces una parte de código.",
            "D. Solo se ejecuta una vez."
        ],
        "respuesta_correcta": "B. Permite ejecutar una parte de código según una condición.",
        "explicacion": "Explicación fácil:\nLa estructura if sirve para tomar una decisión.\n\nEs como decir:\n- si llueve, cojo paraguas\n- si no llueve, no lo cojo\n\nEn programación hace lo mismo: si se cumple una condición, ejecuta una parte del código.\n\nEjemplo:\nint edad = 18;\n\nif (edad >= 18) {\n    System.out.println(\"Eres mayor de edad\");\n}\n\nAquí el programa piensa:\n- si la edad es 18 o más, muestra el mensaje\n- si no, no lo muestra\n\nPor qué las otras no:\n- A. Permite hacer saltos incondicionales -> no, if no hace saltos porque sí; necesita una condición.\n- C. Permite ejecutar varias veces una parte de código -> eso sería más propio de un bucle, como for o while.\n- D. Solo se ejecuta una vez -> está mal planteada. Un if no se define por ejecutarse una vez, sino por decidir según una condición.\n\nIdea fácil para recordar:\n- if = si pasa esto, haz esto"
    },
    {
        "id": 23,
        "pregunta": "La notación Big-0",
        "opciones": [
            "A. Es un tipo de dato",
            "B. Permite medir la complejidad algorítmica.",
            "C. Es una herramienta para calcular los usuarios que puede soportar una aplicación",
            "D. Es una estructura de programación"
        ],
        "respuesta_correcta": "B. Permite medir la complejidad algorítmica.",
        "explicacion": "Explicación fácil:\nLa notación Big-O se usa para decir cuánto trabajo le cuesta a un programa hacer algo cuando la cantidad de datos crece.\n\nEs como preguntar:\n- si tengo 10 cajas, ¿tardo poco?\n- si tengo 1.000 cajas, ¿tardo mucho más?\n\nBig-O ayuda a medir cómo de rápido o lento crece ese esfuerzo.\n\nEjemplo:\nImagina que buscas un nombre en una lista:\n- si miras uno por uno, cuanto más grande sea la lista, más tardas\n- eso sería una complejidad como O(n)\n\nSi siempre haces una sola operación, aunque haya muchos datos, sería algo como O(1).\n\nIdea muy simple:\n- O(1) = tarda casi lo mismo siempre\n- O(n) = tarda más cuanto más cosas hay\n- O(n²) = tarda muchísimo más cuando crecen los datos\n\nPor qué las otras no:\n- A. Es un tipo de dato -> no, no guarda valores como int o boolean.\n- C. Es una herramienta para calcular los usuarios que puede soportar una aplicación -> no exactamente; eso sería una aplicación indirecta, pero no es lo que Big-O significa.\n- D. Es una estructura de programación -> no, no es como un if o un for.\n\nIdea fácil para recordar:\n- Big-O = forma de medir lo eficiente que es un algoritmo."
    },
    {
        "id": 24,
        "pregunta": "Las clases abstractas:",
        "opciones": [
            "A. Pueden ser instanciadas normalmente.",
            "B. Pueden ser instanciadas per requieren de la palabra reservada abstract.",
            "C. No puede ser instanciada ni empleada de otro modo.",
            "D. No puede ser instanciada, pero sí empleada para la herencia."
        ],
        "respuesta_correcta": "D. No puede ser instanciada, pero sí empleada para la herencia.",
        "explicacion": "Explicación fácil:\nUna clase abstracta es como un molde incompleto.\n\nNo puedes crear un objeto directamente a partir de ella, porque le faltan cosas por concretar.\nPero sí sirve como base para que otras clases la hereden y la terminen.\n\nEs como dibujar una plantilla de Animal:\n- no existe un animal genérico real que uses tal cual,\n- pero sí puedes crear Perro, Gato, Pájaro a partir de esa idea.\n\nEjemplo:\nabstract class Animal {\n    abstract void hacerSonido();\n}\n\nclass Perro extends Animal {\n    void hacerSonido() {\n        System.out.println(\"Guau\");\n    }\n}\n\nAquí:\n- Animal es abstracta, así que no haces new Animal()\n- pero Perro la hereda y sí puedes crear un new Perro()\n\nPor qué las otras no:\n- A es falsa, porque una clase abstracta no se puede instanciar normalmente.\n- B es falsa, aunque menciona abstract, porque sigue diciendo que pueden instanciarse.\n- C es falsa, porque sí puede usarse: sirve para herencia.\n\nIdea fácil para recordar:\n- Clase abstracta = base para otras clases, no objeto directo."
    },
    {
        "id": 25,
        "pregunta": "No es una forma de polimorfismo:",
        "opciones": [
            "A. Asignación polimorfa.",
            "B. Ejecución polimorfa.",
            "C. Herencia polimorfa.",
            "D. Todas las anteriores son incorrectas."
        ],
        "respuesta_correcta": "C. Herencia polimorfa.",
        "explicacion": "Explicación fácil:\nEl polimorfismo es cuando una cosa puede comportarse de formas distintas según el objeto real que haya detrás.\n\nPero la herencia no es una forma de polimorfismo.\nLa herencia es más bien la base o el camino que muchas veces permite que el polimorfismo exista.\n\nEs como esto:\n- Herencia = un hijo se parece a su padre y hereda cosas\n- Polimorfismo = aunque tú lo llames animal, luego puede comportarse como perro, gato, etc.\n\nO sea, la herencia ayuda, pero no es el polimorfismo en sí.\n\nEjemplo:\nAnimal a = new Perro();\na.hacerSonido();\n\nAquí:\n- Perro hereda de Animal -> eso es herencia\n- pero cuando llamas a hacerSonido() y se ejecuta lo del Perro, eso es polimorfismo\n\nPor qué las otras no:\n- A. Asignación polimorfa -> sí se usa para hablar de cuando una variable de un tipo padre guarda un objeto hijo.\n- B. Ejecución polimorfa -> sí encaja con la idea de que se ejecute un método distinto según el objeto real.\n- D. Todas las anteriores son incorrectas -> falso, porque la que no encaja es la C.\n\nIdea fácil para recordar:\n- Herencia = una clase nace de otra\n- Polimorfismo = un mismo nombre general puede comportarse distinto"
    },
    {
        "id": 26,
        "pregunta": "Para establecer cualquier conexión a una base de datos desde Java, es necesario:",
        "opciones": [
            "A. Emplear un driver específico.",
            "B. Emplear el objeto statement.",
            "C. Emplear una librería con ficheros .iso.",
            "D. Todas las anteriores son incorrectas."
        ],
        "respuesta_correcta": "A. Emplear un driver específico.",
        "explicacion": "Explicación fácil:\nPara que Java pueda hablar con una base de datos, necesita como un traductor.\n\nEse traductor es el driver.\n\nCada base de datos habla su manera, así que Java necesita el driver adecuado para entenderse con ella.\n\nEs como si quisieras hablar con alguien que habla otro idioma:\n- tú hablas español,\n- la base de datos habla su idioma,\n- el driver hace de intérprete.\n\nEjemplo:\nSi vas a conectarte a MySQL, necesitas su driver JDBC.\nSi vas a PostgreSQL, necesitas el suyo.\n\nLuego ya puedes hacer cosas como abrir la conexión.\n\nPor qué las otras no:\n- B. Emplear el objeto statement -> no. Statement se usa después, cuando ya estás conectado, para lanzar consultas.\n- C. Emplear una librería con ficheros .iso -> no tiene sentido aquí; .iso no es lo que se usa para esto.\n- D. Todas las anteriores son incorrectas -> falso, porque la A sí es correcta.\n\nIdea fácil para recordar:\n- Driver = traductor entre Java y la base de datos\n- Statement = herramienta para hacer consultas una vez ya hay conexión"
    },
    {
        "id": 27,
        "pregunta": "Para indicar a una clase que se almacene a una base de datos orientada a objetos, usaremos la etiqueta.",
        "opciones": [
            "A. @Entity",
            "B. @Embedded",
            "C. @Transient",
            "D. @Id"
        ],
        "respuesta_correcta": "A. @Entity",
        "explicacion": "Explicación fácil:\n@Entity es una etiqueta que le dice a Java algo como:\nOye, esta clase la quiero guardar en la base de datos.\n\nEs como ponerle una pegatina a una caja que diga:\nGuardar\n\nEntonces el sistema sabe que esa clase representa un objeto que debe persistirse.\n\nEjemplo:\n@Entity\npublic class Persona {\n    @Id\n    private int id;\n    private String nombre;\n}\n\nAquí:\n- @Entity dice que Persona se guarda en la base de datos\n- @Id marca cuál es su identificador\n\nPor qué las otras no:\n- B. @Embedded -> se usa para un objeto que va metido dentro de otro, no para marcar la clase principal como almacenable.\n- C. @Transient -> indica justo lo contrario en un campo: que no se guarde.\n- D. @Id -> solo marca el identificador, pero no convierte por sí sola a la clase en entidad.\n\nIdea fácil para recordar:\n- @Entity = esta clase se guarda\n- @Id = este campo la identifica"
    },
    {
        "id": 28,
        "pregunta": "Para montar la cadena de conexión ¿Que datos necesitamos?",
        "opciones": [
            "A. Solo el nombre de la base de datos.",
            "B. La URL de la base de datos, el usuario y la contraseña.",
            "C. El nombre de la base de datos y la tabla que queremos consultar.",
            "D. No hace falta ningún dato, el driver ya dispone de los datos para conectarse."
        ],
        "respuesta_correcta": "B. La URL de la base de datos, el usuario y la contraseña.",
        "explicacion": "Explicación fácil:\nPara conectarte a una base de datos, Java necesita saber dónde está y con qué permiso entra.\n\nEs como entrar en una casa:\n- URL = la dirección de la casa\n- usuario = quién eres\n- contraseña = la llave para entrar\n\nSin esos datos, no sabe a qué base de datos conectarse ni si tiene permiso.\n\nEjemplo:\nUna conexión típica puede tener algo así:\nString url = \"jdbc:mysql://localhost:3306/tienda\";\nString usuario = \"root\";\nString contrasena = \"1234\";\n\nY luego se usa para conectar.\n\nPor qué las otras no:\n- A. Solo el nombre de la base de datos -> no basta, porque falta saber dónde está y con qué credenciales entrar.\n- C. El nombre de la base de datos y la tabla que queremos consultar -> la tabla se usa después, cuando haces consultas, no para abrir la conexión.\n- D. No hace falta ningún dato... -> falso, el driver no adivina esos datos.\n\nIdea fácil para recordar:\nPara conectarte necesitas, como mínimo:\n- dirección\n- usuario\n- contraseña"
    },
    {
        "id": 29,
        "pregunta": "Podemos decir de la herencia:",
        "opciones": [
            "A. Es una relación jerárquica entre una clase padre y una clase hija.",
            "B. En java solo se puede heredar de una superclase o clase padre.",
            "C. Las clases hijas o subclases heredan toda la funcionalidad de la clase padre.",
            "D. Todas las anteriores son correctas"
        ],
        "respuesta_correcta": "D. Todas las anteriores son correctas",
        "explicacion": "Explicación fácil:\nLa herencia es como cuando una clase nueva aprende y recibe cosas de otra clase más general.\n\nPor ejemplo:\n- clase padre: Animal\n- clase hija: Perro\n\nPerro puede heredar cosas de Animal.\n\nEn este test, la correcta es Todas las anteriores son correctas porque las tres frases A, B y C se están entendiendo de forma general y básica:\n- A dice que hay una relación entre clase padre e hija\n- B dice que en Java una clase hereda de una sola clase padre\n- C dice que la clase hija recibe la funcionalidad de la clase padre\n\nEjemplo:\nclass Animal {\n    void respirar() {\n        System.out.println(\"Respirando\");\n    }\n}\n\nclass Perro extends Animal {\n}\n\nAquí Perro hereda de Animal y puede usar lo que aprende de la clase padre.\n\nIdea fácil para recordar:\n- Herencia = una clase hija aprende de una clase padre\n- En este examen, las tres afirmaciones se dan por válidas, por eso la correcta es la D."
    },
    {
        "id": 30,
        "pregunta": "Que campos de una clase no se guardaran en una base de datos orientada a objetos",
        "opciones": [
            "A. Todos los campos se guardan siempre.",
            "B. Los campos que se declaren como final, static, transient o lleve la etiqueta @Transient",
            "C. Los que tengan visibilidad privada.",
            "D. Los que lleven la etiqueta @FieldNotIncluded."
        ],
        "respuesta_correcta": "B. Los campos que se declaren como final, static, transient o lleve la etiqueta @Transient",
        "explicacion": "Explicación fácil:\nCuando guardas un objeto en una base de datos, no siempre se guardan todas sus cajitas de información.\n\nHay campos que se usan solo mientras el programa está funcionando y no se meten en la base de datos.\n\nLos más típicos son:\n- static -> porque pertenece a la clase, no al objeto\n- transient o @Transient -> porque estás diciendo esto no lo guardes\n\nEjemplo:\nclass Persona {\n    String nombre;\n    transient String claveSecreta;\n    static int contador;\n}\n\nAquí:\n- nombre sí se guardaría\n- claveSecreta no se guardaría\n- contador tampoco, porque es static\n\nPor qué la B es la que más encaja:\n- A es falsa, porque no siempre se guardan todos los campos.\n- C es falsa, porque que un campo sea private no significa que no se guarde.\n- D parece inventada o incorrecta: @FieldNotIncluded no es la anotación estándar que se suele usar aquí.\n\nMatiz importante:\nLo más correcto técnicamente sería decir sobre todo:\n- static no se persiste\n- transient no se persiste\n- @Transient no se persiste\n\nLo de final depende del sistema y está mal meterlo tan alegremente como regla universal.\nAun así, para este test, la opción que seguramente esperan es la B."
    },
    {
        "id": 31,
        "pregunta": "Que tipos de recursividad existen:",
        "opciones": [
            "A. Simple, multiple, cruzada o anidada.",
            "B. Simple, multiple, cruzada o anillada.",
            "C. Doble, unificada, indirecta o anillada.",
            "D. Doble, anillada, simple o cruzada."
        ],
        "respuesta_correcta": "A. Simple, multiple, cruzada o anidada.",
        "explicacion": "Explicación fácil:\nLa recursividad es cuando una función se llama a sí misma para resolver un problema.\n\nEs como si para hacer una tarea tú dijeras:\nPara hacer esto, primero tengo que hacer una versión más pequeña de esto mismo.\n\nY así varias veces, hasta llegar a un caso pequeñito que ya sí sabes resolver.\n\nLos tipos que suelen enseñarse son:\n- simple -> una función se llama a sí misma una vez\n- múltiple -> se llama a sí misma varias veces\n- cruzada -> una función llama a otra y esa otra vuelve a llamar a la primera\n- anidada -> una llamada recursiva va metida dentro de otra\n\nEjemplo fácil:\nImagina una muñeca rusa:\n- abres una\n- dentro hay otra igual\n- dentro otra\n- dentro otra\n\nEso se parece a la recursividad: una cosa contiene otra del mismo tipo.\n\nPor qué las otras no:\n- B falla por anillada, que no es la denominación habitual aquí.\n- C mete términos que no encajan bien, como unificada o doble.\n- D también usa doble y anillada, que no son la clasificación normal.\n\nIdea fácil para recordar:\n- Recursividad = una función que se llama a sí misma\n- La opción más correcta de las que te dan es la A."
    },
    {
        "id": 32,
        "pregunta": "Queremos realizar las acciones de un semáforo, Verde para continuar, Amarillo y Rojo para parar. ¿Cómo se puede hacer?",
        "opciones": [
            "A. Con una estructura switch",
            "B. Con una estructura if-else",
            "C. Con una estructura if-else if",
            "D. Todas las anteriores son correctas."
        ],
        "respuesta_correcta": "D. Todas las anteriores son correctas.",
        "explicacion": "Explicación fácil:\nAquí el programa tiene que decidir qué hacer según el color del semáforo:\n- Verde -> continuar\n- Amarillo o Rojo -> parar\n\nEso se puede hacer de varias maneras porque todas sirven para tomar decisiones.\n\nEs como si mamá te dijera:\n- si está verde, andas\n- si no, te paras\n\nEso puede escribirse con if-else, con if-else if o con switch.\n\nEjemplo con if-else:\nif (color.equals(\"Verde\")) {\n    System.out.println(\"Continuar\");\n} else {\n    System.out.println(\"Parar\");\n}\n\nAquí funciona porque solo hay dos acciones finales:\n- seguir\n- o parar\n\nEjemplo con if-else if:\nif (color.equals(\"Verde\")) {\n    System.out.println(\"Continuar\");\n} else if (color.equals(\"Amarillo\")) {\n    System.out.println(\"Parar\");\n} else if (color.equals(\"Rojo\")) {\n    System.out.println(\"Parar\");\n}\n\nEjemplo con switch:\nswitch (color) {\n    case \"Verde\":\n        System.out.println(\"Continuar\");\n        break;\n    case \"Amarillo\":\n    case \"Rojo\":\n        System.out.println(\"Parar\");\n        break;\n}\n\nPor qué:\n- A sirve\n- B también sirve\n- C también sirve\n\nPor eso la correcta es D."
    },
    {
        "id": 33,
        "pregunta": "Queremos sumar los 10 primeros números para que dé como resultado 55 ¿Qué código es correcto?",
        "opciones": [
            "A. for (int i = 1; i <= 10; i++) { resultado += i; }",
            "B. int i=1; while(i<10) { resultado += i; }",
            "C. int i=1;do { i++; resultado +=i; } while(i<=10);",
            "D. Todas las anteriores son correctas."
        ],
        "respuesta_correcta": "A. for (int i = 1; i <= 10; i++) { resultado += i; }",
        "explicacion": "Explicación fácil:\nQueremos sumar:\n1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55\n\nLa opción A hace justo eso:\n- empieza en 1\n- sigue mientras i <= 10\n- va subiendo de uno en uno\n- y va sumando cada número a resultado\n\nEs como meter en una hucha los números del 1 al 10, uno a uno.\n\nEjemplo:\nSi antes pones:\nint resultado = 0;\n\ny luego:\nfor (int i = 1; i <= 10; i++) {\n    resultado += i;\n}\n\nal final resultado vale 55.\n\nPor qué las otras no:\n- B está mal porque no incrementa i dentro del while, así que se quedaría repitiendo siempre con el mismo valor. Además pone i < 10, así que ni siquiera llegaría al 10.\n- C está mal porque primero hace i++ y luego suma, así que empieza sumando 2. Y además acaba sumando 11 también.\n- D es falsa porque no son todas correctas.\n\nOjo importante:\nLa A es correcta si resultado ya estaba inicializado a 0 antes. En este tipo de test eso normalmente se da por hecho."
    },
    {
        "id": 34,
        "pregunta": "Se considera la plantilla o estructura del elemento principal de POO:",
        "opciones": [
            "A. Clase.",
            "B. Campo.",
            "C. Objeto.",
            "D. Ninguna de las anteriores es correcta."
        ],
        "respuesta_correcta": "A. Clase.",
        "explicacion": "Explicación fácil:\nEn POO, la clase es como el molde o el plano.\n\nPrimero tienes el molde, y después a partir de ese molde creas los objetos.\n\nEs como cuando tienes un molde de galletas:\n- el molde sería la clase\n- cada galleta hecha con ese molde sería un objeto\n\nPor eso, si preguntan por la plantilla o estructura principal, la respuesta es clase.\n\nEjemplo:\nSi tienes una clase Coche, esa clase dice:\n- qué datos tendrá el coche\n- qué acciones podrá hacer\n\nclass Coche {\n    String color;\n    void arrancar() {\n        System.out.println(\"Arrancando\");\n    }\n}\n\nLuego, cuando creas un coche concreto, eso ya es un objeto.\n\nPor qué las otras no:\n- B. Campo -> un campo es solo una parte de la clase, como color o edad.\n- C. Objeto -> el objeto no es la plantilla; es la copia creada a partir de la clase.\n- D es falsa, porque A sí es correcta.\n\nIdea fácil para recordar:\n- Clase = molde\n- Objeto = cosa creada con ese molde"
    },
    {
        "id": 35,
        "pregunta": "Se puede decir de un constructor que...",
        "opciones": [
            "A. Se encarga de crear instancias de objetos.",
            "B. Se encarga de destruir instancias de objetos.",
            "C. Un método personalizado que realizar una función concreta, por ejemplo, una suma.",
            "D. Es un atributo de una clase."
        ],
        "respuesta_correcta": "A. Se encarga de crear instancias de objetos.",
        "explicacion": "Explicación fácil:\nUn constructor sirve para crear un objeto cuando nace.\n\nEs como cuando montas un muñeco nuevo:\n- primero lo creas,\n- luego le pones su nombre, color o edad.\n\nEl constructor ayuda a que ese objeto empiece ya preparado.\n\nEjemplo:\nclass Persona {\n    String nombre;\n\n    Persona(String nombre) {\n        this.nombre = nombre;\n    }\n}\n\ny luego:\nPersona p = new Persona(\"Ana\");\n\nAquí, new Persona(\"Ana\") usa el constructor para crear el objeto p.\n\nPor qué las otras no:\n- B. Se encarga de destruir instancias de objetos -> no. En Java eso no lo hace un constructor.\n- C. Un método personalizado... -> no. Un constructor no es un método cualquiera para hacer tareas como sumar.\n- D. Es un atributo de una clase -> tampoco. Un constructor no es un dato, sino algo especial que se usa al crear el objeto.\n\nIdea fácil para recordar:\n- Clase = molde\n- Objeto = copia creada\n- Constructor = lo que ayuda a crear esa copia"
    },
    {
        "id": 36,
        "pregunta": "Si queremos acceder al primer elemento de un array, usaremos...",
        "opciones": [
            "A. array[1]",
            "B. array[array.length]",
            "C. array[0]",
            "D. array[1][1]"
        ],
        "respuesta_correcta": "C. array[0]",
        "explicacion": "Explicación fácil:\nEn Java, los arrays empiezan a contar desde 0, no desde 1.\n\nEs como si la primera casilla tuviera el número 0:\n- primera posición -> 0\n- segunda posición -> 1\n- tercera posición -> 2\n\nPor eso, si quieres coger el primer elemento, usas array[0].\n\nEjemplo:\nint[] array = {10, 20, 30};\nSystem.out.println(array[0]);\n\nEso mostraría 10, porque 10 es el primer elemento.\n\nPor qué las otras no:\n- A. array[1] -> eso sería el segundo elemento.\n- B. array[array.length] -> eso está mal, porque se sale del array. La última posición es length - 1.\n- D. array[1][1] -> eso sería para un array de dos dimensiones, y además no sería el primer elemento general.\n\nIdea fácil para recordar:\n- En arrays, el primero siempre empieza en 0."
    },
    {
        "id": 37,
        "pregunta": "Todas las excepciones deben de heredar de:",
        "opciones": [
            "A. La clase que contiene el método main o cualquier subclase.",
            "B. La clase Throwable o cualquier subclase.",
            "C. La clase System o cualquier subclase.",
            "D. Ninguna de las anteriores."
        ],
        "respuesta_correcta": "B. La clase Throwable o cualquier subclase.",
        "explicacion": "Explicación fácil:\nEn Java, todos los errores y excepciones importantes vienen de una clase grande llamada Throwable.\n\nEs como un árbol:\n- arriba del todo está Throwable\n- debajo están ramas como Exception y Error\n- y debajo de esas ya salen excepciones más concretas\n\nPor eso, si una excepción existe en Java, tiene que venir de Throwable.\n\nEjemplo:\nUna excepción típica como esta:\nArithmeticException\n\nviene de una familia así:\nThrowable\n └── Exception\n      └── RuntimeException\n           └── ArithmeticException\n\nAsí que sí, hereda de Throwable.\n\nPor qué las otras no:\n- A. La clase que contiene el método main... -> no tiene nada que ver con las excepciones.\n- C. La clase System... -> tampoco. System es otra clase de Java, pero no es la base de las excepciones.\n- D. Ninguna de las anteriores -> falso, porque la B sí es correcta.\n\nIdea fácil para recordar:\n- Throwable = la gran familia de errores y excepciones en Java."
    },
    {
        "id": 38,
        "pregunta": "TreeSet",
        "opciones": [
            "A. No existe este tipo de colección",
            "B. Es una colección que permite tener elementos duplicados",
            "C. Los datos se organizan en forma de árbol jerárquico",
            "D. Usa la interfaz map."
        ],
        "respuesta_correcta": "C. Los datos se organizan en forma de árbol jerárquico",
        "explicacion": "Explicación fácil:\nTreeSet sí existe en Java y sirve para guardar elementos ordenados y sin repetir.\n\nSe llama TreeSet porque por dentro organiza los datos como si fuera un árbol.\n\nEs como colocar números en una estantería en orden, no amontonados.\n\nEjemplo:\nTreeSet<Integer> numeros = new TreeSet<>();\nnumeros.add(5);\nnumeros.add(2);\nnumeros.add(8);\nnumeros.add(2);\n\nAl final quedaría algo así:\n[2, 5, 8]\n\n¿Por qué?\n- los ordena\n- y no guarda el 2 dos veces\n\nPor qué las otras no:\n- A. No existe este tipo de colección -> falso, sí existe.\n- B. Permite tener elementos duplicados -> falso, un TreeSet no admite duplicados.\n- D. Usa la interfaz map -> falso, TreeSet pertenece a la familia Set, no a Map.\n\nIdea fácil para recordar:\n- TreeSet = conjunto ordenado, sin repetidos, organizado como árbol"
    },
    {
        "id": 39,
        "pregunta": "Un caso base es",
        "opciones": [
            "A. Una plantilla para hacer recursividad",
            "B. Una condición de terminación de la recursividad.",
            "C. Un ejemplo de recursividad.",
            "D. Ninguna de las anteriores"
        ],
        "respuesta_correcta": "B. Una condición de terminación de la recursividad.",
        "explicacion": "Explicación fácil:\nCuando una función se llama a sí misma muchas veces, necesita un momento para parar.\nEse momento en el que dice ya no sigo más es el caso base.\n\nEs como bajar escalones:\n- bajas uno,\n- bajas otro,\n- bajas otro,\n- y cuando llegas al suelo, paras.\n\nEse suelo es el caso base.\n\nEjemplo:\nvoid contar(int n) {\n    if (n == 0) {\n        return;\n    }\n    contar(n - 1);\n}\n\nAquí el caso base es:\nif (n == 0)\n\nPorque cuando n vale 0, la función deja de llamarse a sí misma.\n\nPor qué las otras no:\n- A. Una plantilla para hacer recursividad -> no, no es una plantilla; es la condición para detenerla.\n- C. Un ejemplo de recursividad -> no, no es un ejemplo, sino una parte clave de ella.\n- D. Ninguna de las anteriores -> falso, porque la B sí es correcta.\n\nIdea fácil para recordar:\n- Caso base = la señal de STOP de la recursividad"
    },
    {
        "id": 40,
        "pregunta": "Una aplicación...",
        "opciones": [
            "A. No necesita manejar información.",
            "B. Necesita el manejo de información dependiendo de la funcionalidad.",
            "C. Necesita el manejo de información existiendo solo una entrada de datos.",
            "D. Necesita el manejo de información existiendo una entrada y salida de datos."
        ],
        "respuesta_correcta": "D. Necesita el manejo de información existiendo una entrada y salida de datos.",
        "explicacion": "Explicación fácil:\nUna aplicación normalmente recibe información y luego devuelve un resultado.\n\nEs como una máquina:\n- tú metes algo -> entrada\n- la máquina lo procesa\n- te da algo -> salida\n\nPor eso, una aplicación suele trabajar con entrada y salida de datos.\n\nEjemplo:\nUna calculadora:\n- entrada: escribes 2 + 3\n- salida: te muestra 5\n\nOtro ejemplo:\n- una app de notas recibe el texto que escribes\n- luego lo guarda o te lo enseña en pantalla\n\nPor qué las otras no:\n- A. No necesita manejar información -> falso, una aplicación precisamente trabaja con información.\n- B. Necesita el manejo de información dependiendo de la funcionalidad -> suena razonable, pero es demasiado vaga y no define bien el funcionamiento básico.\n- C. Necesita el manejo de información existiendo solo una entrada de datos -> incompleta, porque normalmente también hay salida.\n\nIdea fácil para recordar:\n- Aplicación = entra información, se procesa, sale un resultado"
    },
    {
      "id": 41,
      "pregunta": "Acoplamiento patológico:",
      "opciones": [
        "A. Se produce siempre que entre dos o más módulos se usen las mismas fuentes externas de datos.",
        "B. Se produce siempre que los módulos usen los mismos datos globales.",
        "C. Se produce siempre que un módulo acceda a otro para leer o modificar los datos internos del último.",
        "D. Todas las anteriores son correctas."
      ],
      "respuesta_correcta": "C. Se produce siempre que un módulo acceda a otro para leer o modificar los datos internos del último.",
      "explicacion": "Según la teoría de diseño modular, el acoplamiento patológico o por contenido ocurre exactamente cuando un módulo accede a los datos internos de otro para leerlos o modificarlos, lo cual es una mala práctica porque dificulta el mantenimiento."
    },
    {
      "id": 42,
      "pregunta": "Dentro de la simbología de los diagramas de flujo cuál de estas afirmaciones es falsa:",
      "opciones": [
        "A. Las operaciones que se vayan realizando deben de seguir un orden en concreto, y este orden se indica con flechas.",
        "B. Las decisiones se indican en un rombo donde pondremos tantas lineas de flujo como alternativas finales tengamos.",
        "C. Las operaciones de cálculo interno del programa se describen con una bandera.",
        "D. Cada uno de los diagramas de flujo comienzan y terminan con terminal que se representa con un óvalo o elipse."
      ],
      "respuesta_correcta": "C. Las operaciones de cálculo interno del programa se describen con una bandera.",
      "explicacion": "Esta afirmación es falsa porque, según la simbología estándar (ANSI) estudiada, las operaciones de cálculo interno del programa se describen gráficamente con un rectángulo, no con una bandera."
    },
    {
      "id": 43,
      "pregunta": "El valor Booleano:",
      "opciones": [
        "A. Es numérico.",
        "B. Es secuencial.",
        "C. Es modular.",
        "D. Ninguna de las anteriores."
      ],
      "respuesta_correcta": "D. Ninguna de las anteriores.",
      "explicacion": "La opción correcta es 'Ninguna de las anteriores'. Un valor booleano no es numérico, ni secuencial, ni modular; es un tipo de dato primitivo que únicamente representa valores lógicos, es decir, verdadero o falso."
    },
    {
      "id": 44,
      "pregunta": "En la cohesión comunicacional:",
      "opciones": [
        "A. Los elementos software que constituyen el módulo tienen una sola tarea definida.",
        "B. La salida de una instrucción debe de coincidir de manera estricta con la entrada.",
        "C. Conviven varias actividades paralelas que no siguen un orden específico y que comparten los mismos datos de entrada y salida.",
        "D. Ninguna de las anteriores es correcta."
      ],
      "respuesta_correcta": "C. Conviven varias actividades paralelas que no siguen un orden específico y que comparten los mismos datos de entrada y salida.",
      "explicacion": "La cohesión comunicacional se da en un módulo cuando conviven en él varias actividades que, aunque no siguen un orden o secuencia estricta, tienen en común que utilizan y comparten los mismos datos de entrada y salida."
    },
    {
      "id": 45,
      "pregunta": "En la cohesión lógica:",
      "opciones": [
        "A. Los elementos software que constituyen el módulo tienen una sola tarea definida.",
        "B. La salida de una instrucción debe de coincidir de manera estricta con la entrada.",
        "C. Conviven varias actividades paralelas que no siguen un orden específico y que comparten los mismos datos de entrada y salida.",
        "D. Ninguna de las anteriores es correcta."
      ],
      "respuesta_correcta": "D. Ninguna de las anteriores es correcta.",
      "explicacion": "Ninguna de las opciones A, B o C describe la cohesión lógica. La cohesión lógica se define como aquella donde los elementos realizan actividades de la misma categoría general, pero la selección de la actividad específica que se va a ejecutar se decide y se envía desde fuera del módulo."
    },
    {
      "id": 46,
      "pregunta": "Es una representación gráfica de elementos y sus relaciones.:",
      "opciones": [
        "A. Paradigma.",
        "B. Diagrama.",
        "C. Iteración",
        "D. Todas las anteriores son incorrectas."
      ],
      "respuesta_correcta": "B. Diagrama.",
      "explicacion": "Un diagrama (como por ejemplo un diagrama de flujo) se define conceptualmente como una representación gráfica que muestra visualmente un algoritmo, un proceso o un conjunto de elementos y cómo se relacionan entre sí."
    },
    {
      "id": 47,
      "pregunta": "La cohesión es una cualidad de la estructura:",
      "opciones": [
        "A. Secuencial.",
        "B. Alternativa.",
        "C. Iterativa.",
        "D. Ninguna de las anteriores."
      ],
      "respuesta_correcta": "D. Ninguna de las anteriores.",
      "explicacion": "La cohesión (al igual que el acoplamiento) es un criterio o cualidad que se utiliza para evaluar el diseño de la programación modular, no es una característica de las estructuras de control básicas (las cuales son la secuencial, la alternativa y la iterativa)."
    },
    {
      "id": 48,
      "pregunta": "La cohesión funcional, secuencial y comunicacional son cohesiones:",
      "opciones": [
        "A. Procedurales.",
        "B. Fuertes.",
        "C. Débiles.",
        "D. Ninguna de las anteriores."
      ],
      "respuesta_correcta": "B. Fuertes.",
      "explicacion": "En la escala de cohesión, la cohesión funcional, la secuencial y la comunicacional se clasifican como 'Cohesión fuerte'. Este grupo se considera el más deseable a la hora de programar porque es el que mejor favorece el mantenimiento del código."
    },
    {
      "id": 49,
      "pregunta": "La estructura basada en bucles es:",
      "opciones": [
        "A. Secuencial.",
        "B. Alternativa.",
        "C. Iterativa.",
        "D. Ninguna de las anteriores."
      ],
      "respuesta_correcta": "C. Iterativa.",
      "explicacion": "La estructura iterativa es la encargada de crear un bucle en el que se repite la ejecución de un conjunto de instrucciones de forma cíclica mientras se siga cumpliendo una condición dada."
    },
    {
      "id": 50,
      "pregunta": "La programación surgió como un intento para:",
      "opciones": [
        "A. Automatizar procesos.",
        "B. Dividir problemas en subproblemas más simples.",
        "C. Con paradigmas resolver otros problemas.",
        "D. Ninguno de los anteriores."
      ],
      "respuesta_correcta": "A. Automatizar procesos.",
      "explicacion": "Según la historia de la programación vista en la primera unidad, esta disciplina surgió con la finalidad principal de automatizar y llevar a cabo mediante máquinas tareas que, de hacerse de forma manual, resultaban tediosas y consumían muchísimo tiempo."
    },
    {
        "id": 51,
        "pregunta": "De una clase podemos extraer las... que necesitemos:",
        "opciones": [
          "A. Instancias.",
          "B. Abstracciones.",
          "C. Propiedades.",
          "D. Ninguna de las anteriores."
        ],
        "respuesta_correcta": "A. Instancias.",
        "explicacion": "El documento señala que la clase funciona como un modelo y que cada una de las instancias son los resultados específicos extraídos a partir de él."
    },
    {
        "id": 52,
        "pregunta": "De una clase podemos obtener la cantidad de objetos instanciados que se requieran:",
        "opciones": [
          "A. Es cierto.",
          "B. Es falso.",
          "C. Es cierto, pero el número de las instancias es limitado.",
          "D. Ninguno de los anteriores, las clases no se instancian."
        ],
        "respuesta_correcta": "A. Es cierto.",
        "explicacion": "El temario afirma claramente que de una clase podemos obtener la cantidad de objetos instanciados que se requieran, ya que la clase es considerada una plantilla para crear y definir objetos."
    },
    {
        "id": 53,
        "pregunta": "El encapsulamiento:",
        "opciones": [
          "A. Agrupación en un mismo elemento de los datos y las operaciones relacionadas con estos.",
          "B. Mecanismo que permite reducir la complejidad de los objetos minimizando la información a representar, dejando solo los aspectos más relevantes.",
          "C. Permite reutilizar el código de forma sencilla.",
          "D. Ninguna de las anteriores."
        ],
        "respuesta_correcta": "A. Agrupación en un mismo elemento de los datos y las operaciones relacionadas con estos.",
        "explicacion": "La encapsulación (o encapsulamiento) se define teóricamente como la agrupación en un mismo elemento de los datos y las operaciones relacionadas con estos, con el objetivo de ocultarlos y permitir el acceso solo mediante interfaces bien definidas."
    },
    {
        "id": 54,
        "pregunta": "Elementos que actúan como variables propias de cada instancia de una clase y que definen un atributo de un objeto:",
        "opciones": [
          "A. Propiedad.",
          "B. Método.",
          "C. Constructor.",
          "D. Ninguna de las anteriores."
        ],
        "respuesta_correcta": "D. Ninguna de las anteriores.",
        "explicacion": "La opción correcta es la D porque el concepto descrito en el enunciado corresponde a los 'campos', un término que no se encuentra entre las opciones A, B o C."
    },
    {
        "id": 55,
        "pregunta": "En el área intermedia de los diagramas de clase:",
        "opciones": [
          "A. Se encuentra el nombre de la clase.",
          "B. Se encuentran los campos de la clase.",
          "C. Se encuentran los métodos de la clase.",
          "D. Ninguna de las anteriores."
        ],
        "respuesta_correcta": "B. Se encuentran los campos de la clase.",
        "explicacion": "Según la representación de diagramas de clase (UML), la caja se divide en tres partes: el área superior contiene el nombre de la clase, el área intermedia contiene los campos de la clase y el área inferior contiene los métodos."
    },
    {
        "id": 56,
        "pregunta": "Es el elemento principal de POO:",
        "opciones": [
          "A. Clase.",
          "B. Campo.",
          "C. Objeto.",
          "D. Ninguna de las anteriores es correcta."
        ],
        "respuesta_correcta": "A. Clase.",
        "explicacion": "El texto especifica expresamente que la clase es el elemento principal de la Programación Orientada a Objetos (POO)."
    },
    {
        "id": 57,
        "pregunta": "Están formados por datos primitivos:",
        "opciones": [
          "A. Objetos primitivos.",
          "B. Objetos instanciados.",
          "C. Objetos simples y compuestos.",
          "D. Ninguna de las anteriores es correcta."
        ],
        "respuesta_correcta": "C. Objetos simples y compuestos.",
        "explicacion": "El documento detalla que los objetos simples están formados únicamente por datos primitivos, mientras que los objetos compuestos están formados por datos primitivos y, adicionalmente, por otros objetos pertenecientes a otras clases. Por lo tanto, ambos tipos contienen datos primitivos."
    },
    {
        "id": 58,
        "pregunta": "La forma de declarar las propiedades en Java:",
        "opciones": [
          "A. Es sencilla y permite reutilizar el código.",
          "B. No es sencilla, pero permite reutilizar el código.",
          "C. No es sencilla ni permite reutilizar el código.",
          "D. Todas las anteriores son incorrectas, Java no ofrece mecanismos para declararlas."
        ],
        "respuesta_correcta": "D. Todas las anteriores son incorrectas, Java no ofrece mecanismos para declararlas.",
        "explicacion": "A diferencia de otros lenguajes de programación en los que la declaración de propiedades varía, el documento menciona que Java no ofrece ningún mecanismo específico para su implementación."
    },
    {
        "id": 59,
        "pregunta": "La visión pública se representa con el símbolo:",
        "opciones": [
          "A. +.",
          "B. -.",
          "C. #.",
          "D. &."
        ],
        "respuesta_correcta": "A. +.",
        "explicacion": "En el contexto de la visibilidad de los miembros de una clase, la visibilidad pública se representa utilizando el signo de suma (+)."
    },
    {
        "id": 60,
        "pregunta": "No es una forma de polimorfismo:",
        "opciones": [
          "A. Asignación polimorfa.",
          "B. Ejecución polimorfa.",
          "C. Herencia polimorfa.",
          "D. Todas las anteriores son incorrectas."
        ],
        "respuesta_correcta": "C. Herencia polimorfa.",
        "explicacion": "Las formas de polimorfismo que reconoce la teoría descrita son la asignación polimorfa y la ejecución polimorfa. La 'herencia polimorfa' es un término inventado en este contexto y no es correcto."
    },
    {
        "id": 61,
        "pregunta": ".war es una extensión que:",
        "opciones": [
          "A. Almacena texto plano.",
          "B. Almacena bytecode.",
          "C. Es un archivo comprimido con ZIP.",
          "D. Ninguna de las anteriores es correcta."
        ],
        "respuesta_correcta": "D. Ninguna de las anteriores es correcta.",
        "explicacion": "Un archivo .war no almacena texto plano ni bytecode directamente como finalidad principal. Es una extensión utilizada en Java para empaquetar aplicaciones web, normalmente con recursos como clases compiladas, librerías, páginas JSP, HTML, archivos de configuración y otros elementos necesarios para desplegar una aplicación web. Aunque internamente pueda estar empaquetado de forma comprimida, en este test no se considera correcta la opción 'Es un archivo comprimido con ZIP', por lo que debe marcarse la opción D.."
      },
      {
        "id": 62,
        "pregunta": "Código traducido para que pueda ser interpretado por el microprocesador:",
        "opciones": [
          "A. Código fuente.",
          "B. Código máquina.",
          "C. Código intermedio.",
          "D. Todas las anteriores son incorrectas."
        ],
        "respuesta_correcta": "B. Código máquina.",
        "explicacion": "El código máquina es el nivel más bajo de programación, consistente en un conjunto de instrucciones binarias que el hardware (microprocesador) de la computadora puede entender y ejecutar directamente."
      },
      {
        "id": 63,
        "pregunta": "CIL o MSIL es una forma de .NET de llamar a:",
        "opciones": [
          "A. El código fuente.",
          "B. El código intermedio.",
          "C. El código máquina.",
          "D. Ninguno de los anteriores es correcto."
        ],
        "respuesta_correcta": "B. El código intermedio.",
        "explicacion": "Al igual que Java utiliza el 'bytecode' como código intermedio, la tecnología .NET de Microsoft compila su código fuente a un código intermedio que denomina CIL (Common Intermediate Language) o MSIL."
      },
      {
        "id": 64,
        "pregunta": "El compilador de basura se ejecuta en varios pasos, el último de ellos es:",
        "opciones": [
          "A. Compilar el código.",
          "B. Borrar los objetos no referenciados.",
          "C. Compactar el espacio usado.",
          "D. Marcar los objetos de eliminación."
        ],
        "respuesta_correcta": "C. Compactar el espacio usado.",
        "explicacion": "El recolector de basura (Garbage Collector) funciona en fases. Primero marca los objetos que siguen en uso, luego elimina los que ya no están referenciados y, finalmente, su último paso es compactar el espacio de memoria restante para evitar la fragmentación."
      },
      {
        "id": 65,
        "pregunta": "El lenguaje informático de alto nivel es aquel que:",
        "opciones": [
          "A. El microprocesador lee.",
          "B. Es semejante al humano.",
          "C. Se encuentra compilado.",
          "D. Ninguna de las anteriores."
        ],
        "respuesta_correcta": "B. Es semejante al humano.",
        "explicacion": "Los lenguajes de alto nivel surgieron para facilitar la programación, ya que utilizan una sintaxis, palabras y gramática que se asemejan mucho al lenguaje humano (generalmente en inglés), abstrayendo al programador del hardware."
      },
      {
        "id": 66,
        "pregunta": "En la configuración de NetBeans Keymap permite:",
        "opciones": [
          "A. Podremos elegir el tipo de simbología y la tipografía que utiliza el editor.",
          "B. Permite establecer shortcuts.",
          "C. Permite configurar como se comportará el depurador.",
          "D. Todas las anteriores son incorrectas."
        ],
        "respuesta_correcta": "B. Permite establecer shortcuts.",
        "explicacion": "Dentro de las opciones de configuración del Entorno de Desarrollo Integrado (IDE) NetBeans, la sección 'Keymap' está diseñada específicamente para que el desarrollador pueda personalizar y establecer atajos de teclado (shortcuts)."
      },
      {
        "id": 67,
        "pregunta": "Es una versión de Java:",
        "opciones": [
          "A. J2ME.",
          "B. J2SE.",
          "C. J2EE.",
          "D. Todas las anteriores son correctas."
        ],
        "respuesta_correcta": "D. Todas las anteriores son correctas.",
        "explicacion": "Java se dividió en distintas plataformas según el tipo de desarrollo a realizar: J2SE (Standard Edition para escritorio), J2EE (Enterprise Edition para servidores/web) y J2ME (Micro Edition para dispositivos móviles). Por lo tanto, todas son versiones válidas de Java."
      },
      {
        "id": 68,
        "pregunta": "GNU General Public License, version 2 es la licencia de:",
        "opciones": [
          "A. JDK.",
          "B. Java.",
          "C. OpenJDK.",
          "D. JRE."
        ],
        "respuesta_correcta": "C. OpenJDK.",
        "explicacion": "OpenJDK es la implementación libre y de código abierto de la plataforma Java (el JDK) y se distribuye bajo la licencia GNU General Public License, versión 2 (GPLv2)."
      },
      {
        "id": 69,
        "pregunta": "Un compilador JIT:",
        "opciones": [
          "A. Permite compilar directamente lenguaje de alto nivel.",
          "B. Nos permite ahorrar tiempo al evitar que traduzcamos varias veces el mismo código.",
          "C. Permite codificar código intermedio.",
          "D. Ninguna de las anteriores."
        ],
        "respuesta_correcta": "B. Nos permite ahorrar tiempo al evitar que traduzcamos varias veces el mismo código.",
        "explicacion": "El compilador Just-In-Time (JIT) traduce el código intermedio (bytecode) a código máquina en tiempo de ejecución. Guarda en memoria el código ya compilado para que, si se vuelve a ejecutar, no tenga que traducirlo de nuevo, ahorrando mucho tiempo de procesamiento."
      },
      {
        "id": 70,
        "pregunta": "Una de las desventajas del recolector de basura es:",
        "opciones": [
          "A. No se puede ejecutar a intervalos regulares.",
          "B. Consume recursos mientras se ejecuta.",
          "C. Solo se puede ejecutar cuando no queda memoria libre.",
          "D. Ninguna de las anteriores."
        ],
        "respuesta_correcta": "B. Consume recursos mientras se ejecuta.",
        "explicacion": "Aunque el Garbage Collector es una gran ventaja porque libera la memoria automáticamente, su principal desventaja es que necesita utilizar CPU y recursos del sistema para monitorizar y realizar su tarea, lo que puede afectar al rendimiento general en momentos puntuales."
      },

      {
          "id": 71,
          "pregunta": "Estos ,continue, default, else y try, son:",
          "opciones": [
            "A. Palabras reservadas.",
            "B. Notaciones.",
            "C. Constantes.",
            "D. Secuencias de escape."
          ],
          "respuesta_correcta": "A. Palabras reservadas.",
          "explicacion": "Términos como 'continue', 'default', 'else' y 'try' pertenecen al conjunto de palabras reservadas (keywords) del lenguaje Java, las cuales tienen un significado predefinido por el compilador para el control de flujo y el manejo de excepciones."
        },
        {
          "id": 72,
          "pregunta": "Estos, <, %, !, y ||, son:",
          "opciones": [
            "A. Constantes.",
            "B. Tipos de datos primitivos.",
            "C. Operadores.",
            "D. Variables."
          ],
          "respuesta_correcta": "C. Operadores.",
          "explicacion": "Estos símbolos son operadores utilizados en Java para realizar diferentes tipos de operaciones: relacionales (<), aritméticas (%), lógicas (!) y lógicas condicionales (||)."
        },
        {
          "id": 73,
          "pregunta": "Estos, char, int, boolean y double, son:",
          "opciones": [
            "A. Constantes.",
            "B. Tipos de datos primitivos.",
            "C. Operadores.",
            "D. Ninguna de las anteriores."
          ],
          "respuesta_correcta": "B. Tipos de datos primitivos.",
          "explicacion": "Las palabras 'char', 'int', 'boolean' y 'double' hacen referencia a los tipos de datos primitivos integrados en Java, los cuales sirven para almacenar caracteres, números enteros, valores de verdadero/falso y números decimales respectivamente."
        },
        {
          "id": 74,
          "pregunta": "Las palabras reservadas son:",
          "opciones": [
            "A. Palabras que cuentan con su propio significado, por lo que no se pueden utilizar como identificadores en los programas.",
            "B. Palabras que permiten realizar operaciones con las variables explicadas anteriormente.",
            "C. Palabras que, a lo largo de la vida del programa, mantienen un mismo valor.",
            "D. Ninguna de las anteriores."
          ],
          "respuesta_correcta": "A. Palabras que cuentan con su propio significado, por lo que no se pueden utilizar como identificadores en los programas.",
          "explicacion": "Las palabras reservadas son clave dentro de la sintaxis del lenguaje. Tienen un propósito específico y estructurado, por lo que el compilador prohíbe terminantemente usarlas para nombrar variables, clases, métodos u otros identificadores."
        },
        {
          "id": 75,
          "pregunta": "Los comentarios pueden iniciarse con la marca:",
          "opciones": [
            "A. //.",
            "B. /*.",
            "C. /**.",
            "D. Todas las anteriores son correctas."
          ],
          "respuesta_correcta": "D. Todas las anteriores son correctas.",
          "explicacion": "En Java existen tres formas válidas para iniciar comentarios: de una sola línea usando '//', de múltiples líneas usando '/*' y comentarios de documentación (Javadoc) usando '/**'."
        },
        {
          "id": 76,
          "pregunta": "Los datos primitivos al realizar casting pueden ser:",
          "opciones": [
            "A. Declarados y no declarados.",
            "B. Implícitos y explícitos.",
            "C. Autoboxing y unboxing.",
            "D. Compilatorio y compilado."
          ],
          "respuesta_correcta": "B. Implícitos y explícitos.",
          "explicacion": "La conversión de tipos de datos o 'casting' puede darse de dos formas: de manera implícita (cuando se pasa de un tipo menor a uno mayor y lo hace automáticamente el compilador) o de manera explícita (cuando se pasa de un tipo mayor a uno menor y el programador debe forzarlo)."
        },
        {
          "id": 77,
          "pregunta": "Palabras que cuentan con su propio significado, por lo que no se pueden utilizar como identificadores en los programas:",
          "opciones": [
            "A. Constantes.",
            "B. Identificadores.",
            "C. String.",
            "D. Ninguna de las anteriores."
          ],
          "respuesta_correcta": "D. Ninguna de las anteriores.",
          "explicacion": "La definición proporcionada en la pregunta corresponde al concepto de 'Palabras reservadas'. Como ninguna de las opciones A, B o C es 'Palabras reservadas', la respuesta correcta es la D."
        },
        {
          "id": 78,
          "pregunta": "Sistemas de signos destinado a representar símbolos o conceptos especiales por pertenecer a campos específicos y por lo tanto no encontrarse en el lenguaje general:",
          "opciones": [
            "A. lowercase.",
            "B. UpperCamelCase.",
            "C. Datos primitivos.",
            "D. Notación."
          ],
          "respuesta_correcta": "D. Notación.",
          "explicacion": "El término 'notación' se define como el sistema de reglas y signos adoptado convencionalmente para representar conceptos específicos, como en el caso de las convenciones de nomenclatura (ej. CamelCase) usadas en programación."
        },
        {
          "id": 79,
          "pregunta": "Un identificador puede emplear el símbolo:",
          "opciones": [
            "A. &.",
            "B. %.",
            "C. $.",
            "D. #."
          ],
          "respuesta_correcta": "C. $.",
          "explicacion": "Las reglas de sintaxis de Java establecen que un identificador válido debe comenzar con una letra, un guion bajo (_) o un símbolo de dólar ($). El resto de símbolos mostrados (&, %, #) darán un error de compilación si se intentan usar en un nombre."
        },
        {
          "id": 80,
          "pregunta": "Un paquete paquetes:",
          "opciones": [
            "A. Identifica las clases cuyas características sean comunes y las agrupa.",
            "B. Mantiene independientes las declaraciones que son realizadas en un paquete de las que existen en otros paquetes.",
            "C. Puede controlar la visibilidad de los elementos contenidos en él.",
            "D. Todas las anteriores son correctas."
          ],
          "respuesta_correcta": "D. Todas las anteriores son correctas.",
          "explicacion": "Los paquetes (packages) en Java cumplen con todas esas funciones fundamentales: organizan y agrupan lógicamente clases relacionadas, evitan conflictos de nombres manteniendo los espacios de nombres independientes, y permiten aplicar reglas de visibilidad (modificadores de acceso)."
        },
    {
        "id": 81,
        "pregunta": "La depuración",
        "opciones": [
          "A. Es el proceso encargado de hacer pruebas unitarias.",
          "B. Permite inspeccionar el código para eliminar posibles errores.",
          "C. Determinar el resultado de la aplicación según la entrada de datos.",
          "D. Todas las anteriores son correctas."
        ],
        "respuesta_correcta": "D. Todas las anteriores son correctas.",
        "explicacion": "Explicación fácil:\\nLa depuración sirve para revisar un programa y comprobar si funciona como debería.\\n\\nCuando depuras, puedes ir mirando el código paso a paso para encontrar errores, comprobar qué valores tienen las variables y ver si el resultado que obtiene la aplicación coincide con lo esperado según los datos de entrada.\\n\\nPor eso, según el test, todas las opciones son correctas:\\n- Puede relacionarse con pruebas para comprobar el funcionamiento del código.\\n- Permite inspeccionar el código para eliminar posibles errores.\\n- Ayuda a determinar si el resultado de la aplicación es correcto según la entrada de datos.\\n\\nEjemplo:\\nImagina que haces una calculadora y al sumar 2 + 3 te devuelve 8. Con la depuración puedes ir paso a paso para ver dónde se está haciendo mal la operación.\\n\\nIdea fácil para recordar:\\nDepurar = revisar el programa por dentro para encontrar y corregir fallos.\."
      },
      {
        "id": 82,
        "pregunta": "La entrada de datos puede ser.",
        "opciones": [
          "A. Mediante argumentos.",
          "B. Por consola.",
          "C. Otros.",
          "D. Todas las opciones son correctas."
        ],
        "respuesta_correcta": "D. Todas las opciones son correctas.",
        "explicacion": "En Java, la entrada de datos a una aplicación puede provenir de múltiples fuentes: pasándole parámetros (argumentos) al método main al iniciar, capturando lo que el usuario escribe por consola (mediante Scanner, por ejemplo), o leyendo desde 'otros' orígenes como ficheros, bases de datos o red."
      },
      {
        "id": 83,
        "pregunta": "La estructura for",
        "opciones": [
          "A. Es una estructura de repetición o iterativa.",
          "B. Es una estructura condicional.",
          "C. Es una estructura de salto incondicional.",
          "D. Es una estructura de flujo."
        ],
        "respuesta_correcta": "A. Es una estructura de repetición o iterativa.",
        "explicacion": "La sentencia 'for' es una de las principales estructuras de control iterativo (bucles) en programación. Sirve para repetir un bloque de código un número determinado de veces basado en una inicialización, una condición y un incremento."
      },
      {
        "id": 84,
        "pregunta": "La estructura if",
        "opciones": [
          "A. Permite ejecutar una parte de código según una condición",
          "B. Permite hacer saltos incondicionales",
          "C. Permite ejecutar varias veces una parte de código",
          "D. Solo se ejecuta una vez"
        ],
        "respuesta_correcta": "A. Permite ejecutar una parte de código según una condición",
        "explicacion": "La sentencia 'if' es una estructura de control alternativa o condicional. Evalúa una expresión booleana (verdadera o falsa) y, en función de ese resultado, decide si se ejecuta o no un bloque de código determinado."
      },
      {
        "id": 85,
        "pregunta": "La salida de datos por consola en java se emplea",
        "opciones": [
          "A. System.out por defecto.",
          "B. System.in por defecto.",
          "C. System.out por defecto y System.err para salidas de error.",
          "D. Todas las opciones son correctas."
        ],
        "respuesta_correcta": "C. System.out por defecto y System.err para salidas de error.",
        "explicacion": "En Java, el flujo estándar para imprimir mensajes normales en la consola es 'System.out' (mediante print o println). Adicionalmente, se cuenta con el flujo 'System.err', que está específicamente diseñado para imprimir mensajes de error o advertencias de manera separada."
      },
      {
        "id": 86,
        "pregunta": "La sentencia break permite",
        "opciones": [
          "A. Parar la ejecución de un bucle para ejecutar la próxima instrucción fuera del bucle.",
          "B. Salta una interacción",
          "C. Rompe la ejecución y detiene la aplicación.",
          "D. Ninguna de las anteriores es correcta."
        ],
        "respuesta_correcta": "A. Parar la ejecución de un bucle para ejecutar la próxima instrucción fuera del bucle.",
        "explicacion": "La instrucción 'break' se utiliza para interrumpir inmediatamente la ejecución de la estructura de repetición (for, while, do-while) o el switch en el que se encuentra, pasando el control a la siguiente línea de código fuera de dicho bloque."
      },
      {
        "id": 87,
        "pregunta": "Que hace el siguiente código.",
        "imagen": "images/programacion/pregunta87.png",
        "opciones": [
          "A. Solo se ejecutará la instrucción i++.",
          "B. Se imprimirá por pantalla 10 veces.",
          "C. Se ejecutará 10 veces la instrucción de imprimir y 10 veces la instrucción i++",
          "D. No hará nada."
        ],
        "respuesta_correcta": "A. Solo se ejecutará la instrucción i++.",
        "explicacion": "Asumiendo un bucle de inicialización típica como 'for (int i = 0; i < 10; i++)', la evaluación de la condición es verdadera durante diez ciclos exactos. Como resultado, el cuerpo del bucle (imprimir) se ejecutará 10 veces, al igual que la instrucción de incremento de la variable de control (i++)."
      },
      {
        "id": 88,
        "pregunta": "Que hace el siguiente código:",
        "imagen": "images/programacion/pregunta88.png",
        "opciones": [
          "A. Según el valor de la variable opciones ejecutara solo el código de uno de los valores 'a', 'b', 'c' o 'd'.",
          "B. Según el valor de la variable opciones ejecutará solo el código de uno de los valores que no sean ni 'a', 'b', 'c' y 'd'.",
          "C. Ejecutará el código de la opciones 'a', 'b', 'c' y 'd'",
          "D. Si la variable opciones es verdadera, ejecutará cada parte de las opciones."
        ],
        "respuesta_correcta": "A. Según el valor de la variable opciones ejecutara solo el código de uno de los valores 'a', 'b', 'c' o 'd'.",
        "explicacion": "El código mostrado es una estructura 'switch'. Esta estructura evalúa el valor exacto de la variable 'opciones' y lo compara con cada uno de los 'case'. Al coincidir con uno de ellos, ejecuta sus sentencias y se detiene (gracias a los 'break' mostrados en la imagen original)."
      },
      {
        "id": 89,
        "pregunta": "Que método permite obtener una línea completa por teclado.",
        "opciones": [
          "A. Next().",
          "B. nextLine().",
          "C. hasNext().",
          "D. hasNextInt()."
        ],
        "respuesta_correcta": "B. nextLine().",
        "explicacion": "Al utilizar la clase Scanner en Java para leer la entrada del usuario, el método 'nextLine()' es el indicado para capturar y devolver todos los caracteres introducidos en una misma línea hasta que el usuario pulsa la tecla 'Enter' (salto de línea)."
      },
      {
        "id": 90,
        "pregunta": "Una aplicación...",
        "opciones": [
          "A. No necesita manejar información.",
          "B. Necesita el manejo de información dependiendo de la funcionalidad.",
          "C. Necesita el manejo de información existiendo solo una entrada de datos.",
          "D. Necesita el manejo de información existiendo una entrada y salida de datos."
        ],
        "respuesta_correcta": "D. Necesita el manejo de información existiendo una entrada y salida de datos.",
        "explicacion": "Para que un programa sea considerado útil y completo desde la perspectiva del flujo de datos, necesita recibir información para procesar (entrada) y, tras aplicar su lógica interna, devolver el resultado al usuario o al sistema (salida)."
      },
{
    "id": 91,
    "pregunta": "¿Cuál es la palabra reservada que convierte a un campo en común entre todos los objetos de una clase?",
    "opciones": [
      "A. Static.",
      "B. getter.",
      "C. setter.",
      "D. Todas las anteriores son incorrectas."
    ],
    "respuesta_correcta": "A. Static.",
    "explicacion": "En Java, la palabra reservada 'static' indica que un campo o método pertenece a la clase en sí y no a una instancia específica. De este modo, todos los objetos creados a partir de esa clase compartirán ese mismo valor en memoria."
  },
  {
    "id": 92,
    "pregunta": "Garbage collector es un mecanismo de:",
    "opciones": [
      "A. C++.",
      "B. Delphi.",
      "C. Java.",
      "D. Ninguna de las anteriores."
    ],
    "respuesta_correcta": "C. Java.",
    "explicacion": "El Garbage Collector (Recolector de Basura) es uno de los mecanismos clave integrados en la Máquina Virtual de Java (JVM). A diferencia de lenguajes como C++ donde la memoria se libera manualmente, en Java se gestiona automáticamente."
  },
  {
    "id": 93,
    "pregunta": "Jfreechar es:",
    "opciones": [
      "A. Un tipo de libreria.",
      "B. Un tipo de dato.",
      "C. Un tipo de llamada para métodos.",
      "D. Un tipo de mecanismo de Java."
    ],
    "respuesta_correcta": "A. Un tipo de libreria.",
    "explicacion": "JFreeChart (escrito en el test como Jfreechar) es una conocida librería externa o biblioteca de código abierto escrita en Java, utilizada para generar de forma sencilla gráficos visuales de alta calidad."
  },
  {
    "id": 94,
    "pregunta": "Los campos también pueden ser llamados:",
    "opciones": [
      "A. Atributos.",
      "B. Variables.",
      "C. Fields.",
      "D. Todas las anteriores son correctas."
    ],
    "respuesta_correcta": "D. Todas las anteriores son correctas.",
    "explicacion": "En el contexto de la Programación Orientada a Objetos, las propiedades que guardan el estado de una clase se denominan indistintamente como campos, atributos o variables (de instancia o clase). 'Fields' es simplemente la traducción directa en inglés."
  },
  {
    "id": 95,
    "pregunta": "Los métodos pueden operar devolviendo algún resultado o sin tener que devolver ningún valor, indicando ___ en la declaración del método.:",
    "opciones": [
      "A. Null.",
      "B. Void.",
      "C. 0.",
      "D. 000."
    ],
    "respuesta_correcta": "B. Void.",
    "explicacion": "La palabra reservada 'void' (vacío) se utiliza estrictamente en la declaración de un método para indicarle al compilador que dicho método realizará una acción, pero no devolverá ningún tipo de dato como resultado."
  },
  {
    "id": 96,
    "pregunta": "Para instanciar un objeto solo será necesario indicar este operador junto al nombre de clase:",
    "opciones": [
      "A. &.",
      "B. %.",
      "C. $.",
      "D. Ninguno de los anteriores."
    ],
    "respuesta_correcta": "D. Ninguno de los anteriores.",
    "explicacion": "Para instanciar o crear un nuevo objeto en Java, la sintaxis exige usar el operador reservado 'new' seguido de la llamada al constructor de la clase. Como el operador 'new' no está entre las opciones A, B o C, la correcta es la D."
  },
  {
    "id": 97,
    "pregunta": "Sobrecarga de métodos:",
    "opciones": [
      "A. Declaración de métodos diferentes en una misma clase con diferentes parámetros.",
      "B. Declaración de un mismo parámetro en una misma clase, en diferentes métodos.",
      "C. Declaración de un mismo método en una misma clase, pero con diferentes parámetros.",
      "D. Declaración de diferentes parámetros en una misma clase, en un mismo método."
    ],
    "respuesta_correcta": "C. Declaración de un mismo método en una misma clase, pero con diferentes parámetros.",
    "explicacion": "La sobrecarga (overloading) es una característica que permite definir dentro de una misma clase dos o más métodos con exactamente el mismo nombre, siempre y cuando su firma (la cantidad, tipo o el orden de los parámetros) sea distinta."
  },
  {
    "id": 98,
    "pregunta": "También mencionado como getter. Permiten consultar un campo:",
    "opciones": [
      "A. Constructores.",
      "B. Observadores.",
      "C. Modificadores.",
      "D. Ninguna de las anteriores es correcta"
    ],
    "respuesta_correcta": "B. Observadores.",
    "explicacion": "A los métodos cuyo único propósito es consultar, leer u 'observar' el valor de una propiedad privada de un objeto se les conoce conceptualmente como métodos observadores o, más comúnmente en Java, como métodos 'getter'."
  },
  {
    "id": 99,
    "pregunta": "Tipo de visibilidad, tendrá acceso a la clase desde el mismo paquete o subclases que estén en diferente paquete. Una clase externa en otro paquete no tendrá acceso:",
    "opciones": [
      "A. Public.",
      "B. Protected.",
      "C. Package o estándar.",
      "D. Private."
    ],
    "respuesta_correcta": "B. Protected.",
    "explicacion": "El modificador de acceso 'protected' en Java ofrece un nivel de seguridad intermedio: restringe el acceso para que solo clases del mismo paquete o clases que hereden de ella (subclases), incluso si están en otro paquete, puedan acceder."
  },
  {
    "id": 100,
    "pregunta": "Tipos de paso al enviar un método: Envía una copia del valor original y por lo tanto no se puede modificar el valor original:",
    "opciones": [
      "A. Por referencia.",
      "B. Por frecuencia.",
      "C. Por constantes.",
      "D. Por valor."
    ],
    "respuesta_correcta": "D. Por valor.",
    "explicacion": "El paso 'por valor' implica que al método se le envía únicamente una copia de la información de la variable. Cualquier modificación que se le haga a este dato dentro del método no alterará la variable original en el código que lo llamó."
  },
  {
      "id": 101,
      "pregunta": "Al sobrescribir el método este se modificará para la clase concreta, el método original:",
      "opciones": [
        "A. Se eliminará de la clase padre.",
        "B. Seguirá estando disponible para la clase padre u otras clases que hereden.",
        "C. También se sobrescribirá.",
        "D. Cambiará su visibilidad a público."
      ],
      "respuesta_correcta": "B. Seguirá estando disponible para la clase padre u otras clases que hereden.",
      "explicacion": "Cuando se aplica el proceso de sobrescritura (override) en una clase hija, el método original de la superclase no se altera ni se elimina; simplemente se proporciona una implementación específica para la subclase, manteniendo el original intacto y disponible tanto en la clase padre como para el resto de clases descendientes."
    },
    {
      "id": 102,
      "pregunta": "El operador instaceof:",
      "opciones": [
        "A. Permite crear una instancia de una clase.",
        "B. Permite crear una instancia de una clase evitando que herede los métodos de esta.",
        "C. Permite comprobar si un objeto es instancia de un tipo concreto.",
        "D. Todas las anteriores son incorrectas."
      ],
      "respuesta_correcta": "C. Permite comprobar si un objeto es instancia de un tipo concreto.",
      "explicacion": "El operador 'instanceof' se utiliza en tiempo de ejecución para comprobar el tipo de un objeto. Con él podemos evaluar y determinar si un objeto pertenece a una clase en particular, a una de sus subclases, o si implementa una interfaz específica."
    },
    {
      "id": 103,
      "pregunta": "La interfaz permite:",
      "opciones": [
        "A. La organización y estructuración del código.",
        "B. La separación de la parte visual a su implementación.",
        "C. Las dos anteriores son correctas.",
        "D. Ninguna de las anteriores es correcta."
      ],
      "respuesta_correcta": "C. Las dos anteriores son correctas.",
      "explicacion": "Las interfaces son fundamentales en la programación orientada a objetos porque obligan a cumplir un contrato, facilitando la organización de las clases y permitiendo separar la definición abstracta de un comportamiento (el qué) de la lógica real interna que lo ejecuta (el cómo)."
    },
    {
      "id": 104,
      "pregunta": "Las clases abstractas:",
      "opciones": [
        "A. Pueden ser instanciadas normalmente.",
        "B. Pueden ser instanciadas per requieren de la palabra reservada abstract.",
        "C. No puede ser instanciada ni empleada de otro modo.",
        "D. No puede ser instanciada, pero sí empleada para la herencia."
      ],
      "respuesta_correcta": "D. No puede ser instanciada, pero sí empleada para la herencia.",
      "explicacion": "Una clase que se declara utilizando la palabra clave 'abstract' sirve como modelo o plantilla base incompleta. Por este motivo, el compilador de Java prohíbe crear objetos (instanciar) directamente de ella, permitiendo su uso exclusivamente como clase padre de la que heredar."
    },
    {
      "id": 105,
      "pregunta": "¿Qué afirmación es verdadera con respecto a los constructores en la herencia y clases abstractas?",
      "opciones": [
        "A. Existen en las clases abstractas para facilitar la construcción de objetos.",
        "B. Los constructores no pueden ser heredados directamente.",
        "C. Se pueden sobreescribir con Override",
        "D. Todas las anteriores son correctas."
      ],
      "respuesta_correcta": "B. Los constructores no pueden ser heredados directamente.",
      "explicacion": "En Java, los constructores son miembros de inicialización especiales y la regla fundamental es que las subclases no los heredan. Si una clase hija quiere hacer uso del proceso de construcción de su clase padre, debe invocarlo de manera manual mediante la palabra clave 'super()'."
    },
    {
      "id": 106,
      "pregunta": "Los métodos sobrescritos tendrán que añadir encima de la cabecera del método la palabra reservada:",
      "opciones": [
        "A. @override.",
        "B. @overwrite.",
        "C. $override.",
        "D. $overwrite."
      ],
      "respuesta_correcta": "A. @override.",
      "explicacion": "Para indicar explícitamente al compilador (y a otros programadores) que estamos rediseñando un comportamiento heredado de la clase padre o de una interfaz, se debe utilizar la anotación estándar '@Override' justo en la línea superior a la firma del método."
    },
    {
      "id": 107,
      "pregunta": "No pueden pasar por un proceso de override:",
      "opciones": [
        "A. Métodos.",
        "B. Métodos abstractos.",
        "C. Constructores.",
        "D. Todas las anteriores son incorrectas."
      ],
      "respuesta_correcta": "C. Constructores.",
      "explicacion": "La sobrescritura (override) está reservada para modificar la forma de trabajar de los métodos heredados. Como los constructores no se heredan, es imposible sobrescribirlos; lo máximo que se puede hacer con ellos dentro de la misma clase es sobrecargarlos (crear varios con distintos parámetros)."
    },
    {
      "id": 108,
      "pregunta": "Palabra reservada que permite llamar y hacer uso de la interfaz:",
      "opciones": [
        "A. null.",
        "B. void.",
        "C. status.",
        "D. Ninguna de las anteriores es correcta."
      ],
      "respuesta_correcta": "D. Ninguna de las anteriores es correcta.",
      "explicacion": "Para que una clase aplique y haga uso del contrato que establece una interfaz, la palabra reservada correcta en Java es 'implements'. Dado que no se encuentra entre las alternativas listadas, la opción correcta es la D."
    },
    {
      "id": 109,
      "pregunta": "Relación donde una clase no tiene sentido sin otra, ambas son dependientes:",
      "opciones": [
        "A. Asociación.",
        "B. Composición de clases.",
        "C. Agregación.",
        "D. Entrelazado."
      ],
      "respuesta_correcta": "B. Composición de clases.",
      "explicacion": "La composición es el nivel más estricto de relación jerárquica entre objetos ('todo/parte'). Se da cuando el ciclo de vida del objeto contenedor ('todo') está intrínsecamente ligado a los objetos contenidos ('partes'), significando que si el objeto principal se destruye, las partes también desaparecen."
    },
    {
      "id": 110,
      "pregunta": "Subrutina que permite instanciar objetos a partir de una clase:",
      "opciones": [
        "A. Constructores.",
        "B. Observadores.",
        "C. Modificadores.",
        "D. Ninguna de las anteriores es correcta"
      ],
      "respuesta_correcta": "A. Constructores.",
      "explicacion": "Los constructores son métodos especiales con el mismo nombre que la clase que se encargan de asignar la memoria e inicializar el estado del objeto en el preciso momento en que se invoca la instrucción de creación 'new'."
    },
{
    "id": 111,
    "pregunta": "¿Cómo podemos conocer la longitud de un array?",
    "opciones": [
      "A. Recorriendo todo el array y guardando el total de elementos.",
      "B. Con la función .length",
      "C. Las opciones a) y b) son correctas.",
      "D. Ninguna opción es correcta."
    ],
    "respuesta_correcta": "C. Las opciones a) y b) son correctas.",
    "explicacion": "En Java, todos los arrays tienen una propiedad pública y de solo lectura llamada '.length' (aunque el test la llame función) que devuelve instantáneamente la cantidad exacta de elementos para la que fue dimensionado el array, sin necesidad de recorrerlo."
  },
  {
    "id": 112,
    "pregunta": "¿De qué tipo se puede declarar los valores un array?",
    "opciones": [
      "A. Tipo primitivo o abstracto.",
      "B. Tipo primitivo.",
      "C. Tipo abstracto.",
      "D. Ninguna de las anteriores."
    ],
    "respuesta_correcta": "A. Tipo primitivo o abstracto.",
    "explicacion": "En Java, los arrays son muy flexibles respecto a lo que pueden contener: pueden almacenar tanto tipos de datos primitivos (como int, double, boolean) como objetos o tipos de datos abstractos (clases, interfaces, etc.)."
  },
  {
    "id": 113,
    "pregunta": "¿Es posible cambiar el tamaño de un array durante su ejecución?",
    "opciones": [
      "A. Sí.",
      "B. Sí, solo cuando tenga un primer valor asignado.",
      "C. Sí, en cualquier momento.",
      "D. No, solo se puede indicar su tamaño en la declaración inicial."
    ],
    "respuesta_correcta": "D. No, solo se puede indicar su tamaño en la declaración inicial.",
    "explicacion": "Los arrays tradicionales en Java son estructuras de tamaño estático. Una vez que se instancian y se les asigna una longitud en la memoria, este tamaño no puede aumentar ni disminuir durante la ejecución del programa."
  },
  {
    "id": 114,
    "pregunta": "¿Qué función permite cortar una cadena de caracteres?",
    "opciones": [
      "A. replace(String cadenaBuscada, String remplazo)",
      "B. substring(int posiciónInicial, int posiciónFinal)",
      "C. trim()",
      "D. contains (String cadena)"
    ],
    "respuesta_correcta": "B. substring(int posiciónInicial, int posiciónFinal)",
    "explicacion": "El método 'substring' de la clase String se utiliza específicamente para extraer o 'cortar' una porción de una cadena, indicándole el índice donde debe empezar y el índice donde debe terminar."
  },
  {
    "id": 115,
    "pregunta": "El tipo String se considera por ser:",
    "opciones": [
      "A. Tipo primitivo que define una cadena de caracteres.",
      "B. Tipo primitivo que define una agrupación de datos de tipo carácter.",
      "C. Tipo primitivo que define un conjunto de cadenas.",
      "D. Todas las anteriores son falsas."
    ],
    "respuesta_correcta": "D. Todas las anteriores son falsas.",
    "explicacion": "Todas son falsas porque en Java el tipo 'String' NO es un tipo primitivo (como sí lo son int o char). String es una Clase (un tipo de dato de referencia u objeto) que representa una secuencia de caracteres."
  },
  {
    "id": 116,
    "pregunta": "Indica que código es el correcto para cambiar el número 10,5 a cadena.",
    "opciones": [
      "A. String.valueOf(10,5f);",
      "B. Float.parseFloat(10,5f);",
      "C. New String(10,5f);",
      "D. String.parseString(10,5f);"
    ],
    "respuesta_correcta": "A. String.valueOf(10,5f);",
    "explicacion": "Para convertir un valor numérico (en este caso un número con decimales o flotante indicado por la 'f') a un objeto de tipo texto, se utiliza el método estático 'valueOf' de la clase String."
  },
  {
    "id": 117,
    "pregunta": "Indica que código es el correcto para inicializar un array",
    "opciones": [
      "A. int [][] numeros = new int[2][1]; numeros[0][0] = 1; numeros[1][0] = 2;",
      "B. int [][] numeros1 = {{1},{2}};",
      "C. int [][] numeros2 = números.clone();",
      "D. Todas las opciones son correctas."
    ],
    "respuesta_correcta": "D. Todas las opciones son correctas.",
    "explicacion": "Java permite múltiples formas de inicializar un array: de forma explícita instanciando su tamaño y luego asignando sus valores (A), de forma directa usando llaves o literales de array (B), y clonando un array previamente existente (C)."
  },
  {
    "id": 118,
    "pregunta": "Si queremos hacer una copia exacta y que el objeto sea independiente de un array de tipo clase estamos hablando de:",
    "opciones": [
      "A. Copia shallow",
      "B. Copia deep",
      "C. Copia uno a uno",
      "D. Copia incremental"
    ],
    "respuesta_correcta": "B. Copia deep",
    "explicacion": "La copia profunda (Deep copy) consiste en duplicar un array (u objeto) de manera que se creen nuevas instancias en memoria para todos y cada uno de los elementos internos, logrando que el original y la copia sean totalmente independientes."
  },
  {
    "id": 119,
    "pregunta": "Si se quiere acceder al primer y último elemento de un array de tipo int con un total de valores de 10, usaremos el siguiente código:",
    "opciones": [
      "A. int primerElemento = nombreArray[1]; int ultimoElemento = nombreArray[9];",
      "B. int primerElemento = nombreArray[1]; int ultimoElemento = nombreArray[10];",
      "C. int primerElemento = nombreArray[0]; int ultimoElemento = nombreArray[9];",
      "D. int primerElemento = nombreArray[0]; int ultimoElemento = nombreArray[10];"
    ],
    "respuesta_correcta": "C. int primerElemento = nombreArray[0]; int ultimoElemento = nombreArray[9];",
    "explicacion": "En Java, los índices de los arrays siempre comienzan a contar desde cero (0). Por lo tanto, si un array tiene 10 elementos, su primera posición será la [0] y la última será la longitud menos uno, es decir, la [9]."
  },
  {
    "id": 120,
    "pregunta": "Un array se puede definir como:",
    "opciones": [
      "A. Un objeto estático que almacena elementos de forma secuencial un número ilimitado de valores.",
      "B. Un objeto estático que almacena elementos de forma secuencial un número limitado de valores.",
      "C. Un objeto dinámico que almacena elementos de forma secuencial un número limitado de valores.",
      "D. Un objeto dinámico que almacena elementos de forma secuencial un número ilimitado de valores."
    ],
    "respuesta_correcta": "B. Un objeto estático que almacena elementos de forma secuencial un número limitado de valores.",
    "explicacion": "Un array se define como una estructura de datos estática porque, al crearse, se le debe definir un límite de tamaño fijo en memoria y almacena los datos de un mismo tipo de manera secuencial o contigua."
  },
{
    "id": 121,
    "pregunta": "¿Qué es una colección?",
    "opciones": [
      "A. Una estructura estática que almacena elementos de forma secuencial con un tamaño ilimitado de valores.",
      "B. Una estructura estática que almacena elementos con un tamaño limitado de valores.",
      "C. Una estructura dinámica que almacena un grupo de elementos limitado.",
      "D. Una estructura dinámica que almacena un grupo de elementos ilimitado."
    ],
    "respuesta_correcta": "D. Una estructura dinámica que almacena un grupo de elementos ilimitado.",
    "explicacion": "A diferencia de los arrays tradicionales que son estáticos y de tamaño fijo, las colecciones en Java son estructuras de datos dinámicas que pueden crecer o reducir su tamaño automáticamente según sea necesario, permitiendo almacenar un número teóricamente ilimitado de elementos durante la ejecución."
  },
  {
    "id": 122,
    "pregunta": "Collection es la interfaz de:",
    "opciones": [
      "A. Set, List y Queue",
      "B. Map",
      "C. TreeMap",
      "D. Ninguna de las anteriores"
    ],
    "respuesta_correcta": "A. Set, List y Queue",
    "explicacion": "En la jerarquía del Java Collections Framework, la interfaz raíz 'Collection' es la interfaz padre directa de la cual heredan las subinterfaces principales: Set (conjuntos), List (listas) y Queue (colas). La interfaz Map funciona bajo su propia jerarquía independiente."
  },
  {
    "id": 123,
    "pregunta": "Con ArrayDeque se puede implementar:",
    "opciones": [
      "A. Una cola.",
      "B. Una pila..",
      "C. Una cola y pila simultáneamente.",
      "D. Todas las opciones son correctas."
    ],
    "respuesta_correcta": "D. Todas las opciones son correctas.",
    "explicacion": "La clase ArrayDeque implementa la interfaz Deque (Double Ended Queue), lo que significa que permite insertar y eliminar elementos por ambos extremos. Gracias a esto, es sumamente versátil y puede funcionar como una Cola (FIFO), como una Pila (LIFO) o ambas al mismo tiempo."
  },
  {
    "id": 124,
    "pregunta": "Indica la principal característica de una colección Set",
    "opciones": [
      "A. Puede tener elementos repetidos.",
      "B. Ordena sus elementos.",
      "C. Permite tener valores null.",
      "D. No puede tener elemento repetidos."
    ],
    "respuesta_correcta": "D. No puede tener elemento repetidos.",
    "explicacion": "La característica definitoria de cualquier colección que implemente la interfaz 'Set' (como HashSet o TreeSet) es que no permite almacenar elementos duplicados, modelando de esta forma el concepto matemático de conjunto."
  },
  {
    "id": 125,
    "pregunta": "La interfaz Map almacena siempre sus elementos haciendo uso de:",
    "opciones": [
      "A. Una clave como identificador y el valor del elemento.",
      "B. Una tabla hash.",
      "C. Índices.",
      "D. No usa nada para almacenar sus elementos."
    ],
    "respuesta_correcta": "A. Una clave como identificador y el valor del elemento.",
    "explicacion": "Las clases que implementan la interfaz Map (como HashMap) funcionan como un diccionario: almacenan la información en pares compuestos por una 'clave' (Key) única que sirve como identificador, y un 'valor' (Value) asociado a dicha clave."
  },
  {
    "id": 126,
    "pregunta": "PriorityQueue se puede definir por:",
    "opciones": [
      "A. Es una cola que hace uso de la interfaz Collection, almacenando elementos duplicados y ordenándolos por su orden natural o definido por el usuario.",
      "B. Es una cola que hace uso de la interfaz Collection, almacenando elementos únicos, sin duplicados y ordenándolos según una prioridad.",
      "C. Es una cola que hace uso de la interfaz Collection, almacenando elementos duplicados, y ordenándolos según una prioridad.",
      "D. Es una cola que hace uso de la interfaz Map, almacenando elementos únicos, sin duplicados y ordenándolos según una prioridad."
    ],
    "respuesta_correcta": "A. Es una cola que hace uso de la interfaz Collection, almacenando elementos duplicados y ordenándolos por su orden natural o definido por el usuario.",
    "explicacion": "Una PriorityQueue es una cola que permite duplicados y procesa sus elementos no por su orden de llegada (FIFO), sino basándose en una prioridad preestablecida que se determina mediante el orden natural de los elementos o un comparador personalizado (Comparator) provisto por el usuario."
  },
  {
    "id": 127,
    "pregunta": "Que estructura permite almacenar los elementos ordenados en una colección Set",
    "opciones": [
      "A. HashSet.",
      "B. LinkedHashSet.",
      "C. TreeSet.",
      "D. Ninguna de las anteriores."
    ],
    "respuesta_correcta": "C. TreeSet.",
    "explicacion": "Mientras que HashSet no garantiza ningún orden específico, 'TreeSet' es la implementación de la interfaz Set que almacena los elementos internamente en una estructura de árbol, lo que le permite mantenerlos automáticamente ordenados (de forma ascendente natural o por un comparador)."
  },
  {
    "id": 128,
    "pregunta": "Que hace el método int lastindexOf(E Elemento) de la clase ArrayList",
    "opciones": [
      "A. Devuelve la posición de la primera ocurrencia del elemento.",
      "B. Devuelve la posición de la última ocurrencia del elemento.",
      "C. Devuelve un valor mayor de 0 si encuentra el elemento.",
      "D. Devuelve en valor menor de 0 si encuentra el elemento."
    ],
    "respuesta_correcta": "B. Devuelve la posición de la última ocurrencia del elemento.",
    "explicacion": "Como su nombre indica, el método 'lastIndexOf' busca el elemento especificado empezando a escanear la lista desde el final hacia el principio, por lo que devuelve el índice numérico (posición) correspondiente a la última vez que dicho elemento aparece en el ArrayList."
  },
  {
    "id": 129,
    "pregunta": "Que tipo de interfaces raíces existen para implementar colecciones",
    "opciones": [
      "A. ArrayList y LinkedList",
      "B. Collection y Map",
      "C. Collection y ArrayDeque",
      "D. Ninguna de las anteriores"
    ],
    "respuesta_correcta": "B. Collection y Map",
    "explicacion": "El ecosistema de estructuras de datos dinámicas en Java se divide estructuralmente en dos grandes interfaces raíces principales: 'Collection' (para agrupar colecciones simples como List, Set y Queue) y 'Map' (para gestionar agrupaciones de pares clave-valor)."
  },
  {
    "id": 130,
    "pregunta": "Se puede definir un ArrayList como:",
    "opciones": [
      "A. Un array estático que no se puede modificar su tamaño en ejecución.",
      "B. Un array dinámico que se puede modificar su tamaño en ejecución.",
      "C. Un array estático ordenado que se puede modificar su tamaño en ejecución.",
      "D. Un array dinámico ordenado que se puede modificar su tamaño en ejecución."
    ],
    "respuesta_correcta": "B. Un array dinámico que se puede modificar su tamaño en ejecución.",
    "explicacion": "A diferencia de los arrays primitivos (estáticos), un ArrayList es una clase fundamental en Java que funciona encapsulando un array dinámico, siendo capaz de redimensionar automáticamente su capacidad en memoria a medida que se le añaden o eliminan elementos durante la ejecución del programa."
  },
{
    "id": 131,
    "pregunta": "¿Qué es una excepción?",
    "opciones": [
      "A. Un error producido en tiempo de ejecución y que altera el flujo normal del programa.",
      "B. Un evento producido en tiempo de compilación y que altera el flujo normal del programa.",
      "C. Un código excepcional que se usa cuando se produce un evento.",
      "D. Un código excepcional que se usa en casos especiales."
    ],
    "respuesta_correcta": "A. Un error producido en tiempo de ejecución y que altera el flujo normal del programa.",
    "explicacion": "Una excepción en Java se define como un evento o error anómalo que ocurre durante el tiempo de ejecución (runtime) de un programa y que interrumpe o altera su flujo de instrucciones normal."
  },
  {
    "id": 132,
    "pregunta": "Como podemos capturar una excepción",
    "opciones": [
      "A. Incluir el código que puede provocar una excepción dentro del bloque try.",
      "B. Incluir el código que puede provocar una excepción dentro del bloque catch.",
      "C. Incluir el código que puede provocar una excepción dentro del bloque finally.",
      "D. Incluir el código que puede provocar una excepción dentro de un método exclusivo."
    ],
    "respuesta_correcta": "A. Incluir el código que puede provocar una excepción dentro del bloque try.",
    "explicacion": "El primer paso para el manejo de excepciones es 'intentar' ejecutar el código susceptible a fallos. Por ello, el código riesgoso que queremos evaluar o capturar debe introducirse siempre dentro de un bloque 'try'."
  },
  {
    "id": 133,
    "pregunta": "Como podemos tratar una excepción",
    "opciones": [
      "A. Incluir el código correctivo dentro del bloque try.",
      "B. Incluir el código correctivo dentro del bloque catch.",
      "C. Incluir el código correctivo dentro del constructor.",
      "D. Incluir el código correctivo dentro de un método exclusivo."
    ],
    "respuesta_correcta": "B. Incluir el código correctivo dentro del bloque catch.",
    "explicacion": "Una vez que el bloque 'try' captura o detecta la excepción, el control del programa pasa al bloque 'catch'. Es dentro de este bloque 'catch' donde debemos incluir el código para tratar, resolver o informar sobre el error."
  },
  {
    "id": 134,
    "pregunta": "Haciendo uso de throw podemos:",
    "opciones": [
      "A. Invocar nuevas excepciones.",
      "B. Capturar una excepción.",
      "C. Propagar excepciones en un método.",
      "D. Ninguna de las anteriores."
    ],
    "respuesta_correcta": "A. Invocar nuevas excepciones.",
    "explicacion": "La instrucción 'throw' (en singular) se utiliza dentro del cuerpo de un método para instanciar, invocar o lanzar explícitamente una nueva excepción (ya sea estándar de Java o personalizada)."
  },
  {
    "id": 135,
    "pregunta": "Indica que recomendación no es correcta.",
    "opciones": [
      "A. No abusar de excepciones.",
      "B. Hacer uso de excepciones genéricas.",
      "C. No crear nuevas excepciones y reutilizar las existentes.",
      "D. No hacer tratamiento de excepciones graves."
    ],
    "respuesta_correcta": "B. Hacer uso de excepciones genéricas.",
    "explicacion": "La opción B es la recomendación incorrecta (y por tanto la respuesta a marcar). Las buenas prácticas en programación orientada a objetos dictan que se deben capturar excepciones lo más específicas posibles y evitar atrapar excepciones genéricas (como usar un simple 'catch(Exception e)')."
  },
  {
    "id": 136,
    "pregunta": "La pila de llamadas se puede definir como:",
    "opciones": [
      "A. Una lista de métodos que podemos usar.",
      "B. Un contenedor de métodos que ya no se están usando.",
      "C. Una estructura que guarda el flujo de llamadas que se está ejecutando.",
      "D. Ninguna de las anteriores."
    ],
    "respuesta_correcta": "C. Una estructura que guarda el flujo de llamadas que se está ejecutando.",
    "explicacion": "La pila de llamadas (Call Stack o Stack Trace) es la estructura de memoria interna que guarda el registro o trazabilidad del flujo de métodos que se encuentran actualmente en ejecución, permitiendo saber qué método llamó a qué método en el momento del error."
  },
  {
    "id": 137,
    "pregunta": "Que hace finally en un bloque try/catch",
    "opciones": [
      "A. Ejecuta el código de su interior cuando se produce una excepción.",
      "B. Ejecuta el código de su interior siempre.",
      "C. Ejecuta el código de su interior cuando no se produce una excepción.",
      "D. Finaliza el programa."
    ],
    "respuesta_correcta": "B. Ejecuta el código de su interior siempre.",
    "explicacion": "El bloque 'finally' es opcional, pero cuando se declara a continuación de los bloques try/catch, garantiza que el código de su interior se ejecutará siempre de forma obligatoria, independientemente de si se produjo o no una excepción en el 'try'."
  },
  {
    "id": 138,
    "pregunta": "Que permite hacer con la palabra reservada throws",
    "opciones": [
      "A. Invocar nuevas excepciones.",
      "B. Propagar excepciones en un método.",
      "C. Capturar una excepción.",
      "D. Ninguna de las anteriores."
    ],
    "respuesta_correcta": "B. Propagar excepciones en un método.",
    "explicacion": "La palabra reservada 'throws' (en plural) se coloca en la firma o cabecera de un método para indicar o advertir que dicho método no manejará un error internamente, sino que propagará la excepción hacia el método de nivel superior que lo haya invocado."
  },
  {
    "id": 139,
    "pregunta": "Todas las excepciones deben de heredar de:",
    "opciones": [
      "A. La clase que contiene el método main o cualquier subclase.",
      "B. La clase Throwable o cualquier subclase.",
      "C. La clase System o cualquier subclase.",
      "D. Ninguna de las anteriores."
    ],
    "respuesta_correcta": "B. La clase Throwable o cualquier subclase.",
    "explicacion": "En la jerarquía de clases de Java, la clase raíz principal para representar cualquier tipo de error o excepción es 'Throwable'. Toda clase que pretenda actuar como excepción debe heredar directa o indirectamente de ella."
  },
  {
    "id": 140,
    "pregunta": "Un tipo de excepción Checked",
    "opciones": [
      "A. Es una excepción de carácter grave que no es recomendable tratar.",
      "B. Es una excepción de carácter grave que hay que tratar.",
      "C. Es una excepción de carácter leve que es obligatorio tratar.",
      "D. Es una excepción de carácter leve que no es recomendable tratar."
    ],
    "respuesta_correcta": "C. Es una excepción de carácter leve que es obligatorio tratar.",
    "explicacion": "Las excepciones 'Checked' (verificadas) representan problemas esperables y recuperables (leves). El compilador de Java exige y obliga estrictamente a que sean capturadas mediante try/catch o declaradas con 'throws', de lo contrario, el código no compilará."
  },
{
    "id": 141,
    "pregunta": "En la recursividad cruzada o indirecta",
    "opciones": [
      "A. Existe una sola llamada a si mismo.",
      "B. Existe dos metodos distintos que se llaman entre si.",
      "C. Existe mas de una llamada a si misma.",
      "D. En la llamada a si misma, uno de los parametros es la propia llamada."
    ],
    "respuesta_correcta": "B. Existe dos metodos distintos que se llaman entre si.",
    "explicacion": "En la recursividad cruzada o indirecta, el flujo no recae en un solo método llamándose a sí mismo, sino que existen dos métodos distintos que se llaman entre sí."
  },
  {
    "id": 142,
    "pregunta": "En la recursividad nos vamos a encontrar siempre:",
    "opciones": [
      "A. Una condicion de terminación o caso base.",
      "B. Un método que se llama a si mismo una o mas veces. O indirectamente entre metodos.",
      "C. La opcion a) y b) es correcta.",
      "D. Ninguna de las opciones es correcta."
    ],
    "respuesta_correcta": "C. La opcion a) y b) es correcta.",
    "explicacion": "Para que un algoritmo recursivo sea válido y no genere bucles infinitos, requiere una condición de terminación o caso base y la llamada recursiva, es decir, un método que se llama a sí mismo una o más veces."
  },
  {
    "id": 143,
    "pregunta": "La complejidad algoritmica se puede medir:",
    "opciones": [
      "A. Con la anotación Big-0 (Notación Asintótica o Notación Landau).",
      "B. Con la anotación cromática.",
      "C. En unidades de tiempo.",
      "D. En unidades metricas."
    ],
    "respuesta_correcta": "A. Con la anotación Big-0 (Notación Asintótica o Notación Landau).",
    "explicacion": "La complejidad algorítmica se puede medir de manera estándar en ciencias de la computación con la anotación Big-O (Notación Asintótica o Notación Landau)."
  },
  {
    "id": 144,
    "pregunta": "La diferencia entre la recursividad simple y multiple depende de:",
    "opciones": [
      "A. El número de llamadas.",
      "B. Si en los parametros de una de las llamadas se incluye almenos una propia llamada.",
      "C. La cantidad de métodos que hacen las llamadas.",
      "D. Ninguna de las anteriores."
    ],
    "respuesta_correcta": "A. El número de llamadas.",
    "explicacion": "La diferencia entre la recursividad simple y múltiple depende directamente del número de llamadas que el método realiza sobre sí mismo dentro de su bloque de código."
  },
  {
    "id": 145,
    "pregunta": "Que orden de complejidad es la peor.",
    "opciones": [
      "A. O(1)",
      "B. O(n log n)",
      "C. O(n2)",
      "D. O(log n)"
    ],
    "respuesta_correcta": "C. O(n2)",
    "explicacion": "Entre las opciones mostradas, el tiempo de ejecución cuadrático O(n2) es la opción menos eficiente y por tanto la peor para procesar grandes cantidades de datos."
  },
  {
    "id": 146,
    "pregunta": "Que reglas básicas nos ayuda a calcular la orden de complejidad de un algoritmo:",
    "opciones": [
      "A. En la recursividad la orden de complejidad depende del caso base y de los recurrentes.",
      "B. Las sentencias if/else su orden se cogera de la mayor de cualquiera de sus partes condicionales.",
      "C. En los bucles anidados se partira de O(n2) a O(na) según el nivel de anidamiento.",
      "D. Todas las anteriores son correctas."
    ],
    "respuesta_correcta": "D. Todas las anteriores son correctas.",
    "explicacion": "Todas las opciones descritas son reglas válidas y fundamentales a la hora de calcular matemáticamente el orden de complejidad de un algoritmo."
  },
  {
    "id": 147,
    "pregunta": "Que tipos de recursividad existen:",
    "opciones": [
      "A. Simple, multiple, cruzada o anidada.",
      "B. Simple, multiple, cruzada o anillada.",
      "C. Doble, unificada, indirecta o anillada.",
      "D. Doble, anillada, simple o cruzada."
    ],
    "respuesta_correcta": "A. Simple, multiple, cruzada o anidada.",
    "explicacion": "Los tipos principales de algoritmos recursivos que se estudian teóricamente son la recursividad simple, múltiple, cruzada (o indirecta) y anidada."
  },
  {
    "id": 148,
    "pregunta": "Que ventaja no aporta la recursividad.",
    "opciones": [
      "A. Se emplea en patrones muy concretos.",
      "B. Apenas consume memoria.",
      "C. Hace mas sencillo el algoritmo.",
      "D. Evita el abuso de sentencias de control y bucles."
    ],
    "respuesta_correcta": "B. Apenas consume memoria.",
    "explicacion": "Decir que la recursividad 'apenas consume memoria' es falso, ya que su principal desventaja es que tiende a consumir muchísima memoria en la pila de llamadas del sistema (Call Stack)."
  },
  {
    "id": 149,
    "pregunta": "Se puede definir la recursividad como:",
    "opciones": [
      "A. Una técnica de resolver determinados problemas siguiendo un flujo lineal. Con diferentes llamadas a distintos métodos.",
      "B. Una técnica de resolver cualquier problema siguiendo un flujo lineal. Con diferentes llamadas a distintos métodos.",
      "C. Una técnica de resolver determinados problemas siguiendo un flujo ciclico. Extrayendo partes mas pequeñas y unirlas en una sola.",
      "D. Una técnica de resolver determinados problemas siguiendo un flujo cíclico, dividiendo el problema en partes más pequeñas hasta una condición de finalización."
    ],
    "respuesta_correcta": "D. Una técnica de resolver determinados problemas siguiendo un flujo cíclico, dividiendo el problema en partes más pequeñas hasta una condición de finalización.",
    "explicacion": "La recursividad se define conceptualmente como una técnica de resolución de problemas cíclica donde el problema principal se divide en subproblemas más pequeños hasta alcanzar una condición de finalización (caso base)."
  },
  {
    "id": 150,
    "pregunta": "Según el código \"for(int i=100; i>0; i/=2){}\" que orden complejidad le corresponde:",
    "opciones": [
      "A. O(1)",
      "B. O(log n)",
      "C. O(n3)",
      "D. O(n log n)"
    ],
    "respuesta_correcta": "B. O(log n)",
    "explicacion": "Al dividirse la variable entre 2 en cada iteración del bucle en lugar de decrementar de uno en uno, el número total de ejecuciones se reduce logarítmicamente, lo que indica un orden de complejidad de O(log n)."
  },
  {
      "id": 151,
      "pregunta": "¿Como podemos comprobar si un fichero o directorio existe?",
      "opciones": [
        "A. Usando isFile()",
        "B. Usando isDirectory()",
        "C. Usando exists()",
        "D. Usando getPath()"
      ],
      "respuesta_correcta": "C. Usando exists()",
      "explicacion": "En Java, la clase File proporciona el método exists(), el cual devuelve un valor booleano (true o false) indicando si el archivo o directorio especificado en la ruta realmente existe en el sistema de archivos."
    },
    {
      "id": 152,
      "pregunta": "Con FileWriter podemos:",
      "opciones": [
        "A. Escribir para un flujo de caracteres.",
        "B. Escribir para un flujo de bytes.",
        "C. Escribir para un flujo predeterminado.",
        "D. Escribir o leer un flujo de bytes."
      ],
      "respuesta_correcta": "A. Escribir para un flujo de caracteres.",
      "explicacion": "La clase FileWriter en Java está diseñada específicamente para manejar y escribir flujos de caracteres (texto) en archivos, a diferencia de otras clases que se encargan de los flujos de datos en forma de bytes sin procesar."
    },
    {
      "id": 153,
      "pregunta": "En Java un flujo se denomina:",
      "opciones": [
        "A. Flush",
        "B. Stream",
        "C. Eoa",
        "D. Ninguna de las anteriores."
      ],
      "respuesta_correcta": "B. Stream",
      "explicacion": "En el ecosistema de Java, un flujo de datos (ya sea de entrada o de salida) se denomina comúnmente 'Stream'. Es una abstracción lógica que representa una secuencia continua de datos enviada o recibida."
    },
    {
      "id": 154,
      "pregunta": "Es habitual trabajar directamente con ficheros de tipo de datos",
      "opciones": [
        "A. De bytes o caracteres.",
        "B. De enteros.",
        "C. De cadena de caracteres.",
        "D. De hexadecimal."
      ],
      "respuesta_correcta": "A. De bytes o caracteres.",
      "explicacion": "El manejo de archivos en programación normalmente se divide en dos grandes categorías de flujos principales: los flujos binarios (de bytes) para datos crudos como imágenes o audio, y los flujos de texto (de caracteres) para información legible."
    },
    {
      "id": 155,
      "pregunta": "La serialización consiste en:",
      "opciones": [
        "A. Guardar y leer datos de tipo primitivo en un fichero.",
        "B. Guardar y leer objetos de un fichero.",
        "C. Guardar y leer serie de datos en un fichero.",
        "D. Guardar y leer cadena de caracteres."
      ],
      "respuesta_correcta": "B. Guardar y leer objetos de un fichero.",
      "explicacion": "La serialización en Java es el proceso de convertir el estado interno de un objeto en un flujo de bytes continuo. Esto permite que el objeto completo pueda ser guardado en un archivo o transmitido por red para ser reconstruido posteriormente (deserialización)."
    },
    {
      "id": 156,
      "pregunta": "Las etapas de la utilización de flujos son:",
      "opciones": [
        "A. Transmisión y cierre.",
        "B. Apertura, transmisión y cierre.",
        "C. Apertura y transmisión.",
        "D. Ninguna de las anteriores."
      ],
      "respuesta_correcta": "B. Apertura, transmisión y cierre.",
      "explicacion": "El ciclo de vida correcto y seguro para trabajar con flujos de archivos implica tres pasos fundamentales: primero la apertura del flujo hacia el recurso, luego la transmisión (lectura o escritura), y por último, de forma obligatoria, el cierre del flujo para liberar memoria."
    },
    {
      "id": 157,
      "pregunta": "Los flujos predeterminados",
      "opciones": [
        "A. Son flujos que ya estan creados y no es necesario definirlos.",
        "B. Son flujos no habituales.",
        "C. Son flujos que hay que crearlos y definirlos.",
        "D. Ninguna de las anteriores."
      ],
      "respuesta_correcta": "A. Son flujos que ya estan creados y no es necesario definirlos.",
      "explicacion": "En Java existen tres flujos predeterminados (System.in, System.out y System.err) que el entorno de ejecución ya crea, inicializa y abre automáticamente al iniciar el programa, listos para ser usados sin requerir configuración extra."
    },
    {
      "id": 158,
      "pregunta": "Para crear un directorio usaremos:",
      "opciones": [
        "A. createNewFile()",
        "B. createDirectory()",
        "C. File(String ruta)",
        "D. mkdir()"
      ],
      "respuesta_correcta": "D. mkdir()",
      "explicacion": "Para crear un nuevo directorio (carpeta) en el sistema de archivos haciendo uso de la clase File en Java, el método correcto que se debe invocar es mkdir() (o mkdirs() si se necesita crear toda la ruta de carpetas anidadas)."
    },
    {
      "id": 159,
      "pregunta": "Que clase se utilizará para acceder directamente a una parte de un fichero",
      "opciones": [
        "A. FileReader",
        "B. RandomAccessFile",
        "C. BufferedReader",
        "D. File"
      ],
      "respuesta_correcta": "B. RandomAccessFile",
      "explicacion": "La clase RandomAccessFile es especial porque permite leer y escribir en cualquier posición dentro de un archivo moviendo un 'puntero'. Esto ofrece un acceso aleatorio (directo) a cualquier parte del fichero, en contraste con el acceso puramente secuencial de los Streams tradicionales."
    },
    {
      "id": 160,
      "pregunta": "Que clasificaciones se puede encontrar en los flujos:",
      "opciones": [
        "A. Según el tipo de datos, dirección del flujo y la forma de acceso.",
        "B. Según el canal del medio y la codificación.",
        "C. Según el uso al que esta destinado.",
        "D. Según su acceso."
      ],
      "respuesta_correcta": "A. Según el tipo de datos, dirección del flujo y la forma de acceso.",
      "explicacion": "Técnicamente, los flujos (streams) en la programación Java se clasifican atendiendo a tres grandes criterios principales: el tipo de datos que manejan (bytes o caracteres), la dirección hacia la que van (entrada o salida) y la forma en que acceden a la información."
    },
    {
        "id": 161,
        "pregunta": "¿Que es JPA?",
        "opciones": [
          "A. Un lenguaje de programación.",
          "B. Un conjunto de herramientas para trabajar la persistencia en base de datos en Java.",
          "C. Un conjunto de herramientas para trabajar la persistencia en base de datos en cualquier plataforma.",
          "D. Ninguna de las anteriores."
        ],
        "respuesta_correcta": "B. Un conjunto de herramientas para trabajar la persistencia en base de datos en Java.",
        "explicacion": "JPA (Java Persistence API) es una especificación oficial de Java que proporciona un conjunto de herramientas e interfaces estandarizadas para gestionar la persistencia de datos relacionales u orientados a objetos en aplicaciones Java."
      },
      {
        "id": 162,
        "pregunta": "¿Que gestor de base de datos aplica orientado a objetos?",
        "opciones": [
          "A. Microsoft SQL Server",
          "B. MySQL",
          "C. ObjectDB",
          "D. MongoDB"
        ],
        "respuesta_correcta": "C. ObjectDB",
        "explicacion": "Mientras que SQL Server y MySQL son bases de datos relacionales (RDBMS) y MongoDB es orientada a documentos, ObjectDB es un potente y puro Sistema Gestor de Bases de Datos Orientado a Objetos (OODBMS) diseñado específicamente para Java."
      },
      {
        "id": 163,
        "pregunta": "Con el método .createQuery(String) podemos",
        "opciones": [
          "A. Crear una query de consulta, actualización o borrado pasada como String por parametro.",
          "B. Crear una query de solo consulta pasada como String por parametro.",
          "C. Crear una query de inserción pasada como String por parametro.",
          "D. Crear una query de actualización o borrado pasada como String por parametro."
        ],
        "respuesta_correcta": "A. Crear una query de consulta, actualización o borrado pasada como String por parametro.",
        "explicacion": "En JPA, el método createQuery se utiliza para construir sentencias en lenguaje JPQL que permiten tanto realizar consultas de datos (SELECT) como ejecutar operaciones de actualización masiva (UPDATE) o borrado (DELETE)."
      },
      {
        "id": 164,
        "pregunta": "Que campos de una clase no se guardaran en una base de datos orientada a objetos",
        "opciones": [
          "A. Todos los campos se guardan siempre.",
          "B. Los campos que se declaren como final, static, transient o lleve la etiqueta @Transient",
          "C. Los que tengan visibilidad privada.",
          "D. Los que lleven la etiqueta @FieldNotIncluded."
        ],
        "respuesta_correcta": "B. Los campos que se declaren como final, static, transient o lleve la etiqueta @Transient",
        "explicacion": "Los frameworks de persistencia ignoran automáticamente los campos estáticos (porque pertenecen a la clase, no al objeto), los finales, los marcados con la palabra reservada 'transient' y los anotados explícitamente con '@Transient'."
      },
      {
        "id": 165,
        "pregunta": "Que caracteristica es la correcta en una base de datos orientada a objetos",
        "opciones": [
          "A. Su acceso es lento.",
          "B. Usan los mismos tipos de datos que el lenguaje de programación.",
          "C. Se basan en relaciones.",
          "D. Trabaja con tablas."
        ],
        "respuesta_correcta": "B. Usan los mismos tipos de datos que el lenguaje de programación.",
        "explicacion": "La mayor ventaja de las bases de datos orientadas a objetos es que eliminan el 'desajuste de impedancia', permitiendo almacenar y recuperar la información utilizando exactamente las mismas clases y tipos de datos nativos del lenguaje de programación (como Java)."
      },
      {
        "id": 166,
        "pregunta": "Que condición tiene que cumplir una clase para que se pueda guardar en una base de datos orientada a objetos",
        "opciones": [
          "A. Tiene que tener un constructor sin argumentos.",
          "B. Los campos de la clase deben ser publicos.",
          "C. No es necesario tener los métodos get y set por cada campo.",
          "D. La clase no se debe serializar."
        ],
        "respuesta_correcta": "A. Tiene que tener un constructor sin argumentos.",
        "explicacion": "Para que un proveedor JPA pueda instanciar los objetos de las entidades (Entity classes) al recuperarlos de la base de datos, la especificación exige estrictamente que la clase cuente con un constructor vacío (sin argumentos), ya sea público o protegido."
      },
      {
        "id": 167,
        "pregunta": "Que hace el método persist(Object) de EntityManager",
        "opciones": [
          "A. Mantiene el objeto en memoria.",
          "B. Aplica persistencia al objeto con serialización.",
          "C. Permite iniciar una transacción con el objeto.",
          "D. Guardar el objeto pasado como parametro en la base de datos."
        ],
        "respuesta_correcta": "D. Guardar el objeto pasado como parametro en la base de datos.",
        "explicacion": "El método persist() del EntityManager toma un objeto Java que recién ha sido creado (estado transitorio) y lo hace persistente, lo que se traduce en generar una instrucción INSERT para guardar ese registro en la base de datos."
      },
      {
        "id": 168,
        "pregunta": "Que hace el siguiente método entityManager.find(Persona.class, 1)",
        "opciones": [
          "A. Busca en la base de datos un elemento Persona que tiene como clave primaria el valor 1.",
          "B. Busca en la base de datos una persona.",
          "C. Busca en la base de datos una persona y la sustituye por el valor 1.",
          "D. Ninguna de las anteriores."
        ],
        "respuesta_correcta": "A. Busca en la base de datos un elemento Persona que tiene como clave primaria el valor 1.",
        "explicacion": "El método find() es la forma estándar de recuperar una única entidad en JPA. Recibe dos parámetros: la clase de la entidad que queremos buscar (Persona.class) y el valor exacto de su clave primaria o identificador (1)."
      },
      {
        "id": 169,
        "pregunta": "Se puede usar JPQL para",
        "opciones": [
          "A. Definir objetos en base de datos.",
          "B. Inserción de datos.",
          "C. Consultas, actualización y borrado de datos.",
          "D. Ninguna de las anteriores."
        ],
        "respuesta_correcta": "C. Consultas, actualización y borrado de datos.",
        "explicacion": "JPQL (Java Persistence Query Language) es un lenguaje muy similar a SQL pero enfocado a objetos. Soporta sentencias SELECT para consultas y sentencias UPDATE y DELETE para actualizaciones y borrados masivos, pero no se utiliza para hacer INSERT (eso se hace con persist())."
      },
      {
        "id": 170,
        "pregunta": "Una base de datos orientada a objetos...",
        "opciones": [
          "A. La información la representa en forma de objetos.",
          "B. Aplica el paradigma orientado a objetos.",
          "C. Se caracteriza por ser NoSQL.",
          "D. Todas las opciones son correctas."
        ],
        "respuesta_correcta": "D. Todas las opciones son correctas.",
        "explicacion": "Las bases de datos orientadas a objetos cumplen con todas estas características: aplican los principios de la programación orientada a objetos, representan la información tal cual como objetos en memoria, y se clasifican dentro del espectro de bases de datos NoSQL al no depender del modelo relacional estricto."
      },
      {
          "id": 171,
          "pregunta": "DELETE de SQL:",
          "opciones": [
            "A. Borrar filas.",
            "B. Borrar registros.",
            "C. Borrar columnas.",
            "D. Las dos primeras son correctas."
          ],
          "respuesta_correcta": "D. Las dos primeras son correctas.",
          "explicacion": "La instrucción DELETE de SQL se utiliza para eliminar información de una tabla. En terminología de bases de datos, los conceptos de 'filas' y 'registros' son sinónimos, por lo que las opciones A y B indican lo mismo y ambas son correctas."
        },
        {
          "id": 172,
          "pregunta": "Existen claves primarias o PK dentro de una tabla que identifican inequivocamente:",
          "opciones": [
            "A. Un campo.",
            "B. Una columna.",
            "C. Un registro.",
            "D. Ninguna de las anteriores es correcta."
          ],
          "respuesta_correcta": "C. Un registro.",
          "explicacion": "Las claves primarias (Primary Keys) son restricciones fundamentales en las bases de datos relacionales que aseguran que cada registro (fila) dentro de una tabla sea único y se pueda identificar de forma unívoca."
        },
        {
          "id": 173,
          "pregunta": "Lenguaje de programación para la definición de estructuras de datos, empleado en los sistemas gestores de bases de datos.:",
          "opciones": [
            "A. DDL.",
            "B. DML.",
            "C. DCL",
            "D. Todas las anteriores son incorrectas."
          ],
          "respuesta_correcta": "A. DDL.",
          "explicacion": "DDL (Data Definition Language o Lenguaje de Definición de Datos) es el subconjunto de instrucciones SQL encargado de definir, estructurar, modificar o eliminar los esquemas de las bases de datos (como por ejemplo: CREATE, ALTER, DROP)."
        },
        {
          "id": 174,
          "pregunta": "Los drivers son librerias en ficheros jar.",
          "opciones": [
            "A. .jar.",
            "B. .xml.",
            "C. .iso.",
            "D. Ninguna de las anteriores es correcta"
          ],
          "respuesta_correcta": "A. .jar.",
          "explicacion": "En el entorno de Java (JDBC), los drivers que permiten la conexión a los distintos sistemas gestores de bases de datos se distribuyen empaquetados en librerías estándar con la extensión .jar (Java ARchive)."
        },
        {
          "id": 175,
          "pregunta": "MariaDB es:",
          "opciones": [
            "A. Una librería.",
            "B. Un gestor de base de datos relacionales.",
            "C. Un objeto de SQL.",
            "D. Un tipo de base de datos orientada a objetos."
          ],
          "respuesta_correcta": "B. Un gestor de base de datos relacionales.",
          "explicacion": "MariaDB es un potente Sistema Gestor de Bases de Datos Relacionales (RDBMS) de código abierto, muy popular por ser una bifurcación (fork) directa de MySQL."
        },
        {
          "id": 176,
          "pregunta": "MariaDB permite introducir comandos SQL mediante:",
          "opciones": [
            "A. Client Command.",
            "B. Command MySQL.",
            "C. MySQL Client.",
            "D. Ninguna de las anteriores."
          ],
          "respuesta_correcta": "C. MySQL Client.",
          "explicacion": "Debido a que MariaDB es un derivado directo de MySQL, mantiene una alta compatibilidad con sus herramientas. Para interactuar por consola con el servidor, se utiliza habitualmente la herramienta de línea de comandos heredada, conocida como MySQL Client."
        },
        {
          "id": 177,
          "pregunta": "Para establecer cualquier conexión a una base de datos desde Java, es necesario:",
          "opciones": [
            "A. Emplear un driver especifico.",
            "B. Emplear el objeto statement.",
            "C. Emplear una librería con ficheros .iso.",
            "D. Todas las anteriores son incorrectas."
          ],
          "respuesta_correcta": "A. Emplear un driver especifico.",
          "explicacion": "Para conectar una aplicación Java a un motor de base de datos mediante JDBC, el primer paso imprescindible es disponer y cargar el driver (conector) específico desarrollado por el fabricante de esa base de datos."
        },
        {
          "id": 178,
          "pregunta": "Podemos ejecutar sentencias SQL en las bases de datos mediante el empleo de:",
          "opciones": [
            "A. El objeto statement.",
            "B. El objeto abstract.",
            "C. El objeto execute.",
            "D. Todas las anteriores son incorrectas."
          ],
          "respuesta_correcta": "A. El objeto statement.",
          "explicacion": "A través de la API JDBC de Java, una vez establecida la conexión, se debe instanciar y emplear un objeto de tipo 'Statement' (o 'PreparedStatement') para poder encapsular, enviar y ejecutar las consultas y actualizaciones SQL hacia el servidor de base de datos."
        },
        {
          "id": 179,
          "pregunta": "Tras emplear setAutoCommit(false) deberemos emplear:",
          "opciones": [
            "A. commit().",
            "B. rollback().",
            "C. Las dos anteriores son correctas.",
            "D. Todas las anteriores son incorrectas."
          ],
          "respuesta_correcta": "C. Las dos anteriores son correctas.",
          "explicacion": "Al desactivar el 'auto-commit', el desarrollador asume el control manual de las transacciones. Para finalizarlas adecuadamente, deberá utilizar obligatoriamente una de las dos funciones: 'commit()' para confirmar y guardar los cambios, o 'rollback()' para deshacerlos en caso de error."
        },
        {
          "id": 180,
          "pregunta": "UPDATE de SQL permite:",
          "opciones": [
            "A. Introducir nuevas filas.",
            "B. Actualizar filas.",
            "C. Introducir columnas.",
            "D. Actualizar columnas."
          ],
          "respuesta_correcta": "B. Actualizar filas.",
          "explicacion": "La cláusula UPDATE en el lenguaje SQL tiene como propósito exclusivo modificar o actualizar los datos contenidos en registros (filas) que ya existen previamente dentro de una tabla."
        },
        {
            "id": 181,
            "pregunta": "AWT:",
            "opciones": [
              "A. Es una libreria anterior que ha permitido la creación de otras como Swing.",
              "B. AWT y Swing se encuentran al mismo nivel, sin influenciarse la una a la otra.",
              "C. AWT es una evolución de Swing.",
              "D. Ninguna de las anteriores es correcta"
            ],
            "respuesta_correcta": "A. Es una libreria anterior que ha permitido la creación de otras como Swing.",
            "explicacion": "AWT (Abstract Window Toolkit) es la librería gráfica original y fundamental de Java. Posteriormente, debido a algunas de sus limitaciones, se utilizó como base para desarrollar y construir una librería más avanzada y versátil conocida como Swing."
          },
          {
            "id": 182,
            "pregunta": "Coloca cada componente horizontalmente de izquierda a derecha. Si sobrepasa la fila comienza en la siguiente...",
            "opciones": [
              "A. BorderLayout.",
              "B. CardLayout.",
              "C. FlowLayout.",
              "D. GridLayout."
            ],
            "respuesta_correcta": "C. FlowLayout.",
            "explicacion": "El administrador de diseño FlowLayout organiza los componentes en la interfaz de manera fluida, colocándolos en una línea de izquierda a derecha. Cuando no queda más espacio en la fila actual, los componentes saltan automáticamente a la siguiente fila."
          },
          {
            "id": 183,
            "pregunta": "Deberemos instalar WindowBuilder si:",
            "opciones": [
              "A. NetBeans no cuenta con un módulo para la herramienta gráfica.",
              "B. Eclipse no cuenta con un módulo para la herramienta gráfica.",
              "C. MySQL no cuenta con un módulo para la herramienta gráfica.",
              "D. Ninguna de las anteriores."
            ],
            "respuesta_correcta": "B. Eclipse no cuenta con un módulo para la herramienta gráfica.",
            "explicacion": "WindowBuilder es un potente plugin de diseño visual (drag and drop) desarrollado específicamente para el entorno de desarrollo integrado (IDE) Eclipse. Se instala para facilitar enormemente la creación interactiva de interfaces gráficas en Java."
          },
          {
            "id": 184,
            "pregunta": "Elemento que capta un evento producido, por ejemplo, pulsando un botón, e inicia la acción consecuente:",
            "opciones": [
              "A. Driver.",
              "B. Listener.",
              "C. Writer.",
              "D. Todas las anteriores son incorrectas."
            ],
            "respuesta_correcta": "B. Listener.",
            "explicacion": "En la programación orientada a eventos, un 'Listener' (escuchador) es una interfaz u objeto que se queda a la espera de capturar las interacciones del usuario (como hacer clic, mover el ratón o pulsar una tecla) para luego disparar y ejecutar el código correspondiente."
          },
          {
            "id": 185,
            "pregunta": "GridBag Layout",
            "opciones": [
              "A. No existe.",
              "B. Es de AWT.",
              "C. Es de Swing.",
              "D. Aparece en ambos."
            ],
            "respuesta_correcta": "C. Es de Swing.",
            "explicacion": "Según el criterio del test, GridBagLayout se considera asociado a Swing. Es un gestor de diseño que permite colocar componentes en una cuadrícula flexible, controlando con bastante precisión la posición, el tamaño y la expansión de cada elemento dentro de una interfaz gráfica. Aunque su nombre pueda aparecer relacionado con gestores de diseño usados en Java, en esta pregunta debe marcarse la opción C porque la respuesta oficial del examen es 'Es de Swing'."
          },
          {
            "id": 186,
            "pregunta": "Los componentes con una letra J delante del nombre:",
            "opciones": [
              "A. Necesitan la instalación de ambas librerías AWT y Swing.",
              "B. Requieren ser incorporados mediante código.",
              "C. Son componentes de prueba, se verán en la IDE, pero no en la interfaz real.",
              "D. Ninguna de las anteriores es correcta."
            ],
            "respuesta_correcta": "D. Ninguna de las anteriores es correcta.",
            "explicacion": "El prefijo 'J' (como en JButton, JLabel o JTextField) es la convención que utiliza Java para identificar y diferenciar a los componentes visuales que pertenecen a la librería Swing. Como ninguna de las opciones A, B o C indica esto, la respuesta correcta es la D."
          },
          {
            "id": 187,
            "pregunta": "Los eventos de Swing se diferencian en los de AWT en que:",
            "opciones": [
              "A. Deben incluir una J inicial.",
              "B. No requieren listener.",
              "C. Requieren que se diseñen en la pestaña Design.",
              "D. Ninguna de las anteriores es correcta."
            ],
            "respuesta_correcta": "D. Ninguna de las anteriores es correcta.",
            "explicacion": "Tanto AWT como Swing utilizan exactamente el mismo modelo de delegación de eventos en Java (paquete java.awt.event). Por lo tanto, no existe una diferencia fundamental en la manera de gestionar los eventos o en los Listeners entre ambas librerías."
          },
          {
            "id": 188,
            "pregunta": "MotifLookAndFeel es un:",
            "opciones": [
              "A. Layout.",
              "B. Componente.",
              "C. Estilo para controles.",
              "D. Ninguna de las anteriores es correcta."
            ],
            "respuesta_correcta": "C. Estilo para controles.",
            "explicacion": "En el contexto de Java Swing, 'Look and Feel' (apariencia y comportamiento) es un mecanismo que permite cambiar el aspecto visual de la interfaz. MotifLookAndFeel es uno de los estilos o temas clásicos disponibles para personalizar el aspecto de los controles."
          },
          {
            "id": 189,
            "pregunta": "No es un tipo de control de menús:",
            "opciones": [
              "A. MenuBar.",
              "B. ShortMenuCut.",
              "C. MenuItem.",
              "D. PopupMenu."
            ],
            "respuesta_correcta": "B. ShortMenuCut.",
            "explicacion": "Para construir menús, Java proporciona componentes reales como MenuBar (la barra de menús principal), MenuItem (cada una de las opciones clicables) y PopupMenu (menús contextuales). 'ShortMenuCut' es un término inventado y no es un control válido."
          },
          {
            "id": 190,
            "pregunta": "Una interfaz gráfica permite emplear:",
            "opciones": [
              "A. Listener.",
              "B. Drag and drop.",
              "C. JTree.",
              "D. Ninguna de las anteriores."
            ],
            "respuesta_correcta": "B. Drag and drop.",
            "explicacion": "En el contexto del diseño y desarrollo moderno de interfaces de usuario (como las que se crean con WindowBuilder o NetBeans), estas herramientas permiten construir la interfaz gráfica de manera visual arrastrando y soltando (Drag and drop) los distintos componentes sobre el lienzo."
          }
];
