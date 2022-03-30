async function precache () {
    const cache = await caches.open(VERSION);
    return cache.addAll(
        [
            '/',
            '/index.html',
            '/src/index.mjs',
            '/src/MediaPlayer.mjs',
            '/src/plugins/AutoPlay.mjs',
            '/src/plugins/AutoPause.mjs',
            '/styles/index.css',
            '/assets/BigBuckBunny.mp4',
        ]
    );
}

async function cachedResponse (request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache (request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}

self.addEventListener('install',
    event => {
        event.waitUntil(precache());
    }
);

self.addEventListener('fetch',
    event => {
        const request = event.request;

        // get
        if (request.method !== 'GET') return;

        // buscar en cache
        event.respondWith(cachedResponse(request));

        // actualizar el cache
        event.waitUntil(updateCache(request));
    }
);

const VERSION = 'v1';