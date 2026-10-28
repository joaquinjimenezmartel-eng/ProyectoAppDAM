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
  explicacion: "`Lusrmgr.msc` abre la consola Usuarios y grupos locales de Windows. Desde ella se pueden crear, modificar o deshabilitar cuentas locales y administrar su pertenencia a grupos. El nombre ayuda a recordarla: `lusrmgr` es la abreviatura de *Local User Manager*."},

{ id: 2,
  pregunta: "¿En qué fichero de Linux se almacenan las contraseñas encriptadas de los usuarios?",
  opciones: [
    "/etc/passwd",
    "/etc/shadow",
    "/etc/password",
    "/etc/users"
  ],
  correcta: 1,
  explicacion: "Linux guarda en `/etc/shadow` los hashes de las contraseñas y otros datos, como su fecha de caducidad. Un hash no es la contraseña cifrada para poder recuperarla: es un valor derivado que permite comprobarla sin almacenarla en texto claro. El archivo `/etc/passwd`, en cambio, conserva información pública de las cuentas."},

{ id: 3,
  pregunta: "¿Se puede instalar Debian de manera gráfica?",
  opciones: [
    "No",
    "Depende de si se instala en VirtualBox o en VMware",
    "Depende de qué versión se instale",
    "Sí"
  ],
  correcta: 3,
  explicacion: "Sí. El instalador de Debian ofrece una modalidad gráfica que permite completar con ratón y ventanas las mismas decisiones esenciales de la instalación, como idioma, particionado, usuarios y paquetes. También existe un instalador en modo texto para equipos o situaciones donde resulte más adecuado."},

{ id: 4,
  pregunta: "¿Se pueden restaurar copias de seguridad incrementales y diferenciales al mismo tiempo?",
  opciones: [
    "Sí y debe hacerse",
    "No se debe",
    "No",
    "No se pueden restaurar este tipo de copias bajo ningún concepto"
  ],
  correcta: 1,
  explicacion: "No se deben mezclar de forma arbitraria cadenas de restauración incrementales y diferenciales. Una copia incremental depende de la copia completa y de los incrementos anteriores; una diferencial depende de la última copia completa. Para recuperar los datos con fiabilidad se sigue la cadena correspondiente al método utilizado y al software de copias."},

{ id: 5,
  pregunta: "El comando cat hola > alumnos.txt añade contenido a un fichero y además…",
  opciones: [
    "Lo borra",
    "Lo ejecuta",
    "Reescribe el contenido si ya tiene algo",
    "Lo añade a continuación si ya existe contenido en el fichero"
  ],
  correcta: 2,
  explicacion: "El operador `>` redirige la salida al archivo indicado y, si ese archivo ya existe, sustituye su contenido. Para añadir la salida al final sin borrar lo anterior se utiliza `>>`. La diferencia entre ambos operadores es importante al automatizar comandos para no perder información."},

{ id: 6,
  pregunta: "El directorio C:\\system32 pertenece a:",
  opciones: [
    "Linux",
    "GNU",
    "Windows",
    "Todas las anteriores son correctas"
  ],
  correcta: 2,
  explicacion: "`System32` es un directorio propio de Windows, normalmente ubicado en `C:\\Windows\\System32`. Contiene componentes esenciales del sistema, bibliotecas y herramientas administrativas. La letra de unidad y la barra inversa también corresponden a la sintaxis habitual de rutas de Windows."},

{ id: 7,
  pregunta: "El más dañino de todos los tipos de malware. Se usa para cifrar todo el sistema y quitarles el acceso a los usuarios:",
  opciones: [
    "Scumware",
    "Exploit",
    "Ransomware",
    "Adware"
  ],
  correcta: 2,
  explicacion: "El ransomware bloquea el acceso al sistema o cifra los archivos de la víctima y exige un pago para intentar recuperarlos. El término procede de *ransom* (rescate). Su impacto puede afectar tanto a los datos como a la continuidad del servicio, por lo que las copias de seguridad aisladas y actualizadas son una medida de protección esencial."},

{ id: 8,
  pregunta: "El procesador se describe como:",
  opciones: [
    "Un conjunto software del sistema operativo",
    "La selección del orden de importancia de cada solicitud",
    "Un recurso que posee varios núcleos con los que puede ejecutar varios procesos a la vez",
    "El facilitador de la gestión de los trabajos de impresión"
  ],
  correcta: 2,
  explicacion: "Un procesador puede integrar varios núcleos, y cada núcleo ejecuta instrucciones de uno o más hilos. Esto permite trabajar realmente en paralelo cuando hay núcleos disponibles; si existen más tareas que recursos de ejecución, el sistema operativo reparte el tiempo del procesador entre ellas."},

{ id: 9,
  pregunta: "El protocolo POP3 es empleado en:",
  opciones: [
    "Mensajería instantánea",
    "El correo electrónico",
    "Transferencia de ficheros",
    "Software antimalware"
  ],
  correcta: 1,
  explicacion: "POP3 es un protocolo de aplicación utilizado para recuperar correo electrónico desde un servidor. El cliente descarga los mensajes y, según su configuración, puede conservar o eliminar la copia del servidor. IMAP también accede al correo, pero está orientado a sincronizar buzones entre varios dispositivos."},

{ id: 10,
  pregunta: "El SID es:",
  opciones: [
    "Un código que da acceso al sistema",
    "Un sistema de autenticación de Windows",
    "Un identificador único asociado a un usuario",
    "Es lo mismo que el SAT"
  ],
  correcta: 2,
  explicacion: "Un SID (*Security Identifier*) es el identificador único que Windows asigna a un principal de seguridad, como un usuario o un grupo. Los permisos se vinculan al SID y no solo al nombre visible; por eso cambiar el nombre de una cuenta no cambia su identidad de seguridad."},

{ id: 11,
  pregunta: "El sistema de archivos estándar de Microsoft Windows:",
  opciones: [
    "FAT",
    "NTFS",
    "APFS",
    "Todas las anteriores son correctas"
  ],
  correcta: 1,
  explicacion: "NTFS es el sistema de archivos habitual de las instalaciones modernas de Windows. Admite permisos mediante listas de control de acceso, registro de cambios (*journaling*), archivos de gran tamaño y otras funciones avanzadas. FAT y exFAT se usan también, sobre todo por compatibilidad en unidades extraíbles."},

{ id: 12,
  pregunta: "El tipo de red coaxial se basa en:",
  opciones: [
    "El espacio",
    "La distribución",
    "El cableado",
    "El diseño"
  ],
  correcta: 2,
  explicacion: "Una red coaxial se define por el medio físico utilizado: el cable coaxial, formado por un conductor central, material aislante y una malla conductora. Por tanto, esta clasificación se basa en el cableado y no en la distribución lógica ni en el diseño de la red."},

{ id: 13,
  pregunta: "En Linux la opción -l del comando ls:",
  opciones: [
    "Muestra el contenido en formato largo",
    "Ordena el contenido por fecha de modificación",
    "Invierte el orden de la salida",
    "Muestra el contenido oculto"
  ],
  correcta: 0,
  explicacion: "La opción `-l` muestra el listado en formato largo. Además del nombre, incluye los permisos, el número de enlaces, el propietario, el grupo, el tamaño y la fecha de modificación. Por ejemplo, `ls -l /var/log` permite revisar esos datos para cada entrada del directorio."},

{ id: 14,
  pregunta: "Es importante que un antivirus…",
  opciones: [
    "Consuma mucha CPU",
    "No se actualice",
    "Consuma poca memoria",
    "Ocupe mucho espacio en disco"
  ],
  correcta: 2,
  explicacion: "Un antivirus suele permanecer activo y analizar archivos, procesos y conexiones en segundo plano. Por eso debe consumir pocos recursos: si utiliza demasiada memoria o CPU, puede degradar el rendimiento del equipo aunque detecte correctamente las amenazas. La eficacia y el consumo deben estar equilibrados."},

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
  explicacion: "FTP significa *File Transfer Protocol* o Protocolo de Transferencia de Archivos. Es un protocolo de la capa de aplicación diseñado para transferir archivos entre un cliente y un servidor. FTP clásico no cifra por sí mismo las credenciales ni los datos; FTPS y SFTP son alternativas seguras distintas."},

{ id: 17,
  pregunta: "Indica cuál de los siguientes es un dispositivo de interconexión de red:",
  opciones: [
    "RJ-45",
    "Ordenador",
    "Switch",
    "BIOS"
  ],
  correcta: 2,
  explicacion: "Un switch conecta dispositivos dentro de una red local y reenvía las tramas al puerto adecuado según la dirección MAC de destino. A diferencia de un hub, no replica normalmente todo el tráfico a todos los puertos, lo que reduce colisiones y aprovecha mejor el ancho de banda."},

{ id: 18,
  pregunta: "Indica qué tipo de software es VMware Workstation:",
  opciones: [
    "Software libre",
    "Software propietario",
    "Software totalmente gratuito",
    "Software incremental"
  ],
  correcta: 1,
  explicacion: "VMware Workstation es software propietario: su uso, distribución y modificación están sujetos a la licencia de su fabricante y su código fuente no se publica como software libre. Que una edición pueda utilizarse gratuitamente no cambia por sí solo el tipo de licencia."},

{ id: 19,
  pregunta: "La administración remota:",
  opciones: [
    "Solo se puede usar con una herramienta",
    "Viene incorporada en Windows mediante tres herramientas",
    "No permite gestionar el equipo en temas de seguridad",
    "Todas las anteriores son correctas"
  ],
  correcta: 1,
  explicacion: "Windows incorpora herramientas para administrar o prestar asistencia a distancia, sin necesidad de instalar siempre una solución externa. Estas utilidades permiten acceder a una sesión, ofrecer soporte o ejecutar tareas de gestión, aunque deben configurarse con autenticación y permisos adecuados."},

{ id: 20,
  pregunta: "La cabecera en IPv6 posee:",
  opciones: [
    "20 bytes",
    "30 bytes",
    "40 bytes",
    "50 bytes"
  ],
  correcta: 2,
  explicacion: "La cabecera base de un paquete IPv6 tiene una longitud fija de 40 bytes. Incluye, entre otros campos, las direcciones de origen y destino de 128 bits. La información adicional se incorpora mediante cabeceras de extensión, por lo que no aumenta el tamaño de la cabecera base."},

{ id: 21,
  pregunta: "Las placas base se guían por los:",
  opciones: [
    "Factores de forma",
    "Zócalos del microprocesador",
    "Conectores internos",
    "Conectores externos"
  ],
  correcta: 0,
  explicacion: "El factor de forma establece dimensiones, puntos de montaje y disposición general de una placa base. Estándares como ATX o microATX permiten comprobar su compatibilidad física con la caja y condicionan aspectos como el número de ranuras de expansión disponibles."},

{ id: 22,
  pregunta: "Las redes P2P hacen referencia a…",
  opciones: [
    "Pair to pair",
    "Peer to peer",
    "Point to point",
    "Poe to poe"
  ],
  correcta: 1,
  explicacion: "P2P significa *peer to peer* o «entre iguales». En este modelo, cada equipo puede actuar como cliente y como servidor, compartiendo recursos directamente con otros nodos. Se diferencia del modelo cliente-servidor, donde un servidor central presta el servicio a los clientes."},

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
  explicacion: "Los sistemas operativos distribuidos coordinan recursos y servicios de varios equipos conectados y procuran presentarlos de forma integrada. Por ello se clasifican según cómo ofrecen los servicios al usuario, no por el número de procesos o usuarios que ejecuta una máquina aislada."},

{ id: 26,
  pregunta: "Para crear un directorio alumnos en Linux en la ruta actual usamos el comando…",
  opciones: [
    "mkdir -r alumnos",
    "mkdir alumnos",
    "rmdir alumnos",
    "rmdir -r alumnos"
  ],
  correcta: 1,
  explicacion: "`mkdir` procede de *make directory* y crea uno o varios directorios. El comando `mkdir alumnos` crea el directorio `alumnos` dentro de la ruta de trabajo actual. Si se necesita crear también directorios padre inexistentes, puede utilizarse la opción `-p`."},

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
  explicacion: "Antes de instalar o reinstalar un sistema operativo conviene realizar una copia de seguridad verificada de los datos importantes. El particionado, el formateo o un error durante la instalación pueden provocar pérdida de información; además, la copia debe guardarse en un medio distinto del que se va a modificar."},

{ id: 29,
  pregunta: "¿Qué tipo de aplicación es MySQL?",
  opciones: [
    "Procesador de texto",
    "Base de datos",
    "Presentación gráfica",
    "Todas las anteriores son incorrectas"
  ],
  correcta: 1,
  explicacion: "MySQL se clasifica habitualmente como una aplicación de bases de datos, aunque el término técnico más preciso es sistema gestor de bases de datos relacionales. Permite crear bases, organizar la información en tablas, ejecutar consultas SQL y administrar usuarios, integridad y transacciones."},

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
  explicacion: "AES es un algoritmo de cifrado simétrico: emplea la misma clave secreta para cifrar y descifrar. Por ejemplo, si un archivo se cifra con una clave AES, el receptor necesita esa misma clave para recuperar el contenido. RSA, por contraste, utiliza un par de claves y pertenece a la criptografía asimétrica."},

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
  explicacion: "El hardware comprende los componentes físicos de un sistema informático. El microprocesador es uno de ellos: es el circuito integrado que interpreta y ejecuta instrucciones. VirtualBox es software y un *host* describe una función o equipo dentro de un entorno, por lo que no son componentes equivalentes."},

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
  explicacion: "Un sistema multitarea mantiene varios procesos en ejecución concurrente. En un único núcleo alterna rápidamente entre ellos mediante planificación; con varios núcleos también puede ejecutar tareas en paralelo. Así, por ejemplo, es posible reproducir audio mientras se edita un documento."},

{ id: 36,
  pregunta: "Una de las distribuciones que se emplean de manera específica en los sistemas Linux es:",
  opciones: [
    "Windows Pro",
    "MacOS X",
    "Ubuntu Desktop",
    "FreeBSD"
  ],
  correcta: 2,
  explicacion: "Ubuntu Desktop es una distribución GNU/Linux orientada a equipos de escritorio. Integra el núcleo Linux con herramientas del sistema, gestor de paquetes, entorno gráfico y aplicaciones. No es una versión independiente del núcleo, sino una distribución completa construida alrededor de él."},

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
  explicacion: "Después de crear la máquina virtual y asociar el medio de instalación, se inicia el instalador de Windows 10. En esta fase se seleccionan los ajustes básicos solicitados —como idioma, disco y cuenta— para que el sistema operativo quede instalado dentro de la máquina virtual."
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
  explicacion: "En una instalación realizada específicamente para un equipo o componente, el primer paso es consultar el manual del fabricante. Ahí se detallan requisitos, compatibilidades, conexiones, medidas de seguridad y secuencia de montaje; seguirlo evita daños y configuraciones incorrectas."
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
  explicacion: "El factor de forma define las dimensiones, la ubicación de los puntos de anclaje y la disposición general de una placa base. Estándares como ATX y microATX permiten determinar si la placa es físicamente compatible con una caja y qué posibilidades de expansión ofrece."
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
  explicacion: "El almacenamiento flash conserva los datos en chips de memoria no volátil y no necesita piezas mecánicas. Los SSD y las tarjetas de memoria utilizan esta tecnología; por ello suelen ofrecer menor latencia y mayor resistencia a golpes que un disco duro magnético, aunque su rendimiento depende del dispositivo concreto."
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
  explicacion: "Las fuentes de alimentación de los ordenadores suministran varias líneas de corriente continua, entre ellas 3,3 V, 5 V y 12 V. Cada línea alimenta componentes con necesidades distintas; por ejemplo, motores y ciertos circuitos usan 12 V, mientras que la electrónica digital utiliza tensiones menores."
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
  explicacion: "Los periféricos se clasifican según el flujo de información: de entrada, como el teclado; de salida, como el monitor; y de entrada/salida, como una pantalla táctil o una unidad de almacenamiento. Por eso, si las opciones recogen estas tres categorías, todas son correctas."
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
  explicacion: "El microprocesador es un componente físico y, por tanto, forma parte del hardware. Ejecuta las instrucciones de los programas y coordina operaciones con la memoria y otros dispositivos. VirtualBox es software; los demás términos de las opciones no identifican en este caso el componente solicitado."
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
  explicacion: "El software de aplicación reúne los programas diseñados para que el usuario realice tareas concretas, como redactar documentos, editar imágenes, comunicarse o gestionar información. Se diferencia del software de sistema, que administra el hardware y proporciona la base sobre la que se ejecutan esas aplicaciones."
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
  explicacion: "El sistema operativo administra el hardware mediante distintos subsistemas: el gestor de procesos planifica la CPU, el gestor de memoria asigna y protege espacios de memoria y los mecanismos de comunicación permiten intercambiar datos entre procesos o equipos. Por eso las tres opciones describen funciones de gestión válidas."
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
  explicacion: "Un procesador multinúcleo dispone de varias unidades capaces de ejecutar instrucciones. Esto permite que distintos procesos o hilos avancen en paralelo cuando existen núcleos disponibles; además, el planificador del sistema operativo distribuye el trabajo y alterna las tareas cuando es necesario."
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
  explicacion: "Rufus crea unidades USB de arranque a partir de imágenes de disco, como una ISO de instalación. La herramienta prepara el esquema de particiones y copia el contenido necesario para que el firmware pueda iniciar el equipo desde el USB e instalar o ejecutar el sistema elegido."
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
  explicacion: "Un sistema monoprogramado mantiene un solo programa de usuario en ejecución cada vez. Hasta que ese programa termina o libera el recurso, no se inicia otro. Se diferencia de un sistema multiprogramado, que mantiene varios programas disponibles y alterna la CPU entre ellos."
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
  explicacion: "Una API (*Application Programming Interface*) ofrece operaciones definidas para que un programa utilice funciones del sistema o de un dispositivo sin conocer su implementación interna. Por ejemplo, una aplicación invoca una API para solicitar acceso a la cámara, mientras el sistema y el controlador gestionan el hardware."
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
  explicacion: "Un sistema operativo distribuido coordina recursos y servicios situados en varios equipos conectados, procurando presentarlos de forma integrada al usuario. Esta clasificación atiende a cómo se ofrecen los servicios, no al número de usuarios o de procesos que admite cada equipo."
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
  explicacion: "El gestor de arranque localiza y carga el núcleo del sistema operativo después de la inicialización del firmware. También puede ofrecer un menú para elegir entre varios sistemas o configuraciones. GRUB es un ejemplo habitual en GNU/Linux; Windows utiliza su propio gestor de arranque."
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
  explicacion: "Monolítica, por capas y micronúcleo son arquitecturas válidas de sistemas operativos. Se diferencian en cómo distribuyen servicios como memoria, controladores y comunicación: un núcleo monolítico concentra más funciones, mientras que un micronúcleo mantiene en él solo las esenciales."
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
  explicacion: "Ubuntu Desktop es una distribución GNU/Linux preparada para equipos de escritorio. Combina el núcleo Linux con bibliotecas, herramientas, un gestor de paquetes, entorno gráfico y aplicaciones. Las distribuciones comparten componentes, pero pueden variar en configuración, paquetes y objetivos de uso."
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
  explicacion: "NTFS es el sistema de archivos habitual de Windows y organiza cómo se almacenan y recuperan archivos y directorios. Ofrece permisos mediante listas de control de acceso, registro de cambios, cuotas y soporte para archivos grandes. Los permisos no equivalen simplemente a «poner contraseñas» a carpetas."
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
  explicacion: "La opción correcta es `-l`, de *long format*. `ls -l` muestra para cada entrada los permisos, número de enlaces, propietario, grupo, tamaño, fecha de modificación y nombre. No debe confundirse con `-a`, que incluye archivos ocultos, ni con opciones de ordenación."
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
  explicacion: "Un enlace duro es otra entrada de directorio que apunta al mismo i-nodo y, por tanto, a los mismos datos que el nombre original. El contenido permanece mientras exista al menos un enlace duro. A diferencia de un enlace simbólico, no guarda una ruta hacia otro nombre."
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
  explicacion: "RAID 0 reparte los bloques de datos entre dos o más unidades para aumentar el rendimiento y sumar capacidad, pero no guarda información redundante. Si falla una sola unidad, se pierde el conjunto completo. Por eso RAID 0 no aporta tolerancia a fallos ni sustituye a una copia de seguridad."
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
  explicacion: "Un RAID anidado combina dos niveles, como RAID 10 (espejo y distribución) o RAID 50 (varios grupos RAID 5 distribuidos). RAID 0, RAID 1 y RAID 5 son niveles simples, no anidados. Por eso ninguno de los niveles ofrecidos individualmente cumple la condición."
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
  explicacion: "Linux distingue varios tipos de archivo, entre ellos archivos regulares, enlaces y archivos de dispositivo. Los dispositivos se representan mediante entradas especiales, normalmente bajo `/dev`. Como todos los tipos enumerados existen, la opción correcta es que ninguna de las anteriores es inexistente."
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
  explicacion: "Una ruta relativa se interpreta a partir del directorio de trabajo actual. Por ejemplo, `documentos/informe.txt` busca `documentos` dentro de la ubicación actual. Una ruta absoluta, en cambio, comienza desde la raíz del sistema y no depende del directorio en el que se ejecuta el comando."
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
  explicacion: "Un volumen reflejado corresponde a RAID 1: los mismos datos se escriben en dos unidades. Si una falla, la otra conserva una copia operativa. Esta redundancia mejora la disponibilidad, pero no reemplaza una copia de seguridad porque replica también borrados o corrupción lógica."
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
  explicacion: "Windows crea grupos locales predeterminados, como Administradores y Usuarios, con conjuntos de permisos ya definidos. «Gestor» no es uno de esos grupos estándar; si se necesitara un grupo con ese nombre y funciones, un administrador tendría que crearlo y asignarle miembros y permisos."
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
  explicacion: "`passwd` asigna o cambia de forma interactiva la contraseña de una cuenta. `openssl passwd` genera un hash de contraseña que puede utilizarse en procesos de administración no interactivos junto con la herramienta que actualice la cuenta. Conviene distinguirlos: `openssl passwd` genera el hash, pero por sí solo no modifica al usuario."
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
  explicacion: "`chmod` significa *change mode* y modifica los permisos de archivos y directorios en sistemas Unix. Permite conceder o retirar lectura (`r`), escritura (`w`) y ejecución (`x`) al propietario, al grupo y a otros usuarios; por ejemplo, `chmod u+x script.sh` añade permiso de ejecución al propietario."
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
  explicacion: "Una cuenta para uso ocasional y con permisos mínimos se denomina habitualmente Invitado. Como esa denominación no aparece entre las opciones propuestas, la respuesta válida es «Ninguno de los anteriores». La idea clave es aplicar el principio de mínimo privilegio a usuarios temporales."
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
  explicacion: "Un router conecta redes diferentes y decide el siguiente salto de cada paquete consultando su tabla de enrutamiento. Por ejemplo, enlaza una red local con la red del proveedor de Internet. Un switch, en cambio, conecta principalmente dispositivos dentro de una misma red local."
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
  explicacion: "El ransomware cifra archivos o bloquea el sistema para impedir que el usuario acceda a sus datos y después exige un rescate. La víctima no dispone de la clave necesaria para descifrarlos. Pagar no garantiza la recuperación; la prevención, la segmentación y las copias desconectadas reducen el riesgo."
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
  explicacion: "IP ofrece un servicio de mejor esfuerzo: intenta transportar los paquetes, pero no garantiza entrega, orden ni ausencia de duplicados. Cuando una aplicación necesita fiabilidad, TCP añade confirmaciones, control de secuencia y retransmisiones. Por eso la falta de garantías se atribuye a IP, no a que el protocolo sea inútil."
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
  explicacion: "`lshw` muestra información detallada del hardware detectado en Linux, incluidas interfaces de red, almacenamiento, memoria y procesador. Puede limitarse a una clase concreta; por ejemplo, `lshw -class network` centra la salida en los dispositivos de red."
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
  explicacion: "La cabecera base de IPv6 mide siempre 40 bytes. Contiene campos esenciales como versión, longitud de carga, siguiente cabecera, límite de saltos y las direcciones de origen y destino. Las opciones adicionales se incluyen en cabeceras de extensión separadas."
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
  explicacion: "Wi-Fi Direct permite establecer una conexión inalámbrica directa entre dispositivos compatibles sin depender de un punto de acceso tradicional. Uno de los equipos coordina el grupo y los demás se conectan a él, lo que facilita compartir archivos, imprimir o proyectar contenido."
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
  explicacion: "Ethernet, UDP y TCP/IP son tecnologías y protocolos fundamentales de las redes informáticas. Ethernet opera principalmente en las capas física y de enlace, UDP es un protocolo de transporte y TCP/IP designa la familia de protocolos utilizada en Internet. Como los tres pertenecen al ámbito principal de las comunicaciones de red, ninguna de las opciones A, B o C cumple la condición planteada."
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
  explicacion: "Un SID (*Security Identifier*) identifica de forma única a un usuario, grupo u otro principal de seguridad en Windows. No es una contraseña ni necesita ser secreto: el sistema lo utiliza en los tokens de acceso y en las listas de permisos para reconocer al principal aunque cambie su nombre visible."
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
  explicacion: "La administración remota consiste en gestionar, configurar y proteger un sistema desde otro equipo a través de una red. Puede incluir acceso al escritorio, ejecución de comandos, despliegue de cambios o supervisión. Debe protegerse con autenticación, cifrado y permisos limitados."
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
  explicacion: "Windows incorpora herramientas de acceso, asistencia y administración remota. Según la edición y la finalidad pueden utilizarse, por ejemplo, Escritorio remoto, Asistencia rápida o consolas de administración. Su disponibilidad no elimina la necesidad de habilitarlas y proteger el acceso correctamente."
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
  explicacion: "El token de acceso de seguridad de Windows identifica el contexto de seguridad de una sesión o proceso. Incluye el SID del usuario, los SID de sus grupos y sus privilegios, entre otros datos. Windows lo compara con las listas de control de acceso para decidir si permite una operación sobre un recurso."
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
  explicacion: "Los algoritmos de clave pública trabajan con un par relacionado: una clave pública que puede compartirse y una privada que debe mantenerse secreta. RSA, DSA y los algoritmos basados en curvas elípticas (ECC) pertenecen a la criptografía asimétrica, aunque no todos cumplen la misma función: DSA se utiliza específicamente para firmas digitales."
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
  explicacion: "Un privilegio autoriza acciones administrativas que no se expresan mediante los permisos habituales de un archivo u objeto. En Windows, por ejemplo, existen privilegios para cambiar la hora del sistema o apagar el equipo. Se asignan a cuentas o grupos y forman parte de su contexto de seguridad."
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
  explicacion: "El copyright o derecho de autor atribuye al titular derechos exclusivos sobre la reproducción, distribución, comunicación y transformación de la obra, dentro de los límites previstos por la ley. Por ello, que una obra sea accesible no significa que pueda copiarse o reutilizarse libremente: debe existir autorización, licencia o una excepción legal aplicable."
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
  explicacion: "POP3 se utiliza para recuperar mensajes de correo desde un servidor hacia un cliente. Normalmente descarga el contenido para consultarlo localmente y puede configurarse para dejar una copia en el servidor. El envío de correo utiliza protocolos distintos, como SMTP."
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
  explicacion: "La clonación crea una copia de la estructura y los datos de una unidad o partición en otro destino. Puede abarcar el disco completo —incluidas sus particiones y zonas de arranque— o limitarse a una partición concreta, según la herramienta y el objetivo de la migración."
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
  explicacion: "Las herramientas ofimáticas pueden ser de propósito general, como un procesador de textos o una hoja de cálculo, o estar especializadas en una actividad concreta, como facturación o gestión documental. La diferencia está en la amplitud de tareas para las que se diseñan."
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
  explicacion: "Un antivirus previene, detecta, bloquea y elimina código malicioso. Puede poner archivos en cuarentena o, en algunos casos, desinfectarlos, pero no garantiza reconstruir información que ya haya sido borrada o dañada. La recuperación fiable de esos archivos corresponde a una copia de seguridad válida."
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
  explicacion: "MySQL es un sistema gestor de bases de datos relacionales. Permite definir tablas y relaciones, consultar y modificar datos mediante SQL y controlar usuarios, integridad y transacciones. No es solo un archivo de datos: es el software que administra la base de datos."
}

];
