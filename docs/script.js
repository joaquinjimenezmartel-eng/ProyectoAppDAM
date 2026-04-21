let preguntasActuales = [];
let indicePregunta = 0;
let aciertos = 0;

let estadoPreguntas = [];
let modo = "estudio";
let asignaturaSeleccionada = null;

let seleccionExamen = [];
let correctasExamen = [];

let falladasExamen = [];
let enRepasoFallos = false;

let config = {
  mezclarPreguntas: true,
  mezclarRespuestas: true,
  extras: 0,
  usarRango: false,
  rangoDesde: 1,
  rangoHasta: 40
};

let modoPendiente = "estudio";
const IDS_RESERVADOS = 40;

/* Los resúmenes se cargan ahora desde resumenes.js en la variable global bancoDeResumenes */

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid-overlay");
  if (grid) grid.classList.add("oculto");

  const sel = document.getElementById("selector-modo");
  if (sel) sel.classList.add("oculto");

  const cfg = document.getElementById("config-overlay");
  if (cfg) cfg.classList.add("oculto");

  const resumen = document.getElementById("resumen-overlay");
  if (resumen) resumen.classList.add("oculto");

  const explicacionBox = document.getElementById("explicacion-box");
  if (explicacionBox) explicacionBox.classList.add("oculto");

  const btnExplicacion = document.getElementById("btn-explicacion");
  if (btnExplicacion) btnExplicacion.classList.add("oculto");

  const explicacionOverlay = document.getElementById("explicacion-box");
  if (explicacionOverlay) {
    explicacionOverlay.classList.add("oculto");
    explicacionOverlay.setAttribute("aria-hidden", "true");
    explicacionOverlay.addEventListener("click", (event) => {
      if (event.target === explicacionOverlay) {
        cerrarPopupExplicacion();
      }
    });
  }

  const inputExtras = document.getElementById("input-extras");
  if (inputExtras) {
    inputExtras.addEventListener("input", () => {
      actualizarPreviewTotal();
    });
  }

  const toggleMezclarPreguntas = document.getElementById("toggle-mezclar-preguntas");
  if (toggleMezclarPreguntas) {
    toggleMezclarPreguntas.addEventListener("change", () => {
      sincronizarConfigRango();
      sincronizarConfigAsignatura();
      actualizarPreviewTotal();
    });
  }

  const toggleUsarRango = document.getElementById("toggle-usar-rango");
  if (toggleUsarRango) {
    toggleUsarRango.addEventListener("change", () => {
      sincronizarConfigRango();
      sincronizarConfigAsignatura();
      actualizarPreviewTotal();
    });
  }

  const inputRangoDesde = document.getElementById("input-rango-desde");
  if (inputRangoDesde) {
    inputRangoDesde.addEventListener("input", () => {
      sincronizarConfigRango();
      actualizarPreviewTotal();
    });
  }

  const inputRangoHasta = document.getElementById("input-rango-hasta");
  if (inputRangoHasta) {
    inputRangoHasta.addEventListener("input", () => {
      sincronizarConfigRango();
      actualizarPreviewTotal();
    });
  }

  inicializarBotonesAsignatura();
  actualizarPreviewTotal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    cerrarPopupExplicacion();
    cerrarResumenAsignatura();
  }
});

/* =========================
   Modal Config
========================= */
function abrirModalConfig(modoElegido) {
  modoPendiente = modoElegido;

  const titulo = document.getElementById("config-titulo");
  if (titulo) {
    titulo.innerText = modoElegido === "examen" ? "Configura tu examen" : "Configura tu estudio";
  }

  const inputExtras = document.getElementById("input-extras");
  if (inputExtras) inputExtras.value = String(config.extras ?? 0);

  const tPreg = document.getElementById("toggle-mezclar-preguntas");
  const tResp = document.getElementById("toggle-mezclar-respuestas");
  const toggleUsarRango = document.getElementById("toggle-usar-rango");
  const inputRangoDesde = document.getElementById("input-rango-desde");
  const inputRangoHasta = document.getElementById("input-rango-hasta");
  if (tPreg) tPreg.checked = !!config.mezclarPreguntas;
  if (tResp) tResp.checked = !!config.mezclarRespuestas;
  if (toggleUsarRango) toggleUsarRango.checked = !!config.usarRango;
  if (inputRangoDesde) inputRangoDesde.value = String(config.rangoDesde ?? 1);
  if (inputRangoHasta) inputRangoHasta.value = String(config.rangoHasta ?? 40);

  sincronizarConfigRango();
  sincronizarConfigAsignatura();
  actualizarPreviewTotal();

  const overlay = document.getElementById("config-overlay");
  if (overlay) overlay.classList.remove("oculto");
}

function cerrarModalConfig() {
  const overlay = document.getElementById("config-overlay");
  if (overlay) overlay.classList.add("oculto");
}

function cambiarExtras(delta) {
  const resumen = obtenerResumenAsignatura(asignaturaSeleccionada);
  const inputExtras = document.getElementById("input-extras");
  if (!inputExtras) return;

  let valorActual = obtenerExtrasActuales();

  valorActual += delta;
  if (valorActual < 0) valorActual = 0;
  if (resumen.extrasDisponibles <= 0) valorActual = 0;
  if (resumen.extrasDisponibles > 0) {
    valorActual = Math.min(valorActual, resumen.extrasDisponibles);
  }

  inputExtras.value = String(valorActual);
  actualizarPreviewTotal();
}

function actualizarPreviewTotal() {
  const resumen = obtenerResumenAsignatura(asignaturaSeleccionada);
  const extras = obtenerExtrasActuales();
  const rango = obtenerConfiguracionRangoActual();
  const esEstudio = !esModoExamen(modoPendiente);

  const basePreview = document.getElementById("base-preview");
  const baseLabel = document.getElementById("base-label");
  if (baseLabel) baseLabel.innerText = esEstudio ? "Disponibles" : "Base";
  if (basePreview) {
    basePreview.innerText = String(esEstudio ? resumen.totalDisponibles : resumen.baseDisponibles);
  }

  const extrasLabel = document.getElementById("extras-label");
  if (extrasLabel) {
    if (esEstudio) extrasLabel.innerText = "Cantidad";
    else extrasLabel.innerText = resumen.usarSoloExtrasDisponibles ? "Preguntas" : "Extra";
  }

  let total = 0;
  if (esEstudio && rango.activo) {
    total = rango.cantidad;
  } else if (resumen.baseDisponibles === 0) {
    total = extras > 0 ? extras : resumen.extrasDisponibles;
  } else {
    total = resumen.baseDisponibles + extras;
  }

  const preview = document.getElementById("total-preview");
  if (preview) preview.innerText = String(total);
}

function empezarDesdeModal() {
  let extras = obtenerExtrasActuales();

  const tPreg = document.getElementById("toggle-mezclar-preguntas");
  const tResp = document.getElementById("toggle-mezclar-respuestas");

  config.extras = extras;
  config.mezclarPreguntas = tPreg ? !!tPreg.checked : true;
  config.mezclarRespuestas = tResp ? !!tResp.checked : true;
  const rango = obtenerConfiguracionRangoActual();
  config.usarRango = rango.activo;
  config.rangoDesde = rango.desde;
  config.rangoHasta = rango.hasta;

  if (!esModoExamen(modoPendiente) && config.usarRango && config.mezclarPreguntas) {
    alert("No puedes usar un rango correlativo si activas 'Mezclar preguntas'.");
    return;
  }

  if (!esModoExamen(modoPendiente) && config.usarRango && rango.cantidad <= 0) {
    alert("El rango seleccionado no es valido. Revisa los campos 'Desde' y 'Hasta'.");
    return;
  }

  cerrarModalConfig();
  iniciarTest(asignaturaSeleccionada, modoPendiente);
}

/* =========================
   Modal Resumen
========================= */
function abrirResumenAsignatura() {
    const overlay = document.getElementById("resumen-overlay");
    const titulo = document.getElementById("resumen-titulo");
    const contenido = document.getElementById("resumen-contenido");
    const modalBody = overlay ? overlay.querySelector(".modal-body") : null;

    if (titulo) titulo.innerText = "Explicación de la asignatura";
    if (contenido) {
        if (typeof bancoDeResumenes !== 'undefined' && bancoDeResumenes[asignaturaSeleccionada]) {
            // Usamos innerHTML para permitir etiquetas HTML en el texto
            contenido.innerHTML = bancoDeResumenes[asignaturaSeleccionada];
        } else {
            contenido.innerText = "No hay resumen disponible para esta asignatura.";
        }

        contenido.scrollTop = 0;
    }

    if (modalBody) modalBody.scrollTop = 0;

    if (overlay) overlay.classList.remove("oculto");
}

function cerrarResumenAsignatura() {
    const overlay = document.getElementById("resumen-overlay");
    if (overlay) overlay.classList.add("oculto");
}

/* =========================
   Helpers
========================= */
function esModoExamen(m) {
  return m === "examen";
}

function obtenerPreguntasAsignatura(asignatura) {
  if (typeof bancoDePreguntas === "undefined" || !asignatura) return [];

  const preguntas = bancoDePreguntas[asignatura];
  return Array.isArray(preguntas) ? preguntas : [];
}

function obtenerResumenAsignatura(asignatura) {
  const preguntas = obtenerPreguntasAsignatura(asignatura);
  const baseDisponibles = filtrarPorRangoId(preguntas, 1, IDS_RESERVADOS).length;
  const extrasDisponibles = filtrarMayoresDeId(preguntas, IDS_RESERVADOS).length;
  const usarSoloExtrasDisponibles = baseDisponibles === 0 && extrasDisponibles > 0;

  return {
    baseDisponibles,
    extrasDisponibles,
    usarSoloExtrasDisponibles,
    totalDisponibles: preguntas.length
  };
}

function obtenerPreguntasAsignaturaOrdenadas(asignatura) {
  return ordenarPorIdAsc(obtenerPreguntasAsignatura(asignatura));
}

function normalizarNumeroEntero(valor, fallback) {
  const numero = parseInt(valor, 10);
  return Number.isFinite(numero) ? numero : fallback;
}

function obtenerRangoPorDefecto(total) {
  if (total <= 0) {
    return { desde: 1, hasta: 0, cantidad: 0 };
  }

  const hasta = Math.min(40, total);
  return {
    desde: 1,
    hasta,
    cantidad: hasta
  };
}

function normalizarRangoPosicional(total, desde, hasta) {
  if (total <= 0) {
    return { desde: 1, hasta: 0, cantidad: 0 };
  }

  const rangoBase = obtenerRangoPorDefecto(total);
  const inicio = Math.min(
    total,
    Math.max(1, normalizarNumeroEntero(desde, rangoBase.desde))
  );
  const fin = Math.min(
    total,
    Math.max(1, normalizarNumeroEntero(hasta, rangoBase.hasta))
  );

  return {
    desde: inicio,
    hasta: fin,
    cantidad: fin >= inicio ? (fin - inicio + 1) : 0
  };
}

function obtenerConfiguracionRangoActual() {
  const total = obtenerPreguntasAsignatura(asignaturaSeleccionada).length;
  const toggle = document.getElementById("toggle-usar-rango");
  const inputDesde = document.getElementById("input-rango-desde");
  const inputHasta = document.getElementById("input-rango-hasta");
  const rangoNormalizado = normalizarRangoPosicional(
    total,
    inputDesde ? inputDesde.value : config.rangoDesde,
    inputHasta ? inputHasta.value : config.rangoHasta
  );

  if (inputDesde && total > 0) inputDesde.value = String(rangoNormalizado.desde);
  if (inputHasta && total > 0) inputHasta.value = String(rangoNormalizado.hasta);

  return {
    activo: !!(toggle && toggle.checked && !esModoExamen(modoPendiente)),
    total,
    ...rangoNormalizado
  };
}

function obtenerExtrasActuales() {
  const resumen = obtenerResumenAsignatura(asignaturaSeleccionada);
  const inputExtras = document.getElementById("input-extras");

  if (!inputExtras) return 0;

  let extras = parseInt(inputExtras.value, 10);
  if (!Number.isFinite(extras) || extras < 0) extras = 0;

  if (resumen.extrasDisponibles <= 0) {
    extras = 0;
  } else {
    extras = Math.min(extras, resumen.extrasDisponibles);
  }

  if (inputExtras.value !== String(extras)) {
    inputExtras.value = String(extras);
  }

  return extras;
}

function actualizarEstadoStepperExtras(deshabilitado) {
  const inputExtras = document.getElementById("input-extras");
  const botonesStepper = document.querySelectorAll(".stepper-extras .stepper-btn");

  if (inputExtras) inputExtras.disabled = deshabilitado;
  botonesStepper.forEach((boton) => {
    boton.disabled = deshabilitado;
  });
}

function sincronizarConfigRango() {
  const bloqueRango = document.getElementById("config-rango");
  const toggleUsarRango = document.getElementById("toggle-usar-rango");
  const inputDesde = document.getElementById("input-rango-desde");
  const inputHasta = document.getElementById("input-rango-hasta");
  const ayuda = document.getElementById("rango-ayuda");
  const esEstudio = !esModoExamen(modoPendiente);

  if (!bloqueRango || !toggleUsarRango || !inputDesde || !inputHasta) return;

  bloqueRango.classList.toggle("oculto", !esEstudio);
  if (!esEstudio) return;

  const total = obtenerPreguntasAsignatura(asignaturaSeleccionada).length;
  const rangoPorDefecto = obtenerRangoPorDefecto(total);

  if (config.rangoHasta < 1) {
    config.rangoDesde = rangoPorDefecto.desde;
    config.rangoHasta = rangoPorDefecto.hasta;
  }

  inputDesde.min = "1";
  inputHasta.min = "1";
  inputDesde.max = String(Math.max(total, 1));
  inputHasta.max = String(Math.max(total, 1));

  if (!inputDesde.value) inputDesde.value = String(config.rangoDesde || rangoPorDefecto.desde);
  if (!inputHasta.value) inputHasta.value = String(config.rangoHasta || rangoPorDefecto.hasta);

  const rango = obtenerConfiguracionRangoActual();
  inputDesde.disabled = !toggleUsarRango.checked;
  inputHasta.disabled = !toggleUsarRango.checked;

  if (!ayuda) return;

  if (total === 0) {
    ayuda.innerText = "No hay preguntas disponibles para esta asignatura.";
    return;
  }

  if (!toggleUsarRango.checked) {
    ayuda.innerText = "Activa este rango para estudiar un tramo correlativo. Ejemplo: 1 a 40 o 41 a 60.";
    return;
  }

  const toggleMezclarPreguntas = document.getElementById("toggle-mezclar-preguntas");
  if (toggleMezclarPreguntas && toggleMezclarPreguntas.checked) {
    ayuda.innerText = "Este rango solo funciona sin mezclar preguntas.";
    return;
  }

  if (rango.cantidad <= 0) {
    ayuda.innerText = "El rango no es valido. 'Desde' debe ser menor o igual que 'Hasta'.";
    return;
  }

  ayuda.innerText = `Se estudiaran ${rango.cantidad} preguntas consecutivas de ${rango.total} disponibles.`;
}

function sincronizarConfigAsignatura() {
  const resumen = obtenerResumenAsignatura(asignaturaSeleccionada);
  const inputExtras = document.getElementById("input-extras");

  if (!inputExtras) return;

  if (resumen.extrasDisponibles <= 0) {
    inputExtras.value = "0";
    inputExtras.max = "0";
    actualizarEstadoStepperExtras(true);
    return;
  }

  inputExtras.max = String(Math.max(resumen.extrasDisponibles, 0));

  if (resumen.usarSoloExtrasDisponibles) {
    let extras = parseInt(inputExtras.value, 10);
    if (!Number.isFinite(extras) || extras <= 0) {
      inputExtras.value = String(resumen.extrasDisponibles);
    }
  }

  inputExtras.value = String(obtenerExtrasActuales());
  const rango = obtenerConfiguracionRangoActual();
  actualizarEstadoStepperExtras(!esModoExamen(modoPendiente) && rango.activo);
}

function idNum(p) {
  const n = Number(p?.id);
  return Number.isFinite(n) ? n : Number.POSITIVE_INFINITY;
}

function ordenarPorIdAsc(lista) {
  return [...lista].sort((a, b) => idNum(a) - idNum(b));
}

function mezclarArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function barajarOpcionesPregunta(p) {
  const pares = p.opciones.map((texto, idx) => ({
    texto,
    esCorrecta: idx === p.correcta
  }));

  const mezclados = mezclarArray(pares);
  const nuevasOpciones = mezclados.map(x => x.texto);
  const nuevaCorrecta = mezclados.findIndex(x => x.esCorrecta);

  return { ...p, opciones: nuevasOpciones, correcta: nuevaCorrecta, __barajadas: true };
}

function filtrarPorRangoId(lista, desde, hasta) {
  return lista.filter(p => {
    const n = Number(p.id);
    return Number.isFinite(n) && n >= desde && n <= hasta;
  });
}

function filtrarMayoresDeId(lista, mayorQue) {
  return lista.filter(p => {
    const n = Number(p.id);
    return Number.isFinite(n) && n > mayorQue;
  });
}

function filtrarPorPosicion(listaOrdenada, desde, hasta) {
  const inicio = Math.max(0, desde - 1);
  return listaOrdenada.slice(inicio, hasta);
}

function ocultarExplicacion() {
  const btn = document.getElementById("btn-explicacion");
  const texto = document.getElementById("explicacion-texto");

  if (btn) {
    btn.classList.add("oculto");
    btn.style.display = "none";
  }

  cerrarPopupExplicacion();

  if (texto) texto.innerText = "";
}

function cerrarPopupExplicacion() {
  const box = document.getElementById("explicacion-box");
  if (!box) return;

  box.classList.add("oculto");
  box.style.display = "none";
  box.setAttribute("aria-hidden", "true");
}

function mostrarBotonExplicacion() {
  if (esModoExamen(modo)) return;

  const btn = document.getElementById("btn-explicacion");
  if (btn) {
    btn.classList.remove("oculto");
    btn.style.display = "inline-flex";
  }
}

function inicializarBotonesAsignatura() {
  const botones = document.querySelectorAll(".botones-asignaturas .btn-principal");

  botones.forEach((boton) => {
    const accion = boton.getAttribute("onclick") || "";
    const match = accion.match(/seleccionarAsignatura\('([^']+)'\)/);
    if (!match) return;

    boton.dataset.asignatura = match[1];
    boton.setAttribute("aria-pressed", "false");
  });
}

function resaltarAsignaturaSeleccionada(asig) {
  const botones = document.querySelectorAll(".botones-asignaturas .btn-principal");

  botones.forEach((boton) => {
    const esActiva = boton.dataset.asignatura === asig;
    boton.classList.toggle("asignatura-activa", esActiva);
    boton.setAttribute("aria-pressed", esActiva ? "true" : "false");
  });
}

function mostrarSelectorModo() {
  const sel = document.getElementById("selector-modo");
  if (!sel) return;

  const estabaOculto = sel.classList.contains("oculto");
  sel.classList.remove("oculto");

  requestAnimationFrame(() => {
    if (estabaOculto) {
      sel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    const primerBotonModo = sel.querySelector("button");
    if (primerBotonModo) {
      primerBotonModo.focus();
    }
  });
}

function toggleExplicacion() {
  if (esModoExamen(modo)) return;

  const p = preguntasActuales[indicePregunta];
  const box = document.getElementById("explicacion-box");
  const texto = document.getElementById("explicacion-texto");
  const btnCerrar = document.querySelector(".explicacion-popup-close");

  if (!box || !texto || !p) return;

  texto.innerText =
    p.explicacion && p.explicacion.trim() !== ""
      ? p.explicacion
      : "No hay explicación disponible todavía para esta pregunta.";

  const estaOculta = box.classList.contains("oculto");

  if (estaOculta) {
    box.classList.remove("oculto");
    box.style.display = "flex";
    box.setAttribute("aria-hidden", "false");
    if (btnCerrar) btnCerrar.focus();
  } else {
    cerrarPopupExplicacion();
  }
}

/* =========================
   Selección asignatura + modo
========================= */
function seleccionarAsignatura(asig) {
  asignaturaSeleccionada = asig;
  resaltarAsignaturaSeleccionada(asig);
  sincronizarConfigRango();
  sincronizarConfigAsignatura();
  actualizarPreviewTotal();
  mostrarSelectorModo();
}

function iniciarTest(asignatura, modoElegido = "estudio") {
  if (!asignatura) return;

  if (typeof bancoDePreguntas === "undefined") {
    alert("No se está cargando preguntas.js (bancoDePreguntas no existe).");
    return;
  }

  const preguntasOriginales = bancoDePreguntas[asignatura];
  if (!preguntasOriginales || preguntasOriginales.length === 0) {
    alert("Todavía no hay preguntas para esta asignatura.");
    return;
  }

  modo = modoElegido;
  enRepasoFallos = false;

  if (!esModoExamen(modoElegido) && config.usarRango) {
    if (config.mezclarPreguntas) {
      alert("No puedes usar un rango correlativo si activas 'Mezclar preguntas'.");
      return;
    }

    const preguntasOrdenadas = obtenerPreguntasAsignaturaOrdenadas(asignatura);
    const rango = normalizarRangoPosicional(
      preguntasOrdenadas.length,
      config.rangoDesde,
      config.rangoHasta
    );

    if (rango.cantidad <= 0) {
      alert("El rango seleccionado no es valido. Revisa los campos 'Desde' y 'Hasta'.");
      return;
    }

    preguntasActuales = filtrarPorPosicion(preguntasOrdenadas, rango.desde, rango.hasta);
    if (preguntasActuales.length === 0) {
      alert("No hay preguntas dentro del rango seleccionado.");
      return;
    }

    indicePregunta = 0;
    aciertos = 0;
    estadoPreguntas = new Array(preguntasActuales.length).fill(false);

    seleccionExamen = new Array(preguntasActuales.length).fill(null);
    correctasExamen = new Array(preguntasActuales.length).fill(null);
    falladasExamen = [];

    document.getElementById("pantalla-inicio").classList.add("oculto");
    document.getElementById("pantalla-final").classList.add("oculto");
    document.getElementById("pantalla-test").classList.remove("oculto");

    aplicarUIsegunModo();
    cargarPregunta();
    return;
  }

  let base40 = filtrarPorRangoId(preguntasOriginales, 1, IDS_RESERVADOS);
  base40 = ordenarPorIdAsc(base40);
  let extrasPool = filtrarMayoresDeId(preguntasOriginales, IDS_RESERVADOS);

  if (base40.length === 0 && extrasPool.length === 0) {
    alert("Todavia no hay preguntas cargadas para esta asignatura.");
    return;
  }

  let extrasElegidas = [];
  if (base40.length === 0) {
    const cantidadExtras = config.extras > 0 ? config.extras : extrasPool.length;
    extrasElegidas = config.mezclarPreguntas
      ? mezclarArray(extrasPool).slice(0, cantidadExtras)
      : ordenarPorIdAsc(extrasPool).slice(0, cantidadExtras);
  } else if (config.extras > 0 && extrasPool.length > 0) {
    if (config.mezclarPreguntas) {
      extrasElegidas = mezclarArray(extrasPool).slice(0, config.extras);
    } else {
      extrasElegidas = ordenarPorIdAsc(extrasPool).slice(0, config.extras);
    }
  }

  let listaFinal = [...base40, ...extrasElegidas];

  if (config.mezclarPreguntas) {
    preguntasActuales = mezclarArray(listaFinal);
  } else {
    preguntasActuales = ordenarPorIdAsc(listaFinal);
  }

  indicePregunta = 0;
  aciertos = 0;
  estadoPreguntas = new Array(preguntasActuales.length).fill(false);

  seleccionExamen = new Array(preguntasActuales.length).fill(null);
  correctasExamen = new Array(preguntasActuales.length).fill(null);
  falladasExamen = [];

  document.getElementById("pantalla-inicio").classList.add("oculto");
  document.getElementById("pantalla-final").classList.add("oculto");
  document.getElementById("pantalla-test").classList.remove("oculto");

  aplicarUIsegunModo();
  cargarPregunta();
}

function aplicarUIsegunModo() {
  const btnAtras = document.getElementById("btn-atras");
  const navGrid = document.getElementById("nav-grid-bottom");
  const feedback = document.getElementById("feedback");
  const btnExplicacion = document.getElementById("btn-explicacion");
  const boxExplicacion = document.getElementById("explicacion-box");

  if (esModoExamen(modo)) {
    if (btnAtras) btnAtras.style.display = "none";
    if (navGrid) navGrid.style.display = "none";
    if (feedback) feedback.style.display = "none";
    if (btnExplicacion) btnExplicacion.style.display = "none";
    if (boxExplicacion) boxExplicacion.style.display = "none";
  } else {
    if (btnAtras) btnAtras.style.display = "";
    if (navGrid) navGrid.style.display = "";
    if (feedback) feedback.style.display = "";
    if (btnExplicacion) btnExplicacion.style.display = "";
    if (boxExplicacion) boxExplicacion.style.display = "";
  }
}

/* =========================
   Render pregunta
========================= */
function obtenerRutaImagen(pregunta) {
  if (!pregunta || !pregunta.imagen) return null;
  return pregunta.imagen;
}

function cargarPregunta() {
  const pOriginal = preguntasActuales[indicePregunta];

  let p = pOriginal;
  if (config.mezclarRespuestas) {
    if (!pOriginal.__barajadas) {
      p = barajarOpcionesPregunta(pOriginal);
      preguntasActuales[indicePregunta] = p;
    }
  }

  document.getElementById("texto-pregunta").innerText = p.pregunta;
  document.getElementById("contador-pregunta").innerText =
    `Pregunta ${indicePregunta + 1}/${preguntasActuales.length}`;
  document.getElementById("puntuacion").innerText = `Aciertos: ${aciertos}`;

  const imagenContainer = document.getElementById("imagen-pregunta");
  imagenContainer.innerHTML = "";

  const rutaImagen = obtenerRutaImagen(p);
  if (rutaImagen) {
    const img = document.createElement("img");
    img.src = rutaImagen;
    img.alt = `Imagen para la pregunta ${p.id}`;
    // Ocultar imagen si falla la carga
    img.onerror = () => { img.style.display = 'none'; };
    imagenContainer.appendChild(img);
  }

  actualizarProgreso();

  const contenedor = document.getElementById("opciones-container");
  contenedor.innerHTML = "";

  const feedback = document.getElementById("feedback");
  if (feedback) feedback.innerText = "";

  ocultarExplicacion();

  if (!esModoExamen(modo) && estadoPreguntas[indicePregunta]) {
    pintarOpcionesFinal(p);
    activarSiguiente(true);
    mostrarBotonExplicacion();
    if (feedback) feedback.innerText = "Pregunta completada ✅";
    return;
  }

  p.opciones.forEach((op, idx) => {
    const btn = document.createElement("button");
    btn.className = "btn-opcion";
    btn.innerText = op;

    if (esModoExamen(modo)) {
      btn.onclick = () => seleccionarOpcionExamen(idx);
    } else {
      btn.onclick = () => verificarRespuestaEstudio(idx, btn);
    }

    contenedor.appendChild(btn);
  });

  if (esModoExamen(modo)) {
    pintarSeleccionExamen();
    activarSiguiente(seleccionExamen[indicePregunta] !== null);
  } else {
    activarSiguiente(false);
  }

  cerrarNavegadorPreguntas();
}

function activarSiguiente(habilitar) {
  const btnSig = document.getElementById("btn-siguiente");
  if (btnSig) btnSig.disabled = !habilitar;
}

/* =========================
   Modo examen
========================= */
function seleccionarOpcionExamen(idx) {
  seleccionExamen[indicePregunta] = idx;
  pintarSeleccionExamen();
  activarSiguiente(true);
}

function pintarSeleccionExamen() {
  const botones = document.querySelectorAll(".btn-opcion");
  const sel = seleccionExamen[indicePregunta];

  botones.forEach((b, idx) => {
    b.classList.remove("seleccionada");
    if (sel !== null && idx === sel) b.classList.add("seleccionada");
  });
}

/* =========================
   Modo estudio
========================= */
function pintarOpcionesFinal(p) {
  const contenedor = document.getElementById("opciones-container");
  contenedor.innerHTML = "";

  p.opciones.forEach((op, idx) => {
    const btn = document.createElement("button");
    btn.className = "btn-opcion";
    btn.innerText = op;
    btn.disabled = true;

    if (idx === p.correcta) btn.classList.add("correcta");
    else btn.classList.add("incorrecta");

    contenedor.appendChild(btn);
  });
}

function verificarRespuestaEstudio(idxElegido, btnPulsado) {
  const p = preguntasActuales[indicePregunta];
  const botones = document.querySelectorAll(".btn-opcion");
  const feedback = document.getElementById("feedback");

  if (idxElegido === p.correcta) {
    botones.forEach((b, idx) => {
      b.disabled = true;
      if (idx === p.correcta) b.classList.add("correcta");
      else b.classList.add("incorrecta");
    });

    if (!estadoPreguntas[indicePregunta]) {
      estadoPreguntas[indicePregunta] = true;
      aciertos++;
    }

    document.getElementById("puntuacion").innerText = `Aciertos: ${aciertos}`;
    if (feedback) feedback.innerText = "¡Correcto! ✅";
    mostrarBotonExplicacion();
    activarSiguiente(true);
  } else {
    btnPulsado.classList.add("incorrecta");
    btnPulsado.disabled = true;
    mostrarBotonExplicacion();
    if (feedback) feedback.innerText = "Fallaste ❌ Sigue intentándolo";
  }
}

/* =========================
   Navegación
========================= */
function siguientePregunta() {
  if (esModoExamen(modo)) {
    const p = preguntasActuales[indicePregunta];
    const sel = seleccionExamen[indicePregunta];
    if (sel === null) return;

    const esCorrecta = sel === p.correcta;
    correctasExamen[indicePregunta] = esCorrecta;

    if (esCorrecta) {
      aciertos = correctasExamen.filter(v => v === true).length;
    }

    document.getElementById("puntuacion").innerText = `Aciertos: ${aciertos}`;
  }

  if (indicePregunta < preguntasActuales.length - 1) {
    indicePregunta++;
    cargarPregunta();
  } else {
    mostrarResultadoFinal();
  }
}

function preguntaAnterior() {
  if (esModoExamen(modo)) return;

  if (indicePregunta > 0) {
    indicePregunta--;
    cargarPregunta();
  } else {
    const feedback = document.getElementById("feedback");
    if (feedback) feedback.innerText = "Ya estás en la primera pregunta.";
  }
}

/* =========================
   Final + Repaso fallos
========================= */
function mostrarResultadoFinal() {
  document.getElementById("pantalla-test").classList.add("oculto");
  document.getElementById("pantalla-final").classList.remove("oculto");

  const total = preguntasActuales.length;
  const fallos = total - aciertos;

  document.getElementById("nota-final").innerText = `${aciertos} de ${total}`;

  const resumen = document.getElementById("resumen-final");
  if (resumen) {
    if (esModoExamen(modo)) resumen.innerText = `Fallos: ${fallos}`;
    else if (enRepasoFallos) resumen.innerText = `Repaso finalizado.`;
    else resumen.innerText = "";
  }

  const btnRepaso = document.getElementById("btn-repasar-fallos");
  if (btnRepaso) {
    if (esModoExamen(modo) && fallos > 0) btnRepaso.classList.remove("oculto");
    else btnRepaso.classList.add("oculto");
  }

  if (esModoExamen(modo)) {
    falladasExamen = [];
    for (let i = 0; i < total; i++) {
      if (correctasExamen[i] === false) {
        falladasExamen.push(preguntasActuales[i]);
      }
    }
  }
}

function repasarFallos() {
  if (!falladasExamen || falladasExamen.length === 0) return;

  modo = "estudio";
  enRepasoFallos = true;

  if (config.mezclarPreguntas) {
    preguntasActuales = mezclarArray(falladasExamen);
  } else {
    preguntasActuales = ordenarPorIdAsc(falladasExamen);
  }

  indicePregunta = 0;
  aciertos = 0;
  estadoPreguntas = new Array(preguntasActuales.length).fill(false);

  document.getElementById("pantalla-final").classList.add("oculto");
  document.getElementById("pantalla-test").classList.remove("oculto");

  aplicarUIsegunModo();
  cargarPregunta();
}

/* =========================
   Home + Progreso
========================= */
function volverAHome() {
  document.getElementById("pantalla-test").classList.add("oculto");
  document.getElementById("pantalla-final").classList.add("oculto");
  document.getElementById("pantalla-inicio").classList.remove("oculto");

  preguntasActuales = [];
  indicePregunta = 0;
  aciertos = 0;
  estadoPreguntas = [];

  seleccionExamen = [];
  correctasExamen = [];
  falladasExamen = [];

  asignaturaSeleccionada = null;
  modo = "estudio";
  enRepasoFallos = false;

  const btnAtras = document.getElementById("btn-atras");
  const navGrid = document.getElementById("nav-grid-bottom");
  const feedback = document.getElementById("feedback");
  const btnExplicacion = document.getElementById("btn-explicacion");
  const boxExplicacion = document.getElementById("explicacion-box");

  if (btnAtras) btnAtras.style.display = "";
  if (navGrid) navGrid.style.display = "";
  if (feedback) feedback.style.display = "";
  if (btnExplicacion) btnExplicacion.style.display = "";
  if (boxExplicacion) boxExplicacion.style.display = "";

  ocultarExplicacion();
  cerrarNavegadorPreguntas();

  const sel = document.getElementById("selector-modo");
  if (sel) sel.classList.add("oculto");

  resaltarAsignaturaSeleccionada(null);
}

function actualizarProgreso() {
  const total = preguntasActuales.length || 1;
  const actual = indicePregunta + 1;
  const pct = Math.round((actual / total) * 100);

  document.getElementById("progreso-fill").style.width = pct + "%";
  document.getElementById("progreso-texto").innerText = pct + "%";
}

/* =========================
   GRID
========================= */
function abrirNavegadorPreguntas() {
  if (esModoExamen(modo)) return;
  if (!preguntasActuales || preguntasActuales.length === 0) return;

  const overlay = document.getElementById("grid-overlay");
  const grid = document.getElementById("grid-container");
  grid.innerHTML = "";

  for (let i = 0; i <= indicePregunta; i++) {
    const btn = document.createElement("button");
    btn.className = "grid-item " + (estadoPreguntas[i] ? "grid-ok" : "grid-pending");
    btn.innerText = (i + 1).toString();

    btn.onclick = () => {
      indicePregunta = i;
      cerrarNavegadorPreguntas();
      cargarPregunta();
    };

    grid.appendChild(btn);
  }

  overlay.classList.remove("oculto");
}

function cerrarNavegadorPreguntas() {
  const overlay = document.getElementById("grid-overlay");
  if (overlay) overlay.classList.add("oculto");
}

document.addEventListener("click", (e) => {
  const overlayGrid = document.getElementById("grid-overlay");
  if (overlayGrid && !overlayGrid.classList.contains("oculto") && e.target === overlayGrid) {
    cerrarNavegadorPreguntas();
  }
});
