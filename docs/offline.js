(function () {
  if (typeof document === "undefined") return;
  const label = document.getElementById("offline-status");
  const action = document.getElementById("offline-action");
  const notice = document.getElementById("offline-notice");
  if (!label || !action || !notice) return;
  const native = !!window.Capacitor?.isNativePlatform();
  const supported = "serviceWorker" in navigator && window.isSecureContext;
  const watched = new WeakSet();
  let registration;
  let applying = false;
  let checking = false;
  function show(message = "", button, handler) {
    notice.hidden = !message && !button;
    label.textContent = message;
    action.hidden = !button;
    action.textContent = button || "";
    action.onclick = handler || null;
  }
  function status() {
    if (!navigator.onLine) {
      show(native || registration?.active
        ? "Sin conexión · Puedes seguir estudiando"
        : "Sin conexión · Conéctate para completar la descarga de la app");
    } else if (registration?.waiting) {
      show("Hay una actualización lista.", "Actualizar app", () => {
        if (!registration.waiting) return;
        if (typeof guardarSesionActiva === "function" && typeof sesionFinalizadaRegistrada !== "undefined" && !sesionFinalizadaRegistrada) guardarSesionActiva();
        applying = true;
        registration.waiting.postMessage("ACTIVATE_UPDATE");
      });
    } else {
      // Con internet no mostramos avisos permanentes de conexión o descarga.
      show();
    }
  }
  function watch(worker) {
    if (!worker || watched.has(worker)) return;
    watched.add(worker);
    worker.addEventListener("statechange", status);
  }
  function watchRegistration() {
    registration.addEventListener("updatefound", () => watch(registration.installing));
    watch(registration.installing);
  }
  async function checkUpdate() {
    if (native || !supported || checking || !navigator.onLine) return;
    checking = true;
    try {
      if (!registration) {
        registration = await navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" });
        watchRegistration();
      } else {
        // Reintenta una instalación fallida al recuperar red o volver a la app.
        await registration.update();
        watch(registration.installing);
      }
      navigator.serviceWorker.ready.then(status);
    } catch (error) {
      console.warn("No se pudo comprobar la actualización offline:", error);
    } finally {
      checking = false;
      status();
    }
  }
  window.addEventListener("online", () => { status(); checkUpdate(); });
  window.addEventListener("offline", status);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") { status(); checkUpdate(); }
  });
  if (!native && supported) {
    navigator.serviceWorker.addEventListener("controllerchange", () => applying ? location.reload() : status());
    // Reconoce la copia instalada incluso cuando se arranca sin red.
    navigator.serviceWorker.getRegistration().then(current => {
      registration = current;
      if (registration) watchRegistration();
      status();
      checkUpdate();
    }).catch(() => checkUpdate());
  }
  status();
})();
