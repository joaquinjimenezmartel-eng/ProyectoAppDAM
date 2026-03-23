const bancoDePreguntas = {
    sistemas: [
       { id: 1,
  pregunta: "¿Cómo se llama la consola de Windows que permite administrar usuarios?",
  opciones: [
    "Lusmeger.msc",
    "Lusarmgr.msc",
    "Lusrmgr.msc",
    "No se pueden administrar usuarios en Windows mediante consolas"
  ],
  correcta: 2},

{ id: 2,
  pregunta: "¿En qué fichero de Linux se almacenan las contraseñas encriptadas de los usuarios?",
  opciones: [
    "/etc/passwd",
    "/etc/shadow",
    "/etc/password",
    "/etc/users"
  ],
  correcta: 1},

{ id: 3,
  pregunta: "¿Se puede instalar Debian de manera gráfica?",
  opciones: [
    "No",
    "Depende de si se instala en VirtualBox o en VMware",
    "Depende de qué versión se instale",
    "Sí"
  ],
  correcta: 3},

{ id: 4,
  pregunta: "¿Se pueden restaurar copias de seguridad incrementales y diferenciales al mismo tiempo?",
  opciones: [
    "Sí y debe hacerse",
    "No se debe",
    "No",
    "No se pueden restaurar este tipo de copias bajo ningún concepto"
  ],
  correcta: 1},

{ id: 5,
  pregunta: "El comando cat hola > alumnos.txt añade contenido a un fichero y además…",
  opciones: [
    "Lo borra",
    "Lo ejecuta",
    "Reescribe el contenido si ya tiene algo",
    "Lo añade a continuación si ya existe contenido en el fichero"
  ],
  correcta: 2},

{ id: 6,
  pregunta: "El directorio C:\\system32 pertenece a:",
  opciones: [
    "Linux",
    "GNU",
    "Windows",
    "Todas las anteriores son correctas"
  ],
  correcta: 2},

{ id: 7,
  pregunta: "El más dañino de todos los tipos de malware. Se usa para cifrar todo el sistema y quitarles el acceso a los usuarios:",
  opciones: [
    "Scumware",
    "Exploit",
    "Ransomware",
    "Adware"
  ],
  correcta: 2},

{ id: 8,
  pregunta: "El procesador se describe como:",
  opciones: [
    "Un conjunto software del sistema operativo",
    "La selección del orden de importancia de cada solicitud",
    "Un recurso que posee varios núcleos con los que puede ejecutar varios procesos a la vez",
    "El facilitador de la gestión de los trabajos de impresión"
  ],
  correcta: 2},

{ id: 9,
  pregunta: "El protocolo POP3 es empleado en:",
  opciones: [
    "Mensajería instantánea",
    "El correo electrónico",
    "Transferencia de ficheros",
    "Software antimalware"
  ],
  correcta: 1},

{ id: 10,
  pregunta: "El SID es:",
  opciones: [
    "Un código que da acceso al sistema",
    "Un sistema de autenticación de Windows",
    "Un identificador único asociado a un usuario",
    "Es lo mismo que el SAT"
  ],
  correcta: 2},

{ id: 11,
  pregunta: "El sistema de archivos estándar de Microsoft Windows:",
  opciones: [
    "FAT",
    "NTFS",
    "APFS",
    "Todas las anteriores son correctas"
  ],
  correcta: 1},

{ id: 12,
  pregunta: "El tipo de red coaxial se basa en:",
  opciones: [
    "El espacio",
    "La distribución",
    "El cableado",
    "El diseño"
  ],
  correcta: 2},

{ id: 13,
  pregunta: "En Linux la opción -l del comando ls:",
  opciones: [
    "Muestra el contenido en formato largo",
    "Ordena el contenido por fecha de modificación",
    "Invierte el orden de la salida",
    "Muestra el contenido oculto"
  ],
  correcta: 0},

{ id: 14,
  pregunta: "Es importante que un antivirus…",
  opciones: [
    "Consuma mucha CPU",
    "No se actualice",
    "Consuma poca memoria",
    "Ocupe mucho espacio en disco"
  ],
  correcta: 2},

{ id: 15,
  pregunta: "exFAT suele usarse en dispositivos:",
  opciones: [
    "Extraíbles",
    "Fijos",
    "De Microsoft únicamente",
    "De Linux únicamente"
  ],
  correcta: 0},

{ id: 16,
  pregunta: "FTP hace referencia a…",
  opciones: [
    "Found Transfer Protocol",
    "File Transport Protocol",
    "File Transfer Protocol",
    "File Transfer Premium"
  ],
  correcta: 2},

{ id: 17,
  pregunta: "Indica cuál de los siguientes es un dispositivo de interconexión de red:",
  opciones: [
    "RJ-45",
    "Ordenador",
    "Switch",
    "BIOS"
  ],
  correcta: 2},

{ id: 18,
  pregunta: "Indica qué tipo de software es VMware Workstation:",
  opciones: [
    "Software libre",
    "Software propietario",
    "Software totalmente gratuito",
    "Software incremental"
  ],
  correcta: 1},

{ id: 19,
  pregunta: "La administración remota:",
  opciones: [
    "Solo se puede usar con una herramienta",
    "Viene incorporada en Windows mediante tres herramientas",
    "No permite gestionar el equipo en temas de seguridad",
    "Todas las anteriores son correctas"
  ],
  correcta: 1},

{ id: 20,
  pregunta: "La cabecera en IPv6 posee:",
  opciones: [
    "20 bytes",
    "30 bytes",
    "40 bytes",
    "50 bytes"
  ],
  correcta: 2},

{ id: 21,
  pregunta: "Las placas base se guían por los:",
  opciones: [
    "Factores de forma",
    "Zócalos del microprocesador",
    "Conectores internos",
    "Conectores externos"
  ],
  correcta: 0},

{ id: 22,
  pregunta: "Las redes P2P hacen referencia a…",
  opciones: [
    "Pair to pair",
    "Peer to peer",
    "Point to point",
    "Poe to poe"
  ],
  correcta: 1},

{ id: 23,
  pregunta: "Las tarjetas de red pueden ser:",
  opciones: [
    "Solo de Windows",
    "Solo de Linux",
    "Cableadas únicamente",
    "Cableadas e inalámbricas"
  ],
  correcta: 3},

{ id: 24,
  pregunta: "Los permisos 0666 y 0777 son:",
  opciones: [
    "Los permisos originales y por defecto de un archivo y un directorio respectivamente",
    "Los permisos originales y por defecto de un directorio y un archivo respectivamente",
    "Los permisos no otorgables y por defecto de un archivo y un directorio respectivamente",
    "Los permisos no otorgables y por defecto de un directorio y un archivo respectivamente"
  ],
  correcta: 0},

{ id: 25,
  pregunta: "Los sistemas operativos distribuidos son una clasificación de un sistema operativo que responde a:",
  opciones: [
    "El interfaz utilizado",
    "Cómo ofrecen los servicios",
    "El tipo de procesamiento",
    "El número de usuarios"
  ],
  correcta: 1},

{ id: 26,
  pregunta: "Para crear un directorio alumnos en Linux en la ruta actual usamos el comando…",
  opciones: [
    "mkdir -r alumnos",
    "mkdir alumnos",
    "rmdir alumnos",
    "rmdir -r alumnos"
  ],
  correcta: 1},

{ id: 27,
  pregunta: "Pro, Player y Fusion son versiones del siguiente software privativo de virtualización:",
  opciones: [
    "VMware Workstation",
    "VirtualBox",
    "KVM",
    "Aviat Design"
  ],
  correcta: 0},

{ id: 28,
  pregunta: "Puede que sea importante realizar esta acción antes de instalar un sistema operativo:",
  opciones: [
    "Copia de seguridad",
    "Instalación nativa",
    "Instalación por red",
    "Instalación dual"
  ],
  correcta: 0},

{ id: 29,
  pregunta: "¿Qué tipo de aplicación es MySQL?",
  opciones: [
    "Procesador de texto",
    "Base de datos",
    "Presentación gráfica",
    "Todas las anteriores son incorrectas"
  ],
  correcta: 1},

{ id: 30,
  pregunta: "Si una BIOS enciende una luz LED para indicar un problema, es una señal…",
  opciones: [
    "Sonora",
    "Visual",
    "Depende del color de la luz",
    "Una BIOS no puede emitir señales mediante LEDs"
  ],
  correcta: 1},

{ id: 31,
  pregunta: "Un algoritmo simétrico es:",
  opciones: [
    "RCA2",
    "ASES",
    "ICMP",
    "AES"
  ],
  correcta: 3},

{ id: 32,
  pregunta: "Un ejemplo de buen nombre para una máquina virtual es:",
  opciones: [
    "VRSTFVM",
    "VirtualBox",
    "Windows 10 – Cliente",
    "Linux"
  ],
  correcta: 2},

{ id: 33,
  pregunta: "Un hardware está formado, entre otros componentes, por:",
  opciones: [
    "Bus de datos",
    "Microprocesador",
    "Host",
    "VirtualBox"
  ],
  correcta: 1},

{ id: 34,
  pregunta: "Un servidor debe de cumplir con estos tres aspectos:",
  opciones: [
    "Disponibilidad, calidad y mantenimiento",
    "Escalabilidad, mantenimiento y disponibilidad",
    "Mantenimiento, disponibilidad y automatismo",
    "Disponibilidad, escalabilidad y gestión avanzada"
  ],
  correcta: 1},

{ id: 35,
  pregunta: "Un sistema multitarea:",
  opciones: [
    "Trabaja con un solo proceso al mismo tiempo",
    "Trabaja con un solo proceso por usuario al mismo tiempo",
    "Trabaja con varios procesos al mismo tiempo",
    "No gestiona más de dos procesos al mismo tiempo"
  ],
  correcta: 2},

{ id: 36,
  pregunta: "Una de las distribuciones que se emplean de manera específica en los sistemas Linux es:",
  opciones: [
    "Windows Pro",
    "MacOS X",
    "Ubuntu Desktop",
    "FreeBSD"
  ],
  correcta: 2},

{ id: 37,
  pregunta: "Una NIC también se puede llamar:",
  opciones: [
    "Adaptador de vídeo",
    "Adaptador de internet",
    "Tarjeta de sonido",
    "Adaptador de pantalla"
  ],
  correcta: 1},

{ id: 38,
  pregunta: "Usaremos este comando para cambiar los permisos en Linux:",
  opciones: [
    "chmod",
    "umask",
    "umod",
    "Todas las anteriores son incorrectas"
  ],
  correcta: 0},

{ id: 39,
  pregunta: "Usuario que tiene el privilegio necesario para efectuar cambios en los ficheros de configuración:",
  opciones: [
    "Gestor",
    "Administrador",
    "Usuario",
    "Usuario avanzado"
  ],
  correcta: 1},

{ id: 40,
  pregunta: "Versión de Microsoft Windows para dispositivos móviles:",
  opciones: [
    "Server",
    "Enterprise",
    "IoT",
    "Mobile"
  ],
  correcta: 3},

  {
  id: 41,
  pregunta: "¿Cuál de los siguientes no es un riesgo laboral de un Técnico de Desarrollo de Aplicaciones?:",
  opciones: [
    "Superficie de trabajo.",
    "Entorno.",
    "Asiento.",
    "Maquinaria pesada."
  ],
  correcta: 3
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
  correcta: 1
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
  correcta: 2
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
  correcta: 0
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
  correcta: 2
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
  correcta: 3
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
  correcta: 3
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
  correcta: 0
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
  correcta: 1
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
  correcta: 0
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
  correcta: 3
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
  correcta: 2
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
  correcta: 0
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
  correcta: 0
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
  correcta: 2
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
  correcta: 1
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
  correcta: 1
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
  correcta: 1
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
  correcta: 3
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
  correcta: 2
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
  correcta: 0
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
  correcta: 1
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
  correcta: 0
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
  correcta: 1
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
  correcta: 0
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
  correcta: 0
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
  correcta: 3
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
  correcta: 3
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
  correcta: 1
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
  correcta: 1
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
  correcta: 0
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
  correcta: 1
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
  correcta: 3
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
  correcta: 0
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
  correcta: 0
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
  correcta: 0
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
  correcta: 2
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
  correcta: 0
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
  correcta: 1
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
  correcta: 3
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
  correcta: 3
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
  correcta: 2
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
  correcta: 1
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
  correcta: 2
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
  correcta: 3
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
  correcta: 0
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
  correcta: 2
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
  correcta: 2
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
  correcta: 3
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
  correcta: 3
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
  correcta: 2
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
  correcta: 0
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
  correcta: 1
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
  correcta: 1
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
  correcta: 3
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
  correcta: 3
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
  correcta: 3
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
  correcta: 2
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
  correcta: 0
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
  correcta: 1
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
  correcta: 0
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
  correcta: 0
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
  correcta: 2
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
  correcta: 2
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
  correcta: 2
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
  correcta: 2
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
  correcta: 1
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
  correcta: 3
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
  correcta: 3
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
  correcta: 1
}

    ],


    bases: [
       {  id: 1,
  pregunta: "¿Cómo podemos representar y definir los datos sin tener en cuenta las necesidades tecnológicas?",
  opciones: [
    "Con un diagrama entidad/relación",
    "Con un diccionario de datos",
    "Con pseudocódigo",
    "Con un diagrama de cardinalidad"
  ],
  correcta: 0},

{ id: 2,
  pregunta: "¿En qué bloque se incluyen las sentencias y estructuras de la lógica del procedimiento?",
  opciones: [
    "En el bloque DECLARE",
    "En el bloque BEGIN",
    "En el bloque EXCEPTION",
    "Después de END"
  ],
  correcta: 1},

{ id: 3,
  pregunta: "¿Para qué sirven los índices?",
  opciones: [
    "Para saber el número de entidades que hay",
    "Permiten agilizar el acceso a un campo organizando su información",
    "Representa un índice de objetos de los metadatos",
    "Define la clave primaria de una entidad"
  ],
  correcta: 1},

{ id: 4,
  pregunta: "¿PL/SQL es compatible con todos los SGBD?",
  opciones: [
    "Sí, hay un estándar de aplicación",
    "Sí, contiene estructuras que entienden todos los SGBD",
    "Sí",
    "No, PL/SQL sirve para Oracle y PL/pgSQL para PostgreSQL"
  ],
  correcta: 3},

{ id: 5,
  pregunta: "¿Qué condición tiene que cumplir la Segunda Forma Normal (2FN)?",
  opciones: [
    "Debe estar en la primera forma normal",
    "Puede tener valores atómicos",
    "Sus campos no dependen de la clave primaria",
    "Debe estar en la tercera forma normal"
  ],
  correcta: 0},

{ id: 6,
  pregunta: "¿Qué es un sistema gestor de base de datos (SGBD)?",
  opciones: [
    "Un tipo de base de datos",
    "Un software con herramientas de administración y gestión de base de datos",
    "Un software para programar una base de datos",
    "Un software de diseño de base de datos"
  ],
  correcta: 1},

{ id: 7,
  pregunta: "¿Qué instrucción necesitamos para ver la estructura de una tabla?",
  opciones: [
    "DESC",
    "ESTRUCT",
    "SHOW TABLES",
    "SHOW DATABASES"
  ],
  correcta: 0},

{ id: 8,
  pregunta: "¿Qué instrucción nos permite modificar una tabla?",
  opciones: [
    "INSERT",
    "UPDATE",
    "DROP TABLE",
    "ALTER TABLE"
  ],
  correcta: 3},

{id: 9,
  pregunta: "Bucle preparado con un número de repeticiones predeterminadas.",
  opciones: [
    "Bucle LOOP",
    "Bucle WHILE",
    "Bucle FOR",
    "Bucle ELSE"
  ],
  correcta: 2},

{ id: 10,
  pregunta: "CREATE DATABASE nombre_bd; permite crear una base de datos empleando el lenguaje:",
  opciones: [
    "DDL",
    "DML",
    "DCL",
    "Todas las anteriores son incorrectas"
  ],
  correcta: 0},

{ id: 11,
  pregunta: "Cuando hablamos de integridad referencial…",
  opciones: [
    "No podemos borrar un registro que está relacionado con otro mediante su clave foránea",
    "Cualquier cambio en un registro relacionado se transmite en cascada",
    "Establecer valores nulos en claves foráneas",
    "Todas son correctas"
  ],
  correcta: 3},

{ id: 12,
  pregunta: "Cuando se almacena una dirección o puntero en vez del valor de la información, estamos hablando de:",
  opciones: [
    "Datos físicos",
    "Referencias",
    "Herencia",
    "Datos extrapolados"
  ],
  correcta: 1},

{ id: 13,
  pregunta: "Cuando tenemos una transferencia de datos entre distintos SGBD…",
  opciones: [
    "No hay que preocuparse, todos los SGBD tienen las mismas características",
    "Un tipo de datos se usa igual independientemente del SGBD",
    "Solo se puede hacer entre el mismo tipo de base de datos",
    "Es una tarea importante, cada SGBD tiene diferentes características y hay que adaptarlas según el cambio"
  ],
  correcta: 3},

{ id: 14,
  pregunta: "El lenguaje más empleado en bases de datos es:",
  opciones: [
    "SUL",
    "SDL",
    "SFL",
    "SQL"
  ],
  correcta: 3},

{ id: 15,
  pregunta: "Es el lenguaje que usaremos para administrar la seguridad de los datos mediante permisos y usuarios.",
  opciones: [
    "DDL",
    "DML",
    "DCL",
    "Todas las anteriores son incorrectas"
  ],
  correcta: 2},

{ id: 16,
  pregunta: "Es un tipo de copia de seguridad.",
  opciones: [
    "Incompletas",
    "Incrementales",
    "Decrementales",
    "Existenciales"
  ],
  correcta: 1},

{ id: 17,
  pregunta: "Es un tipo de modelo de base de datos",
  opciones: [
    "Modelo relacional",
    "Modelo en red",
    "Modelo orientado a objetos",
    "Todas son correctas"
  ],
  correcta: 3},

{ id: 18,
  pregunta: "Es un tipo de organización de los soportes de almacenamiento",
  opciones: [
    "Secuencial",
    "Aleatorio",
    "Multiplexado",
    "Concatenado"
  ],
  correcta: 0},

{ id: 19,
  pregunta: "Es un tipo de relación",
  opciones: [
    "Comunicativas",
    "Reflexivas",
    "Concatenarías",
    "Expresivas"
  ],
  correcta: 1},

{ id: 20,
  pregunta: "Es una consecuencia de las bases de datos objeto-relacionales",
  opciones: [
    "Que no tengamos campos atómicos",
    "Que las tablas no sean elementos bidimensionales",
    "Ninguna de las anteriores",
    "Todas son incorrectas"
  ],
  correcta: 0},

{ id: 21,
  pregunta: "Es una función de agregación o resumen",
  opciones: [
    "RESTA()",
    "MOD()",
    "TOTAL()",
    "COUNT()"
  ],
  correcta: 3},

{ id: 22,
  pregunta: "Estructura de control que emplea las sentencias IF y CASE",
  opciones: [
    "Secuencia",
    "Iteración",
    "Segmentación",
    "Selección"
  ],
  correcta: 3},

{ id: 23,
  pregunta: "Existen dos tipos de clave, la primaria y:",
  opciones: [
    "La secundaria",
    "La exclusiva",
    "La jerarquizada",
    "La candidata"
  ],
  correcta: 3},

{ id: 24,
  pregunta: "La clave primaria:",
  opciones: [
    "Puede ser única",
    "Puede estar formada por un único campo o ser compuesta",
    "Se deriva de la clave secundaria",
    "Ninguna de las anteriores"
  ],
  correcta: 1},

{ id: 25,
  pregunta: "La POO sirve para:",
  opciones: [
    "Que otros paradigmas se basen en esta",
    "Desarrollar solo software privativo",
    "Fallos de software",
    "Todas son incorrectas"
  ],
  correcta: 0},

{ id: 26,
  pregunta: "La sentencia UPDATE nos permite:",
  opciones: [
    "La consulta de registros sobre varias tablas",
    "La eliminación de registros",
    "La modificación de registros",
    "Ninguna de las anteriores es correcta"
  ],
  correcta: 2},

{ id: 27,
  pregunta: "Lenguaje que se centra en la consulta de información:",
  opciones: [
    "DDL",
    "DML",
    "DCL",
    "Ninguna de las anteriores"
  ],
  correcta: 1},

{ id: 28,
  pregunta: "Lo que en un modelo entidad/relación es una entidad, en un modelo físico es llamado:",
  opciones: [
    "Registro",
    "Entidad",
    "Tipo",
    "Tabla"
  ],
  correcta: 3},

{ id: 29,
  pregunta: "Los fallos lógicos:",
  opciones: [
    "Son los que se producen por fallos de software",
    "Un virus es un fallo lógico",
    "Son los que se producen por fallos de hardware",
    "Todas son correctas"
  ],
  correcta: 0},

{ id: 30,
  pregunta: "Los ficheros:",
  opciones: [
    "Tienen su propio sistema de escritura",
    "Contienen texto plano",
    "Contienen código binario",
    "Pueden contener tanto texto plano como binario"
  ],
  correcta: 3},

{ id: 31,
  pregunta: "M:N es un concepto de:",
  opciones: [
    "Las claves",
    "La cardinalidad",
    "La modalidad",
    "Multidimensional"
  ],
  correcta: 1},

{ id: 32,
  pregunta: "MySQL es:",
  opciones: [
    "Un sublenguaje de SQL",
    "Un tipo de base de datos",
    "Un SGBD",
    "Ninguna de las anteriores"
  ],
  correcta: 2},

{ id: 33,
  pregunta: "Para buscar un patrón de una cadena de caracteres usaremos…",
  opciones: [
    "AND",
    "BETWEEN",
    "LIKE",
    "No se puede buscar patrones"
  ],
  correcta: 2},

{ id: 34,
  pregunta: "Para solucionar un fallo físico:",
  opciones: [
    "Podemos tirar todo y comprar nuevos equipos",
    "La gestión de los backups es una buena opción",
    "No es necesario recuperar un fallo físico",
    "Todas las anteriores son correctas"
  ],
  correcta: 1},

{ id: 35,
  pregunta: "PL/SQL no puede soportar:",
  opciones: [
    "DDL",
    "DML",
    "Los dos anteriores",
    "Todas las anteriores son incorrectas"
  ],
  correcta: 0},

{ id: 36,
  pregunta: "¿Qué debemos tener en cuenta en la gestión de fallos lógicos en una base de datos?",
  opciones: [
    "Controlar accesos a servicios y recursos",
    "Autenticación en el SGBD",
    "Gestión de perfiles y usuarios",
    "Todas son correctas"
  ],
  correcta: 3},

{ id: 37,
  pregunta: "Se pueden usar para los subtipos y supertipos las cláusulas:",
  opciones: [
    "NOT FINAL",
    "FINAL",
    "UNDER",
    "Todas las anteriores son correctas"
  ],
  correcta: 3},

{ id: 38,
  pregunta: "Si queremos seleccionar unos datos y que no estén repetidos…",
  opciones: [
    "Preocuparnos de no insertar duplicados",
    "Hay que incluir DISTINCT",
    "En bases de datos relacionales no puede suceder",
    "Usar el operador <> "
  ],
  correcta: 1},

{ id: 39,
  pregunta: "Un tipo que puede almacenar una colección es considerado como:",
  opciones: [
    "Array",
    "Tablas",
    "Columnas",
    "Filas"
  ],
  correcta: 0},

{ id: 40,
  pregunta: "UNIQUE es:",
  opciones: [
    "Una restricción en SQL se utiliza para garantizar que no se inserten valores duplicados en una columna",
    "Garantizar valores tipo NULL",
    "Garantizar formato correcto",
    "Ninguna de las anteriores"
  ],
  correcta: 0},

  {
  id: 41,
  pregunta: "El lenguaje más empleado en bases de datos es:",
  opciones: [
    "SUL.",
    "SDL.",
    "SFL.",
    "SQL."
  ],
  correcta: 3
},

{
  id: 42,
  pregunta: "El mayor problema de la indexación es:",
  opciones: [
    "Que requiere de más espacio.",
    "Que al actualizarse automáticamente puede cometer fallos.",
    "Que no se actualiza automáticamente, por lo que resulta laboroso mantenerlo actualizado.",
    "Ninguna de la anteriores."
  ],
  correcta: 2
},

{
  id: 43,
  pregunta: "El modelo de red:",
  opciones: [
    "Mejora la flexibilidad del jerárquico.",
    "Introdujo una multitud de novedades a su predecesor.",
    "Poseía una complejidad considerable.",
    "Todas las anteriores son ciertas."
  ],
  correcta: 3
},

{
  id: 44,
  pregunta: "El modelo relacional se ha fusionado con este para crear el que es hoy en día el más usado:",
  opciones: [
    "jerárquico.",
    "indexado.",
    "Orientado a objetos.",
    "Multidimensional."
  ],
  correcta: 2
},

{
  id: 45,
  pregunta: "El soporte de datos direccionable permite:",
  opciones: [
    "La lectura, pero solo secuencialmente.",
    "La lectura, desde el dato deseado.",
    "El almacenamiento de datos jerárquicos indexados.",
    "No existe este tipo de soporte."
  ],
  correcta: 1
},

{
  id: 46,
  pregunta: "La codificación más común en el texto plano de los ficheros es:",
  opciones: [
    "UTF-8 o UTF-16.",
    "UTF-12 o UTF-24.",
    "UTF-8 o UTF-24.",
    "UTF-12 o UTF-16."
  ],
  correcta: 0
},

{
  id: 47,
  pregunta: "La indexación permite:",
  opciones: [
    "Mayor almacenamiento.",
    "Una búsqueda más eficiente.",
    "Un registro automático de la información.",
    "Ninguna de las anteriores."
  ],
  correcta: 1
},

{
  id: 48,
  pregunta: "Los ficheros:",
  opciones: [
    "Tienen su propio sistema de escritura.",
    "Contienen texto plano.",
    "Contienen código binario.",
    "Puede contener tanto texto plano como binario."
  ],
  correcta: 3
},

{
  id: 49,
  pregunta: "Podemos encontrar punteros en:",
  opciones: [
    "Los ficheros secuenciales.",
    "Las bases de datos jerárquicas.",
    "Los ficheros secuenciales encadenados.",
    "Las bases de datos objeto-relacional."
  ],
  correcta: 2
},

{
  id: 50,
  pregunta: "Un fichero secuencial encadenado:",
  opciones: [
    "Posee un índice.",
    "Posee una doble ordenación, secuencial y lógica.",
    "Permite la ordenación por objetos.",
    "Ninguna de las anteriores."
  ],
  correcta: 1
},

{
  id: 51,
  pregunta: "Es la modalidad que implica una única ocurrencia siempre:",
  opciones: [
    "0,1.",
    "1,1.",
    "1,N.",
    "0,N."
  ],
  correcta: 1
},

{
  id: 52,
  pregunta: "Existen dos tipos de clave, la primaria y:",
  opciones: [
    "La secundaria.",
    "La exclusiva.",
    "La jerarquizada.",
    "La candidata."
  ],
  correcta: 3
},

{
  id: 53,
  pregunta: "La clave primaria se marca con:",
  opciones: [
    "Un círculo relleno.",
    "Un círculo en blanco",
    "Un rombo en blanco.",
    "Un rombo relleno."
  ],
  correcta: 0
},

{
  id: 54,
  pregunta: "La clave primaria:",
  opciones: [
    "Puede ser única.",
    "Puede estar formada por un único campo o ser compuesta.",
    "Se deriva de la clave secundaria.",
    "Ninguna de las anteriores."
  ],
  correcta: 1
},

{
  id: 55,
  pregunta: "¿Cómo surge la modalidad?",
  opciones: [
    "A partir de toda la relación de las entidades.",
    "A partir de los mínimos y máximos de las ocurrencias de cada entidad.",
    "A partir del número de atributos que tenga cada entidad.",
    "Ninguna de las anteriores."
  ],
  correcta: 1
},

{
  id: 56,
  pregunta: "La relación N-arias indica una relación entre:",
  opciones: [
    "5 entidades o más.",
    "Cualquier número de entidades.",
    "4 entidades o más.",
    "Ninguna de las anteriores."
  ],
  correcta: 2
},

{
  id: 57,
  pregunta: "Las instancias se extraen de:",
  opciones: [
    "Las relaciones.",
    "Las entidades.",
    "La modalidad.",
    "De ninguna de las anteriores."
  ],
  correcta: 1
},

{
  id: 58,
  pregunta: "Las ternarias son:",
  opciones: [
    "Elementos de cardinalidad.",
    "Elementos de Modalidad.",
    "Elementos de Entidades.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 3
},

{
  id: 59,
  pregunta: "M:N es un concepto de:",
  opciones: [
    "Las claves.",
    "La cardinalidad.",
    "La modalidad.",
    "Multidimensional."
  ],
  correcta: 1
},

{
  id: 60,
  pregunta: "Un profesor que imparte clase a diversos alumnos formaría una relación:",
  opciones: [
    "M:N.",
    "1:N.",
    "N:M.",
    "1:1."
  ],
  correcta: 1
},

{
  id: 61,
  pregunta: "1FN busca introducir valores:",
  opciones: [
    "Duplicados.",
    "Numéricos.",
    "Atómicos.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 2
},

{
  id: 62,
  pregunta: "DER son las siglas de:",
  opciones: [
    "Diagrama de Entidad/Relación.",
    "Diacronía entidad/relación.",
    "Diseño entidad/Relación.",
    "Ninguna de las anteriores."
  ],
  correcta: 0
},

{
  id: 63,
  pregunta: "El valor NULL:",
  opciones: [
    "Indica el valor 0.",
    "Indica un valor indeterminado.",
    "Indica el valor nulo.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 2
},

{
  id: 64,
  pregunta: "En el modelo físico de datos los valores lógicos se marcan con el prefijo:",
  opciones: [
    "V.",
    "v.",
    "L.",
    "l."
  ],
  correcta: 3
},

{
  id: 65,
  pregunta: "La integridad referencial se puede mantener empleando:",
  opciones: [
    "Prohibiciones a ciertas operaciones.",
    "Transmisión en cascada.",
    "Valores por defecto.",
    "Todas las anteriores son correctas."
  ],
  correcta: 3
},

{
  id: 66,
  pregunta: "La política de bloqueo que permite la consulta del valor del elemento bloqueado, pero prohibiendo su modificación.",
  opciones: [
    "Exclusivas.",
    "Compartidos.",
    "Prohibitivos.",
    "Relacional."
  ],
  correcta: 1
},

{
  id: 67,
  pregunta: "Lo que en un modelo entidad/ relación es una entidad, en un modelo físico es llamado:",
  opciones: [
    "Registro.",
    "Entidad.",
    "Tabla.",
    "Tipo"
  ],
  correcta: 2
},

{
  id: 68,
  pregunta: "Los identificadores siempre emplean:",
  opciones: [
    "El prefijo I.",
    "El prefijo ID.",
    "El sufijo I.",
    "El sufijo ID."
  ],
  correcta: 3
},

{
  id: 69,
  pregunta: "Podemos encontrar un total de:",
  opciones: [
    "2 Formas Normales.",
    "3 Formas Normales.",
    "5 Formas Normales.",
    "6 Formas Normales."
  ],
  correcta: 3
},

{
  id: 70,
  pregunta: "UNIQUE es:",
  opciones: [
    "Una restricción en SQL se utiliza para garantizar que no se inserten valores duplicados en una columna.",
    "Una restricción en SQL se utiliza para garantizar los valores tipo NULL.",
    "Una restricción en SQL se utiliza para garantizar que no se inserten valores con un formato diferente al destinado.",
    "Ninguna de las anteriores."
  ],
  correcta: 0
},
{
  id: 71,
  pregunta: "Boolean es un tipo de dato de:",
  opciones: [
    "Números exactos.",
    "Números aproximados.",
    "Valor lógico.",
    "Ninguna de las anteriores."
  ],
  correcta: 2
},

{
  id: 72,
  pregunta: "CLOB es un tipo de dato de:",
  opciones: [
    "Números exactos.",
    "Números aproximados.",
    "Valor lógico.",
    "Ninguna de las anteriores."
  ],
  correcta: 3
},

{
  id: 73,
  pregunta: "CREATE DATABASE nombre_bd; permite crear una base de datos empleando el lenguaje:",
  opciones: [
    "DDL.",
    "DML.",
    "DCL.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 0
},

{
  id: 74,
  pregunta: "Es el lenguaje que usaremos para administrar la seguridad de los datos mediante permisos y usuarios.",
  opciones: [
    "DDL.",
    "DML.",
    "DCL.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 2
},

{
  id: 75,
  pregunta: "Es un sublenguaje de SQL:",
  opciones: [
    "DDL.",
    "DML.",
    "DCL.",
    "Todas las anteriores son correctas."
  ],
  correcta: 3
},

{
  id: 76,
  pregunta: "MySQL es:",
  opciones: [
    "Un sublenguaje de SQL.",
    "Un tipo de base de datos.",
    "Un SGBD.",
    "Ninguna de las anteriores."
  ],
  correcta: 2
},

{
  id: 77,
  pregunta: "Tipo de dato que almacena imágenes, documentos, etc. en binario:",
  opciones: [
    "SMALLINT.",
    "BLOB.",
    "REAL.",
    "Ninguna de las anteriores."
  ],
  correcta: 1
},

{
  id: 78,
  pregunta: "Tipo de dato que almacena la hora en formato hora-minuto-segundo.:",
  opciones: [
    "TIME.",
    "TIMESTAMP.",
    "INTERVAL.",
    "Ninguna de las anteriores."
  ],
  correcta: 0
},

{
  id: 79,
  pregunta: "Tipo de dato que teniendo la longitud del dato que almacenado menor a la definida, rellenará con espacios esta alcanzar el límite:",
  opciones: [
    "CHAR.",
    "VARCHAR.",
    "CLOB.",
    "BLOB."
  ],
  correcta: 0
},

{
  id: 80,
  pregunta: "VARCHAR(60) es un tipo de dato para:",
  opciones: [
    "Caracteres.",
    "Números exactos.",
    "Números aproximados.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 0
},

{
  id: 81,
  pregunta: "Emplea la sentencia SELECT para la selección de tablas:",
  opciones: [
    "DDL.",
    "DML.",
    "DCL.",
    "Ninguna de las anteriores."
  ],
  correcta: 1
},

{
  id: 82,
  pregunta: "INSERT es:",
  opciones: [
    "Un privilegio que se nos puede otorgar.",
    "Un tipo de vista.",
    "Las dos anteriores son correctas.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 0
},

{
  id: 83,
  pregunta: "IS NULL permite:",
  opciones: [
    "Asignar el valor NULL.",
    "No asignar ningún valor.",
    "Comprueba si el valor es NULL.",
    "BLOB."
  ],
  correcta: 2
},

{
  id: 84,
  pregunta: "La función integrada ABS con parámetro número devuelve:",
  opciones: [
    "El valor absoluto del número.",
    "Valor con decimales.",
    "Resultado de la operación de la división de este número con el anterior.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 0
},

{
  id: 85,
  pregunta: "La inserción de registros se puede realizar con la sentencia:",
  opciones: [
    "SELECT.",
    "UPDATE.",
    "DELETE.",
    "Ninguna de las anteriores."
  ],
  correcta: 3
},

{
  id: 86,
  pregunta: "La sentencia UPDATE nos permite:",
  opciones: [
    "La consulta de registros sobre varias tablas.",
    "La Eliminación de registros.",
    "La modificación de registros.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 2
},

{
  id: 87,
  pregunta: "Lenguaje que se centra en la consulta de información :",
  opciones: [
    "DDL.",
    "DML.",
    "DCL.",
    "Ninguna de las anteriores."
  ],
  correcta: 1
},

{
  id: 88,
  pregunta: "Para designar un alias debemos emplear el operador.",
  opciones: [
    "AND.",
    "OR.",
    "AS.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 2
},

{
  id: 89,
  pregunta: "WITH GRANT OPTION se emplea en:",
  opciones: [
    "DDL.",
    "DML.",
    "DCL.",
    "Ninguna de las anteriores."
  ],
  correcta: 2
},

{
  id: 90,
  pregunta: "WITH GRANT OPTION:",
  opciones: [
    "Otorga el privilegio SELECT.",
    "Revoca los privilegios que se nos otorguen.",
    "Otorga el derecho a otorgar derechos.",
    "Ninguna de las anteriores."
  ],
  correcta: 2
},

{
  id: 91,
  pregunta: "Bucle preparado con un numero de repeticiones predeterminadas:",
  opciones: [
    "Bucle básico LOOP.",
    "Bucle con WHILE.",
    "Bucle FOR.",
    "Bucle ELSE."
  ],
  correcta: 2
},

{
  id: 92,
  pregunta: "El operador || determina la:",
  opciones: [
    "Potencia.",
    "Raíz.",
    "Concatenación.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 2
},

{
  id: 93,
  pregunta: "En una operación lógica con OR si A es TRUE y B es FALSE el resultado es:",
  opciones: [
    "TRUE.",
    "FALSE.",
    "NULL.",
    "No se puede realizar esa operación."
  ],
  correcta: 0
},

{
  id: 94,
  pregunta: "Es un carácter de longitud variable:",
  opciones: [
    "CHAR.",
    "CHARVAR.",
    "VARCHAR2.",
    "Ninguna de las anteriores."
  ],
  correcta: 2
},

{
  id: 95,
  pregunta: "Estructura de control que emplea las sentencias IF y CASE:",
  opciones: [
    "Selección.",
    "Iteración.",
    "Segmentación.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 0
},

{
  id: 96,
  pregunta: "Estructura lógica que realiza una acción hasta que un valor, booleano, cambie:",
  opciones: [
    "Secuencia.",
    "Iteración.",
    "Segmentación.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 1
},

{
  id: 97,
  pregunta: "Los bloques se ejecutan con el carácter:",
  opciones: [
    "/.",
    "$.",
    "#.",
    "Ninguna de las anteriores."
  ],
  correcta: 0
},

{
  id: 98,
  pregunta: "Operador de la negación lógica es:",
  opciones: [
    "--.",
    "=-.",
    "+--.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 3
},

{
  id: 99,
  pregunta: "PL/SQL no puede soportar:",
  opciones: [
    "DDL.",
    "DML.",
    "Los dos anteriores.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 0
},

{
  id: 100,
  pregunta: "Un LOOP es:",
  opciones: [
    "Una excepción.",
    "Una invocación.",
    "Una función.",
    "Ninguna de las anteriores."
  ],
  correcta: 3
},

{
  id: 101,
  pregunta: "Es un fallo físico:",
  opciones: [
    "Avería en un servidor.",
    "Problema con el suministro eléctrico.",
    "Robo.",
    "Todas son correctas."
  ],
  correcta: 3
},

{
  id: 102,
  pregunta: "La principal clasificación de fallos en las bases de datos se distingue en:",
  opciones: [
    "Fallos físicos y químicos.",
    "Fallos físicos y lógicos.",
    "Fallos de software y aplicaciones.",
    "Todas son incorrectas."
  ],
  correcta: 1
},

{
  id: 103,
  pregunta: "La restauración:",
  opciones: [
    "Es la remodelación de los dispositivos de la empresa.",
    "Es la recuperación de los datos de una copia de seguridad.",
    "Es el fin del ciclo de vida de una base de datos.",
    "Es una técnica de inserción de datos."
  ],
  correcta: 1
},

{
  id: 104,
  pregunta: "Las copias de seguridad",
  opciones: [
    "Son un respaldo de la información del sistema.",
    "Se pueden recuperar más tarde en caso de fallo del sistema.",
    "A y B son correctas.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 2
},

{
  id: 105,
  pregunta: "Las copias de seguridad pueden ser:",
  opciones: [
    "Borradas cada dos días",
    "Hechas a mano.",
    "Invisibles o espejadas.",
    "Todas son incorrectas"
  ],
  correcta: 3
},

{
  id: 106,
  pregunta: "Las copias de seguridad:",
  opciones: [
    "Se dividen en completas e incompletas.",
    "No se pueden realizar en una base de datos.",
    "Son una mala gestión de la seguridad,",
    "Todas son incorrectas"
  ],
  correcta: 3
},

{
  id: 107,
  pregunta: "Los fallos lógicos:",
  opciones: [
    "Son los que se producen por fallos de software.",
    "Un virus es un fallo lógico.",
    "A Y B son correctas.",
    "Son los que se producen por fallos de hardware."
  ],
  correcta: 2
},

{
  id: 108,
  pregunta: "Los tipos de datos de una base de datos:",
  opciones: [
    "Se pueden diferenciar dependiendo del tipo del sistema que usemos.",
    "Son iguales en todos los SGBD.",
    "No se deben tener en cuenta cuando se hagan traspaso de datos.",
    "Todas son correctas."
  ],
  correcta: 0
},

{
  id: 109,
  pregunta: "Para restaurar un backup:",
  opciones: [
    "Primero tenemos que restaurar todo lo que queramos no tener.",
    "En última instancia debemos eliminar todas las copias para ahorrar espacio.",
    "Lo primero que hay que hacer es restaurar la última copia de seguridad total.",
    "Ninguna es correcta."
  ],
  correcta: 2
},

{
  id: 110,
  pregunta: "Para solucionar un fallo físico:",
  opciones: [
    "Podemos tirar todo y comprar nuevos equipos.",
    "La gestión de los backups es una buena opción.",
    "No es necesario recuperar un fallo físico.",
    "Todas las anteriores son correctas."
  ],
  correcta: 1
},

{
  id: 111,
  pregunta: "¿Qué clausula se usa únicamente en la herencia de los subtipos?:",
  opciones: [
    "La cláusula UNDER",
    "La cláusula NOT FINAL.",
    "La cláusula SELF.",
    "La cláusula NOT LIKE."
  ],
  correcta: 0
},

{
  id: 112,
  pregunta: "¿Qué es una referencia en bases de datos?:",
  opciones: [
    "Un puntero con un identificador (OID) que dirige a la información u otros objetos.",
    "Un elemento en el que la tabla guarda información de otras tablas.",
    "Un elemento donde se guardan únicamente datos de usuario.",
    "Ninguna es correcta."
  ],
  correcta: 0
},

{
  id: 113,
  pregunta: "El modelo relacional anidado:",
  opciones: [
    "No existe.",
    "Indica que los valores de un campo son únicos a esa tabla.",
    "Comprende que los valores de un campo puedan compartirse con únicamente otra tabla más.",
    "Comprende que los valores de un campo se puedan compartir con varias tablas."
  ],
  correcta: 3
},

{
  id: 114,
  pregunta: "El paradigma de la programación orientada a objetos:",
  opciones: [
    "Surge en los noventa.",
    "Simplifica las consultas SELECT",
    "Busca conseguir un código de mayor calidad.",
    "Todas son correctas."
  ],
  correcta: 3
},

{
  id: 115,
  pregunta: "Es una consecuencia de las bases de datos objeto-relacionales:",
  opciones: [
    "Que no tengamos campos atómicos.",
    "Que las tablas no sean elementos bidimensionales.",
    "A y B son correctas.",
    "Todas son incorrectas"
  ],
  correcta: 2
},

{
  id: 116,
  pregunta: "Indica que afirmación sobre la herencia es falsa:",
  opciones: [
    "Se puede extrapolar a las bases de datos.",
    "Comprende a las clases base y extendida.",
    "No tiene sentido en las bases de datos.",
    "Puede ser múltiple."
  ],
  correcta: 2
},

{
  id: 117,
  pregunta: "La POO sirve para:",
  opciones: [
    "Que otros paradigmas se basen en esta.",
    "Desarrollar solo software privativo",
    "Fallos de software.",
    "Todas son incorrectas."
  ],
  correcta: 0
},

{
  id: 118,
  pregunta: "Los tipos complejos:",
  opciones: [
    "No se pueden crear.",
    "Son incompatibles con los arrays.",
    "Solo sirven para definir un campo en específico.",
    "Todas son incorrectas."
  ],
  correcta: 3
},

{
  id: 119,
  pregunta: "Se pueden usar para los subtipos y supertipos las cláusulas:",
  opciones: [
    "NOT FINAL.",
    "FINAL.",
    "UNDER.",
    "Todas las anteriores son correctas."
  ],
  correcta: 3
},

{
  id: 120,
  pregunta: "Un array es:",
  opciones: [
    "Una colección de datos.",
    "Un tipo de dato obsoleto.",
    "Un elemento único de las bases de datos.",
    "Todas son incorrectas."
  ],
  correcta: 0
}

    ],

    entornos: [
{ id: 1,
  pregunta: "Algunas características del software son:",
  opciones: [
    "Es intangible",
    "Se desarrolla",
    "En algunas ocasiones, es a medida",
    "Todas son correctas"
  ],
  correcta: 3},

{ id: 2,
  pregunta: "Dentro de los modos de colaboración con los SCV (Sistemas de Control de Versiones) está:",
  opciones: [
    "Flujo de trabajo centralizado",
    "Flujo de trabajo con gestor de integración",
    "Flujo de trabajo con dictador y tenientes",
    "Todas son correctas"
  ],
  correcta: 3},

{ id: 3,
  pregunta: "Durante la elaboración de diagramas de comportamiento de casos de uso, la relación de extensión es una situación donde dos casos de uso comparten funcionalidad y, además:",
  opciones: [
    "Uno de ellos añade un matiz extra",
    "Son idénticos",
    "Uno requiere del otro para su realización",
    "Ninguna de las anteriores"
  ],
  correcta: 0},

{ id: 4,
  pregunta: "Ejecutando el comando \"javac -version\":",
  opciones: [
    "Comprobamos que esta instalado el JDK (Java development kit)",
    "Comprobamos que está instalado el JVM",
    "Comprobamos que está instalado NetBeans",
    "Iniciamos el proceso de depuración de errores"
  ],
  correcta: 0},

{ id: 5,
  pregunta: "El compilador de Java también se denomina:",
  opciones: [
    "Javac",
    "JRE",
    "JVM",
    "JDK"
  ],
  correcta: 0},

{ id: 6,
  pregunta: "El diagrama de casos de uso permite:",
  opciones: [
    "Secuenciación temporal",
    "Clasifica clases y relaciones",
    "Representar varias aplicaciones de un sistema y los elementos que lo llevan a cabo",
    "Ninguna es correcta"
  ],
  correcta: 2},

{ id: 7,
  pregunta: "El nivel de visibilidad designado con \"-\" es:",
  opciones: [
    "Público",
    "Protegido",
    "Reflexivo",
    "El privado"
  ],
  correcta: 3},

{ id: 8,
  pregunta: "El proceso de reestructuración interna del código, generalmente para optimizar el comportamiento del código sin modificarlo, se llama:",
  opciones: [
    "Refactorizacion",
    "Recodificación",
    "Reordenación",
    "Regeneración"
  ],
  correcta: 0},

{ id: 9,
  pregunta: "El software estándar o enlatado:",
  opciones: [
    "Ya está desarrollado y se vende tal cual.",
    "Lo usan muchos usuarios o empresas, no un solo cliente.",
    "Está pensado para cubrir necesidades generales, no específicas.",
    "Todas son correctas"
  ],
  correcta: 3},

{ id: 10,
  pregunta: "El valor int:",
  opciones: [
    "Indica calores en números enteros.",
    "Números con decimales",
    "Línea de caracteres alfanuméricos",
    "Las dos primeras son correctas"
  ],
  correcta: 0},

{ id: 11,
  pregunta: "En el lenguaje UML, los atributos de una clase se representan en:",
  opciones: [
    "Primera celda",
    "La segunda clase",
    "Tercera celda",
    "Ninguna de las anteriores"
  ],
  correcta: 1},

{ id: 12,
  pregunta: "En los diagramas de secuencia, dentro de la elaboración de diagramas de comportamiento, el envío de mensajes puede ser:",
  opciones: [
    "Mensaje simple",
    "Mensaje sincrónico",
    "Mensaje asincrónico",
    "Todas son correctas"
  ],
  correcta: 3},

{ id: 13,
  pregunta: "Entre las medidas para evaluar los principales criterios de calidad están:",
  opciones: [
    "Modularidad",
    "Estandarización de datos",
    "Tolerancia a errores",
    "Todas son correctas"
  ],
  correcta: 3},

{ id: 14,
  pregunta: "Entre sus herramientas, un IDE puede contar con:",
  opciones: [
    "Editor",
    "Depurador",
    "Compilador",
    "Todas son correctas"
  ],
  correcta: 3},

{ id: 15,
  pregunta: "Es muy recomendable que las pruebas:",
  opciones: [
    "Las realice personal del equipo de programación",
    "No cubran aspectos importantes",
    "Las realice personal externo al equipo de programación",
    "Todas son incorrectas"
  ],
  correcta: 2},

{ id: 16,
  pregunta: "Es un elemento de los diagramas de uso:",
  opciones: [
    "Actor",
    "Caso de uso",
    "Sistema",
    "Todas son correctas"
  ],
  correcta: 3},

{ id: 17,
  pregunta: "La acción de depurar un programa se debe a:",
  opciones: [
    "Arreglar fallos de un programa",
    "Cambiar el programa",
    "Combinar varios programas",
    "Eliminar un programa"
  ],
  correcta: 0},

{ id: 18,
  pregunta: "La fase en la que se definen los procesos específicos que van a seguir cada una de las fases de ejecución de la aplicación es:",
  opciones: [
    "Fase de diseño",
    "Fase de análisis",
    "Fase inicial",
    "Explotación"
  ],
  correcta: 0},

{ id: 19,
  pregunta: "La refactorización es:",
  opciones: [
    "Cambiar el funcionamiento",
    "El proceso de reestructuración interna de un código sin cambiar el programa",
    "Cambiar la velocidad del programa",
    "Todas son correctas"
  ],
  correcta: 1},

{ id: 20,
  pregunta: "La relación de agregación se marca con:",
  opciones: [
    "Triángulo vacío",
    "Un rombo vacío",
    "Rombo negro",
    "Círculo vacío"
  ],
  correcta: 1},

{ id: 21,
  pregunta: "La UML es:",
  opciones: [
    "Un lenguaje de modelado",
    "Un tipo de programa OO",
    "Una OO",
    "Ninguna es correcta"
  ],
  correcta: 0},

{ id: 22,
  pregunta: "Las primeras pruebas que se realizan durante las primeras fases del desarrollo del software son:",
  opciones: [
    "Pruebas de integración",
    "Pruebas de aceptación",
    "Pruebas unitarias",
    "Pruebas de validación"
  ],
  correcta: 2},

{ id: 23,
  pregunta: "Las pruebas que se deben realizar para comprobar que el software ofrece todo lo necesario y funciona son:",
  opciones: [
    "Diseñadas o mantenidas",
    "Explotadas o analizadas",
    "Codificadas o implementadas",
    "Funcionales o estructurales"
  ],
  correcta: 3},

{ id: 24,
  pregunta: "Las pruebas que se realizan tras modificar algo en la aplicación para comprobar que los cambios no han afectado al software son:",
  opciones: [
    "Pruebas funcionales",
    "Pruebas unitarias",
    "Pruebas lineales",
    "Pruebas de regresión"
  ],
  correcta: 3},

{ id: 25,
  pregunta: "Las pruebas se realizan con el fin de:",
  opciones: [
    "Demostrar que el software cumple lo que se esperaba de él",
    "Detectar errores antes de que el software se use",
    "Asegurar que el programa funciona correctamente",
    "Todas son correctas"
  ],
  correcta: 3},

{ id: 26,
  pregunta: "Las relaciones de inclusión:",
  opciones: [
    "Unen casos de uso cuando uno requiere de los otros para ejecutarse",
    "Flecha con rombo",
    "Diagramas de actividades",
    "Ninguna es correcta"
  ],
  correcta: 0},

{ id: 27,
  pregunta: "Los CASE permiten:",
  opciones: [
    "Reutilización del software",
    "Portabilidad del software",
    "Estandarización de la documentación",
    "Todas las anteriores son correctas"
  ],
  correcta: 3},

{ id: 28,
  pregunta: "Los diagramas de estados poseen:",
  opciones: [
    "Un marcado inicio y final",
    "Semejanzas con los diagramas de clases",
    "Las dos anteriores son correctas",
    "Ninguna de las anteriores"
  ],
  correcta: 2},

{ id: 29,
  pregunta: "Los lenguajes de programación que se clasifican dependiendo de cómo se ejecutan son:",
  opciones: [
    "Lenguajes compilados, interpretados y virtuales",
    "Máquina y medio nivel",
    "Alto nivel y ensamblador",
    "Ninguna es correcta"
  ],
  correcta: 0},

{ id: 30,
  pregunta: "Los métodos:",
  opciones: [
    "Son las acciones que podrá desempeñar cada instancia",
    "No forma parte de los UML",
    "Se muestran siempre con un valor int",
    "La primera y tercera son correctas"
  ],
  correcta: 0},

{ id: 31,
  pregunta: "Los patrones de diseño son:",
  opciones: [
    "Programas CASE",
    "Elementos de corrección",
    "Programas de ordenación de código",
    "Soluciones prefabricadas para problemas comunes"
  ],
  correcta: 3},

{ id: 32,
  pregunta: "Los POO son:",
  opciones: [
    "Orientación Orgánica",
    "Programas Orientados a Objetos",
    "Programas de Objetos Orientados",
    "Objetos Ocultos"
  ],
  correcta: 1},

{ id: 33,
  pregunta: "Los SCV (Sistemas de Control de Versiones) pueden ser:",
  opciones: [
    "Compartimentados",
    "Individuales",
    "Cíclicos",
    "Centralizados o distribuidos"
  ],
  correcta: 3},

{ id: 34,
  pregunta: "Los tipos de diagramas que pueden desarrollarse por UML se dividen en:",
  opciones: [
    "No existen grandes categorías",
    "Dos grandes categorías: estructura y comportamiento",
    "Interactividad y comunicación",
    "Tres grandes categorías"
  ],
  correcta: 1},

{ id: 35,
  pregunta: "Los tipos de documentación fundamentales en la creación de software en función de su naturaleza son:",
  opciones: [
    "Documentos técnicos y funcionales",
    "Documentos orgánicos",
    "Funcionales y descriptivos",
    "Creacionales y estructurales"
  ],
  correcta: 0},

{ id: 36,
  pregunta: "Los tipos de lenguajes de programación son:",
  opciones: [
    "Diseño y contabilidad",
    "Estándar y mecanizado",
    "Interpretado y literal",
    "Lenguaje máquina, lenguaje de medio nivel o ensamblador y lenguaje de alto nivel"
  ],
  correcta: 3},

{ id: 37,
  pregunta: "NetBeans es un IDE:",
  opciones: [
    "No es modular",
    "Solo Windows",
    "En el que podemos desarrollar en Java y otros lenguajes como C/C++, HTML, PHP y Python",
    "Ninguna es correcta"
  ],
  correcta: 2},

{ id: 38,
  pregunta: "Un punto de interrupción al depurar un programa consiste en:",
  opciones: [
    "Un lugar en el programa donde se detendrá la ejecución y se espera a que el depurador proceda",
    "Actualiza la ejecución",
    "Modifica la ejecución",
    "Esperar un warning"
  ],
  correcta: 0},

{ id: 39,
  pregunta: "Una de las características del lenguaje de modelado UML es:",
  opciones: [
    "Permite una documentación clara y sencilla",
    "Está estandarizado y es el lenguaje más usado en sistemas orientados a objetos",
    "Tiene una gran capacidad para crear diagramas que representan sistemas",
    "Todas son correctas"
  ],
  correcta: 3},

{ id: 40,
  pregunta: "Una instancia es:",
  opciones: [
    "Un valor de un atributo",
    "Conjunto de entidades",
    "Cada uno de los objetos particulares de una clase",
    "Todas son incorrectas"
  ],
  correcta: 2},

  {
  id: 41,
  pregunta: "Algunas características del software son:",
  opciones: [
    "Es intangible.",
    "Se desarrolla.",
    "En algunas ocasiones, es a medida.",
    "Todas son correctas."
  ],
  correcta: 3
},

{
  id: 42,
  pregunta: "Dentro del personal que se necesita para desarrollar una aplicación, el que decir qué lenguaje se va a usar es:",
  opciones: [
    "Arquitecto de software.",
    "Jefe de proyecto.",
    "Analista de sistemas.",
    "Programador."
  ],
  correcta: 0
},

{
  id: 43,
  pregunta: "El link-programa exe es generado por:",
  opciones: [
    "El intérprete.",
    "El compilador.",
    "Ambos.",
    "Ninguno."
  ],
  correcta: 1
},

{
  id: 44,
  pregunta: "El primer paso sobre cómo funciona un compilador es:",
  opciones: [
    "Se traduce el lenguaje ensamblador o el código abierto.",
    "Se enlaza el linker con el código abierto.",
    "Se realiza un preprocesado del código fuente.",
    "Se compilan lo archivos del código fuente."
  ],
  correcta: 2
},

{
  id: 45,
  pregunta: "El tipo de software que se desarrolla según ciertas características acordes a las necesidades es:",
  opciones: [
    "Software enlatado.",
    "Software estándar.",
    "Software específico.",
    "Software desarrollado."
  ],
  correcta: 2
},

{
  id: 46,
  pregunta: "La fase en la que se realiza un análisis léxico del programa informático es:",
  opciones: [
    "Fase 1.",
    "Fase 2.",
    "Fase 3.",
    "Fase 4."
  ],
  correcta: 0
},

{
  id: 47,
  pregunta: "Las pruebas que se deben realizar para comprobar que el software ofrece todo lo necesario y funciona son:",
  opciones: [
    "Diseñadas o mantenidas.",
    "Explotadas o analizadas.",
    "Codificadas o implementadas.",
    "Funcionales o estructurales."
  ],
  correcta: 3
},

{
  id: 48,
  pregunta: "Los lenguajes de programación que se clasifican dependiendo de cómo se ejecutan son:",
  opciones: [
    "Lenguajes compilados, interpretados y virtuales.",
    "Lenguajes de máquina y de medio nivel.",
    "Lenguajes de alto nivel y de ensamblador.",
    "Ninguna es correcta."
  ],
  correcta: 0
},

{
  id: 49,
  pregunta: "Un programa informático está compuesto por:",
  opciones: [
    "Instrucciones.",
    "Recomendaciones.",
    "Aplicaciones informáticas.",
    "Ninguna es correcta."
  ],
  correcta: 0
},

{
  id: 50,
  pregunta: "Una característica de JavaScript es:",
  opciones: [
    "Aunque casis todo el alto nivel, se pueden dar trozos de códigos a bajo nivel.",
    "Al interpretarse en el lado del cliente, cualquier puede ver su código.",
    "No hace falta definir variables, es un lenguaje interpretado.",
    "Se suele programar el código fuente en la herramienta Microsoft Visual Studio."
  ],
  correcta: 1
},

{
  id: 51,
  pregunta: "Cuando se elimina un módulo, se puede:",
  opciones: [
    "Desactivar y Desinstalar",
    "Modificar",
    "Borrar",
    "Ninguna de las anteriores es correcta"
  ],
  correcta: 0
},

{
  id: 52,
  pregunta: "El compilador de Java también se denomina:",
  opciones: [
    "Javac.",
    "JRE.",
    "JVM.",
    "JDK"
  ],
  correcta: 0
},

{
  id: 53,
  pregunta: "El IDE que fue más potente entre los primeros entornos de desarrollo fue:",
  opciones: [
    "Visual Basic 6.",
    "Turbo Pascal.",
    "Delphi.",
    "Ninguno de los anteriores."
  ],
  correcta: 1
},

{
  id: 54,
  pregunta: "Entre los primeros entornos de desarrollo, encontramos:",
  opciones: [
    "NetBeans.",
    "Eclipse.",
    "Delphi.",
    "Xcode."
  ],
  correcta: 2
},

{
  id: 55,
  pregunta: "La acción de depurar un programa se debe a:",
  opciones: [
    "Arreglar fallos de un programa.",
    "Cambiar el programa.",
    "Combinar varios programas.",
    "Eliminar un programa."
  ],
  correcta: 0
},

{
  id: 56,
  pregunta: "La herramienta con la que se crean, por ejemplo, los campos de texto y las pestañas, es:",
  opciones: [
    "Editor.",
    "Compilador.",
    "Depurador.",
    "Constructor de interfaces gráficos."
  ],
  correcta: 3
},

{
  id: 57,
  pregunta: "La herramienta de entornos de desarrollo que se utiliza para crear aplicaciones para Apple es:",
  opciones: [
    "JCreator.",
    "KDevelop.",
    "Visual Studio.",
    "Xcode."
  ],
  correcta: 3
},

{
  id: 58,
  pregunta: "Para comenzar el proyecto de depuración, hay que teclear:",
  opciones: [
    "Ctrl-F3",
    "Ctrl-F4",
    "Ctrl-F5",
    "Ctrl-F6"
  ],
  correcta: 2
},

{
  id: 59,
  pregunta: "RAD, en español, hace referencia a:",
  opciones: [
    "Entorno de ejecución de Java.",
    "Desarrollo rápido de aplicaciones.",
    "Recolector de basura de aplicaciones.",
    "Equipo de desarrollo de Java."
  ],
  correcta: 1
},

{
  id: 60,
  pregunta: "Un punto de interrupción al depurar un programa consiste en:",
  opciones: [
    "Un lugar en el programa donde se detendrá la ejecución y se espera a que el depurador proceda.",
    "Un lugar en el programa donde se actualiza la ejecución y se espera a que el depurador proceda.",
    "Un lugar en el programa donde se modifica la ejecución y se espera a que el depurador proceda.",
    "Un lugar en el programa donde se eliminará la ejecución y se espera a que el depurador proceda."
  ],
  correcta: 0
},

{
  id: 61,
  pregunta: "Algunos de los criterios más comunes que se miden para evaluar la calidad del software son:",
  opciones: [
    "El número de errores por un número determinado de líneas de código.",
    "El número medio de revisiones realizadas a una función o módulo del programa.",
    "El número repeticiones de las pruebas a todo el sistema.",
    "A y B son correctas."
  ],
  correcta: 3
},

{
  id: 62,
  pregunta: "El testers se basará en:",
  opciones: [
    "Opinión sobre el software.",
    "Documentación sobre el software.",
    "Uso del software.",
    "Recomendaciones del software."
  ],
  correcta: 1
},

{
  id: 63,
  pregunta: "El tipo de prueba de clases de equivalencia de datos es un tipo de prueba de:",
  opciones: [
    "Prueba de caja negra.",
    "Prueba de caja blanca.",
    "Prueba de regresión.",
    "Ninguna es correcta."
  ],
  correcta: 0
},

{
  id: 64,
  pregunta: "El tipo de prueba que se realiza para asegurarnos de que los cambios no han afectado al software son:",
  opciones: [
    "Prueba de caja negra.",
    "Prueba de caja blanca.",
    "Prueba de regresión.",
    "Ninguna es correcta."
  ],
  correcta: 2
},

{
  id: 65,
  pregunta: "Las primeras pruebas que se realizan durante las primeras fases del desarrollo del software son:",
  opciones: [
    "Pruebas de integración.",
    "Pruebas de aceptación.",
    "Pruebas unitarias.",
    "Pruebas de validación."
  ],
  correcta: 2
},

{
  id: 66,
  pregunta: "Las pruebas de caja blanca pueden ser del tipo:",
  opciones: [
    "Prueba de cubrimiento.",
    "Prueba de condiciones.",
    "Prueba de bucles.",
    "Todas son correctas."
  ],
  correcta: 3
},

{
  id: 67,
  pregunta: "Las pruebas de caja negra analizan:",
  opciones: [
    "La arquitectura del sistema.",
    "Los errores que comete el sistema.",
    "El funcionamiento interno del sistema.",
    "Las funciones que realiza el sistema."
  ],
  correcta: 3
},

{
  id: 68,
  pregunta: "Las pruebas deben estar enfocadas a:",
  opciones: [
    "Partes específicas del software por separado.",
    "La totalidad del software.",
    "Lo más viejo del software.",
    "Lo más nuevo del software."
  ],
  correcta: 0
},

{
  id: 69,
  pregunta: "Las pruebas se realizan con el fin de:",
  opciones: [
    "Convencer de que el software cumple con los objetivos.",
    "Comprobar que no hay errores en el software.",
    "Asegurar que el software está operativo.",
    "Todas son correctas."
  ],
  correcta: 3
},

{
  id: 70,
  pregunta: "Testear la usabilidad es un proceso correspondiente al tipo de prueba:",
  opciones: [
    "Prueba de valores límite.",
    "Prueba de interfaces.",
    "Prueba de cubrimiento.",
    "Prueba de clases de equivalencia de datos."
  ],
  correcta: 1
},

{
  id: 71,
  pregunta: "Dentro de los documentos:",
  opciones: [
    "Se debe incluir toda la información en el cuerpo principal por motivos de registro.",
    "Debemos clasificar la información y eliminar la menos relevante.",
    "Debemos clasificar la información e incluir en anexos la menos relevante.",
    "Ninguna es correcta."
  ],
  correcta: 2
},

{
  id: 72,
  pregunta: "El workflow es:",
  opciones: [
    "Un modelo de trabajo.",
    "Un programa CASE.",
    "Un mecanismo de corrección.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 0
},

{
  id: 73,
  pregunta: "En los POO:",
  opciones: [
    "Es preferible poseer un único objeto sobreexplotado que una multitud de objetos.",
    "Es preferible poseer un objeto para cada función.",
    "Debemos evitar la sobreexplotación de los objetos, pero también la creación inútil de estos.",
    "Ninguna es correcta."
  ],
  correcta: 2
},

{
  id: 74,
  pregunta: "La documentación debe ser siempre:",
  opciones: [
    "Correcta y en lenguaje técnico.",
    "Fácil de entender y sin emplear lenguaje técnico.",
    "Adaptado al nivel del lector.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 2
},

{
  id: 75,
  pregunta: "La refactorización es:",
  opciones: [
    "Un medio para cambiar el funcionamiento del programa.",
    "El proceso de reestructuración interna de un código sin cambiar el programa.",
    "Cambiar la velocidad del programa.",
    "Todas son correctas."
  ],
  correcta: 1
},

{
  id: 76,
  pregunta: "Los patrones creacionales:",
  opciones: [
    "Ayudan en la creación de objetos fuera de los POO.",
    "Ayudan en la creación de relaciones entre objetos fuera de los POO.",
    "Ayudan en la creación de objetos en los POO.",
    "Ayudan en la creación de objetos fuera de los POO."
  ],
  correcta: 2
},

{
  id: 77,
  pregunta: "Los patrones de diseño son:",
  opciones: [
    "Programas CASE.",
    "Elementos de corrección.",
    "Programas de ordenación de código.",
    "Soluciones prefabricadas para problemas comunes."
  ],
  correcta: 3
},

{
  id: 78,
  pregunta: "Los SCV pueden ser:",
  opciones: [
    "Centralizados o compartimentados.",
    "Compartimentados o individuales.",
    "Cíclicos o centralizados.",
    "Centralizados o distribuidos."
  ],
  correcta: 3
},

{
  id: 79,
  pregunta: "Para realizar documentos es necesario:",
  opciones: [
    "El empleo de procesadores de texto.",
    "El empleo de la herramienta más conveniente.",
    "El empleo de una única herramienta sea cual sea por motivos de homogeneización.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 1
},

{
  id: 80,
  pregunta: "Uno de los métodos de refactorización es:",
  opciones: [
    "La sustitución de constantes por variables.",
    "El empleo de más constantes.",
    "La encapsulación de constantes.",
    "Todas son correctas"
  ],
  correcta: 1
},

{
  id: 81,
  pregunta: "El diagrama de casos de uso permite:",
  opciones: [
    "Secuenciación temporal del programa con las interacciones entre objetos.",
    "Clasifica las clases y especifica las relaciones entre ellas.",
    "Representar varias aplicaciones de un sistema y los elementos que lo llevan a cabo.",
    "A y B don correctas."
  ],
  correcta: 2
},

{
  id: 82,
  pregunta: "El OO es:",
  opciones: [
    "Objetivo de orientación.",
    "Orientación a objetos.",
    "Un programa de asistencia.",
    "Ninguna en realidad es POO."
  ],
  correcta: 1
},

{
  id: 83,
  pregunta: "La diagramación es:",
  opciones: [
    "Un modelo de elaboración de elementos.",
    "Un programa CASE.",
    "El acto o cualidad de transformar algo en un diagrama.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 2
},

{
  id: 84,
  pregunta: "La UML es:",
  opciones: [
    "Un lenguaje de Modelado.",
    "Un tipo de programa OO.",
    "Una OO.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 0
},

{
  id: 85,
  pregunta: "La versión 3.1 de UML:",
  opciones: [
    "Se publicó en 2009.",
    "No se llegó a publicar como tal, ya que se pasó directamente a la 3.1.1.",
    "Es la última publicada en 2017 y la que empleamos.",
    "Aún no se ha publicado."
  ],
  correcta: 3
},

{
  id: 86,
  pregunta: "¿Cuál de las siguientes no es una herramienta para el diseño de UML?",
  opciones: [
    "Microsoft Vision",
    "Poseidon",
    "MagicDraw",
    "Adobe Photoshop"
  ],
  correcta: 3
},

{
  id: 87,
  pregunta: "Los case permiten:",
  opciones: [
    "La reutilización del software.",
    "La portabilidad del software.",
    "La estandarización de la documentación.",
    "Todas las anteriores son correctas."
  ],
  correcta: 3
},

{
  id: 88,
  pregunta: "¿Cuál es un propósito de la carga o descarga de datos en una herramienta CASE?",
  opciones: [
    "Generar prototipos de aplicaciones.",
    "Simplificar el mantenimiento.",
    "Facilitar la comunicación con otras herramientas.",
    "Limitar la portabilidad de las aplicaciones."
  ],
  correcta: 2
},

{
  id: 89,
  pregunta: "Los diagramas se dividen en las dos categorías de:",
  opciones: [
    "OO o POO.",
    "Estandarizados o anómalos.",
    "Clase y estado.",
    "Estructura y comportamiento."
  ],
  correcta: 3
},

{
  id: 90,
  pregunta: "UML cuenta con las características de:",
  opciones: [
    "Estandarización y diagramación.",
    "Diagramación únicamente",
    "Agregación de cardinalidades",
    "Nivel público de visibilidad"
  ],
  correcta: 0
},

{
  id: 91,
  pregunta: "El boolean o booleano:",
  opciones: [
    "Es un tipo de asociación.",
    "Es uno de los tipos de atributos.",
    "Es un tipo de instancia.",
    "Es un tipo de valor."
  ],
  correcta: 3
},

{
  id: 92,
  pregunta: "El nivel de visibilidad designado con \"#\" es:",
  opciones: [
    "El público.",
    "El protegido.",
    "El reflexivo.",
    "El privado."
  ],
  correcta: 1
},

{
  id: 93,
  pregunta: "El valor int:",
  opciones: [
    "Indica valores en números enteros.",
    "Indica valores en números con decimales.",
    "Indica valores con una línea de caracteres alfanuméricos.",
    "Las dos primeras son correctas."
  ],
  correcta: 0
},

{
  id: 94,
  pregunta: "La diferencia entre composición y agregación:",
  opciones: [
    "El tipo de valor de atributo en sus clases.",
    "El empleo de los diferentes niveles de visibilidad.",
    "La fuerza de la unión entre los elementos que lo componen.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 2
},

{
  id: 95,
  pregunta: "La herencia:",
  opciones: [
    "Es uno más de los tipos de asociaciones.",
    "Es un tipo de asociación en el que se emplean únicamente instancias.",
    "Están restringidas por la cantidad de instancias",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 3
},

{
  id: 96,
  pregunta: "Las asociaciones con restricciones pueden ser:",
  opciones: [
    "De un solo tipo mediante el empleo de elecciones con \"o\".",
    "De un solo tipo mediante el empleo de números mínimos y máximos de entidades.",
    "De diversas formas como las anteriores.",
    "No existen restricciones en las asociaciones."
  ],
  correcta: 2
},

{
  id: 97,
  pregunta: "Las herramientas CASE:",
  opciones: [
    "Son herramientas de cálculo para los atributos.",
    "Son herramientas para la inserción de plugins.",
    "Son herramientas para asistencia en la creación de software en general.",
    "Ninguna es correcta."
  ],
  correcta: 2
},

{
  id: 98,
  pregunta: "Las notas adjuntas:",
  opciones: [
    "No permiten más de 10 palabras.",
    "Permiten más de 10 palabras, pero no imágenes.",
    "No permite más de 10 palabras, pero si imágenes.",
    "Ninguna es correcta."
  ],
  correcta: 3
},

{
  id: 99,
  pregunta: "Los métodos:",
  opciones: [
    "Son las acciones que podrá desempeñar cada instancia.",
    "No forma parte de los UML.",
    "Se muestran siempre con un valor int.",
    "La primera y tercera son correctas."
  ],
  correcta: 0
},

{
  id: 100,
  pregunta: "Una instancia es:",
  opciones: [
    "Un valor de uno de los atributos.",
    "El conjunto de entidades que forman un tipo de objeto.",
    "Cada uno de los objetos particulares de una clase.",
    "Todas son incorrectas."
  ],
  correcta: 2
},

{
  id: 101,
  pregunta: "La concurrencia ocurre en:",
  opciones: [
    "Los diagramas de uso.",
    "Los diagramas de colaboración.",
    "Los diagramas de actividades.",
    "Los diagramas de secuencia."
  ],
  correcta: 2
},

{
  id: 102,
  pregunta: "La línea de vida:",
  opciones: [
    "Es un modo de mostrar la escala temporal.",
    "Puede acompañarse de otras líneas de vida en posición paralela.",
    "Se encuentran en los diagramas de secuencia.",
    "Todas las anteriores son correctas."
  ],
  correcta: 3
},

{
  id: 103,
  pregunta: "La representación recursiva:",
  opciones: [
    "Es el empleo de mensajes de ida y vuelta.",
    "Es el empleo de mensajes que no requieren respuesta, pero que se envían de manera periódica.",
    "Es el mensaje que un proceso se envía a sí mismo, él es tanto el emisor como el receptor.",
    "Ninguna de las anteriores."
  ],
  correcta: 2
},

{
  id: 104,
  pregunta: "Las relaciones de inclusión:",
  opciones: [
    "Unen casos de uso cuando uno requiere de los otros para ejecutarse.",
    "Se marcan empleando una flecha con un rombo por cabeza.",
    "Se encuentran en los diagramas de actividades",
    "Ninguna es correcta."
  ],
  correcta: 0
},

{
  id: 105,
  pregunta: "Los diagramas de colaboración:",
  opciones: [
    "Poseen una gran semejanza con los diagramas de uso, pero centrándose en la temporización.",
    "Poseen una gran semejanza con los diagramas de actividades, pero centrándose en el estado.",
    "Poseen una gran semejanza con los diagramas de secuencia, pero centrándose en la temporalización.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 3
},

{
  id: 106,
  pregunta: "Los diagramas de estados poseen:",
  opciones: [
    "Un marcado inicio y final.",
    "Semejanzas con los diagramas de clases por su uso de estados semejante a los atributos.",
    "Las dos anteriores son correctas.",
    "Ninguna de las anteriores es correcta."
  ],
  correcta: 2
},

{
  id: 107,
  pregunta: "Los diagramas de uso poseen:",
  opciones: [
    "Dos elementos fundamentales.",
    "Tres elementos fundamentales",
    "Cuatro elementos fundamentales",
    "No posee elementos fundamentales, ya que posee una amplia batería de elementos para elegir."
  ],
  correcta: 1
},

{
  id: 108,
  pregunta: "Los objetos en los diagramas representan:",
  opciones: [
    "Los usuarios reales.",
    "Cada uno de los programas orientados a objetos.",
    "Los estados de los POO.",
    "Ninguna de las anteriores."
  ],
  correcta: 3
},

{
  id: 109,
  pregunta: "Los POO son:",
  opciones: [
    "Programas de Orientación Orgánica.",
    "Programas Orientados a Objetos.",
    "Programas de Objetos Orientados.",
    "Programas con Objetos Ocultos."
  ],
  correcta: 1
},

{
  id: 110,
  pregunta: "Los subestados son:",
  opciones: [
    "Conjunto de estados específicos que conforman un estado más complejo",
    "Estados derivados de la conclusión de un estado principal.",
    "Estados que permiten la secuencia.",
    "Todas las anteriores son incorrectas."
  ],
  correcta: 0
}

    ]
};
