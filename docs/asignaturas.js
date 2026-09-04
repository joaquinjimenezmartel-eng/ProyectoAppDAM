const catalogoAsignaturas = [
  {
    id: "sistemas",
    nombre: "Sistemas Informáticos",
    sigla: "SI",
    color: "30, 111, 255",
    preguntas: typeof preguntasSistemas !== "undefined" ? preguntasSistemas : [],
    resumen: typeof resumenSistemas !== "undefined" ? resumenSistemas : ""
  },
  {
    id: "bases",
    nombre: "Bases de Datos",
    sigla: "BD",
    color: "0, 157, 255",
    preguntas: typeof preguntasBases !== "undefined" ? preguntasBases : [],
    resumen: typeof resumenBases !== "undefined" ? resumenBases : ""
  },
  {
    id: "entornos",
    nombre: "Entornos de Desarrollo",
    sigla: "ED",
    color: "92, 79, 255",
    preguntas: typeof preguntasEntornos !== "undefined" ? preguntasEntornos : [],
    resumen: typeof resumenEntornos !== "undefined" ? resumenEntornos : ""
  },
  {
    id: "programacion",
    nombre: "Programación",
    sigla: "PR",
    color: "175, 82, 222",
    preguntas: typeof preguntasProgramacion !== "undefined" ? preguntasProgramacion : [],
    resumen: typeof resumenProgramacion !== "undefined" ? resumenProgramacion : ""
  },
  {
    id: "empleabilidad",
    nombre: "Itinerario para la Empleabilidad",
    sigla: "IE",
    color: "0, 168, 138",
    preguntas: typeof preguntasEmpleabilidad !== "undefined" ? preguntasEmpleabilidad : [],
    resumen: typeof resumenEmpleabilidad !== "undefined" ? resumenEmpleabilidad : ""
  },
  {
    id: "lenguajeMarcas",
    nombre: "Lenguaje de Marcas",
    sigla: "LM",
    color: "255, 132, 31",
    preguntas: typeof preguntasLenguajeMarcas !== "undefined" ? preguntasLenguajeMarcas : [],
    resumen: typeof resumenLenguajeMarcas !== "undefined" ? resumenLenguajeMarcas : ""
  }
];

function obtenerAsignatura(asignaturaId) {
  return catalogoAsignaturas.find((asignatura) => asignatura.id === asignaturaId) || null;
}

function renderizarSelectorAsignaturas() {
  const contenedor = document.getElementById("botones-asignaturas");
  if (!contenedor) return;

  contenedor.replaceChildren();

  catalogoAsignaturas.forEach((asignatura) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "btn-principal";
    boton.dataset.asignatura = asignatura.id;
    boton.style.setProperty("--subject-accent", asignatura.color);
    boton.setAttribute("aria-pressed", "false");

    const icono = document.createElement("span");
    icono.className = "asignatura-icono";
    icono.setAttribute("aria-hidden", "true");
    icono.textContent = asignatura.sigla;

    const contenido = document.createElement("span");
    contenido.className = "asignatura-contenido";

    const nombre = document.createElement("strong");
    nombre.textContent = asignatura.nombre;

    const detalle = document.createElement("small");
    detalle.textContent = `${asignatura.preguntas.length} preguntas`;

    if (typeof ProgresoEstudio !== "undefined") {
      const progreso = ProgresoEstudio.obtenerAsignatura(asignatura.id);

      if (progreso.respuestas > 0) {
        const resumenProgreso = document.createElement("span");
        resumenProgreso.className = "asignatura-progreso";
        resumenProgreso.textContent = `${progreso.porcentajeAciertos}% de aciertos`;
        contenido.append(nombre, detalle, resumenProgreso);
      } else {
        contenido.append(nombre, detalle);
      }

      const sesionesPendientes = ["estudio", "examen"]
        .map((modo) => ProgresoEstudio.obtenerSesionActiva(asignatura.id, modo))
        .filter(Boolean);
      if (sesionesPendientes.length > 0) {
        const avisoExamen = document.createElement("span");
        avisoExamen.className = "asignatura-examen-pendiente";
        avisoExamen.textContent = `${sesionesPendientes.length} sesión${sesionesPendientes.length > 1 ? "es" : ""} pendiente${sesionesPendientes.length > 1 ? "s" : ""}`;
        contenido.appendChild(avisoExamen);
      }
    } else {
      contenido.append(nombre, detalle);
    }

    const flecha = document.createElement("span");
    flecha.className = "asignatura-flecha";
    flecha.setAttribute("aria-hidden", "true");
    flecha.textContent = "›";

    boton.append(icono, contenido, flecha);
    boton.addEventListener("click", () => seleccionarAsignatura(asignatura.id));
    contenedor.appendChild(boton);
  });

  renderizarSesionesPendientes();
}

function renderizarSesionesPendientes() {
  const seccion = document.getElementById("sesiones-pendientes");
  const lista = document.getElementById("lista-sesiones-pendientes");
  if (!seccion || !lista || typeof ProgresoEstudio === "undefined") return;
  lista.replaceChildren();

  const pendientes = [];
  catalogoAsignaturas.forEach((asignatura) => {
    ["estudio", "examen"].forEach((modo) => {
      const sesion = ProgresoEstudio.obtenerSesionActiva(asignatura.id, modo);
      if (sesion) pendientes.push({ asignatura, modo, sesion });
    });
  });

  seccion.classList.toggle("oculto", pendientes.length === 0);
  pendientes.forEach(({ asignatura, modo, sesion }) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "sesion-pendiente-directa";
    boton.style.setProperty("--subject-accent", asignatura.color);
    boton.innerHTML = `<span><strong>${modo === "examen" ? "Examen" : "Estudio"} · ${asignatura.nombre}</strong><small>Pregunta ${Math.min(sesion.indice + 1, sesion.preguntas.length)} de ${sesion.preguntas.length}</small></span><span>Continuar ›</span>`;
    boton.addEventListener("click", () => continuarSesionDeAsignatura(asignatura.id, modo));
    lista.appendChild(boton);
  });
}
