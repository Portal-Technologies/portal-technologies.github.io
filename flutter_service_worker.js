'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cd3a09e96a83dfec1c16707f1a699135",
"version.json": "74f5527edb3685c03b1b37a13986660b",
"index.html": "171d8172414e0f95af7329050d677456",
"/": "171d8172414e0f95af7329050d677456",
"CNAME": "bf4ac5c4d6cdf05b5bd8f8f48927d36d",
"main.dart.js": "13acd597c131878d51a9b7a095ad0273",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/app_launcher_icon.png": "619a03389b9e06ab8eee6d43dc6a94f0",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/ORIG_HEAD": "37a32a51640ea532f89e00bea3e5892a",
".git/config": "0876336e7f5b88db88e0c2b2b901cb93",
".git/objects/95/bbbaa732d9c51bfd098d9e866f4602b73ff6cf": "885926287a3ea569074032413e1bc132",
".git/objects/95/8b09b239241d02278ba974435be273ba6f4e65": "b39bcbad96641f0bdb1b75d4af070777",
".git/objects/35/706baf3a361570bddf7d50bb2179b4febb141f": "db4ae10cbdff4d57c9496c3f0bcde28d",
".git/objects/58/e5294c5399495d4d826e32164e91c84179988f": "fb96a89892047fbcfd78190b44c4ee13",
".git/objects/0b/d0adca6c57cef59b4704798ec9064038c43c34": "1d6a032f31699a6271d77bf667ae8bc2",
".git/objects/c7/d38c27b2a884dce635eaab7f64aaedb499cf30": "6e3ed2e82bd2359249545c475e9a2f0b",
".git/objects/e3/b393617f562bc13bed4d1c17c269162f38c97e": "23a7f80996ee5e9cb1c1fafe63650a5a",
".git/objects/ec/d05c08e4a3d95ee7d497d4ff44a4b23c76aa74": "f545adf13289923bab7b468d791cc486",
".git/objects/pack/pack-70986ec9b9fdc18205c30f5f30e9bf45dc763e0a.idx": "5f778f7f280d096d9fac68a1bbef627d",
".git/objects/pack/pack-70986ec9b9fdc18205c30f5f30e9bf45dc763e0a.rev": "60bbb88ef62361928b2a6dc5c859a663",
".git/objects/pack/pack-70986ec9b9fdc18205c30f5f30e9bf45dc763e0a.pack": "2354402359d4b771c089e94648bc2b7c",
".git/objects/29/9fe737438086125663c65859ea16070fc3da96": "abe484769455efd1d4045ed0520c4c91",
".git/objects/1f/c12c2be977f8ec719f36ed395c4020ccbaf9bc": "bb05558750b70ab52a8613637b92d4f9",
".git/objects/88/5f99f84ba5b9dc6b0cd19503c8ae9b1cc1f53a": "7793302ce3395c9510e9d30a4fe898b9",
".git/objects/31/629c02c57bd1a111e55368d2cf79be0e21b637": "53e544520eb9e5bd7511a6382015d350",
".git/objects/98/4affd8abfee8d5b25b7777383f40f8729a34d2": "955a8bbf688c4a3ee3f87247b04d7ed5",
".git/objects/39/d1e9344970f485165d9f3586017b1623b015a7": "f9ae3fdedc2b8984a5758a32ab74959f",
".git/objects/cb/910417887fa6e579632fc139b0e5bdf9ac02d8": "6dd512e0e4a31ba6fd35f1041505e56d",
".git/objects/71/061ee851e8ddeb7aaa88590af212097201eec2": "68d6cf16ecf3a4aa66c9bea4efc46a94",
".git/HEAD": "cdc6e77564d392632d1d3162ecd18e1f",
".git/fork-settings": "4b5233741d1e005efe75dd501dc6ab75",
".git/logs/HEAD": "0d299a491f5da37c20c5c44c5b46347c",
".git/logs/refs/heads/develop": "5fc5a0914a46a8bb0f7263ce2c04f4f8",
".git/logs/refs/heads/main": "d066aa0a9a1edc8cb404a90a20ea172d",
".git/logs/refs/remotes/origin/develop": "8dcde9dd27cfd28129c8862aa8d6925d",
".git/logs/refs/remotes/origin/HEAD": "f6d7f5623b9b7b38e5f523ea150303fd",
".git/logs/refs/remotes/origin/main": "c86d3be697ff6a1eb4c6c012b994ccea",
".git/refs/heads/develop": "c01618db1132a87aa3d8e637f4c78a20",
".git/refs/heads/main": "c01618db1132a87aa3d8e637f4c78a20",
".git/refs/remotes/origin/develop": "c01618db1132a87aa3d8e637f4c78a20",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c01618db1132a87aa3d8e637f4c78a20",
".git/index": "a677e08658e1de2b8630728513173fd9",
".git/packed-refs": "c0b5485b64b45e8a4b9ab5edd973c53b",
".git/COMMIT_EDITMSG": "3e3d5ef8b42bfe192645e3f63fd61a92",
".git/FETCH_HEAD": "d2004286e0c45cf028fbb14cc4d77108",
"assets/AssetManifest.json": "df09c3ba57105661596261169acc284b",
"assets/NOTICES": "8169f477b47f98f5303aec2492a3cf76",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "8c35e7531e4f5c4bb106d553f0a0d503",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "facb6577b03d4132867974c5e22beab8",
"assets/fonts/MaterialIcons-Regular.otf": "e3e4c8661deb902b1cfe7e3af3a21aee",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/vr_coin.png": "e320cd4643935e4c1cb3449361aa9712",
"assets/assets/images/portalvr_image.png": "619a03389b9e06ab8eee6d43dc6a94f0",
"assets/assets/images/app_launcher_icon.png": "619a03389b9e06ab8eee6d43dc6a94f0",
"assets/assets/images/background_image.jpg": "25ed04fa9b13368af614943be8d81d49",
"assets/assets/images/avatar.png": "93a3d1667d83eb0427ff96e5b274564f",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
