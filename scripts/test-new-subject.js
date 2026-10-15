const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { cargarContenido, calcularHuellaContenidoEvaluable } = require("./validate-content.js");
const root = path.resolve(__dirname, "..");
const { catalogo, bancoDePreguntas } = cargarContenido();
const catalogoAntesGestionU6 = catalogo.map((asignatura) => asignatura.id === "sistemasGestionEmpresarial"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 90) }
  : asignatura);
const catalogoAntesAccesoU6 = catalogoAntesGestionU6.map((asignatura) => asignatura.id === "accesoDatos"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 90) }
  : asignatura);
const catalogoAntesInterfacesU6 = catalogoAntesAccesoU6.map((asignatura) => asignatura.id === "desarrolloInterfaces"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 90) }
  : asignatura);
const catalogoAntesMultimediaU6 = catalogoAntesInterfacesU6.map((asignatura) => asignatura.id === "multimediaMoviles"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 90) }
  : asignatura);
const catalogoAntesGestionU5 = catalogoAntesMultimediaU6.map((asignatura) => asignatura.id === "sistemasGestionEmpresarial"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 80) }
  : asignatura);
const catalogoAntesAccesoU5 = catalogoAntesGestionU5.map((asignatura) => asignatura.id === "accesoDatos"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 80) }
  : asignatura);
const catalogoAntesInterfacesU5 = catalogoAntesAccesoU5.map((asignatura) => asignatura.id === "desarrolloInterfaces"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 80) }
  : asignatura);
const catalogoAntesServiciosU5 = catalogoAntesInterfacesU5.map((asignatura) => asignatura.id === "serviciosProcesos"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 80) }
  : asignatura);
const catalogoAntesMultimediaU5 = catalogoAntesServiciosU5.map((asignatura) => asignatura.id === "multimediaMoviles"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 80) }
  : asignatura);
const catalogoAntesGestionU4 = catalogoAntesMultimediaU5.map((asignatura) => asignatura.id === "sistemasGestionEmpresarial"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 70) }
  : asignatura);
const catalogoAntesAccesoU4 = catalogoAntesGestionU4.map((asignatura) => asignatura.id === "accesoDatos"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 70) }
  : asignatura);
const catalogoAntesInterfacesU4 = catalogoAntesAccesoU4.map((asignatura) => asignatura.id === "desarrolloInterfaces"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 70) }
  : asignatura);
const catalogoAntesServiciosU4 = catalogoAntesInterfacesU4.map((asignatura) => asignatura.id === "serviciosProcesos"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 70) }
  : asignatura);
const catalogoAntesMultimediaU4 = catalogoAntesServiciosU4.map((asignatura) => asignatura.id === "multimediaMoviles"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 70) }
  : asignatura);
const catalogoAntesGestionU3 = catalogoAntesMultimediaU4.map((asignatura) => asignatura.id === "sistemasGestionEmpresarial"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 60) }
  : asignatura);
const catalogoAntesAccesoU3 = catalogoAntesGestionU3.map((asignatura) => asignatura.id === "accesoDatos"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 60) }
  : asignatura);
const catalogoAntesInterfacesU3 = catalogoAntesAccesoU3.map((asignatura) => asignatura.id === "desarrolloInterfaces"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 60) }
  : asignatura);
const catalogoAntesServiciosU3 = catalogoAntesInterfacesU3.map((asignatura) => asignatura.id === "serviciosProcesos"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 60) }
  : asignatura);
const catalogoAntesMultimediaU3 = catalogoAntesServiciosU3.map((asignatura) => asignatura.id === "multimediaMoviles"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 60) }
  : asignatura);
const catalogoAntesNuevasU2 = catalogoAntesMultimediaU3.map((asignatura) =>
  ["multimediaMoviles", "serviciosProcesos", "desarrolloInterfaces", "accesoDatos", "sistemasGestionEmpresarial"].includes(asignatura.id)
    ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 50) }
    : asignatura);
const catalogoAntesServiciosU2 = catalogoAntesMultimediaU3.map((asignatura) =>
  ["serviciosProcesos", "desarrolloInterfaces", "accesoDatos", "sistemasGestionEmpresarial"].includes(asignatura.id)
    ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 50) }
    : asignatura);
const catalogoAntesInterfacesU2 = catalogoAntesMultimediaU3.map((asignatura) =>
  ["desarrolloInterfaces", "accesoDatos", "sistemasGestionEmpresarial"].includes(asignatura.id)
    ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 50) }
    : asignatura);
const catalogoAntesAccesoU2 = catalogoAntesMultimediaU3.map((asignatura) =>
  ["accesoDatos", "sistemasGestionEmpresarial"].includes(asignatura.id)
    ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 50) }
    : asignatura);
const catalogoAntesGestionU2 = catalogoAntesMultimediaU3.map((asignatura) => asignatura.id === "sistemasGestionEmpresarial"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 50) }
  : asignatura);
// La U6 de Sistemas de gestión empresarial no puede modificar las 1030 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesGestionU6),
  "36c0ccb7b3cd1a08da2abc6b2236375a074860e3f311a2beac55a6bab495141a");
// La U6 de Acceso a datos no puede modificar las 1020 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesAccesoU6),
  "2e96f1aa09e4d72b5ee3dc5fc7024ffada6683ba3c6f2441069aa45b10ff978d");
// La U6 de Desarrollo de interfaces no puede modificar las 1010 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesInterfacesU6),
  "90a51008c8e2b540e09061633605c3f0c6f6667e305e9f2b6b938a0d6d2fa2b1");
// La U6 de Multimedia no puede modificar las 1000 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesMultimediaU6),
  "6bc859e6748a44838390eb2a0cd9b8a16c89e4f2e0c4ee1bf5693ad6f4b6d804");
// La U5 de Sistemas de gestión empresarial no puede modificar las 990 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesGestionU5),
  "f600257656719ccc1974a8c060f09aad84cfb1c47d2cd6d1cca6b29337b3d37d");
// La U5 de Acceso a datos no puede modificar las 980 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesAccesoU5),
  "53495c6dabae279d5fb74edfd9069637b5b9394e164e53ea4c4749b8a4bdcf56");
// La U5 de Desarrollo de interfaces no puede modificar las 970 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesInterfacesU5),
  "4bd6ee30843695e14eaf6425ae027afc6c577bb594cf8228f7ec3deff1b9a6ef");
// La U5 de Servicios y procesos no puede modificar las 960 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesServiciosU5),
  "e75597673c3578117fdf4e03c112495fdcbf36d85f670532ded39e332d1c511f");
// La U5 de Multimedia no puede modificar las 950 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesMultimediaU5),
  "149104dd63f5cc5dee2af7344439a56135aaf65baf530a422da1ac8ab9eca82e");
// La U4 de Sistemas de gestión empresarial no puede modificar las 940 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesGestionU4),
  "839c72796c6f5789c64efcbcab1006eb89286f8c5b12cbe9cbc5a840cabb5227");
// La U4 de Acceso a datos no puede modificar las 930 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesAccesoU4),
  "b15ce9fddb09827beffd0ec57d452b3bef825eb7fda7e90c8786a87ecf3dcef0");
// La U4 de Desarrollo de interfaces no puede modificar las 920 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesInterfacesU4),
  "e28ead196a1186652e7f71793ce070f14211e3fd69d3ab359bdb1435c834bab5");
// La U4 de Servicios y procesos no puede modificar las 910 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesServiciosU4),
  "66857db3ac63b07dfd8b1f3a59939d752e75056af65603db029760ada58ed96d");
// La U4 de Multimedia no puede modificar las 900 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesMultimediaU4),
  "ab4ae42dc81fad119ce4082eb46b38a808394cae9beffae029966dbc5f6524ab");
// La U3 de Sistemas de gestión empresarial no puede modificar las 890 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesGestionU3),
  "2f6eca915e106cac6525d5e7faa142ca75802889708c0fe33080011162b35063");
// La U3 de Acceso a datos no puede modificar las 880 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesAccesoU3),
  "6f8e04722e3288cc04c3683ac1490c829161d6625c94694dd02e91d6689b889c");
// La U3 de Desarrollo de interfaces no puede modificar las 870 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesInterfacesU3),
  "e8b86a0da65438033576117d0092ca8949935b28c903fac82ceedb894ed7719c");
// La U3 de Servicios y procesos no puede modificar las 860 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesServiciosU3),
  "730584f749ca01c4c1c5e8746541f5a88f80d1a2b8b460ae0d567f41510d487a");
// La U3 de Multimedia no puede modificar las 850 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesMultimediaU3),
  "b0004789ab74b35e6e14164795bccf4d18c5e96a1409aaff3dfc17520cf21921");
// Protege también la incorporación anterior de Multimedia (760 preguntas).
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesNuevasU2.filter(a => !["serviciosProcesos", "desarrolloInterfaces", "accesoDatos", "sistemasGestionEmpresarial"].includes(a.id))),
  "71b75def7dc4a448f6c3a5572b9fcd95cd2fe2acce862d9ff61cc0c310c65e52");
// La nueva asignatura no permite modificar las 770 preguntas ya incorporadas.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesNuevasU2.filter(a => !["desarrolloInterfaces", "accesoDatos", "sistemasGestionEmpresarial"].includes(a.id))),
  "31d2e6c9049e08a585cfaa66544ed97a6d52c6c53da60b2533554b20b5f00211");
// Acceso a datos no permite modificar las 780 preguntas incorporadas previamente.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesNuevasU2.filter(a => !["accesoDatos", "sistemasGestionEmpresarial"].includes(a.id))),
  "3506ac008a7f41f7c56b1d608bbf31602b49eaf6c3b85a1b2d33eaa23c7e571a");
// Sistemas de gestión empresarial no permite modificar las 790 preguntas anteriores.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesNuevasU2.filter(a => a.id !== "sistemasGestionEmpresarial")),
  "5be30c132000175960719ba7c8b5f7a140f8e5db583cffb9efeb2b9cd3926ca6");
// La U2 no permite modificar las 800 preguntas existentes antes de su incorporación.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesNuevasU2),
  "12c1962fa60d910486aeb2d16d94fe5497ac9b71d46f3b8ec5680cc4cb58ce4c");
// La U2 de Servicios y procesos tampoco puede alterar las 810 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesServiciosU2),
  "652337139f51e1abac0b9562e36b27e8cbd6b09ba4fb5f6416ad3107f5748857");
// La U2 de Desarrollo de interfaces no puede alterar las 820 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesInterfacesU2),
  "cadebd48c99711ad5ebb1f56b4b5fdec54276042f53bf1c48159badcf4453c9a");
// La U2 de Acceso a datos no puede alterar las 830 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesAccesoU2),
  "0c47ea626aef5677176dde74bcab417e05c44b0fffa63fd792b4244dd0ad47cb");
// La U2 de Sistemas de gestión empresarial no puede alterar las 840 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesGestionU2),
  "4476aa403fb0bfa6d2f2d437b9ef1908941d33d82d7d4084569d35c05032d238");
const testsServicios = ["u1-test1.json", "u2-test1.json", "u3-test1.json", "u4-test1.json", "u5-test1.json"].flatMap((nombre) =>
  JSON.parse(fs.readFileSync(path.join(root, "contenido/tests/serviciosProcesos", nombre), "utf8")).preguntas);
const servicios = catalogo.find(a => a.id === "serviciosProcesos");
assert.deepEqual(servicios.preguntas, testsServicios.map(({ numeroOriginal, ...p }) => p));
assert.deepEqual(servicios.preguntas.map(p => p.id), Array.from({ length: 50 }, (_, i) => 41 + i));
assert.deepEqual(bancoDePreguntas.serviciosProcesos.map(p => p.correcta),
  [0, 0, 0, 2, 3, 1, 1, 1, 3, 0, 1, 3, 3, 3, 1, 0, 1, 0, 2, 3, 2, 0, 2, 2, 3, 3, 1, 0, 0, 3, 3, 1, 1, 2, 1, 3, 1, 2, 0, 3, 3, 0, 0, 2, 0, 2, 2, 3, 1, 0]);
assert.ok(servicios.preguntas[0].opciones.slice(0, 3).every(opcion => opcion.includes("a la secundaria")));
assert.ok(servicios.preguntas[7].opciones[0].includes("a medida que"));
assert.equal(servicios.preguntas.find(p => p.id === 53).respuesta_correcta, "D. Todas las opciones anteriores son correctas.");
assert.equal(servicios.preguntas.find(p => p.id === 54).pregunta, "¿Cuándo utilizaremos notifyAll() y cuándo notify()?");
assert.ok(servicios.preguntas.find(p => p.id === 56).opciones[2].includes("finalizará"));
assert.ok(servicios.preguntas.find(p => p.id === 56).opciones[3].includes("finalizarán"));
assert.equal(servicios.preguntas.find(p => p.id === 61).respuesta_correcta, "C. 2^16");
assert.equal(servicios.preguntas.find(p => p.id === 64).respuesta_correcta, "C. El datagrama contiene dicha información");
assert.equal(servicios.preguntas.find(p => p.id === 65).pregunta, "Con respecto al protocolo TCP, indica qué afirmación es verdadera:");
assert.equal(servicios.preguntas.find(p => p.id === 67).respuesta_correcta, "B. Se reciben normalmente en un puerto del sistema o registrado en el servidor");
assert.equal(servicios.preguntas.find(p => p.id === 70).respuesta_correcta, "D. Entre un puerto del sistema o registrado en el servidor y en el cliente un puerto efímero");
assert.equal(servicios.preguntas.find(p => p.id === 71).respuesta_correcta, "D. Todas son incorrectas.");
assert.equal(servicios.preguntas.find(p => p.id === 74).respuesta_correcta, "C. Un protocolo del nivel de aplicación para la encriptación de los datos");
assert.equal(servicios.preguntas.find(p => p.id === 77).pregunta, "Indica qué afirmación es correcta con respecto al protocolo SMTP:");
assert.equal(servicios.preguntas.find(p => p.id === 77).respuesta_correcta, "B. Permite enviar un mensaje de correo como resultado de varios mensajes agrupados");
assert.ok(servicios.preguntas.find(p => p.id === 78).opciones[0].includes("específico"));
assert.equal(servicios.preguntas.find(p => p.id === 81).imagen, "images/servicios-procesos/pregunta81.png");
assert.equal(servicios.preguntas.find(p => p.id === 84).pregunta, "¿Qué es X.509?");
assert.equal(servicios.preguntas.find(p => p.id === 86).respuesta_correcta, "C. SSH");
assert.equal(servicios.preguntas.find(p => p.id === 88).respuesta_correcta, "D. Todas son correctas");
assert.equal(servicios.preguntas.find(p => p.id === 90).respuesta_correcta, "A. Digital Signature Algorithm");
// La incorporación de una asignatura NO permite actualizar las 750 preguntas anteriores.
const anteriores = ["sistemas", "bases", "entornos", "programacion", "empleabilidad", "lenguajeMarcas"];
assert.equal(calcularHuellaContenidoEvaluable(catalogo.filter(a => anteriores.includes(a.id))),
  "339c3bcc2e35d4fad7909677446f215ccbd170151184424668498d091c933ba1");
const testsMultimedia = ["u1-test1.json", "u2-test1.json", "u3-test1.json", "u4-test1.json", "u5-test1.json", "u6-test1.json"].flatMap((nombre) =>
  JSON.parse(fs.readFileSync(path.join(root, "contenido/tests/multimediaMoviles", nombre), "utf8")).preguntas);
const nueva = catalogo.find(a => a.id === "multimediaMoviles");
assert.deepEqual(nueva.preguntas, testsMultimedia.map(({ numeroOriginal, ...p }) => p));
assert.deepEqual(nueva.preguntas.map(p => p.id), Array.from({ length: 60 }, (_, i) => 41 + i));
assert.deepEqual(bancoDePreguntas.multimediaMoviles.map(p => p.correcta),
  [2, 3, 1, 1, 2, 2, 3, 0, 2, 0, 2, 2, 0, 0, 1, 1, 1, 3, 3, 2, 0, 2, 3, 0, 1, 0, 3, 2, 1, 2, 2, 3, 1, 2, 1, 2, 0, 3, 0, 3, 0, 2, 1, 3, 1, 3, 0, 2, 0, 2, 3, 1, 0, 0, 1, 1, 1, 2, 3, 2]);
assert.ok(nueva.preguntas.find(p => p.id === 49).pregunta.includes("UMTS"));
assert.equal(nueva.preguntas.find(p => p.id === 51).respuesta_correcta, "C. Marshmallow.");
assert.equal(nueva.preguntas.find(p => p.id === 52).respuesta_correcta, "C. Carpeta res/Gradle.");
assert.equal(nueva.preguntas.find(p => p.id === 61).pregunta, "¿Cuál de los siguientes elementos no pertenece a un Intent?");
assert.equal(nueva.preguntas.find(p => p.id === 63).respuesta_correcta, "D. Todas son correctas.");
assert.equal(nueva.preguntas.find(p => p.id === 65).opciones[2], "C. En un fichero SQLite.");
assert.equal(nueva.preguntas.find(p => p.id === 67).respuesta_correcta, "D. Implícito.");
assert.equal(nueva.preguntas.find(p => p.id === 70).respuesta_correcta, "C. Podemos iniciar aplicaciones que esperen resultados.");
assert.equal(nueva.preguntas.find(p => p.id === 71).opciones[1], "B. ConstraintLayout.");
assert.equal(nueva.preguntas.find(p => p.id === 72).respuesta_correcta, "D. Ninguna de las anteriores.");
assert.equal(nueva.preguntas.find(p => p.id === 73).pregunta, "android:layout_alignTop determina la posición relativa con respecto a:");
assert.equal(nueva.preguntas.find(p => p.id === 74).respuesta_correcta, "C. TableLayout.");
assert.equal(nueva.preguntas.find(p => p.id === 75).respuesta_correcta, "B. TableLayout.");
assert.equal(nueva.preguntas.find(p => p.id === 77).respuesta_correcta, "A. De posición.");
assert.equal(nueva.preguntas.find(p => p.id === 79).pregunta, "Permite colocar los diferentes layouts en referencia a otros contenedores, especificando la posición de un objeto en referencia al elemento padre:");
assert.equal(nueva.preguntas.find(p => p.id === 81).pregunta, "android:background en TextView permite:");
assert.equal(nueva.preguntas.find(p => p.id === 84).opciones[0], "A. Traslación.");
assert.equal(nueva.preguntas.find(p => p.id === 86).respuesta_correcta, "D. Ninguna de las anteriores.");
assert.equal(nueva.preguntas.find(p => p.id === 89).respuesta_correcta, "A. La selección de un único valor numérico entre unos valores predefinidos en la aplicación.");
assert.equal(nueva.preguntas.find(p => p.id === 90).respuesta_correcta, "C. Poner en mayúscula la primera letra de cada frase.");
assert.equal(nueva.preguntas.find(p => p.id === 91).respuesta_correcta, "D. Definir el posicionamiento del contenido en cada celda.");
assert.equal(nueva.preguntas.find(p => p.id === 94).respuesta_correcta, "A. android:divider.");
assert.equal(nueva.preguntas.find(p => p.id === 98).respuesta_correcta, "C. La fuente de datos y la vista adaptada.");
assert.equal(nueva.preguntas.find(p => p.id === 100).pregunta, "Visión fuera de la pantalla que se prepara de antemano por el adaptador para ser mostrada:");
assert.equal(nueva.preguntas.find(p => p.id === 100).respuesta_correcta, "C. Dirty View.");
const testsInterfaces = ["u1-test1.json", "u2-test1.json", "u3-test1.json", "u4-test1.json", "u5-test1.json", "u6-test1.json"].flatMap((nombre) =>
  JSON.parse(fs.readFileSync(path.join(root, "contenido/tests/desarrolloInterfaces", nombre), "utf8")).preguntas);
const interfaces = catalogo.find(a => a.id === "desarrolloInterfaces");
assert.deepEqual(interfaces.preguntas, testsInterfaces.map(({ numeroOriginal, ...p }) => p));
assert.deepEqual(interfaces.preguntas.map(p => p.id), Array.from({ length: 60 }, (_, i) => 41 + i));
assert.deepEqual(bancoDePreguntas.desarrolloInterfaces.map(p => p.correcta),
  [1, 2, 3, 1, 0, 2, 3, 3, 1, 0, 2, 1, 1, 3, 3, 2, 0, 2, 0, 2, 1, 2, 1, 3, 0, 0, 3, 2, 2, 3, 1, 2, 3, 3, 1, 3, 1, 0, 2, 3, 3, 1, 3, 0, 2, 3, 1, 1, 1, 3, 2, 1, 0, 1, 0, 3, 2, 1, 2, 3]);
assert.equal(interfaces.preguntas[3].respuesta_correcta, interfaces.preguntas[3].opciones[1]);
assert.equal(interfaces.preguntas[9].respuesta_correcta, "A. El prototipo");
assert.equal(interfaces.preguntas.find(p => p.id === 58).respuesta_correcta, "C. Son elementos contenedores.");
assert.equal(interfaces.preguntas.find(p => p.id === 58).pregunta, "Los layouts son:");
assert.ok(interfaces.preguntas.find(p => p.id === 59).opciones[2].includes("simultáneas"));
assert.equal(interfaces.preguntas.find(p => p.id === 60).opciones[1], "B. Se recomienda evitar la POO.");
assert.equal(interfaces.preguntas.find(p => p.id === 61).respuesta_correcta, "B. Determina en qué parte de un programa un componente puede ser usado.");
assert.equal(interfaces.preguntas.find(p => p.id === 91).pregunta, "GIF:");
assert.equal(interfaces.preguntas.find(p => p.id === 93).respuesta_correcta, "A. Tamaño=R²·L·A·P");
assert.equal(interfaces.preguntas.find(p => p.id === 96).respuesta_correcta, "D. Cuatro conceptos: autoría, compartir igual, no comercial y no derivados");
assert.equal(interfaces.preguntas.find(p => p.id === 97).opciones[0], "A. Son empleados para representar marcas, personas, sociedades, etc.");
assert.equal(interfaces.preguntas.find(p => p.id === 100).respuesta_correcta, "D. Ninguna de las anteriores.");
assert.equal(interfaces.preguntas.find(p => p.id === 63).respuesta_correcta, "B. MotionKeyListener.");
assert.equal(interfaces.preguntas.find(p => p.id === 65).pregunta, "GIMP es un editor de imágenes:");
assert.equal(interfaces.preguntas.find(p => p.id === 66).respuesta_correcta, "A. Permiten modificar funcionalidades estáticas en Java.");
assert.equal(interfaces.preguntas.find(p => p.id === 70).respuesta_correcta, "D. Ninguna de las anteriores es correcta.");
assert.ok(interfaces.preguntas.find(p => p.id === 71).respuesta_correcta.includes("Acabó"));
assert.equal(interfaces.preguntas.find(p => p.id === 75).respuesta_correcta, "B. Un creador de asistentes de instalación.");
assert.ok(interfaces.preguntas.find(p => p.id === 77).respuesta_correcta.includes("acceso a acciones"));
assert.equal(interfaces.preguntas.find(p => p.id === 79).respuesta_correcta, "C. Paquete sin compresión destinado a una lectura lineal e indivisible.");
assert.equal(interfaces.preguntas.find(p => p.id === 81).respuesta_correcta, "D. Todas las anteriores son correctas.");
assert.equal(interfaces.preguntas.find(p => p.id === 85).respuesta_correcta, "C. Atributo=\"Valor\"");
assert.equal(interfaces.preguntas.find(p => p.id === 86).pregunta, "La sindicación de contenidos usa el lenguaje:");
assert.equal(interfaces.preguntas.find(p => p.id === 88).opciones[3], "D. Todas son correctas.");
assert.equal(interfaces.preguntas.find(p => p.id === 90).respuesta_correcta, "D. Todas las anteriores son incorrectas.");
const testsAccesoDatos = ["u1-test1.json", "u2-test1.json", "u3-test1.json", "u4-test1.json", "u5-test1.json", "u6-test1.json"].flatMap((nombre) =>
  JSON.parse(fs.readFileSync(path.join(root, "contenido/tests/accesoDatos", nombre), "utf8")).preguntas);
const accesoDatos = catalogo.find(a => a.id === "accesoDatos");
assert.deepEqual(accesoDatos.preguntas, testsAccesoDatos.map(({ numeroOriginal, ...p }) => p));
assert.deepEqual(accesoDatos.preguntas.map(p => p.id), Array.from({ length: 60 }, (_, i) => 41 + i));
assert.deepEqual(bancoDePreguntas.accesoDatos.map(p => p.correcta),
  [3, 0, 1, 3, 0, 3, 1, 3, 2, 3, 0, 1, 2, 0, 2, 2, 2, 0, 3, 1, 2, 1, 2, 0, 1, 3, 2, 0, 2, 0, 1, 1, 1, 3, 1, 3, 3, 1, 0, 0, 3, 2, 3, 1, 0, 0, 0, 3, 1, 1, 1, 2, 1, 0, 0, 0, 2, 0, 3, 2]);
assert.equal(accesoDatos.preguntas[4].respuesta_correcta, "A. Atomic.");
assert.equal(accesoDatos.preguntas[8].respuesta_correcta, "C. Bases de datos NoSQL.");
assert.equal(accesoDatos.preguntas.find(p => p.id === 57).respuesta_correcta, "C. Las dos anteriores son válidas.");
assert.equal(accesoDatos.preguntas.find(p => p.id === 58).pregunta, "RandomAccessFile es una clase para:");
assert.equal(accesoDatos.preguntas.find(p => p.id === 59).pregunta, "Try, catch y finally se emplean para:");
assert.equal(accesoDatos.preguntas.find(p => p.id === 61).pregunta, "El placeholder más empleado es:");
assert.equal(accesoDatos.preguntas.find(p => p.id === 62).opciones[3], "D. ODBC.");
assert.equal(accesoDatos.preguntas.find(p => p.id === 64).respuesta_correcta, "A. Son un fichero.");
assert.equal(accesoDatos.preguntas.find(p => p.id === 66).respuesta_correcta, "D. Todas las anteriores son incorrectas.");
assert.equal(accesoDatos.preguntas.find(p => p.id === 70).respuesta_correcta, "A. Es posible.");
assert.equal(accesoDatos.preguntas.find(p => p.id === 71).pregunta, "¿Qué es un ORM?");
assert.equal(accesoDatos.preguntas.find(p => p.id === 72).respuesta_correcta, "B. Un framework para aplicar ORM.");
assert.ok(accesoDatos.preguntas.find(p => p.id === 75).respuesta_correcta.includes("clases de Java"));
assert.equal(accesoDatos.preguntas.find(p => p.id === 77).respuesta_correcta, "D. Ninguna de las respuestas anteriores es correcta");
assert.equal(accesoDatos.preguntas.find(p => p.id === 78).respuesta_correcta, "B. Hibernate.cfg.xml");
assert.equal(accesoDatos.preguntas.find(p => p.id === 80).respuesta_correcta, "A. La interfaz Query con el método .createQuery");
assert.equal(accesoDatos.preguntas.find(p => p.id === 81).respuesta_correcta, "D. La opción A y C son correctas.");
assert.equal(accesoDatos.preguntas.find(p => p.id === 83).respuesta_correcta, "D. Todas las anteriores son ciertas.");
assert.equal(accesoDatos.preguntas.find(p => p.id === 85).respuesta_correcta, "A. La función REF(tabla)");
assert.equal(accesoDatos.preguntas.find(p => p.id === 87).pregunta, "¿Qué versión de SQL permite definir estructuras de objetos?");
assert.equal(accesoDatos.preguntas.find(p => p.id === 90).respuesta_correcta, "B. Una clase en ODL");
assert.equal(accesoDatos.preguntas.find(p => p.id === 91).respuesta_correcta, "B. Es la representación de un documento XML en forma arbórea.");
assert.equal(accesoDatos.preguntas.find(p => p.id === 92).opciones[1], "B. DTX");
assert.equal(accesoDatos.preguntas.find(p => p.id === 93).pregunta, "El XPath \"/Departamento/Empleados\":");
assert.equal(accesoDatos.preguntas.find(p => p.id === 95).respuesta_correcta, "A. Obtiene una lista de nodos hijos.");
assert.equal(accesoDatos.preguntas.find(p => p.id === 99).respuesta_correcta, "D. Generar clases a partir de un schema XML");
assert.equal(accesoDatos.preguntas.find(p => p.id === 100).respuesta_correcta, "C. Es una plantilla para crear documento XML, HTML, CSV, ...");
const testsGestion = ["u1-test1.json", "u2-test1.json", "u3-test1.json", "u4-test1.json", "u5-test1.json", "u6-test1.json"].flatMap((nombre) =>
  JSON.parse(fs.readFileSync(path.join(root, "contenido/tests/sistemasGestionEmpresarial", nombre), "utf8")).preguntas);
const gestion = catalogo.find(a => a.id === "sistemasGestionEmpresarial");
assert.deepEqual(gestion.preguntas, testsGestion.map(({ numeroOriginal, ...p }) => p));
assert.deepEqual(gestion.preguntas.map(p => p.id), Array.from({ length: 60 }, (_, i) => 41 + i));
assert.deepEqual(bancoDePreguntas.sistemasGestionEmpresarial.map(p => p.correcta),
  [3, 1, 0, 2, 0, 2, 3, 1, 1, 3, 3, 3, 1, 1, 0, 2, 2, 0, 3, 3, 1, 1, 1, 3, 3, 0, 2, 2, 0, 2, 2, 0, 2, 3, 1, 1, 0, 3, 1, 1, 2, 2, 2, 1, 1, 0, 3, 0, 3, 3, 1, 1, 2, 3, 3, 2, 1, 0, 3, 3]);
assert.equal(gestion.preguntas[7].pregunta, "Las siglas ERP corresponden con:");
assert.equal(gestion.preguntas[7].respuesta_correcta, "B. Sistemas de colaboración empresarial.");
assert.equal(gestion.preguntas.find(p => p.id === 53).respuesta_correcta, "B. Data Warehouse.");
assert.equal(gestion.preguntas.find(p => p.id === 59).respuesta_correcta, "D. A y B son correctas.");
assert.equal(gestion.preguntas.find(p => p.id === 60).respuesta_correcta, "D. A y B son correctas.");
assert.equal(gestion.preguntas.find(p => p.id === 61).respuesta_correcta, "B. Vista.");
assert.equal(gestion.preguntas.find(p => p.id === 64).respuesta_correcta, "D. Todas son correctas.");
assert.equal(gestion.preguntas.find(p => p.id === 68).pregunta, "En la instalación de una solución cloud, si activamos el modo desarrollador en el menú de configuración:");
assert.equal(gestion.preguntas.find(p => p.id === 69).respuesta_correcta, "A. PostgreSQL.");
assert.equal(gestion.preguntas.find(p => p.id === 70).respuesta_correcta, "C. Controlador.");
assert.equal(gestion.preguntas.find(p => p.id === 71).respuesta_correcta, "C. La fiabilidad no se puede tocar ni manipular");
assert.ok(gestion.preguntas.find(p => p.id === 71).opciones[0].includes("heterogeneidad nunca está estandarizada"));
assert.equal(gestion.preguntas.find(p => p.id === 73).respuesta_correcta, "C. Registrar el tiempo y una descripción de las acciones realizadas");
assert.equal(gestion.preguntas.find(p => p.id === 77).respuesta_correcta, "A. Aplicación de punto de venta");
assert.equal(gestion.preguntas.find(p => p.id === 80).pregunta, "Las siglas CMR hacen referencia a la aplicación de:");
assert.equal(gestion.preguntas.find(p => p.id === 80).respuesta_correcta, "B. Planificación de actividades");
assert.equal(gestion.preguntas.find(p => p.id === 81).respuesta_correcta, "C. Caída de la eficacia general.");
assert.equal(gestion.preguntas.find(p => p.id === 83).respuesta_correcta, "C. El estudio de viabilidad del sistema.");
assert.equal(gestion.preguntas.find(p => p.id === 88).respuesta_correcta, "A. Dirigido al producto y dirigido al usuario.");
assert.equal(gestion.preguntas.find(p => p.id === 89).pregunta, "¿Qué punto es el resultado del trabajo inicial realizado por el equipo consultor?");
assert.equal(gestion.preguntas.find(p => p.id === 89).respuesta_correcta, "D. Todas son correctas");
assert.equal(gestion.preguntas.find(p => p.id === 91).respuesta_correcta, "B. Capa lógica o ORM, se encarga de las interacciones con los datos.");
assert.equal(gestion.preguntas.find(p => p.id === 92).respuesta_correcta, "B. Res_partner");
assert.equal(gestion.preguntas.find(p => p.id === 95).respuesta_correcta, "D. XPath.");
assert.equal(gestion.preguntas.find(p => p.id === 97).pregunta, "Señala cuál no es un objeto en Odoo:");
assert.equal(gestion.preguntas.find(p => p.id === 100).respuesta_correcta, "D. Todas son correctas");

const elements = new Map();
function element(id) {
  if (!elements.has(id)) elements.set(id, { classList: { add() {}, remove() {}, toggle() {} }, style: {} });
  return elements.get(id);
}
const context = {
  console,
  preguntasMultimediaMoviles: nueva.preguntas,
  preguntasServiciosProcesos: servicios.preguntas,
  preguntasDesarrolloInterfaces: interfaces.preguntas,
  preguntasAccesoDatos: accesoDatos.preguntas,
  preguntasSistemasGestionEmpresarial: gestion.preguntas,
  bancoDePreguntas,
  document: { addEventListener() {}, getElementById: element },
  alert: message => { throw new Error(message); }
};
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "www/asignaturas.js"), "utf8"), context);
vm.runInContext(fs.readFileSync(path.join(root, "www/script.js"), "utf8"), context);
assert.equal(context.estaExamenDisponible("multimediaMoviles"), false);
for (const id of anteriores) assert.equal(context.estaExamenDisponible(id), true);
vm.runInContext(`
  resaltarAsignaturaSeleccionada = () => {};
  sincronizarConfigRango = () => {};
  sincronizarConfigAsignatura = () => {};
  actualizarPreviewTotal = () => {};
  mostrarSelectorModo = () => {};
  aplicarUIsegunModo = () => {};
  cargarPregunta = () => {};
  seleccionarAsignatura("multimediaMoviles");
`, context);
assert.equal(element("btn-modo-examen").disabled, true);
context.abrirModalConfig("examen");
context.iniciarTest("multimediaMoviles", "examen");
assert.equal(vm.runInContext("preguntasActuales.length", context), 0);
context.iniciarTest("multimediaMoviles", "estudio");
assert.equal(vm.runInContext("preguntasActuales.length", context), 60);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 41 && p.id <= 100)", context));
vm.runInContext(`
  config.usarRango = true;
  config.rangoDesde = 51;
  config.rangoHasta = 60;
  config.mezclarPreguntas = false;
  iniciarTest("multimediaMoviles", "estudio");
`, context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 10);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 91 && p.id <= 100)", context));
vm.runInContext("config.usarRango = false", context);
for (const p of nueva.preguntas) {
  const shuffled = context.barajarOpcionesPregunta(bancoDePreguntas.multimediaMoviles.find(q => q.id === p.id));
  assert.equal(shuffled.opciones[shuffled.correcta], p.respuesta_correcta);
}
vm.runInContext(`
  modoPendiente = "examen";
  continuarSesionGuardada();
  seleccionarAsignatura("sistemas");
`, context);
assert.equal(element("btn-modo-examen").disabled, false);
// Simulación aislada: ningún ID ficticio se escribe en el contenido de la app.
vm.runInContext(`
  const asignaturaPrueba = obtenerAsignatura("multimediaMoviles");
  asignaturaPrueba.preguntas = [...asignaturaPrueba.preguntas, ...Array.from({length:39}, (_, i) => ({id: i + 1}))];
`, context);
assert.equal(context.estaExamenDisponible("multimediaMoviles"), false);
vm.runInContext('asignaturaPrueba.preguntas.push({id: 40});', context);
assert.equal(context.estaExamenDisponible("multimediaMoviles"), true);
console.log("Multimedia: 60 preguntas, soluciones, estudio y bloqueo/reactivación del examen verificados. Bancos anteriores intactos.");

vm.runInContext(`
  preguntasActuales = [];
  seleccionarAsignatura("serviciosProcesos");
  modoPendiente = "estudio";
`, context);
assert.equal(element("btn-modo-examen").disabled, true);
assert.equal(context.estaExamenDisponible("serviciosProcesos"), false);
context.abrirModalConfig("examen");
context.iniciarTest("serviciosProcesos", "examen");
assert.equal(vm.runInContext("preguntasActuales.length", context), 0);
vm.runInContext('modoPendiente = "examen"; continuarSesionGuardada();', context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 0);
vm.runInContext('config.usarRango = false; iniciarTest("serviciosProcesos", "estudio");', context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 50);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 41 && p.id <= 90)", context));
vm.runInContext(`
  config.usarRango = true;
  config.rangoDesde = 41;
  config.rangoHasta = 50;
  config.mezclarPreguntas = false;
  iniciarTest("serviciosProcesos", "estudio");
`, context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 10);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 81 && p.id <= 90)", context));
vm.runInContext("config.usarRango = false", context);
for (const p of servicios.preguntas) {
  const shuffled = context.barajarOpcionesPregunta(bancoDePreguntas.serviciosProcesos.find(q => q.id === p.id));
  assert.equal(shuffled.opciones[shuffled.correcta], p.respuesta_correcta);
}
vm.runInContext(`
  const serviciosPrueba = obtenerAsignatura("serviciosProcesos");
  serviciosPrueba.preguntas = [...serviciosPrueba.preguntas, ...Array.from({length:39}, (_, i) => ({id: i + 1}))];
`, context);
assert.equal(context.estaExamenDisponible("serviciosProcesos"), false);
vm.runInContext('serviciosPrueba.preguntas.push({id: 40});', context);
assert.equal(context.estaExamenDisponible("serviciosProcesos"), true);
console.log("Servicios y procesos: 50 preguntas, soluciones, imagen, estudio y examen condicionado verificados.");

vm.runInContext(`
  preguntasActuales = [];
  seleccionarAsignatura("desarrolloInterfaces");
  modoPendiente = "estudio";
`, context);
assert.equal(element("btn-modo-examen").disabled, true);
assert.equal(context.estaExamenDisponible("desarrolloInterfaces"), false);
context.abrirModalConfig("examen");
context.iniciarTest("desarrolloInterfaces", "examen");
assert.equal(vm.runInContext("preguntasActuales.length", context), 0);
vm.runInContext('modoPendiente = "examen"; continuarSesionGuardada();', context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 0);
vm.runInContext('config.usarRango = false; iniciarTest("desarrolloInterfaces", "estudio");', context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 60);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 41 && p.id <= 100)", context));
vm.runInContext(`
  config.usarRango = true;
  config.rangoDesde = 51;
  config.rangoHasta = 60;
  config.mezclarPreguntas = false;
  iniciarTest("desarrolloInterfaces", "estudio");
`, context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 10);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 91 && p.id <= 100)", context));
vm.runInContext("config.usarRango = false", context);
for (const p of interfaces.preguntas) {
  const shuffled = context.barajarOpcionesPregunta(bancoDePreguntas.desarrolloInterfaces.find(q => q.id === p.id));
  assert.equal(shuffled.opciones[shuffled.correcta], p.respuesta_correcta);
}
vm.runInContext(`
  const interfacesPrueba = obtenerAsignatura("desarrolloInterfaces");
  interfacesPrueba.preguntas = [...interfacesPrueba.preguntas, ...Array.from({length:39}, (_, i) => ({id: i + 1}))];
`, context);
assert.equal(context.estaExamenDisponible("desarrolloInterfaces"), false);
vm.runInContext('interfacesPrueba.preguntas.push({id: 40});', context);
assert.equal(context.estaExamenDisponible("desarrolloInterfaces"), true);
console.log("Desarrollo de interfaces: 60 preguntas, soluciones, estudio y examen condicionado verificados.");

vm.runInContext(`
  preguntasActuales = [];
  seleccionarAsignatura("accesoDatos");
  modoPendiente = "estudio";
`, context);
assert.equal(element("btn-modo-examen").disabled, true);
assert.equal(context.estaExamenDisponible("accesoDatos"), false);
context.abrirModalConfig("examen");
context.iniciarTest("accesoDatos", "examen");
assert.equal(vm.runInContext("preguntasActuales.length", context), 0);
vm.runInContext('modoPendiente = "examen"; continuarSesionGuardada();', context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 0);
vm.runInContext('config.usarRango = false; iniciarTest("accesoDatos", "estudio");', context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 60);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 41 && p.id <= 100)", context));
vm.runInContext(`
  config.usarRango = true;
  config.rangoDesde = 51;
  config.rangoHasta = 60;
  config.mezclarPreguntas = false;
  iniciarTest("accesoDatos", "estudio");
`, context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 10);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 91 && p.id <= 100)", context));
vm.runInContext("config.usarRango = false", context);
for (const p of accesoDatos.preguntas) {
  const shuffled = context.barajarOpcionesPregunta(bancoDePreguntas.accesoDatos.find(q => q.id === p.id));
  assert.equal(shuffled.opciones[shuffled.correcta], p.respuesta_correcta);
}
vm.runInContext(`
  const accesoDatosPrueba = obtenerAsignatura("accesoDatos");
  accesoDatosPrueba.preguntas = [...accesoDatosPrueba.preguntas, ...Array.from({length:39}, (_, i) => ({id: i + 1}))];
`, context);
assert.equal(context.estaExamenDisponible("accesoDatos"), false);
vm.runInContext('accesoDatosPrueba.preguntas.push({id: 40});', context);
assert.equal(context.estaExamenDisponible("accesoDatos"), true);
console.log("Acceso a datos: 60 preguntas, soluciones, estudio y examen condicionado verificados.");

vm.runInContext(`
  preguntasActuales = [];
  seleccionarAsignatura("sistemasGestionEmpresarial");
  modoPendiente = "estudio";
`, context);
assert.equal(element("btn-modo-examen").disabled, true);
assert.equal(context.estaExamenDisponible("sistemasGestionEmpresarial"), false);
context.abrirModalConfig("examen");
context.iniciarTest("sistemasGestionEmpresarial", "examen");
assert.equal(vm.runInContext("preguntasActuales.length", context), 0);
vm.runInContext('modoPendiente = "examen"; continuarSesionGuardada();', context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 0);
vm.runInContext('config.usarRango = false; iniciarTest("sistemasGestionEmpresarial", "estudio");', context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 60);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 41 && p.id <= 100)", context));
vm.runInContext(`
  config.usarRango = true;
  config.rangoDesde = 51;
  config.rangoHasta = 60;
  config.mezclarPreguntas = false;
  iniciarTest("sistemasGestionEmpresarial", "estudio");
`, context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 10);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 91 && p.id <= 100)", context));
vm.runInContext("config.usarRango = false", context);
for (const p of gestion.preguntas) {
  const shuffled = context.barajarOpcionesPregunta(bancoDePreguntas.sistemasGestionEmpresarial.find(q => q.id === p.id));
  assert.equal(shuffled.opciones[shuffled.correcta], p.respuesta_correcta);
}
vm.runInContext(`
  const gestionPrueba = obtenerAsignatura("sistemasGestionEmpresarial");
  gestionPrueba.preguntas = [...gestionPrueba.preguntas, ...Array.from({length:39}, (_, i) => ({id: i + 1}))];
`, context);
assert.equal(context.estaExamenDisponible("sistemasGestionEmpresarial"), false);
vm.runInContext('gestionPrueba.preguntas.push({id: 40});', context);
assert.equal(context.estaExamenDisponible("sistemasGestionEmpresarial"), true);
console.log("Sistemas de gestión empresarial: 60 preguntas, soluciones, estudio y examen condicionado verificados.");
