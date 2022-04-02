async function precache () {
    const cache = await caches.open(VERSION);
    return cache.addAll(
        [
            '/',
            '/index.html',
            '/src/index.mjs',
            '/src/MediaPlayer.js',
            '/src/plugins/AutoPlay.mjs',
            '/src/plugins/AutoPause.js',
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
    if (response.status === 206) console.info('Partial answer, won\'t be update cache...');
    if (response.status !== 206)  {
        const returnCache = await cache.put(request, response);
        return returnCache;
    }
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