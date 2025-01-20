'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "04251941132ba5289c4bd173502087b2",
"assets/AssetManifest.bin.json": "770e0a2993bf41e861ffca10f475a0d8",
"assets/AssetManifest.json": "5e88f4403b58a9b6ee027a07d503c2f6",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/images/Andre-Gianfratti-CV.pdf": "1ca2c05eff3c24d8716e3920a3bc465b",
"assets/assets/images/andre_profile_pic.jpg": "6cf250c7a564d3d7be5909768815ec61",
"assets/assets/images/certification1.png": "36f173db0621287198df46ab45cc5aca",
"assets/assets/images/certification2.jpg": "cdb977a08b7ebbcfa4b13005ad286770",
"assets/assets/images/certification3.png": "806769e672b3bead352194f1b63c801a",
"assets/assets/images/certification4.png": "04e9c90565c4587250135fd9a7ac6863",
"assets/assets/images/certification5.png": "71528c8ba7b9b3c5182c67c94b83700f",
"assets/assets/images/certification6.png": "9262a8dbe8ef6a1fefaab36568e9c0db",
"assets/assets/images/circle.png": "663d5187ada8666bfa87120d1665605f",
"assets/assets/images/dev2.png": "32f717d39703bed3f532bff2df157b7f",
"assets/assets/images/down-arrow-2.png": "de203dedb01f2871b4ebbec490c20a6c",
"assets/assets/images/down-arrow.png": "4393cd5feeb20fb468c7eb223d1bbd06",
"assets/assets/images/ios-down-arrow.png": "fa4679d2972f1d11355142a60ed34ede",
"assets/assets/images/projects/calculator/img1.jpg": "f5f6194d5f5f7151d9ff6e58b2efd123",
"assets/assets/images/projects/chat/img1.jpg": "82e1040ce2dc7a45154784865c452d0d",
"assets/assets/images/projects/chat/img2.jpg": "330cbcd208ed5689fb570b457c0b8fb3",
"assets/assets/images/projects/chat/img3.png": "ee4ded842bca64e4228f43be42970c0c",
"assets/assets/images/projects/chat/img4.jpg": "5774c464f82f70fc86e7c690446d418e",
"assets/assets/images/projects/chat/img5.jpg": "81a7333c0c0fbb0825ba8c53cb83a92a",
"assets/assets/images/projects/chat/img6.jpg": "67d891b0aa79b0db247e16619eef123d",
"assets/assets/images/projects/chat/img7.jpg": "13d30d17d0b0a8a0abbf35bb0f7ccda2",
"assets/assets/images/projects/expenses/img1.jpg": "309e1fbf8d066d426ed74c5534334b3e",
"assets/assets/images/projects/expenses/img2.jpg": "4cf85b6a8f0bdf04f660636b820c5806",
"assets/assets/images/projects/great_places/img1.jpg": "46355a551e806fb145ea3c6fac885214",
"assets/assets/images/projects/great_places/img2.jpg": "470f5d7710da27f7fad234aa4c38946b",
"assets/assets/images/projects/great_places/img3.jpg": "9086c120f42df48eeb8adbf0508bfd3f",
"assets/assets/images/projects/great_places/img4.jpg": "48d519b85a02838f895867b6d2b485b1",
"assets/assets/images/projects/great_places/img5.jpg": "12c2dfaf3d5641d2fbd6a379ab1203bc",
"assets/assets/images/projects/meal/img1.jpg": "b1a9712ff50f2511057dbc5b99b98c2f",
"assets/assets/images/projects/meal/img2.jpg": "9afbaa3a8fdc491be94ae5273201ce5c",
"assets/assets/images/projects/meal/img3.jpg": "1f3060aa9a4e3236eba5a4b6d4c60b48",
"assets/assets/images/projects/meal/img4.jpg": "bd953c52917cacabaddd6d31e271c0b9",
"assets/assets/images/projects/minefield/img1.jpg": "75f76e8e01e6b84e4ece797ac37b7371",
"assets/assets/images/projects/pomodoro/img1.jpg": "85674b60b20706bebdfbb587f98ab0de",
"assets/assets/images/projects/pomodoro/img2.jpg": "857e3659fa4e679e5208974851c81c1e",
"assets/assets/images/projects/shop/img1.jpg": "ffc7b36af5c60118095993f89c3c7f1e",
"assets/assets/images/projects/shop/img2.jpg": "2b5bf7633db947d9f0c5f1629b99c9a6",
"assets/assets/images/projects/shop/img3.jpg": "f76eda0e90ca356bea0a698729592975",
"assets/assets/images/projects/shop/img4.jpg": "683f141e74ea9398f4b2d2a15edb5caa",
"assets/assets/images/projects/shop/img5.jpg": "20759535dc20b49a3f4070e652688c6a",
"assets/assets/images/projects/shop/img6.jpg": "c5774302c8190771fe52745a562193e6",
"assets/assets/images/projects/shop/img7.jpg": "b499ff829503572498ea04546233e8c3",
"assets/assets/images/projects/shop/img8.jpg": "8987f1361fdf48a3a2314ccdbe42a119",
"assets/assets/images/projects/weather/img1.jpg": "273a9bd308e7e530097bbd3434628a56",
"assets/assets/images/projects/weather/img2.jpg": "87180abc035990d951c9061c7566a6a7",
"assets/assets/images/projects/weather/img3.jpg": "5d8ff05930a896dbac3630969c07d624",
"assets/assets/images/projects/weather/img4.jpg": "6ecf8bde20544d7ac7f2131f884033c6",
"assets/assets/images/projects/weather/img5.jpg": "8e4b735344690653193027f4e5765646",
"assets/assets/images/right-arrow.png": "62a7bab73a0fe40acd3f4555adfcab91",
"assets/assets/images/up-arrow.png": "d0c6457f5704962b99f0e6aa3e9b18e7",
"assets/assets/images/works.png": "5c6f8eb3a22f703781aad6c2528cf0cd",
"assets/assets/screenshots/0.jpg": "d7a4be69fcea5718ce8fdaa844ce0988",
"assets/assets/screenshots/1.jpg": "396c571e13c03fa3ddd14f13c601b8ad",
"assets/assets/screenshots/10.jpg": "ee1b6eee2d5df5a5bfdcb686266b75a0",
"assets/assets/screenshots/11.jpg": "865a19485fc0879161062afd25ce23bf",
"assets/assets/screenshots/2.jpg": "e16664ace87aa12b2266e6f8127ca05f",
"assets/assets/screenshots/3.gif": "045c76d00225ca68992c0dfdeca8d667",
"assets/assets/screenshots/4.jpg": "f114c609432d9115658f5477900f66a7",
"assets/assets/screenshots/5.gif": "63b922b2439e4b9d8c82cb0d70d49b29",
"assets/assets/screenshots/6.gif": "73e6970dd99c11e67c4ef508b6375487",
"assets/assets/screenshots/7.jpg": "2a56579d6ae3958c6ef6e14285d436dd",
"assets/assets/screenshots/8.jpg": "95799f71c9817f376085c3898b75d287",
"assets/assets/screenshots/9.jpg": "e727c315acf66548049c51eb6c6bbc9e",
"assets/FontManifest.json": "a78f950d25c1e29b92a4a309465e60cd",
"assets/fonts/MaterialIcons-Regular.otf": "b1654b0dbb0ad1d5e3569acb985ef4aa",
"assets/NOTICES": "3dd95983df68372949ac94f607047f10",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "27cfa127617ce10593433c073c1c3a58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "f9e67278086a4962bab5b5958c7f25a0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "00dc748ea31df3074f00af8326bae3bb",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "333dd9a74ceedb6ad6a0cebdd7b5a0d5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3437cf2a44d247c5e350a6ccdca33ecf",
"/": "3437cf2a44d247c5e350a6ccdca33ecf",
"main.dart.js": "09f99c53081334f0e0d5fba3cca38ac8",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
