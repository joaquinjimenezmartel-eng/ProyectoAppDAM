function normalizarTextoRespuesta(texto) {
  if (typeof texto !== "string") return "";
  return texto.trim().replace(/\s+/g, " ");
}

function resolverIndiceCorrecto(pregunta) {
  if (Number.isInteger(pregunta?.correcta)) return pregunta.correcta;

  const opciones = Array.isArray(pregunta?.opciones) ? pregunta.opciones : [];
  const respuestaTexto =
    typeof pregunta?.respuesta_correcta === "string"
      ? pregunta.respuesta_correcta
      : typeof pregunta?.correcta === "string"
        ? pregunta.correcta
        : "";

  const respuestaNormalizada = normalizarTextoRespuesta(respuestaTexto);
  const indice = opciones.findIndex((opcion) => {
    return normalizarTextoRespuesta(opcion) === respuestaNormalizada;
  });

  if (indice !== -1) return indice;

  if (opciones.length > 0) {
    console.warn("No se pudo resolver la respuesta correcta de la pregunta", pregunta?.id);
  }

  return 0;
}

function normalizarListaPreguntas(lista) {
  if (!Array.isArray(lista)) return [];

  return lista.map((pregunta) => ({
    ...pregunta,
    correcta: resolverIndiceCorrecto(pregunta)
  }));
}

const bancoDePreguntas = {
  sistemas: typeof preguntasSistemas !== 'undefined' ? normalizarListaPreguntas(preguntasSistemas) : [],
  bases: typeof preguntasBases !== 'undefined' ? normalizarListaPreguntas(preguntasBases) : [],
  entornos: typeof preguntasEntornos !== 'undefined' ? normalizarListaPreguntas(preguntasEntornos) : [],
  programacion: typeof preguntasProgramacion !== 'undefined' ? normalizarListaPreguntas(preguntasProgramacion) : [],
  empleabilidad: typeof preguntasEmpleabilidad !== 'undefined' ? normalizarListaPreguntas(preguntasEmpleabilidad) : [],
  lenguajeMarcas: typeof preguntasLenguajeMarcas !== 'undefined' ? normalizarListaPreguntas(preguntasLenguajeMarcas) : []
};
