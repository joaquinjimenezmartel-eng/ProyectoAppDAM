(function () {
  if (typeof document === "undefined") return;
  const label = document.getElementById("offline-status");
  const action = document.getElementById("offline-action");
  let registration;
  let applying = false;
  function show(message, button, handler) {
    label.textContent = message;
    action.hidden = !button;
    action.textContent = button || "";
    action.onclick = handler || null;
  }
  function status() {
    if (registration?.waiting) {
      show("Hay una actualización lista.", "Actualizar app", () => {
        if (typeof guardarSesionActiva === "function" && typeof sesionFinalizadaRegistrada !== "undefined" && !sesionFinalizadaRegistrada) guardarSesionActiva();
        applying = true;
        registration.waiting.postMessage("ACTIVATE_UPDATE");
      });
    } else if (registration?.active) {
      show(navigator.onLine ? "Lista para estudiar sin conexión · Todas las asignaturas" : "Sin conexión · Puedes seguir estudiando");
    }
  }
  async function register() {
    try {
      registration = await navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" });
      function watch(worker) {
        if (!worker) return;
        worker.addEventListener("statechange", () => {
          if (worker.state === "redundant") show("No se ha completado la descarga sin conexión.", "Reintentar", register);
          else status();
        });
      }
      watch(registration.installing);
      registration.addEventListener("updatefound", () => watch(registration.installing));
      status();
      navigator.serviceWorker.ready.then(status);
    } catch (_) {
      show("No se pudo preparar el modo sin conexión. Conéctate e inténtalo de nuevo.", "Reintentar", register);
    }
  }
  if (window.Capacitor?.isNativePlatform()) {
    show("Contenido disponible sin conexión");
  } else if (!("serviceWorker" in navigator) || !window.isSecureContext) {
    show("El modo sin conexión necesita un navegador compatible y una dirección HTTPS.");
  } else {
    navigator.serviceWorker.addEventListener("controllerchange", () => applying ? location.reload() : status());
    window.addEventListener("online", () => { status(); registration?.update().catch(() => {}); });
    window.addEventListener("offline", status);
    register();
  }
})();
