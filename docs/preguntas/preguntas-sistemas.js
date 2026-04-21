const preguntasSistemas = [

{ id: 1,
  pregunta: "¿Cómo se llama la consola de Windows que permite administrar usuarios?",
  opciones: [
    "Lusmeger.msc",
    "Lusarmgr.msc",
    "Lusrmgr.msc",
    "No se pueden administrar usuarios en Windows mediante consolas"
  ],
  correcta: 2,
  explicacion: "Es como una llave mágica llamada 'Lusrmgr'. Si te fijas, el nombre es un truco: 'L' de Local, 'Usr' de Usuario y 'Mgr' de Manager (el que manda). ¡Es el botón para mandar sobre quién entra en el PC!"},

{ id: 2,
  pregunta: "¿En qué fichero de Linux se almacenan las contraseñas encriptadas de los usuarios?",
  opciones: [
    "/etc/passwd",
    "/etc/shadow",
    "/etc/password",
    "/etc/users"
  ],
  correcta: 1,
  explicacion: "Imagínate un cofre escondido en las sombras donde guardas tus secretos. Por eso se llama 'shadow' (sombra), porque en Linux ahí dentro las contraseñas están tan escondidas (encriptadas) que nadie puede leerlas."},

{ id: 3,
  pregunta: "¿Se puede instalar Debian de manera gráfica?",
  opciones: [
    "No",
    "Depende de si se instala en VirtualBox o en VMware",
    "Depende de qué versión se instale",
    "Sí"
  ],
  correcta: 3,
  explicacion: "¡Claro que sí! Es como ponerle dibujos a un libro. Puedes elegir ver solo letras (consola) o tener ratón y botones de colores (interfaz gráfica) para que sea mucho más fácil hacer clic."},

{ id: 4,
  pregunta: "¿Se pueden restaurar copias de seguridad incrementales y diferenciales al mismo tiempo?",
  opciones: [
    "Sí y debe hacerse",
    "No se debe",
    "No",
    "No se pueden restaurar este tipo de copias bajo ningún concepto"
  ],
  correcta: 1,
  explicacion: "No se debe hacer porque es como intentar mezclar dos puzzles distintos. Si usas un método para guardar tus juguetes (incremental o diferencial), tienes que usar ese mismo método para volver a sacarlos, si no, se arma un lío y corrompes los datos."},

{ id: 5,
  pregunta: "El comando cat hola > alumnos.txt añade contenido a un fichero y además…",
  opciones: [
    "Lo borra",
    "Lo ejecuta",
    "Reescribe el contenido si ya tiene algo",
    "Lo añade a continuación si ya existe contenido en el fichero"
  ],
  correcta: 2,
  explicacion: "Esa flechita sencilla '>' es como una goma de borrar gigante. Antes de escribir lo nuevo, borra todo lo que había en la hoja para que solo se vea lo que acabas de poner (reescribe)."},

{ id: 6,
  pregunta: "El directorio C:\\system32 pertenece a:",
  opciones: [
    "Linux",
    "GNU",
    "Windows",
    "Todas las anteriores son correctas"
  ],
  correcta: 2,
  explicacion: "Es la 'casita' principal de Windows. Siempre que veas la letra C: y cosas de Windows, es que estamos en el sistema operativo de Microsoft, donde se guardan sus archivos más importantes."},

{ id: 7,
  pregunta: "El más dañino de todos los tipos de malware. Se usa para cifrar todo el sistema y quitarles el acceso a los usuarios:",
  opciones: [
    "Scumware",
    "Exploit",
    "Ransomware",
    "Adware"
  ],
  correcta: 2,
  explicacion: "Es como un pirata malvado que le pone un candado a tu baúl de juguetes y no te da la llave a menos que le des dinero. Eso es un rescate (ransom), te roba el acceso a tus cosas."},

{ id: 8,
  pregunta: "El procesador se describe como:",
  opciones: [
    "Un conjunto software del sistema operativo",
    "La selección del orden de importancia de cada solicitud",
    "Un recurso que posee varios núcleos con los que puede ejecutar varios procesos a la vez",
    "El facilitador de la gestión de los trabajos de impresión"
  ],
  correcta: 2,
  explicacion: "Es el cerebro del ordenador. Como tiene varios 'núcleos', es como si tuviera muchas manitas para poder hacer muchas tareas distintas al mismo tiempo sin cansarse."},

{ id: 9,
  pregunta: "El protocolo POP3 es empleado en:",
  opciones: [
    "Mensajería instantánea",
    "El correo electrónico",
    "Transferencia de ficheros",
    "Software antimalware"
  ],
  correcta: 1,
  explicacion: "Es como el cartero que llega a tu casa, saca las cartas del buzón y te las da en la mano. Se usa para descargar tus correos electrónicos directos a tu ordenador."},

{ id: 10,
  pregunta: "El SID es:",
  opciones: [
    "Un código que da acceso al sistema",
    "Un sistema de autenticación de Windows",
    "Un identificador único asociado a un usuario",
    "Es lo mismo que el SAT"
  ],
  correcta: 2,
  explicacion: "Es como tu DNI o tu nombre especial secreto. En Windows, aunque te llames 'Pepe', el sistema te da un número único e irrepetible (Security Identifier) para no confundirte con nadie más."},

{ id: 11,
  pregunta: "El sistema de archivos estándar de Microsoft Windows:",
  opciones: [
    "FAT",
    "NTFS",
    "APFS",
    "Todas las anteriores son correctas"
  ],
  correcta: 1,
  explicacion: "Es la forma en la que Windows ordena los papeles en sus carpetas. NTFS es el sistema moderno que más le gusta a Windows porque permite poner seguridad y que nada se pierda."},

{ id: 12,
  pregunta: "El tipo de red coaxial se basa en:",
  opciones: [
    "El espacio",
    "La distribución",
    "El cableado",
    "El diseño"
  ],
  correcta: 2,
  explicacion: "Se refiere puramente a los cables. Es como el cable gordito y redondo que se enchufa detrás de la tele para ver los dibujos. ¡Usa cableado de cobre para llevar la información!"},

{ id: 13,
  pregunta: "En Linux la opción -l del comando ls:",
  opciones: [
    "Muestra el contenido en formato largo",
    "Ordena el contenido por fecha de modificación",
    "Invierte el orden de la salida",
    "Muestra el contenido oculto"
  ],
  correcta: 0,
  explicacion: "La 'l' viene de 'long' (largo). Es como pedirle al ordenador que no solo te diga los nombres de tus juguetes, sino que te dé una lista larga diciendo cuánto pesan, de quién son y cuándo los guardaste."},

{ id: 14,
  pregunta: "Es importante que un antivirus…",
  opciones: [
    "Consuma mucha CPU",
    "No se actualice",
    "Consuma poca memoria",
    "Ocupe mucho espacio en disco"
  ],
  correcta: 2,
  explicacion: "El antivirus tiene que ser como un superhéroe silencioso: debe vigilar que no vengan bichitos malos, pero sin gastar toda la energía (memoria) del ordenador para que tú puedas jugar o trabajar tranquilo."},

{ id: 15,
  pregunta: "exFAT suele usarse en dispositivos:",
  opciones: [
    "Extraíbles",
    "Fijos",
    "De Microsoft únicamente",
    "De Linux únicamente"
  ],
  correcta: 0,
  explicacion: "Se usa casi siempre para los pendrives o tarjetas de memoria (extraíbles). Es un idioma que entienden casi todos los aparatos para que puedas sacar tus fotos y llevarlas a otra tele o PC."},

{ id: 16,
  pregunta: "FTP hace referencia a…",
  opciones: [
    "Found Transfer Protocol",
    "File Transport Protocol",
    "File Transfer Protocol",
    "File Transfer Premium"
  ],
  correcta: 2,
  explicacion: "Significa 'File Transfer Protocol' (Protocolo de Transferencia de Archivos). Imagina que es un camión de mudanzas oficial que lleva tus carpetas de un ordenador a otro por internet."},

{ id: 17,
  pregunta: "Indica cuál de los siguientes es un dispositivo de interconexión de red:",
  opciones: [
    "RJ-45",
    "Ordenador",
    "Switch",
    "BIOS"
  ],
  correcta: 2,
  explicacion: "Un Switch (conmutador) es como una regleta mágica donde enchufas muchos cables de internet. Sirve para que todos los ordenadores de una misma habitación se conecten e intercambien información."},

{ id: 18,
  pregunta: "Indica qué tipo de software es VMware Workstation:",
  opciones: [
    "Software libre",
    "Software propietario",
    "Software totalmente gratuito",
    "Software incremental"
  ],
  correcta: 1,
  explicacion: "Es de tipo 'propietario' porque tiene dueño. Es como un juguete de marca que alguien fabricó: te dejan usarlo si sigues sus reglas (y pagas), pero no puedes abrirlo para ver cómo está hecho por dentro."},

{ id: 19,
  pregunta: "La administración remota:",
  opciones: [
    "Solo se puede usar con una herramienta",
    "Viene incorporada en Windows mediante tres herramientas",
    "No permite gestionar el equipo en temas de seguridad",
    "Todas las anteriores son correctas"
  ],
  correcta: 1,
  explicacion: "Es el poder de manejar el PC desde lejos. Windows ya trae de fábrica tres herramientas de 'mando a distancia' para que un informático pueda entrar y ayudarte sin tener que ir a tu casa."},

{ id: 20,
  pregunta: "La cabecera en IPv6 posee:",
  opciones: [
    "20 bytes",
    "30 bytes",
    "40 bytes",
    "50 bytes"
  ],
  correcta: 2,
  explicacion: "La cabecera es como la etiqueta que le pegas a un paquete de correos. En las direcciones modernas de internet (IPv6), esa etiqueta siempre mide 40 trocitos (bytes) fijos para que el cartero la lea muy rápido."},

{ id: 21,
  pregunta: "Las placas base se guían por los:",
  opciones: [
    "Factores de forma",
    "Zócalos del microprocesador",
    "Conectores internos",
    "Conectores externos"
  ],
  correcta: 0,
  explicacion: "Es como la talla de la ropa. El 'Factor de forma' dice qué tamaño tiene la placa y dónde van a ir sus tornillos para que sepas si cabe dentro de la caja de metal de tu ordenador."},

{ id: 22,
  pregunta: "Las redes P2P hacen referencia a…",
  opciones: [
    "Pair to pair",
    "Peer to peer",
    "Point to point",
    "Poe to poe"
  ],
  correcta: 1,
  explicacion: "Viene de 'Peer to Peer', que significa 'de igual a igual'. Es como un grupo de amigos en el patio donde nadie es el jefe; todos los ordenadores comparten archivos directamente entre ellos."},

{ id: 23,
  pregunta: "Las tarjetas de red pueden ser:",
  opciones: [
    "Solo de Windows",
    "Solo de Linux",
    "Cableadas únicamente",
    "Cableadas e inalámbricas"
  ],
  correcta: 3,
  explicacion: "Es la pieza que permite al ordenador hablar con internet. Puede hacerlo por un cable que enchufas (Ethernet) o hablando por el aire con ondas invisibles (Wi-Fi inalámbrico)."},

{ id: 24,
  pregunta: "Los permisos 0666 y 0777 son:",
  opciones: [
    "Los permisos originales y por defecto de un archivo y un directorio respectivamente",
    "Los permisos originales y por defecto de un directorio y un archivo respectivamente",
    "Los permisos no otorgables y por defecto de un archivo y un directorio respectivamente",
    "Los permisos no otorgables y por defecto de un directorio y un archivo respectivamente"
  ],
  correcta: 0,
  explicacion: "Es el traje que traen al nacer. Por defecto en Linux, antes de ponerles ninguna regla restrictiva, un archivo normal nace con 666 (todos pueden leer/escribir) y una carpeta con 777 (todos pueden entrar)."},

{ id: 25,
  pregunta: "Los sistemas operativos distribuidos son una clasificación de un sistema operativo que responde a:",
  opciones: [
    "El interfaz utilizado",
    "Cómo ofrecen los servicios",
    "El tipo de procesamiento",
    "El número de usuarios"
  ],
  correcta: 1,
  explicacion: "Se clasifican así por la forma en que trabajan. Varios ordenadores en diferentes lugares se unen para darte un servicio como si fueran uno solo, es decir, responde a 'cómo ofrecen' lo que necesitas."},

{ id: 26,
  pregunta: "Para crear un directorio alumnos en Linux en la ruta actual usamos el comando…",
  opciones: [
    "mkdir -r alumnos",
    "mkdir alumnos",
    "rmdir alumnos",
    "rmdir -r alumnos"
  ],
  correcta: 1,
  explicacion: "Viene del inglés 'Make Directory' (hacer directorio). Es como decirle al sistema: 'fabrícame una caja nueva aquí mismo y ponle la etiqueta alumnos'."},

{ id: 27,
  pregunta: "Pro, Player y Fusion son versiones del siguiente software privativo de virtualización:",
  opciones: [
    "VMware Workstation",
    "VirtualBox",
    "KVM",
    "Aviat Design"
  ],
  correcta: 0,
  explicacion: "Son las distintas ediciones o 'niveles' que vende la marca VMware para crear máquinas virtuales. Tienen una gratis (Player), una para profesionales (Pro) y una para Mac (Fusion)."},

{ id: 28,
  pregunta: "Puede que sea importante realizar esta acción antes de instalar un sistema operativo:",
  opciones: [
    "Copia de seguridad",
    "Instalación nativa",
    "Instalación por red",
    "Instalación dual"
  ],
  correcta: 0,
  explicacion: "Es como sacarle una foto a tu cuarto antes de pintarlo. Guardas tus cosas importantes en un disco aparte por si, durante la instalación nueva, algo sale mal y se borra todo."},

{ id: 29,
  pregunta: "¿Qué tipo de aplicación es MySQL?",
  opciones: [
    "Procesador de texto",
    "Base de datos",
    "Presentación gráfica",
    "Todas las anteriores son incorrectas"
  ],
  correcta: 1,
  explicacion: "Es un archivador gigante y súper ordenado. MySQL es un programa que se dedica a guardar y relacionar muchísima información (datos) para que puedas buscarla rapidísimo."},

{ id: 30,
  pregunta: "Si una BIOS enciende una luz LED para indicar un problema, es una señal…",
  opciones: [
    "Sonora",
    "Visual",
    "Depende del color de la luz",
    "Una BIOS no puede emitir señales mediante LEDs"
  ],
  correcta: 1,
  explicacion: "Es puro sentido común: si la placa base te enciende una lucecita (LED) para avisarte de que algo se ha roto, lo estás viendo con los ojos, así que es una alerta visual."},

{ id: 31,
  pregunta: "Un algoritmo simétrico es:",
  opciones: [
    "RCA2",
    "ASES",
    "ICMP",
    "AES"
  ],
  correcta: 3,
  explicacion: "Simétrico significa que usas la misma llave mágica para cerrar el cofre que para volver a abrirlo. El algoritmo AES es el estándar más famoso que usa este tipo de llave única."},

{ id: 32,
  pregunta: "Un ejemplo de buen nombre para una máquina virtual es:",
  opciones: [
    "VRSTFVM",
    "VirtualBox",
    "Windows 10 – Cliente",
    "Linux"
  ],
  correcta: 2,
  explicacion: "Poner nombres raros es mala idea. Un buen nombre te debe decir rápido qué hay dentro del ordenador virtual (Windows 10) y para qué sirve (Cliente), así no te confundes."},

{ id: 33,
  pregunta: "Un hardware está formado, entre otros componentes, por:",
  opciones: [
    "Bus de datos",
    "Microprocesador",
    "Host",
    "VirtualBox"
  ],
  correcta: 1,
  explicacion: "Hardware es todo lo físico, lo que te duele si te cae en el pie. El microprocesador es el chip real de silicio que hace de cerebro, mientras que el resto son conceptos o programas (software)."},

{ id: 34,
  pregunta: "Un servidor debe de cumplir con estos tres aspectos:",
  opciones: [
    "Disponibilidad, calidad y mantenimiento",
    "Escalabilidad, mantenimiento y disponibilidad",
    "Mantenimiento, disponibilidad y automatismo",
    "Disponibilidad, escalabilidad y gestión avanzada"
  ],
  correcta: 1,
  explicacion: "Un servidor es el trabajador estrella: tiene que estar siempre despierto (disponible), ser fácil de cuidar (mantenimiento) y poder atender a más clientes si el negocio crece (escalable)."},

{ id: 35,
  pregunta: "Un sistema multitarea:",
  opciones: [
    "Trabaja con un solo proceso al mismo tiempo",
    "Trabaja con un solo proceso por usuario al mismo tiempo",
    "Trabaja con varios procesos al mismo tiempo",
    "No gestiona más de dos procesos al mismo tiempo"
  ],
  correcta: 2,
  explicacion: "Como un pulpo tocando el piano, pintando y comiendo a la vez. El sistema permite que el procesador ejecute varios programas al mismo tiempo sin que se atasquen."},

{ id: 36,
  pregunta: "Una de las distribuciones que se emplean de manera específica en los sistemas Linux es:",
  opciones: [
    "Windows Pro",
    "MacOS X",
    "Ubuntu Desktop",
    "FreeBSD"
  ],
  correcta: 2,
  explicacion: "Linux es la base y hay muchas versiones distintas (distribuciones). Ubuntu Desktop es la más famosa y amigable para usar en ordenadores de casa."},

{ id: 37,
  pregunta: "Una NIC también se puede llamar:",
  opciones: [
    "Adaptador de vídeo",
    "Adaptador de internet",
    "Tarjeta de sonido",
    "Adaptador de pantalla"
  ],
  correcta: 1,
  explicacion: "NIC significa 'Network Interface Card'. Es literalmente la pieza o tarjeta (el adaptador) donde conectas el cable de internet para que el ordenador tenga red."},

{ id: 38,
  pregunta: "Usaremos este comando para cambiar los permisos en Linux:",
  opciones: [
    "chmod",
    "umask",
    "umod",
    "Todas las anteriores son incorrectas"
  ],
  correcta: 0,
  explicacion: "Viene de 'CHange MODe' (cambiar modo). Es el comando clave con el que decides si tus amigos pueden leer tu archivo, si pueden escribir en él o si no les dejas ni verlo."},

{ id: 39,
  pregunta: "Usuario que tiene el privilegio necesario para efectuar cambios en los ficheros de configuración:",
  opciones: [
    "Gestor",
    "Administrador",
    "Usuario",
    "Usuario avanzado"
  ],
  correcta: 1,
  explicacion: "Es el jefe absoluto del ordenador (también llamado root). Es el único que tiene la llave maestra para poder cambiar las reglas más importantes de cómo funciona el equipo."},

{ id: 40,
  pregunta: "Versión de Microsoft Windows para dispositivos móviles:",
  opciones: [
    "Server",
    "Enterprise",
    "IoT",
    "Mobile"
  ],
  correcta: 3,
  explicacion: "Es la versión en miniatura de Windows. 'Mobile' (Móvil) se diseñó especialmente para que funcionara en teléfonos y aparatos pequeños que te llevas en el bolsillo."},

{ id: 41,
  pregunta: "¿Cuál de los siguientes no es un riesgo laboral de un Técnico de Desarrollo de Aplicaciones?:",
  opciones: [
    "Superficie de trabajo.",
    "Entorno.",
    "Asiento.",
    "Maquinaria pesada."
  ],
  correcta: 3,
  explicacion: "Un programador no usa grúas ni excavadoras gigantes para trabajar, usa un ordenador. Por eso, el riesgo de que le caiga una 'maquinaria pesada' no existe en su trabajo, pero sí le afecta sentarse en una mala silla (asiento) o tener poca luz (entorno)."
},

{
  id: 42,
  pregunta: "El tercer paso para crear una máquina virtual de Windows 10 es:",
  opciones: [
    "Seleccionar iso de Windows 10 como nuevo cd.",
    "Instalar Windows 10 configurando ciertos aspectos que nos piden con lo más básico.",
    "Instalar las guest additions.",
    "Darle un nombre a la máquina virtual."
  ],
  correcta: 1,
  explicacion: "Una vez que has montado las piezas del 'ordenador de mentira' y le has metido el disco de instalación, el siguiente paso lógico es encenderlo e instalar el sistema operativo por dentro para que cobre vida."
},

{
  id: 43,
  pregunta: "En una instalación exprofeso, el primer paso del procedimiento es:",
  opciones: [
    "Reiniciar el equipo.",
    "Conectar el componente o periférico al conector correspondiente.",
    "Leer el manual de instalación del fabricante.",
    "Comprobar los ajustes de las especificaciones del equipo."
  ],
  correcta: 2,
  explicacion: "¡Antes de tocar nada, hay que leer las instrucciones! Es como montar un juguete complejo: primero miras el librito para saber dónde va cada cosa, evitar cortocircuitos y no romper el componente nuevo."
},

{
  id: 44,
  pregunta: "Las placas base se guían por los:",
  opciones: [
    "Factores de forma.",
    "Zócalos del microprocesador.",
    "Conectores internos.",
    "Conectores externos."
  ],
  correcta: 0,
  explicacion: "El 'factor de forma' es como la talla de una camiseta. Nos dice exactamente cuánto mide la placa base y dónde van los agujeros de los tornillos para asegurarnos de que va a caber bien dentro de la torre metálica del PC."
},

{
  id: 45,
  pregunta: "Los medios de almacenamiento Flash son:",
  opciones: [
    "Fuentes de alimentación ópticas.",
    "Discos duros mecánicos y cintas.",
    "Discos duros SSD y tarjetas de memoria.",
    "Ninguna es correcta."
  ],
  correcta: 2,
  explicacion: "Son memorias súper rápidas que no tienen piezas mecánicas ni discos dando vueltas. Usan pequeños chips electrónicos para guardar tus fotos y archivos a la velocidad del rayo (como un pendrive o un disco SSD)."
},

{
  id: 46,
  pregunta: "Los principales voltajes de corriente en un dispositivo electrónico son:",
  opciones: [
    "3.3 V",
    "12 V",
    "5 V",
    "Todas son correctas."
  ],
  correcta: 3,
  explicacion: "El ordenador es como una ciudad que necesita diferentes 'fuerzas' de electricidad. Usa 12 voltios (mucha fuerza) para mover los motores de los ventiladores, y 5 o 3.3 voltios (poca fuerza) para que los pequeños chips piensen sin quemarse."
},

{
  id: 47,
  pregunta: "Los tipos de dispositivos periféricos son:",
  opciones: [
    "Dispositivos de entrada.",
    "Dispositivos de salida.",
    "Dispositivos de entrada y salida.",
    "Todas son correctas."
  ],
  correcta: 3,
  explicacion: "Son las piezas que viven 'alrededor' de la caja principal del ordenador. Hay dispositivos para meter información (teclado), para sacarla o verla (monitor), y aparatos mágicos que hacen las dos cosas a la vez (pantalla táctil o pendrive)."
},

{
  id: 48,
  pregunta: "Pro, Player y Fusion son versiones del siguiente software privativo de virtualización:",
  opciones: [
    "VMWare Workstation.",
    "VritualBox.",
    "KVM.",
    "Aviat Design."
  ],
  correcta: 0,
  explicacion: "Son las distintas 'ediciones' que vende la marca VMware. Tienen una versión gratis y sencilla para jugar (Player), una más avanzada para expertos (Pro) y una especial para que funcione en ordenadores de Apple (Fusion)."
},

{
  id: 49,
  pregunta: "Un hardware está formado, entre otros componentes, por:",
  opciones: [
    "Bus de datos.",
    "Microprocesador.",
    "Host.",
    "VirtualBox."
  ],
  correcta: 1,
  explicacion: "El hardware es todo lo que puedes agarrar con las manos. El microprocesador es una pastillita metálica y física que hace de cerebro. Las otras opciones son programas (software) o caminos invisibles por donde viajan los datos."
},

{
  id: 50,
  pregunta: "Un tipo de software es:",
  opciones: [
    "Software de aplicación.",
    "Software de comunicación.",
    "Software de almacenamiento.",
    "Ninguna es correcta."
  ],
  correcta: 0,
  explicacion: "El 'software de aplicación' son los programas que tú usas para hacer una tarea real. Es cuando 'aplicas' el ordenador para escribir una carta (Word), hacer un dibujo o jugar a un videojuego."
},

{
  id: 51,
  pregunta: "Algunos gestores que permiten que un sistema operativo administre los recursos hardware son:",
  opciones: [
    "Procesos.",
    "Comunicación.",
    "Memoria.",
    "Todas son correctas."
  ],
  correcta: 3,
  explicacion: "El sistema operativo es como el director del colegio: organiza a los alumnos (gestor de procesos), les da sitio para sentarse en clase (gestor de memoria) y hace que se entiendan sin pelear (gestor de comunicación)."
},

{
  id: 52,
  pregunta: "El procesador se describe como:",
  opciones: [
    "Un conjunto software del sistema operativo que debido a su gran importancia en la gestión del sistema no puede abandonar la memoria principal.",
    "La selección del orden de importancia de cada solicitud y de quien quiera hacer uso de esos recursos.",
    "Un recurso que posee varios núcleos con los que puede ejecutar varios procesos a la vez.",
    "El facilitador de la gestión de manera adecuada de los trabajos de impresión."
  ],
  correcta: 2,
  explicacion: "Es el gran motor pensante del ordenador. Al tener varios 'núcleos', es como si tuviera varios cerebros pequeñitos trabajando en equipo, lo que le permite hacer varias tareas a la vez sin atascarse."
},

{
  id: 53,
  pregunta: "El programa de Windows que permite crear un USB de arranque es:",
  opciones: [
    "Rufus.",
    "Debian.",
    "Windows 11.",
    "BIOS."
  ],
  correcta: 0,
  explicacion: "Rufus es una herramienta genial que mete el instalador de un sistema operativo dentro de un pendrive. Así, puedes usar ese USB como si fuera una llave para arrancar e instalar un ordenador que está totalmente vacío."
},

{
  id: 54,
  pregunta: "El tipo de sistema operativo que atiende al número de procesos que puede ejecutar a la vez puede ser:",
  opciones: [
    "Monoprogramado.",
    "Monousuario.",
    "Textual.",
    "Gráfico."
  ],
  correcta: 0,
  explicacion: "'Mono' significa uno. Un sistema monoprogramado es como un niño que solo puede hacer una cosa a la vez: si está comiendo, no puede ver la tele hasta que termine su plato. Ejecuta un solo programa a la vez."
},

{
  id: 55,
  pregunta: "Las herramientas que permiten a los programar utilizar recursos hardware hacen referencia a:",
  opciones: [
    "Interfaz operativo.",
    "Interfaz de usuario.",
    "Interfaz para aplicaciones.",
    "Interfaz gráfico."
  ],
  correcta: 2,
  explicacion: "Se llaman API (Interfaces de Programación de Aplicaciones). Son como los botones de un microondas: el programador no necesita saber cómo funciona el motor por dentro, solo pulsa el 'botón' correcto para que su programa use la cámara o el sonido."
},

{
  id: 56,
  pregunta: "Los sistemas operativos distribuidos son una clasificación de un sistema operativo que responde a:",
  opciones: [
    "El interfaz utilizado.",
    "Cómo ofrecen los servicios.",
    "El tipo de procesamiento.",
    "El número de usuarios."
  ],
  correcta: 1,
  explicacion: "Es como un equipo de superhéroes repartidos por distintas ciudades. Aunque son muchos ordenadores diferentes, se unen y responden a ti ofreciéndote un único servicio gigante para que parezca un solo ordenador."
},

{
  id: 57,
  pregunta: "Microsoft Windows 10 fue implementado en el año:",
  opciones: [
    "2010.",
    "2015.",
    "2019.",
    "2021."
  ],
  correcta: 1,
  explicacion: "Fue exactamente en julio del año 2015 cuando Microsoft lanzó este famoso sistema operativo para solucionar todos los enfados que había causado la versión anterior (Windows 8)."
},

{
  id: 58,
  pregunta: "Para el funcionamiento de un sistema operativo, son de gran importancia:",
  opciones: [
    "Las instalaciones desatendidas.",
    "Los gestores de arranque.",
    "Los almacenamientos secundarios.",
    "Las interfaces de usuario."
  ],
  correcta: 1,
  explicacion: "Los gestores de arranque (como GRUB) son el 'despertador' de la máquina. Si no estuvieran ahí, el ordenador encendería sus luces pero se quedaría totalmente paralizado porque no sabría cómo cargar Windows o Linux."
},

{
  id: 59,
  pregunta: "Un tipo de arquitectura de un sistema operativo es:",
  opciones: [
    "Microkernel.",
    "Sistema monolítico.",
    "Sistema con capas.",
    "Todas son correctas."
  ],
  correcta: 3,
  explicacion: "Son las distintas formas de fabricar el cerebro del sistema por dentro. Unos están hechos de un solo bloque gigante (monolítico), otros son como un edificio de pisos (capas), y otros tienen un centro muy pequeñito (microkernel)."
},

{
  id: 60,
  pregunta: "Una de las distribuciones que se emplean de manera específica en los sistemas Linux es:",
  opciones: [
    "CentOS.",
    "Debian.",
    "Ubuntu Desktop.",
    "FreeBSD."
  ],
  correcta: 2,
  explicacion: "Linux es la base y existen muchos 'sabores' (distribuciones) construidos sobre él. Ubuntu Desktop es uno de los sabores más amigables y pensados específicamente para que la gente normal lo use en su casa fácilmente."
},

{
  id: 61,
  pregunta: "El directorio C:\\system32 pertenece a:",
  opciones: [
    "Windows.",
    "Linux.",
    "GNU.",
    "Todas las anteriores son correctas."
  ],
  correcta: 0,
  explicacion: "Es la 'caja fuerte' principal de Microsoft Windows. Aquí es donde se guardan las herramientas críticas y los códigos más importantes que hacen que tu ordenador arranque sin dar error."
},

{
  id: 62,
  pregunta: "El sistema de archivos estándar de Microsoft Windows:",
  opciones: [
    "FAT.",
    "NTFS.",
    "APFS.",
    "Todas las anteriores son correctas."
  ],
  correcta: 1,
  explicacion: "Es el idioma favorito de Windows para guardar papeles. NTFS es un sistema muy inteligente que permite poner contraseñas a las carpetas y gestionar archivos que pesan muchísimo."
},

{
  id: 63,
  pregunta: "En Linux la opción \"l\" del comando ls:",
  opciones: [
    "Muestra el contenido en formato largo.",
    "Ordena el contenido por fecha de modificación.",
    "Invierte el orden de la salida.",
    "Muestra el contenido oculto."
  ],
  correcta: 0,
  explicacion: "La letra 'l' es la inicial de 'Long' (largo). Es como decirle al ordenador: 'no me digas solo el nombre de los archivos, quiero una lista larga que me diga quién es el dueño, los permisos y cuánto pesan'."
},

{
  id: 64,
  pregunta: "En Windows podemos realizaremos la gestión de archivos:",
  opciones: [
    "Con comandos.",
    "Con el Explorador de archivos.",
    "Con el Administrador de discos.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 1,
  explicacion: "Es la ventanita con forma de carpeta amarilla que usas todo el tiempo. El 'Explorador de archivos' es la manera gráfica y fácil de coger tus fotos, copiarlas y moverlas usando el ratón."
},

{
  id: 65,
  pregunta: "Enlaces que reutilizan el nombre de un i-nodo asignándole nombres distintos y localizándose en diferentes directorios o en el mismo:",
  opciones: [
    "Enlaces duros.",
    "Enlaces simbólicos.",
    "Enlaces blandos.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 0,
  explicacion: "Es como si una persona tuviera dos nombres diferentes, pero es exactamente el mismo cuerpo (i-nodo). Si borras uno de sus nombres, el archivo original no desaparece porque sigue existiendo bajo el otro nombre."
},

{
  id: 66,
  pregunta: "Es el único RAID sin redundancia:",
  opciones: [
    "RAID 0.",
    "RAID 1.",
    "RAID 5.",
    "Ninguna de las anteriores."
  ],
  correcta: 0,
  explicacion: "Es como unir dos mochilas para poder correr muy rápido llevando más libros, pero sin fotocopiarlos. Como el RAID 0 no hace copias de seguridad (redundancia), si una de las mochilas se rompe, pierdes tus deberes."
},

{
  id: 67,
  pregunta: "Es un sistema RAID anidado:",
  opciones: [
    "RAID 0.",
    "RAID 1.",
    "RAID 5.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 3,
  explicacion: "Un RAID anidado es como hacer la mezcla de dos RAIDs distintos (por ejemplo, RAID 10 o RAID 50). El 0, 1 y 5 son modelos básicos de un solo nivel, por lo tanto ninguna opción de la lista es correcta."
},

{
  id: 68,
  pregunta: "Este tipo de fichero no existe en Linux:",
  opciones: [
    "Regulares.",
    "Enlaces.",
    "Dispositivos.",
    "Ninguna de las anteriores."
  ],
  correcta: 3,
  explicacion: "La regla de oro de Linux es que 'todo es un archivo'. Por tanto, los ficheros normales de texto (regulares) existen, los accesos directos (enlaces) existen, e incluso el ratón se trata como un archivo (dispositivo). Todas existen."
},

{
  id: 69,
  pregunta: "Indica la ruta desde el directorio de trabajo actual:",
  opciones: [
    "Ruta directa.",
    "Ruta relativa.",
    "Ruta indirecta.",
    "Ruta absoluta."
  ],
  correcta: 1,
  explicacion: "Es como indicarle a alguien cómo ir a la panadería diciendo 'gira a la derecha en la próxima esquina'. Te indica el camino para llegar al destino tomando como punto de inicio el lugar donde estás parado ahora mismo."
},

{
  id: 70,
  pregunta: "Windows nos permite crear diferentes tipos de volúmenes, el volumen reflejado hace referencia al RAID:",
  opciones: [
    "0.",
    "1.",
    "5.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 1,
  explicacion: "Reflejar algo es como ponerlo frente a un espejo para que haya dos copias exactas. En el mundo de Windows, al sistema que duplica tus datos idénticamente en dos discos duros (RAID 1) lo llaman 'volumen reflejado'."
},

{
  id: 71,
  pregunta: "El grupo predefinido nobody:",
  opciones: [
    "No posee privilegios.",
    "Posee privilegios sobre dispositivos.",
    "Grupo de todos los usuarios estándar.",
    "No existe tal grupo."
  ],
  correcta: 0,
  explicacion: "La palabra en inglés significa literalmente 'nadie'. Es un truco de seguridad: meten ahí a los programas que necesitan funcionar en el ordenador pero a los que no se les da ningún permiso ni llave (cero privilegios) para que no rompan nada."
},

{
  id: 72,
  pregunta: "En Linux el comando usermod permite:",
  opciones: [
    "Crear un usuario.",
    "Modificar un usuario.",
    "Eliminar un usuario.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 1,
  explicacion: "El truco está en leer el comando: empieza por 'user' (usuario) y acaba en 'mod' (modificar). Es la herramienta que utiliza el jefe del ordenador para cambiar la contraseña, el grupo o los datos de alguien."
},

{
  id: 73,
  pregunta: "Es uno de los niveles de permisos en Linux:",
  opciones: [
    "Permisos del propietario.",
    "Permisos del grupo.",
    "Permisos del resto de usuarios.",
    "Todas las anteriores son correctas."
  ],
  correcta: 3,
  explicacion: "Para proteger los archivos, Linux divide a la gente en tres grupos: el dueño del archivo (propietario), los compañeros de su mismo equipo (grupo), y los demás desconocidos que usan el PC (resto). Todas son correctas."
},

{
  id: 74,
  pregunta: "La opción g grupo del comando useradd:",
  opciones: [
    "Asigna el grupo principal del usuario.",
    "Listan todos los grupos secundarios.",
    "Establece el directorio home del usuario.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 0,
  explicacion: "Al usar la letra 'g' minúscula mientras estás creando a un nuevo usuario, le estás diciendo al ordenador a qué 'familia principal' va a pertenecer esa persona nada más nacer en el sistema."
},

{
  id: 75,
  pregunta: "Los permisos 0666 y 0777 son:",
  opciones: [
    "Los permisos originales y por defecto de un archivo y un directorio respectivamente.",
    "Los permisos originales y por defecto de un directorio y un archivo respectivamente.",
    "Los permisos no otorgables y por defecto de un archivo y un directorio respectivamente.",
    "Los permisos no otorgables y por defecto de un directorio y un archivo respectivamente."
  ],
  correcta: 0,
  explicacion: "Es el traje básico con el que vienen al mundo. Antes de aplicar ningún escudo de seguridad, los archivos de texto nacen siempre con el número 666 y las carpetas nacen abiertas con el 777."
},

{
  id: 76,
  pregunta: "No es un grupo del sistema operativo por defecto:",
  opciones: [
    "Gestor.",
    "Administrador.",
    "Usuario.",
    "Usuario avanzado."
  ],
  correcta: 0,
  explicacion: "Cuando compras e instalas un sistema operativo, ya trae de fábrica grupos preparados como 'Administradores' o 'Usuarios'. Sin embargo, el grupo 'Gestor' te lo tendrías que crear tú mismo a mano."
},

{
  id: 77,
  pregunta: "Para asignar las contraseñas a los usuarios deberemos usar el comando:",
  opciones: [
    "passwd.",
    "openssl passwd.",
    "Las dos anteriores son correctas.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 2,
  explicacion: "Puedes hacerlo a mano con 'passwd' (te pide que la escribas dos veces) o puedes decirle al ordenador que la guarde ya mezclada de forma súper secreta (encriptada) usando la herramienta 'openssl passwd'. Ambas sirven."
},

{
  id: 78,
  pregunta: "Usaremos este comando para cambiar los permisos en Linux:",
  opciones: [
    "chmod.",
    "umask.",
    "umod.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 0,
  explicacion: "Viene de 'Change Mode' (cambiar el modo del archivo). Es tu varita mágica para decidir quién tiene permiso para leer tu dibujo, si alguien puede pintar encima de él, o si nadie más puede tocarlo."
},

{
  id: 79,
  pregunta: "Usuario que tiene el privilegio necesario para efectuar cambios en los ficheros de configuración:",
  opciones: [
    "Gestor.",
    "Administrador.",
    "Usuario.",
    "Usuario avanzado."
  ],
  correcta: 1,
  explicacion: "Es el jefe absoluto de la máquina. Un usuario normal no puede tocar los archivos importantes del sistema para que no lo rompa; solo el Administrador (o Root) tiene la llave maestra para hacerlo."
},

{
  id: 80,
  pregunta: "Usuarios que iniciarán sesión en el equipo de manera ocasional y cuentan con los permisos justos:",
  opciones: [
    "Gestor.",
    "Administrador.",
    "Usuario.",
    "Ninguno de los anteriores."
  ],
  correcta: 3,
  explicacion: "A esta cuenta se le suele llamar cuenta de 'Invitado'. Es la que usas cuando viene un amigo a casa y le dejas mirar internet un rato, pero sin darle poderes ni permisos de un usuario real."
},

{
  id: 81,
  pregunta: "Componente que conecta diferentes redes:",
  opciones: [
    "Repetidor.",
    "Hub.",
    "Switch.",
    "Router."
  ],
  correcta: 3,
  explicacion: "Es como el guardia de tráfico de tu ciudad que se sabe todos los caminos. El router (enrutador) es el aparato inteligente que conecta la red de tu casa con la red gigante de internet, decidiendo por dónde debe viajar cada mensaje."
},

{
  id: 82,
  pregunta: "El más dañino de todos los tipos de malware. Se usa para cifrar todo el sistema y quitarles el acceso a los usuarios ya que no poseen la correspondiente clave:",
  opciones: [
    "Scumware.",
    "Exploit.",
    "Ransomware.",
    "Adware."
  ],
  correcta: 2,
  explicacion: "Es un pirata malvado que se mete en tu cuarto, mete todos tus juguetes en un baúl con candado y te dice que o le das tus ahorros o nunca te dará la llave. Eso es un secuestro de datos (Ransomware)."
},

{
  id: 83,
  pregunta: "El protocolo IP:",
  opciones: [
    "Está orientado a la conexión.",
    "No es fiable.",
    "Requiere de cableado.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 1,
  explicacion: "Es como echar una carta normal al buzón de correos: tú la envías, pero nadie te avisa de si ha llegado bien o se ha perdido por el camino. En informática, se dice que IP 'no es fiable' porque no garantiza la entrega; de eso ya se encarga el protocolo TCP."
},

{
  id: 84,
  pregunta: "El tipo de red coaxial se basa en:",
  opciones: [
    "El espacio.",
    "La distribución.",
    "El cableado.",
    "El diseño."
  ],
  correcta: 2,
  explicacion: "Se basa puramente en los cables que usa. El cable coaxial es ese cable gordito, redondo y con un pincho en el medio que solemos enchufar detrás de la televisión. ¡Todo va por cable de cobre protegido!"
},

{
  id: 85,
  pregunta: "Es un tipo de dirección IP:",
  opciones: [
    "Estática.",
    "Dinámica.",
    "Alternativa.",
    "Todas las anteriores son correctas."
  ],
  correcta: 3,
  explicacion: "Tu número de teléfono en internet puede ser de varios tipos: puede ser el mismo para toda la vida (Estática), cambiar cada vez que enciendes el PC (Dinámica), o ser uno de reserva por si el principal falla (Alternativa)."
},

{
  id: 86,
  pregunta: "Existen comandos para modificar y monitorizar las redes en Linux, uno de ellos es:",
  opciones: [
    "lshw.",
    "lsdc.",
    "lswr.",
    "lswd."
  ],
  correcta: 0,
  explicacion: "Viene de 'LiSt HardWare' (Listar Hardware). Es como pedirle al ordenador que te haga una lista de todas las piezas físicas que tiene dentro, incluyendo las tarjetas de red, para saber qué estás usando."
},

{
  id: 87,
  pregunta: "La cabecera en IPv6 posee:",
  opciones: [
    "20 bytes.",
    "30 bytes.",
    "40 bytes.",
    "50 bytes."
  ],
  correcta: 2,
  explicacion: "Es como la etiqueta que le pones a una caja de mudanza para saber a dónde va. En el sistema moderno de internet (IPv6), esa etiqueta tiene un tamaño fijo de 40 trocitos (bytes) para que los ordenadores la lean muy rápido."
},

{
  id: 88,
  pregunta: "Mediante esta tecnología podemos crear una red inalámbrica con un smartphone:",
  opciones: [
    "Coaxial.",
    "TCP/IP.",
    "Wi-Fi Direct.",
    "WPA."
  ],
  correcta: 2,
  explicacion: "Es como hacer magia para que dos móviles hablen entre ellos por el aire sin necesitar un router de por medio. Wi-Fi Direct conecta los aparatos directamente de forma inalámbrica."
},

{
  id: 89,
  pregunta: "No es un diseño de una topología de red:",
  opciones: [
    "Estrella.",
    "Árbol",
    "Malla.",
    "Todas las anteriores son correctas."
  ],
  correcta: 3,
  explicacion: "Las 'topologías' son las formas que hacen los cables cuando conectamos muchos ordenadores. Podemos ponerlos formando una Estrella, un Árbol o una Malla; todas esas existen de verdad."
},

{
  id: 90,
  pregunta: "No es uno de los protocolos principales de red:",
  opciones: [
    "Ethernet.",
    "UDP.",
    "TCP/IP.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 3,
  explicacion: "¡Cuidado, es una pregunta trampa! Ethernet, UDP y TCP/IP son todos idiomas principales y súper famosos que usan los ordenadores para hablar por la red. Por eso decir que 'no son principales' es incorrecto."
},

{
  id: 91,
  pregunta: "El SID es:",
  opciones: [
    "Un código que da acceso al sistema",
    "Un sistema de autenticación de Windows",
    "Un identificador único asociado a un usuario",
    "Es lo mismo que el SAT"
  ],
  correcta: 2,
  explicacion: "Es como el DNI de una persona en el mundo real. En el ordenador, el SID (Security Identifier) es un número secreto y súper largo que sirve para no confundirte con nadie más, aunque otra persona se llame igual que tú."
},

{
  id: 92,
  pregunta: "La administración remota es:",
  opciones: [
    "El término que define la acción de administrar y asegurar la seguridad del sistema a distancia",
    "La técnica para el cifrado de archivos",
    "Un dispositivo destinado al análisis del tráfico entrante",
    "Ninguna es correcta."
  ],
  correcta: 0,
  explicacion: "Su propio nombre te lo dice: 'remota' es desde lejos. Es como conducir un coche teledirigido. Consiste en que un técnico pueda controlar y arreglar tu ordenador desde su propia casa sin tener que ir a la tuya."
},

{
  id: 93,
  pregunta: "La administración remota:",
  opciones: [
    "Solo se puede usar con una herramienta",
    "Viene incorporada en Windows mediante tres herramientas",
    "No permite gestionar el equipo en temas de seguridad",
    "Todas las anteriores son correctas."
  ],
  correcta: 1,
  explicacion: "Windows es tan listo que ya trae sus propios 'mandos a distancia' de fábrica. Tiene herramientas como el Escritorio Remoto o la Asistencia Rápida para que alguien te pueda ayudar desde otra pantalla."
},

{
  id: 94,
  pregunta: "La herencia se deshabilita desde:",
  opciones: [
    "Las propiedades del usuario",
    "Las propiedades del recurso",
    "No se puede deshabilitar",
    "Desde el cmd"
  ],
  correcta: 1,
  explicacion: "La herencia es cuando una carpeta pequeña copia las normas de la carpeta grande donde está metida. Si quieres que la carpeta pequeña tenga sus propias reglas, vas a las propiedades de esa misma carpeta (el recurso) y le cortas la herencia."
},

{
  id: 95,
  pregunta: "Las directivas de seguridad del sistema se dividen en:",
  opciones: [
    "Directivas de seguridad de dominio y de red",
    "Directivas de seguridad locales y de red",
    "A Y B son correctas.",
    "Ninguna es correcta"
  ],
  correcta: 3,
  explicacion: "Las normas de seguridad de Windows no se dividen exactamente con esos nombres tan raros. Técnicamente, en un entorno empresarial, se dividen principalmente en Locales (solo en ese PC) y de Dominio (las que manda el servidor central)."
},

{
  id: 96,
  pregunta: "Marca que elementos son parte del SAT:",
  opciones: [
    "La lista de los derechos del usuario",
    "El SID del usuario",
    "La lista de los SID de los grupos de los que el usuario es miembro",
    "Todas son correctas"
  ],
  correcta: 3,
  explicacion: "El SAT (Security Access Token) es como tu mochila del colegio. Dentro llevas tu nombre (SID), la lista de tus amigos (grupos) y un papel que dice a qué aulas puedes entrar (derechos)."
},

{
  id: 97,
  pregunta: "Un algoritmo de clave pública es:",
  opciones: [
    "RSA",
    "DSA",
    "ECC",
    "Todas son correctas"
  ],
  correcta: 3,
  explicacion: "A diferencia del cofre de una sola llave, aquí usamos dos llaves: una pública que le das a todo el mundo y una privada que te quedas tú. RSA, DSA y ECC son diferentes marcas de candados muy famosos que funcionan así."
},

{
  id: 98,
  pregunta: "Un ejemplo de herramienta para administración remota sería:",
  opciones: [
    "Teams",
    "Skype",
    "Servicios de gestión de usuarios",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 2,
  explicacion: "Teams y Skype son solo para hablar y verse por cámara, no para controlar el ordenador por dentro. Los 'Servicios de gestión' son los que sí te dejan tocar las tripas del sistema desde lejos."
},

{
  id: 99,
  pregunta: "Un privilegio es:",
  opciones: [
    "Un apartado de los derechos que indican acciones que no se indican con los demás derechos",
    "Una identificación única usada por Windows",
    "Una lista de los permisos que regulan un recurso",
    "El permiso de control total"
  ],
  correcta: 0,
  explicacion: "Es como ser el delegado de la clase: tienes derecho a hacer cosas especiales que los demás niños no pueden hacer, como apagar el ordenador general o cambiar la hora del reloj del sistema."
},

{
  id: 100,
  pregunta: "Un servidor debe de cumplir con estos tres aspectos:",
  opciones: [
    "Disponibilidad, calidad y mantenimiento",
    "Escalabilidad, mantenimiento y disponibilidad",
    "Mantenimiento, disponibilidad y automatismo",
    "Disponibilidad, escalabilidad y gestión avanzada"
  ],
  correcta: 1,
  explicacion: "Un servidor es el corazón de una empresa. Tiene que estar siempre encendido (disponible), ser fácil de arreglar si se rompe algo (mantenimiento) y poder hacerse más grande si la empresa necesita más fuerza (escalable)."
},

{
  id: 101,
  pregunta: "Conjunto de normas donde todos los derechos de la obra son del propietario de esta:",
  opciones: [
    "Copyright.",
    "Copyleft.",
    "Creative Commons.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 0,
  explicacion: "Es la regla de 'esto es mío y de nadie más'. El Copyright prohíbe copiar o usar un dibujo, una canción o un programa a menos que el creador te dé permiso expreso o le pagues."
},

{
  id: 102,
  pregunta: "El protocolo POP3 es empleado en:",
  opciones: [
    "El correo electrónico.",
    "Mensajería instantánea.",
    "Transferencia de ficheros.",
    "Software antimalware."
  ],
  correcta: 0,
  explicacion: "Es como el buzón amarillo de tu calle. Sirve exclusivamente para recibir y descargar los correos electrónicos desde el servidor de internet hasta tu programa de correo."
},

{
  id: 103,
  pregunta: "En la clonación de un equipo:",
  opciones: [
    "Solo podemos clonar una partición.",
    "Solo podemos clonar el disco entero.",
    "Podemos clonar tanto una partición como el disco entero.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 2,
  explicacion: "Clonar es hacer magia y crear un hermano gemelo. Puedes decirle a la máquina que haga un gemelo de toda la casa entera (el disco duro completo) o solo de una habitación (una partición)."
},

{
  id: 104,
  pregunta: "La escalabilidad, el anonimato y la descentralización son características de:",
  opciones: [
    "El correo electrónico.",
    "Mensajería instantánea.",
    "Transferencia de ficheros.",
    "Software antimalware."
  ],
  correcta: 2,
  explicacion: "Esto ocurre sobre todo en las redes P2P para pasar archivos grandes. Al no haber un jefe central (descentralizado), cualquiera puede conectarse para compartir cosas de forma un poco más secreta (anónima)."
},

{
  id: 105,
  pregunta: "Las aplicaciones médicas:",
  opciones: [
    "Nunca serán consideradas de ofimática.",
    "Ya que no son domésticas no pueden considerarse ofimáticas.",
    "Sí son ofimáticas, aunque especializada a un ámbito profesional.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 2,
  explicacion: "La ofimática son las herramientas de oficina. La consulta de un médico es su 'oficina', así que el programa que usa para apuntar tus recetas o tus vacunas es ofimática, pero hecha a medida para doctores."
},

{
  id: 106,
  pregunta: "Las herramientas ofimáticas:",
  opciones: [
    "Están destinadas a uso doméstico.",
    "Siempre son de propósito general.",
    "Existen tanto de propósito general como específicas.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 2,
  explicacion: "Hay herramientas de oficina que valen para todo, como Word para escribir lo que quieras (general), y hay herramientas que solo sirven para cosas muy raras, como un programa para gestionar una peluquería (específicas)."
},

{
  id: 107,
  pregunta: "No es un tipo de copia:",
  opciones: [
    "Completa.",
    "Decreciente.",
    "Incremental.",
    "Diferencial."
  ],
  correcta: 1,
  explicacion: "Cuando haces copias de seguridad de tus fotos, siempre guardas más y más. Por eso la palabra 'decreciente' (ir a menos) no existe en esto. No tiene sentido hacer una copia para perder cosas."
},

{
  id: 108,
  pregunta: "No es un tipo de licencia:",
  opciones: [
    "Copyright.",
    "Copyleft.",
    "Creative Commons.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 3,
  explicacion: "Todas las palabras que ves ahí (Copyright, Copyleft, Creative Commons) son nombres de reglas legales de verdad que existen para proteger quién es el dueño de un archivo o un programa."
},

{
  id: 109,
  pregunta: "No es una función del antivirus:",
  opciones: [
    "Prevención de infección.",
    "Análisis del equipo.",
    "Detección de virus.",
    "Recuperación de archivos dañados."
  ],
  correcta: 3,
  explicacion: "El antivirus es como un vigilante de seguridad. Intenta que no entren ladrones (prevención) y los busca por si se han colado (detección). Pero si un virus ya ha roto o borrado un archivo, el antivirus no es mágico y no sabe arreglarlo; para eso sirven las copias de seguridad."
},

{
  id: 110,
  pregunta: "Qué tipo de aplicación es MySQL:",
  opciones: [
    "Procesador de texto.",
    "Base de datos.",
    "Presentación gráfica.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 1,
  explicacion: "Es como un armario gigante con miles de cajoncitos perfectamente ordenados. MySQL es un programa de Base de Datos que usan los ordenadores para guardar muchísima información de manera que puedan encontrar cualquier cosa en un segundo."
}

];