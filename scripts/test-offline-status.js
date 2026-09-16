const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const code = fs.readFileSync(path.resolve(__dirname, "../www/offline.js"), "utf8");
const tick = () => new Promise(resolve => setImmediate(resolve));

async function scenario({ online = true, active = true, waiting = false, native = false, supported = true, failure = false } = {}) {
  const nodes = Object.fromEntries(["offline-status", "offline-action", "offline-notice"].map(id => [id, { hidden: true }]));
  const events = {}, docEvents = {}, workerEvents = {}, registrationEvents = {}, installEvents = {};
  const calls = { save: 0, reload: 0, update: 0, register: 0, activate: 0 };
  const worker = { addEventListener: (name, fn) => installEvents[name] = fn };
  const registration = {
    active: active ? {} : null,
    waiting: waiting ? { postMessage: message => { assert.equal(message, "ACTIVATE_UPDATE"); calls.activate++; } } : null,
    installing: worker,
    addEventListener: (name, fn) => registrationEvents[name] = fn,
    update: async () => { calls.update++; if (failure) throw new Error("network failure"); }
  };
  const serviceWorker = {
    getRegistration: async () => active ? registration : undefined,
    register: async () => { calls.register++; if (failure) throw new Error("network failure"); return registration; },
    ready: new Promise(() => {}),
    addEventListener: (name, fn) => workerEvents[name] = fn
  };
  const context = {
    console: { warn() {} },
    window: { isSecureContext: supported, Capacitor: { isNativePlatform: () => native }, addEventListener: (name, fn) => events[name] = fn },
    document: { visibilityState: "visible", getElementById: id => nodes[id], addEventListener: (name, fn) => docEvents[name] = fn },
    navigator: { onLine: online, serviceWorker },
    location: { reload: () => calls.reload++ },
    guardarSesionActiva: () => calls.save++, sesionFinalizadaRegistrada: false
  };
  vm.runInNewContext(code, context);
  await tick();
  return { nodes, context, events, docEvents, workerEvents, registration, installEvents, calls };
}

(async () => {
  const connected = await scenario();
  assert.equal(connected.nodes["offline-notice"].hidden, true);
  connected.context.navigator.onLine = false;
  connected.events.offline();
  assert.equal(connected.nodes["offline-notice"].hidden, false);
  assert.match(connected.nodes["offline-status"].textContent, /Puedes seguir estudiando/);
  connected.context.navigator.onLine = true;
  connected.events.online();
  await tick();
  assert.equal(connected.nodes["offline-notice"].hidden, true);
  const before = connected.calls.update;
  connected.docEvents.visibilitychange();
  await tick();
  assert.equal(connected.calls.update, before + 1);

  const update = await scenario({ waiting: true });
  assert.equal(update.nodes["offline-action"].hidden, false);
  assert.equal(update.calls.reload, 0);
  update.nodes["offline-action"].onclick();
  assert.equal(update.calls.save, 1);
  assert.equal(update.calls.activate, 1);
  update.workerEvents.controllerchange();
  assert.equal(update.calls.reload, 1);

  const download = await scenario({ active: false });
  assert.equal(download.calls.register, 1);
  assert.equal(download.nodes["offline-notice"].hidden, true);
  download.registration.waiting = { postMessage() {} };
  download.installEvents.statechange();
  assert.equal(download.nodes["offline-action"].hidden, false);
  download.registration.waiting = null;
  download.registration.active = {};
  download.workerEvents.controllerchange();
  assert.equal(download.nodes["offline-notice"].hidden, true);
  assert.equal(download.calls.reload, 0);

  const failed = await scenario({ active: false, failure: true });
  assert.equal(failed.nodes["offline-notice"].hidden, true);
  failed.context.navigator.onLine = false;
  failed.events.offline();
  assert.match(failed.nodes["offline-status"].textContent, /completar la descarga/);
  failed.context.navigator.onLine = true;
  failed.events.online();
  await tick();
  assert.equal(failed.calls.register, 2);

  for (const options of [{ native: true }, { supported: false }]) {
    const fallback = await scenario(options);
    assert.equal(fallback.nodes["offline-notice"].hidden, true);
    fallback.context.navigator.onLine = false;
    fallback.events.offline();
    assert.equal(fallback.nodes["offline-notice"].hidden, false);
  }
  const offline = await scenario({ online: false });
  assert.match(offline.nodes["offline-status"].textContent, /Puedes seguir estudiando/);
  assert.equal(offline.calls.update, 0);
  console.log("Aviso offline: oculto con red, visible sin red, actualización voluntaria y reintento comprobados.");
})().catch(error => { console.error(error); process.exitCode = 1; });
