'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cd3a09e96a83dfec1c16707f1a699135",
"version.json": "74f5527edb3685c03b1b37a13986660b",
"index.html": "171d8172414e0f95af7329050d677456",
"/": "171d8172414e0f95af7329050d677456",
"CNAME": "bf4ac5c4d6cdf05b5bd8f8f48927d36d",
"main.dart.js": "8114d82444618d062df6737e56b11b91",
"404.html": "171d8172414e0f95af7329050d677456",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/app_launcher_icon.png": "619a03389b9e06ab8eee6d43dc6a94f0",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/ORIG_HEAD": "4965289fb1c46e0d7055ce71d1141bbc",
".git/config": "0876336e7f5b88db88e0c2b2b901cb93",
".git/objects/95/bbbaa732d9c51bfd098d9e866f4602b73ff6cf": "885926287a3ea569074032413e1bc132",
".git/objects/95/8b09b239241d02278ba974435be273ba6f4e65": "b39bcbad96641f0bdb1b75d4af070777",
".git/objects/35/c17aca7bfa7ab5de82a23c3ead626fe1780258": "0ddf11a7201340df066f82552e29a64a",
".git/objects/35/706baf3a361570bddf7d50bb2179b4febb141f": "db4ae10cbdff4d57c9496c3f0bcde28d",
".git/objects/58/e5294c5399495d4d826e32164e91c84179988f": "fb96a89892047fbcfd78190b44c4ee13",
".git/objects/67/01300ab49d909eab613a1972a1324d0478bcde": "cd8221377ebd794967a97c306afec5d7",
".git/objects/0b/d0adca6c57cef59b4704798ec9064038c43c34": "1d6a032f31699a6271d77bf667ae8bc2",
".git/objects/c7/d38c27b2a884dce635eaab7f64aaedb499cf30": "6e3ed2e82bd2359249545c475e9a2f0b",
".git/objects/e3/b393617f562bc13bed4d1c17c269162f38c97e": "23a7f80996ee5e9cb1c1fafe63650a5a",
".git/objects/cf/00ec6a9bdc51c3fd8c22356c31ab3d5caa3f41": "e39b4f84f17d500794f4b5f7cc73e33b",
".git/objects/fb/c7dfb14e83d560ad406227a59f32e64c9e983d": "40fe571fb097639a4ee2080951c97b8b",
".git/objects/ec/d05c08e4a3d95ee7d497d4ff44a4b23c76aa74": "f545adf13289923bab7b468d791cc486",
".git/objects/pack/pack-70986ec9b9fdc18205c30f5f30e9bf45dc763e0a.idx": "5f778f7f280d096d9fac68a1bbef627d",
".git/objects/pack/pack-70986ec9b9fdc18205c30f5f30e9bf45dc763e0a.rev": "60bbb88ef62361928b2a6dc5c859a663",
".git/objects/pack/pack-70986ec9b9fdc18205c30f5f30e9bf45dc763e0a.pack": "2354402359d4b771c089e94648bc2b7c",
".git/objects/29/12b3620082bc8dd995808b83668ca2074f7eba": "b24f5ebe8fb09f7f0a8299e51a0e06b5",
".git/objects/29/9fe737438086125663c65859ea16070fc3da96": "abe484769455efd1d4045ed0520c4c91",
".git/objects/1f/c12c2be977f8ec719f36ed395c4020ccbaf9bc": "bb05558750b70ab52a8613637b92d4f9",
".git/objects/7e/e9877bb71ad7556492e4358ade0e8bab66a33e": "5d4d650dbbbefd9e4733648d822f1ea9",
".git/objects/88/5f99f84ba5b9dc6b0cd19503c8ae9b1cc1f53a": "7793302ce3395c9510e9d30a4fe898b9",
".git/objects/31/629c02c57bd1a111e55368d2cf79be0e21b637": "53e544520eb9e5bd7511a6382015d350",
".git/objects/3a/0729f06860f3535dee8b29129347bcbff24269": "5b3de948a70b0487c8d9048cf7777be5",
".git/objects/98/4affd8abfee8d5b25b7777383f40f8729a34d2": "955a8bbf688c4a3ee3f87247b04d7ed5",
".git/objects/6d/fd924131b9c48c8d42ad7f93c265ad11326fdb": "805b43976d3e57ed77d35cbc56a305c5",
".git/objects/01/c5e0d38e402e82a12b4dee128ff2d57e3aebf4": "b60c103a0a8f1abf19f4643d8c5bc57c",
".git/objects/06/02094bfa243ec61b6c2a66b05be19fc1a66461": "062328c2df37dc97f7edeed911df2391",
".git/objects/39/d1e9344970f485165d9f3586017b1623b015a7": "f9ae3fdedc2b8984a5758a32ab74959f",
".git/objects/55/7eca5a84015ae4c0a5ed989684234afcd4624c": "55559944081d354d1247d1c5c4829ce1",
".git/objects/97/b7cba83753c300e7607c2be133f4d3a395387e": "617db61c398d49e419d013b09bf94048",
".git/objects/b6/802aa48936a2eb8b4e4d806799ba8da7e0449b": "528f5b541f0447eaf7f01dcb8ff6f61e",
".git/objects/f9/505d71b39941ec1fdffbc986a2f6606001205f": "8d30d76839c03fc557a9f4bf813c94ac",
".git/objects/cb/910417887fa6e579632fc139b0e5bdf9ac02d8": "6dd512e0e4a31ba6fd35f1041505e56d",
".git/objects/f8/86054686b1ac20b5e7d44dbf19fd7521151c5e": "888323f47a8a20e1dbf3c15b6d8353f7",
".git/objects/71/061ee851e8ddeb7aaa88590af212097201eec2": "68d6cf16ecf3a4aa66c9bea4efc46a94",
".git/objects/7f/524309ee192c1348c0812fc12e84209e2338d9": "64045f834354a801739fb755c8e46b6d",
".git/objects/7f/1ba7f1761251b81afed102ee9932674518426b": "fce058ae62a313d92b1f89e0592d4984",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/fork-settings": "e582b7047bc2495ae3035f56b87b61f9",
".git/logs/HEAD": "d5971687b3eb374528e5abcc4c615eb2",
".git/logs/refs/heads/develop": "b9baa46f7c33f00a0b75ec7da6895c9e",
".git/logs/refs/heads/main": "02b57f7e412bd4363b48a4310ef1895a",
".git/logs/refs/remotes/origin/develop": "ffaec7553c4e16840e2ff8201bace3c0",
".git/logs/refs/remotes/origin/HEAD": "f6d7f5623b9b7b38e5f523ea150303fd",
".git/logs/refs/remotes/origin/main": "934204af37ec208b8da55aa9beaefdef",
".git/refs/heads/develop": "0c77b770c4accc1bb38ea48e87e3bd21",
".git/refs/heads/main": "a22eb0a48a4b123029cb25db78f30c69",
".git/refs/remotes/origin/develop": "0c77b770c4accc1bb38ea48e87e3bd21",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a22eb0a48a4b123029cb25db78f30c69",
".git/index": "789a8fbfe84a240b860f910c48dbba00",
".git/packed-refs": "c0b5485b64b45e8a4b9ab5edd973c53b",
".git/COMMIT_EDITMSG": "34978df5345b6086c6b59a5485415f17",
".git/FETCH_HEAD": "6c05149e8487680a58760cc54a65ef9f",
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
