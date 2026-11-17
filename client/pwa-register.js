(() => {
  "use strict";
  window.__worldOfflinePwaReady = Promise.resolve(false);
  window.__worldOfflineInstallPrompt = null;

  // Android serves every resource directly from assets. A browser service
  // worker has its own fetch path and must not take over this virtual origin.
  if (window.worldolAndroidOffline) {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        for (const registration of registrations) void registration.unregister();
      }).catch(() => {});
    }
    return;
  }

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    window.__worldOfflineInstallPrompt = event;
    window.dispatchEvent(new Event("worldofflineinstallavailable"));
  });
  window.addEventListener("appinstalled", () => {
    window.__worldOfflineInstallPrompt = null;
    window.dispatchEvent(new Event("worldofflineappinstalled"));
  });

  if (!("serviceWorker" in navigator)) return;
  const script = new URL("../worldoffline-sw.js", document.currentScript.src);
  const scope = new URL("../", document.currentScript.src).pathname;
  const controllerReady = navigator.serviceWorker.register(script.href, { scope, updateViaCache: "none" })
    .then(async registration => {
      const target = registration.installing || registration.waiting || registration.active;
      await navigator.serviceWorker.ready;
      return new Promise(resolve => {
        let timer;
        const finish = () => {
          if (!navigator.serviceWorker.controller || target && navigator.serviceWorker.controller !== target) return;
          clearTimeout(timer);
          navigator.serviceWorker.removeEventListener("controllerchange", finish);
          target?.removeEventListener("statechange", finish);
          resolve(true);
        };
        navigator.serviceWorker.addEventListener("controllerchange", finish);
        target?.addEventListener("statechange", finish);
        timer = setTimeout(() => {
          navigator.serviceWorker.removeEventListener("controllerchange", finish);
          target?.removeEventListener("statechange", finish);
          resolve(false);
        }, 15000);
        finish();
      });
    })
    .catch(error => {
      console.warn("[worldoffline-pwa] Service Worker unavailable", error);
      return false;
    });
  let controllerTimeout;
  window.__worldOfflinePwaReady = Promise.race([
    controllerReady,
    new Promise(resolve => { controllerTimeout = setTimeout(() => resolve(false), 20000); })
  ]).finally(() => clearTimeout(controllerTimeout));
})();
